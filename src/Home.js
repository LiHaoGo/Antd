import React ,{ useState } from 'react';
import { Calendar, Badge,Space, Menu, Typography,Button , Form, Input,InputNumber, Select } from 'antd';
import locale from 'antd/lib/calendar/locale/zh_CN.js'
import 'moment/locale/zh-cn';
import moment from 'moment';
import {MinusCircleOutlined, PlusOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import './Home.css'
const { SubMenu } = Menu;
const { Title } = Typography;
const { Option } = Select;
const { TextArea } = Input;
moment.locale('zh-cn');
function getListData(value) {

    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: '修复Bug' },
          { type: 'success', content: '订购机票' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: '修改测试需求' },
          { type: 'success', content: '审批单打印修改完成' },
          { type: 'error', content: '订单需求未完成' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: '早晨跑步30分钟' },
          { type: 'success', content: '注销电信卡' },
          { type: 'error', content: '未打卡' }
        ];
        break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  function Home(props){
    const [form] = Form.useForm();
    const [current,setCurrent]  = useState('mail') 
  const  handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key)
      };
      const onFinish = values => {
        if(values.users){
          console.log('Received values of form:', values);
          form.resetFields()
        }
        
      };
      return (
          <>

      <Menu theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal" >
        <Menu.Item key="mail" icon={<MailOutlined />}>
          首页
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          充值中心
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="个人中心">
          <Menu.ItemGroup title="设置">
            <Menu.Item key="setting:1">安全</Menu.Item>
            <Menu.Item key="setting:2">隐私</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="账户">
            <Menu.Item key="setting:3">钱包</Menu.Item>
            <Menu.Item key="setting:4">转出</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
 
          This is Nothing
      
        </Menu.Item>
        
      </Menu>
      <Button type="primary" onClick={()=>{props.history.push('/login')}} className="loginBtn">登 录</Button>
      
      <div className="addInput">
      <Form form={form}  name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
      <Form.List name="users">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }) => (
              <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                <Form.Item
                  {...restField}
                  name={[name, 'date']}
                  rules={[{ required: true, message: '请输入几号' }]}
                >
                <InputNumber min={1} max={30} placeholder="几号"  />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'text']}
                  rules={[{ required: true, message: '请输入代办事项' }]}
                >
                  <TextArea  placeholder="请输入代办事项" autoSize />
                </Form.Item>
                <Form.Item
                  {...restField}
                  name={[name, 'type']}
                  rules={[{ required: true, message: '请输入重要程度' }]}
                >
                  <Select placeholder="请选择重要程度"   style={{ width: 180 }} >
                    <Option value="success">一般</Option>
                     <Option value="warning">重要</Option>
                    <Option value="errno">紧急</Option>
                   </Select>
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </Space>
            ))}
            <Form.Item>
              <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                添加日程
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          添加
        </Button>
      </Form.Item>
    </Form>
      </div>
      <Title  type="success" className="textCenter">待办事项</Title>
        <Calendar
         locale={locale} 
         dateCellRender={dateCellRender} 
         monthCellRender={monthCellRender} 
         />
      </>
      );
  }
  export default Home;
  
  
   
  