// 引入react
import React from 'react';
// 按需引入组件
import {Button} from 'antd-mobile'
// 引入路由
import { BrowserRouter as Router,Route,Link } from 'react-router-dom'
// 引入组件
import Home from './pages/Home'
import CityList from './pages/CityList'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="home">首页</Link>
        <Link to="CityList">城市列表</Link>
        <Route path="/home" component={ Home }></Route>
        <Route path="/citylist" component={ CityList }></Route>
      </Router>
    </div>
  );
}

export default App;
