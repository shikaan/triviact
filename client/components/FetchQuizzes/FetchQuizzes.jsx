import Logger from '../../logger.js';

import React from 'react';
import './FetchQuizzes.scss';

import Button from '../Shared/Button.jsx';
import Input from '../Shared/Input.jsx';
import Select from '../Shared/Select.jsx';


/**
* Note for the future me: 
* 	withRouter adds location, match and history to the props of the component
*/
export default class FetchQuestions extends React.Component {
	constructor(props){
		super(props);
		Logger.debug("Fetch Quizzes Props: ", props);

		this.callToAction = this.props.callToAction;
		
		this.state = {
			isRequestPending: false,
			options: {
				difficulty: 'easy'
			}
		}
	}

	callback(){
		const options = this.state.options;

		this.setState({isRequestPending: true});
		this.callToAction(options)
			.then(
				(quizzes) => {
					this.setState({isRequestPending: false});

					Logger.info("Going to /quiz");
					this.props.history.push('/quiz');
				},	
				() => {
					this.setState({isRequestPending: false});
				}
			)
	}

	onChangeHandler(event){
		const newValue = event.target.value;
		Logger.info("Difficulty set to", newValue);

		const options = Object.assign(this.state.options, {difficulty: newValue});

		this.setState({options})
	}

  render() {
    return (
    	<section className="fetch-quizzes">
    		<header className="fetch-quizzes__header">
		     	<h1>
		     		Fetch questions
		     	</h1>
		     	<h3>
	     			subtitle
	     		</h3>
		     </header>
		     <main className="fetch-quizzes__body">
		     	<Select callback={this.onChangeHandler.bind(this)} label="Level">
		     		<option value="easy">Easy</option>
		     		<option value="medium">Medium</option>
		     		<option value="hard">Hard</option>
		     	</Select>
		     </main>
		     <footer>
		     	<Button label="fetch" 
		     			callback={this.callback.bind(this)} 
		     			loading={this.state.isRequestPending}/>
		     </footer>
    	</section>
    	)
  }
}