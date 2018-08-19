import React from 'react';
import { Row, Col } from 'reactstrap';
import Ongoing from 'Investments/Ongoing';
import Proposals from 'Investments/Proposals';
import withFade from 'Utils/components/withFade';

class Investments extends React.Component {
  render() {
    return (
      <div id="investments">
        <Row>
          <Col md="6">
            <Ongoing />
          </Col>
          <Col md="6">
            <Proposals />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withFade(Investments);