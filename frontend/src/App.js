import './App.css';
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Logout from './components/Logout';
import PaymentSuccessfull from './components/PaymentSuccessfull';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/login'>
        <Header />
          <Login />
        </Route>
        <Route path='/checkout'>
        <Header />
          <Checkout />
        </Route>
        
        <Route path='/payment'>
        <Header />
        <Payment />
        </Route>
        <Route path='/status'>
          <Header />
          <PaymentSuccessfull />
        </Route>
        <Route path='/logout'>
          <Logout />
        </Route>
        <Route path='/'>
        <Header />
        <Home />
        </Route>

        
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
