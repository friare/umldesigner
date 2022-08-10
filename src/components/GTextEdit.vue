<template>
  <div class="editorContainer">
    <!--editor-->
    <div id="textBox" class="editable" contenteditable="true"></div>
    <textarea v-if="!readonly" v-model="innerPlainText" wrap="hard" id="hiddenEditor" @keyup="orderOnSentences"  @scroll="paralaxScoll" :placeholder="placeholder" name="" cols="30" rows="10" spellcheck="false"></textarea>
    <textarea @keypress="alert('You only have read acces on this project.')" v-else readonly v-model="innerPlainText" wrap="hard" id="hiddenEditor" @keyup="orderOnSentences"  @scroll="paralaxScoll" :placeholder="placeholder" name="" cols="30" rows="10" spellcheck="false"></textarea>
    <!--float div-->
    <div v-show="nextWord != null && startEdit" class="wordPlane" id="mainWordPlane">
      {{ this.nextWord }}
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
//import { caret } from 'jquery.caret'
// import { guestSocketAPI } from '../api/connector'
// const Typo = require('typo-js');
// var langDict = new Typo("fr_FR", false, false, {
//   dictionaryPath: "/utils/typo-js/dictionaries"
// });
import { getAPI } from '@/api/axios-api.js'
import { getAPI } from '@/api/axios-api.js'

export default {
  name: "GTextEdit",
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: 'Insérer du texte ici'
    },
    action: {
      type: String,
      default: ''
    },
    plainText: {
      type: String,
      required: true
    },
    getText: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      startEdit: false,
      nextWord: "yaourt",
      prevKey: null,
      caretPos: null,
      waitingAPIResponse: false,
      innerPlainText: this.plainText,
      innerPlainText: this.plainText
    }
  },
  methods: {
    orderOnSentences(event) {
      if (event.keyCode == 110 || event.keyCode == 13){
        this.refreshDraw()
      }
    },
    refreshDraw () {
      this.$emit('startSync')
      getAPI.post('/uml/class-diagram-xml', {
        text: this.innerPlainText.replace(/\n/g, "")
      })
      .then(response => {
        const xml = response.data.xml
        this.$emit('sync', xml)
      })
      // .catch(() => {
      //   // this.displayError('No active account found with the given credentials.', 'alert-no')
      //   this.waitingAPIResponse = false
      // })
      // let xml = "XML DIAGRAM TEXT FORMAT"
      // this.$emit('sync', xml)
    },
    paralaxScoll () {
      let foregroundEditor = document.getElementById("hiddenEditor")
      let backgroundEditor = document.getElementById("textBox")
      backgroundEditor.scrollLeft = foregroundEditor.scrollLeft;
    },
    setAutoCompleteBoxPos (x, y) {
      const box = document.getElementById('mainWordPlane');
      box.style.left = (x) + "px";
      box.style.top = (y-2) + "px";
    },
    insertTextAtCaret (text) {
      var sel, range;
      if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          range.insertNode( document.createTextNode(text) );
        }
      } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
      }
    },
    cursorPosition () {
      var sel = document.getSelection();
      this.debug(sel)

      if(sel.anchorNode != undefined)
        sel.collapseToEnd();

      console.log(sel.anchorOffset)
      return sel.anchorOffset;
    },
  },
  mounted() {
    const ele = document.getElementById('hiddenEditor')
    const ele1 = document.getElementById('textBox')
    ele.spellcheck = false;
    ele1.spellcheck = true;
    ele.focus();
    if (navigator.appVersion.indexOf("Chrome/") !== -1) {
      document.getElementById('hiddenEditor').style.overflowX='unset';
    }
  },
  watch: {
    action() {
      this.refreshDraw()
    },
    getText: function () {
      this.$emit('saveDiagram', this.innerPlainText)
    }
  }
}
</script>

<style scoped>
  #hiddenEditor {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 9px 11px;
    word-wrap: anywhere !important;
    caret-color: #fff;
    overflow-x: scroll;
    overflow-y: scroll !important;
    /*color: white !important;*/
  }
  #hiddenEditor:focus{
    outline: none;
  }
  #textBox {
    width: 100%;
    height: 100%;
    /*border: 1px #000000 solid;*/
    padding: 12px;
    color: #fff;
    word-wrap: anywhere !important;
    /*word-wrap: anywhere !important;*/

    /*caret-color: #1D263A;*/
    caret-color: #fff;

    overflow-x: scroll !important;
    overflow-y: scroll !important;
  }
  .editorContainer{
    width: 100%;
    height: calc(100% - 70px);
    position: relative;
  }
  .editable {
    position: relative;
  }
  .editorContainer {
    /*position: relative;*/
  }
  .wordPlane {
    position: absolute;
    /*padding: 12px;*/
    font-weight: bold;
    /*background-color: #6b7798;*/
    border-radius: 3px;
    min-width: 2em;
    min-height: 19px;
    top: 39.83332824707031px;
    left: 227.36666870117188px;
  }
</style>
<style>
  .typos{
    color: #fd6e6e !important;
    cursor: pointer !important;
    display: inline;
  }

  * {
    user-select: auto !important;
  }

  /* Let's get this party started */
  text-area::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  text-area::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  /* Handle */
  text-area::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255,0,0,0.8);
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  }
  text-area::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4);
  }
</style>
