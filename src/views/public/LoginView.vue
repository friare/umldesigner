<template>
  <div>
    <nav class="nav">
      <div class="nav__inner">
        <div class="logo">
          <img width="22" class="_mr-2" src="../../assets/svg/cube.svg"/>
          <span class="logo__text logo__accent flex">
            UML
            <span class="text_black">Designer</span>
          </span>
        </div>
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
                        <span class="login100-form-title pb-5">
                            Connexion
                        </span>
                <div class="panel panel-primary">
                  <div class="panel-body tabs-menu-body p-0 pt-5">
                    <div class="tab-content">
                      <div class="tab-pane active" id="tab5">
                        <div class="wrap-input100 validate-input input-group" data-bs-validate="Valid email is required: ex@abc.xyz">
                          <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                            <i class="zmdi zmdi-email text-muted" aria-hidden="true"></i>
                          </a>
                          <input class="input100 border-start-0 form-control ms-0" type="email" placeholder="Email">
                        </div>
                        <div class="wrap-input100 validate-input input-group" id="Password-toggle">
                          <a href="javascript:void(0)" class="input-group-text bg-white text-muted square-right">
                            <i class="zmdi zmdi-lock text-muted " aria-hidden="true"></i>
                          </a>
                          <input class="input100 border-start-0 form-control ms-0" type="password" placeholder="Mot de passe">
                        </div>
                        <div class="text-end pt-4">
                          <p class="mb-0">
                            <router-link :to="{name: 'ForgetPassword'}" class="text-primary ms-1">Mot de passe oublié?</router-link>
                          </p>
                        </div>
                        <div class="container-login100-form-btn">
                          <router-link :to="{name: 'ForgetPassword'}" class="login100-form-btn btn-primary hero__cta">Se connecter</router-link>
                        </div>
                        <div class="text-center pt-5">
                          <p class="text-dark mb-0">Vous êtes nouveau?
                            <router-link :to="{name: 'Register'}" class="text-primary ms-1">S'inscrire</router-link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
          <!-- CONTAINER CLOSED -->
        </div>
      </div>

      <!-- FOOTER -->
      <footer class="footer">
        <div>
          <p class="footer__text">Created by
            <a class="footer__stress" href="https://www.linkedin.com/in/g%C3%A9n%C3%A9reux-akotenou-8b00901b4/" target="_blank" rel="noreferrer noopener">Généreux Akotenou</a>
            <span class="red">❤️</span>
          </p>
          <p class="footer__text"><b>#</b>MEMOIRE, <b>#</b>IFRI, <b>#</b>MIFY</p>
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
