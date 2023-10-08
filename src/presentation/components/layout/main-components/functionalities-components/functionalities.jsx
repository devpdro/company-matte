import React from 'react'
import cardData from 'main/providers/data/cardData'
import HorizontalScroll from 'presentation/hooks/carousel/horizontal-scroll'

import {
  HorizontalSection,
  CardsContainer,
  SampleCard,
  CardImage,
  TitleBox,
  SubtitleBox
} from './functionalities-carousel-styles'
import styles from 'presentation/components/layout/main-components/functionalities-components/functionalities.module.scss'

export function Functionalities() {
  const colors = [
    '#92AAFE',
    '#25CC8A',
    '#C6A1F8',
    '#F2D147',
    '#F9F7F1',
    '#F75000'
  ]

  const SampleCards = React.memo(({ cardData }) =>
    cardData.map((data, i) => (
      <SampleCard key={`sampleCard-${i}`} cardColor={colors[i % colors.length]}>
        <CardImage src={data.image} alt={`Imagem ${i}`} />
        <TitleBox>{data.title}</TitleBox>
        <SubtitleBox>{data.text}</SubtitleBox>
      </SampleCard>
    ))
  )

  return (
    <section className={styles.container}>
      <div className={styles.box_title}>
        <p>
          Nossas <span>Funcionalidades</span>
        </p>
      </div>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
            <SampleCards cardData={cardData} />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
    </section>
  )
}
