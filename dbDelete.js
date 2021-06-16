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
    // delete from database using username as identifier
    Key: {
      username: username,
    },
  };

  try {
    const data = await documentClient.delete(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 204;
  } catch (err) {
    // change "location" as required
    responseBody = `Unable to delete location: ${err}`;
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
