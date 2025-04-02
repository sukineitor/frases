// Quotes organized by categories - Muchas más frases añadidas
const quotes = {
    motivation: [
        {
            text: "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
            author: "Winston Churchill"
        },
        {
            text: "No cuentes los días, haz que los días cuenten.",
            author: "Muhammad Ali"
        },
        {
            text: "El único modo de hacer un gran trabajo es amar lo que haces.",
            author: "Steve Jobs"
        },
        {
            text: "Cree que puedes y estás a mitad de camino.",
            author: "Theodore Roosevelt"
        },
        {
            text: "La motivación es lo que te pone en marcha. El hábito es lo que hace que sigas.",
            author: "Jim Ryun"
        },
        {
            text: "Si lo puedes soñar, lo puedes hacer.",
            author: "Walt Disney"
        },
        {
            text: "La mejor manera de predecir el futuro es creándolo.",
            author: "Peter Drucker"
        },
        {
            text: "Nunca es demasiado tarde para ser lo que podrías haber sido.",
            author: "George Eliot"
        },
        {
            text: "El secreto para salir adelante es comenzar.",
            author: "Mark Twain"
        },
        {
            text: "La perseverancia es caer 19 veces y levantarse 20.",
            author: "Julie Andrews"
        },
        {
            text: "La única forma de hacer un gran trabajo es amar lo que haces.",
            author: "Steve Jobs"
        },
        {
            text: "No importa lo lento que vayas mientras no te detengas.",
            author: "Confucio"
        },
        {
            text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            author: "Robert Collier"
        },
        {
            text: "La disciplina es el puente entre metas y logros.",
            author: "Jim Rohn"
        },
        {
            text: "La mejor venganza es el éxito masivo.",
            author: "Frank Sinatra"
        }
    ],
    success: [
        {
            text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            author: "Robert Collier"
        },
        {
            text: "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas.",
            author: "Jack Canfield"
        },
        {
            text: "El camino hacia el éxito y el camino hacia el fracaso son casi exactamente iguales.",
            author: "Colin R. Davis"
        },
        {
            text: "El éxito no se mide por lo que logras, sino por los obstáculos que superas.",
            author: "Booker T. Washington"
        },
        {
            text: "El éxito es aprender a ir de fracaso en fracaso sin desesperarse.",
            author: "Winston Churchill"
        },
        {
            text: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito.",
            author: "Albert Schweitzer"
        },
        {
            text: "El éxito es la capacidad de ir de fracaso en fracaso sin perder el entusiasmo.",
            author: "Winston Churchill"
        },
        {
            text: "El éxito no consiste en no fallar nunca, sino en no rendirse nunca.",
            author: "Mia Hamm"
        },
        {
            text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
            author: "Robert Collier"
        },
        {
            text: "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
            author: "Winston Churchill"
        },
        {
            text: "El éxito es encontrar satisfacción en dar un poco más de lo que se recibe.",
            author: "Christopher Reeve"
        },
        {
            text: "El éxito es la realización progresiva de un ideal valioso.",
            author: "Earl Nightingale"
        },
        {
            text: "El éxito es simple. Haz lo correcto, de la manera correcta, en el momento correcto.",
            author: "Arnold H. Glasow"
        },
        {
            text: "El éxito no se trata de cuánto dinero ganas, sino de la diferencia que haces en la vida de las personas.",
            author: "Michelle Obama"
        },
        {
            text: "El éxito es amar lo que haces y poder dedicarte a ello.",
            author: "Maya Angelou"
        }
    ],
    happiness: [
        {
            text: "La felicidad no es algo hecho. Viene de tus propias acciones.",
            author: "Dalai Lama"
        },
        {
            text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
            author: "John Lennon"
        },
        {
            text: "La felicidad no es tener lo que deseas, sino desear lo que tienes.",
            author: "Sócrates"
        },
        {
            text: "La mejor manera de alegrarte es intentar alegrar a alguien más.",
            author: "Mark Twain"
        },
        {
            text: "La felicidad es cuando lo que piensas, lo que dices y lo que haces están en armonía.",
            author: "Mahatma Gandhi"
        },
        {
            text: "La felicidad no es algo prefabricado. Viene de tus propias acciones.",
            author: "Dalai Lama"
        },
        {
            text: "La felicidad es una dirección, no un lugar.",
            author: "Sydney J. Harris"
        },
        {
            text: "La felicidad es permitirte cometer errores pero no arrepentirte de ellos.",
            author: "Sophia Loren"
        },
        {
            text: "La felicidad es una elección, no una condición.",
            author: "Anónimo"
        },
        {
            text: "La felicidad es el significado y propósito de la vida, el objetivo y fin de la existencia humana.",
            author: "Aristóteles"
        },
        {
            text: "La felicidad no es tener lo que quieres, es querer lo que tienes.",
            author: "H. Jackson Brown Jr."
        },
        {
            text: "La felicidad es interior, no exterior; por lo tanto, no depende de lo que tenemos, sino de lo que somos.",
            author: "Henry Van Dyke"
        },
        {
            text: "La felicidad es como una mariposa: cuanto más la persigues, más te eludirá, pero si vuelves tu atención a otras cosas, vendrá y se posará suavemente en tu hombro.",
            author: "Henry David Thoreau"
        },
        {
            text: "La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente.",
            author: "Jim Rohn"
        },
        {
            text: "La felicidad es la experiencia de vivir cada minuto con amor, gracia y gratitud.",
            author: "Denis Waitley"
        }
    ],
    leadership: [
        {
            text: "Un líder es alguien que conoce el camino, va por el camino y muestra el camino.",
            author: "John C. Maxwell"
        },
        {
            text: "La innovación distingue entre un líder y un seguidor.",
            author: "Steve Jobs"
        },
        {
            text: "No sigas donde te lleva el camino. Ve donde no hay camino y deja huella.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "El liderazgo es la capacidad de transformar la visión en realidad.",
            author: "Warren Bennis"
        },
        {
            text: "Antes de ser un líder, el éxito se trata de crecer a ti mismo. Cuando te conviertes en líder, el éxito se trata de hacer crecer a otros.",
            author: "Jack Welch"
        },
        {
            text: "El liderazgo es la capacidad de traducir la visión en realidad.",
            author: "Warren Bennis"
        },
        {
            text: "Un buen líder lleva a las personas a donde quieren ir. Un gran líder las lleva a donde no necesariamente quieren ir, pero deben estar.",
            author: "Rosalynn Carter"
        },
        {
            text: "El liderazgo es hacer lo correcto cuando nadie está mirando.",
            author: "George Van Valkenburg"
        },
        {
            text: "El liderazgo es la capacidad de conseguir que las personas hagan lo que no quieren hacer y que les guste.",
            author: "Harry S. Truman"
        },
        {
            text: "El liderazgo es comunicar a las personas su valía y potencial de manera tan clara que lleguen a verlo en sí mismas.",
            author: "Stephen Covey"
        },
        {
            text: "El liderazgo es acción, no posición.",
            author: "Donald H. McGannon"
        },
        {
            text: "El liderazgo es la capacidad de elevar la visión de una persona a mayores alturas.",
            author: "Peter Drucker"
        },
        {
            text: "El liderazgo es el arte de conseguir que alguien haga algo que quieres que se haga porque quiere hacerlo.",
            author: "Dwight D. Eisenhower"
        },
        {
            text: "El liderazgo es la capacidad de transformar la visión en realidad.",
            author: "Warren Bennis"
        },
        {
            text: "El liderazgo es servir a los demás mientras se persigue un propósito mayor que uno mismo.",
            author: "Anónimo"
        }
    ],
    life: [
        {
            text: "La vida es 10% lo que nos sucede y 90% cómo reaccionamos a ello.",
            author: "Charles R. Swindoll"
        },
        {
            text: "El futuro pertenece a quienes creen en la belleza de sus sueños.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "Nunca es demasiado tarde para ser lo que podrías haber sido.",
            author: "George Eliot"
        },
        {
            text: "La mejor preparación para mañana es hacer lo mejor que puedas hoy.",
            author: "H. Jackson Brown Jr."
        },
        {
            text: "La vida es realmente simple, pero insistimos en hacerla complicada.",
            author: "Confucio"
        },
        {
            text: "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
            author: "John Lennon"
        },
        {
            text: "La vida es corta, y es tu deber vivirla plenamente.",
            author: "Wayne Dyer"
        },
        {
            text: "La vida es como montar en bicicleta. Para mantener el equilibrio, debes seguir moviéndote.",
            author: "Albert Einstein"
        },
        {
            text: "La vida es un viaje, no un destino.",
            author: "Ralph Waldo Emerson"
        },
        {
            text: "La vida es lo que haces de ella. Siempre lo ha sido, siempre lo será.",
            author: "Grandma Moses"
        },
        {
            text: "La vida es demasiado importante como para tomarla en serio.",
            author: "Oscar Wilde"
        },
        {
            text: "La vida es un eco. Lo que envías, regresa. Lo que siembras, cosechas. Lo que das, recibes.",
            author: "Zig Ziglar"
        },
        {
            text: "La vida es como una cámara. Enfócate en lo importante, captura los buenos momentos, desarrolla lo negativo y si algo no funciona, toma otra foto.",
            author: "Anónimo"
        },
        {
            text: "La vida no se trata de encontrarte a ti mismo, sino de crearte a ti mismo.",
            author: "George Bernard Shaw"
        },
        {
            text: "La vida es una sucesión de lecciones que deben ser vividas para ser entendidas.",
            author: "Ralph Waldo Emerson"
        }
    ],
    creativity: [
        {
            text: "La creatividad es la inteligencia divirtiéndose.",
            author: "Albert Einstein"
        },
        {
            text: "La creatividad implica romper con lo establecido para mirar las cosas de una manera diferente.",
            author: "Edward de Bono"
        },
        {
            text: "No puedes agotar la creatividad. Cuanto más la usas, más tienes.",
            author: "Maya Angelou"
        },
        {
            text: "La creatividad es contagiosa, pásala.",
            author: "Albert Einstein"
        },
        {
            text: "La creatividad requiere el coraje de desprenderse de las certezas.",
            author: "Erich Fromm"
        },
        {
            text: "La creatividad es ver lo que todos ven y pensar lo que nadie ha pensado.",
            author: "Albert Einstein"
        },
        {
            text: "La creatividad es la capacidad de introducir orden en la experiencia.",
            author: "Henry Miller"
        },
        {
            text: "La creatividad es simplemente conectar cosas.",
            author: "Steve Jobs"
        },
        {
            text: "La creatividad es permitirse cometer errores. El arte es saber cuáles mantener.",
            author: "Scott Adams"
        },
        {
            text: "La creatividad es la mayor rebelión que existe.",
            author: "Osho"
        },
        {
            text: "La creatividad es la inteligencia teniendo diversión.",
            author: "Albert Einstein"
        },
        {
            text: "La creatividad es pensar nuevas cosas. La innovación es hacer nuevas cosas.",
            author: "Theodore Levitt"
        },
        {
            text: "La creatividad es la capacidad de crear conexiones significativas entre conceptos aparentemente no relacionados.",
            author: "Charles Limb"
        },
        {
            text: "La creatividad es una droga a la que me he vuelto felizmente adicto.",
            author: "Cecil B. DeMille"
        },
        {
            text: "La creatividad es la capacidad de ver lo invisible, sentir lo intangible y lograr lo imposible.",
            author: "Anónimo"
        }
    ],
    courage: [
        {
            text: "El coraje no es la ausencia de miedo, sino el triunfo sobre él.",
            author: "Nelson Mandela"
        },
        {
            text: "El coraje es resistencia al miedo, dominio del miedo, no ausencia de miedo.",
            author: "Mark Twain"
        },
        {
            text: "El coraje es lo que se necesita para levantarse y hablar; el coraje también es lo que se necesita para sentarse y escuchar.",
            author: "Winston Churchill"
        },
        {
            text: "El coraje es el precio que la vida exige por la paz.",
            author: "Amelia Earhart"
        },
        {
            text: "El coraje es encontrar la fuerza para seguir adelante a pesar del miedo.",
            author: "Anónimo"
        },
        {
            text: "El coraje no siempre ruge. A veces, el coraje es la pequeña voz al final del día que dice: 'Intentaré de nuevo mañana'.",
            author: "Mary Anne Radmacher"
        },
        {
            text: "El coraje es saber lo que no hay que temer.",
            author: "Platón"
        },
        {
            text: "El coraje es la primera de las cualidades humanas porque garantiza todas las demás.",
            author: "Aristóteles"
        },
        {
            text: "El coraje es como un músculo. Se fortalece con el uso.",
            author: "Ruth Gordon"
        },
        {
            text: "El coraje es la escalera por la que suben todas las demás virtudes.",
            author: "Clare Boothe Luce"
        },
        {
            text: "El coraje es hacer lo que tienes miedo de hacer. No puede haber coraje a menos que estés asustado.",
            author: "Eddie Rickenbacker"
        },
        {
            text: "El coraje es el arte de tener miedo, sin que se note.",
            author: "Anónimo"
        },
        {
            text: "El coraje no es tener la fuerza para seguir; es seguir cuando no tienes fuerza.",
            author: "Theodore Roosevelt"
        },
        {
            text: "El coraje es lo que te permite superar el miedo. La valentía es lo que te permite seguir adelante.",
            author: "Anónimo"
        },
        {
            text: "El coraje es la virtud que garantiza todas las demás.",
            author: "Winston Churchill"
        }
    ],
    wisdom: [
        {
            text: "La sabiduría es saber lo que hay que hacer; la virtud es hacerlo.",
            author: "David Starr Jordan"
        },
        {
            text: "La sabiduría comienza en el asombro.",
            author: "Sócrates"
        },
        {
            text: "La sabiduría es la hija de la experiencia.",
            author: "Leonardo da Vinci"
        },
        {
            text: "La sabiduría no es un producto de la escolarización, sino del intento de toda la vida de adquirirla.",
            author: "Albert Einstein"
        },
        {
            text: "La sabiduría es conocer lo que se debe hacer; la virtud es hacerlo.",
            author: "David Starr Jordan"
        },
        {
            text: "La sabiduría es saber cuándo no se puede ser sabio.",
            author: "Paul Engle"
        },
        {
            text: "La sabiduría es la aplicación de conocimiento a la vida.",
            author: "M. Scott Peck"
        },
        {
            text: "La sabiduría es la recompensa que obtienes por una vida de escuchar cuando preferirías haber estado hablando.",
            author: "Doug Larson"
        },
        {
            text: "La sabiduría es saber qué hacer a continuación; la virtud es hacerlo.",
            author: "David Starr Jordan"
        },
        {
            text: "La sabiduría es la capacidad de aprender de los errores de los demás.",
            author: "Otto von Bismarck"
        },
        {
            text: "La sabiduría es conocer los límites de tu conocimiento.",
            author: "Sócrates"
        },
        {
            text: "La sabiduría es la riqueza de los sabios.",
            author: "Anónimo"
        },
        {
            text: "La sabiduría es el arte de vivir sabiamente.",
            author: "William De Witt Hyde"
        },
        {
            text: "La sabiduría es la capacidad de ver las cosas como realmente son.",
            author: "Vernon Howard"
        },
        {
            text: "La sabiduría es el poder de discernir y juzgar correctamente lo que es verdadero o correcto.",
            author: "Noah Webster"
        }
    ]
};

