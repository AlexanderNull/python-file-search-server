import React from 'react';
import './App.css';

const IP_ADDRESS = '192.168.1.18' // TODO: fill this in through config
const PORT = 5000
const ROOT_URL = `http://${IP_ADDRESS}:${PORT}`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchString: '', results: []}

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({searchString: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    fetch(`${ROOT_URL}/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text: this.state.searchString })
    })
    .then(response => response.json())
    .then(({results}) => {
      console.log('found this', results);
      this.setState({ results });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <label>
              Search for artist, album, song etc!
              <input name="text-search" type="text" value={this.state.searchString} onChange={this.handleInput} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <main>
          { this.state.results.length > 0 &&
            (
              <div id="results-table">
                {this.state.results.map(r => <TableRow artist={r.artist} album={r.album} song={r.song} />)}
              </div>
            )
          }
        </main>
        </header>
      </div>
    );
  }
}

function TableRow(props) {
  const {
    artist,
    album,
    song,
  } = props;
  return (
    <div className="results-row">
      <div className="row-head">
        <span>{artist}</span>
        <span>{song}</span>
      </div>
      <div className="row-song">
        <span>{album}</span>
      </div>
    </div>
  )
}

export default App;
