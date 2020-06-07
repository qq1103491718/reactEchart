import React from 'react'
import '../../../css/homePage.less'
import {
  PlusOutlined
  , LeftOutlined
  , SwapOutlined
  , PictureOutlined
  , SwapLeftOutlined
} from '@ant-design/icons';
// 导入城市数据
import citys from '../../../data/citys'
// 导入图标计算方法
import { mixinWeatch } from '.././../../js/common.js'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 导航旁边导航元素
      navList: citys,
      // is控制正序或倒叙 都不显示默认为0 正序为1 倒序为2
      is: 0,
      // 显示控制隐藏侧边栏
      navIsShow: true,
    }
    // 绑定跳转函数
    this.handleRouterDetails = this.handleRouterDetails.bind(this);
  }
  // 1为正序 2为倒序
  filterSort (type) {
    this.setState({ is: type })

    let res = type === 1 ? 1 : -1
    let arr = this.state.navList.sort((a, b) => {
      if (a.type >= b.type) {
        return res
      } else {
        return -res
      }
    })
    this.setState({ navList: arr, showSwaoOutLine: true })
  }
  // 综合线图详情
  handleRouterDetails (e) {

    localStorage.setItem('city', e.placeName)
    this.props.history.push({ pathname: '/cms/homePage/lineEchart', state: { data: e } })
  }
  render () {
    return <div className={this.state.navIsShow ? "home-page-nav box" : 'home-page-nav-hidden'}>
      <div className='title'>
        <PlusOutlined />
        <span>搜索</span>
        <LeftOutlined
          rotate={this.state.navIsShow ? 0 : 180}
          onClick={() => { this.setState({ navIsShow: !this.state.navIsShow }) }} />
      </div>
      <div>
        <span>
          共{this.state.navList.length}个测站
        </span>
        {!this.state.showSwaoOutLine ? <SwapOutlined rotate={90}
          onClick={() => { this.filterSort(2) }} /> : ''}
        {this.state.is === 1 ? <SwapLeftOutlined rotate={90}
          onClick={() => { this.filterSort(2) }} /> : ''}
        {this.state.is === 2 ? <SwapLeftOutlined rotate={-90}
          onClick={() => { this.filterSort(1) }} /> : ''}
      </div>
      <div>
        <ul>
          {
            this.state.navList.map((item, index) => <li key={index}>
              <img
                alt='index'
                src={mixinWeatch(item.type)}></img>
              <div>
                <span>{item.placeName}</span>
                <span>{item.waterPlace}</span>
              </div>
              <div>
                <PlusOutlined />
                <PictureOutlined onClick={() => this.handleRouterDetails(item)} />
              </div>
            </li>
            )
          }
        </ul>
      </div>
    </div>
  }
}