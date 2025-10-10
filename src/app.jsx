import React from 'react';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
