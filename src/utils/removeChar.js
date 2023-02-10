export const restrictInputMobile = (value) => {
  const allowValue =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*';
  const splitValue = allowValue.split('');

  const split2 = value.split('');

  let tempVal = [];

  split2.forEach((item) => {
    if (splitValue.includes(item)) {
      tempVal.push(item);
    }
  });
  // const rep = value.replace(item, '');
  // tempVal.push(rep);

  // splitValue.forEach((item, index) => {
  // });

  console.log('tempVal = ', tempVal);

  return String(tempVal.join(''));
};
