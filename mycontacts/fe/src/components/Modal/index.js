import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Overlay, ModalContainer, Footer } from './styles';
import Button from '../Button';

export default function Modal({ danger }) {
  return (
    ReactDOM.createPortal(
      <Overlay>
        <ModalContainer danger={danger}>

          <h1>Titulo do modal</h1>
          <p>Corpo do Modal</p>
          <Footer>
            <button type="button">Cancelar</button>
            <Button type="button" danger={danger}>Deletar</Button>
          </Footer>
        </ModalContainer>
      </Overlay>,
      document.getElementById('modal-root'),
    )
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
