import React from 'react';
import { useState, useEffect, Component } from 'react';
import { PHOTOAUTHKEY } from '../../../server/config.js';
import { cloudinaryCloudName } from '../../../server/config.js';
import api from '../../../server/api.js';

const PhotoUpload = ({callback}) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [photosSrcList, setPhotosSrcList] = useState(['']);
  const [fileWarn, setFileWarn] = useState(false);

  const uploadPreset = 'wjuxohsi';

  const handleUploadOnClick = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);

    if(files.length > 5) {
      setFileWarn(true);
      return;
    } else {
      setFileWarn(false);
    }

    const promises = files.map(el => {
      var formData = new FormData();
      formData.append("file", el);
      formData.append("upload_preset", uploadPreset);
      return api.postPhotos(formData);
    });

    Promise.all(promises)
      .then(responses => {
        const data = responses.map(responses => responses.data.url)
        setPhotosSrcList(photosSrcList.concat(data))
      })
      .catch(err => {
        console.warn('Error uploading picture', err);
      })
  }

  const fileWarning = fileWarn ? <div>Please select less than 5 photos</div> : <></>;

  return (
    <div className="flex flex-col">
      {<>
        <label>
          <span className="sr-only"> Upload Photo</span>
          <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 hover:file:bg-emerald-100"
            onChange={handleUploadOnClick} />
        </label>
      </>}

      {fileWarning}

      {photosSrcList.length > 0 && <div className='flex flex-row'>
        {Array.from({ length : 5},(v, i) =>
          <div className='w-2/12 max-h-12 my-2 overflow-auto mx-2' key={'img' + i}>
            <img className="object-cover" src={photosSrcList[i]}></img>
          </div>
        )}
      </div>}
    </div>
  )
}

export default PhotoUpload;