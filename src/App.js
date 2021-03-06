import React, { useState } from 'react';
import './App.css';

// Amplify libraries
import Amplify, { Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const App = () => {
  const [fileUrl, setfileUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const downloadUrl = async () => {
    const downloadUrl = await Storage.get('file.tgz', { level: 'private', expires: 10 });
    window.location.href = downloadUrl
  }

  const handleChange = async (e) => {
    const file = e.target.files[0];
    try {
      setLoading(true);
      await Storage.put('file.tgz', file, {
        level: 'private',
        contentType: 'file/*'
      });
      const url = await Storage.get('file.tgz', { level: 'private' })
      setImageUrl(url);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h1> Upload an Image </h1>
      {loading ? <h3>Uploading...</h3> : <input
        type="file" accept='*/*'
        onChange={(evt) => handleChange(evt)}
      />}
      <div>
        {imageUrl ? <img style={{ width: "30rem" }} src={imageUrl} /> : <span />}
      </div>
      <div>
        <h2>Download URL?</h2>
        <button onClick={() => downloadUrl()}>Click Here!</button>
      </div>
    </div>
  );
}

export default withAuthenticator(App);
