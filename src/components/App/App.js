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
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABX_JCq57-TuTQRDPcumA7WlVQcLuflwx5fOmRLhQArm-6Z9fwrXHy1be91iW0nBu5ofCUJKNU0_4vfuSW-rART9C8S9fxgPsSM17DaROhANJbd5N.jpg?r=6e7" alt="sex education series"/>
      </div>
    );
  }

}

export default App;
