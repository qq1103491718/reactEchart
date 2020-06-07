// 图像页面
import React, { Component } from 'react';
import { PhotoProvider, PhotoConsumer } from 'react-photo-view';
import { Button } from 'antd'
import 'react-photo-view/dist/index.css';
import '../../../../css/homePage.less'
var photoImages = [
  'https://b-ssl.duitang.com/uploads/item/201305/28/20130528191522_VPHiF.thumb.700_0.jpeg',
  'https://b-ssl.duitang.com/uploads/item/201305/28/20130528191522_VPHiF.thumb.700_0.jpeg',
  'https://b-ssl.duitang.com/uploads/item/201305/28/20130528191522_VPHiF.thumb.700_0.jpeg',
  'https://b-ssl.duitang.com/uploads/item/201305/28/20130528191522_VPHiF.thumb.700_0.jpeg',
]

class App extends Component {
  constructor(props) {
    super(props)
    this.addPhoto = this.addPhoto.bind(this)
    this.state = {
      photoImages
    }
  }
  addPhoto () {
    let result = this.state.photoImages
    result.push(
      'http://img.zcool.cn/community/011cf15548caf50000019ae9c5c728.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/011cf15548caf50000019ae9c5c728.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/011cf15548caf50000019ae9c5c728.jpg@1280w_1l_2o_100sh.jpg',
      'http://img.zcool.cn/community/011cf15548caf50000019ae9c5c728.jpg@1280w_1l_2o_100sh.jpg',
    )
    this.setState({ photoImages: result })
  }
  render () {
    return <div className='photo-view box'>
      <PhotoProvider>
        {photoImages.map((item, index) => (
          <PhotoConsumer key={index} src={item} intro={item}>
            <img src={item} alt="" />
          </PhotoConsumer>
        ))}
      </PhotoProvider>
      <Button onClick={() => this.addPhoto()}>加载更多</Button>
    </div>
  }
}
export default App