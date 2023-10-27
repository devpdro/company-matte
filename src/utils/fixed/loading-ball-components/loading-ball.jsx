import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export function LoadingBall() {
  const [progress, setProgress] = useState(0);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScroll) * 100;

      if (!animationStarted && scrollPercentage > 5) {
        setAnimationStarted(true);
      
        gsap.to('.ball', { opacity: 1, duration: 0.5 });
      }

      if (scrollPercentage <= 4) {
        setAnimationStarted(false);
       
        gsap.to('.ball', { opacity: 0, duration: 0.5 });
      }

      setProgress(100 - scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationStarted]);

  return (
    <div
      className={`ball ${animationStarted ? 'visible' : ''}`}
      style={{
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: 'transparent',
        position: 'fixed',
        bottom: window.innerWidth <= 867 ? '75px' : '90px',
        right: window.innerWidth <= 867 ? '31px' : '55px',
        zIndex: 999,
        border: '2px solid #F9F7F1',
        borderTop: '2px solid #1c1c1c',
        opacity: 0,
        transform: `rotate(${animationStarted ? progress * 3.6 : 0}deg)`,
        transition: 'transform 0.2s ease'
      }}
    ></div>
  )
}
