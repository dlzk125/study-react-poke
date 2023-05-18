import React from 'react';
import styles from './Button.module.scss';

enum color {
  'primary',
  'secondary'
}

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  color: keyof typeof color;
  onClick?: () => void;
}

const Button: React.FC<Props> = (props = { color: 'primary' }) => {
  const { color, onClick, children, ...otherProps } = props;

  return (
    <button
      type="button"
      className={[styles.btn, styles[`btn-${color}`]].join(' ')}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
