import React from 'react'

// 导入路由
import { Route } from 'react-router-dom'
// 导入TabBar
import { TabBar } from 'antd-mobile';
// 导入组件自己的样式文件
import './index.css'
// 导入News组件
import News from '../News'
export default class Home extends React.Component{
    state = {
        // 默认选中的TabBar菜单项
        selectedTab: 'redTab'
    }
    // 渲染每个TabBarItem
    renderContent(pageText) {
        return (
          <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
            <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
            <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  hidden: !this.state.hidden,
                }); 
              }}
            >
              Click to show/hide tab-bar
            </a>
            <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
              onClick={(e) => {
                e.preventDefault();
                this.setState({
                  fullScreen: !this.state.fullScreen,
                });
              }}
            >
              Click to switch fullscreen
            </a>
          </div>
        );
      }
    render(){
        return (
            <div className="home">
                <TabBar
                unselectedTintColor="#888"
                tintColor="#21b97a"
                barTintColor="white"
                noRenderContent="true"
                >
                    <TabBar.Item 
                        title="首页" 
                        key="Life" 
                        icon={ <i className="iconfont icon-ind"/> } 
                        selectedIcon={ <i className="iconfont icon-ind"/> } 
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                        }}
                        data-seed="logId"
                    >
                        {this.renderContent('Life')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-findHouse" />}
                        selectedIcon={<i className="iconfont icon-findHouse" />}
                        title="找房"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                        }}
                        data-seed="logId1"
                    >
                        {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-infom" />}
                        selectedIcon={<i className="iconfont icon-infom" />}
                        title="资讯"
                        key="Friend"
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                        }}
                    >
                        {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className="iconfont icon-my" />}
                        selectedIcon={<i className="iconfont icon-my" />}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                        }}
                    >
                        {this.renderContent('My')}
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}