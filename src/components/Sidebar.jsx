import styles from "./Sidebar.module.css";
import cover from "../assets/cover-profile.jpg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img src={cover} alt="Cover Profile" className={styles.cover} />
      <div className={styles.profile}>
        <Avatar src={cover} alt="Raely Curtiz" />
        <strong>Isrraely Curtiz</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit Profile
        </a>
      </footer>
    </aside>
  );
}
