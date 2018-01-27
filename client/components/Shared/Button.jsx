import React from 'react';
import './Button.scss';

const STATUS = ['danger', 'success'];

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  getStatus(status) {
    if (STATUS.indexOf(status) > -1) { return `flat-button flat-button--${status}`; }
    return 'flat-button flat-button--primary';
  }

  render() {
    return (
      <div className="flat-button-container">
        <button
          className={this.getStatus(this.props.status)}
          onClick={this.props.callback}
          disabled={this.props.loading}
        >
          {this.props.loading ? 'Loading...' : this.props.label}
        </button>
      </div>
    );
  }
}
