import SearchBar from './SaarchBar';
import Artists from './Artists';
import Albums from './Albums';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const axios = require('axios').default;

function App() {
  const [artists,setArtists] = useState([]);
  const [albums,setAlbums] = useState([]);
  const [terms, setTerms] = useState('');
  const [showArtists, setshowArtists] = useState(true);
  const [showAlbums, setshowAlbums] = useState(false);

  function getArtists(term) {
    if (!term) return;
    axios.get('https://itunes.apple.com/search?term='+term.toLowerCase()+'&media=music&entity=musicArtist&limit=200')
    .then(res => 
      {    
      setArtists(res.data.results);
      setshowArtists(true);
      setshowAlbums(false);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
  };

  function getAlbums(artistId) {
    if (!artistId) return;
    axios.get('http://itunes.apple.com/lookup?id='+artistId+'&media=music&entity=album&limit=200')
    .then(res => 
      {    
        setAlbums(res.data.results);
        setshowAlbums(true);
        setshowArtists(false);
    })
    .catch(function (error) {
      console.log("Error: ", error);
    });
  };

  function handleChange(event) {
    setTerms(event.target.value);
  }

  function handleSubmit(event) {
    getArtists(terms);
  }

  function handleShowAlbums(artistId) {
    if(!artistId) return;
    getAlbums(artistId);
  }

  function handleBack(event) {
    setshowArtists(true);
    setshowAlbums(false);
  }
  
  return (
      <div>
          <SearchBar
              handleChange={handleChange}
              terms={terms}
              handleSubmit={handleSubmit}
          />
          <Artists 
          showArtists={showArtists}
          artists={artists} 
          handleShowAlbums={handleShowAlbums}
          />
          <Albums 
          showAlbums={showAlbums}
          albums={albums}
          handleBack={handleBack} 
          />

      </div>
  );
}

export default App;
