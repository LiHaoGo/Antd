import React, { useEffect, useState } from "react";
import { Result, Button } from 'antd';
function LeYi (props){
const  goBack=()=>{
  console.log('销毁useEffect并清除计时器,跳转到登录页面');
  props.history.push('/login')
  }
  const [time,setTime] = useState('Now Time: ' + new Date().toLocaleTimeString())
  
  useEffect(()=>{
    const   timer = setInterval(()=>{
      setTime('Now Time: ' + new Date().toLocaleTimeString())     
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[])
    return (
        <Result
        status="success"
        title="登录成功"
        subTitle={time}
        extra={[
          <Button type="primary" key="console">
           哦哦
          </Button>,
          <Button key="buy" onClick={goBack} >返回</Button>,
        ]}
      />
    );
}

export default LeYi