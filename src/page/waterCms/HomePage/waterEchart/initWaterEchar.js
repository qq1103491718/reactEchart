// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入散点图
import 'echarts/lib/chart/scatter';
import 'echarts/lib/component/tooltip';
// 导入线性图数据
import { lineEchars } from '../../../../data/echartData'
// 初始化散点图
export default function () {
  let y = lineEchars.re[2].V,
    x = lineEchars.re[3].V,
    z = lineEchars.re[2].T,
    data = []
  z.map((iten, index) => {
    data.push([x[index], y[index], z[index]])
    return null
  })
  // 选择dom元素
  var myChart = echarts.init(document.getElementById('main'));
  let o = {
    backgroundColor: '#f2f3f4',
    xAxis: { name: '流量(m³/s)' },
    yAxis: { name: '水位(m³)', min: 50 },
    series: [{
      symbolSize: 10,
      data,
      type: 'scatter',
      itemStyle: {
        color: '#5793f3'
      }
    }],
    tooltip: {
      trigger: 'item',
      triggerOn: "mousemove",
      showContent: true,
      formatter: function (params) {
        return `${params.data[2]}<br/>水位：${params.data[0]}(m³)<br/>流量：${params.data[1]}(m³/s)`
      }
    },
    grid: [
      { top: '8%', left: '5%', width: '90%', height: '80%' },
    ]
  };

  myChart.setOption(o)
}