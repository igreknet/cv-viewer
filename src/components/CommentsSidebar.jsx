import { formatDate } from '../utils/utils';

const CommentsSidebar = ({ comments, onDelete }) => {
  return (
    <aside className="comments-sidebar">
      <div className="comments-sidebar__header">
        <h2 className="comments-sidebar__title">Comments</h2>
        <span className="comments-sidebar__count">{comments.length}</span>
      </div>

      {comments.length === 0 ? (
        <div className="comments-sidebar__empty">
          <p className="comments-sidebar__empty-text">
            No comments yet. Click "Review" to add your feedback.
          </p>
        </div>
      ) : (
        <div className="comments-sidebar__list">
          {comments.map(comment => (
            <article key={comment.id} className="comment-card">
              <div className="comment-card__header">
                <time className="comment-card__date">{formatDate(comment.date)}</time>
                <button
                  className="comment-card__delete"
                  onClick={() => onDelete(comment.id)}
                  aria-label="Delete comment"
                >
                  ×
                </button>
              </div>
              <p className="comment-card__text">{comment.text}</p>
            </article>
          ))}
        </div>
      )}
    </aside>
  );
};

export default CommentsSidebar;
