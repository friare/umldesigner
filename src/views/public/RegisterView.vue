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
      <div class="hero">
        <div class="">
          <div class="container-login100">
            <div class="wrap-login100 p-6">
              <form class="login100-form validate-form">
                <span class="login100-form-title">
                  Inscription
                </span>
                <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                  <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                    <i class="mdi mdi-account" aria-hidden="true"></i>
                  </a>
                  <input class="input100 border-start-0 ms-0 form-control" type="text" placeholder="Nom et Prénom ">
                </div>
                <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                  <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                    <i class="zmdi zmdi-email" aria-hidden="true"></i>
                  </a>
                  <input class="input100 border-start-0 ms-0 form-control" type="email" placeholder="Email">
                </div>
                <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                  <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                    <i class="zmdi zmdi-lock" aria-hidden="true"></i>
                  </a>
                  <input class="input100 border-start-0 ms-0 form-control" type="password" placeholder="Mot de passe">
                </div>
                <label class="custom-control custom-checkbox mt-4">
                  <input type="checkbox" class="">
                  <span class="custom-control-label">Accepter les <a class="text-primary" href="terms.html">conditions et politiques</a></span>
                </label>
                <div class="container-login100-form-btn">
                  <router-link :to="{name: 'Register'}" class="login100-form-btn btn-primary">M'inscrire</router-link>
                </div>
                <div class="text-center pt-3">
                  <p class="text-dark mb-0">J'ai déjà un compte
                    <router-link :to="{name: 'Login'}" class="text-primary ms-1">Me connecter</router-link>
                  </p>
                </div>
              </form>
            </div>
          </div>
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
  name: 'LoginView',
  components: {
  }
}
</script>
<style>
  body{
    position: relative;
  }
</style>
