import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class RateTable extends PureComponent {

	renderData() {
		let re = [];
		Object.entries(this.props.data).forEach(([key, value]) => {
			re.push(
				<tr key={key}>
					<td>{key}</td>
					<td>{value}</td>
				</tr>
			);
		});
		return re;
	}

	render() {
		return (
			<table align="center">
				<thead>
				<tr>
					<th>Currency</th>
					<th>Rate</th>
				</tr>
				</thead>
				<tbody>
				{
					this.renderData()
				}
				</tbody>
			</table>
		)
	}
}

RateTable.propTypes = {
	data: PropTypes.object.isRequired
};