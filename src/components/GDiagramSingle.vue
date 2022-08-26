<template>
  <div>
  <div @mouseup="saveCustimizedXML" style="width: 100% !important;" v-if="diagramType != null" :id="diagramType"></div>
  <a v-show="false" @click="saveImg" id="saveImg">download</a>
  </div>
</template>

<script>
  export default {
    name: "GDiagramSingle",
    props: {
      scale: {
        type: Number,
        default: 100,
      },
      diagramType: {
          type: String,
          default: "classDiagram",
          required: true
      },
      width: {
          type: Number,
          // default: 300,
      },
      height: {
          type: Number,
          default: 800,
      },
    },
    data () {
      return {
        makeCopy: 0,
        umlDiagram: null,
        xml2: sessionStorage.getItem('xml'),
      }
    },
    methods: {
      initDraw () {
        // eslint-disable-next-line no-undef
        this.umlDiagram = new UMLClassDiagram({
          id: this.diagramType,
          width: 1000,
          background: 'transparent'
        });
        this.umlDiagram.setXMLString(this.xml2)
        this.umlDiagram.setName('umldesigner.app')
        //Draw the diagram
        this.umlDiagram.draw();

        //Interaction is possible (editable)
        this.umlDiagram.interaction(true);
      },
      refreshDraw () {
        this.umlDiagram.setUpdateHeightCanvas(true)
        this.umlDiagram.setUpdateWidthCanvas(true)
        this.umlDiagram.updateHeightCanvas()
        this.umlDiagram.updateWidthCanvas()
        this.umlDiagram.notifyDraw()
      },
      saveCustimizedXML () {
        sessionStorage.setItem('xml', this.umlDiagram.getXMLString())
      },
      saveImg() {
        this.umlDiagram.stopEvents()
        this.umlDiagram.draw()
        let mainCanvas = document.getElementById(this.diagramType).children[0]
        let url = mainCanvas.toDataURL( 'image/png' )

        let link = document.createElement('a')
        link.setAttribute('download', this.umlDiagram.getName().replaceAll(' ', '-') + '[umldesigner.app].png');
        link.setAttribute('href', url);
        link.click();

        window.open( url, '_blank' );
      },
    },
    mounted () {
        this.initDraw()
        this.refreshDraw()
    },
    watch: {
        xml: function() {
            this.refreshDraw()
            alert(this.xml)
        },
        width() {
            this.refreshDraw()
        },
        scale() {
          document.getElementById(this.diagramType).style.scale=(this.scale/100)
        }
    },
    beforeCreate () {
      // var scripts = [
      //     "/utils/jsUML2/script/UDCore.js",
      //     "/utils/jsUML2/script/UDModules.js"
      // ];
      // scripts.forEach(script => {
      //     let tag = document.createElement("script");
      //     document.head.appendChild(tag);
      //     tag.addEventListener('load', () => {
      //       this.extFileLoaded += 1;
      //     });
      //     tag.setAttribute("src", script);
      // });
    },
  }
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
}
body, html, div{
  background-color: transparent !important;
}
</style>
