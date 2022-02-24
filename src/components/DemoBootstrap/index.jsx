import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

class DemoBootstrap extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col className="test-border" lg={12} md={6}>
						Col 1
					</Col>
					<Col className="test-border" lg={12} md={6}>
						Col 2
						<Button
							onClick={() => {
								console.log("clicked");
							}}
						>
							{" "}
							Click me
						</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default DemoBootstrap;
