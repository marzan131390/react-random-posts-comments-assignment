import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import  {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import Posts from './Components/Posts/Posts';
import Comments from './Components/Comments/Comments';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/home" element={<Home></Home>} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/posts/:userId" element={<Posts></Posts>} />
          <Route path="/comments/:commentId" element={<Comments></Comments>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
