import React, { Component } from 'react';
import '../../../../css/homePage.less'
import { CloseOutlined } from '@ant-design/icons';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleNav: [
        { name: "综合过程线图", pathName: 'lineEchart' },
        { name: "水位散点图", pathName: 'waterEchart' },
        { name: "图像", pathName: 'photoViewer' },
        { name: "玫瑰图 ", pathName: 'roseEchart' }
      ]
    }
  }
  render () {
    return <div className='cms-homepage-header-nav'>
      <ul>
        {
          this.state.titleNav.map((item, index) => <li key={index}>
            <span
              style={{ color: (this.props.history.location.pathname.indexOf(item.pathName) > -1) ? "#409eff" : "" }}
              onClick={() => {
                this.props.history.push({ pathname: `/cms/homePage/${item.pathName}`, query: { data: item } })
              }}>{item.name}</span>
            <span className={this.props.history.location.pathname.indexOf(item.pathName) > -1 ? 'blue-solid' : ''}></span>
          </li>)
        }
      </ul>
      <CloseOutlined />
    </div>
  }
}
export default App