import { GET_STREAMS } from "./../../actions/types";

const initState = [];

const dataReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case GET_STREAMS:
			return payload;

		default:
			return state;
	};
};

export default dataReducer;