import React from 'react';
import { Container, Card, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import withFade from 'Utils/components/withFade';

class Home extends React.Component {
  render() {
    return (
      <div className="web">
        <Container>
          <div className="d-flex justify-content-around">
            <div className="w-100 p-2">
              <Link to="/investments">
                <Card body className="text-center">
                  <CardTitle>
                    Investments
                  </CardTitle>
                </Card>
              </Link>
            </div>
            <div className="w-100 p-2">
              <Link to="/travels">
                <Card body className="text-center">
                  <CardTitle>
                    Travels
                  </CardTitle>
                </Card>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withFade(Home);