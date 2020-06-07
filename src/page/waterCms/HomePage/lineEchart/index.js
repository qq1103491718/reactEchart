// 综合过程线图页面
import React from 'react';
import '../../../../css/homePage.less'
import { DatePicker, Select, Button } from 'antd';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';

// 导入echarts数据
import { lineEchars } from '../../../../data/echartData'

// 导入echart
import { initEchar } from './initEchart'


const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD hh:mm:ss';
const { Option } = Select;
const children = lineEchars.re.map((item, index) => <Option key={index} >
  {item.datatype}
</Option>)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.hanldClickInitEchart = this.hanldClickInitEchart.bind(this)
    this.state = {
      lineEchars,
      selNow: [{ value: "0", label: "坝上水位", key: "0" }, { value: "1", label: "降水量", key: "1" }]
    }
  }

  componentDidMount () {
    initEchar(this.state.selNow)
  }
  // 改变Select 初始化initEchart
  hanldClickInitEchart (e) {
    this.setState({ selNow: e })
    initEchar(e)
  }
  render () {
    return <div className='cms-home-page-line-echarts'>
      <div className="cms-home-time-picker">
        <RangePicker
          defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
          format={dateFormat}
        />
        <Select
          className='cms-home-select'
          mode="multiple"
          labelInValue
          style={{ width: '100%' }}
          placeholder="请选择"
          showArrow
          defaultValue={this.state.selNow}
          onChange={(e) => this.hanldClickInitEchart(e)}
        >
          {children}
        </Select>
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

