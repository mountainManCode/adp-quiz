import React from 'react';
import SelectAnswer from './selectAnswer';

class AbstractQuiz extends React.Component {  

  // SelectAnswer(event) {
  //   event.preventDefault();
  //   console.log(selecting an answer);
  // }


  render() {

    const { details } = this.props;
    const answersID = this.props.details.answers;
    
    // const answerIds = Object.keys.this.props.details
    // const abstractAnswers = details.answers.map;
    // const answerIds = Object.keys(
    //   this.props.quizAbstract.map(question).answers);
    // const abstractAnswers = Object.keys(this.AbstractQuiz);
    // const answerIds = Object.keys(this.AbstractQuiz);

    // }


    return(
      <li className="quiz-questions">
        <h3>{details.question}</h3>
        <ul className="quiz-answers">
          {
            Object.keys(this.props.details.answers).map(key => <SelectAnswer />)
          }
          {/* {answersID.map(key => <SelectAnswer key={key} />)} */}
          {/* {abstractAnswers} */}
            {/* {this.props.details.answers} */}
          
  
        </ul>

      </li>
    )
  }
}

export default AbstractQuiz;