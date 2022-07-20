<template>
  <div>
    <nav class="nav">
      <div class="nav__inner">
        <a href="/">
          <div class="logo">
            <img width="22" class="_mr-2" src="../../assets/svg/cube.svg"/>
            <span class="logo__text logo__accent flex">
            UML
            <span class="text_black">Designer</span>
          </span>
          </div>
        </a>
        <div class="nav__menu">
          <a href="" class="nav__menu__link">Tutoriels</a>
          <a href="" target="_blank" rel="noreferrer noopener" class="nav__menu__link">Blog</a>
          <router-link :to="{name: 'Login'}" class="nav__menu__btn">
            Connexion
          </router-link>
        </div>
      </div>
    </nav>

    <div class="hero__bg">
      <!-- HERO -->
      <div class="hero">
        <h1 class="hero__title">
          Créez vos diagrammes uml sans votre souris.
        </h1>
        <p class="hero__text">
          Avec notre assistant IA, Contruisez vos diagrammes à partir de texte brute en langue française, invitez des amis à collaborer, générez du code de base à partir des diagrammes, publiez vos diagrammes etc...
        </p>
        <router-link :to="{name: 'Login'}">
          <div class="hero__cta" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rem:" data-state="closed">
            Commencer
          </div>
        </router-link>
        <router-link :to="{name: 'Demo'}">
          <div class="hero__cta hero__cta_white" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rem:" data-state="closed">
            Voir la démo
          </div>
        </router-link>
        <p class="hero__details">
          Notre outil de synthèse texte-diagramme se base sur les technologies de l'
          <span><a href="https://fr.wikipedia.org/wiki/Intelligence_artificielle" target="_blank">IA</a></span>
          et du <span><a href="https://fr.wikipedia.org/wiki/Traitement_automatique_des_langues" target="_blank">TAL</a></span>.
        </p>
      </div>

      <!-- CONTENTS -->
      <div class="hero__tools">
        <h1>Type de diagrammes UML</h1>
        <div class="hometools">
          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">
                Diagramme de Classe
                <span class="hometool__soon hometool__soon--new">New</span>
              </h2>
              <p class="hometool__text">Bigger than icons, more like illustrations</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <defs>
                <linearGradient id="illu_icons_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#ff4b1f"></stop>
                  <stop offset="1" stop-color="#ff9068"></stop>
                </linearGradient>
              </defs>
              <path d="M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z" fill="url(#illu_icons_svg__a)"/>
            </svg>
          </div>

          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">Diagramme de case d'utilisation
                <span class="hometool__soon">Soon</span>
              </h2>
              <p class="hometool__text">Improve your site images &amp; social posts</p>
            </div>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="86.02px" height="86.02px" viewBox="0 0 86.02 86.02" style="enable-background:new 0 0 86.02 86.02;" xml:space="preserve">
              <g>
                <path d="M0.354,48.874l0.118,25.351c0.001,0.326,0.181,0.624,0.467,0.779l20.249,10.602c0.132,0.071,0.276,0.106,0.421,0.106
                  c0.001,0,0.001,0,0.002,0c0.061,0.068,0.129,0.133,0.211,0.182c0.14,0.084,0.297,0.126,0.455,0.126
                  c0.146,0,0.291-0.035,0.423-0.106l19.992-10.842c0.183-0.099,0.315-0.261,0.392-0.445c0.081,0.155,0.203,0.292,0.364,0.379
                  l20.248,10.602c0.132,0.071,0.277,0.106,0.422,0.106c0.001,0,0.001,0,0.002,0c0.062,0.068,0.129,0.133,0.21,0.182
                  c0.142,0.084,0.299,0.126,0.456,0.126c0.146,0,0.29-0.035,0.422-0.106L85.2,75.071c0.287-0.154,0.467-0.456,0.467-0.783V47.911
                  c0-0.008-0.004-0.016-0.004-0.022c0-0.006,0.002-0.013,0.002-0.021c-0.001-0.023-0.01-0.049-0.014-0.072
                  c-0.007-0.05-0.014-0.098-0.027-0.146c-0.011-0.031-0.023-0.062-0.038-0.093c-0.019-0.042-0.037-0.082-0.062-0.12
                  c-0.019-0.03-0.04-0.058-0.062-0.084c-0.028-0.034-0.059-0.066-0.092-0.097c-0.025-0.023-0.054-0.045-0.083-0.066
                  c-0.02-0.012-0.034-0.03-0.056-0.043c-0.02-0.011-0.041-0.017-0.062-0.025c-0.019-0.01-0.03-0.022-0.049-0.029l-20.603-9.978
                  c-0.082-0.034-0.17-0.038-0.257-0.047V10.865c0-0.007-0.002-0.015-0.002-0.022c-0.001-0.007,0.001-0.013,0.001-0.02
                  c-0.001-0.025-0.012-0.049-0.015-0.073c-0.007-0.049-0.014-0.098-0.027-0.145c-0.01-0.032-0.024-0.063-0.038-0.093
                  c-0.02-0.042-0.036-0.083-0.062-0.12c-0.02-0.03-0.041-0.057-0.062-0.084c-0.028-0.034-0.058-0.067-0.091-0.097
                  c-0.025-0.023-0.055-0.045-0.083-0.065c-0.021-0.014-0.035-0.032-0.056-0.045c-0.021-0.011-0.042-0.016-0.062-0.026
                  c-0.019-0.009-0.031-0.021-0.048-0.027L43.118,0.07c-0.24-0.102-0.512-0.093-0.746,0.025L22.009,10.71
                  c-0.299,0.151-0.487,0.456-0.489,0.79c0,0.006,0.002,0.011,0.002,0.016c-0.037,0.099-0.063,0.202-0.063,0.312l0.118,25.233
                  c-0.106,0.011-0.213,0.03-0.311,0.079L0.903,47.755c-0.298,0.15-0.487,0.456-0.489,0.791c0,0.005,0.003,0.009,0.003,0.015
                  C0.379,48.659,0.353,48.764,0.354,48.874z M61.321,10.964L43.372,21l-19.005-9.485l18.438-9.646L61.321,10.964z M62.486,37.008
                  l-18.214,9.586V22.535l18.214-10.18V37.008z M65.674,59.58l18.214-10.179v24.355l-18.214,9.883V59.58z M45.77,48.559l18.438-9.646
                  l18.515,9.099L64.775,58.045L45.77,48.559z M23.165,59.58L41.38,49.402v24.355l-18.215,9.882V59.58z M3.262,48.559L21.7,38.913
                  l18.515,9.099L22.266,58.045L3.262,48.559z"/>
              </g>
            </svg>
          </div>

          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">Diagramme de séquence
                <span class="hometool__soon">Soon</span>
              </h2>
              <p class="hometool__text">A beautiful way to increase engagement</p>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <defs>
                <linearGradient id="gradient_text_covers_icon_svg__a" x1="0.079" y1="0.074" x2="0.929" y2="0.919" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#EC008C"></stop><stop offset="1" stop-color="#FC6767"></stop>
                </linearGradient>
              </defs>
              <path d="M64 480C28.65 480 0 451.3 0 416V352C0 316.7 28.65 288 64 288H448C483.3 288 512 316.7 512 352V416C512 451.3 483.3 480 448 480H64zM448 416V352H64V416H448zM288 160C288 195.3 259.3 224 224 224H64C28.65 224 0 195.3 0 160V96C0 60.65 28.65 32 64 32H368C412.2 32 448 67.82 448 112V128H486.1C507.4 128 518.1 153.9 503 168.1L432.1 239C423.6 248.4 408.4 248.4 399 239L328.1 168.1C313.9 153.9 324.6 128 345.9 128H384V112C384 103.2 376.8 96 368 96H288V160z" fill="url(#gradient_text_covers_icon_svg__a)"/>
            </svg>
          </div>

          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">Diagramme d'état transition
                <span class="hometool__soon">Soon</span>
              </h2>
              <p class="hometool__text">Startup emails that work everywhere</p>
            </div>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 445.555 445.555" style="enable-background:new 0 0 445.555 445.555;" xml:space="preserve">
              <defs>
                <linearGradient id="rich_images_svg__a" x1="0.079" y1="0.074" x2="0.929" y2="0.919" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#f8a8d5"></stop>
                  <stop offset="1" stop-color="#ff0080"></stop>
                </linearGradient>
                <linearGradient id="illos2_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#6c63ff"></stop>
                  <stop offset="1" stop-color="#3931d3"></stop>
                </linearGradient>
                <linearGradient id="animated_alerts_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#50C9C3"></stop><stop offset="1" stop-color="#96DEDA"></stop></linearGradient>
              </defs>
              <g>
                <polygon points="237.777,243.019 237.777,445.555 409.166,337.631 409.167,135.095 " fill="url(#rich_images_svg__a)"/>
                <polygon points="222.777,0 50.463,108.506 222.777,217.012 395.092,108.506" fill="url(#illos2_svg__a)"/>
                <polygon points="36.388,337.631 207.777,445.555 207.777,243.019 36.388,135.095" fill="url(#animated_alerts_svg__a)"/>
              </g>
            </svg>
          </div>

          <div class="hometool hometool--ghost"></div>
          <div class="hometool hometool--ghost"></div>
        </div>
      </div>

      <div class="hero__tools">
        <h1>Workflow</h1>
        <div class="hometools">
          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">Etape 1</h2>
              <p class="hometool__text">Creez un projet et commencer a définir les règles de gestion par rapport a vos types de diagrammes uml.</p>
            </div>
            <svg viewBox="0 0 80 80">
              <defs>
                <linearGradient id="illos2_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#6c63ff"></stop>
                  <stop offset="1" stop-color="#3931d3"></stop>
                </linearGradient>
              </defs><path d="M0 26.56C0 4.688 4.688 0 26.56 0h26.88C75.312 0 80 4.688 80 26.56v26.88C80 75.312 75.312 80 53.44 80H26.56C4.688 80 0 75.312 0 53.44z" fill="url(#illos2_svg__a)"></path><g transform="translate(14905.842 -1625.141)"><circle cx="4.497" cy="4.497" r="4.497" transform="translate(-14861.08 1661.611)" fill="#fff"></circle><path fill="#3f3d56" stroke="#fff" stroke-miterlimit="10" d="M-14856.624 1674.24l.037-8.157"></path><circle cx="1.154" cy="1.154" r="1.154" transform="translate(-14857.741 1664.93)" fill="#fff"></circle><path d="M-14856.611 1671.11s-.149-3.545-3.529-3.148" fill="none" stroke="#fff"></path><circle cx="4.497" cy="4.497" r="4.497" transform="translate(-14879.919 1652.583)" fill="#fff"></circle><path fill="#3f3d56" stroke="#fff" stroke-miterlimit="10" d="M-14875.676 1673.681l.259-16.606"></path><circle cx="1.154" cy="1.154" r="1.154" transform="translate(-14876.571 1655.921)" fill="#fff"></circle><path d="M-14875.489 1661.772s-.11-3.546-3.494-3.187" fill="#fff"></path><path d="M-14875.671 1673.364s.848-6.8-3.431-7.2" fill="none" stroke="#fff" stroke-miterlimit="10"></path><circle cx="1.154" cy="1.154" r="1.154" transform="translate(-14880.256 1665.011)" fill="#fff"></circle><circle cx="4.497" cy="4.497" r="4.497" transform="translate(-14870.247 1642.599)" fill="#fff"></circle><path fill="#3f3d56" stroke="#fff" stroke-miterlimit="10" d="M-14865.748 1674.321v-27.208"></path><circle cx="1.154" cy="1.154" r="1.154" transform="translate(-14866.902 1645.946)" fill="#fff"></circle><circle cx="1.154" cy="1.154" r="1.154" transform="translate(-14870.444 1665.632)" fill="#fff"></circle><path d="M-14865.748 1663.04s-.165-3.544-3.543-3.132" fill="#fff"></path><path d="M-14865.748 1674.005s.742-6.889-3.543-7.219" fill="none" stroke="#fff" stroke-miterlimit="10"></path><circle cx="1.154" cy="1.154" r="1.154" transform="translate(-14863.287 1654.811)" fill="#fff"></circle><path d="M-14865.677 1662.812s-.742-6.522 3.543-6.851" fill="none" stroke="#fff" stroke-miterlimit="10"></path><path d="M-14865.684 1687.681a14.258 14.258 0 0014.258-14.258h-28.516a14.258 14.258 0 0014.258 14.258z" fill="#fff"></path></g>
            </svg>
          </div>

          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">
                Etape 2
              </h2>
              <p class="hometool__text">Inviter vos collegues à collaborer pour la construction e vos diagrammes uml.</p>
            </div>
            <svg viewBox="0 0 80 80">
              <defs>
                <linearGradient id="gradients_svg__a" x1="0.079" y1="0.074" x2="0.929" y2="0.919" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#7928ca"></stop><stop offset="1" stop-color="#ff0080"></stop></linearGradient></defs><path d="M0 26.56C0 4.688 4.688 0 26.56 0h26.88C75.312 0 80 4.688 80 26.56v26.88C80 75.312 75.312 80 53.44 80H26.56C4.688 80 0 75.312 0 53.44z" fill="url(#gradients_svg__a)"></path><g fill="#fff"><path d="M55.108 43.286a3.522 3.522 0 01-2.076-.677l-7.488-5.434a3.553 3.553 0 01-.788-4.956l5.434-7.488a3.548 3.548 0 014.956-.788l7.488 5.434a3.553 3.553 0 01.788 4.956l-5.434 7.488a3.525 3.525 0 01-2.315 1.42 3.6 3.6 0 01-.565.045z" opacity="0.749"></path><path d="M35.8 37.348h-9.252A3.552 3.552 0 0123 33.8v-9.252A3.552 3.552 0 0126.548 21H35.8a3.552 3.552 0 013.548 3.548V33.8a3.552 3.552 0 01-3.548 3.548z"></path><path d="M35.8 58.059h-9.252A3.552 3.552 0 0123 54.508v-9.252a3.552 3.552 0 013.548-3.548H35.8a3.552 3.552 0 013.548 3.548v9.252a3.552 3.552 0 01-3.548 3.551z" opacity="0.269"></path></g>
            </svg>
          </div>

          <div class="hometool hometool--nohover" data-state="closed">
            <div class="hometool__content">
              <h2 class="hometool__title">Etape 3</h2>
              <p class="hometool__text">Grace a Github co-pillote et d'autre outils dans la section "code" générer le code source associé à vos diagrammes.</p>
            </div>
            <svg viewBox="0 0 80 80">
              <defs>
                <linearGradient id="animated_alerts_svg__a" x1="0.5" y1="0.5" x2="0.061" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#50C9C3"></stop><stop offset="1" stop-color="#96DEDA"></stop></linearGradient>
              </defs>
              <path d="M0 26.56C0 4.688 4.688 0 26.56 0h26.88C75.312 0 80 4.688 80 26.56v26.88C80 75.312 75.312 80 53.44 80H26.56C4.688 80 0 75.312 0 53.44z" fill="url(#animated_alerts_svg__a)"></path><path d="M43.5 15.858a7.222 7.222 0 013.104 2.92l16.76 29.204a7.192 7.192 0 01-.018 7.265 7.2 7.2 0 01-6.301 3.617l-33.671-.087a7.265 7.265 0 01-6.266-10.91L34.019 18.75a7.3 7.3 0 019.48-2.887zm-22.547 40.64a5.553 5.553 0 002.425.557c9.856-3.425 19.849-6.503 33.671.087a5.476 5.476 0 004.807-2.76 5.486 5.486 0 00.015-5.542L45.11 19.636a5.49 5.49 0 00-4.796-2.78 5.476 5.476 0 00-4.807 2.758L18.597 48.731a5.56 5.56 0 002.353 7.77z" fill="#fff"></path><path d="M45.104 33.646a.5.5 0 10-.707.707l1.146 1.147h-.793a4.407 4.407 0 00-3.128 1.389 17.951 17.951 0 00-1.877 2.279c-.132.178-.263.356-.395.532-1.491 1.988-3.11 3.8-6.1 3.8a.5.5 0 000 1c3.51 0 5.391-2.188 6.9-4.2q.216-.287.42-.565a16.757 16.757 0 011.745-2.124A3.416 3.416 0 0144.75 36.5h.793l-1.147 1.146a.5.5 0 00.707.707l2-2a.5.5 0 000-.707zM33.25 35.5a7.534 7.534 0 016.005 3.067l-.129.175c-.128.173-.253.343-.376.507l-.108.143A6.664 6.664 0 0033.25 36.5a.5.5 0 010-1zm8.372 7.611a13.9 13.9 0 01-1.414-1.656c.189-.238.369-.474.542-.7l.09-.12a14.112 14.112 0 001.475 1.754A3.416 3.416 0 0044.75 43.5h.793l-1.147-1.146a.5.5 0 01.707-.707l2 2a.5.5 0 010 .707l-2 2a.5.5 0 01-.707-.707l1.147-1.147h-.793a4.407 4.407 0 01-3.128-1.389z" fill="#fff" fill-rule="evenodd"></path>
            </svg>
          </div>

          <div class="hometool hometool--ghost"></div>
          <div class="hometool hometool--ghost"></div>
        </div>
      </div>

      <div class="hero__tools text-center">
        <p class="mb-5">De grand projets commencent toujours par de petit organigrammes. Alors exquisons un diagramme 😎️ ...</p>
        <router-link :to="{name: 'Register'}">
          <div class="hero__cta" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rem:" data-state="closed">
            Inscription
          </div>
        </router-link>
        <router-link :to="{name: 'Login'}">
          <div class="hero__cta hero__cta_white" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:Rem:" data-state="closed">
            Connexion
          </div>
        </router-link>
        <div class="hometools">
          <div class="hometool hometool--ghost"></div>
          <div class="hometool hometool--ghost"></div>
        </div>
      </div>

      <!-- FOOTER -->
      <footer class="footer">
        <div>
          <p class="footer__text">Created by
            <a class="footer__stress" href="https://www.linkedin.com/in/g%C3%A9n%C3%A9reux-akotenou-8b00901b4/" target="_blank" rel="noreferrer noopener">Généreux Akotenou</a>
            <span class="red">❤️</span>
          </p>
          <p class="footer__text">
            <span class="hometool__soon umld-ml-0">MEMOIRE</span>
            <span class="hometool__soon">IFRI</span>
            <span class="hometool__soon">MIFY</span>
          </p>
        </div>
        <div class="footer__right">
          <div class="footer__menu">
            <a class="footer__link" href="https://www.umldesigner.app">umlDesigner</a>
            <a class="footer__link" href="https://www.umldesigner.app/terms">Conditions</a>
            <a class="footer__link" href="https://www.umldesigner.app/privacy">Confidentialité</a>
            <a class="footer__link" href="" target="_blank" rel="noreferrer noopener">Twitter</a>
          </div>
          <p class="footer__text">
            © 2022 UML-DESIGNER | Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeView',
  components: {
  }
}
</script>
