const slowCode = async (delay) => {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, delay);
  });
};

export default slowCode;
