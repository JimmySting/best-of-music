import React from 'react'

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

const SpotifyPlayer = ({ uri, size }) => {
  // Default to compact if not provided
  let width = sizePresets['compact'].width
  let height = sizePresets['compact'].height
  if (typeof size === `string`) {
    width = sizePresets[size].width
    height = sizePresets[size].height
  }

  return (
    <div className="spotify-player">
      <iframe
        title="Spotify"
        src={uri}
        width={width}
        height={height}
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}

export default SpotifyPlayer
