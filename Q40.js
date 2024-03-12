function make_album(artist, title, numTracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (numTracks) {
        album.tracks = numTracks;
    }
    return album;
}
var album1 = make_album('Sade', 'Diamond Life');
console.log(album1);
var album2 = make_album('Rihanna', 'Anti', 13);
console.log(album2);
var album3 = make_album('Zedd', 'True colours');
console.log(album3);
