import Movie from "./Movie"
import NothingFound from "./NothingFound"
export default function Movies (props){
    const{movies = []} = props
    return(
        
        <div className="movies">
          {movies.length ?  movies.map(movie => (
                <Movie key={movie.imdbId} {...movie}/>
            )): <NothingFound/>} 
        </div>
    )
}