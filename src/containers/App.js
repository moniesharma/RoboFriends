import React, { Component } from 'react';
import './app.css';
import CardList from '../components/CardList';
import Scroll from '../components/scroll';
import SearchBox from '../components/SearchBox';


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
            .then(users => this.setState({ robots: users }));

    }
    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render() {
        const { robots, searchField } = this.state;
        const filterRobots =
            robots.filter(robot =>
                robot.name.toLowerCase().includes(searchField.toLowerCase()))
        return !robots.length ?
            <h1 className="pokemonFont f1 tc">Loading...</h1> :

            (
                < div className='tc' >
                    <h1 className="pokemonFont f1"> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll ><CardList robots={filterRobots} /> </Scroll>
                </div >
            )
    }
}



export default App; 