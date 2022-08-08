<template>
    <div class="udesign">
      <div id="loading">
        <div class="inner-umlLoader">
          <div class="loadContainer">
              <div class="h1Container">
                  <div class="cube h1 w1 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w1 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w1 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w2 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w2 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w2 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w3 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w3 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h1 w3 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>
              </div>

              <div class="h2Container">
                  <div class="cube h2 w1 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w1 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w1 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w2 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w2 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w2 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w3 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w3 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h2 w3 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>
              </div>

              <div class="h3Container">
                  <div class="cube h3 w1 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w1 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w1 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w2 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w2 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w2 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w3 l1">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w3 l2">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>

                  <div class="cube h3 w3 l3">
                      <div class="face top"></div>
                      <div class="face left"></div>
                      <div class="face right"></div>
                  </div>
              </div>
          </div>
          <div class="uml-text">
          <!--<span>UMLDesigner</span>-->
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PreLoader',

  components: {
  },


}
</script>

<style>
  .inner-umlLoader {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: calc(100vh - 165px);
      width: 100%;
      margin: 0;
      padding: 0;
      /*background: #263238;*/
      z-index: 100000;
  }
</style>