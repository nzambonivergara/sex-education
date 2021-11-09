import {fetchQuestions} from '../../apiCalls'
import React, {Component} from 'react'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      questions: []
    }
  }

  componentDidMount() {
    fetchQuestions()
      .then(data => this.setState({ questions: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Sex Education</h1>
      </div>
    );
  }

}

export default App;
