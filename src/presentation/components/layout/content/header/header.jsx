import styles from "./header.module.scss";

import { Form } from "./form";
import { Navbar } from "./navbar";

export function Header() {
    return (
        <header className={styles.header}>
            <Navbar />
            <h1>sda Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, nemo neque consequuntur quis reiciendis similique ea ducimus dolor, asperiores numquam alias porro tempore, laboriosam eius at! Reiciendis voluptatibus vel culpa!</h1>
            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, magnam itaque saepe autem aliquid vero adipisci voluptate minima iusto at officiis dolorem reiciendis eius, temporibus fuga pariatur cum, qui corrupti.</h1>
            <Form />
        </header>
    )
}