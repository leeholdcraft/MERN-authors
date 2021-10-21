import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Router} from '@reach/router';
import Dashboard from "./components/Dashboard.js";
import Form from "./components/CreateNew.js";
import Edit from './components/EditAuthors.js';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="Container">
      <Router>
          <Dashboard path="/" />
          <Form path="/api/authors/new" />
          <Edit path="/api/authors/update/:id" />
      </Router>
    </div>
  );
}

export default App;
