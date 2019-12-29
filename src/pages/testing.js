import Layout from '../components/Layout';
import React from 'react';
import Video from '../../media/joplin.mp4';
const Testing = () => (
  <Layout>
    <h1>DYNAMIC ROUTING FOR FREE</h1>
    <video controls width="450">
      <source type="video/mp4" src={Video} />
      Sorry, your browser doesn't support embedded videos.
    </video>
  </Layout>
);

export default Testing;
