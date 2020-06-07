// 玫瑰图页面
import React, { Component } from 'react';
import '../../../../css/homePage.less'
import { DatePicker, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import moment from 'moment';
import { rowsEcharts } from '../../../../data/echartData'
// 初始化玫瑰图
import initRouseEchart from './initRoseEchart'
const dateFormat = 'YYYY/MM/DD hh:mm:ss';
const { RangePicker } = DatePicker;
class App extends Component {
  componentDidMount () {
    initRouseEchart()
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
      <div className='cms-rouse-echarts'>
        <div id="main" style={{ flex: 1 }}>
        </div>
        <ul className='box'>
          <li>
            <span>时间</span>
            <span>风向(°)</span>
          </li>
          {
            rowsEcharts.re.T.map((item, index) => <li key={index}>
              <span>{item}</span>
              <span>{rowsEcharts.re.V[index]}</span>
            </li>)
          }
        </ul>
      </div>
    </div>
  }
}
export default App