import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function getResume() {
	return axios.get("https://einthiri-resume.herokuapp.com/resume");
}

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = { resume: null };
	}

	render() {

		getResume().then(result => {
			this.setState({ resume: result.data });
		});

		return (
			<div className='container'>
				{
					this.state.resume == null ? (<h4> Resume is loading </h4>) : (<div>


						<h2> {this.state.resume.name} </h2>
						<h4> Age: {this.state.resume.age} </h4>
						<h4> Gpa: {this.state.resume.gpa} </h4>




						<dt className="bg-danger"> Hobbies </dt>
						<ul className="list-group">
							{this.state.resume.hobbies.map(hobby => <li className='list-group-item'>{hobby}</li>)}
						</ul>

						<dt className="bg-success"> Courses </dt>
						<ul className="list-group">
							{this.state.resume.courses.map(course => <li className='list-group-item'>{course}</li>)}
						</ul>

						<dt className="bg-info"> Awards </dt>
						<ul className="list-group">
							{this.state.resume.awards.map(award => <li className='list-group-item'>{award}</li>)}
						</ul>

					

						<div className="container">
							<img src="Profile.jpg" className="profile-image" alt="Profile" />
						</div>
					</div>)
				}
			</div>

		);
	}
}


export default App;
