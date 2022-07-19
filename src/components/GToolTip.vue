<template>
<div v-show="show" class="gToolTip">
  <!-- ------------------------- -->
  <div :class="(side == 'top') ? (arrowPosition == 'center') ? 'gToolTipText-box gToolTipText-top' : 'gToolTipText-box gToolTipText-top-right' : 'gToolTipText-box gToolTipText-right'">
    <div class="header_modal--modal--3V0h3 modal--modalShadow--HbHkT" style="width: 276px;">
      <div class="">
        <slot name="header"></slot>
        <slot name="body"></slot>
      </div>
    </div>
  </div>
  <!-- ------------------------- -->
</div>
</template>

<script>
export default {
  name: "GgToolTipText",

  props: {
    arrowPosition: {
      type: String,
      default: 'center'
    },
    side: {
      type: String,
      default: 'top'
    },
    show: {
      type: Boolean,
      default: false
    },
    posX: {
      type: Number,
      default: 0,
      required: true
    },
    posY: {
      type: Number,
      default: 0,
      required: true
    }
  },

  data() {
    return {
      axisY: '100%',
      axisX: '50%'
    }
  },

  watch: {
    // side () {
    //   if(this.side == 'top') {
    //     this.axisY = '100%'
    //     this.axisX = '50%'
    //   }
    //   else if(this.side == 'right'){
    //     this.axisY = '50%'
    //     this.axisX = '0%'
    //   }
    // },
    posX () {
      if (this.show) {
        console.log("---1X---")
        console.log(this.posX)
        if(this.side == 'top') {
          console.log("top-x")
          document.getElementsByClassName('gToolTip')[0].style.left = (this.arrowPosition == 'center') ? (this.posX-(276/2))+'px' : (this.posX-220)+'px'
        }
        else if(this.side == 'right'){
          console.log("right-x")
          document.getElementsByClassName('gToolTip')[0].style.right = (50)+'px'
        }
      }
    },
    posY () {
      if (this.show) {
        console.log("---1Y---")
        console.log(this.posY )
        if(this.side == 'top') {
          console.log("top-y")
          document.getElementsByClassName('gToolTip')[0].style.top = 50+'px'
        }
        else if(this.side == 'right') {
          console.log("right-y")
          document.getElementsByClassName('gToolTip')[0].style.top = (this.posY-30)+'px'
        }
      }
    },
  },

  // computed: {
  //   style () {
  //     return 'background: ' + this.top + ';' + '...'
  //   }
  // }
}
</script>

<style scoped>
  .gToolTip{
    position: fixed;
    top: 3em;
    /*right: 1em;*/
    background-color: #fff;
    /*width: 200px;*/
    /*padding: 0.5em;*/
    /*display: inline-flex;*/
    border-radius: .3em;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
  }

  .gToolTipText-left::before {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    left: 0;
    top: 50%;
    border: 15px solid transparent;
    border-left: 0;
    border-right: 15px solid #5494db;
    transform: translate(calc(-100% - 5px), -50%);
  }

  .gToolTipText-top::before {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    left: 50%;
    top: 0;
    border: 15px solid transparent;
    border-top: 0;
    border-bottom: 10px solid #fff;
    transform: translate(-50%, calc(-100% - 0px));
    /*transform: translate(-50%, calc(-100% - 5px));*/
    /*margin-left: -10px;*/
    /*border-width: 5px;*/
  }

  .gToolTipText-top-right::before {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    right: 20px;
    top: 0;
    border: 15px solid transparent;
    border-top: 0;
    border-bottom: 10px solid #fff;
    transform: translate(-50%, calc(-100% - 0px));
    /*transform: translate(-50%, calc(-100% - 5px));*/
    /*margin-left: -10px;*/
    /*border-width: 5px;*/
  }

  .gToolTipText-right::before {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    right: 0;
    top: 35px;
    border: 15px solid transparent;
    border-right: 0;
    border-left: 10px solid #fff;
    transform: translate(calc(100% + 0px), -50%);
  }

  .gToolTipText-bottom::before {
    content: '';
    position: absolute;
    display: block;
    width: 0px;
    left: 50%;
    bottom: 0;
    border: 15px solid transparent;
    border-bottom: 0;
    border-top: 15px solid #5494db;
    transform: translate(-50%, calc(100% + 5px));
  }
</style>
