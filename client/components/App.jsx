import React from 'react';
import FetchQuizzes from './FetchQuizzes/FetchQuizzes.jsx';
import AnswerQuestion from './AnswerQuestion/AnswerQuestion.jsx';
import Results from './Results/Results.jsx';
import {Configuration} from '../configuration.js';
import Logger from '../logger.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {LOG_LEVELS_BY_KEY} from '../constants';
import HttpUtils from '../utils/http-utils.js';
import './App.scss';

let self;

export default class App extends React.Component {
	constructor(props){
		Logger.info("App started with log level", LOG_LEVELS_BY_KEY[Configuration.logLevel]);
		super(props);

		self = this;
	}

	componentWillMount() {
		this.setState({
			quizzes: [],
			correctAnswers: 0
		})
	}

	fetchQuizzes(options){
		const apiUrl = Configuration.apiUrl;
		const errorMessage = "Invalid response received";

		Logger.info("Fetching quizzes at", apiUrl)
		Logger.debug("Options", options);

		return fetch(`${apiUrl}?amount=10&difficulty=${options.difficulty}`)
			.then((response) => {
				if(response.ok){
					return response.json()
						.then((data) => {
							Logger.info("Received", data.results);
							self.setState({quizzes: data.results});
						})
				}
				else{
					Logger.error(errorMessage);
					return HttpUtils.reject(errorMessage);
				}
			},
			(error) => {
				Logger.error(errorMessage);
				Logger.debug(error);
				return HttpUtils.reject(errorMessage);
			})
	}

	setCorrectAnswers(correctAnswers){
		Logger.info("Setting Correct Answer Number", correctAnswers);
		self.setState({
			correctAnswers: correctAnswers
		})
	}

  render() {
    return ( 
    	<Router>
    		<div>
	    		<Route exact path="/" render={(props) => <FetchQuizzes {...props} callToAction={this.fetchQuizzes}/>}/>
	      		<Route path="/quiz" render={(props) => <AnswerQuestion {...props} quizzes={this.state.quizzes} setCorrectAnswers={this.setCorrectAnswers}/>} /> 
	      		<Route path="/results" render={(props) => <Results {...props} correctAnswers={this.state.correctAnswers} total={this.state.quizzes.length}/>} /> 
    		</div>
    	</Router>
    )
  }
}