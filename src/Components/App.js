import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getStreams } from './../redux/actions'

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
					Hope this works!
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