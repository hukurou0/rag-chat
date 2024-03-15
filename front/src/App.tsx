import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Text from './components/add-knowledge/Text';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* exact をつけると完全一致になる */}
          <Route path='/' element={<Home />} />
          <Route path='/add/text' element={<Text />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
