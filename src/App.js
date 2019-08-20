import React from 'react';
import logo from './logo.svg';
import awsconfig from './aws-exports';
import Amplify, { API,Auth,Storage, graphqlOperation } from 'aws-amplify';
import { listTodos} from './graphql/queries';
import { withAuthenticator } from 'aws-amplify-react';
import Grid from '@material-ui/core/Grid';
import "./Card.css";


Amplify.configure(awsconfig);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        todos : []
    };
  }
  async getTodos(){
   try{
     let promise  = await API.graphql(graphqlOperation(listTodos));
     let todos = [{name:"Name", description:"Description", priority:"Priority"}];
     todos.push.apply(todos, promise.data.listTodos.items);
     console.log("TODOS from DB", todos);
     this.setState({todos:todos});
     console.log(this.state.todos);
   } catch (e) {
        console.log("Get countries query error", e);
   }
  }
  
  componentDidMount() {
    this.getTodos();
  }
  
  render() {
  return (
    //input form
    <div className="App">
     <table>
      <tbody>
        {this.state.todos.map(i=>
          <tr>
            <td>{i.name}</td>
            <td>{i.description}</td>
            <td>{i.priority}</td>
          </tr>
        )}
      </tbody>
    </table>
   </div>

  );
  }
}
export default App;
