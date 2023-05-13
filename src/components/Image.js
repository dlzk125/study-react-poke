const Image = (props = {}) => {
  const { src } = props;
  return (
    <img src={src} alt="" {...props} />
  )
}

export default Image;
