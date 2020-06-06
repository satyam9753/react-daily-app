import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = { advice: '' }; //state will be set
  
  componentDidMount() {
      // console.log('COMPONENT DID MOUNT');
      this.fetchAdvice();
  }

  fetchAdvice = () => {

    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
          // console.log(response.data.slip.advice);
          const { advice } = response.data.slip; //destructuring
          // console.log(advice);

          this.setState({ advice: advice}); //setting the state
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {  
    const { advice } = this.state; //destructuring 
    return (
        <div className="main">
          <div className="card">
              <h1 className="quote">{ advice }</h1>
              <button className="button"  onClick={this.fetchAdvice} >
                <span> CLICK ME !</span>
              </button>
          </div>
        </div>
     );
  }
}
 
export default App;
