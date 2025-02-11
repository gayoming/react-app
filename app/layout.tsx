import styles from "./styles/global.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className={styles.container}>
          <nav className={styles.navbar}>
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/join">Join</a>
          </nav>
          {children}
      </div>
      </body>
    </html>
  );
}