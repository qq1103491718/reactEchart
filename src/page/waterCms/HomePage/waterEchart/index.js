// 水位散点图
import React, { Component } from 'react';
import '../../../../css/homePage.less'
import { DatePicker, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import initWaterEchart from './initWaterEchar'
const dateFormat = 'YYYY/MM/DD hh:mm:ss';
const { RangePicker } = DatePicker;

class App extends Component {
  componentDidMount () {
    initWaterEchart()
  }
  render () {
    return <div>
      <div className="cms-home-time-picker">
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
        <Button type="primary" icon={<SearchOutlined />}>
          检索
       </Button>
      </div>
      <div id="main" style={{ flex: 1 }}>
      </div>
    </div>
  }
}
export default App