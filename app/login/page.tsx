import LoginButton from "@/components/LoginButton";
import "../styles/global.css"; // 일반 CSS 적용

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1>로그인 페이지</h1>
      <LoginButton />
    </div>
  );
}
