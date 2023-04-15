import { useEffect, useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import Menu from './components/Menu';

function App() {

  // states
  const[questions,setQuestions] = useState([])
  const[started, setStarted] = useState(false)
  const[correct,setCorrect] = useState(0)
  const[checked, setChecked] = useState(false)
  const[count, setCount] = useState(0)

  // method to fetch questions from the API
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5)

  useEffect (() => {
      async function getQuestion(){
        const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        const data = await res.json()
        let q = []
        data.results.forEach(question => {
          q.push({id:nanoid(),question:question.question,correct: question.correct_answer,selected: null, checked:false,answers:shuffleArray([...questions.incorrect_answers, question.correct_answers])})
        })
        setQuestions(q)
      }
      getQuestion()
    }, [count]
  )

  function start() {
    setStarted(x => !x)
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
      <div className='content-container'>
        { started ?
          <div className='start-content-container'>

            <div className='end-div'>
              <button className='check'>check answer</button>
            </div>
          </div>
          :
          <Menu
            start={start}
          />
        }
      </div>
      {/* <Quiz/> */}
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
