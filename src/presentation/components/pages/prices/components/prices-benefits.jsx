import styles from 'presentation/components/pages/prices/components/prices-benefits.module.scss'

import { ICON } from 'presentation/assets/icons/icon'

export function PricesBenefits() {
  const servicos = [
    'Criação de site profissional com layout sob medida',
    'Site Responsivo (desktop, tablet, celular)',
    'One page ou Multipage',
    'Integrações customizadas',
    'Otimização SEO para Google',
    'Botões para gerar leads​',
    'Integração com redes sociais​',
    'Conformidade com a LGPD'
  ]

  return (
    <ul className={styles.list}>
      {servicos.map((servico, index) => (
        <li className={styles.text_benefits} key={index}>
          <ICON.FaCheck className={styles.icon} /> {servico}
        </li>
      ))}
    </ul>
  )
}
