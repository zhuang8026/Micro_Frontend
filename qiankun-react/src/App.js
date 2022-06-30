import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// home
import Setting from './pages/Setting/index.js';
import Password from './pages/Password/';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/sub-react/setting">
          <span>Setting</span>
        </Link>
        <div></div>
        <Link to="/sub-react/pwd">
          <span>Password</span>
        </Link>
      </div>

      <Switch>
        <Route exact path="/sub-react/setting">
          <Setting />
        </Route>
        <Route exact path="/sub-react/pwd">
          <Password />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
