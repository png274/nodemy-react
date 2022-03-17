import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { login } from "../../services/user";
import { useDispatch } from "react-redux";
import actionCreator from "../../redux/action";
import { useNavigate } from "react-router";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const onFinish = async (values) => {
		try {
			const result = await login(values);
			dispatch(actionCreator.loginAction(result.token));
			localStorage.setItem("authToken", result.token);
			navigate("/home");
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div style={{ marginTop: "10rem" }}>
			<Row justify="middle" align="middle">
				<Col span={24} offset={8}>
					<Form
						name="basic"
						labelCol={{ span: 2 }}
						wrapperCol={{ span: 4 }}
						initialValues={{ remember: true }}
						autoComplete="off"
						onFinish={onFinish}
					>
						<Form.Item
							label="Username"
							name="username"
							rules={[
								{ required: true, message: "Please input your username!" },
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label="Password"
							name="password"
							rules={[
								{ required: true, message: "Please input your password!" },
							]}
						>
							<Input.Password />
						</Form.Item>

						<Form.Item wrapperCol={{ offset: 3, span: 16 }}>
							<Button type="primary" htmlType="submit">
								Submit
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</div>
	);
};
export default Login;
