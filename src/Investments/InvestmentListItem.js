import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, CardFooter } from 'reactstrap';

export default class InvestmentListItem extends React.Component {
  render() {
    return (
      <Card className="mb-3">
        <CardBody>
          <Link to="/investments/lorem">
            <CardTitle>
              Lorem, ipsum.
            </CardTitle>
          </Link>
          <CardText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, illum.
          </CardText>
        </CardBody>
        <CardFooter>
            Lorem, ipsum dolor.
        </CardFooter>
      </Card>
    );
  }
}