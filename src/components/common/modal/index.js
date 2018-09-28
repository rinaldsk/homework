import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from "../button/index";

export default class Modal extends PureComponent {
	render() {
		return (
			<div className={'modal'}>
				<div className={'modalWindow'}>
					<p>{this.props.text}</p>
					<Button title={'Ok'} onClick={this.props.onCloseClick}/>
				</div>
			</div>
		)
	}
}

Modal.propTypes = {
	text: PropTypes.string.isRequired,
	onCloseClick: PropTypes.func.isRequired
};