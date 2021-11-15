export const get = async (url) => {
  try {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};
