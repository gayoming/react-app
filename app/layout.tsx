import "./styles/global.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="container">
          <nav className="navbar">
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