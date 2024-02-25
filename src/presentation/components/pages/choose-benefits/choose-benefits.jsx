import { Benefits } from 'presentation/components/pages/choose-benefits/components/benefits'

import styles from 'presentation/components/pages/choose-benefits/choose-benefits.module.scss'
import image from 'presentation/assets/images/img/grupo-de-pessoas-escritorio.jpg'

export function ChooseBenefits() {
  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div className={styles.image_box}>
        <img src={image} alt="" />
      </div>
      <div className={styles.activities_box}>
        <div className={styles.texts}>
          <p className={styles.subtitle} style={{ textAlign: 'right' }}>
            Porque escolher a VRWEB
            <hr style={{ marginLeft: '0.5rem' }} className={styles.linha} />
          </p>
          <h1 className={styles.title}>
            Fornecemos todos os serviços em um só lugar
          </h1>
        </div>
        <div className={styles.topics_box}>
          <Benefits
            numbering="01"
            title="Melhor preço de mercado"
            paragraph="Estamos empenhados em oferecer o melhor preço de mercado, mas nunca comprometeremos a qualidade ou o serviço que você merece. Queremos que você saiba que valorizamos sua confiança em nós e estamos aqui para atendê-lo da melhor maneira possível."
          />
          <Benefits
            numbering="02"
            title="Atendimento exclusivo e personalizado"
            paragraph="Oferecer a você um atendimento exclusivo e personalizado é o nosso compromisso e diferencial. Isso significa que estamos dedicados a compreender suas necessidades e preferências de forma única, criando uma experiência sob medida que atenda especificamente a você."
          />
          <Benefits
            numbering="03"
            title="O seu sonho é o nosso"
            paragraph="Nós da VRWEB nos dedicamos fortemente em dar vida aos sonhos e aspirações de nossos clientes de forma única, criativa e inovadora."
          />
        </div>
      </div>
    </section>
  )
}
