import './App.css';
import {useRef, useState, useEffect} from 'react';
import {uploadFile} from './services/api';
import App from './App';
function FileShare() {
  
  const [file, setFile] = useState('');
  // for downloading
  const [result, setResult] = useState('');
  const fileInputRef = useRef();

  const url = 'https://coolbackgrounds.io/images/backgrounds/index/compute-ea4c57a4.png';

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }
  console.log(file);
  return (
    <div className='container'  >
    <div className='wrapper'>
      <h1>Simple file sharing!</h1>
      <p>Upload and share the download link.</p>
      
      <button onClick={() => onUploadClick()}>Upload</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <a href={result} >{result}</a>

    </div>
  </div>
  );
}

export default FileShare;
