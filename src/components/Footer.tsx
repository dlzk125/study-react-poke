import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC<React.HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <footer className={styles['doc-footer']} {...props}>
      <small>Test by James</small>
    </footer>
  );
};

export default Footer;
