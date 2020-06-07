import React, { Component } from 'react';

// 导入首页侧边导航
import HomePageNav from './homePageNav'
// 导入样式
import '../../../css/homePage.less'
// 引入首页路由
import Routers from './router'

class App extends Component {
  render () {
    return <div className='cms-home-page'>
      <HomePageNav history={this.props.history}></HomePageNav>
      <Routers history={this.props.history} location={this.props.location}>
      </Routers>
    </div>
  }
}

export default App;