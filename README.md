Cribl.io SRE Project- GoatDiag.IO


Problem:
You are part of an organization that ships software that
runs on customers environment, which may or may not
have access to the internet. In order to troubleshoot any
problems with the product the support team routinely asks
customers to collect a diagnostic bundle - a .tgz archive
with the relevant configs and logs, and send it over email.
However, recently customers have been having problems
sharing the bundle with support, either due to its size or
due to email filter restrictions. You have been tasked with
creating a service which customers will use to upload
their bundles.

Requirements:
   	Customer interface is a HTTP REST request
·   	Customer must be able to upload any size file
·   	The backend service should be able to support concurrent file uploads
·   	Support team must be able to list and download any uploaded files
·   	Must not use any pre-built file upload systems - this must be custom, purpose-built software.
·   	Minimize the number of external dependencies in the business logic code path (framework things like HTTP servers, etc are okay)
·   	Deploy the service to virtual environment of your choice, using local infra or cloud (aws, gcp)
·   	Setup up any kind of monitoring, sending logs/metrics to a monitoring service of your choice
·   	Please commit and push code changes as you normally would - your thinking and working style is an important part for us to understand.
Bonus: handle authentication and authorization using an IdP
Bonus: set up CI/CD to deploy your application


Design


The front end of this application will be created with the javascript library react, which will connect to an AWS Amplify/S3 Backend.  For storage of the files we will be setting up an s3 bucket that will have least privilege setup. Authentication will be done by AWS cognito and monitoring is out of the box with amplify via cloudwatch.

Deployment/Installation

Install AWS CLI

Create react app
https://create-react-app.dev/docs/getting-started/
npx create-react-app goatdiag
cd goatdiag

Configure Amplify- Build out resources
npm i -g @aws-amplify/cli
amplify configure
amplify init
Add serverless backend and REST API
amplify add storage
	Follow prompts
Amplify add api
Follow prompts- See Appendix
Add Domain
This can be done via amplify UI




Testing/QA

Build testing is done through amplify library:

Cost




Terminal
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