// Música por categoría (enlaces directos a MP3)
const music = {
    motivation: [
      { title: "Energía Motivacional", src: "https://www.bensound.com/bensound-music/bensound-energy.mp3" },
      { title: "Impulso Positivo", src: "https://www.bensound.com/bensound-music/bensound-happyrock.mp3" },
      { title: "Poder Interior", src: "https://www.bensound.com/bensound-music/bensound-inspire.mp3" }
    ],
    success: [
      { title: "Camino al Éxito", src: "https://www.bensound.com/bensound-music/bensound-goinghigher.mp3" },
      { title: "Triunfo", src: "https://cdn.pixabay.com/download/audio/2022/08/02/audio_884fe92c21.mp3" }
    ],
    happiness: [
      { title: "Alegría Pura", src: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3" },
      { title: "Sonrisas", src: "https://www.bensound.com/bensound-music/bensound-smile.mp3" }
    ],
    leadership: [
      { title: "Liderazgo Inspirador", src: "https://www.bensound.com/bensound-music/bensound-epic.mp3" },
      { title: "Visión de Futuro", src: "https://www.bensound.com/bensound-music/bensound-dubstep.mp3" }
    ],
    life: [
      { title: "Camino de Vida", src: "https://www.bensound.com/bensound-music/bensound-life.mp3" }
    ],
    creativity: [
      { title: "Inspiración Creativa", src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3" },
      { title: "Flujo Creativo", src: "https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3" }
    ],
    courage: [
      { title: "Valentía Interior", src: "https://www.bensound.com/bensound-music/bensound-epic.mp3" },
      { title: "Fuerza y Coraje", src: "https://www.bensound.com/bensound-music/bensound-evolution.mp3" }
    ],
    wisdom: [
      { title: "Sabiduría Ancestral", src: "https://www.bensound.com/bensound-music/bensound-tomorrow.mp3" },
      { title: "Reflexión Profunda", src: "https://www.bensound.com/bensound-music/bensound-slowmotion.mp3" }
    ]
};

// Crear una lista plana de todas las canciones para reproducción continua
let allMusic = [];
Object.values(music).forEach(categoryMusic => {
    allMusic = allMusic.concat(categoryMusic);
});

// Sonidos de efectos (enlaces directos a MP3)
const soundEffects = {
    newQuote: "https://freesound.org/data/previews/66/66717_931655-lq.mp3",
    favorite: "https://freesound.org/data/previews/50/50075_439717-lq.mp3",
    notification: "https://freesound.org/data/previews/82/82965_1022651-lq.mp3"
};

// Enlaces externos para redirecciones
const externalLinks = {
    downloadPage: "https://filthygracefulspinach.com/k4czsurww?key=0e37ae6e92b9ff506392a8a06aa4ad5b",
    afterThreeClicks: "https://filthygracefulspinach.com/c45kwkdv?key=c686587d40336fa94012c7482bfb7502"
};


// DOM Elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const categorySelect = document.getElementById('category');
const newQuoteButton = document.getElementById('new-quote');
const favoriteButton = document.getElementById('favorite');
const downloadButton = document.getElementById('download');
const twitterButton = document.getElementById('twitter');
const facebookButton = document.getElementById('facebook');
const whatsappButton = document.getElementById('whatsapp');
const pinterestButton = document.getElementById('pinterest');
const favoritesListElement = document.getElementById('favorites-list');
const clearFavoritesButton = document.getElementById('clear-favorites');
const themeSwitch = document.getElementById('theme-switch');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notification-text');
const soundButton = document.getElementById('sound-button');
const backgroundMusic = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause');
const prevTrackButton = document.getElementById('prev-track');
const nextTrackButton = document.getElementById('next-track');
const volumeSlider = document.getElementById('volume-slider');
const progressBar = document.getElementById('progress-bar');
const musicTitle = document.getElementById('music-title');
const musicCategory = document.getElementById('music-category');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const showFavoritesBtn = document.getElementById('show-favorites-btn');
const favoritesModal = document.getElementById('favorites-modal');
const closeFavoritesButton = document.getElementById('close-favorites');
const shuffleButton = document.getElementById('shuffle');
const repeatButton = document.getElementById('repeat');

// Current state tracking
let currentQuote = null;
let currentCategory = 'all';
let currentMusicIndex = 0;
let isMuted = false;
let isPlaying = false;
let newQuoteClickCount = 0;
let isShuffleMode = false;
let isRepeatMode = false;
let musicQueue = [...allMusic]; // Copia de todas las canciones para reproducción

// Declare particlesJS and html2canvas
let particlesJS;
let html2canvas;

// Initialize the app
function initApp() {
    // Set up particles.js
    setupParticles();
    
    // Load theme preference
    loadThemePreference();
    
    // Load favorites from localStorage
    loadFavorites();
    
    // Set up audio
    setupAudio();
    
    // Display initial quote
    displayNewQuote();
    
    // Set up event listeners
    setupEventListeners();
    
    // Show welcome notification
    showNotification('¡Bienvenido al Generador de Frases Inspiradoras!');
    
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize modals
    initializeModals();
}

// Set up particles.js background
function setupParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6a11cb'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#a29bfe',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    } else {
        console.warn('particlesJS is not defined. Make sure the particles.js library is included.');
    }
}

