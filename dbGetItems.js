/// dbGetItems.js: get all items ///

"use strict";
const AWS = require("aws-sdk");

exports.handler = async (event, context) => {
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;

  const params = {
    // change TableName as required, "BrainhackDB" is a placeholder
    TableName: "BrainhackDB",
  };

  try {
    // "Scan" iterates over entire table and return results
    const data = await documentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items);
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
    },
    body: responseBody,
  };

  return response;
};
