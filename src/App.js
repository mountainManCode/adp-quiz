import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuizData from './quiz.json';
import Quizzes from './components/quizzes';
import AbstractQuiz from './components/abstractQuiz';
import DevQuiz from './components/devQuiz';
// import SelectAnswer from './components/selectAnswer';

class App extends Component {

  constructor() {
    super();

    // this.goToQuiz = this.goToQuiz.bind(this);
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
      quizAbstract: QuizData.quizzes[0].questions
    })
  }

  loadDevQuiz() {
    this.setState({
      quizDev: QuizData.quizzes[1].questions
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Big Bad Quiz</h1>
        </header>

        <div className="appScreen">
          <div className="quizzes">
            <Quizzes loadAbstractQuiz={this.loadAbstractQuiz} loadDevQuiz={this.loadDevQuiz} />
          </div>

          <section className="abstractContainer">
            <ol className="abstractQuestions">
              {
                Object
                  .keys(this.state.quizAbstract)
                  .map(key => <AbstractQuiz key={key} details={this.state.quizAbstract[key]} quizAbstract={this.state.quizAbstract} />)
              }
            </ol>
            <button type="submit">Submit Answer</button>
          </section>

          <section className="devContainer">
            <ol className="devQuestions">
              {
                Object
                  .keys(this.state.quizDev)
                  .map(key => <DevQuiz key={key} details={this.state.quizDev[key]} />)
              }
            </ol>
          </section>
          {/* <section className="answersContainer">
            <ul className="answersList">
              <SelectAnswer quizAbstract={this.state.quizAbstract} quizDev={this.state.quizDev}  />
            </ul>
          </section> */}
        </div>
      </div>
    );
  }
}

export default App;
