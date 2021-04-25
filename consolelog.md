erminal
Judys-MBP:goatdiag_io kyle$ amplify add api
? Please select from one of the below mentioned services: REST
? Provide a friendly name for your resource to be used as a label for this categ
ory in the project: goatdiagapi
? Provide a path (e.g., /book/{isbn}): /items
? Choose a Lambda source Create a new Lambda function
? Provide an AWS Lambda function name: goatdiaglambda
? Choose the runtime that you want to use: NodeJS
? Choose the function template that you want to use: Serverless ExpressJS functi
on (Integration with API Gateway)

Available advanced settings:
- Resource access permissions
- Scheduled recurring invocation
- Lambda layers configuration

? Do you want to configure advanced settings? Yes
? Do you want to access other resources in this project from your Lambda functio
n? No
? Do you want to invoke this function on a recurring schedule? No
? Do you want to configure Lambda layers for this function? No
? Do you want to edit the local lambda function now? No
Successfully added resource goatdiaglambda locally.

Next steps:
Check out sample function code generated in <project-dir>/amplify/backend/function/goatdiaglambda/src
"amplify function build" builds all of your functions currently in the project
"amplify mock function <functionName>" runs your function locally
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
Succesfully added the Lambda function locally
? Restrict API access Yes
? Who should have access? Authenticated users only
? What kind of access do you want for Authenticated users? create, read, update,
 delete
? Do you want to add another path? No
Successfully added resource goatdiagapi locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Judys-MBP:goatdiag_io kyle$ \
>
Judys-MBP:goatdiag_io kyle$
\Judys-MBP:goatdiag_io kyle$ \
Judys-MBP:goatdiag_io kyle$ amplify push
✔ Successfully pulled backend environment degv from the cloud.

Current Environment: degv

