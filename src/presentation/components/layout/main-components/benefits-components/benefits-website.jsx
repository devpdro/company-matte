import images from 'presentation/assets/images/images'
import styles from 'presentation/components/layout/main-components/benefits-components/benefits-website.module.scss'
export function BenefitsWebsite() {
  return (
    <section className={styles.container}>
      <div className={styles.box_benefits}>
        <div className={styles.box_title}>
          <h1 className={styles.title}>Benefits</h1>
        </div>
        <div className={styles.line_one_box}>
          <div className={styles.box_one}>
            <img src={images.analiseMercado} alt="" />
            <h6>Family leave</h6>
            <p>
              First of all, congrats! We offer extended leave and a soft landing
              program for new parents. Also coaching sessions and lunch boxes
              for the entire family during the first month.
            </p>
          </div>
          <div className={styles.box_two}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
        </div>
        <div className={styles.line_two_box}>
          <div className={styles.box_one}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
          <div className={styles.box_two}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
        </div>
        <div className={styles.line_three_box}>
          <div className={styles.box_one}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
          <div className={styles.box_two}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
        </div>
        <div className={styles.line_four_box}>
          <div className={styles.box_one}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
          <div className={styles.box_two}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
            alias, eligendi numquam iste tempore eius odio! Veritatis laborum
            facilis repellat veniam vero excepturi omnis optio deleniti, minus
            reprehenderit, provident expedita.
          </div>
        </div>
      </div>
    </section>
  )
}
