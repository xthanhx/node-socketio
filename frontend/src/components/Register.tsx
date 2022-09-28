import { Button, Form, Input } from "antd"
import React from "react";
import { useNavigate } from "react-router-dom";
import fetcher from '../helpers/fetcher'

const Login = () => {
  const [message, setMessage] = React.useState<{[key: string]: string}>({})
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    fetcher.Post('http://localhost:3000/register', values)
      .then(res => res.json())
      .then((res: {[key: string]: any}) => {
        if (res.status = 'validate_error') {
          setMessage(res.message)
        }
        if (res?.id) {
          navigate('/login')
        }
      })

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="bg-white pt-8 p-4 rounded">
      <Form
        name="basic"
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="user_name"
          rules={[{ required: true, message: 'Please input your username!' }]}
          hasFeedback={!!message.user_name}
          help={message.user_name}
          validateStatus={!!message.user_name ? "error" : undefined}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Same Password"
          name="same_password"
          rules={[
            { required: true, message: 'Please input your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
          hasFeedback={!!message.same_password}
          help={message.same_password}
          validateStatus={!!message.same_password ? "error" : undefined}
        >
          <Input.Password />
        </Form.Item>

        <Button type="primary" htmlType="submit" block className="rounded">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
