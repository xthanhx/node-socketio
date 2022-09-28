import { Button, Checkbox, Form, Input } from "antd"
import { useNavigate } from "react-router-dom";
import fetcher from "../helpers/fetcher";

const Login = (props: any) => {
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    fetcher.Post('http://localhost:3000/login', values)
    .then(res => res.json())
    .then((res: {[key: string]: any}) => {
      if (res?.id) {
        navigate('/')
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
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
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

        <Button type="primary" htmlType="submit" block className="rounded">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Login
