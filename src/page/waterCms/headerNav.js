import React from 'react'
import '../../css/water-cms.less'
import { Input, Button } from 'antd';
import {
  DownOutlined,
  ClockCircleOutlined,
  AudioOutlined,
  SearchOutlined
} from '@ant-design/icons';
// 首页头部
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
    }}
  />
);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navs: [
        { name: '首页', path: '' },
        { name: '雨情', path: '' },
        { name: '河道水情', path: '' },
        { name: '水库水情', path: '' },
        { name: '自动测流', path: '' },
        { name: '气象', path: '' },
        { name: '蒸发', path: '' },
        { name: '水温', path: '' },
        { name: '墒情', path: '' },
        { name: '冰情', path: '' },
        { name: '实验室', path: '' },
        { name: '视频', path: '' },
        { name: '图像', path: '' },
        { name: '全景', path: '' },
      ]
    };
  }
  componentWillMount () {
  }
  render () {
    let navs = this.state.navs.map((item, index) => {
      return <li key={index}>{item.name}</li>
    })
    return <div className='water-cms-nav-header'>
      <div className='left'>
        <ul>
          {navs}
        </ul>
      </div>
      <div className="right">
        <span>全国</span>
        <DownOutlined />
        <ClockCircleOutlined />
        <div>
          <Input
            placeholder="请输入关键字"
            size="large"
            suffix={suffix}
          />
          <Button type="primary" icon={<SearchOutlined />} />
        </div>

      </div>
    </div>
  }
}
export default App;