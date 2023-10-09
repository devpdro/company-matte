import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  useEffect(() => {
    AOS.init()
  }, [])

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
      <SampleCard
        data-aos="fade-left"
        data-aos-easing="ease"
        data-aos-duration="850"
        key={`sampleCard-${i}`}
        cardColor={colors[i % colors.length]}
      >
        <CardImage src={data.image} alt={`Imagem ${i}`} />
        <TitleBox>{data.title}</TitleBox>
        <SubtitleBox>{data.text}</SubtitleBox>
      </SampleCard>
    ))
  )

  return (
    <section className={`${styles.container} panel`} data-color="white">
      <div
        data-aos="fade-down"
        data-aos-easing="ease"
        data-aos-duration="850"
        className={styles.box_title}
      >
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
