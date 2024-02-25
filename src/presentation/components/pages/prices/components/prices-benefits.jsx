import { FaCheck } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'

import styles from 'presentation/components/pages/prices/components/prices-benefits.module.scss'

export function PricesBenefits() {
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
      text: 'Hospedagem e suporte mensal',
      icon: FaCheck
    },
    {
      text: 'One page ou Multipage',
      icon: FaCheck
    },
    { text: 'Integrações customizadas', icon: FaCheck },
    { text: 'Otimização SEO para Google', icon: FaCheck },
    { text: 'Botões para gerar leads​', icon: FaCheck },
    { text: 'Integração com redes sociais​', icon: FaCheck },
    { text: 'Conformidade com a LGPD', icon: FaCheck },
    {
      text: 'Site de vendas',
      icon: IoMdClose,
      textColor: '#999999ce',
      iconColor: '#999999c0'
    }
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
