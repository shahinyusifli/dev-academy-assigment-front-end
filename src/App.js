import './App.css';

import PizzaPost from './Post.js';
import JustPage from './JustPage.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuDirect from './MenuDirect';
import Home from './PizzasIndex';

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
          
            <Route exact path="/" element={<JustPage />}>
              {/* <PizzaEmptyTest /> */}
            </Route>
            <Route path="create" element={<PizzaPost />} >
              {/* <Hello/> */}
              {/* <PizzaPost /> */}
            </Route>
            
            <Route path="message" element={<Home />} >
                
            </Route>


          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;