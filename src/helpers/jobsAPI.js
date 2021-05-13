export const getPositions = async ({ description, fullTime, location }) => {
  let query = '';

  if (description) {
    query += `description=${description}&`;
  }
  if (fullTime !== null) {
    query += `full_time=${fullTime}&`;
  }

  if (location) {
    query += `location=${location}&`;
  }

  const apiUrl = `https://jobs.github.com/positions.json?${query}`;
  try {
    const response = await fetch(apiUrl);
    return await response.json();
  } catch (e) {
    console.error('We have the error', e);
  }
};
