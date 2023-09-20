import { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import styles from "./navbar.module.scss";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <a href="#header" className={styles.logo}>
          Logo
        </a>
        <div
          className={`${styles.navbar__content} ${
            menuOpen && size.width < 768 ? styles.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <a
                className={styles.link}
                href="#header"
                onClick={menuToggleHandler}
              >
                Como funciona?
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#about"
                onClick={menuToggleHandler}
              >
                Nossos Serviços
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href="#contact"
                onClick={menuToggleHandler}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.nav_features}>
              <div>
                <a href="#contact">Troca de cor do site</a>
              </div>
              <div>
                <a href="#contact">Troca de ediomas</a>
              </div>
              </div>
        <div className={styles.header__content__toggle}>
          {!menuOpen ? (
            <AiOutlineMenu onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </nav>
  );
};