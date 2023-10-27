import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { animateScroll as scroll } from 'react-scroll'

const ScrollTopButton = styled.div`
  position: fixed;
  bottom: 40px;
  right: 51px;
  background-color: #f9f7f1;
  color: #1c1c1c;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    opacity 0.2s,
    cursor 0.3s ease;
  opacity: 0;
  @media (max-width: 867px) {
    bottom: 27px;
    right: 27px;
  }
  &.visible {
    opacity: 1;
  }

  .icon {
    font-size: 2rem;
    color: #1c1c1c;
  }
`

export function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTop = window.scrollY
    const maxScroll = documentHeight - windowHeight
    const scrollPercentage = (scrollTop / maxScroll) * 100

    if (scrollPercentage > 5) {
      setIsVisible(true)
      gsap.to('.scroll-top', {
        opacity: 1,
        duration: 0.5
      })
    } else {
      setIsVisible(false)
      gsap.to('.scroll-top', { opacity: 0, duration: 0.5 })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 1000, smooth: 'easeInOutQuart' })
  }

  return (
    <ScrollTopButton
      className={`scroll-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp className="icon" />
    </ScrollTopButton>
  )
}


