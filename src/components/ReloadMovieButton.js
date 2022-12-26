import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) => {
  return (
    <button className="reload-movie-button" onClick={props.reloadMovies}>Obnoviť filmy</button>
  )
}

export default ReloadMovieButton