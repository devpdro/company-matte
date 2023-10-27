import { Link } from 'react-router-dom'
import { ICON } from 'presentation/assets/icons/icon'

import styles from 'utils/fixed/contact-buttons-components/person-button.module.scss'
export function PersonButton() {
  return (
    <div className={styles.whatsapp_button}>
      <Link to="/contato">
        <ICON.AiOutlineForm className={styles.icon} />
      </Link>
    </div>
  )
}
