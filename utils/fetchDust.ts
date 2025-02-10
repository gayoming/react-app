const API_URL = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/";

export async function getDustData(city: string) {
  const response = await fetch(
    `${API_URL}getCtprvnRltmMesureDnsty?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}&sidoName=${city}&returnType=json`
  );
  const data = await response.json();
  return data;
}