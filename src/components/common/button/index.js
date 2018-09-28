import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Button extends PureComponent {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

	onClick(e) {
		this.props.onClick(e);
	}

	render() {
		return (
			<button
				onClick={this.onClick}>
				{this.props.title}
			</button>
		)
	}
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Button;