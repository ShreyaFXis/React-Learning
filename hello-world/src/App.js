import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import UserGreeting from './components/UserGreeting';
import EventBind from './components/EventBind';
import NameList from './components/NameList';
import Person from './components/Person';
import Form from './components/Forms';

function App() {
  return (
    <div className="App">
    
      {/*<Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />*/}
      <Welcome/>
      {/*<Message message='You know what?' />*/}
      <Form/>
      {/* <NameList></NameList>
     <EventBind/>*/}
      {/*<UserGreeting></UserGreeting>*/}
      {/*<Counter/>
      <FunctionClick></FunctionClick>
      <ClassClick></ClassClick>
      <Hello/>*/}
    </div>
  );
}

export default App;
