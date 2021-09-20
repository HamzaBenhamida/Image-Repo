import {useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

// handling file uploads and returning useful information about that upload (upload progress, errors, image url)
const useStorage = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	//runs everytime we get a new file value
	useEffect(() => {
	// reference to where the file should be saved
	const storageRef = projectStorage.ref(file.name)  // creating a reference to a file inside the firebase storage bucket with the filename as the default bucket
	
	const collectionRef = projectFirestore.collection('images');

	/// take a file and put it in the reference (asynchronous)
	//  => so we put listeners to it so that we can run functions when certain events happens
	// The event we want to listen on is the 'state_changed' ( when the progress changes or it is complete ..) 
	// We are going to run a function with snap object (snapshot in time of the upload) everytime the state changes
	storageRef.put(file).on('state_changed', (snap) => {
		let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;  // percentage of the upload by calculating the number of bytes transferred
		setProgress(percentage);
	}, 
	// This function will run if there is an error in the upload
	(err) => {
		setError(error);
	}, 
	// This function will run when the upload will be fully completed
	async () => {
		const url = await storageRef.getDownloadURL();
		const createdAt = timestamp();
		//const createdAt = projectStorage.database.ServerValue.TIMESTAMP ;
		//const createdAt = ServerValue.TIMESTAMP;
		collectionRef.add({ url: url, createdAt: createdAt});
		setUrl(url);
	});
        }, [file])

	return { progress, url, error}
}

export default useStorage;
