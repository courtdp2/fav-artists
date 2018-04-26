import React, { Component } from 'react';
import Banner from '../Banner/Banner';
import ArtistList from '../Artist/ArtistList/ArtistList';
import Particles from 'react-particles-js';

const URL_ARTISTS = 'http://localhost:3004/artists';

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


class Home extends Component {
    state = {
        artists: '',
    }

    componentDidMount() {
        fetch(URL_ARTISTS, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    artists: json
                })
            })
    }

    render() {
        return (
            <div>
                <Particles
                    className='particles'
                    params={particlesOptions} />
                <Banner />
                <ArtistList allArtists={this.state.artists} />
            </div>
        )
    }
}


export default Home