import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/our-mission/our-mission.module.scss'

export function OurMission() {
  return (
    <header className={`${styles.container} panel`} data-color="white">
      <div className={styles.box_title}>
        <p className={styles.subtitle}>software house</p>
        <h1 className={styles.title}>Nossa missão</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.box}>
          <ICON.BiBullseye className={styles.icon} />
          <h1 className={styles.title}>Missão</h1>
          <p className={styles.paragraph}>
            Somos uma empresa especializada em tecnologia web. Nosso foco
            principal está no desenvolvimento de websites que não apenas
            impressionam visualmente, mas também oferecem uma experiência de
            usuário excepcional.
          </p>
        </div>
        <div className={styles.box}>
          <ICON.FiEye className={styles.icon} />
          <h1 className={styles.title}>Visão de Futuro</h1>
          <p className={styles.paragraph}>
            Nosso objetivo é ser reconhecidos como uma empresa líder e inovadora
            em tecnologia web, amplamente preferida pelo mercado devido à nossa
            consistente excelência em serviços.
          </p>
        </div>
        <div className={styles.box}>
          <ICON.IoConstructOutline className={styles.icon} />
          <h1 className={styles.title}>Atributos da Visão</h1>
          <p className={styles.paragraph}>
            Atributos da nossa visão incluem solidez, respeito pelos indivíduos,
            atuação como uma empresa cidadã, compromisso com o sucesso do
            cliente, prosperidade e crescimento constante e sustentável.
          </p>
        </div>
      </div>
    </header>
  )
}
