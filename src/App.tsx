import { useState, useEffect } from 'react'

import Result from './components/Result'

import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";


function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [useDark, setUseDark] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if (useDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [useDark]);


  return (
    <>
      <IoSunny size="32" className={`theme_selector ${useDark ? 'fade-in' : 'fade-out'}`} onClick={() => setUseDark(false)}/>
      <FaMoon size="32" className={`theme_selector ${useDark ? 'fade-out' : 'fade-in'}`} onClick={() => setUseDark(true)}/>

      <div className="app">
        <h1>URL Shortener</h1>
        <div className="input_container">
          <input
            type="text"
            className="input"
            placeholder="Enter URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="submit_button"
            onClick={() => setResult(url)}
          >
            Submit
          </button>
        </div>
        {result && <Result url={result} />}
      </div>
    </>
  )
}

export default App
