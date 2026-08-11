(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class extends HTMLElement{connectedCallback(){let e=this.getAttribute(`color`)||`currentColor`;this.classList.add(`absolute`,`bottom-0`,`left-0`,`w-full`,`overflow-hidden`,`leading-none`,`z-20`,`pointer-events-none`,`h-[60px]`,`md:h-[120px]`,`lg:h-[150px]`),this.innerHTML=`
      <!-- Wave 1 (Back Layer - Slowest) -->
      <svg class="absolute bottom-0 left-0 w-[200%] h-full animate-wave-slow opacity-25" viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 70 Q 300 45, 600 70 T 1200 70 T 1800 70 T 2400 70 L 2400 120 L 0 120 Z" fill="${e}"></path>
      </svg>
      <!-- Wave 2 (Middle Layer - Medium Speed) -->
      <svg class="absolute bottom-0 left-0 w-[200%] h-full animate-wave-medium opacity-45" viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 60 Q 300 35, 600 60 T 1200 60 T 1800 60 T 2400 60 L 2400 120 L 0 120 Z" fill="${e}"></path>
      </svg>
      <!-- Wave 3 (Front Layer - Fast) -->
      <svg class="absolute bottom-0 left-0 w-[200%] h-full animate-wave-fast" viewBox="0 0 2400 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 0 50 Q 300 20, 600 50 T 1200 50 T 1800 50 T 2400 50 L 2400 120 L 0 120 Z" fill="${e}"></path>
      </svg>
    `}};customElements.define(`moving-waves`,e);var t=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="landing" class="relative w-full h-screen overflow-hidden flex flex-col justify-center items-center text-center">
        <video autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover z-0 opacity-60">
          <source src="/assets/landing/background_video.mp4" type="video/mp4" />
          <img src="/assets/landing/background_img.jpg" alt="Boda Fernanda y Javier Background" class="absolute inset-0 w-full h-full object-cover z-0" />
        </video>

        <div class="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60 z-10"></div>
        <div class="absolute inset-0 bg-neutral-900/30 z-10"></div>

        <div class="relative z-30 px-6 flex flex-col items-center justify-center h-full select-none">
          <p class="text-sm md:text-base tracking-[0.3em] uppercase font-light text-neutral-200 mb-2 drop-shadow-lg">
            Nuestra Boda
          </p>

          <div class="w-12 h-px bg-white/40 my-6 shadow-sm"></div>

          <h1 class="text-6xl sm:text-7xl md:text-9xl font-normal text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] my-2 tracking-wide font-wedding">
            Fernanda & Javier
          </h1>

          <div class="w-12 h-px bg-white/40 my-6 shadow-sm"></div>

          <p class="text-lg md:text-xl tracking-[0.2em] font-light text-white drop-shadow-lg uppercase">
            27 de Febrero de 2027
          </p>

          <p class="text-sm md:text-base tracking-[0.15em] font-light text-neutral-300 drop-shadow-md italic mt-2">
            ¡Nos casamos!
          </p>
        </div>

        <moving-waves color="#ffffff"></moving-waves>
      </section>
    `}};customElements.define(`landing-section`,t);var n=class extends HTMLElement{connectedCallback(){this.innerHTML=`
      <section id="place" class="w-full bg-white text-neutral-800 py-20 px-6 md:px-12 flex flex-col items-center">
        <div class="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 class="text-3xl md:text-4xl tracking-[0.2em] uppercase font-light text-neutral-500">Ubicación</h2>

            <p class="font-wedding text-5xl md:text-6xl text-amber-700/80 leading-none">Entre Lago Salones</p>

            <div class="w-16 h-0.5 bg-amber-700/30 my-2"></div>

            <div class="space-y-4 max-w-md">
              <div class="flex items-start justify-center lg:justify-start space-x-3 text-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-amber-700 mt-1 shrink-0">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <div>
                  <h4 class="font-semibold text-neutral-900 tracking-wide">Dirección</h4>
                  <p class="text-neutral-600 mt-1">Supermanzana conocido, 76915 El Romeral, Qro.</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 mt-6 w-full justify-center lg:justify-start">
              <a href="https://www.google.com/maps/place/Entrelago+Salones,+jardines+y+terraza/@20.5363998,-100.5034855,17z/data=!4m6!3m5!1s0x85d34f52b4faf587:0xec3ed2ffa25ae451!8m2!3d20.5363948!4d-100.5009106!16s%2Fg%2F11hz07qhnl?entry=ttu&g_ep=EgoyMDI2MDcxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-neutral-900 hover:bg-neutral-800 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm">
                <img src="/assets/place/google_logo.svg" alt="Google Logo" class="w-4 h-4 object-contain" />
                <span>Google Maps</span>
              </a>
              <a href="https://maps.apple.com/place?place-id=IC6611A6038EBE8BD&address=76915+Corregidora%2C+Qro.%2C+Mexico&coordinate=20.536200%2C-100.500692&name=Entrelago+Salones%2C+Jardines+y+Terraza&_provider=9902" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center space-x-2 bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-medium px-6 py-3 rounded-full transition duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 text-sm">
                <img src="/assets/place/apple_logo.svg" alt="Apple Logo" class="w-4 h-4 object-contain" />
                <span>Maps</span>
              </a>
            </div>
          </div>

          <div class="relative w-full aspect-video lg:aspect-square h-75 sm:h-100 lg:h-112.5 rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3736.2634301006333!2d-100.5034855!3d20.5363998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d34f52b4faf587%3A0xec3ed2ffa25ae451!2sEntrelago%20Salones%2C%20jardines%20y%20terraza!5e0!3m2!1ses!2smx!4v1784073656112!5m2!1ses!2smx"
              class="absolute inset-0 w-full h-full border-0 grayscale-20 hover:grayscale-0 transition-all duration-700"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <moving-waves color="#ffffff"></moving-waves>
      </section>
    `}};customElements.define(`place-section`,n);