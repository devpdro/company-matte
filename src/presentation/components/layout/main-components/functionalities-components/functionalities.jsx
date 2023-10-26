import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import cardData from 'main/providers/data/cardData'
import HorizontalScroll from 'presentation/hooks/carousel/horizontal-scroll'
import styles from 'presentation/components/layout/main-components/functionalities-components/functionalities.module.scss'

import styled from 'styled-components'

export const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 150px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
   @media (max-width: 867px) {
  }
`

export const SampleCard = styled.div`
  position: relative;
  padding: 3rem 3rem;
  background-color: ${(props) => props.cardColor};
  width: 28%;
  height: 530px;
  margin-right: 8.5rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 867px) {
    width: 19% !important;
    height: 540px !important;
    margin-right: 5.5rem !important;
  }
`

export const CardImage = styled.img`
  width: 130px;
  margin-bottom: 1rem;
     @media (max-width: 867px) {
        width: 110px!important;
  }
`

export const TitleBox = styled.h6`
  color: #1c1c1c;
  font-size: 3rem;
  padding: 0rem 0rem 1rem 0rem;
   @media (max-width: 867px) {
       font-size: 2.4rem!important;
  }
`

export const SubtitleBox = styled.p`
  color: #1c1c1c;
  font-size: 2rem;
   @media (max-width: 867px) {
        font-size: 1.8rem!important;
  }
`

export function Functionalities() {
  useEffect(() => {
    AOS.init()
  }, [])

  const colors = [
    '#92AAFE',
    '#25CC8A',
    '#F2D147',
    '#C6A1F8',
    '#F9F7F1',
    '#F1C957'
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
    <section
      id="funcionalidades"
      className={`${styles.container} panel`}
      data-color="black"
    >
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
