import { Link } from 'react-router-dom';

import { ICON } from 'presentation/assets/icons/icon'

import './whatsapp-button.css';

export function WhatsAppButton() {
  return (
    <div className="social">
      <a
        href="https://api.whatsapp.com/send?phone=5519998853434"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-btn color-whatsapp">
          <p className="margin-telgram">Entrar em contato</p>
          <ICON.AiOutlineWhatsApp className="icon" />
        </div>
      </a>
      <Link to="/contato">
        <div className="social-btn color-form">
          <p className="margin-instagram">Faça seu orçamento!</p>
          <ICON.AiOutlineForm className="icon" />
        </div>
      </Link>
    </div>
  )
};