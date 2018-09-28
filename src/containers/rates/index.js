import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getRates, removeError} from '../../redux/rates/index';
import Button from "../../components/common/button/index";
import {selectBaseRate, selectLoading, selectLoadingError, selectRates} from "../../redux/rates/selectors";
import RateTable from "../../components/rates/table";
import Modal from "../../components/common/modal";

export class RatesContainer extends Component {
	constructor(props) {
		super(props);
		this.onLoadClick = this.onLoadClick.bind(this);
		this.closeError = this.closeError.bind(this);
	}

	onLoadClick() {
		this.props.getRates();
	}

	closeError() {
		this.props.removeError();
	}

	render() {
		const hasRates = this.props.rates && Object.keys(this.props.rates).length > 0;
		return (
			<div className={'RatesPage'}>
				{
					!this.props.loading && !hasRates &&
					<div>
						<Button
							title={'Load rates'}
							onClick={this.onLoadClick}/>
					</div>
				}
				{
					this.props.loading &&
					<div className={'loadingMessage'}>
						<p>Loading...</p>
					</div>
				}
				{
					this.props.base &&
					<div className={'baseRate'}>
						<p>Base rate: {this.props.base}</p>
					</div>
				}
				{
					hasRates && <RateTable data={this.props.rates} />
				}
				{
					this.props.error &&
					<Modal
						text={this.props.error}
						onCloseClick={this.closeError}
					/>
				}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		rates: selectRates(state),
		base: selectBaseRate(state),
		loading: selectLoading(state),
		error: selectLoadingError(state)
	}
}

const mapDispatchToProps = {
	getRates,
	removeError
};

export default connect(mapStateToProps, mapDispatchToProps)(RatesContainer);