import React from 'react';
import useOutputImgs from '../hooks/useOutputImgs';
import { motion } from 'framer-motion';

const ImgGallery = ({ setSelectedImg }) => {
	// useOutputImgs is going to listen for the collection images inside firestore and return everything it has in the descending order
	const { docs } = useOutputImgs('images');

	return (
		<section >
		<div className="grid-container">
		{ docs && docs.map(doc => (
		<motion.div className='img-wrap' key={doc.id} 
		layout
		whileHover={{opacity : 1}} 
		onClick={() => setSelectedImg(doc.url)}
		>
		<motion.img className="card card-tall card-wide" src={doc.url} alt="uploaded pic"
		    initial={{ opacity : 0}}
		    animate={{ opacity: 1 }}
		    transition={{delay: 1}}
		/>
		</motion.div>
		))}
		</div>
		</section>
	)
}

export default ImgGallery;