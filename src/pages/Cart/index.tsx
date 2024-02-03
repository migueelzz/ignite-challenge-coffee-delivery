import { coffees } from '../../../data.json'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Fragment, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import { Radio } from '../../components/Form/Radio'
import { TextInput } from '../../components/Form/TextInput'
import { QuantityInput } from '../../components/Form/QuantityInput'

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react'

import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartContainer,
  InfoContainer,
  PaymentHeading,
  PaymentOptions,
  PaymentSummary,
  CardCoffee,
  CoffeeInfo,
  CartTotal,
  CartTotalInfo,
  CheckoutButton,
  PaymentErrorMessage,
} from './styles'

interface newOrderFormData {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrderFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe o nome da rua'),
  number: zod.string().min(1, 'Informe o CEP'),
  neighborhood: zod.string().min(1, 'Informe o nome do bairro'),
  city: zod.string().min(1, 'Informe o nome da cidade'),
  state: zod.string().min(1, 'Informe o UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = zod.infer<typeof newOrderFormValidationSchema>

const shippingPrice = 3.5

export function Cart() {
  const {
    cart,
    checkout,
    removeItem,
    decrementItemQuantity,
    incrementItemQuantity,
  } = useContext(CartContext)

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('Invalid coffee.')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalPriceItems = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<newOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const handleNewOrderForm: SubmitHandler<newOrderFormData> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }
    checkout(data)
  }

  function handleRemoveItemCart(itemId: string) {
    removeItem(itemId)
  }

  return (
    <CartContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleNewOrderForm)}>
          <AddressContainer>
            <AddressHeading>
              <MapPinLine size={22} />

              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber o seu pedido</p>
              </div>
            </AddressHeading>

            <AddressForm>
              <TextInput
                type="number"
                placeholder="CEP"
                containerProps={{
                  style: { gridArea: 'cep' },
                }}
                {...register('cep', { valueAsNumber: true })}
                error={errors.cep}
              />

              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                {...register('street')}
                error={errors.street}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                {...register('number')}
                error={errors.number}
              />

              <TextInput
                placeholder="Complemento"
                optional
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                {...register('fullAddress')}
                error={errors.fullAddress}
              />

              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                {...register('neighborhood')}
                error={errors.neighborhood}
              />

              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                {...register('city')}
                error={errors.city}
              />

              <TextInput
                placeholder="UF"
                maxLength={2}
                containerProps={{ style: { gridArea: 'state' } }}
                {...register('state')}
                error={errors.state}
              />
            </AddressForm>
          </AddressContainer>
        </form>

        <PaymentSummary>
          <PaymentHeading>
            <CurrencyDollar size={22} />

            <div>
              <span>Pagamento</span>
              <p>Informe o endereço onde deseja receber o seu pedido</p>
            </div>
          </PaymentHeading>

          <PaymentOptions>
            <div>
              <Radio
                isSelected={selectedPaymentMethod === 'credit'}
                {...register('paymentMethod')}
                value="credit"
              >
                <CreditCard size={16} />
                <span>Cartão de crédito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'debit'}
                {...register('paymentMethod')}
                value="debit"
              >
                <Bank size={16} />
                <span>Cartão de débito</span>
              </Radio>

              <Radio
                isSelected={selectedPaymentMethod === 'cash'}
                {...register('paymentMethod')}
                value="cash"
              >
                <Money size={16} />
                <span>Dinheiro</span>
              </Radio>
            </div>

            {errors.paymentMethod ? (
              <PaymentErrorMessage role="alert">
                {errors.paymentMethod.message}
              </PaymentErrorMessage>
            ) : null}
          </PaymentOptions>
        </PaymentSummary>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartTotal>
          {coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <CardCoffee>
                <div>
                  <img src={coffee.image} alt={coffee.title} />

                  <div>
                    <span>{coffee.title}</span>

                    <CoffeeInfo>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() =>
                          incrementItemQuantity(coffee.id)
                        }
                        decrementQuantity={() =>
                          decrementItemQuantity(coffee.id)
                        }
                      />

                      <button onClick={() => handleRemoveItemCart(coffee.id)}>
                        <Trash />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {coffee.price.toFixed(2)}</aside>
              </CardCoffee>
              <span />
            </Fragment>
          ))}
          <CartTotalInfo>
            <div>
              <p>Total de itens</p>
              <span>{coffeesInCart.length}</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ {shippingPrice.toFixed(2).replace('.', ',')}</span>
            </div>

            <div>
              <span>Total</span>
              <span>
                {new Intl.NumberFormat('pt-br', {
                  currency: 'BRL',
                  style: 'currency',
                }).format(totalPriceItems)}
              </span>
            </div>
          </CartTotalInfo>

          <CheckoutButton
            type="submit"
            form="order"
            // disabled={coffeesInCart.length === 0}
          >
            Confirmar pedido
          </CheckoutButton>
        </CartTotal>
      </InfoContainer>
    </CartContainer>
  )
}
