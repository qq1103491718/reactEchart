import React, { Component } from 'react'
import { Map, Markers } from 'react-amap'
// 导入天气图标计算方法
import { mixinWeatch } from '../../js/common'
// 导入城市数据
import citys from '../../data/citys'
const mapKey = '280df7c18bd28c1aae785c01c36ed6dc' //需要自己去高德官网上去申请
const citysData = citys.map((item, index) => {
  item['icon'] = {
    image: mixinWeatch(item.type),
    // 图片尺寸
    size: [64, 30],
    // 图片相对 position 的锚点，默认为 bottom-center
    anchor: 'center',
  }
  return item
})
class Address extends Component {
  constructor() {
    super();
    this.amapEvents = {
      created: (mapInstance) => {
        console.log('高德地图 Map 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
        console.log(mapInstance.getZoom());
      }
    };
    this.markerEvents = {
      created: (markerInstance) => {
        console.log('高德地图 Marker 实例创建成功；如果你要亲自对实例进行操作，可以从这里开始。比如：');
        console.log(markerInstance.getPosition());
      }
    }
    this.state = {
      markers: citysData
    }

  }

  render () {
    return <div style={{ width: '100%', height: '79vh' }}>
      <Map events={this.amapEvents}
        amapkey={mapKey}>
        <Markers
          markers={this.state.markers}
        />
      </Map>
    </div>
  }
}

export default Address
