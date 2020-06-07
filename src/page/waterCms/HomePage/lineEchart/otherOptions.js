var option = {
  xAxis: [
    {
      gridIndex: 0,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      position: 'top',
    },
    {
      gridIndex: 1,
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  ],
  yAxis: [
    {
      name: '流量(m^3/s)',
      type: 'value',
      max: 500,
      inverse: true,
      gridIndex: 0,

    },
    {
      gridIndex: 1,
      name: '降雨量(mm)',
      type: 'value',

    },
    {
      gridIndex: 1,
      name: 'sd(mm)',
      type: 'value',

    },
  ],
  series: [{
    data: [120, 200, 150, 80, 70, 110, 230],
    type: 'bar'
  }, {
    xAxisIndex: 1,
    yAxisIndex: 1,
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }, {
    xAxisIndex: 1,
    yAxisIndex: 1,
    data: [220, 2932, 3301, 234, 1290, 330, 2320],
    type: 'line'
  }],
  grid: [
    { top: '5%', left: '5%', width: '85%', height: '40%' },
    { top: '60%', left: '5%', width: '85%', height: '36%' }
  ]
};
