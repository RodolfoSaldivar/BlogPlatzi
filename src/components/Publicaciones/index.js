import React, { Component } from 'react';

class index extends Component {
	render() {
		return (
			<div>
				{ this.props.match.params.key }
			</div>
		);
	}
}

export default index;