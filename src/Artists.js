import { Card, Button,CardColumns  } from 'react-bootstrap';

const Artists = ({ showArtists,artists,handleShowAlbums}) => (
  <CardColumns>
      {showArtists ? artists.map(artist => (
          <Card key={artist.artistId} className="text-center">
            <Card.Body>
              <Card.Title>{artist.artistName}</Card.Title>
              <Card.Text>
                {artist.primaryGenreName}
              </Card.Text>
              <Button onClick={() => handleShowAlbums(artist.artistId)} variant="primary">Show Albums</Button>
            </Card.Body>
        </Card>
      )) : ''}
  </CardColumns>
);

export default Artists;