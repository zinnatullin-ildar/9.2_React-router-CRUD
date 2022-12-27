import { Routes, Route, HashRouter } from "react-router-dom";
import ListPage from './components/pages/ListPage';
import CreatePage from './components/pages/CreatePage';
import EditPage from './components/pages/EditPage';
import PostDetailedPage from './components/pages/PostDetailedPage';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<ListPage />} />
          <Route path="/posts/new" element={<CreatePage />} />
          <Route path="/posts/:id" element={<PostDetailedPage />} />
          <Route path="/posts/edit/:id" element={<EditPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
