import Layout from '../components/Layout';
import React from 'react';
import ResumePdf from '../../media/01_03_2019_resume.pdf';
const Resume = () => (
  <Layout>
    <div style={{ height: '100vh' }}>
      <embed
        src={ResumePdf}
        type="application/pdf"
        width="100%"
        height="100%"
      />
    </div>
  </Layout>
);

export default Resume;
