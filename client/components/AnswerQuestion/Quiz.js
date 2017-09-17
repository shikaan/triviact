import * as he from 'he';

export default class Quiz {
	constructor(){
		this.question = null;
		this.answers = [];
	}

	deserialize(rawQuiz = {}){
		const rawIncorrectAnswers = rawQuiz["incorrect_answers"];
		this.question = he.decode(rawQuiz.question);

		if(Array.isArray(rawIncorrectAnswers)){
			this.answers = rawIncorrectAnswers.map((answer) => {
				return {text: he.decode(answer), correct: false}
			})
		}

		this.answers.push({
			text: he.decode(rawQuiz["correct_answer"]),
			correct: true
		})

		return this;
	}
}