// Trigger particle effect
function triggerParticleEffect() {
    if (typeof particlesJS !== 'undefined') {
        // Cambiar temporalmente la configuración de partículas para un efecto visual
        particlesJS('particles-js', {
            particles: {
                number: { value: 160, density: { enable: true, value_area: 800 } },
                color: { value: '#6a11cb' },
                shape: { type: 'circle' },
                opacity: { value: 1, random: true, anim: { enable: true, speed: 1, opacity_min: 0, sync: false } },
                size: { value: 3, random: true, anim: { enable: false } },
                line_linked: { enable: false },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: false },
                    onclick: { enable: false },
                    resize: true
                }
            },
            retina_detect: true
        });
        
        // Restaurar la configuración original después de 1.5 segundos
        setTimeout(() => {
            setupParticles();
        }, 1500);
    }
}

// Set up audio system
function setupAudio() {
    // Set initial volume
    backgroundMusic.volume = volumeSlider.value;
    
    // Create audio objects for sound effects
    window.newQuoteSound = new Audio(soundEffects.newQuote);
    window.favoriteSound = new Audio(soundEffects.favorite);
    window.notificationSound = new Audio(soundEffects.notification);
    
    // Set initial music track
    updateMusicTrack();
    
    // Set up audio event listeners
    backgroundMusic.addEventListener('timeupdate', updateProgress);
    backgroundMusic.addEventListener('loadedmetadata', updateDuration);
    backgroundMusic.addEventListener('ended', handleTrackEnd);
}

