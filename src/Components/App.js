import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getStreams } from './../redux/actions';

import ShowPopularGames from './ShowPopularGames';

import {
	SApp
} from './styles';

class App extends Component {

	componentDidMount = () => {
		this.props.getStreams();
	}

	render() {
		return (
			<SApp>
				<div>
					Welcome to the Twitch Tracker.
				</div>
				<div>
					< ShowPopularGames />
				</div>
			</SApp>
		);
	}
}

const mapStateToProps = state => ({
	data: state.data
});

const mapStateToDispatch = {
	getStreams
};

export default connect(mapStateToProps, mapStateToDispatch)(App);