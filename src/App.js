import Quiz from './components/Quiz';
import Menu from './components/Menu';
import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import { nanoid } from 'nanoid';
import { Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { fill } from '@cloudinary/url-gen/actions/resize';

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
        const res = await fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
        const data = await res.json()
        let q = []
        data.results.forEach(question => {
          q.push({
            id:nanoid(),
            question:question.question,
            correct: question.correct_answer,
            answers:shuffleArray([...question.incorrect_answers, question.correct_answer]),
            checked:false,
            selected: null
          })
        })
        setQuestions(q)
      }
      getQuestion()
    }, [count]
  )

  // stlyling for homepage
  const styles = {
    background: started ? '#e3f1f1':'white'
  }

  // cloudinary instance

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dtxxea3qi'
    }
  });

  // Instantiate a CloudinaryImage object for the image.
  const myImage = cld.image('yellow-blob-shape');

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )

  // Method to check answer status
  function handleCheck() {
    let selected = true
    let correct = 0
    questions.forEach(question => {
      if (question.selected === null){
        selected = false
        return false
      }
    })
    if (!selected){
      return alert('you have answered all the questions, please answer all of them then try again')
    }
    setQuestions(questions => questions.map(question =>{
      return {...question, checked:true}
    }))
    setChecked(true)
    questions.forEach(question => {
      if (question.correct === question.selected){
        correct += 1
        }
      }
    )
    setCorrect(correct)
  }

  // btn method associating answer with question
  function handleClickAnswer (id, answer){
    setQuestions(questions => questions.map(question =>{
      return (question.id) === id ? {...question, selected:answer} :question
    }))
  }

  // render quiz elements
  const quizElements = questions ? questions.map(question => {
    return (
      <Quiz
        id = {question.id}
        key = {question.id}
        q = {question}
        handleClickAnswer ={handleClickAnswer}
      />
      )
    }):[]

  // function for start status
  function start() {
    setStarted(x => !x)
  }

  // restart game
  function handlePlayAgain() {
    setCount(count => count + 1)
    setChecked(false)
  }

  // back button
  function handleBackBtn() {
    setStarted(false)
  }
  return (
    <div
      className="App"
      style = {styles}
      >
      <div className='content-container mt-3'>
        { started?
            <div className='container'>
                {quizElements}
                <div className='end-div'>
                  <ButtonGroup>
                    <Button
                      className='check mt-4'
                      variant='outline-primary'
                      onClick={checked ? handlePlayAgain: handleCheck}>
                        {checked ? 'Play Again': 'Check answer'}
                    </Button>
                    <Button
                      className='mt-4 d-flex '
                      variant='outline-danger'
                      onClick = {() => handleBackBtn()}
                      >
                        <FontAwesomeIcon icon={faArrowLeft} style={{color: "black",}} />
                    </Button>
                  </ButtonGroup>
                  {checked && <span className = 'score'>Your score is {correct}/5 correct answers</span>}
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
