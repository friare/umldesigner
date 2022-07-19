<template>
  <div class="editorContainer">
    <!--editor-->
    <div id="textBox" class="editable" contenteditable="true"></div>
    <textarea wrap="hard" id="hiddenEditor"  @click="resetPreviousKey" @keyup="orderOnSentences" @keypress="keyBoardListener" @scroll="paralaxScoll" :placeholder="placeholder" name="" cols="30" rows="10" spellcheck="false"></textarea>
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
const Typo = require('typo-js');
var langDict = new Typo("fr_FR", false, false, {
  dictionaryPath: "/utils/typo-js/dictionaries"
});

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
    resetPreviousKey () {
      if(this.caretPos != this.cursorPosition()) {
        this.prevKey = null
      }
            // alert('ok')
    },
    paralaxScoll () {
      let foregroundEditor = document.getElementById("hiddenEditor")
      let backgroundEditor = document.getElementById("textBox")
      backgroundEditor.scrollLeft = foregroundEditor.scrollLeft;
    },
    debug (t) {
      console.log(t)
    },
    updateBackgroundEditor () {
      let hiddenEditor = document.getElementById("hiddenEditor")

      let plainText = hiddenEditor.value.replace(/<div>/gi,'').replace(/<\/div>/gi,'').replace('&nbsp;', '').replace(/<[^>]*>?/gm, '').replaceAll("\n", " \n")
      // let plainText = hiddenEditor.innerHTML.replace(/<div>/gi,'').replace('&nbsp;', '').replace(/<[^>]*>?/gm, '').replace(/<\/div>/gi," \n") //.replaceAll("\n", " \n")
      console.log("plainText")
      console.log(plainText)
      console.log("plainText")
      if (plainText.trim().length != 0) {
        let wordList = plainText.split(" ")
        this.debug("wordList")
        this.debug(wordList)
        this.debug("wordList")
        let newWordList = []
        for (const wordListKey in wordList) {
          if(wordList[wordListKey].trim().length != 0 && !langDict.check(wordList[wordListKey])) {
            let startTag = "<span class='typos'>"
            let endTag = "</span>"
            newWordList.push(startTag + wordList[wordListKey] + endTag)
          } else {
            if(wordList[wordListKey].trim().length == 0)
              newWordList.push(" ")
            else
              newWordList.push(wordList[wordListKey])
          }
        }
        this.debug(newWordList)
        let newLineSentence = newWordList.join("&nbsp;")
        newLineSentence = newLineSentence.replaceAll("\n", "<br>")
        this.debug("newLineSentence")
        this.debug(newLineSentence)
        this.debug("newLineSentence")
        document.getElementById("textBox").innerHTML = newLineSentence
      }
      else {
        document.getElementById("textBox").innerHTML = ""
      }
    },
    textModified () {
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      //console.log(rect)
      this.setAutoCompleteBoxPos(rect.x, rect.y)
      //this.startEdit = true;
      //console.log('------------')
      // console.log('------------')
      // console.log($('#textBox').caret('position'))
      // console.log('------------')
    },
    keyBoardListener (event) {
      this.debug(event)
      if (event.keyCode == 46 || event.keyCode == 8) {
        this.prevKey = null
      }
      if (this.prevKey == 32 && event.keyCode === 32) {
        event.preventDefault()
      }
      this.prevKey = event.keyCode
      this.caretPos = this.cursorPosition()
      // if (event.keyCode === 9) {
      //   event.preventDefault()
      // }
      // if (event.keyCode === 13) {
      //   // event.preventDefault()
      //   // this.startEdit = false;
      // }
      // else if (event.keyCode === 9 && this.nextWord != null) {
      //   this.insertTextAtCaret(this.nextWord)
      //   this.startEdit = false;
      // }
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

      //var pos = sel.toString().length;
      //this.debug(pos)

      if(sel.anchorNode != undefined)
        sel.collapseToEnd();

      this.debug(sel.anchorOffset)
      return sel.anchorOffset;
    },
    // eslint-disable-next-line no-unused-vars
    setCaret (i) {
      var el = document.getElementById("textBox")
      var range = document.createRange()
      var sel = window.getSelection()

      range.setStart(el.childNodes[0], this.cursorPosition())
      range.collapse(true)

      sel.removeAllRanges()
      sel.addRange(range)
    },
    setCaretPosition (el, pos) {
      // Loop through all child nodes
      for(var node of el.childNodes){
        if(node.nodeType == 3){ // we have a text node
          if(node.length >= pos){
            // finally add our range
            var range = document.createRange(),
                    sel = window.getSelection();
            range.setStart(node,pos);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
            return -1; // we are done
          }else{
            pos -= node.length;
          }
        } else {
          pos = this.setCaretPosition (node, pos);
          if (pos == -1) {
            return -1; // no need to finish the for loop
          }
        }
      }
      return pos; // needed because of recursion stuff
    },
    getCaretPosition (ctrl) {
      var CaretPos = 0;   // IE Support
      if (document.selection) {
        ctrl.focus();
        var Sel = document.selection.createRange();
        Sel.moveStart('character', -ctrl.value.length);
        CaretPos = Sel.text.length;
      }
      // Firefox support
      else if (ctrl.selectionStart || ctrl.selectionStart == '0')
        CaretPos = ctrl.selectionStart;
      return (CaretPos);
    },
    typosTracker (event) {
      let oldPos = this.cursorPosition()
      let textBox = document.getElementById("textBox")
      if (event.keyCode === 13) {
        // textBox.innerHTML += "<br>"
        // alert(oldPos)
        // this.setCaretPosition(textBox, oldPos+4)
      }
      else {
        // textBox.innerHTML = textBox.innerHTML.replace(/<div>/gi,'').replace(/<\/div>/gi,'').replace('&nbsp;', '')
        // console.log(textBox.innerHTML)
        // console.log($().jquery)
        // let decalPos = 0
        //
        // let plainText = textBox.innerHTML.replace(/<[^>]*>?/gm, '')
        // if (plainText.trim().length != 0) {
        //   let wordList = plainText.split(" ")
        //   this.debug("wordList")
        //   this.debug(wordList)
        //   this.debug("wordList")
        //   let newWordList = []
        //   for (const wordListKey in wordList) {
        //     if(wordList[wordListKey].trim().length != 0 && !langDict.check(wordList[wordListKey])) {
        //       let startTag = "<span class='typos'>"
        //       let endTag = "</span>"
        //       newWordList.push(startTag + wordList[wordListKey] + endTag)
        //       decalPos += (startTag.length + endTag.length)
        //       console.log(decalPos)
        //       // newWordList.push(wordList[wordListKey])
        //     } else {
        //       if(wordList[wordListKey].trim().length == 0)
        //         newWordList.push(" ")
        //       else
        //         newWordList.push(wordList[wordListKey])
        //     }
        //   }
        //   this.debug(newWordList)
        //   let newLineSentence = newWordList.join("&nbsp;")
        //   textBox.innerHTML = newLineSentence
        // }
        this.setCaretPosition(textBox, oldPos)
      }

      // // old cursor pos
      // console.log('------------')
      // // var oldPos = $('#textBox').caret('position')
      // var oldPos = $('#textBox').caret('position')
      // console.log(oldPos)
      // console.log($('#textBox').caret('offset'))
      // console.log(this.cursorPosition())
      // console.log('------------')
      // //this.cursorPosition()
      // this.debug(document.getElementById("textBox").childNodes)
      // // SENTENCES
      // const rootDiv = document.getElementById('textBox')
      // let eachDivSentences = rootDiv.children;
      // if (eachDivSentences.length == 0)
      //   return null
      // for (let i = 0; i < eachDivSentences.length; i++) {
      //   //let textLine = eachDivSentences[i].innerHTML.replace(/\+/gm, '')
      //   // let textLine = eachDivSentences[i].innerHTML.replace(/<span class='typos'[^>]*>?/gm, '')
      //   let textLine = eachDivSentences[i].innerHTML.replace(/<[^>]*>?/gm, '')
      //   if (textLine.trim().length != 0) {
      //     let wordList = textLine.split(" ")
      //     let newWordList = []
      //     for (const wordListKey in wordList) {
      //       this.debug(wordList[wordListKey])
      //       this.debug('++++++++++++++++++++')
      //       if(wordList[wordListKey].trim().length != 0 && !langDict.check(wordList[wordListKey])) {
      //         newWordList.push("<span class='typos'>" + wordList[wordListKey] + "</span>")
      //       } else {
      //         newWordList.push(wordList[wordListKey])
      //       }
      //     }
      //     let newLineSentence = newWordList.join(' ')
      //     rootDiv.children[i].innerHTML = newLineSentence
      //     // this.setCaret(i)
      //     //$('#textBox').children().eq(i).caret('position', oldPos)
      //     this.setCaretPosition(document.getElementById("textBox"), 50)
      //     console.log('+++++'+i+'++++++')
      //     // console.log($('#textBox').children().eq(i).caret('position'))
      //     console.log($('#textBox').caret('position'))
      //     console.log('++++++++++++')
      //     this.debug(textLine)
      //   }
      // }
      // $('#textBox').caret('position', oldPos)
      // console.log('++++++++++++')
      // console.log($('#textBox').caret('position'))
      // console.log('++++++++++++')
      this.debug('------')
    }
  },
  mounted() {
    const ele = document.getElementById('hiddenEditor')
    const ele1 = document.getElementById('textBox')

    ele.spellcheck = false;
    ele1.spellcheck = false;
    ele.focus();

    console.log(langDict)
    if(!langDict.check('tuyoterie')) {
      console.log(langDict.suggest('tuyoterie'))
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
    overflow-x: scroll !important;
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
</style>
