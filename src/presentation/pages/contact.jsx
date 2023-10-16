import { useEffect } from 'react';

import { Navbar } from "presentation/components/layout/header-components/navbar-components/navbar";
import { MainContact } from "presentation/components/layout/main-components/main-contact";

import 'presentation/pages/home.scss';

export function Contact() {
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
    <main >
      <Navbar />
      <MainContact className="panel" data-color="black" />
    </main>
  )
}
