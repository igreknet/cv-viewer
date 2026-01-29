import { useEffect, useState } from 'react';

const ReviewModal = ({ onClose, onSave }) => {
  const [comment, setComment] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (comment.trim()) {
      onSave(comment);
      setComment('');
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal__content">
        <div className="modal__header">
          <h2 className="modal__title">Add Review</h2>
          <button className="modal__close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <form className="modal__form" onSubmit={handleSubmit}>
          {isMobile && (
            <div className="modal__info">
              <p className="modal__info-text">
                💡 Comments are saved but the sidebar is hidden on mobile devices. View on desktop
                to see all comments.
              </p>
            </div>
          )}

          <div className="modal__field">
            <label htmlFor="comment" className="modal__label">
              Your Comment
            </label>
            <textarea
              id="comment"
              className="modal__textarea"
              value={comment}
              onChange={e => setComment(e.target.value)}
              placeholder="Enter your review or feedback about this CV..."
              rows="6"
              required
            />
          </div>

          <div className="modal__actions">
            <button
              type="button"
              className="modal__button modal__button--secondary"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="modal__button modal__button--primary">
              Save Comment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
