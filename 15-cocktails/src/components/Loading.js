import React from "react";
import { useGlobalContext } from "../context";

const Loading = () => {
  const { isDark } = useGlobalContext();

  return <div className={` loader ${isDark && "loader-wrapper-dark"} `}></div>;
};

export default Loading;
