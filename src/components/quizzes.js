import React from 'react';
// import Data from '../quiz.json';

class Quizzes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quizTitles: [],
      abstractTitle: [],
      devTitle: [],
      questions: [],
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
        
        <div className="abstractQuiz">
          <button type="submit">{this.state.quizTitles[0]}</button>
        </div>
        <div className="devQuiz">
          <button type="submit">{this.state.quizTitles[1]}</button>
        </div>
    </div>
    )

  }
}

export default Quizzes;