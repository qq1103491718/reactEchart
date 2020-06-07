// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 导入雷达图
import 'echarts/lib/chart/radar';
export default function () {
  // 获取eChartDom节点
  var myChart = echarts.init(document.getElementById('main'));
  var data = [{
    name: '风玫瑰',
    value: [128, 136, 112, 168, 232, 336, 458, 569, 165, 146, 87, 35, 200, 400, 300, 200]
  }]
  var indicatorData = [
    { name: 'N', max: 600 },
    { name: 'NNE', max: 600 },
    { name: 'NE', max: 600 },
    { name: 'ENE', max: 600 },
    { name: 'E', max: 600 },
    { name: 'ESE', max: 600 },
    { name: 'SE', max: 600 },
    { name: 'SSE', max: 600 },
    { name: 'S', max: 600 },
    { name: 'SSW', max: 600 },
    { name: 'SW', max: 600 },
    { name: 'WSW', max: 600 },
    { name: 'W', max: 600 },
    { name: 'WNW', max: 600 },
    { name: 'NW', max: 600 },
    { name: 'NNW', max: 600 },
  ]
  var legendData = [];
  var seriesData = [];
  for (var i = 0; i < data.length; i++) {
    legendData.push(data[i].name)
    seriesData.push({
      value: data[i].value,
      name: data[i].name
    })
  }

  var option = {

    color: ['#d36663'],
    backgroundColor: '#f2f3f4',
    tooltip: {},
    legend: {

      itemWidth: 8,
      itemHeight: 8
    },
    radar: {
      indicator: indicatorData
    },
    series: [{
      name: '预算 vs 开销（Budget vs spending）',
      type: 'radar',
      itemStyle: { normal: { areaStyle: { type: 'default' } } },
      data: seriesData
    }]
  };
  // 绘制图表
  myChart.setOption(option);
}