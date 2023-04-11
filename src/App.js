import './App.css';
import Quiz from './components/Quiz';

function App() {
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
