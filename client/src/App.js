import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';


function App() {
  return (
    <>
      <BrowserRouter>
         <Route exact path='/' component={LandingPage} ></Route>
         <Route exact path='/home' component={Home} ></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
