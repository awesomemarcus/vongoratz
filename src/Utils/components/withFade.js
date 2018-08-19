import React from 'react';
import { Fade } from 'reactstrap';

const withFade = (Component) => (
  class withFadeHoc extends React.Component {
    render() {
      return (
        <Fade mountOnEnter={true} unmountOnExit={true}>
          <Component {...this.props}/>
        </Fade>
      );
    }
  }
)

export default withFade;