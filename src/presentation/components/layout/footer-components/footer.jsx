import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

import { ICON } from 'presentation/assets/icons/icon'
import Logo from 'presentation/assets/logo/VR_LOGO-removebg-preview.png'
import styles from 'presentation/components/layout/footer-components/footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.box_footer}>
        <div className={styles.box_information}>
          <div className={styles.box_logo}>
            <img className={styles.logo} src={Logo} alt="Logo" />
            <p>
              Aproveite essa <br /> oportunidade!
            </p>
          </div>
          <div className={styles.container_list}>
            <div className={styles.box_links_one}>
              <ul className={styles.list}>
                <ScrollLink
                  activeClass="active"
                  to="inicio"
                  spy={true}
                  smooth={true}
                >
                  <li className={styles.link}>Início</li>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="como-funciona?"
                  spy={true}
                  smooth={true}
                >
                  <li className={styles.link}>Como funciona</li>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="funcionalidades"
                  spy={true}
                  smooth={true}
                >
                  <li className={styles.link}>Nossas funcionalidades</li>
                </ScrollLink>
                <ScrollLink
                  activeClass="active"
                  to="beneficios"
                  spy={true}
                  smooth={true}
                >
                  <li className={styles.link}>Benefícios</li>
                </ScrollLink>
                <Link style={{ color: '#F9F7F1',  textDecoration: "none"}} to="/contato">
                  <li className={styles.link}>Inicie sua jornada</li>
                </Link>
                <ScrollLink
                  activeClass="active"
                  to="perguntas-frequentes"
                  spy={true}
                  smooth={true}
                >
                  <li className={styles.link}>Perguntas frequentes</li>
                </ScrollLink>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.box_contact}>
          <div className={styles.box_email}>
            <h6 className={styles.title}>
              Vamos <br /> conversar
            </h6>
            <a
              href="mailto:vrw.developers@gmail.com?subject=Sobre"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className={styles.subtitle}>
                vrw.developers@gmail.com{' '}
                <ICON.LuArrowUpRight className={styles.icon} />
              </p>
            </a>
          </div>
          <div className={styles.social_media}>
            <p className={styles.text_follow}>
              © 2023, VR Developers. <br /> Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
