import React from 'react';

class DevQuiz extends React.Component {
  render() {

    const { details } = this.props;
    return(

      <li className="quiz-questions">
        <h3>{details.question}</h3>
      </li>

    )
  }
}

export default DevQuiz;