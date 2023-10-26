import { ICON } from 'presentation/assets/icons/icon'

import styles from 'utils/fixed/contact-buttons-components/whatsapp-button.module.scss'
export function WhatsAppButton() {
  return (
    <div className={styles.whatsapp_button}>
      <a
        href="https://api.whatsapp.com/send?phone=5519998853434"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ICON.BiLogoWhatsapp className={styles.icon} />
      </a>
    </div>
  )
}
