import { Header } from "./components/header";
import { Post } from "./components/Post";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

// author { name: string; role: string; avatarUrl: string; }
// publishedAt: Date;
//content: string

const posts = [
  {
    id: 1,
    author: {
      name: "Isrraely Curtiz",
      role: "Web Developer",
      avatarUrl: "https://github.com/isrraely.png",
    },
    publishedAt: new Date("2025-08-16 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      // { type: "hashtag", content: "#novoprojeto" },
      // { type: "hashtag", content: "#nlw" },
      // { type: "hashtag", content: "#rocketseat" },
    ],
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      role: "Rocketseat's CTO",
      avatarUrl: "https://github.com/diego3g.png",
    },
    publishedAt: new Date("2025-08-14 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
      // { type: "hashtag", content: "#novoprojeto" },
      // { type: "hashtag", content: "#nlw" },
      // { type: "hashtag", content: "#rocketseat" },
    ],
  },
];

export function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                role={post.role}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
