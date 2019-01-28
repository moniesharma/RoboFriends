import React, { Component } from 'react';
import './app.css';
import CardList from './CardList';
import Scroll from './scroll';
import SearchBox from './SearchBox';


class App extends Component {
    constructor() {
        super()
        this.state = {

            robots: [],
            searchField: ''

        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({robots: users}));

    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const filterRobots =
            this.state.robots.filter(robots =>
                robots.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
        if (this.state.robots.length === 0) {
            return <h1 className="pokemonFont f1 tc">Loading...</h1>
        } else {
            return (
                < div className='tc' >
                    <h1 className="pokemonFont f1"> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll ><CardList robots={filterRobots} /> </Scroll>
                </div >
            )
        }
    }

}

export default App; 