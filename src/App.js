import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import Email from './Email';

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <h2>Email 簽名檔設定</h2>
      <Email></Email>
    </Container>
  );
}

export default App;
