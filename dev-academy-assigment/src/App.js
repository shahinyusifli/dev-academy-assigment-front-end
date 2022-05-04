import './App.css';


import Dashboard from './Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuDirect from './MenuDirect';


const App =() => {
  // const Hello = ( ) => {
  //   return <p> hello </p>
  // }
  return (
    <Router>
      <div className="App">
      <MenuDirect />
        <div className="content">
          <Routes>
          
            <Route exact path="/" element={<Dashboard />}>
              {/* <PizzaEmptyTest /> */}
            </Route>
            


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;