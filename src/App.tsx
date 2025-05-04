import { useState } from 'react'

import Result from './components/Result'

function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("")

  return (
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
  )
}

export default App
