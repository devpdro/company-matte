import React from 'react'

import cardData from 'main/providers/data/cardData'
import HorizontalScroll from 'presentation/hooks/horizontal-scroll'

import styled from 'styled-components'
import styles from 'presentation/components/pages/functionalities-website/functionalities.module.scss'

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
  width: 27%;
  height: 430px !important;
  margin-right: 8.5rem;
  border-radius: 7px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 17px -5px,
    rgba(0, 0, 0, 0.1) 0px 8px 16px -8px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 868px) and (max-width: 1180px) {
    padding: 2rem 3rem 2rem 3rem !important;
    width: 24% !important;
    height: 420px !important;
    margin-right: 5.5rem !important;
  }

  @media screen and (max-width: 867px) {
    padding: 2rem 3rem 3rem 3rem !important;
    width: 20% !important;
    height: 490px !important;
    margin-right: 5.5rem !important;
  }
`

export const CardImage = styled.img`
  width: 130px;
  border-radius: 15px;
  margin-bottom: 1.5rem;
  @media (max-width: 867px) {
    width: 110px !important;
  }
`

export const TitleBox = styled.h6`
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  @media (max-width: 867px) {
    font-size: 2.2rem !important;
  }
`

export const SubtitleBox = styled.p`
  font-size: 1.3rem;
  font-weight: 300;
  line-height: 1.8rem;
  text-align: left !important;
  padding: 0rem;

  @media (max-width: 867px) {
    margin-top: 1rem !important;
    font-size: 1.5rem !important;
  }
`

export function Functionalities() {
  const colors = [
    '#F9F7F1',
    '#F2D147',
    '#25CC8A',
    '#C6A1F8',
    '#92AAFE',
    '#F9F7F1',
    '#F2D147'
  ]

  const SampleCards = React.memo(({ cardData }) =>
    cardData.map((data, i) => (
      <SampleCard
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
    <section id="funcionalidades" className={`${styles.container}`}>
      <div className={styles.box_title}>
        <p className={styles.subtitle}>
          Oferecemos <hr className={styles.linha} />
        </p>
        <h1 className={styles.title}>Principais recursos</h1>
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
