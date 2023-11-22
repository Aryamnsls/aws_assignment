# aws_assignment
AWS_Assignment

Task 1 

1.Create a free AWS account if you already don’t have one.
2.Deploy a sample node.js(express.js) application on Elastic Beanstalk . You may even deploy a REST API
POST request that returns Hello World on requesting the API.
3.Deploy an ALB in front of Elastic Beanstalk (EC2 instances) to handle the API requests. Configure the
load balancer to perform health checks at /health route.
4.You have to use nginx as reverse proxy in server.
5.After Configuring the load balancer, the server should return 200 responses on health checks.
6.In the image below, as you can see the request logs button, download the complete log file and attach
it in the response you will be sending us. You will find this your elastic beanstalk environment.
7.Along with the log file , make sure to send us the snippet image of the complete recent Event logs and
the environment overview as demonstrated below.


Task 2 -> Solution 

To create a secure and compliant cloud-based application that manages users' critical data in AWS, consider the following:

 Network Layer Security:

1.  Amazon VPC (Virtual) Private Cloud): Create a VPC to isolate application resources from the public Internet and create a private network.

2. Amazon VPC Gateways: Use public and private gateways to control access to the VPC. The public gateway only allows traffic from IP addresses or AWS services.

3. Amazon Security Groups: Use security groups to define firewall rules to manage traffic in and out of the individual fulfillment center.

4. Amazon Inspector: Use Amazon Inspector to continuously monitor network connections for vulnerabilities and security issues.

Application Layer Security:

1. AWS Identity and Access Management (IAM): Implement IAM roles and policies to provide customers access to specific AWS resources. Granular access permissions for operations and operations based on the principle of least necessity.

2. Amazon Cognito: Use Amazon Cognito for user authentication and authorization to securely manage user identities.

3. Amazon API Gateway: The Amazon API Gateway application provides a secure and scalable interface for authorized users to access RESTful API applications.

4. Amazon Web Application Firewall (WAF): Use AWS WAF to protect applications from web vulnerabilities such as SQL injection, cross-site scripting (XSS), and DDoS attacks.

Data encryption: 

1. Encrypting data at rest: Encrypt sensitive data at rest using Amazon Key Management Service (KMS) and services like Amazon S3, DynamoDB, and Aurora.

2. Encryption of data in transit: Data in transfer is encrypted using Transport Layer Security (TLS) 1.3 or higher to protect confidential information during transmission.

3. Amazon KMS: Use Amazon KMS to securely manage and rotate encryption keys.

Check and save:

1. Amazon CloudWatch: Use Amazon CloudWatch to collect and monitor logs from AWS services, worker requests, and user activities.

2. Amazon CloudTrail: Use Amazon CloudTrail to monitor and track all API calls to AWS resources; Provide detailed information about users and their activity levels.

3. Amazon CloudWatch Logs: Leverage Amazon CloudWatch Logs to centralize and analyze applications to understand security events and potential problems.

Compatibility:

1. AWS Artifact: Leverage AWS Artifact to manage Infrastructure as Code (IaC) deployments to ensure security policy compliance and Compliance.

2. AWS Config: Implement AWS Config to continuously monitor and audit AWS resources to ensure they comply with security best practices and standards.

3. AWS Well-Architected Framework: Follow the AWS Well-Architected Framework to design, build and run secure, reliable and cost-effective cloud-based applications.

 Other security measures:

1. Periodic Security Audits: Penetration tests and vulnerability tests are performed regularly to identify and fix security vulnerabilities.

2. Incident Response Plan: Develop emergency response plans to troubleshoot and mitigate safety issues and restore normal operations in a timely manner.

3. Employee training: Provide security training to teach employees how to identify and prevent security threats.
