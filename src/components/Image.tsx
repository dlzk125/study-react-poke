import React from 'react';

interface Props extends Record<string, any> {
  src: string;
}

const Image: React.FC<Props> = (props = { src: '' }) => {
  const { src, ...otherProps } = props;
  return <img src={src} alt="" {...otherProps} />;
};

export default Image;
