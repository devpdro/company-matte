import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from 'presentation/components/layout/main-components/forms-components/form.module.scss'
import { ICON } from 'presentation/assets/icons/icon';
export function Form() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const [formErrors, setFormErrors] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  function validateForm() {
    const errors = {
      nome: '',
      email: '',
      mensagem: '',
    };

    if (formData.nome.trim() === '') {
      errors.nome = 'O campo Nome é obrigatório.';
    }

    if (formData.email.trim() === '') {
      errors.email = 'O campo Email é obrigatório.';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Por favor, insira um email válido.';
    }

    if (formData.mensagem.trim() === '') {
      errors.mensagem = 'O campo Mensagem é obrigatório.';
    }

    setFormErrors(errors);

    return Object.values(errors).every((error) => error === '');
  }

  function isValidEmail(email) {
    // Implemente uma validação de email adequada, se necessário.
    // Aqui, estamos apenas verificando se o email contém um "@".
    return email.includes('@');
  }

  function enviarEmail(e) {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
        .then((result) => {
          console.log('E-mail enviado com sucesso', result.text);
        })
        .catch((error) => {
          console.error('Ocorreu um erro ao enviar o e-mail', error);
        });
    } else {
      console.error('O formulário contém erros. Por favor, corrija-os antes de enviar.');
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={enviarEmail}>
        <div className={styles.form_group}>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
          <div className="error-message">{formErrors.nome}</div>
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <div className="error-message">{formErrors.email}</div>
        </div>
        <div className={styles.form_group}>
          <label className={styles.label_textarea} htmlFor="mensagem">Mensagem:</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          ></textarea>
          <div className="error-message">{formErrors.mensagem}</div>
        </div>
        <div className={styles.btn_form}>
          <button type="submit">Enviar <ICON.VscArrowSmallRight className={styles.icon} /></button>
        </div>
      </form>
    </section>
  );
}
