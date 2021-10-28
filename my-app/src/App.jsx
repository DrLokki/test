import Home from './view/Home/index.jsx';
import FilamentsForm from './view/FilamentsForm/index.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={FilamentsForm} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
