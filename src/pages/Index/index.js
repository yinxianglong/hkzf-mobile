import React from 'react'
import { Carousel,Flex } from 'antd-mobile';
import axios from 'axios'
import './index.css'
import Nav1 from '../../assets/images/nav-1.png'
import Nav2 from '../../assets/images/nav-2.png'
import Nav3 from '../../assets/images/nav-3.png'
import Nav4 from '../../assets/images/nav-4.png'

const navs = [
  {
    id: 1,
    img: Nav1,
    title: '整租',
    path: '/home/list'
  },
  {
    id: 2,
    img: Nav2,
    title: '合租',
    path: '/home/list'
  },
  {
    id: 3,
    img: Nav3,
    title: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    img: Nav4,
    title: '去出租',
    path: '/rent'
  }
]
/* 
  轮播图存在两个问题：
  1.不会自动播放
  2.从其他路由返回的时候，高度不够

  原因：轮播图数据是动态加载的，加载完成前后轮播图数量不一致

  如何解决？
  1.在state中添加表示轮播图加载完成的数据
  2.在轮播图数据加载完成时，修改该数据状态值为true
  3.只有在轮播图数据加载完成的情况下，才渲染轮播图组件
*/
export default class Index extends React.Component{
      state = {
        // 轮播图状态数据
        swipers:[1,2,3],
        isSwiperLoaded:false
      }

      // 获取轮播图数据的方法
      async getSwipers(){
          const res = await axios.get('http://localhost:8080/home/swiper')
          console.log('轮播图数据：',res)
          this.setState({
            swipers:res.data.body,
            isSwiperLoaded:true
          })
      }
      renderSwipers(){
        return this.state.swipers.map(item => (
            <a
            key={item.id}
            href="http://www.alipay.com"
            style={{ display: 'inline-block', width: '100%', height: 212 }}
            >
            <img
                src={`http://localhost:8080${item.imgSrc}`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
            />
            </a>
        ))
      }
      renderNavs(){
        return navs.map(item => (
          <Flex.Item key={item.id} onClick={()=>this.props.history.push(item.path)}>
            <img src={item.img} alt=""/>
            <span>{item.title}</span> 
          </Flex.Item>
        ))
      }
      componentDidMount() {
        this.getSwipers()
      } 
      render() {
        return (
            <div className="index">
              <div className="swiper">
                {
                  this.state.isSwiperLoaded?
                  <Carousel autoplay infinite >{this.renderSwipers()}</Carousel>:''
                }
              </div>
              
                
                <Flex className="nav">
                  {this.renderNavs()}
                </Flex>
            </div>
        );
      }
}