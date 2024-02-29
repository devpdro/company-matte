import { FaCheck } from 'react-icons/fa6'

import styles from 'presentation/components/pages/prices/components/prices-benefits.module.scss'

export function PricesBenefits({ three, four, five, seven }) {
  const servicos = [
    {
      text: 'Criação de site profissional com layout sob medida',
      icon: FaCheck
    },
    {
      text: 'Site Responsivo (desktop, tablet, celular)',
      icon: FaCheck
    },
    {
      text: three,
      icon: FaCheck
    },
    { text: four, icon: FaCheck },
    { text: 'Integrações customizadas', icon: FaCheck },
    { text: seven, icon: FaCheck },
    { text: 'Integração com redes sociais​', icon: FaCheck },
    { text: 'Conformidade com a LGPD', icon: FaCheck }
  ]

  return (
    <ul className={styles.list}>
      {servicos.map((servico, index) => (
        <li
          className={`${styles.text_benefits} ${
            index === 9 ? styles.no_benefit : ''
          }`}
          key={index}
          style={{ color: servico.textColor }}
        >
          {servico.icon && (
            <servico.icon
              className={styles.icon}
              style={{ color: servico.iconColor }}
            />
          )}{' '}
          {servico.text}
        </li>
      ))}
    </ul>
  )
}
