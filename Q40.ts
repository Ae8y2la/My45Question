interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, numTracks?: number): Album {
    const album: Album = {
      artist,
      title,
    };
  
    if (numTracks) {
      album.tracks = numTracks;
    }
  
    return album;
  }
  
  const album1: Album = make_album('Sade', 'Diamond Life');
  console.log(album1);
  
  const album2: Album = make_album('Rihanna', 'Anti', 13);
  console.log(album2);
  
  const album3: Album = make_album('Zedd', 'True colours');
  console.log(album3);