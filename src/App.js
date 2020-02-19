import React, {Component} from 'react';
import Search from "./components/form/Search";
import {getMoviesBySearch} from '../src/services/api/omdbConnection';

class App extends Component {
    render() {
        const responseSearch = getMoviesBySearch('iron man');
        console.log(responseSearch);

        return (
            <Search></Search>
        );
    }
}

export default App;
