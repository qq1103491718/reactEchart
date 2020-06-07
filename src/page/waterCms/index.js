import React, { Component } from 'react';
import Router from './router'
import "../../css/water-cms.less"
import { UserOutlined } from '@ant-design/icons';
class App extends Component {
  render () {
    return <div className="water-cms">
      <div className="water-cms-header">
        <div>水文气象信息自动监测集控管理系统</div>
        <div>
          <UserOutlined />
          <span>user</span>
        </div>
      </div>
      <Router ></Router>
    </div>
  }
}

export default App;