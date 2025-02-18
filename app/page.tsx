"use client";
import { useState, useEffect } from "react";
import { getDustData } from "../utils/fetchDust";
import Link from "next/link";

export default function Home() {
  const [dust, setDust] = useState<any>(null);

  useEffect(() => {
    getDustData("서울").then(setDust);
  }, []);

  return (
    <div>
      <div>
      <h1>홈 페이지</h1>
      <p>여기는 메인 화면입니다.</p>
      <Link href="/login">
        <button>로그인 하러 가기</button>
      </Link>
    </div>
      <h1>미세먼지 농도</h1>
      {dust ? <p>현재 미세먼지: {dust.list[0].pm10Value}㎍/m³</p> : <p>로딩 중...</p>}
    </div>
  );
}