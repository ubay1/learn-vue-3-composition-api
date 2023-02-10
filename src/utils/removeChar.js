export const restrictInputMobile = (value) => {
  const allowValue =
    '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  console.log('value  = ', value);

  let tempVal = [];

  // asd!@ -> asd
  const splitValue = value.split('');

  splitValue.forEach((item, index) => {
    if (allowValue.search(item) !== -1) {
      tempVal.push(item);
    }
  });
  return tempVal.join('');
};
