import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      label,
      callback,
      options,
    } = this.props;

    return (
      <Dropdown
        placeholder={label}
        fluid
        selection
        onChange={callback}
        options={options}
      />
    );
  }
}
