import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.homeContainer}>
      <Link to="memorandum">备忘录</Link>
      <Link to="image-compress">图片压缩</Link>
    </div>
  );
};

export default Home;