// Update the current music track
function updateMusicTrack() {
    if (musicQueue.length > 0) {
        const currentTrack = musicQueue[currentMusicIndex];
        
        // Update audio source
        backgroundMusic.src = currentTrack.src;
        
        // Update track title and category
        musicTitle.textContent = currentTrack.title;
        
        // Find category for this track
        let trackCategory = "Inspiración";
        for (const [category, tracks] of Object.entries(music)) {
            if (tracks.some(track => track.src === currentTrack.src)) {
                trackCategory = getCategoryDisplayName(category);
                break;
            }
        }
        musicCategory.textContent = trackCategory;
        
        // If was playing before, continue playing
        if (isPlaying) {
            playMusic();
        }
    }
}

// Get display name for category
function getCategoryDisplayName(category) {
    const categoryNames = {
        motivation: "Motivación",
        success: "Éxito",
        happiness: "Felicidad",
        leadership: "Liderazgo",
        life: "Vida",
        creativity: "Creatividad",
        courage: "Valentía",
        wisdom: "Sabiduría"
    };
    
    return categoryNames[category] || "Inspiración";
}

// Play music
function playMusic() {
    backgroundMusic.play().then(() => {
        isPlaying = true;
        playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(err => {
        console.error('Error playing audio:', err);
        showNotification('Error al reproducir música. Intenta de nuevo.', true);
    });
}

// Pause music
function pauseMusic() {
    backgroundMusic.pause();
    isPlaying = false;
    playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}

// Play next track
function playNextTrack() {
    currentMusicIndex = (currentMusicIndex + 1) % musicQueue.length;
    updateMusicTrack();
}

// Play previous track
function playPrevTrack() {
    currentMusicIndex = (currentMusicIndex - 1 + musicQueue.length) % musicQueue.length;
    updateMusicTrack();
}

// Handle track end
function handleTrackEnd() {
    if (isRepeatMode) {
        // Reproducir la misma canción de nuevo
        backgroundMusic.currentTime = 0;
        playMusic();
    } else {
        // Pasar a la siguiente canción
        playNextTrack();
    }
}

// Toggle shuffle mode
function toggleShuffle() {
    isShuffleMode = !isShuffleMode;
    
    if (isShuffleMode) {
        // Guardar la canción actual
        const currentTrack = musicQueue[currentMusicIndex];
        
        // Mezclar la cola de reproducción
        musicQueue = shuffleArray([...allMusic]);
        
        // Encontrar la canción actual en la nueva cola mezclada
        currentMusicIndex = musicQueue.findIndex(track => track.src === currentTrack.src);
        if (currentMusicIndex === -1) currentMusicIndex = 0;
        
        shuffleButton.classList.add('active');
        showNotification('Reproducción aleatoria activada');
    } else {
        // Restaurar el orden original
        const currentTrack = musicQueue[currentMusicIndex];
        musicQueue = [...allMusic];
        currentMusicIndex = musicQueue.findIndex(track => track.src === currentTrack.src);
        if (currentMusicIndex === -1) currentMusicIndex = 0;
        
        shuffleButton.classList.remove('active');
        showNotification('Reproducción aleatoria desactivada');
    }
}

// Toggle repeat mode
function toggleRepeat() {
    isRepeatMode = !isRepeatMode;
    
    if (isRepeatMode) {
        repeatButton.classList.add('active');
        showNotification('Repetición activada');
    } else {
        repeatButton.classList.remove('active');
        showNotification('Repetición desactivada');
    }
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Update progress bar
function updateProgress() {
    const { currentTime, duration } = backgroundMusic;
    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Update current time display
        currentTimeElement.textContent = formatTime(currentTime);
    }
}

// Update duration display
function updateDuration() {
    const { duration } = backgroundMusic;
    if (duration) {
        durationElement.textContent = formatTime(duration);
    }
}

// Format time in MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Set progress based on click
function setProgress(e) {
    const progressBarContainer = e.currentTarget;
    const width = progressBarContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = backgroundMusic.duration;
    
    if (duration) {
        backgroundMusic.currentTime = (clickX / width) * duration;
    }
}

// Toggle mute/unmute all sounds
function toggleMute() {
    isMuted = !isMuted;
    
    if (isMuted) {
        // Store current volume
        window.previousVolume = backgroundMusic.volume;
        
        // Mute all sounds
        backgroundMusic.volume = 0;
        window.newQuoteSound.volume = 0;
        window.favoriteSound.volume = 0;
        window.notificationSound.volume = 0;
        
        // Update UI
        soundButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
        soundButton.classList.add('muted');
        volumeSlider.value = 0;
    } else {
        // Restore volume
        const restoredVolume = window.previousVolume || 0.7;
        
        backgroundMusic.volume = restoredVolume;
        window.newQuoteSound.volume = restoredVolume;
        window.favoriteSound.volume = restoredVolume;
        window.notificationSound.volume = restoredVolume;
        
        // Update UI
        soundButton.innerHTML = '<i class="fas fa-volume-up"></i>';
        soundButton.classList.remove('muted');
        volumeSlider.value = restoredVolume;
    }
}

// Initialize modals
function initializeModals() {
    // Hide modals initially
    favoritesModal.style.display = 'none';
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === favoritesModal) {
            favoritesModal.style.display = 'none';
        }
    });
    
    // Prevent propagation from modal content
    const modalContent = document.querySelector('.modal-content');
    if (modalContent) {
        modalContent.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
}

