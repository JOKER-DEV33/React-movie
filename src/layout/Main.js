import React, {useState, useEffect} from 'react'
import Movies from '../components/Movies'
import Loader from '../components/Loader'
import Search from '../components/Search'
//----------------------Class component
// export default class Main extends React.Component{
//     state = {
//         movies: [],
//         loading: true
//     }
//     componentDidMount(){
//         fetch('http://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=panda')
//         .then(response => response.json())
//         .then(data => this.setState({movies: data.Search, loading: false}))
//     }
//     searchMovies = (str, type) => {
//         this.setState({loading: true})
//         fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
//         .then(response => response.json())
//         .then(data => this.setState({movies: data.Search, loading: false}))
//     }
//     render(){
//         return(
//             <div className="container content">
//                 <Search searchMovies={this.searchMovies} />
//                 {this.state.loading ? <Loader/> : (<Movies movies={this.state.movies}/>)}
//             </div>
//          )
//     }
// }
//--------------------------------------------------------------------------------------
//-------------------------------Functioin component
export default function Main(){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=panda')
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search);
            setLoading(false)
        })
    }, [])

    const searchMovies = (str, type) => {
        setLoading(true)
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=329ffa13&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then(response => response.json())
        .then(data => {
            setMovies(data.Search);
            setLoading(false)
        })
    }
        return(
            <div className="container content">
                <Search searchMovies={searchMovies} />
                {loading ? <Loader/> : (<Movies movies={movies}/>)}
            </div>
         )
}
