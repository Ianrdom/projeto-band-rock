// export default class PlayerOptions {
//   pausaAudio(musica) {
//     if (musica.preview === this.option.src) {
//       const player = document.getElementsByClassName("audio__player-play")[0];
//       let clickEvent = new Event("click");
//       player.dispatchEvent(clickEvent);
//     }
//     this.musicas.find((m) => m === musica).isPlaying = false;
//   }
//   iniciaAudio(musica) {
//     if (musica.preview === this.option.src) {
//       const player = document.getElementsByClassName("audio__player-play")[0];
//       let clickEvent = new Event("click");
//       player.dispatchEvent(clickEvent);
//     }
//     this.displayPlayer = true;
//     this.musicas.forEach((m) => (m.isPlaying = false));
//     this.musicas.find((m) => m === musica).isPlaying = true;
//     this.option.src = `${musica.preview}`;
//     this.option.title = `${musica.title}`;
//     this.option.coverImage = `${musica.album.cover_big}`;
//     this.option.progressBarColor = "rgb(167, 3, 3)";
//     this.option.indicatorColor = "rgb(167, 3, 3)";
//     console.log(musica.isPlaying);
//   }
// }
