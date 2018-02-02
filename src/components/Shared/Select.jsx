import React from 'react';
import { Dropdown, Header } from 'semantic-ui-react';

export default class Select extends React.Component {
  render() {
    const {
      label,
      callback,
      options,
    } = this.props;

    return (
      <div>
        <Header as="h4">{label}</Header>
        <Dropdown
          fluid
          selection
          onChange={callback}
          options={options}
          defaultValue={options[0].value}
        />
      </div>
    );
  }
}
