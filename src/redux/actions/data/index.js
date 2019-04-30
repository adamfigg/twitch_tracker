import { GET_STREAMS } from './types';

import db from './../../../db';

export const getStreams = callback => {
	return async dispatch => {
		console.log('I am getting the streams in the redux/actions/data/index file')
		const json = db;
		dispatch({ type: GET_STREAMS, payload: json });
	}
}