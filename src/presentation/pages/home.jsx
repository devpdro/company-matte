import React, { useEffect } from 'react';
import { Header } from 'presentation/components/layout/header-components/header';
import { Main } from 'presentation/components/layout/main-components/main';
import { Footer } from 'presentation/components/layout/footer-components/footer';
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
          // Remove all classes on body with color-
          $body.className = $body.className
            .split(" ")
            .filter((className) => !className.startsWith("color-"))
            .join(" ");

          // Add class of currently active div
          $body.classList.add("color-" + $this.getAttribute("data-color"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Execute handleScroll once to initialize
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <Header className="panel" data-color="black" />
      <Main className="panel" data-color="black white purple" />
      <Footer className="panel" data-color="blue" />
    </main>
  );
}
