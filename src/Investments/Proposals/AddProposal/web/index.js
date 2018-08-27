import React from 'react';
import PropTypes from 'prop-types';
import TextEditor from 'TextEditor/component';

export default class AddProposal extends React.Component {
  render() {
    return (
      <div id="proposal-add">
        <h1>Add Proposal</h1>
        <TextEditor />
      </div>
    );
  }
}

AddProposal.propTypes = {};