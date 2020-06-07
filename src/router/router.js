//引入

import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
//引入组件
import Login from '../page/register/login';
import WaterCms from '../page/waterCms/index';
//创建主路由
const App = () => (
  <HashRouter>
    <Route path="/login" exact component={Login} />
    <Route path="/cms" component={WaterCms} ></Route>
    <Redirect exact from="/ " to="/login"></Redirect>
  </HashRouter>
)


export default App;