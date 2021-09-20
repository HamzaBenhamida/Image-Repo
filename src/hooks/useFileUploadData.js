import {useState, useEffect } from 'react';
import { firebaseStorage, firestoreDatabase, timestamp } from '../firebase/config';

// handling file uploads and returning useful information about that upload (upload progress, errors, image url)
const useFileUploadData = (file) => {
	const [progress, setProgress] = useState(0);
	const [error, setError] = useState(null);
	const [url, setUrl] = useState(null);

	//runs everytime we get a new file value
	useEffect(() => {
	// reference to where the file should be saved
	const memoryInStorage = firebaseStorage.ref(file.name)  // creating a reference to a file inside the firebase storage bucket with the filename as the default bucket
	
	const collectionRef = firestoreDatabase.collection('images');

	/// take a file and put it in the reference (asynchronous)
	//  => so we put listeners to it so that we can run functions when certain events happens
	// The event we want to listen on is the 'state_changed' ( when the progress changes or it is complete ..) 
	// We are going to run a function with snap object (snapshot in time of the upload) everytime the state changes
	memoryInStorage.put(file).on('state_changed', (snap) => {
		let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;  // percentage of the upload by calculating the number of bytes transferred
		setProgress(percentage);
	}, 
	// This function will run if there is an error in the upload
	(err) => {
		setError(error);
	}, 
	// This function will run when the upload will be fully completed
	async () => {
		const url = await memoryInStorage.getDownloadURL();
		const createdAt = timestamp();
		//const createdAt = firebaseStorage.database.ServerValue.TIMESTAMP ;
		//const createdAt = ServerValue.TIMESTAMP;
		collectionRef.add({ url: url, createdAt: createdAt});
		setUrl(url);
	});
        }, [file])

	return { progress, url, error}
}

export default useFileUploadData;