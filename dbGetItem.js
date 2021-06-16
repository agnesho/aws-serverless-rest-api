/// dbGetItem.js: get single item ///

"use strict";
const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { username } = event.pathParameters;

  const params = {
    // change TableName as required, "BrainhackDB" is a placeholder
    TableName: "BrainhackDB",
    Key: {
      username: username,
    },
  };

  try {
    const data = await documentClient.get(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 200;
  } catch (err) {
    // change "location" as required
    responseBody = `Unable to get location: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
      "access-control-allow-origin": "*",
    },
    body: responseBody,
  };

  return response;
};
