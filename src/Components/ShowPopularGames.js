import React, { Component } from 'react';

import axios from 'axios';

class ShowPopularGames extends Component {
	constructor(props) {
		super(props);
		this.countStreams = this.countStreams.bind(this);
	}

	getStreams = async () => {
		const axios = require('axios')
		try {
			return await
				axios.get('https://api.twitch.tv/kraken/streams/?client_id=3iy9n0eatjk9mnzujv90whbyiho8gu')
		} catch (error) {
			console.error(error)
		}
	}

	countStreams = async () => {

		const currentTopStreams = [];
		const currentStreams = await this.getStreams()

		if (currentStreams) {
			console.log(currentStreams.data.streams);
			console.log(currentStreams.data.streams[0].game);
			var i;
			for (i = 0; i < currentStreams.data.streams.length; i++) {
				currentTopStreams.push(currentStreams.data.streams[i].game);
			}
			console.log(currentTopStreams);


		} else {
			console.log('Nobody is playing that game right now.');
		}
	};

	render() {
		return (
			<div>
				<button
					onClick={this.countStreams}
				>
					Show Top Streams Right Now...
			</button>

			</div>
		);
	}
}

export default ShowPopularGames;