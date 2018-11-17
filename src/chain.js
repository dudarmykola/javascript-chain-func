/* eslint-disable-next-line */
export const chain = async arr => {
  const getData = async url => {
    const resp = await fetch(url);
    const res = await resp.json();
    return res;
  };

  const promises = [];
  for (let i = 0; i < arr.length; i++) {
    promises.push(getData(arr[i]));
  }

  return Promise.all(promises);
};
