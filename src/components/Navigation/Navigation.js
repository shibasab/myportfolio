import React from 'react';
import './Navigation.css';
import Experience from '../Experience/Experience';
//ナビゲーションバー
//それぞれの要素のリンクを貼る
//スクロールしても常に上に表示されるようにする
const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <a className="active" href="#home">
            Top
          </a>
        </li>
        <li>
          <a href="#about">About</a>
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
    </div>
  );
};

export default Navigation;
