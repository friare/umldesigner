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
          <router-link :to="{name: 'Login'}" class="nav__menu__btn">Connexion</router-link>
        </div>
      </div>
    </nav>
    <div class="hero__bg">
        <!-- PAGE -->
        <div class="hero text-center">
          <div class="video-wrapper">
            <img src="../../assets/video/laptop.png" alt="">
            <video playsinline autoplay muted loop poster="../../assets/video/bkgrd-2.jpg">
              <source src="../../assets/video/soon.mp4" type="video/mp4">
              Votre navigateur ne supporte pas la vidéo
            </video>
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
  name: 'DemoPage'
}
</script>

<style scoped>
  .video-wrapper{
    width: 90%;
    max-width: 700px;
    position: relative;
    margin: auto;
  }
  .video-wrapper img{
    width: 100%;
  }

  video{
    position: absolute;
    top: 7.1%;
    left: 17.5%;
    width: 68%;
    height: 83%;
    background: #000;
  }
</style>
