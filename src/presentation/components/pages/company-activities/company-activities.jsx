import { Topic } from 'presentation/components/pages/company-activities/components/topic'

import styles from 'presentation/components/pages/company-activities/company-activities.module.scss'

export function CompanyActivities() {
  return (
    <section className={`${styles.container} panel`} data-color="black">
      <div className={styles.activities_box}>
        <div className={styles.texts}>
          <p className={styles.subtitle}>
            <hr style={{ marginRight: '0.5rem' }} className={styles.linha} />
            Se você é...
          </p>
          <h1 className={styles.title}>
            Descubra como podemos ajudar você a alcançar o sucesso!
          </h1>
        </div>
        <div>
          <Topic
            numbering="01"
            title="Start-up"
            paragraph="E tem uma ideia que precisa ser implementada em web, converse com a gente e vamos pensar juntos na melhor forma de dar vida ao seu projeto."
          />
          <Topic
            numbering="02"
            title="Empresa"
            paragraph="Não encontrou um website completo que atenda às necessidades da sua empresa? Desenvolvemos websites personalizadas que transformaram suas ideias em produtos exclusivos."
          />
          <Topic
            numbering="03"
            title="Profissional"
            paragraph="Busca uma solução web para promover seus serviços, marca e facilitar o contato com clientes? Criaremos um projeto personalizado para você."
          />
        </div>
      </div>
      <div className={styles.activities_box}>
        <div className={styles.texts}>
          <p className={styles.subtitle} style={{ textAlign: 'right' }}>
            O que nós fazemos
            <hr style={{ marginLeft: '0.5rem' }} className={styles.linha} />
          </p>
          <h1 className={styles.title}>
            Maneira inteligente de crescimento e soluções para seu negócio.
          </h1>
        </div>
        <div>
          <Topic
            numbering="01"
            title="Arquitetura de Software"
            paragraph="Desenvolvemos conceitos arquitetônicos, estratégias de implementação personalizadas e padrões de design inovadores para websites."
          />
          <Topic
            numbering="02"
            title="UX/UI Design"
            paragraph="Projeto de interfaces de usuário intuitivas e agradáveis, levando em consideração a experiência do usuário, testes de usabilidade, criação de wireframes e protótipos interativos."
          />
          <Topic
            numbering="03"
            title="Desenvolvimento Web"
            paragraph="Criação de sites e aplicações web, design responsivo, desenvolvimento front-end e back-end, integração de APIs e bancos de dados."
          />
        </div>
      </div>
    </section>
  )
}
