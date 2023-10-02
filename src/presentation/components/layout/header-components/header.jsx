import { Navbar } from 'presentation/components/layout/header-components/navbar-components/navbar';
import styles from 'presentation/components/layout/header-components/header.module.scss';

export function Header() {
  // Função para scroll suave
  function scrollToContent() {
    const contentSection = document.getElementById('conteudo');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <main className={styles.container}>
      <div>
        <Navbar />
      </div>
      <div className={styles.box_header}>
        <h1 onClick={scrollToContent}>
          Precisa destacar sua presença profissional?
        </h1>
        <div className={styles.scroll_down}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </main>
  )
}
