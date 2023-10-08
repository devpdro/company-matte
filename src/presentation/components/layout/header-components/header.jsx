import { useEffect } from 'react';
import { Link } from 'react-scroll';
import anime from 'animejs';

import { ICON } from 'presentation/assets/icons/icon';
import { Navbar } from 'presentation/components/layout/header-components/navbar-components/navbar';

import styles from 'presentation/components/layout/header-components/header.module.scss';

export function Header() {
  useEffect(() => {
    const animateTitle = () => {
      anime.timeline()
        .add({
          targets: '.animateTitle',
          opacity: [0, 1],
          translateY: [-40, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        })
        .add({
          targets: '.animateSubtitle',
          opacity: [0, 1],
          translateY: [-80, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        }, '-=2000')
        .add({
          targets: '.animateSince',
          opacity: [0, 1],
          translateX: [80, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        }, '-=2000')
        .add({
          targets: '.animateIcon',
          opacity: [0, 1],
          translateY: [-40, 0],
          easing: 'easeOutExpo',
          duration: 2500,
        }, '-=2000')
    };
   
    animateTitle();
  }, []);

  return (
    <main className={`${styles.container} panel`} data-color="black">
      <div>
        <Navbar />
      </div>
      <div className={styles.box_header}>
        <p className={`${styles.title} animateTitle`}>
          Destaque sua Presença <span>Profissional</span>
        </p>
        <div className={styles.box_subtitle}>
          <p className={`${styles.subtitle} animateSubtitle`}>
            Eleve a sua presença online,
            <br />e leve-a ao próximo nível.
          </p>
          <p className={`${styles.since} animateSince`}>Desde 2023</p>
        </div>
        <Link to="second-section" smooth={true} duration={500}><ICON.BsArrowDownShort className={`${styles.icon} animateIcon`} /></Link>
      </div>
    </main>
  );
}
