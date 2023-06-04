import React, {useState} from "react";


//----------------Class component
// export default class Search extends React.Component{
//     state = {
//         search: 'panda',
//         type: "all"
//     }
//     hendlkey = (e) =>{
//         if(e.key === 'Enter'){
//             this.props.searchMovies(this.state.search, this.state.type)
//         }
//     }
//     handlfilter = (e) =>{
//         this.setState(() => ({type: e.target.dataset.type}), ()=>{
//             this.props.searchMovies(this.state.search, this.state.type)
//         })
//     }
//     render(){
//         return(
//             <div className="row">
//                 <div className="col s12">
//                 <div className="input-field">
//                         <input 
//                             id="search" 
//                             type="search" 
//                             className="validate" 
//                             placeholder="Search"
//                             value={this.state.search}
//                             onChange={(e)=>this.setState({search: e.target.value})}
//                             onKeyDown={this.hendlkey}
//                         />
//                         <button className="btn search-btn" onClick={() => this.props.searchMovies(this.state.search, this.state.type)}>
//                             Search Movies
//                         </button>
//                     </div>
//                 </div>
//                 <div>
//                     <label className="radio-type">
//                         <input 
//                             class="with-gap" 
//                             name="type" 
//                             type="radio" 
//                             data-type="all" 
//                             onChange={this.handlfilter}
//                             checked={this.state.type === 'all'}
//                         />
//                         <span>All</span>
//                     </label>

//                     <label className="radio-type">
//                         <input 
//                             class="with-gap" 
//                             name="type" 
//                             type="radio" 
//                             data-type="movie" 
//                             onChange={this.handlfilter}
//                             checked={this.state.type === 'movie'}
//                         />
//                         <span>Movies only</span>
//                     </label>

//                     <label className="radio-type">
//                         <input 
//                             class="with-gap" 
//                             name="type" 
//                             type="radio" 
//                             data-type="series" 
//                             onChange={this.handlfilter}
//                             checked={this.state.type === 'series'}
//                             />
//                         <span>Series only</span>
//                     </label>
//                 </div>
//             </div>
//         )
//     }
// }
//----------------------------------------------------------------------
//--------------------Function component

export default function Searchs({searchMovies}){

    const [search, setSearch] = useState('panda')
    const [type, setType] = useState("all")

    const hendlkey = (e) =>{
        if(e.key === 'Enter'){
            searchMovies(search, type)
        }
    }
    const handlfilter = (e) =>{
        setType(e.target.dataset.type)
        searchMovies(search, e.target.dataset.type)
    }
        return(
            <div className="row">
                <div className="col s12">
                <div className="input-field">
                        <input 
                            id="search" 
                            type="search" 
                            className="validate" 
                            placeholder="Search"
                            value={search}
                            onChange={(e)=>setSearch(e.target.value)}
                            onKeyDown={hendlkey}
                        />
                        <button className="btn search-btn" onClick={() => searchMovies(search, type)}>
                            Search Movies
                        </button>
                    </div>
                </div>
                <div>
                    <label className="radio-type">
                        <input 
                            class="with-gap" 
                            name="type" 
                            type="radio" 
                            data-type="all" 
                            onChange={handlfilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>

                    <label className="radio-type">
                        <input 
                            class="with-gap" 
                            name="type" 
                            type="radio" 
                            data-type="movie" 
                            onChange={handlfilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>

                    <label className="radio-type">
                        <input 
                            class="with-gap" 
                            name="type" 
                            type="radio" 
                            data-type="series" 
                            onChange={handlfilter}
                            checked={type === 'series'}
                            />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        )
    }