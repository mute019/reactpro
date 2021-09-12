//import logo from './logo.svg';
//import './App.css';

const Hello = (props) => (
  <div>
    <p> Hello {props.attrib}, it's your time to learn something </p>
    <p> Your age is {props.age} </p>
    </div>
)

const App = () => {
  const now = new Date();
  const a = 10, b = 10;
  var age = 20; 
  
  return (
    <div>
      <h1> Greetings </h1>
      <p> Hello World!!, Now it is {now.toDateString()} </p>
      <br />
      <Hello attrib="Bijoy" age = {age}/>
      <br />
      <p>
        {a} + {b} is {a+b}
        </p>
    </div>
  )
}


export default App;

