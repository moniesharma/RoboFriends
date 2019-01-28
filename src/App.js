import React, { Component } from 'react';
import './app.css';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state = {

            robots: robots,
            searchField: ''

        }
    }
    onSearchChange = (event) => {
        this.setState({searchField : event.target.value})
    }
    render() {
        const filterRobots =
            this.state.robots.filter(robots =>
                robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
                
    
        return (
            < div className='tc' >
                <h1 className="pokemonFont f1"> RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filterRobots} />
            </div >
        )
    }

}

export default App; 