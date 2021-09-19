import React, { useState } from 'react';
import Title from './components/Title';
import UplaodForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

// Root component
function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <UplaodForm />
      <ImageGrid setSelected={setSelectedImg}/>
      { selectedImg && <Modal setSelected={setSelectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;
