const goOutAnimation = (dur, del) => {
  const exitAnimation = {
    x: window.innerWidth,
    opacity: 0,
    transition: { duration: dur, delay: del },
  };
  return exitAnimation;
};

export default goOutAnimation;