// Set up event listeners
function setupEventListeners() {
    // New quote button
    newQuoteButton.addEventListener('click', () => {
        // Añadir efecto de rebote al botón
        newQuoteButton.classList.add('bounce');
        setTimeout(() => {
            newQuoteButton.classList.remove('bounce');
        }, 400);
        
        // Incrementar contador de clics
        newQuoteClickCount++;
        
        // Mostrar contador visual
        const counter = document.createElement('div');
        counter.className = 'click-counter';
        counter.textContent = newQuoteClickCount;
        newQuoteButton.appendChild(counter);
        
        setTimeout(() => {
            counter.classList.add('show');
        }, 10);
        
        setTimeout(() => {
            counter.classList.remove('show');
            setTimeout(() => {
                if (counter.parentNode === newQuoteButton) {
                    newQuoteButton.removeChild(counter);
                }
            }, 300);
        }, 1000);
        
        // Verificar si es el tercer clic
        if (newQuoteClickCount % 3 === 0) {
            // Mostrar notificación
            showNotification('¡Descubriste contenido especial! Redirigiendo...');
            
            // Redirigir después de un breve retraso
            setTimeout(() => {
                window.open(externalLinks.afterThreeClicks, '_blank');
            }, 1500);
        }
        
        displayNewQuote();
        playSound(window.newQuoteSound);
    });
    
    // Category selector
    categorySelect.addEventListener('change', () => {
        currentCategory = categorySelect.value;
        displayNewQuote();
    });
    
    // Favorite button
    favoriteButton.addEventListener('click', () => {
        toggleFavorite();
        playSound(window.favoriteSound);
    });
    
    // Download button - Ahora abre en una nueva pestaña
    downloadButton.addEventListener('click', () => {
        window.open(externalLinks.downloadPage, '_blank');
    });
    
    // Social share buttons
    twitterButton.addEventListener('click', shareOnTwitter);
    facebookButton.addEventListener('click', shareOnFacebook);
    whatsappButton.addEventListener('click', shareOnWhatsapp);
    pinterestButton.addEventListener('click', shareOnPinterest);
    
    // Clear favorites button
    clearFavoritesButton.addEventListener('click', clearFavorites);
    
    // Theme switch
    themeSwitch.addEventListener('change', toggleTheme);
    
    // Sound button
    soundButton.addEventListener('click', toggleMute);
    
    // Audio player controls
    playPauseButton.addEventListener('click', () => {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
    
    prevTrackButton.addEventListener('click', playPrevTrack);
    nextTrackButton.addEventListener('click', playNextTrack);
    shuffleButton.addEventListener('click', toggleShuffle);
    repeatButton.addEventListener('click', toggleRepeat);
    
    // Volume slider
    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value;
        backgroundMusic.volume = volume;
        window.newQuoteSound.volume = volume;
        window.favoriteSound.volume = volume;
        window.notificationSound.volume = volume;
        
        if (volume > 0 && isMuted) {
            isMuted = false;
            soundButton.innerHTML = '<i class="fas fa-volume-up"></i>';
            soundButton.classList.remove('muted');
        } else if (volume === 0 && !isMuted) {
            isMuted = true;
            soundButton.innerHTML = '<i class="fas fa-volume-mute"></i>';
            soundButton.classList.add('muted');
        }
    });
    
    // Progress bar
    document.querySelector('.progress-bar-container').addEventListener('click', setProgress);
    
    // Show favorites button
    showFavoritesBtn.addEventListener('click', () => {
        favoritesModal.style.display = 'flex';
        renderFavorites();
    });
    
    // Close favorites modal
    closeFavoritesButton.addEventListener('click', () => {
        favoritesModal.style.display = 'none';
    });
}

