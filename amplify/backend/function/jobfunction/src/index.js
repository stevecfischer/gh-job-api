const axios = require('axios');

// exports.handler = async (event) => {
//   const jobs = axios
//     .get('https://jobs.github.com/positions.json?description=python&full_time=true&location=sf')
//     .then((res) => {
//       console.log(res);
//       // TODO implement
//       const response = {
//         statusCode: 200,
//         //  Uncomment below to enable CORS requests
//         headers: {
//           'Access-Control-Allow-Origin': '*',
//           'Access-Control-Allow-Headers': '*',
//         },
//         body: JSON.stringify(`Hello from Lambda! ${jobs.data.text}`),
//       };
//       return response;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

exports.foo = async (event) => {
  try {
    const res = await axios.post(
      'https://jobs.github.com/positions.json?description=python&full_time=true&location=sf',
      {}
    );
    console.log(res);
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
