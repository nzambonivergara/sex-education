import './SavedFacts.css';

const SavedFacts = ({ savedFacts }) => {
  const factParagraphs = savedFacts.map((fact, i) => {
    return <li key={i}>{fact}</li>
  })

  return (
    <main className="saved-facts-container">
      <h2 className="saved-facts-title">Saved Facts</h2>
      { savedFacts.length ? <ol>{factParagraphs}</ol> : <h3>You haven't saved any facts yet :(</h3> }
    </main>
  )
}

export default SavedFacts;
