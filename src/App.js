import React, { useState } from 'react';
import Title from './components/Title';
import UplaodForm from './components/UploadForm';
import ImgGallery from './components/ImgGallery';
import FullSizeImg from './components/FullSizeImg';

// Root component
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UplaodForm />
      <ImgGallery setSelectedImg={setSelectedImg}/>
      { selectedImg && <FullSizeImg selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;
