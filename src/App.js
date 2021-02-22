
import React from 'react'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import  {BrowserRouter,Switch,Route} from 'react-router-dom'


export default class App extends React.Component{
  constructor(){
    super()
  }
  render(){
  return (
    <BrowserRouter>
    <div className="app">
      <Switch>

        <Route exact path="/" component={Page1} />
        <Route exact path="/about" component={Page2} />
        <Route exact path="/skills" component={Page3} />
        <Route exact path="/portfolio" component={Page4} />


        <Route exact path='*' component={()=>{return <div><h1>404 NOT FOUND</h1></div>}} />

    
    
    
       </Switch>
    </div>
    </BrowserRouter>
  );
}
}

