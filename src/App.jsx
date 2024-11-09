import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './App.css';
import Navbar from './components/Navbar';
import GenreCarousel from './components/GenreCarousel';
import NovelCard from './components/NovelCard';
import AuthForm from './AuthForm';
import UploadChapter from './UploadChapter';
import CreateNovel from './components/CreateNovel';
import { db, auth } from './firebase';

function App() {
  const [novels, setNovels] = useState([]);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchNovels = async () => {
      const querySnapshot = await getDocs(collection(db, 'Novels'));
      const novelsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNovels(novelsList);
    };
    fetchNovels();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const filteredNovels = novels.filter((novel) =>
    novel.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    novel.author?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <Navbar user={user} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={
            <>
              <GenreCarousel />
              <div className="novels-grid">
                {filteredNovels.map((novel) => (
                  <NovelCard key={novel.id} novel={novel} />
                ))}
              </div>
            </>
          } />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/about" element={<h1>About Page</h1>} />
          {user && (
            <>
              <Route path="/create-novel" element={<CreateNovel />} />
              <Route path="/upload-chapter/:novelId" element={<UploadChapter />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;