import React from 'react';
import Title from './comps/Title';
import UplaodForm from './comps/UploadForm';
import ImageGird from './comps/ImageGrid';
import Modal from './comps/Modal';

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
