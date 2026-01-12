import { useEffect, useState } from "react";
//new comment
function App() {
  const [chapters, setChapters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        "x-rapidapi-key": "d0143d9e77msh241bfabb0a437b7p1d0a47jsn90e16b49add0" // your key here
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setChapters(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📖 Bhagavad Gita Chapters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {chapters.map((ch) => (
            <li key={ch.id}>
              <strong>{ch.chapter_number}. {ch.name_translated}</strong> – 
              {ch.verses_count} verses
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
