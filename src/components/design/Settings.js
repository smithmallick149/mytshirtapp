import React  from 'react';
const  urlImgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/";

const Settings = ({color,upperText,lowerText,uploadImage})=> {
        return (
           <div className="card bg-light container">
               <h3 className="text-center">settings</h3>
							 <h4>change T-shirt color</h4>
							 <div className="tshirt-color">
								 <img onClick={color} src={`${urlImgBase}white.png`} alt="white-tshirt" id="white"/>
								 <img onClick={color} src={`${urlImgBase}black.png`}alt="black-tshirt" id="black"/>
								 <img onClick={color} src={`${urlImgBase}grey.png`} alt="grey-tshirt" id="grey"/>
								 <img onClick={color} src={`${urlImgBase}blue.png`} alt="blue-tshirt" id="blue"/>
								 <img onClick={color} src={`${urlImgBase}red.png`}alt="red-tshirt" id="red"/>
							 </div>
							 <hr/>
							 <h4>meme Text</h4>
							 <input onChange={upperText} type="text" className="form-control form-control-sm mb-2" placeholder="Upper text"/>
							 <input type="text"  onChange={lowerText}className="form-control form-control-sm " placeholder="Lower text"/>
							 <h4>upload image </h4>
							 <div className="form-group">
								 <input onChange={uploadImage} type="file" className="form-conttrol-file mb-2"/>
								 <hr/>
								 <h4>Text Size</h4>
								 <input type="range" min="0" max="100"/>
								 <hr/>
								 <h4>Text color</h4>
								 <select className="form-control form-control-sm mb-2">
									 <option>white</option>
									 <option>Black</option>
									 <option>Red</option>
									 <option>Blue</option>
								 </select>
								 <hr/>
								 <button className="btn btn-primary btn-sm mb-2">Save</button>
							 </div>
           </div>
        );
    }


export default Settings ;