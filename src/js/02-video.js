import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle( (data) => {
        localStorage.setItem("videoplayer-current-time", data.seconds)
    
}, 1000));

if (localStorage.getItem("videoplayer-current-time")) {
   player.setCurrentTime(Number(localStorage.getItem("videoplayer-current-time"))).then( () => {}) 
}

