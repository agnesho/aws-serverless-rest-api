# aws-serverless-rest-api

### Build serverless REST API with AWS Lambda, API Gateway and DynamoDB to perform CRUD operations

#### AWS DynamoDB
1. Set up DynamoDB database


#### AWS Identity & Access Management
2. Create new IAM role
    - Lambda use case
    - Attach permissions policy: AWSLambdaBasicExecutionRole
    - Add inline policy:
        - Service - DynamoDB
        - Actions - PutItem, DeleteItem, GetItem, Scan, UpdateItem
        - Resources - Add DynamoDB's ARN to allow access to this database only


#### AWS Lambda
3. Create Lambda function
    
4. Copy and paste in code from this Git repo to Lambda function's 'index.js' file
    - Files in Git repo:

        File | Purpose
        --------- | ----------
        dbDelete.js | delete item
        dbGetItem.js | get single item
        dbGetItems.js | get all items
        dbPut.js | post item
        dbUpdateItem.js | patch item


#### AWS API Gateway
5. Build REST API
    - Create Resource
        - [x] Enable API Gateway CORS
    - Create Method (under Resource)
        - [x] Integration type: Lambda Function
        - [x] Use Lambda Proxy integration
        - Search for Lambda Region and input Lambda Function
    - Configure Method Request, Create Models as required
    
6. Deploy API

7. API is now ready for use with your application client!
    - Copy and paste Invoke URL into application


#### Video Resources
- AWS Serverless tutorial [Part I](https://youtu.be/VGerk8hrP9U)
- AWS Serverless tutorial [Part II](https://youtu.be/xJvfcg9dW4U)
        
