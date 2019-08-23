## Simple Todo App with AWS amplify. 
Follow these 6 steps to create a simple app with graphql and DynamoDB in 10 minutes.
Every step is tagged in git, you can see a tag specified in parentesis.
### Steps
1. Create a React app from the template(create_npx)
  * npx create-react-app todo-list
  * cd todo-list
  * npm start

2. Install aws-amplify and configure (this will create an IAM user and add key for programmatic access)
  * npm install -g @aws-amplify/cli
  * amplify configure
    > Choose region eu-west-1    
    Create user amplify-todo

3. Initialize Amplify(amplify_init)
  * amplify init
    > use default

4. Add hosting in S3(add_hosting)
  * amplify hosting add

5. Add GraphQL API and DynamoDB(add_graphql)
  * amplify add api
  * amplify push

6. Add client side code to show todolist (add_client_code)
  * npm install @material-ui/core
  * npm install --save aws-amplify
  * npm install aws-amplify-react
  * edit App.js file add and html table to show the items 

