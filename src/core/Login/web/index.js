import React from 'react';
import { Card, CardHeader, CardBody, Container, Col } from 'reactstrap';

export default class Login extends React.Component {
  render() {
    return (
      <div id="login" className="pos-fixed fixed-full">
        <div className="pos-absolute absolute-center half-width" style={{width: '80%' }}>
          <Container>
            <Col md={{ size: 6, offset: 3 }}>
              <Card body>
                <p>this is a login page</p>
              </Card>
            </Col>
          </Container>
        </div>
      </div>
    );
  }
}