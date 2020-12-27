import react from 'react-app';
import './Playlist.css'

class Playlist extends React.Component {
    render() {
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            <TrackList />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    }
}

export default Playlist;