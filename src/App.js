// 引入react
import React from 'react';
// 引入路由
import { BrowserRouter as Router,Route} from 'react-router-dom'
// 引入组件
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" component={ Home }></Route>
        <Route path="/citylist" component={ CityList }></Route>
      </Router>
    </div>
  );
}

export default App;
