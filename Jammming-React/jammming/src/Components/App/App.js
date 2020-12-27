import react from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
            <SearchResaults />
            <PlayList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
