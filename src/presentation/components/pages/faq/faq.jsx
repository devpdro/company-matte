import { useState } from 'react'

import { ICON } from 'presentation/assets/icons/icon'

import faqItems from 'main/providers/data/faqData'

import styles from 'presentation/components/pages/faq/faq.module.scss'

export function Faq() {
  const [isOpen, setIsOpen] = useState(Array(4).fill(false))

  const toggleOpen = (index) => {
    const newOpenState = [...isOpen]
    newOpenState[index] = !newOpenState[index]
    setIsOpen(newOpenState)
  }

  return (
    <section id="perguntas-frequentes" className={styles['faq-container']}>
      <div className={styles.faq_box}>
        <p className={styles.subtitle}>FAQ <hr className={styles.linha}/></p>
        <h1 className={styles.title}>Perguntas frequentes</h1>
        <div className={styles['faq-list']}>
          {faqItems.map((item, index) => (
            <div
              className={`${styles['faq-item']} ${
                isOpen[index] ? styles.open : ''
              }`}
              key={index}
            >
              <div
                className={styles.question}
                onClick={() => toggleOpen(index)}
              >
                {`0${index + 1} / ${item.question}`}
                {isOpen[index] ? (
                  <ICON.FaAngleUp className={styles['icon-close']} />
                ) : (
                  <ICON.FaAngleDown className={styles['icon-show']} />
                )}
              </div>
              {isOpen[index] && <p className={styles.answer}>{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
