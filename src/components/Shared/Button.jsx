import React from 'react';
import { Button } from 'semantic-ui-react';

const STATUS = {
  DANGER: 'danger',
  SUCCESS: 'success',
};

export default class FlatButton extends React.Component {
  static getColor(status) {
    switch (status) {
      case STATUS.DANGER:
        return 'red';
      case STATUS.SUCCESS:
        return 'green';
      default:
        return null;
    }
  }

  render() {
    const {
      status,
      loading,
      label,
      callback,
    } = this.props;

    return (
      <Button
        primary={!status}
        onClick={callback}
        color={FlatButton.getColor(status)}
        disabled={loading}
        fluid
      >
        {loading ? 'Loading...' : label.toUpperCase()}
      </Button>
    );
  }
}
