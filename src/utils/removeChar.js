export const restrictInputMobile = (value) => {
  const allowValue =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';

  const splitValue = value.split('');

  let tempVal = [];
  splitValue.forEach((item) => {
    if (allowValue.search(item) !== -1) {
      tempVal.push(item);
    }
  });
  return tempVal.join('');
};
