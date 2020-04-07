import React, { Component } from 'react';
import CardList from '../components/CardList';
import SerchBox from '../components/SerchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			serchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(user => this.setState({ robots: user }));
	}

	onSerchChange = (event) => {
		this.setState({ serchfield: event.target.value });
		console.log(this.props.store.getState())
	}

	render() {
		const { robots, serchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(serchfield.toLowerCase())
		})
		return !robots.length ?
			<h1 className='tc f1'>Loading...</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>RoboFrieds</h1>
					<SerchBox serchchange={this.onSerchChange} />
					<Scroll>
						<ErrorBoundry>
							<CardList robots={filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		}
}

export default App;
