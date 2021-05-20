export const getOlApi = async () => {
  const apiUrl = `https://s1xysccaw3.execute-api.us-east-1.amazonaws.com/staging/jobs`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (e) {
    console.error('We have the error', e);
  }
};
