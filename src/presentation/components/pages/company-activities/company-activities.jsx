import Image from 'presentation/assets/images/img/grupo-de-pessoas-escritorio.jpg'
import styles from 'presentation/components/pages/company-activities/company-activities.module.scss'
import { Topic } from './components/topic'

export function CompanyActivities() {
  return (
    <section className={styles.container}>
      <div className={styles.activities_box}>
        <div className={styles.texts}>
          <p className={styles.subtitle}>
            <hr className={styles.linha} />O que nós fazemos
          </p>
          <h1 className={styles.title}>
            Maneira inteligente de crescimento e soluções para seu negócio.
          </h1>
        </div>
        <div className={styles.bx}>
          <Topic
            numbering="01"
            title="Arquitetura de Software"
            paragraph="Desenvolvimento de conceitos arquitetônicos, criação de estratégias de implementação e definição de padrões de projeto para sistemas de software."
          />
          <Topic
            numbering="02"
            title="Desenvolvimento Web"
            paragraph="Criação de sites e aplicações web, design responsivo, desenvolvimento front-end e back-end, integração de APIs e bancos de dados."
          />
          <Topic
            numbering="03"
            title="UX/UI Design"
            paragraph="Projeto de interfaces de usuário intuitivas e agradáveis, levando em consideração a experiência do usuário, testes de usabilidade e criação de wireframes e protótipos interativos."
          />
        </div>
      </div>
      <div className={styles.image_box}>
        <img src={Image} alt="Imagem" />
      </div>
    </section>
  )
}
