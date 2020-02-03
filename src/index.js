import React from 'react';
import ReactDom from 'react-dom'; 
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component{

constructor(props){
	super(props);
	this.state= {latitude: null,errmsg:""};

}
 	componentDidMount(){
 			window.navigator.geolocation.getCurrentPosition(
		(position)=> this.setState({latitude: position.coords.latitude}), 
		(err)=> this.setState({errmsg: err.message})
)}

 	componentDidUpdate(){
 		console.log("My component was just updated - it rerendered");
 	}

renderContent(){
		if (this.state.errmsg && !this.state.latitude){
				return <div>Erro: {this.state.errmsg} </div>;
			}

			if (!this.state.errmsg && this.state.latitude){
					return <SeasonDisplay latitude={this.state.latitude}/>;
		}

		return <Spinner message="Please accept location request"/>;
}

render(){
		return (
				<div> 
				{this.renderContent()}
				</div>
			);
};
}

ReactDom.render(<App/>, document.querySelector('#root'));