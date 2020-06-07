//引入
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//引入组件
import HomePage from './HomePage';
import HeaderNav from './headerNav'
//创建路由
const App = () => (
  <div>
    <HeaderNav></HeaderNav>
    <Route path="/cms/homePage" component={HomePage} />
    <Redirect exact from={'/cms'} to={'/cms/homePage'}></Redirect>
  </div>
)

export default App;