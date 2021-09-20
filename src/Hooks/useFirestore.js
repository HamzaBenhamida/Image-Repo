import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);
	
	useEffect(() => {
		const unsub = projectFirestore.collection(collection)
			.orderBy('createdAt', 'desc')
			.onSnapshot((snap) => {
			let documents = [];
			// cycles through the documents currently in the database collection at the time of the snapshot (snap)
			snap.forEach(doc => {
				documents.push({...doc.data(), id: doc.id})
			});
		setDocs(documents); 
		})
		
		//unsubscribe from the collection when we no longer use it (when image-grid dismounts)
		return () => unsub();

	}, [collection])

	return { docs };
}

export default useFirestore;