import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, <br />
            My name is
            <span className="hero-name"> Rakesh Ranjan Kumar.</span><br />
            <span>I am passionate </span>
            <span className="hero-designation">Software Engineer</span>
          </h1>

          <ul className="resume-button">
            <li>
              <a href="https://drive.google.com/file/d/1eeK0d9yhCTpldwOs0EqEr0Qmrl2ayVwe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Get Resume
              </a>
            </li>
          </ul>
        </div>

        <div className="hero-code">
          <div className="code-border">
            <div className="code-header">
              <div className="code-dot code-dot-red"></div>
              <div className="code-dot code-dot-orange"></div>
              <div className="code-dot code-dot-green"></div>
            </div>
          </div>
          <div className="code-content">
            <code className="code-block">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-variable">coder</span>
                <span className="code-operator">=</span>
                <span className="code-brace">{'{'}</span>
              </div>
              <div className="code-line">
                <span className="code-indent">name:</span>
                <span className="code-string">'Rakesh Ranjan Kumar'</span>
                <span className="code-comma">,</span>
              </div>
              <div className="code-line">
                <span className="code-indent">skills:</span>
                <span className="code-array">
                  ['React', 'ExpressJS', 'Redux', NodeJS, 'Sql/Postgres', 'MongoDB', 'Javascript', 'Java', 'AWS']
                </span>
                <span className="code-comma">,</span>
              </div>
              <div className="code-line">
                <span className="code-indent">hardWorker:</span>
                <span className="code-boolean">true</span>
                <span className="code-comma">,</span>
              </div>
              <div className="code-line">
                <span className="code-indent">quickLearner:</span>
                <span className="code-boolean">true</span>
                <span className="code-comma">,</span>
              </div>
              <div className="code-line">
                <span className="code-indent">problemSolver:</span>
                <span className="code-boolean">true</span>
                <span className="code-comma">,</span>
              </div>
              <div className="code-line">
                <span className="code-indent">hireable:</span>
                <span className="code-function">function</span>
                <span className="code-brace">{'() {'}</span>
              </div>
              <div className="code-line">
                <span className="code-double-indent">return</span>
                <span className="code-paren">(</span>
              </div>
              <div className="code-line">
                <span className="code-triple-indent">this.hardWorker &amp;&amp;</span>
              </div>
              <div className="code-line">
                <span className="code-triple-indent">this.problemSolver &amp;&amp;</span>
              </div>
              <div className="code-line">
                <span className="code-triple-indent">this.skills.length &gt;= 5</span>
              </div>
              <div className="code-line">
                <span className="code-double-indent">);</span>
              </div>
              <div className="code-line">
                <span className="code-indent">{'}'}</span>
              </div>
              <div className="code-line">
                <span>{'}'}</span>
              </div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
