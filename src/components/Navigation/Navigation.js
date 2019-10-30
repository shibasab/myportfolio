import React from 'react';
import './Navigation.css';
//ナビゲーションバー
//それぞれの要素のリンクを貼る
//スクロールしても常に上に表示されるようにする
const Navigation = () => {
  return (
    <ul className="topnav">
      <li>
        <a className="active" href="#home">
          Top
        </a>
      </li>
      <li>
        <a href="#news">About</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#products">Products</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;
