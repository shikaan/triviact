import React from 'react';
import './Select.scss';

export default class Select extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="flat-select-container">
				<select onChange={this.props.callback} 
						className="flat-select" 
						defaultValue={this.props.value}>
					{this.props.children}
				</select>
				<label className="flat-select-label">
					{this.props.label}
				</label>
			</div>
		)
	}
}