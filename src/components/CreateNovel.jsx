import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function CreateNovel() {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [story, setStory] = useState('');
  const navigate = useNavigate();

  const genres = ['Fantasy', 'Horror', 'Mystery', 'Adventure', 'Romance', 'Sci-Fi'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const novelData = {
        title,
        genre,
        NovelCoverpage: coverUrl,
        Story: story,
        author: auth.currentUser.displayName || auth.currentUser.email,
        Uploadby: auth.currentUser.uid,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      const docRef = await addDoc(collection(db, 'Novels'), novelData);
      navigate(`/novel/${docRef.id}`);
    } catch (error) {
      console.error('Error creating novel:', error);
    }
  };

  return (
    <div className="create-novel">
      <h2>Create New Novel</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Genre:</label>
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="">Select Genre</option>
            {genres.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Cover Image URL (optional):</label>
          <input
            type="url"
            value={coverUrl}
            onChange={(e) => setCoverUrl(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Story Description:</label>
          <textarea
            value={story}
            onChange={(e) => setStory(e.target.value)}
            required
            rows="5"
          />
        </div>

        <button type="submit">Create Novel</button>
      </form>
    </div>
  );
}

export default CreateNovel;