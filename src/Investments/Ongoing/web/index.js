import React from 'react';
import InvestmentListItem from 'Investments/InvestmentListItem';

export default class Ongoing extends React.Component {
  render() {
    return (
      <div id="ongoing">
        <h1>Ongoing</h1>
        <div className="d-flex flex-column">
          <InvestmentListItem />
        </div>
      </div>
    );
  }
}