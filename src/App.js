import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import emojis from "./assets/emojiList.json";
import Emoji from "./components/Emoji";

function App() {
  const [search, setSearch] = useState("");
  const tab = [];
  for (let i = 0; i < emojis.length; i++) {
    if (emojis[i].keywords.indexOf(search.toLocaleLowerCase()) !== -1) {
      tab.push(
        <Emoji
          key={emojis[i].title}
          title={emojis[i].title}
          symbol={emojis[i].symbol}
        />
      );
    }
  }
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      {tab}
    </div>
  );
}

export default App;
