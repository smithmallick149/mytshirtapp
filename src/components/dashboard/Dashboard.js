import React, { Component } from 'react';
import Display from '../design/Display';
import Settings from "../design/Settings";
// import {storage} from '../../config/firebaseConfig';

class Dashboard extends Component {

state={
	tshirtColor:'black',
	upperText:'this is upper text',
	lowerText:'this is lower text',
	memeImg:'',
	url:''
}


handleTshirtColor=(e)=>{
	this.setState({tshirtColor:e.target.id});
}
handleUpperText= (e)=>{
	this.setState({upperText:e.target.value})
}

handleLowerText= (e)=>{
	this.setState({lowerText:e.target.value})
}
// handleImageUpload=(e)=>{
// 	if(e.target.files[0]){
// 		const image = (e.target.files[0]);
// 		const uploadTask = storage.ref(`images/${image.name}`).put(image);
// 		uploadTask.on('state_changed',
// 		(snapshot) =>{
// 			console.log(snapshot);
// 		},
// 		(error) => {
// 			console.log(error);
// 		},
// 		()=>{
// 			storage.ref('images').child(image.name).getDownloadURL().then(url=>{
// 				this.setState({url});
// 			})
// 		}
// 		)
// 	}
// }
    render() {
        return (
            <div className="container py-5">
							<div className="row">
								<div className="col-lg-8">
									<Display display={this.state}/>
								</div>
								<div className="col-lg-4">
									<Settings color={this.handleTshirtColor}
									upperText={this.handleUpperText}
									lowerText={this.handleLowerText}
									uploadImage={this.handleImageUpload}
									/>
								</div> 
							</div>
            </div>
        );
    }
}

export default Dashboard;