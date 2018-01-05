import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizData from './quiz.json';
import Quizzes from './components/quizzes';
import AbstractQuiz from './components/abstractQuiz';
import DevQuiz from './components/devQuiz';

class App extends Component {

  constructor() {
    super();

    this.loadAbstractQuiz = this.loadAbstractQuiz.bind(this);
    this.loadDevQuiz = this.loadDevQuiz.bind(this);
    
    // Get Initial State
    this.state = {
      quizAbstract: {},
      quizDev: {},
      title: {},
      questions: {},
      answers: {}
    };
  }

  loadAbstractQuiz() {
    this.setState({
      quizAbstract: QuizData.quizzes[0]
    })
  }

  loadDevQuiz() {
    this.setState({
      quizDev: QuizData.quizzes[0]
    })
  }

  // componentDidMount() {
  //   let quizData = require('./quiz.json');
  //   console.log(quizData.quizzes)
  //   // this.setState({
  //   //   Data: quizzes.title
  //   // });
  // }

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
          <Quizzes loadAbstractQuiz={this.loadAbstractQuiz} loadDevQuiz={this.loadDevQuiz} />
          <AbstractQuiz  />
          <DevQuiz />
        </div>

      </div>
    );
  }
}

export default App;
