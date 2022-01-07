// Imports
import AnswerCountChart from './components/AnswerCountChart';
import CommentCountChart from './components/CommentCountChart';
import PostCountChart from './components/PostCountChart';
import ScoreChart from './components/ScoreChart';
import ViewCountChart from './components/ViewCountChart';


function App() {

  return (
    <div className="App">
      <header>
        <h1>MCIS TASK</h1>
      </header>

      <section className="App-header">
        <div className='flex-container'>
          {/* Sub Components */}
          <AnswerCountChart />
          <ScoreChart />
          <CommentCountChart />
          <ViewCountChart />
          <PostCountChart />

        </div>
      </section>
    </div>
  );
}

export default App;
