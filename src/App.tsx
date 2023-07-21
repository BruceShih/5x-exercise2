import { useState } from 'react'
import TagInput from "./components/TagInput";
import './App.css'

function App() {
  const [tags, setTags] = useState(["React", "JavaScript"]);

  return (
    <>
      <div className="App">
        <h2>{tags.toString()}</h2>
        <TagInput tags={tags} onChange={setTags} />
        <br />
        <button
          onClick={() => {
            setTags(["1", "2", "3"]);
          }}
        >
          setNewTags
        </button>
      </div>
    </>
  )
}

export default App
