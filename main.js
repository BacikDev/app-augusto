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
        path: 'assets/musica/6.mp3',
        displayName: 'CON TU AMOR <br>PUDE LOGRAR',
        cover: 'assets/obras/4.jpg',
        artist: 'Gómez Patricia',
        context: 'Esta obra refleja una historia muy especial en mi vida. Encontré motivación y fuerza gracias a una pequeña gatita que llegó en un momento en que necesitaba un motivo para seguir adelante. Ella fue mi musa de inspiración; con su amor y compañía, pude cerrar materias pendientes y superar obstáculos que parecían insuperables. <br> Pero un día, ella se fue y aún no vuelve. La angustia y la incertidumbre que eso me causó quedaron plasmadas en esta obra, que dediqué a esa pequeña amiga que tanto me dio. La sigo esperando, con la esperanza de que algún día regrese.  <br> Esta pieza es un homenaje a ese amor incondicional y a la fe en que, con esperanza y cariño, todo es posible. Ella me enseñó que, incluso en la pérdida, el amor deja una huella que nunca se olvida.',
    },
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
        displayName: 'ECOS DEL AHORA',
        cover: 'assets/obras/3.jpg',
        artist: 'Marcato Natalia',
        context: 'Esta obra nace de una experiencia muy personal y emotiva. La creación del sombrero fue una forma que encontré para expresar mi apoyo y cariño hacia mi amiga Rita, quien en ese momento estaba atravesando un tratamiento de quimioterapia. Inspirada por su historia, decidí bordar un sombrero estilo sashiko, un bordado japonés que simboliza la paciencia y la perseverancia, y que siento que refleja también las etapas de la vida y la lucha que ella enfrentaba. <br>La idea empezó durante los encuentros virtuales que tuvimos en medio de la pandemia. En uno de esos momentos, pensé en hacerle un regalo que fuera un acto de amor y esperanza. En ese proceso, tuve que decidir el color, el patrón de bordado y la forma del sombrero, y aunque a veces la procrastinación me jugaba en contra, el pensamiento de sorprenderla con ese presente me mantenía motivada. Siempre quise contarle, pero la falta de oportunidad o los problemas de sonido en las charlas me lo impedían. <br>Hoy, con Rita ya en paz, siento que esta obra adquiere todavía más significado. La puntada del sashiko, que va hacia adelante sin detenerse, me recuerda que la vida, con sus altibajos, sigue avanzando. Aunque muchas veces pensaba que quizás en verano ella podría lucir el sombrero o viajar, ahora entiendo que la vida sigue su curso y que cada puntada representa esa idea de seguir adelante, de aceptar lo que no podemos cambiar pero que podemos honrar en cada acto, en cada esfuerzo. <br>Este sombrero, para mí, es más que un objeto; es un acto de amor, memoria y resistencia, y una forma de decir que, incluso en los momentos más difíciles, la vida sigue adelante con sus propias puntadas hacia adelante. Es también una manera de mantener vivo su recuerdo y su espíritu en cada hilo bordado.',
    },
    {
        path: 'assets/musica/4.mp3',
        displayName: 'MUSŌ',
        cover: 'assets/obras/4.jpg',
        artist: 'Marianela Esvel',
        context: 'SE TRADUCE DIRECTAMENTE A UN “SUEÑO” o “ FANTASÍA”  SU SIGNIFICADO , A MENUDO IMPLICA ASPIRACIONES, OBJETIVOS O LA VISIÓN DE UN FUTURO DESEADO. <br> <br> En esta obra, fusiono los sentidos, la emoción y las culturas, buscando transmitir una experiencia que invita a recorrer un camino lleno de significado. Predomina en ella la madurez, la elegancia, la simplicidad y una actitud que reflejan mi propia visión y sensibilidad. A través de ella, paso por diferentes estados: la curiosidad, la pasión, el romanticismo y la seriedad, creando un balance que atrae abundancia y prosperidad. <br>El tono claro de la base se realizó con un tinte natural extraído de la cáscara del chañar, una planta tradicionalmente utilizada para aliviar afecciones respiratorias. Elegí este pigmento por su tonalidad, que aporta pureza y serenidad, complementándose con el contraste del color del vino, en un textil orgánico teñido de forma natural. Esta obra representa un diálogo entre la tradición y la creatividad, buscando transmitir una sensación de armonía y plenitud.',
    },
    {
        path: 'assets/musica/5.mp3',
        displayName: 'TRANSMUTACIÓN <br>DE LAS REGLAS',
        cover: 'assets/obras/4.jpg',
        artist: 'María Centurion',
        context: 'Esta obra es una expresión de transformación y rebeldía frente a las reglas y patrones establecidos. La presento sobre un vestido clásico de noche en color gris, que simboliza esas reglas viejas y obsoletas que muchas veces ya no sirven o nos limitan. Los detalles en colores variados, que están en forma de apliques, representan símbolos de rebeldía y resistencia ante esas normas. <br> La tela deshilachada y los colores vibrantes reflejan el deseo de cambio. El violeta simboliza ese anhelo de transformar, de ir más allá de lo establecido. El celeste expresa la seguridad que siento al asimilar ideas nuevas y diferentes. Y el verde, la esperanza en seguir avanzando y en lograr una verdadera transformación.  <br>Esta obra es, además, una pieza de comunicación sobre la costura y las telas, que contienen un código de uso y significado, asociado a patrones familiares, conductas y roles sociales. Con ella, he querido rebeldemente, pero con elegancia, desafiar esas ideas predefinidas y mostrar que podemos reinventarnos y transformar esas reglas que aprendimos desde siempre.',
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
    title.innerHTML = song.displayName;
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