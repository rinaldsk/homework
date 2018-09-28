import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './redux/store';
import RatesContainer from "./containers/rates";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<RatesContainer/>
				</div>
			</Provider>
		);
	}
}

export default App;
