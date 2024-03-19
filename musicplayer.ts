class MusicPlayer {
    playlists: Playlist[];

    constructor() {
        this.playlists = [];
    }

    createPlaylist(name: string, genre: string): void {
        const playlist = new Playlist(name, genre);
        this.playlists.push(playlist);
    }

    addAudioToPlaylist(audio: AudioFile, playlistName: string): void {
        const playlist = this.playlists.find(p => p.name === playlistName);
        if (playlist) {
            playlist.addAudio(audio);
        } else {
            console.log("Playlist not found");
        }
    }

    searchAudio(query: string): AudioFile[] {
        const results: AudioFile[] = [];
        for (const playlist of this.playlists) {
            results.push(...playlist.searchAudio(query));
        }
        return results;
    }

    searchPlaylist(query: string): Playlist[] {
        return this.playlists.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
    }

    calculateAverageRating(): number {
        let totalRatings = 0;
        let totalItems = 0;
        for (const playlist of this.playlists) {
            totalRatings += playlist.calculateAverageRating();
            totalItems++;
        }
        return totalRatings / totalItems;
    }
}

class Playlist {
    name: string;
    genre: string;
    audios: AudioFile[];

    constructor(name: string, genre: string) {
        this.name = name;
        this.genre = genre;
        this.audios = [];
    }

    addAudio(audio: AudioFile): void {
        this.audios.push(audio);
    }

    searchAudio(query: string): AudioFile[] {
        return this.audios.filter(audio => audio.name.toLowerCase().includes(query.toLowerCase()));
    }

    calculateAverageRating(): number {
        let totalRatings = 0;
        for (const audio of this.audios) {
            totalRatings += audio.rating;
        }
        return totalRatings / this.audios.length;
    }
}

class AudioFile {
    name: string;
    url: string;
    rating: number;

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
        this.rating = Math.floor(Math.random() * 5) + 1; 
    }
}

// Example usage:

const player = new MusicPlayer();
player.createPlaylist("Rock Playlist", "Rock");
player.createPlaylist("Jazz Playlist", "Jazz");

const audio1 = new AudioFile("Song 1", "http://example.com/song1.mp3");
const audio2 = new AudioFile("Song 2", "http://example.com/song2.mp3");

player.addAudioToPlaylist(audio1, "Rock Playlist");
player.addAudioToPlaylist(audio2, "Rock Playlist");

const searchResults = player.searchAudio("Song");
console.log("Search Results:", searchResults);

const averageRating = player.calculateAverageRating();
console.log("Average Rating:", averageRating);
