import { useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // states
  const[questions,setQuestions] = useState([])
  const[started, setStarted] = useState(false)
  const[correct,setCorrect] = useState(0)
  const[checked, setChecked] = useState(false)
  const[count, setCount] = useState(0)



  // method to fetch questions from the API
  componentDidMount = ()=>{

    // Fetching data from the API
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      // Converting the promise received into JSON
      .then(response => response.json())
      .then(content =>
          // Updating state variables
        setQuestions({
          allMemeImgs: content.data.memes
        })
      );
  }

  // // loop for printing out questions


  // // Method to submit form and create meme
  // handleSubmit = event =>{
  //   event.preventDefault();
  //   const { allMemeImgs } = this.state;
  //   const rand = allMemeImgs[
  //     Math.floor(Math.random() * allMemeImgs.length)].url;
  //   this.setState({
  //     randomImg: rand
  //   });
  // };

  return (
    <div className="App">
      <Quiz/>
      <div className='quiz--score'>
        <span>
          <h3>You scored x{} correct answers</h3>
          <button>Play again</button>
        </span>
      </div>
    </div>
  );
}

export default App;
