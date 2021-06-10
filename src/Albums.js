import { Button,CardColumns  } from 'react-bootstrap';
import './App.css';

const Albums = ({ showAlbums,albums,handleBack}) => (

  <CardColumns>
      { showAlbums ? albums.sort(function(a,b){
                return new Date(b.releaseDate) - new Date(a.releaseDate);
                }).map(album => (
                  album.wrapperType === "collection" ?
                    <div key={album.collectionId} className="card mb-3" style={{width: '500px'}}>
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img 
                            src={album.artworkUrl100}
                          />
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{album.collectionName}</h5>
                            <p className="card-text">
                            {album.artistName}
                            </p>
                            <p className="card-text">
                            {album.primaryGenreName}
                            </p>
                            <p className="card-text">
                            {new Date(album.releaseDate).getFullYear()}
                            </p>
                            <Button onClick={() =>handleBack()} variant="primary">Go Back</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  : ''
          )) : ''}
  </CardColumns>
);

export default Albums;