import React from 'react'
import { Carousel } from 'antd-mobile';
import axios from 'axios'
export default class Index extends React.Component{
      state = {
        // 轮播图状态数据
        swipers:[]
      }

      // 获取轮播图数据的方法
      async getSwipers(){
          const res = await axios.get('http://localhost:8080/home/swiper')
          console.log('轮播图数据：',res)
          this.setState({
            swipers:res.data.body
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
      componentDidMount() {
        this.getSwipers()
      }
      render() {
        return (
            <div className="index">
                <Carousel autoplay infinite >
                {this.renderSwipers()}
                </Carousel>
            </div>
        );
      }
}