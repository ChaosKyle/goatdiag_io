###Cribl.io SRE Project- GoatDiag.IO


##Problem:
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

##Requirements:
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


##Design


The front end of this application will be created with the javascript library react, which will connect to an AWS Amplify/S3 Backend.  For storage of the files we will be setting up an s3 bucket that will have least privilege setup. Authentication will be done by AWS cognito and monitoring is out of the box with amplify via cloudwatch.

#Deployment/Installation

#Install AWS CLI

#Create react app

#Configure Amplify- Build out resources

#Create Boilerplate frontend

#Add serverless backend and REST API

#Add File Destination

#Testing/QA

#Cost
