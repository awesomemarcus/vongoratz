import React from 'react';
import withFade from 'Utils/components/withFade';

class Investment extends React.Component {
  render() {
    console.log(this.props);
    return (
      <h1>Single Investment</h1>
    );
  }
}

export default withFade(Investment);