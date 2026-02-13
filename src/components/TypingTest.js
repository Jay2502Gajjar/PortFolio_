import { useEffect, useState } from "react";

const codeLines = [
  `for(int i = 0; i < n; i++) {
    if(arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  double avg = (double)sum / n;
  cout << max << " " << avg;`,

  `while(left <= right) {
    int mid = left + (right - left) / 2;
    if(arr[mid] == target) return mid;
    else if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;`,

  `vector<int> v(n);
  for(int i = 0; i < n; i++) {
    cin >> v[i];
  }
  sort(v.begin(), v.end());
  for(int x : v) cout << x << " ";`
];


const wordLines = [
  "Consistency is the result of small actions repeated daily even when motivation is low and distractions are high which is why great developers focus on habits instead of inspiration",

  "Typing speed improves over time when accuracy is prioritized because correcting mistakes builds stronger muscle memory than rushing through text",

  "Software engineering is less about knowing every tool and more about understanding how to break down complex problems into simple logical steps",

  "Most growth happens when you are slightly uncomfortable which is why challenging yourself with short intense tasks often leads to faster improvement"
];


function TypingTest() {
  const [active, setActive] = useState(false);
  const [mode, setMode] = useState("code");
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [time, setTime] = useState(12);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!active) return;

    const pool = mode === "code" ? codeLines : wordLines;
    setText(pool[Math.floor(Math.random() * pool.length)]);
    setInput("");
    setTime(12);
    setStarted(false);
    setFinished(false);
  }, [active, mode]);

  useEffect(() => {
    if (!started || finished) return;

    if (time === 0) {
      setFinished(true);
      return;
    }

    const timer = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time, started, finished]);

  function handleChange(e) {
    if (!started) setStarted(true);
    if (finished) return;

    setInput(e.target.value);
  }

  function calculateResults() {
    let correct = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === text[i]) correct++;
    }

    const wpm = Math.round((correct / 5) * (60 / 12));
    const accuracy = input.length
      ? Math.round((correct / input.length) * 100)
      : 0;

    return { wpm, accuracy };
  }

  const result = calculateResults();

  return (
    <>
      {/* CARD */}
      <div className="pong-wrapper" onClick={() => setActive(true)}>
        <div className="pong-icon">⌨️</div>
        <p className="pong-label">Typing Speed</p>
      </div>

      {/* OVERLAY */}
      {active && (
        <div className="pong-overlay">
          <button className="pong-close" onClick={() => setActive(false)}>
            ✕
          </button>

          <div className="typing-box">
            <div className="typing-header">
              <button
                className={mode === "code" ? "active" : ""}
                onClick={() => setMode("code")}
              >
                Code
              </button>
              <button
                className={mode === "words" ? "active" : ""}
                onClick={() => setMode("words")}
              >
                Words
              </button>
              <span className="timer">{time}s</span>
            </div>

            {!finished ? (
              <>
                <div className="typing-text">{text}</div>
                <input
                  className="typing-input"
                  value={input}
                  onChange={handleChange}
                  autoFocus
                />
              </>
            ) : (
              <div className="typing-result">
                <h3>{result.wpm} WPM</h3>
                <p>{result.accuracy}% accuracy</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default TypingTest;