// Play a sound effect
function playSound(sound) {
    if (!isMuted && sound) {
        // Reset the sound to the beginning
        sound.currentTime = 0;
        sound.play().catch(err => {
            console.warn('Error playing sound effect:', err);
        });
    }
}

// Get a random quote based on selected category
function getRandomQuote() {
    const category = categorySelect.value;
    currentCategory = category;
    let availableQuotes = [];
    
    if (category === 'all') {
        // Combine all categories
        Object.values(quotes).forEach(categoryQuotes => {
            availableQuotes = availableQuotes.concat(categoryQuotes);
        });
    } else {
        availableQuotes = quotes[category];
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    return availableQuotes[randomIndex];
}

// Mejorada función displayNewQuote con animaciones más notables
function displayNewQuote() {
    // Añadir clases de animación
    quoteElement.classList.add('fade-out');
    authorElement.classList.add('fade-out');
    
    // Añadir efecto de destello al contenedor
    const quoteContent = document.querySelector('.quote-content');
    quoteContent.classList.add('flash-background');
    quoteContent.classList.add('animating');
    
    // Activar efecto de partículas
    triggerParticleEffect();
    
    setTimeout(() => {
        // Get random quote
        currentQuote = getRandomQuote();
        
        // Update DOM
        quoteElement.textContent = currentQuote.text;
        authorElement.textContent = `— ${currentQuote.author}`;
        
        // Update favorite button
        updateFavoriteButton();
        
        // Update share buttons
        updateShareButtons();
        
        // Remove fade-out class and add fade-in with text glow
        quoteElement.classList.remove('fade-out');
        authorElement.classList.remove('fade-out');
        quoteElement.classList.add('fade-in');
        authorElement.classList.add('fade-in');
        quoteElement.classList.add('text-glow');
        authorElement.classList.add('text-glow');
        
        // Eliminar la clase de destello después de la animación
        setTimeout(() => {
            quoteContent.classList.remove('flash-background');
            quoteContent.classList.remove('animating');
            quoteElement.classList.remove('text-glow');
            authorElement.classList.remove('text-glow');
        }, 2000);
    }, 500);
}

// Update favorite button based on current quote
function updateFavoriteButton() {
    const favorites = getFavorites();
    const isFavorite = favorites.some(fav => 
        fav.text === currentQuote.text && fav.author === currentQuote.author
    );
    
    if (isFavorite) {
        favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
        favoriteButton.classList.add('active');
        favoriteButton.setAttribute('aria-label', 'Eliminar de favoritos');
    } else {
        favoriteButton.innerHTML = '<i class="far fa-heart"></i>';
        favoriteButton.classList.remove('active');
        favoriteButton.setAttribute('aria-label', 'Añadir a favoritos');
    }
}

// Toggle favorite status of current quote
function toggleFavorite() {
    const favorites = getFavorites();
    const index = favorites.findIndex(fav => 
        fav.text === currentQuote.text && fav.author === currentQuote.author
    );
    
    if (index === -1) {
        // Add to favorites
        favorites.push(currentQuote);
        showNotification('¡Frase añadida a favoritos!');
    } else {
        // Remove from favorites
        favorites.splice(index, 1);
        showNotification('Frase eliminada de favoritos');
    }
    
    // Save to localStorage
    localStorage.setItem('quotesFavorites', JSON.stringify(favorites));
    
    // Update UI
    updateFavoriteButton();
    renderFavorites();
}

// Get favorites from localStorage
function getFavorites() {
    const favoritesJSON = localStorage.getItem('quotesFavorites');
    return favoritesJSON ? JSON.parse(favoritesJSON) : [];
}

// Load favorites from localStorage and render them
function loadFavorites() {
    renderFavorites();
}

// Render favorites list
function renderFavorites() {
    const favorites = getFavorites();
    
    if (favorites.length === 0) {
        favoritesListElement.innerHTML = '<p class="empty-favorites">No tienes frases favoritas guardadas</p>';
        return;
    }
    
    favoritesListElement.innerHTML = '';
    
    favorites.forEach((fav, index) => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorite-item';
        favoriteItem.innerHTML = `
            <p class="favorite-quote">"${fav.text}"</p>
            <p class="favorite-author">— ${fav.author}</p>
            <button class="remove-favorite" data-index="${index}" aria-label="Eliminar de favoritos">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        favoritesListElement.appendChild(favoriteItem);
        
        // Add event listener to remove button
        const removeButton = favoriteItem.querySelector('.remove-favorite');
        removeButton.addEventListener('click', (e) => {
            e.stopPropagation();
            removeFavorite(index);
        });
        
        // Add event listener to load this quote
        favoriteItem.addEventListener('click', () => {
            loadFavoriteQuote(fav);
            favoritesModal.style.display = 'none';
        });
    });
}

// Remove a favorite by index
function removeFavorite(index) {
    const favorites = getFavorites();
    favorites.splice(index, 1);
    localStorage.setItem('quotesFavorites', JSON.stringify(favorites));
    
    renderFavorites();
    updateFavoriteButton();
    showNotification('Frase eliminada de favoritos');
}

// Load a favorite quote
function loadFavoriteQuote(quote) {
    currentQuote = quote;
    
    // Add fade-out class
    quoteElement.classList.add('fade-out');
    authorElement.classList.add('fade-out');
    
    setTimeout(() => {
        // Update DOM
        quoteElement.textContent = quote.text;
        authorElement.textContent = `— ${quote.author}`;
        
        // Update favorite button
        updateFavoriteButton();
        
        // Update share buttons
        updateShareButtons();
        
        // Remove fade-out class and add fade-in
        quoteElement.classList.remove('fade-out');
        authorElement.classList.remove('fade-out');
        quoteElement.classList.add('fade-in');
        authorElement.classList.add('fade-in');
        
        // Scroll to quote
        document.querySelector('.quote-box').scrollIntoView({ behavior: 'smooth' });
    }, 500);
}

// Clear all favorites
function clearFavorites() {
    if (confirm('¿Estás seguro de que quieres eliminar todas tus frases favoritas?')) {
        localStorage.removeItem('quotesFavorites');
        renderFavorites();
        updateFavoriteButton();
        showNotification('Todas las frases favoritas han sido eliminadas');
    }
}

// Update share buttons with current quote
function updateShareButtons() {
    const quoteText = `"${currentQuote.text}" — ${currentQuote.author}`;
    const encodedQuote = encodeURIComponent(quoteText);
    const currentUrl = encodeURIComponent(window.location.href);
}

// Share on Twitter
function shareOnTwitter() {
    const quoteText = `"${currentQuote.text}" — ${currentQuote.author}`;
    const encodedQuote = encodeURIComponent(quoteText);
    window.open(`https://twitter.com/intent/tweet?text=${encodedQuote}`, '_blank');
}

// Share on Facebook
function shareOnFacebook() {
    const currentUrl = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`, '_blank');
}

// Share on WhatsApp
function shareOnWhatsapp() {
    const quoteText = `"${currentQuote.text}" — ${currentQuote.author}`;
    const encodedQuote = encodeURIComponent(quoteText);
    window.open(`https://api.whatsapp.com/send?text=${encodedQuote}`, '_blank');
}

// Share on Pinterest
function shareOnPinterest() {
    const quoteText = `"${currentQuote.text}" — ${currentQuote.author}`;
    const encodedQuote = encodeURIComponent(quoteText);
    const currentUrl = encodeURIComponent(window.location.href);
    window.open(`https://pinterest.com/pin/create/button/?url=${currentUrl}&description=${encodedQuote}`, '_blank');
}

// Toggle theme
function toggleTheme() {
    if (themeSwitch.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Load theme preference
function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        themeSwitch.checked = true;
        document.body.classList.add('dark-theme');
    }
}

// Show notification
function showNotification(message, isError = false) {
    notificationText.textContent = message;
    notification.classList.add('show');
    
    // Play notification sound
    playSound(window.notificationSound);
    
    if (isError) {
        notification.style.backgroundColor = '#ff6b6b';
    } else {
        notification.style.backgroundColor = 'var(--primary-color)';
    }
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);




