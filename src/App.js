import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { action } from './store/index'
function App() {

  const account = useSelector((store) => store.account);
  const dispatch = useDispatch()

  const {depositmoney, withDrawMoney} = bindActionCreators(action, dispatch);

  // console.log(Account);

  // console.log(state);
  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={()=> depositmoney(1000)}> Deposit </button>
      <button onClick={()=> withDrawMoney(1000)}>  widthdraw </button>
    </div>
  );
}

export default App;
