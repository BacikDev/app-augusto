const image = document.getElementById('cover'),
    title = document.getElementById('music-title'), 
    title2 = document.getElementById('music-title2'), 
    artist = document.getElementById('music-artist'),
    currentTimeEl = document.getElementById('current-time'),
    durationEl = document.getElementById('duration'),
    progress = document.getElementById('progress'),
    playerProgress = document.getElementById('player-progress'),
    prevBtn = document.getElementById('prev'),
    nextBtn = document.getElementById('next'),
    playBtn = document.getElementById('play'),
    background = document.getElementById('bg-img'),
    textObra = document.getElementById('text-obra');

const music = new Audio();

const song = [
    {
        path: 'assets/musica/1.mp3',
        displayName: 'El mate como talisman',
        displayName2: '(co) Nectar Divino',
        cover: 'assets/obras/1.jpg',
        artist: 'Lourdes Paola Vega',
        context: '¿Alguna vez te preguntaste que es lo que realmente te despierta cuando te levantas a la mañana? Yo si, y ademas busco resignificar el primer mate del día para soportar la humanidad. <br><br>Salirme de la rutina y adentrarme en un estado de conciencia para reconectar con mi ser íntimo a través de todos mis sentidos: desde ver y sentir los rayitos del sol de invierno, oler los componentes de la yerba y sus hierbas, tocar las frutas de estación y saborearla con cada sorbo de este elixir que nutre mi alma ; intencionar mi sahumerio y deleitarme con alguna canción que me invite a simplemente Contemplar. <br> Che, ¿y si nos apropiamos de este humilde acto como hábito? (contemplar). Un tipo de Alquimia que transforma nuestro estilo de vida en mágica,  aportando vitalidad y atrayendo Abundancia a nuestra cotidianeidad. <br><br>Y vos... ¿que ritual elegis para conectar con el Amanecer de un nuevo día?',
    },
    {
        path: 'assets/musica/2.mp3',
        displayName: 'Inocencia Interrumpida',
        cover: 'assets/obras/2.jpg',
        artist: 'Ana María Figueroa',
        context: 'Esta pieza es un grito de alerta, un llamado a la reflexión y a la acción, a través de ella quiero destacar la fragilidad de los niños, seres inocentes y puros, que merecen nuestra protección y cuidado. <br>La infancia es un periodo de descubrimiento y crecimiento, pero también un momento de gran vulnerabilidad. <br>INOCENCIA INTERRUMPIDA es un viaje visual  que nos lleva, de alguna manera a ver como la negligencia y la maldad los hacen víctimas, robando e interrumpiendo su inocencia, dejando huellas y cicatrices que duran toda sus vidas. <br>Quiero utilizar mi voz y mi arte para incitarte a “ VOS” a proteger y resguardar con celo, pasión y responsabilidad ese tesoro único e irrepetible que es la inocencia de nuestros niños. <br>“Los niños son como el cemento fresco…todo lo que cae sobre ellos deja una huella para siempre”',
    },
    {
        path: 'assets/musica/3.mp3',
        displayName: 'Nombre de la obra 3',
        cover: 'assets/obras/3.jpg',
        artist: 'Nombre alumn@ 3',
        context: 'Contexto de la obra 3 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle.',
    },
    {
        path: 'assets/musica/4.mp3',
        displayName: 'Nombre de la obra 4',
        cover: 'assets/obras/4.jpg',
        artist: 'Nombre alumn@ 4',
        context: 'Contexto de la obra 4 simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galle.',
    },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay(){
    if(isPlaying){
        pauseMusic()
    }else{
        playMusic()
    }
}

function playMusic(){
    isPlaying = true;

    playBtn.classList.replace('fa-play', 'fa-pause');

    playBtn.setAttribute('title', 'Pause');
    music.play();
}

function pauseMusic(){
    isPlaying = false;

    playBtn.classList.replace('fa-pause', 'fa-play');

    playBtn.setAttribute('title', 'Play');
    music.pause();
}

function loadMusic(song){
    music.src = song.path;
    title.textContent = song.displayName;
    title2.textContent = song.displayName2;
    artist.textContent = song.artist;
    image.src = song.cover;
    background.src = song.cover;
    textObra.innerHTML = song.context;
}

function changeMusic(direction){
    musicIndex = (musicIndex + direction + song.length) % song.length;
    loadMusic(song[musicIndex]);
    playMusic();
}

function updateProgressBar(){
    const {duration, currentTime} = music;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    const formatTime = (time) =>{
        if(isNaN(time)) return '00';
        return String(Math.floor(time)).padStart(2, '0');
    };
    durationEl.textContent = `${formatTime( duration / 60)}: ${formatTime(duration % 60)}`;
    currentTimeEl.textContent = `${formatTime(currentTime / 60)}: ${formatTime(currentTime % 60)}`;


}

function setProgressBar(e){
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', ()=> changeMusic(-1));
nextBtn.addEventListener('click', ()=> changeMusic(1));
music.addEventListener('ended', ()=> changeMusic(1));
music.addEventListener('timeupdate', updateProgressBar);
playerProgress.addEventListener('click', setProgressBar);

loadMusic(song[musicIndex]);