import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import { ICON } from 'presentation/assets/icons/icon';
import styles from 'presentation/components/layout/main-components/forms-components/form.module.scss';

const schema = yup.object().shape({
  nome: yup.string().required('Campo Nome é obrigatório'),
  email: yup
    .string()
    .email('E-mail inválido')
    .required('Campo E-mail é obrigatório'),
  mensagem: yup.string().required('Campo Mensagem é obrigatório'),
});

export function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 const sendEmail = handleSubmit(async (data, event) => {
  try {
    const formElement = event.target; // Obtenha o elemento do formulário
    await emailjs.sendForm('gmailContact', 'template_3hs5z6j', formElement, 'GSlDlk4aAeWqGnnRW');
    console.log('Email enviado com sucesso!');
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
  }
});

  return (
    <section className={styles.container}>
      <form onSubmit={sendEmail}>
        <div className={`${styles.form_group} ${errors.nome ? styles.error : ''}`}>
          <label htmlFor="nome" className={styles.label}>
            Nome:
          </label>
          <Controller
            name="nome"
            control={control}
            render={({ field }) => (
              <input type="text" {...field} className={styles.input} />
            )}
          />
        </div>
        {errors.nome && (
          <div className={styles.error}>{errors.nome.message}</div>
        )}
        <div className={`${styles.form_group} ${errors.email ? styles.error : ''}`}>
          <label htmlFor="email" className={styles.label}>
            E-mail:
          </label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input
                type="email"
                {...field}
                className={`${styles.input} ${errors.email ? styles.error : ''}`}
              />
            )}
          />
        </div>
        {errors.email && (
          <div className={styles.error}>{errors.email.message}</div>
        )}
        <div className={`${styles.form_group} ${errors.mensagem ? styles.error : ''}`}>
          <label className={styles.label_textarea} htmlFor="mensagem">
            Mensagem:
          </label>
          <Controller
            name="mensagem"
            control={control}
            render={({ field }) => (
              <textarea {...field} className={styles.textarea} />
            )}
          />
        </div>
        {errors.mensagem && (
          <div className={styles.error}>{errors.mensagem.message}</div>
        )}
        <div className={styles.btn_form}>
          <button type="submit">
            Enviar <ICON.VscArrowSmallRight className={styles.icon} />
          </button>
        </div>
      </form>
    </section>
  );
}
