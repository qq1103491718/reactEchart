import React, { Component } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, KeyOutlined, LockOutlined } from '@ant-design/icons';
import '../../css/login.less'
class Register extends Component {
  constructor(props) {
    super(props);
    //在 constructor 中预先将所有的事件处理函数通过 bind 方法进行绑定
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }
  handleLoginClick () {
    this.props.history.push({ pathname: 'cms', query: { aa: 'aa' } })
  }
  render () {
    return <div className='login'>
      <div>
        <div className='title'>水文气象信息自动检测集控管理系统</div>
        <div className='form'>
          <Input size="large" placeholder="请输入您的账号" prefix={<UserOutlined />} ></Input>
          <Input size="large" placeholder="请输入您的密码" prefix={<LockOutlined />} ></Input>
          <Input size="large" placeholder="请输入验证码" prefix={<KeyOutlined />} ></Input>
          <Button type="primary" onClick={() => this.handleLoginClick()}>
            登录
        </Button>
        </div>
      </div>
    </div>
  }
}

export default Register;