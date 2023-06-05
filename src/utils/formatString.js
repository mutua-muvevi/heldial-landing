import _ from "lodash";

export const truncateStr = (string, length) => {
	const response = _.truncate( string, {
		length: length
	})
	return response;
  }