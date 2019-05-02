import react from 'react';
import { ModalContainer, ModalLogo, FormContainer } from './styles';
import logoModal from '../../assets/images/logo-modal.svg';

const ContactModal = () => (
    <ModalContainer>
        <div>
            <ModalLogo src={logoModal} alt=""/>
        </div>
        <FormContainer>
            <label>Nombre</label>
            <input type="text" />
            <label>Correo</label>
            <input type="email" />
            <label>Número</label>
            <input type="text" />
            <label>¿A qué te dedicas?</label>
            <select>
                <option>Selecciona</option>
                <option value="Diseñador">Diseñador</option>
                <option value="Artesano">Artesano</option>
                <option value="Escultor">Escultor</option>
                <option value="Artista">Artista</option>
                <option value="Otro">Otro</option>
            </select>
            <label>¿Qué tipo de productos vendes?</label>
            <select>
                <option>Arte</option>
            </select>
            <button>ENVIAR</button>
        </FormContainer>
    </ModalContainer>
);

export default ContactModal;