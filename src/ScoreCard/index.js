import './index.css'

const ScoreCard = props => {
  const {score, play} = props

  const playAgain = () => {
    play()
  }
  return (
    <div className="score-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p>YOUR SCORE</p>
      <h1>{score}</h1>
      <button type="button" onClick={playAgain} className="play-again-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
          className="reset"
        />
        Play Again
      </button>
    </div>
  )
}

export default ScoreCard
