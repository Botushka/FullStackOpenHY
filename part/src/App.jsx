import { useState } from 'react'

const History = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback yet
      </div>
    );
  }

  return (
    <div>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
);

const Statistics = ({ good, bad, neutral }) => {
  const all = neutral + good + bad;
  const avg = (good - bad) / all;
  const pos = (good / all) * 100;

  const cellStyle = {
    padding: '8px',
    textAlign: 'right'
  };


  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <td style={cellStyle}><StatisticLine text="good" value={good} /></td>
          </tr>
          <tr>
            <td style={cellStyle}><StatisticLine text="neutral" value={neutral} /></td>
          </tr>
          <tr>
            <td style={cellStyle}><StatisticLine text="bad" value={bad} /></td>
          </tr>
          <tr>
            <td style={cellStyle}><StatisticLine text="all" value={all} /></td>
          </tr>
          <tr>
            <td style={cellStyle}><StatisticLine text="average" value={avg.toFixed(2)} /></td>
          </tr>
          <tr>
            <td style={cellStyle}><StatisticLine text="positive" value={pos.toFixed(2) + '%'} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [bad, setBad] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
 

  const handleFeedbackClick = (feedbackType) => {
    if (feedbackType === 'bad') {
      setBad(bad + 1);
    } else if (feedbackType === 'good') {
      setGood(good + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(neutral + 1);
    }
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button handleClick={() => handleFeedbackClick('bad')} text='bad' />
        <Button handleClick={() => handleFeedbackClick('good')} text='good' />
        <Button handleClick={() => handleFeedbackClick('neutral')} text='neutral' />
      </div>
      <History good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

  export default App
  
