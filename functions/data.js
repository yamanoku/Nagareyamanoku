exports.handler = async event => {
  let data = require("./data.json");
  const params = event.queryStringParameters.section;
  if (data[params]) {
    data = data[params]
  }
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(data)
  };
  return response;
};
