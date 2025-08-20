import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <div className={styles.commentAuthor}>
        <Avatar
          hasBorder={false}
          src="https://github.com/isrraely.png"
          alt="Raely Curtiz"
        />
      </div>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorInfo}>
              <strong>Raely Curtiz</strong>
              <time dateTime="2025-08-16 20:00:00" title="Cerca de 1h atrás">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
