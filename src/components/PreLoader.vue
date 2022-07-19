<template>
    <div class="udesign">
        <div id="loading">
            <div class="preloader">
              <img src="../assets/image/preloader/circle.gif" alt="preloader">
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
.preloader{
  /*background-color: red;*/
  /*height: 50%;
  width: 50%;*/
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  /*background-color: rgb(236, 236, 236) !important;*/
  background-image: linear-gradient(#e6e6e6 1.7px,transparent 0), linear-gradient(90deg,#e6e6e6 1.7px,transparent 0), linear-gradient(#e6e6e6 1px,transparent 0), linear-gradient(90deg,#e6e6e6 1px,#ececec 0);
  background-size: 80px 80px,80px 80px,20px 20px,20px 20px;

  z-index: 10;
}
.preloader img{
  width: 7em;
  z-index: 111;
}
</style>