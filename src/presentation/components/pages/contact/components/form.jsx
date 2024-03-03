import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import emailjs from 'emailjs-com'

import { ICON } from 'presentation/assets/icons/icon'

import styles from 'presentation/components/pages/contact/components/form.module.scss'

const schema = yup.object().shape({
  nome: yup.string().required('Campo Nome é obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo E-mail é obrigatório'),
  mensagem: yup.string().required('Campo Mensagem é obrigatório'),
  telefone: yup.string().required('Campo Telefone é obrigatório')
})

export function Form() {
  const [nomeValue, setNomeValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [mensagemValue, setMensagemValue] = useState('')
  const [telefoneValue, setTelefoneValue] = useState('')

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const sendEmail = handleSubmit(async (data, event) => {
    try {
      const formElement = event.target
      await emailjs.sendForm(
        'gmailContact',
        'template_3hs5z6j',
        formElement,
        'GSlDlk4aAeWqGnnRW'
      )
      toast.success('Email enviado com sucesso! Retornaremos em breve.')

      setNomeValue('')
      setEmailValue('')
      setMensagemValue('')
    } catch (error) {
      console.error('Erro ao enviar o email:', error)
      toast.error('Erro ao enviar o email')
    }
  })

  return (
    <section className={styles.container}>
      <ToastContainer />
      <form className={styles.form} onSubmit={sendEmail}>
        <div
          className={`${styles.form_group} ${errors.nome ? styles.error : ''}`}
        >
          <label htmlFor="nome" className={styles.label_nome}>
            Seu nome:
          </label>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <input
                autoComplete="off"
                type="text"
                {...field}
                value={nomeValue}
                onChange={(e) => {
                  field.onChange(e)
                  setNomeValue(e.target.value)
                }}
                className={styles.input}
              />
            )}
          />
        </div>
        {errors.nome && (
          <div className={styles.error}>{errors.nome.message}</div>
        )}
        <div
          className={` ${styles.form_group} ${
            errors.email ? styles.error : ''
          }`}
        >
          <label htmlFor="email" className={styles.label_email}>
            Seu e-mail:
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                autoComplete="off"
                type="email"
                {...field}
                value={emailValue}
                onChange={(e) => {
                  field.onChange(e)
                  setEmailValue(e.target.value)
                }}
                className={`${styles.input} ${
                  errors.email ? styles.error : ''
                }`}
              />
            )}
          />
        </div>
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
        <div
          className={`${styles.form_group} ${
            errors.telefone ? styles.error : ''
          }`}
        >
          <label htmlFor="telefone" className={styles.label_telefone}>
            Seu telefone:
          </label>
          <Controller
            name="telefone"
            control={control}
            render={({ field }) => (
              <input
                autoComplete="off"
                type="text"
                {...field}
                value={telefoneValue}
                onChange={(e) => {
                  field.onChange(e)
                  setTelefoneValue(e.target.value)
                }}
                className={styles.input}
              />
            )}
          />
        </div>
        {errors.telefone && (
          <div className={styles.error}>{errors.telefone.message}</div>
        )}
        <div
          className={`animateRowThree ${styles.form_group} ${
            errors.mensagem ? styles.error : ''
          }`}
        >
          <label className={styles.label_textarea} htmlFor="mensagem">
            Descreva o que precisa:
          </label>
          <Controller
            name="mensagem"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                autoComplete="off"
                value={mensagemValue}
                onChange={(e) => {
                  field.onChange(e)
                  setMensagemValue(e.target.value)
                }}
                className={styles.textarea}
              />
            )}
          />
        </div>
        {errors.mensagem && (
          <div className={styles.error}>{errors.mensagem.message}</div>
        )}
        <div className={`animateButton ${styles.btn_form}`}>
          <button className={styles.btn} type="submit">
            <p className={styles.text_btn}>Enviar</p>
            <ICON.VscArrowSmallRight className={styles.icon} />
          </button>
        </div>
      </form>
    </section>
  )
}
