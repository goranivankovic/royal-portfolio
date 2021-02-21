

import Page1 from './components/Page1';
import Page2 from './components/Page2';
import  {BrowserRouter,Switch,Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Switch>

        <Route exact path="/" component={Page1} />
        <Route exact path="/about" component={Page2} />


        <Route exact path='*' component={()=>{return <div><h1>404 NOT FOUND</h1></div>}} />

    
    
    
       </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
