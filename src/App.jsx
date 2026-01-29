import { useState } from 'react';
import CVLayout from './components/CVLayout';
import ReviewModal from './components/ReviewModal';
import CommentsSidebar from './components/CommentsSidebar';
import './styles/main.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem('cvComments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  // Save comment to Local Storage and state
  const handleSaveComment = comment => {
    const newComment = {
      id: Date.now(),
      text: comment,
      date: new Date().toISOString(),
    };

    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem('cvComments', JSON.stringify(updatedComments));
    setIsModalOpen(false);
  };

  // Delete comment
  const handleDeleteComment = id => {
    const updatedComments = comments.filter(comment => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem('cvComments', JSON.stringify(updatedComments));
  };

  return (
    <div className="app">
      <div className="app__content">
        <CVLayout />

        <button className="review-button" onClick={() => setIsModalOpen(true)}>
          Review
        </button>

        {isModalOpen && (
          <ReviewModal onClose={() => setIsModalOpen(false)} onSave={handleSaveComment} />
        )}
      </div>

      <CommentsSidebar comments={comments} onDelete={handleDeleteComment} />
    </div>
  );
}

export default App;