| Category | Resource name      | Operation | Provider plugin   |
| -------- | ------------------ | --------- | ----------------- |
| Function | goatdiaglambda     | Create    | awscloudformation |
| Api      | goatdiagapi        | Create    | awscloudformation |
| Auth     | goatdiagiod732f975 | No Change | awscloudformation |
? Are you sure you want to continue? Yes
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-goatdiagio-degv-24905 AWS::CloudFormation::Stack Sun Apr 25 2021 10:41:38 GMT-0500 (Central Daylight Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS functiongoatdiaglambda AWS::CloudFormation::Stack Sun Apr 25 2021 10:41:43 GMT-0500 (Central Daylight Time)
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS authgoatdiagiod732f975 AWS::CloudFormation::Stack Sun Apr 25 2021 10:41:43 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS functiongoatdiaglambda AWS::CloudFormation::Stack Sun Apr 25 2021 10:41:44 GMT-0500 (Central Daylight Time) Resource creation Initiated
UPDATE_COMPLETE    authgoatdiagiod732f975 AWS::CloudFormation::Stack Sun Apr 25 2021 10:41:44 GMT-0500 (Central Daylight Time)                            
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-goatdiagio-degv-24905-functiongoatdiaglambda-1U1N4CGI4B54S AWS::CloudFormation::Stack Sun Apr 25 2021 10:41:44 GMT-0500 (Central Daylight Time) User Initiated             
CREATE_IN_PROGRESS LambdaExecutionRole                                                AWS::IAM::Role             Sun Apr 25 2021 10:41:48 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS LambdaExecutionRole                                                AWS::IAM::Role             Sun Apr 25 2021 10:41:49 GMT-0500 (Central Daylight Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    LambdaExecutionRole AWS::IAM::Role        Sun Apr 25 2021 10:42:00 GMT-0500 (Central Daylight Time)
CREATE_IN_PROGRESS LambdaFunction      AWS::Lambda::Function Sun Apr 25 2021 10:42:03 GMT-0500 (Central Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS LambdaFunction        AWS::Lambda::Function Sun Apr 25 2021 10:42:04 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_COMPLETE    LambdaFunction        AWS::Lambda::Function Sun Apr 25 2021 10:42:04 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS lambdaexecutionpolicy AWS::IAM::Policy      Sun Apr 25 2021 10:42:06 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS lambdaexecutionpolicy AWS::IAM::Policy      Sun Apr 25 2021 10:42:07 GMT-0500 (Central Daylight Time) Resource creation Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE lambdaexecutionpolicy AWS::IAM::Policy Sun Apr 25 2021 10:42:19 GMT-0500 (Central Daylight Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-goatdiagio-degv-24905-functiongoatdiaglambda-1U1N4CGI4B54S AWS::CloudFormation::Stack Sun Apr 25 2021 10:42:21 GMT-0500 (Central Daylight Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE functiongoatdiaglambda AWS::CloudFormation::Stack Sun Apr 25 2021 10:42:31 GMT-0500 (Central Daylight Time)
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS apigoatdiagapi AWS::CloudFormation::Stack Sun Apr 25 2021 10:42:33 GMT-0500 (Central Daylight Time)
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS apigoatdiagapi AWS::CloudFormation::Stack Sun Apr 25 2021 10:42:34 GMT-0500 (Central Daylight Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-goatdiagio-degv-24905-apigoatdiagapi-1FKXZG5LU5G5G AWS::CloudFormation::Stack Sun Apr 25 2021 10:42:34 GMT-0500 (Central Daylight Time) User Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS goatdiagapi                                 AWS::ApiGateway::RestApi    Sun Apr 25 2021 10:42:39 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS goatdiagapi                                 AWS::ApiGateway::RestApi    Sun Apr 25 2021 10:42:40 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_COMPLETE    goatdiagapi                                 AWS::ApiGateway::RestApi    Sun Apr 25 2021 10:42:41 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS functiongoatdiaglambdaPermissiongoatdiagapi AWS::Lambda::Permission     Sun Apr 25 2021 10:42:43 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS DeploymentAPIGWgoatdiagapi                  AWS::ApiGateway::Deployment Sun Apr 25 2021 10:42:43 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS PolicyAPIGWgoatdiagapiauth                  AWS::IAM::Policy            Sun Apr 25 2021 10:42:43 GMT-0500 (Central Daylight Time)                            
CREATE_IN_PROGRESS functiongoatdiaglambdaPermissiongoatdiagapi AWS::Lambda::Permission     Sun Apr 25 2021 10:42:43 GMT-0500 (Central Daylight Time) Resource creation Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS DeploymentAPIGWgoatdiagapi AWS::ApiGateway::Deployment Sun Apr 25 2021 10:42:44 GMT-0500 (Central Daylight Time) Resource creation Initiated
CREATE_IN_PROGRESS PolicyAPIGWgoatdiagapiauth AWS::IAM::Policy            Sun Apr 25 2021 10:42:44 GMT-0500 (Central Daylight Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE DeploymentAPIGWgoatdiagapi AWS::ApiGateway::Deployment Sun Apr 25 2021 10:42:44 GMT-0500 (Central Daylight Time)
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE functiongoatdiaglambdaPermissiongoatdiagapi AWS::Lambda::Permission Sun Apr 25 2021 10:42:53 GMT-0500 (Central Daylight Time)
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE PolicyAPIGWgoatdiagapiauth                                 AWS::IAM::Policy           Sun Apr 25 2021 10:42:55 GMT-0500 (Central Daylight Time)
CREATE_COMPLETE amplify-goatdiagio-degv-24905-apigoatdiagapi-1FKXZG5LU5G5G AWS::CloudFormation::Stack Sun Apr 25 2021 10:42:57 GMT-0500 (Central Daylight Time)
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE apigoatdiagapi AWS::CloudFormation::Stack Sun Apr 25 2021 10:43:08 GMT-0500 (Central Daylight Time)
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-goatdiagio-degv-24905 AWS::CloudFormation::Stack Sun Apr 25 2021 10:43:10 GMT-0500 (Central Daylight Time)
UPDATE_COMPLETE                     authgoatdiagiod732f975        AWS::CloudFormation::Stack Sun Apr 25 2021 10:43:11 GMT-0500 (Central Daylight Time)
UPDATE_COMPLETE                     amplify-goatdiagio-degv-24905 AWS::CloudFormation::Stack Sun Apr 25 2021 10:43:12 GMT-0500 (Central Daylight Time)
⠇ Updating resources in the cloud. This may take a few minutes...⠋ Uploading fil✔ All resources are updated in the cloud

REST API endpoint: https://gud3mfjr6c.execute-api.us-east-1.amazonaws.com/degv

Judys-MBP:goatdiag_io kyle$
