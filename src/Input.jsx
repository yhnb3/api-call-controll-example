import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default function Input() {
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handlingValue = (e) => {
    setInputValue(e.target.value);
  };

  const fetchDataCallBack = useCallback(async () => {
    if (isLoading) {
      const data = await axios.get(`/api/me?value=${inputValue}`);
      console.log(data.data.message);
      setTimeout(() => {
        console.log("제한 시간 시작");
        setIsLoading(false);
      }, 0);
      setTimeout(() => {
        console.log("제한 시간 끝");
        setIsLoading(true);
      }, 1000);
    }
  }, [inputValue]);

  useEffect(() => {
    fetchDataCallBack();
  }, [fetchDataCallBack]);

  return (
    <>
      <input value={inputValue} onChange={handlingValue}></input>
    </>
  );
}
