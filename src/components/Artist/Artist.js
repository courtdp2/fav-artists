import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Header from './Header/Header';
import AlbumList from '../AlbumList/AlbumList';

const REQ_URL = `http://localhost:3004/artists`;
const particlesOptions = {
    particles: {
        number: {
            value: 70,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}

class Artist extends Component {
    state = {
        artist: ''
    }
    componentDidMount() {
        fetch(`${REQ_URL}/${this.props.match.params.artistid}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    artist: json
                })
            })
    }
    render() {
        return (
            <div>
                <Particles
                    className='particles'
                    params={particlesOptions} />
                <Header/>
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{ background: `url('/images/covers/${this.state.artist.cover}.jpg') no-repeat` }}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio_text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums} />
                </div>
            </div>
        )
    }
}

export default Artist