"use strict";
const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const { username, address } = JSON.parse(event.body);

  const params = {
    TableName: "BrainhackDB",
    Key: {
      username: username
    },
    // letter 'n' behind colon dis arbitrary
    UpdateExpression: "set address = :n",
    // here we specify what we want to update it to
    ExpressionAttributeValues: {
      ":n": address,
    },
  };

  try {
    const data = await documentClient.update(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch (err) {
    responseBody = `Unable to update location: ${err}`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: responseBody,
  };

  return response;
};