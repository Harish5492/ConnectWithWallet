import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Component/Hellofile/hello';
import Detail from './Component/Details/detail'
import Transaction from './Component/Transaction/transaction'

function App() {
  return (
    <div className="App">
      <div>
        <Hello />
      </div>
      <div>
        <Detail />
      </div>
        <div>
        <Transaction />
      </div>
      
    </div>
  );
}

export default App;
