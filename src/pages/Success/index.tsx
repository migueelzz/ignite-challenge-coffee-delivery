import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { useContext } from 'react'
import { useTheme } from 'styled-components'
import { useParams } from 'react-router-dom'

import { CartContext } from '../../contexts/CartContext'
import { OrderContent, OrderInfo, SuccessContainer } from './styles'
export function Success() {
  const theme = useTheme()
  const { orders } = useContext(CartContext)
  const { orderId } = useParams()

  const orderInfo = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <div>
            <OrderInfo>
              <div>
                <OrderContent>
                  <div>
                    <MapPin
                      size={32}
                      weight="fill"
                      color={theme.colors.white}
                      style={{ backgroundColor: theme.colors.purple }}
                    />
                    <div>
                      <span>
                        Entrega em{' '}
                        <strong>
                          {orderInfo.street}, {orderInfo.number}
                        </strong>
                      </span>
                      <span>
                        {orderInfo.neighborhood} - {orderInfo.city},{' '}
                        {orderInfo.state}
                      </span>
                    </div>
                  </div>
                  <div>
                    <Timer
                      size={32}
                      weight="fill"
                      color={theme.colors.white}
                      style={{ backgroundColor: theme.colors.yellow }}
                    />
                    <div>
                      <span>Previsão de entrega</span>

                      <strong>20 min - 30 min</strong>
                    </div>
                  </div>

                  <div>
                    <CurrencyDollar
                      size={32}
                      color={theme.colors.white}
                      style={{ backgroundColor: theme.colors['yellow-dark'] }}
                    />
                    <div>
                      <span>Pagamento na entrega</span>

                      <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
                    </div>
                  </div>
                </OrderContent>
              </div>
            </OrderInfo>
          </div>
          <img src="/images/success.svg" alt="" />
        </div>
      </div>
    </SuccessContainer>
  )
}
