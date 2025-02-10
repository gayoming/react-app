"use client";
import { useState, useEffect } from "react";
import { getDustData } from "@/utils/fetchDust";

export default function Home() {
  const [dust, setDust] = useState<any>(null);

  useEffect(() => {
    getDustData("서울").then(setDust);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">미세먼지 농도</h1>
      {dust ? <p>현재 미세먼지: {dust.list[0].pm10Value}㎍/m³</p> : <p>로딩 중...</p>}
    </div>
  );
}