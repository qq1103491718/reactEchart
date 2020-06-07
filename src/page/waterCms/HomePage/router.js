import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//引入首页地图
import Amap from '../../../components/map/map';
// 导入首页图表导航条
import HeaderNav from './common/headerNav'
// 导入首页/cms/homePage 子页面
import LineEcharts from './lineEchart'
import PhotoViewer from './photoViewer'
import WaterEchart from './waterEchart'
import RoseEchart from './roseEchart'

// 导入样式
import '../../../css/homePage.less'
class Routers extends React.Component {
  componentDidUpdate () {
  }
  render () {
    return <div style={{ width: '100%', display: 'flex' }}>
      <Route path="/cms/homePage/aMap" component={Amap} />
      <Redirect exact from={'/cms/homePage'} to={"/cms/homePage/aMap"}></Redirect>
      {this.props.history.location.pathname !== "/cms/homePage/aMap" ?
        <div className='cms-homepage-content'>
          <div>
            <span>
              {localStorage.getItem('city')}
              {/* {this.props.location.state ? this.props.location.state.data.placeName : ''} */}
            </span>
          </div>
          <div>
            <HeaderNav history={this.props.history}></HeaderNav>
            <div>
              <Route path='/cms/homePage/lineEchart' component={LineEcharts}></Route>
              <Route path='/cms/homePage/photoViewer' component={PhotoViewer}></Route>
              <Route path='/cms/homePage/waterEchart' component={WaterEchart}></Route>
              <Route path='/cms/homePage/roseEchart' component={RoseEchart}></Route>
            </div>
          </div>
        </div> : ''}
    </div>
  }
}

export default Routers;