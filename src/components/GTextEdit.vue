<template>
  <div class="editorContainer">
    <!--editor-->
    <div id="textBox" class="editable" contenteditable="true"></div>
    <textarea wrap="hard" id="hiddenEditor" @keyup="orderOnSentences"  @scroll="paralaxScoll" :placeholder="placeholder" name="" cols="30" rows="10" spellcheck="false"Un utilisateur a un id, un email, un mot_de_passe, un nom, un prénom. Un utilisateur peut s'inscrire, se connecter, et se déconnecter. Une alerte est constituée d'un id, d'un méssage et d'une date. Un utilisateur peut avoir plusieurs alertes et une alerte est destinée a un seul utilisateur. Un utilisateur peut créer plusieurs projets. Un projet contient plusieurs diagrammes. Un diagramme est caractérisé par un id, son type, son nom, son text et une image_xml. A chaque Projet est associé des code et des collaborateurs. Un collaborateur est caractérisé par un id et son un role. Un code contient un id, un langage et du text.</textarea>
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
    }
  },
  data () {
    return {
      startEdit: false,
      nextWord: "yaourt",
      prevKey: null,
      caretPos: null,
      waitingAPIResponse: false
    }
  },
  methods: {
    orderOnSentences(event) {
      if (event.keyCode == 110 || event.keyCode == 13){
        this.refreshDraw()
      }
    },
    refreshDraw () {
      // this.waitingAPIResponse = true
      // guestSocketAPI.post('/token/', {text: document.getElementById("hiddenEditor").value})
      //     .then(response => {
      //       const xml = response.data
      //       this.$emit('newXMLTree', xml)
      //       setTimeout(() => {
      //         this.waitingAPIResponse = false
      //       }, 700);
      //     })
      //     .catch(() => {
      //       // this.displayError('No active account found with the given credentials.', 'alert-no')
      //       this.waitingAPIResponse = false
      //     })
      let xml = "XML DIAGRAM TEXT FORMAT"
      this.$emit('sync', xml)
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
  /*.editorContainer{*/
  /*    width: 540px;*/
  /*    height: 92vh;*/
  /*    position: relative;*/
  /*}*/
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
  /*#app{*/
  /*  display: flex;*/
  /*  justify-content: center;*/
  /*  background-color: #1D263A;*/
  /*  align-items: center;*/
  /*  height: 100vh;*/
  /*}*/
  * {
    user-select: auto !important;
  }

  /*html {*/
  /*  overflow: auto;*/
  /*}*/
  /*body {*/
  /*  position: absolute;*/
  /*  top: 20px;*/
  /*  left: 20px;*/
  /*  bottom: 20px;*/
  /*  right: 20px;*/
  /*  padding: 30px;*/
  /*  overflow-y: scroll;*/
  /*  overflow-x: hidden;*/
  /*}*/

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
