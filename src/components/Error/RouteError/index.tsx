import React from "react";
import { Link } from "react-router-dom";

const RouteError: React.FC = () => {
  return (
    <>
      <h1>访问出现错误，请返回首页</h1>
      <Link to="/">首页</Link>
    </>
  );
};

export default RouteError;
