import { useEffect } from 'react';

import { Header } from 'presentation/components/layout/header-components/header';
import { Main } from 'presentation/components/layout/main-components/main';
import { Footer } from 'presentation/components/layout/footer-components/footer';
import { Navbar } from 'presentation/components/layout/header-components/navbar-components/navbar';
import { WhatsAppButton } from 'utils/fixed/contact-buttons-components/whatsapp-button';
import { ScrollTop } from 'utils/fixed/scroll-top-components/scroll-top';

import 'presentation/pages/home.scss';

export function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const $window = window;
      const $body = document.body;
      const $panel = document.querySelectorAll(".panel");

      const scroll = $window.pageYOffset + $window.innerHeight / 2;

      $panel.forEach((panel) => {
        const $this = panel;

        if (
          $this.offsetTop <= scroll &&
          $this.offsetTop + $this.offsetHeight > scroll
        ) {
         
          $body.className = $body.className
            .split(" ")
            .filter((className) => !className.startsWith("color-"))
            .join(" ");
         
          $body.classList.add("color-" + $this.getAttribute("data-color"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
 
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Header className="panel" data-color="black" />
      <Main className="panel" data-color="black white purple" />
      <Footer />

      <WhatsAppButton />
      <ScrollTop />
    </main>
  );
}
