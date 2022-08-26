<template>
  <div class="editorContainer">
    <!--editor-->
    <!--<div id="textBox" class="editable" contenteditable="true"></div>  -->
    <!--<div v-if="!readonly" v-bind:innerHTML="innerPlainText" wrap="hard" id="hiddenEditor" class="hiddenEditor" @keyup="orderOnSentences" :placeholder="placeholder" contentEditable=true></div>
    <div v-else @keypress="alert('You only have read acces on this project.')" v-bind:innerHTML="innerPlainText" wrap="hard" id="hiddenEditor" class="hiddenEditor" @keyup="orderOnSentences"  @scroll="paralaxScoll" :placeholder="placeholder" contenteditable="false" sCanEdit="false"></div>-->
    <textarea v-if="!readonly" v-model="innerPlainText" wrap="hard" id="hiddenEditor" class="hiddenEditor" @keyup="orderOnSentences"  @scroll="paralaxScoll" :placeholder="placeholder" name="" cols="30" rows="10"></textarea>
    <textarea v-else @keypress="alert('You only have read acces on this project.')" readonly v-model="innerPlainText" wrap="hard" id="hiddenEditor" class="hiddenEditor" @keyup="orderOnSentences"  @scroll="paralaxScoll" :placeholder="placeholder" name="" cols="30" rows="10" ></textarea>
    <!--float div-->
    <!-- SMART AUTO COMPLETE BASED ON UML DATASET -->
    <div v-show="nextWord != null && startEdit" class="wordPlane" id="mainWordPlane">
      {{ this.nextWord }}
    </div>
    <!-- ---------------------------------------- -->
  </div>
</template>

<script>
// eslint-disable-next-line no-undef
// $Spelling.DefaultDictionary = 'Francais'
// // eslint-disable-next-line no-undef
// $Spelling.SpellCheckAsYouType('hiddenEditor')

// eslint-disable-next-line no-unused-vars
//import { caret } from 'jquery.caret'
// import { guestSocketAPI } from '../api/connector'
const Typo = require('typo-js');
var langDict = new Typo("fr_FR", false, false, {
  dictionaryPath: "/utils/typo-js/dictionaries"
});
import { getAPI } from '@/api/axios-api.js'

export default {
  name: "GTextEdit",
  components: {
  },
  props: {
    placeholder: {
      type: String,
      default: '...'
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
      innerPlainText: this.plainText
    }
  },
  methods: {
    orderOnSentences() {
      // this.typos_tracker(event)
      // console.log(event)
      if (event.keyCode == 110 || event.keyCode == 13 || event.key == "."){
        this.refreshDraw()
      }
    },
    get_plain_text(div_id) {
      let regex = /(<([^>]+)>)/ig
      let html = document.getElementById(div_id).innerHTML
      return html.replace(regex, " ")
    },
    typos_tracker() {
      let text = this.get_plain_text('hiddenEditor')
      let arrayText = text.split(' ')
      let formatedText = []
      for(let i = 0; i<arrayText.length; i++) {
        let word = arrayText[i]
        let wordHtml = document.createElement('span')
        wordHtml.innerHTML=word+"&nbsp"

        console.log(langDict.check(word))
        if(!langDict.check(word)) {
          let list_of_suggestion = langDict.suggest(word)
          console.log(word)
          console.log(list_of_suggestion)
          console.log("---")
          wordHtml.setAttribute('class', 'gTypos')
          wordHtml.onclick=()=>{
            alert(list_of_suggestion)
          }
          formatedText.push(wordHtml)
        }
        else{
          formatedText.push(wordHtml)
        }
        document.getElementById('hiddenEditor').replaceChildren(...formatedText)
      }
      console.log(formatedText)
      // var range = window.getSelection().getRangeAt(0);
      // var end_node = range.endContainer;
      // var end = range.endOffset;
      // if(end_node != this){
      //     var text_nodes = this.get_text_nodes_in(this);
      //     for (var i = 0; i < text_nodes.length; ++i) {
      //         if(text_nodes[i] == end_node){
      //             break;
      //         }
      //         end += text_nodes[i].length;
      //     }
      // }
      // var html = $(this).html();
      // if(/\&nbsp;$/.test(html) && $(this).text().length == end){
      //     end = end - 1;
      //     set_range(end,end,this);
      //     return;
      // }
      // var filter = html.replace(/(<b>)?\/([^<\/]*)(<\/b>)?/g, '\/$2');
      // console.log(filter);
      // filter = filter.replace(/(<b>)?([^<\/]*)\/(<\/b>)?/g, '$2\/');
      // console.log(filter);
      // filter = filter.replace(/(<b>)?\/([^<\/]*)\/(<\/b>)?/g, '<b>\/$2\/<\/b>');
      // console.log(filter);
      // if(!/\&nbsp;$/.test($(this).html())){
      //     filter += '&nbsp;';
      // }
      // $(this).html(filter);
      // set_range(end,end,this);
    },
    gWordSuggest(word = []) {
      console.log(word)
    },
    get_text_nodes_in(node) {
      var text_nodes = [];
      if (node.nodeType === 3) {
        text_nodes.push(node);
      } else {
        var children = node.childNodes;
        for (var i = 0, len = children.length; i < len; ++i) {
            text_nodes.push.apply(text_nodes, this.get_text_nodes_in(children[i]));
        }
      }
      return text_nodes;
    },
    set_range(start, end, element) {
      var range = document.createRange();
      range.selectNodeContents(element);
      var text_nodes = this.get_text_nodes_in(element);
      var foundStart = false;
      var char_count = 0, end_char_count;

      for (var i = 0; i<text_node.length; i++) {
        var text_node = text_nodes[i];
        end_char_count = char_count + text_node.length;
        if (!foundStart && start >= char_count && (start < end_char_count || (start === end_char_count && i < text_nodes.length))) {
          range.setStart(text_node, start - char_count);
          foundStart = true;
        }
        if (foundStart && end <= end_char_count) {
          range.setEnd(text_node, end - char_count);
          break;
        }
        char_count = end_char_count;
      }

      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
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
      let foregroundEditor = document.getElementsByClassName("hiddenEditor")[0]
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
    const ele = document.getElementsByClassName("hiddenEditor")[0]
    // const ele1 = document.getElementById('textBox')
    // ele.spellcheck = false;
    // ele1.spellcheck = true;
    ele.focus();
    if (navigator.appVersion.indexOf("Chrome/") !== -1) {
      document.getElementsByClassName("hiddenEditor")[0].style.overflowX='unset';
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
  [contentEditable=true]:empty:not(:focus)::before{
    content:attr(placeholder)
  }
  .hiddenEditor {
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

    width: 100%;
    height: 100%;
    background-color: transparent !important;
    border: none;
        border-top-color: currentcolor;
        border-top-style: none;
        border-top-width: medium;
    outline: none;
    padding: 0.5em 1em;
    border-top: 3px solid gray;
    color: #fff;
  }
  .hiddenEditor:focus{
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
  .gTypos{
    color: red !important;
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
