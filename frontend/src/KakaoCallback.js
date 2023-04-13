import { useEffect, useState } from "react";

function KakaoCallback() {
  const [code, setCode] = useState("");
  /**
   * @description 로그인/회원가입 하기
   */
  const fetchLogin = async (code) => {
    try {
      const { isGood } = await (
        await fetch("http://localhost:3001/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        })
      ).json();

      console.log(isGood);
    } catch (error) {
      alert("Function fetchLogin error!");
      console.error(error);
    }
  };

  useEffect(() => {
    if (code) {
      fetchLogin(code);
    }
  });

  useEffect(() => {
    const Address = new URL(window.location.href);

    const code = Address.searchParams.get("code") || "";

    // fetchLogin(code);
    setCode(code);
  }, []);

  return <div>대기중..</div>;
}

export default KakaoCallback;
