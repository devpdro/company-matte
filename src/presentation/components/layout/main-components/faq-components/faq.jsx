import React, { useState } from 'react';
import { FaQuestionCircle, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styles from './faq.module.scss';

export function Faq() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleOpen1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleOpen2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div className={styles['faq-container']}>
      <h2>Frequently Asked Questions</h2>
      <div className={styles['faq-list']}>
        <div className={`${styles['faq-item']} ${isOpen1 ? styles.open : ''}`}>
          <div className={styles.question} onClick={toggleOpen1}>
            <FaQuestionCircle className={styles['icon-help']} />
            What is lorem?
            {isOpen1 ? <FaAngleUp className={styles['icon-close']} /> : <FaAngleDown className={styles['icon-show']} />}
          </div>
          {isOpen1 && (
            <p className={styles.answer}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </p>
          )}
        </div>

        <div className={`${styles['faq-item']} ${isOpen2 ? styles.open : ''}`}>
          <div className={styles.question} onClick={toggleOpen2}>
            <FaQuestionCircle className={styles['icon-help']} />
            What is another question?
            {isOpen2 ? <FaAngleUp className={styles['icon-close']} /> : <FaAngleDown className={styles['icon-show']} />}
          </div>
          {isOpen2 && (
            <p className={styles.answer}>
              Answer to another question.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
