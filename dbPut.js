"use strict";
const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { username, address } = JSON.parse(event.body);

  const params = {
    // change TableName as required, "BrainhackDB" is a placeholder
    TableName: "BrainhackDB",
    Item: {
      username: username,
      address: address,
    },
  };

  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    // change "location" as required
    responseBody = `Unable to put location: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*"
    },
    body: responseBody,
  };

  return response;
};
