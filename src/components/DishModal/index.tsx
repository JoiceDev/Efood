import { Modal, ModalTitle, ModalDescription, ModalButton } from './styles'
import close from '../../assets/images/close.svg'
import pizza2 from '../../assets/images/pizza-modal.svg'
import { Dish } from '../../types'

// Definindo a interface para as props
interface DishModalProps {
  dish: Dish
  isOpen: boolean
  onClose: () => void
}

const DishModal: React.FC<DishModalProps> = ({ dish, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <Modal className={isOpen ? 'visible' : ''}>
      <div className="container">
        <div className="image-container">
          <img className="foodImg" src={dish.foto || pizza2} alt={dish.nome} />
        </div>
        <div className="content-container">
          <div className="title-close">
            <ModalTitle>{dish.nome}</ModalTitle>
            <img
              src={close}
              className="pointer"
              alt="ícone de fechar"
              onClick={onClose}
            />
          </div>
          <ModalDescription>
            {dish.descricao}
            <span>Serve: {dish.porcao}</span>
          </ModalDescription>
          <ModalButton>
            Adicionar ao carrinho - R${dish.preco.toFixed(2)}
          </ModalButton>
        </div>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </Modal>
  )
}

export default DishModal
