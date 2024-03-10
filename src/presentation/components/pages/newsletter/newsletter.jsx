import emailjs from 'emailjs-com'

import { useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/newsletter/newsletter.module.scss'

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/,
      'E-mail inválido'
    )
    .required('Campo obrigatório')
})

export function NewsLetter() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data, event) => {
    try {
      if (!data.email) {
        toast.error('Por favor, preencha o email.')
        return
      }

      await emailjs.sendForm(
        'gmailContact',
        'template_oekruyi',
        event.target,
        'GSlDlk4aAeWqGnnRW'
      )
      toast.success('Email cadastrado com sucesso!')
      reset()
    } catch (error) {
      console.error('Erro ao cadastrar email:', error)
      toast.error('Erro ao cadastrar email')
    }
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
            entregue gratuitamente para você.
          </p>
        </div>
        <div className={styles.newsletterForm}>
          <form
            className={styles.form}
            id="newsletterForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className={styles.label} htmlFor="email">
              Seu email
            </label>
            <div className={styles.inputGroup}>
              <input
                className={`${styles.input_email} ${
                  errors.email && styles.input_error
                }`}
                autoComplete="no"
                name="email"
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
      <ToastContainer />
    </section>
  )
}
