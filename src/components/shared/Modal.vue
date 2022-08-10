<template>
  <transition name="modal">
    <div class="modal-mask">
      <div @click.self="$emit('close')" class="modal-wrapper">
        <div class="modal-container" style="max-height: 100vh !important; overflow-y: auto;">

          <div class="modal-header d-flex justify-content-between ">
            <slot name="header">
              default header
            </slot>
            <button @click="$emit('close')" type="button" class="close mr-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body _p0">
            <slot name="body">
              default body
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button v-if="!innerWaitingResult" class="btn btn-darkula modal-default-button" @click="$emit('sendInvite')" style="min-width: 10em;">
                VALIDER
              </button>
              <button v-else class="btn btn-darkula modal-default-button" style="min-width: 10em;">
                <img  width="25" src="@/assets/image/preloader/load2.gif" alt="loader"/>
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalBox',
  props: {
    waitingResult: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerWaitingResult: false
    }
  },
  watch: {
    waitingResult: function () {
      this.innerWaitingResult = this.waitingResult
    }
  }
}
</script>

<style scoped>
  .close{
    height: auto;
  }
  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 600px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #f9f7f7;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }
  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  ._p0{
    padding: 0 !important;
  }
  h3{
    font-size: 1.2em;
  }
</style>
