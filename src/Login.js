
import './Login.css';
import './index.css'
// import React, { useState } from 'react'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import imgUrl from './tesla.svg'
import { useState } from 'react';
const { Title } = Typography;

function Login(props) {
  // 成功失败
  const success = (username) => {
    message.success( '登录成功,欢迎您'+ username);
  };
  const [rotate,setRotate] = useState(false);
  const error = () => {
    message.error('账号或密码错误,请重新输入!');
  };
  // 提交表单的回调
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
     if(values.username === 'LeYi' && values.password ==='123456'){
      success(values.username)
      setRotate(true)
      setTimeout(()=>{
        props.history.push({
          pathname:'/result',
          state:{
            username:values.username
          }
        })
      },800)
      
     }else{  
       console.log(Form);
       
      error()
     }
  };
  return (
     <div className="container-body"   >
       <div  className={`login-body  ${(rotate ? 'rotate' : null)}`}>
         <div className="login-left">
           <div>
            <img src={imgUrl} className="tesla" alt=""></img>
            <Title className="brake">I can't brake</Title>
            </div>
         </div>
         <div className="login-right">
           <Title level={2} className="login-title">欢迎登陆xxx平台</Title >
         <Form
        layout="vertical"
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish.bind(this)}
    >
      <Form.Item 
        name="username"
        label="用户名"
        rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
      >
        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
      </Form.Item>
      <Form.Item
        name="password"
        label="密码"
        dependencies={['password']}
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
       
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>下次自动登录</Checkbox>
        </Form.Item>

      </Form.Item>

      <Form.Item>
        <Button type="primary"  block htmlType="submit" className="login-form-button">
          登 录
        </Button>
      </Form.Item>
    </Form>
         </div>
       </div>
     </div>
  );
}

export default Login;
