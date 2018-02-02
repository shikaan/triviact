import React from 'react';

export default class Input extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return(
			<label className="flat-input">
				<input className="flat-input__field" type={this.props.type} defaultValue={this.props.value} />
				<div className="flat-input__label">{this.props.label}</div>
			</label>
		)
	}
}
