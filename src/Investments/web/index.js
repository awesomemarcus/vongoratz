import React from 'react';
import { Link } from 'react-router-dom';

import {
  Row,
  Col,
  Button,
} from 'reactstrap';

import Ongoing from 'Investments/Ongoing';
import Proposals from 'Investments/Proposals';
import withFade from 'Utils/components/withFade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Investments extends React.Component {
  render() {
    return (
      <div id="investments">
        <Row>
          <Col md="12">
            <div className="d-flex flex-row py-3">
              <Link className="btn btn-primary ml-auto" to="/investments/proposals/add"><FontAwesomeIcon icon="plus-circle"/> Add Proposal</Link>
            </div>
          </Col>
        </Row>
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