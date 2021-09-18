import React from 'react';

// Returns a form tag with an input of type file which allows users to select images from their computer
const UploadForm = () => {
	const [file, setFile] = useState(null); 
	const [error, setError] = useState(null);

	const types = ['image/png', 'image/jpeg' ];  //different type of files we will allow our users to upload

	const changeHandler = (event) => {
		let selected = event.target.files[0]; // selects the first file (on some cases form allows you to select multiple files)
		console.log(selected);

		// The user has the choice to cancel after choosing a file, therefore we have to make sure the user has correctly selected a file
		// Moreover we also have to check if the file is an image and not a video or other type of file
		if(selected && types.includes(selected.type)) {
			setFile(selected);	// store the selected file in a local piece of state
			 setError('');		// When we select a valid image we want the error message to disapear (if we previously upload wrong file format)
		} else {
			setFile(null);  //reset value because of invalid or undefined input
			setError('Please select a valid image file type (png or jpeg');
		}
	}
 
	return (
	<form>
		<input type="file" onChange={changeHandler}/>  
		<div className="output">
			{error && <div className="error"> {error} </div> }
			{file && <div> {file.name } </div>}
		</div>
	</form>	
	)
}

export default UploadForm;

