import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'

import { ICON } from 'presentation/assets/icons/icon'
import styles from 'presentation/components/pages/newsletter/newsletter.module.scss'

const schema = yup.object().shape({
  email: yup.string().email('Email inválido').required('Campo obrigatório')
})

export function NewsLetter() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setSubmitted(true)
    
  }

  return (
    <section
      className={`${styles.newsletterContainer} panel`}
      data-color="white"
    >
      <div className={styles.newsletterContent}>
        <div className={styles.newsletterText}>
          <h1 className={styles.title}>Esteja sempre atualizado!</h1>
          <p className={styles.subtitle}>
            Negócios, estratégia, design e muito mais do mundo da tecnologia,
            <br /> entregue gratuitamente para você.
          </p>
        </div>
        <div className={styles.newsletterForm}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <label className={styles.label} htmlFor="email">
              Seu email
            </label>
            <div className={styles.inputGroup}>
              <input
                className={`${styles.input_email} ${
                  errors.email && styles.input_error
                }`}
                autoComplete="no"
                type="text"
                id="email"
                placeholder="Email"
                {...register('email')}
              />
              <div className={styles.searchIcon}>
                <ICON.MdOutlineMail />
              </div>
              <button className={styles.btn_submit} type="submit">
                <p className={styles.text_btn}>Inscrever</p>
              </button>
            </div>
            {errors.email && (
              <p className={`${styles.error}`}>{errors.email.message}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
