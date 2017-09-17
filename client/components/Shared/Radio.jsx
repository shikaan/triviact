import React from 'react';
import './Radio.scss';
import Logger from '../../logger.js';

export default class Radio extends React.Component{
	constructor(props){
		super(props);
		this.id = Math.random().toString(36).substring(2,9);
		this.onChangeHandler = this.onChangeHandler.bind(this);
	}

	onChangeHandler() {
		if(this.props.onChange){
			Logger.info(`Radio ${this.id} change triggered`);
			return this.props.onChange();
		}
	}

	render() {
		return (
			<label htmlFor={this.id} className="flat-radio-container">
				<input type="radio" 
					   id={this.id}
					   hidden
					   onClick={this.onChangeHandler}
					   name={this.props.name} 
					   value={this.props.value} />
				<i className={`flat-radio ${this.props.checked ? "flat-radio--selected" : "flat-radio--unselected"}`}></i>
				{this.props.label}
			</label>
		)
	}
}