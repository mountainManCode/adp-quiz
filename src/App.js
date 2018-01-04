import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Data from './quiz.json';
import Quizzes from './components/quizzes'
import abstractQuiz from './components/abstractQuiz'
import devQuiz from './components/devQuiz'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quizzes: [],
      title: [],
      questions: [],
      answers: []
    }
  }

  componentDidMount() {
    let quizData = require('./quiz.json');
    console.log(quizData.quizzes)
    // this.setState({
    //   Data: quizzes.title
    // });
  }

  // state = {data: []}
  
  //   componentDidMount() {
  //     fetch('/data')
  //       .then(res => res.json())
  //       .then(data => this.setState({ data }));
  //   }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Doomsday Quiz</h1>
        </header>
        <div className="appScreen">
          <Quizzes />
        </div>

      </div>
    );
  }
}

export default App;
