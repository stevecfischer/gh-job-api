const getDate = (dateString) => {
  const datePosted = new Date(dateString).valueOf();

  const currentDate = new Date().valueOf();

  const diff = new Date((datePosted - currentDate) * 1000);

  return diff.toLocaleDateString();
};

export default getDate;
