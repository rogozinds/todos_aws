## Simple Todo App with AWS amplify, every step is a separate tag in paranthesis.

### Create a React app from the template(create_npx)
npx create-react-app todo-list
cd todo-list
npm start

### Install aws-amplify and configure (this will create an IAM user and add key for programmatic access)
npm install -g @aws-amplify/cli
amplify configure
  >> Choose region eu-west-1
  >> Create user amplify-todo

### Initialize Amplify(amplify_init)
amplify init
>> use default

### Add hosting in S3(add_hosting)
amplify hosting add

### Add GraphQL API and DynamoDB(add_graphql)
amplify add api
amplify push

### Add client side code to show todolist (add_client_code)
npm install @material-ui/core
npm install --save aws-amplify
npm install aws-amplify-react
edit App.js file add and html table to show the items 

