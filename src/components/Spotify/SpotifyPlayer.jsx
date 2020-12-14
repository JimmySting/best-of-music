import React, { Component } from 'react'

// Size presets, defined by Spotify
const sizePresets = {
  large: {
    width: 300,
    height: 380,
  },
  compact: {
    width: 300,
    height: 80,
  },
}

class SpotifyPlayer extends Component {
  render() {
    const { uri } = this.props
    let { size } = this.props

    if (typeof size === `string`) {
      size = sizePresets[size]
    }

    return (
      <div className="spotify-player">
        <iframe
          title="Spotify"
          src={uri}
          width="300"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    )
  }
}

export default SpotifyPlayer
