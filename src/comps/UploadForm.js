import React from 'react';

// Returns a form tag with an input of type file which allows users to select images from their computer
const UploadForm = () => {

	// This function reacts after a user selects an image on the form 
	// The event object represents an image which will be automatically selected
	const changeHandler = (event) => {
		console.log('changed');

		let selected = event.target.files[0]; // selects the first file (on some cases form allows you to select multiple files)
	}
 
	return (
	<form>
		<input type="file" onChange={changeHandler}/>  
	</form>	
	)
}

export default UploadForm;