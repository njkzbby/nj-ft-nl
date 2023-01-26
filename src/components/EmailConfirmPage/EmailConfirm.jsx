import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { instance } from "../utils/axiosInstance";

export const EmailConfirm = () => {
  const location = useLocation();
  const locathionSearch = location.search;
  const searchParams = new URLSearchParams(locathionSearch);
  const code = searchParams.get("code");

  function goAccept() {
    instance.post("api/v1/users/activate/", { code });
    console.log({ code });
  }

  useEffect(() => {
    goAccept();
  });

  return (
    <>
      <h2>locathionsearch: {locathionSearch}</h2>
      <br />
      <h2>searchparams: {code}</h2>
      Copy code
      <input
        value={code}
        onChange={() => console.log(searchParams.data)}
      ></input>
    </>
  );
};
