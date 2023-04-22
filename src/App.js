import Quiz from './components/Quiz';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';


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
          q.push({id:nanoid(),question:question.question,correct: question.correct_answer,selected: null, checked:false,answers:shuffleArray([...question.incorrect_answers, question.correct_answers])})
        })
        setQuestions(q)
      }
      getQuestion()
    }, [count]
  )


  function start() {
    setStarted(x => !x)
  }

  // stlyling for homepage

  const styles = {
    background: started ? 'linear-gradient(246.93deg, #7816DA 1.87%, rgba(230, 221, 239, 0) 99.99%, rgba(120, 22, 218, 0.01) 100%)': "white"}


  // Method to
  function handleCheck() {
    let selected = true
    questions.forEach(question => {
      if (question.selected === null){
        selected = false
        return
      }
    })
    if (!selected){
      return
    }
    setQuestions(questons => questions.map(question =>{
      return {...question, checked:true}
    }))
    setChecked(true)
    let correct = 0
    questions.forEach(question => {
      if (question.correct === question.selected){
        correct += 1
      }
    })
    setCorrect(correct)
  }

  function handleClickAnswer (id, answer){
    setQuestions(questions => questions.map(question =>{
      return question.id === id ? {...question, selected:answer} :question
    }))
  }

  function handlePlayAgain() {
    setCount(count => count +1)
    setChecked(false)
  }

  const quizElements = questions ? questions.map(question => {
    return (
      <Quiz
        id = {question.id}
        key = {question.id}
        handleClickAnswer ={handleClickAnswer}
        q = {question}
      />
    )
  }):[]

  return (
    <div
      className="App"
      style = {styles}
    >
      <div className='content-container mt-3'>
        { started?
            <div className='start-content-container'>
                {quizElements}
                <div className='end-div'>
                  <button className='check' onClick={checked ? handlePlayAgain : handleCheck}>{checked ? 'Play Again' : 'Check Answer'}</button>
                </div>
                <div className="quiz-score">
                  <h3>You scored {correct} correct answers</h3>
                </div>
            </div>
          :
            <Menu
              start={start}
            />
        }
      </div>
    </div>
  );
}

export default App;
