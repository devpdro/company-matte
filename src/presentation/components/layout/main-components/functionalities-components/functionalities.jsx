import React from "react";
import HorizontalScroll from "presentation/hooks/carousel/horizontal-scroll";

import tipo_site from 'presentation/assets/images/img/tipo-site.png'
import styles from 'presentation/components/layout/main-components/functionalities-components/functionalities.module.scss'

import {
  Main,
  HorizontalSection,
  BumperSection,
  CardsContainer,
  SampleCard,
  CardImage,
  CardText,
} from './functionalities-carousel-styles';

export function Functionalities() {
  const SampleCards = React.memo(() =>
  Array(5)
    .fill(0)
    .map((_e, i) => (
      <SampleCard key={`sampleCard-${i}`}>
        <CardImage src={`imagem-${i}.jpg`} alt={`Imagem ${i}`} />
        <CardText>Texto do Card {i + 1}</CardText>
      </SampleCard>
    ))
);

  return (
    <section className={`${styles.container}`}>
      <div className={styles.box_container}>
        <div className={`${styles.box_title}`}>
          <p>
            Nossas <span>Funcionalidades</span>
          </p>
        </div>
        <div className={styles.box_functionalities}>
          <div className={styles.box_one}>
            <img src={tipo_site} alt="Ilustração de Responsividade" />
            <h6 className={styles.title}>Responsividade</h6>
            <p className={styles.explication}>
              Proporcionamos uma experiência perfeita em qualquer dispositivo:
              Computador, Notebook, Tablet e Celular, utilizando tecnologia de
              ponta para adaptação completa.
            </p>
          </div>
          <div className={styles.box_two}>
            <img src={tipo_site} alt="Ilustração de Blog" />
            <h6 className={styles.title}>Blog Integrado</h6>
            <p className={styles.explication}>
              Conte sua história, compartilhe notícias e artigos diretamente no
              seu site. Mantenha seus visitantes atualizados e envolvidos com
              seu conteúdo exclusivo.
            </p>
          </div>
          <div className={styles.box_three}>
            <img src={tipo_site} alt="Ilustração de SEO" />
            <h6 className={styles.title}>Otimização para o Google (SEO)</h6>
            <p className={styles.explication}>
              Desenvolvemos todos os sites com foco no melhor desempenho no
              Google, seguindo suas diretrizes para máxima visibilidade online.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
