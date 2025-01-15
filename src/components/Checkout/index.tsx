import { useDispatch, useSelector } from 'react-redux'
import {
  AddButton,
  SubmitButton,
  CheckoutContainer,
  Overlay,
  SideBar,
  DeliverContainer,
  Field,
  PaymentContainer,
  ConfirmedContainer
} from './styles'
import {
  backtoCart,
  payment,
  confirmed,
  startCheckout,
  closeAndFinish
} from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'
import { IMaskInput } from 'react-imask'
import React from 'react'

const Checkout = () => {
  const [purchase, { isSuccess, data }] = usePurchaseMutation()
  const { isOpen, isPayment, isConfirmed, totalPrice } = useSelector(
    (state: RootReducer) => state.cart // Aqui estamos pegando o totalPrice do Redux
  )
  const dispatch = useDispatch()

  // Função de formatação de preço
  const priceFormat = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const form = useFormik({
    initialValues: {
      remetente: '',
      endereco: '',
      cidade: '',
      cep: '',
      numero: '',
      complemento: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      mesVencimento: '',
      anoVencimento: ''
    },
    validationSchema: Yup.object({
      remetente: Yup.string().required('Campo obrigatório'),
      endereco: Yup.string().required('Campo obrigatório'),
      cidade: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
      numero: Yup.string().required('Campo obrigatório'),

      cardName: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      mesVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      ),
      anoVencimento: Yup.string().when((values, schema) =>
        isPayment ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: async (values) => {
      // Envia dados de pagamento e entrega para o servidor
      await purchase({
        delivery: {
          receiver: values.remetente,
          address: {
            city: values.cidade,
            description: values.endereco,
            number: Number(values.numero),
            zipCode: values.cep,
            complement: values.complemento
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.mesVencimento),
              year: Number(values.anoVencimento)
            }
          }
        },
        products: [
          {
            id: 1,
            price: totalPrice // Atualizado para usar o totalPrice do Redux
          }
        ]
      })
      if (isSuccess) {
        dispatch(confirmed())
      }
    }
  })

  const getErroMessage = (campo: string, message?: string) => {
    const estaAlterado = campo in form.touched
    const estaInvalido = campo in form.errors
    if (estaAlterado && estaInvalido) {
      return message
    }
    return ''
  }

  const finish = () => {
    dispatch(closeAndFinish())
  }

  const backCart = () => {
    dispatch(backtoCart())
  }

  const backAdress = () => {
    dispatch(startCheckout())
  }

  const activePayment = () => {
    if (
      form.values.remetente &&
      form.values.endereco &&
      form.values.cidade &&
      form.values.cep &&
      form.values.numero
    ) {
      dispatch(payment())
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  const activeConfirmed = () => {
    if (
      form.values.cardName &&
      form.values.cardNumber &&
      form.values.cvv &&
      form.values.anoVencimento &&
      form.values.mesVencimento
    ) {
      form.handleSubmit()
    } else {
      alert('Preencha antes os dados obrigatórios!')
    }
  }

  // Garantir que a re-renderização do componente aconteça corretamente quando o preço mudar
  React.useEffect(() => {
    console.log('Preço atualizado:', totalPrice) // Debugging para ver se o valor de `totalPrice` está mudando
  }, [totalPrice])

  return (
    <CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={backCart} />
      <SideBar>
        <form onSubmit={(e) => e.preventDefault()}>
          <DeliverContainer
            className={!isPayment && !isConfirmed ? 'show' : ''}
          >
            <h2>Entrega</h2>
            <Field>
              <label htmlFor="remetente">Quem irá receber</label>
              <input
                type="text"
                id="remetente"
                name="remetente"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.remetente}
              />
              <small>
                {getErroMessage('remetente', form.errors.remetente)}
              </small>
            </Field>
            <Field>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.endereco}
              />
              <small>{getErroMessage('endereco', form.errors.endereco)}</small>
            </Field>
            <Field>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cidade}
              />
              <small>{getErroMessage('cidade', form.errors.cidade)}</small>
            </Field>
            <div className="CEPNumber">
              <Field>
                <label htmlFor="cep">CEP</label>
                <IMaskInput
                  mask="00.000-000"
                  type="text"
                  id="cep"
                  name="cep"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cep}
                />
                <small>{getErroMessage('cep', form.errors.cep)}</small>
              </Field>
              <Field>
                <label htmlFor="numero">Número</label>
                <input
                  type="number"
                  id="numero"
                  name="numero"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.numero}
                />
                <small>{getErroMessage('numero', form.errors.numero)}</small>
              </Field>
            </div>
            <Field>
              <label htmlFor="complemento">Complemento (opcional)</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.complemento}
              />
            </Field>
            <div className="buttomContainer">
              <AddButton type="button" onClick={activePayment}>
                Continuar com o pagamento
              </AddButton>
              <AddButton type="button" onClick={backCart}>
                Voltar ao carrinho
              </AddButton>
            </div>
          </DeliverContainer>

          <PaymentContainer className={isPayment && !isConfirmed ? 'show' : ''}>
            <p>Pagamento - Valor a pagar {priceFormat(totalPrice)}</p>
            <Field>
              <label htmlFor="cardName">Nome do cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                value={form.values.cardName}
              />
              <small>{getErroMessage('cardName', form.errors.cardName)}</small>
            </Field>
            <div className="fieldContainer">
              <Field>
                <label htmlFor="cardNumber">Número do cartão</label>
                <IMaskInput
                  mask="0000.0000.0000.0000"
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cardNumber}
                />
                <small>
                  {getErroMessage('cardNumber', form.errors.cardNumber)}
                </small>
              </Field>
              <Field>
                <label htmlFor="cvv">CVV</label>
                <IMaskInput
                  mask="000"
                  type="text"
                  id="cvv"
                  name="cvv"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.cvv}
                />
                <small>{getErroMessage('cvv', form.errors.cvv)}</small>
              </Field>
            </div>
            <div className="fieldContainer">
              <Field>
                <label htmlFor="mesVencimento">Mês de vencimento</label>
                <IMaskInput
                  mask="00"
                  type="text"
                  id="mesVencimento"
                  name="mesVencimento"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.mesVencimento}
                />
                <small>
                  {getErroMessage('mesVencimento', form.errors.mesVencimento)}
                </small>
              </Field>
              <Field>
                <label htmlFor="anoVencimento">Ano de vencimento</label>
                <IMaskInput
                  mask="00"
                  type="text"
                  id="anoVencimento"
                  name="anoVencimento"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  value={form.values.anoVencimento}
                />
                <small>
                  {getErroMessage('anoVencimento', form.errors.anoVencimento)}
                </small>
              </Field>
            </div>
            <div className="buttomContainer">
              <SubmitButton type="button" onClick={activeConfirmed}>
                Finalizar pagamento
              </SubmitButton>
              <AddButton type="button" onClick={backAdress}>
                Voltar para a edição do endereço
              </AddButton>
            </div>
          </PaymentContainer>

          <ConfirmedContainer
            className={isSuccess && isConfirmed ? 'show' : ''}
          >
            <h2>Pedido realizado - {data?.orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido.
            </p>
            <div className="buttomContainer">
              <AddButton type="button" onClick={finish}>
                Concluir
              </AddButton>
            </div>
          </ConfirmedContainer>
        </form>
      </SideBar>
    </CheckoutContainer>
  )
}

export default Checkout
