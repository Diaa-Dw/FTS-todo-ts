import { IoMdClose } from "react-icons/io";
import useModalEffect from "../../hooks/useModalEffect";
import "./modal.style.css";
import { ModalProps } from "./modal.type";

const Modal = ({ title, isOpen, onClose, children }: ModalProps) => {
  useModalEffect({ isOpen, onClose });

  if (!isOpen) return null;

  return (
    <section className='modal'>
      <div className='modal__backdrop' onClick={onClose} />

      <article className='modal__container'>
        <header className='modal__header'>
          <h3 id='modal-title'>{title}</h3>
          <button onClick={onClose} className='modal__close-button'>
            <IoMdClose />
          </button>
        </header>

        <main className='modal__content'>{children}</main>
      </article>
    </section>
  );
};

export default Modal;
