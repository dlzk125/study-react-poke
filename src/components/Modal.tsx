import React from 'react';
import { create, InstanceProps } from 'react-modal-promise';
import Button from './Button';
import styles from './Modal.module.scss';

interface Props extends InstanceProps<string, string> {
  title: string;
  text: string;
  value?: string;
  error?: string;
}

const Modal: React.FC<Props> = ({ isOpen, onResolve, onReject, text, title }) => {
  const submit = () => onResolve();
  const reject = () => onReject();

  return (
    <div
      className={styles.modal}
      style={{ display: isOpen ? 'block' : 'none' } as React.CSSProperties}
    >
      <div className={styles['modal-inner']}>
        <div className={styles['modal-header']}>
          <strong className={styles['modal-header-title']}>{title}</strong>
        </div>
        <div className={styles['modal-body']}>
          <p className={styles['modal-body-desc']}>{text}</p>
        </div>
        <div className={styles['modal-footer']}>
          <Button color="primary" onClick={submit}>
            확인
          </Button>
          <Button color="secondary" onClick={reject}>
            취소
          </Button>
        </div>
      </div>
    </div>
  );
};

export default create(Modal, {});
