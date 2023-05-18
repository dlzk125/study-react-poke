import React from 'react';
import './Default.scss';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Default: React.FC<{ children?: React.ReactNode }> = (props = {}) => {
  const { children } = props;
  return (
    <div id="App">
      <div className="direct-link">
        <a href="#mainContent">본문 바로가기</a>
      </div>

      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Default;
