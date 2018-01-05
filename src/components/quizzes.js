import React from 'react';

class Quizzes extends React.Component {
  constructor() {
    super();

    this.state = {
      quizTitles: [],
      abstractTitle: [],
      devTitle: []
    }
  }
  componentDidMount() {
    let quizData = require('../quiz.json');
    // let abstractTitle = [quizData.quizzes[0].title];
    // let devTitle = [quizData.quizzes[1].title];
    let quizTitles = [quizData.quizzes[0].title, quizData.quizzes[1].title];
    this.setState({
      quizTitles
    });
  }
  
  render() {
    return(
      <div className="selectQuiz">
        
        <div>
          <button onClick={this.props.loadAbstractQuiz}>
            {this.state.quizTitles[0]}
          </button>
        </div>
        <div className="devQuiz">
          <button onClick={this.props.loadDevQuiz}>{this.state.quizTitles[1]}</button>
        </div>
    </div>
    )
  }
}

export default Quizzes;