import {
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiNumpy,
  SiTensorflow,
  SiKeras,
  SiGit,
  SiOpencv
} from "react-icons/si";
import { FaMicrochip, FaTools } from "react-icons/fa";
import { SiArduino } from "react-icons/si";
import { MdMemory } from "react-icons/md";
import { GiCircuitry } from "react-icons/gi";
import { TbMathFunction } from "react-icons/tb";


import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaC } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { AiOutlineRobot } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { MdCode } from "react-icons/md";
import { SiQt } from "react-icons/si";

function Stack() {
  const stack = [
    {
      language: "Python",
      type: "Data Science / ML / CV",
      icon: <SiPython />,
      items: [
        { name: "NumPy", icon: <SiNumpy /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Matplotlib", icon: <MdCode /> },
        { name: "Seaborn", icon: <BsGraphUp /> },
        { name: "Scikit-learn", icon: <AiOutlineRobot /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "Keras", icon: <SiKeras /> },
        { name: "OpenCV", icon: <SiOpencv /> }
      ]
    },
    {
      language: "Java",
      type: "Backend",
      icon: <FaJava />,
      items: [
        { name: "Spring", icon: <SiSpring /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    }
    ,
    {
      language: "JavaScript",
      type: "Frontend",
      icon: <SiJavascript />,
      items: [
        { name: "React", icon: <SiReact /> },
        { name: "HTML", icon: <SiHtml5 /> },
        { name: "CSS", icon: <SiCss3 /> }
      ]
    },
    {
      language: "C++",
      type: "DSA / Performance / GUI",
      icon: <TbBrandCpp />,
      items: [
        { name: "STL", icon: <MdCode /> },
        { name: "Qt", icon: <SiQt /> }
      ]
    },
    {
      language: "C",
      type: "Low-level / Systems",
      icon: <FaC />,
      items: []
    },
    
    {
      language: "Tools",
      type: "Version Control",
      icon: <SiGit />,
      items: [
        { name: "Git", icon: <SiGit /> },
        { name: "GitHub", icon: <FaGithub /> }
      ]
    }
  ];

  return (
    
    <div className="stack-section">
      <div className="stack-title-wrapper">
        <h2 className="stack-title">Tech Stack</h2>
      </div>

      
      <h3 className="stack-subtitle">Software</h3>
      <br></br>

      <div className="stack-language-grid">
        {stack.map((lang, i) => (
          <div key={i} className="lang-card">
            <div className="lang-header">
              <div className="lang-icon">{lang.icon}</div>
              <div>
                <h3 className="lang-name">{lang.language}</h3>
                <p className="lang-type">{lang.type}</p>
              </div>
            </div>

            {lang.items.length > 0 && (
              <div className="lang-items">
                {lang.items.map((item, j) => (
                  <div
                    key={j}
                    className="lang-item"
                    style={{ animationDelay: `${j * 70}ms` }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 className="stack-subtitle hardware-title">Hardware</h3>

<div className="stack-language-grid">

  {/* Languages */}
  <div className="lang-card">
    <div className="lang-header">
      <MdMemory size={28} />
      <div>
        <h3>Languages</h3>
        <p>Embedded Development</p>
      </div>
    </div>

    <div className="lang-items">
      <div className="lang-item">C</div>
      <div className="lang-item">C++</div>
    </div>
  </div>

  {/* Embedded Platforms */}
  <div className="lang-card">
    <div className="lang-header">
      <FaMicrochip size={28} />
      <div>
        <h3>Embedded Platforms</h3>
        <p>Microcontrollers</p>
      </div>
    </div>

    <div className="lang-items">
      <div className="lang-item">
        <SiArduino /> Arduino
      </div>
      <div className="lang-item">ESP (ESP32 / ESP8266)</div>
      <div className="lang-item">Sensors Integration</div>
    </div>
  </div>

  {/* Tools */}
  <div className="lang-card">
    <div className="lang-header">
      <FaTools size={28} />
      <div>
        <h3>Simulation & Tools</h3>
        <p>Design & Testing</p>
      </div>
    </div>

    <div className="lang-items">
      <div className="lang-item">Logisim</div>
      <div className="lang-item">Tinkercad</div>
    </div>
  </div>

  {/* Concepts */}
  <div className="lang-card">
    <div className="lang-header">
      <GiCircuitry size={28} />
      <div>
        <h3>Concepts</h3>
        <p>Core Knowledge</p>
      </div>
    </div>

    <div className="lang-items">
      <div className="lang-item">
        <TbMathFunction /> Signal Processing
      </div>
      <div className="lang-item">Basic Circuit Design</div>
    </div>
  </div>

</div>


    </div>
  );
}

export default Stack;
