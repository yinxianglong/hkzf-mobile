import React from 'react'

// 导入路由
import { Route } from 'react-router-dom'
// 导入TabBar
import { TabBar } from 'antd-mobile';
// 导入组件自己的样式文件
import './index.css'

import News from '../News'
import Index from '../Index'
import HouseList from '../HouseList'
import Profile from '../Profile'

const tabItems = [
  {
    title:'首页',
    icon:'icon-ind',
    path:'/home'
  },
  {
    title:'找房',
    icon:'icon-findHouse',
    path:'/home/houseList'
  },
  {
    title:'资讯',
    icon:'icon-infom',
    path:'/home/news'
  },
  {
    title:'我的',
    icon:'icon-my',
    path:'/home/profile'
  },
]
export default class Home extends React.Component{
    state = {
        // 默认选中的TabBar菜单项
        selectedTab: this.props.location.pathname
    }
    // 渲染TabBarItem
    renderTabBarItem(){
      return tabItems.map(item=> <TabBar.Item 
        title={item.title} 
        key={item.title} 
        icon={ <i className={`iconfont ${item.icon}`}/> } 
        selectedIcon={ <i className={`iconfont ${item.icon}`}/> } 
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.setState({
              selectedTab: item.path,
          });
          // 路由切换
          this.props.history.push(item.path)
        }}
      />)
    }
    render(){
        return (
            <div className="home"> 
              {/* 渲染子路由 */}
              <Route path="/home/news" component={ News} />
              <Route path="/home" exact component={ Index } />
              <Route path="/home/houseList" component={ HouseList} />
              <Route path="/home/profile" component={ Profile } />

                <TabBar unselectedTintColor="#888" tintColor="  #21b97a" barTintColor="white" noRenderContent="true">
                  {this.renderTabBarItem()}
                </TabBar>
            </div>
        )
    }
}