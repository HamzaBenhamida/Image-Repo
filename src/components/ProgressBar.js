import React, { useEffect } from 'react';
import useFileUploadData from '../hooks/useFileUploadData';
import { motion } from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
	const { url, progress } = useFileUploadData(file);

	useEffect(() => {
		if (url) {
		  setFile(null);
		}
	}, [url, setFile])

	return(
	<motion.div className="progress-bar" 
           initial={{ width: 0}}
	   animate={{ width: progress + '%'}}
	></motion.div>
	)
}

export default ProgressBar;