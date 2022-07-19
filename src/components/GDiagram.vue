<template>
  <div v-if="diagramType != null" :id="diagramType"></div>
</template>

<script>
  export default {
    name: "GDiagram",
    props: {
        scale: {
          type: Number,
          default: 100,
        },
        diagramType: {
            type: String,
            default: null,
            required: true
        },
        modelData: {
            type: Object,
            default: null,
            required: true
        },
        width: {
            type: Number,
            default: 300,
        },
        height: {
            type: Number,
            default: 300,
        },
        saveImg: {
          type: Number,
          default: 0
        }
    },
    data () {
        return {
            makeCopy: 0,
            umlDiagram: null,
            xml2: "<UMLClassDiagram name=\"Class diagram\"><UMLClass id=\"A\" x=\"355\" y=\"440\" width=\"110\" height=\"100\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"A\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/><item value=\"mange()\"/></superitem></UMLClass><UMLClass id=\"B\" x=\"193\" y=\"30\" width=\"150\" height=\"100\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"B\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/><item value=\"mecaniser()\"/></superitem></UMLClass><UMLClass id=\"C\" x=\"177\" y=\"180\" width=\"110\" height=\"100\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"C\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/><item value=\"holla()\"/></superitem></UMLClass><UMLClass id=\"D\" x=\"357\" y=\"180\" width=\"100\" height=\"90\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"D\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"E\" x=\"355\" y=\"310\" width=\"100\" height=\"90\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"E\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"F\" x=\"15\" y=\"320\" width=\"100\" height=\"140\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"F\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"G\" x=\"155\" y=\"320\" width=\"100\" height=\"170\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"G\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/><item value=\"code()\"/><item value=\"code()\"/><item value=\"code()\"/></superitem></UMLClass><UMLAssociation id=\"AB\" side_A=\"A\" side_B=\"B\" direction=\"b\"><item id=\"name\" value=\"test\"/><item id=\"multiplicityA\" value=\"1.1\"/><item id=\"multiplicityB\" value=\"1.*\"/><item id=\"roleA\" value=\"\"/><item id=\"roleB\" value=\"\"/></UMLAssociation><UMLGeneralization id=\"BC\" side_A=\"B\" side_B=\"C\"><item id=\"name\" value=\"test\"/></UMLGeneralization><UMLAssociation id=\"CF\" side_A=\"C\" side_B=\"F\" direction=\"\"><item id=\"name\" value=\"\"/><item id=\"multiplicityA\" value=\"\"/><item id=\"multiplicityB\" value=\"\"/><item id=\"roleA\" value=\"\"/><item id=\"roleB\" value=\"\"/></UMLAssociation><UMLAssociation id=\"CG\" side_A=\"C\" side_B=\"G\" direction=\"\"><item id=\"name\" value=\"\"/><item id=\"multiplicityA\" value=\"\"/><item id=\"multiplicityB\" value=\"\"/><item id=\"roleA\" value=\"\"/><item id=\"roleB\" value=\"\"/></UMLAssociation><UMLComposition id=\"BD\" side_A=\"B\" side_B=\"D\"><item id=\"name\" value=\"test\"/></UMLComposition><UMLAggregation id=\"DE\" side_A=\"D\" side_B=\"E\"><item id=\"name\" value=\"test\"/></UMLAggregation><UMLAssociation id=\"EA\" side_A=\"E\" side_B=\"A\" direction=\"b\"><item id=\"name\" value=\"test\"/><item id=\"multiplicityA\" value=\"1.1\"/><item id=\"multiplicityB\" value=\"1.*\"/><item id=\"roleA\" value=\"\"/><item id=\"roleB\" value=\"\"/></UMLAssociation><UMLAssociation id=\"EB\" side_A=\"E\" side_B=\"B\" direction=\"b\"><item id=\"name\" value=\"test\"/><item id=\"multiplicityA\" value=\"1.1\"/><item id=\"multiplicityB\" value=\"1.*\"/><item id=\"roleA\" value=\"\"/><item id=\"roleB\" value=\"\"/></UMLAssociation></UMLClassDiagram>",
            xml4: "<UMLClassDiagram name=\"Class diagram\"><UMLClass id=\"A\" x=\"50\" y=\"100\" width=\"100\" height=\"70\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"A\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"B\" x=\"50\" y=\"200\" width=\"100\" height=\"70\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"B\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"C\" x=\"50\" y=\"300\" width=\"100\" height=\"70\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"C\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"D\" x=\"50\" y=\"400\" width=\"100\" height=\"70\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"D\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"E\" x=\"50\" y=\"500\" width=\"100\" height=\"70\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"E\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass><UMLClass id=\"F\" x=\"50\" y=\"600\" width=\"100\" height=\"70\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><item id=\"name\" value=\"F\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"id\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"code()\"/></superitem></UMLClass></UMLClassDiagram>",
            xml3: "<UMLClassDiagram name=\"Class diagram\"><UMLClass id=\"undefined:UMLClass_3\" x=\"100\" y=\"50\" width=\"113\" height=\"84\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><superitem id=\"stereotypes\" visibleSubComponents=\"false\"/><item id=\"name\" value=\"Vehicle\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"owner\"/><item value=\"capacity\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"getOwner()\"/><item value=\"getCapacity()\"/></superitem></UMLClass><UMLClass id=\"undefined:UMLClass_2\" x=\"30\" y=\"200\" width=\"113\" height=\"58\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><superitem id=\"stereotypes\" visibleSubComponents=\"true\"/><item id=\"name\" value=\"Car\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"num_doors\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"getNumDoors()\"/></superitem></UMLClass><UMLClass id=\"undefined:UMLClass_1\" x=\"400\" y=\"200\" width=\"109\" height=\"58\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><superitem id=\"stereotypes\" visibleSubComponents=\"true\"/><item id=\"name\" value=\"Sailor\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"name\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"getName()\"/></superitem></UMLClass><UMLClass id=\"undefined:UMLClass_0\" x=\"150\" y=\"200\" width=\"109\" height=\"58\" backgroundColor=\"#ffffbb\" lineColor=\"#294253\" lineWidth=\"1\" tagValues=\"\" abstract=\"false\"><superitem id=\"stereotypes\" visibleSubComponents=\"true\"/><item id=\"name\" value=\"Boat\"/><superitem id=\"attributes\" visibleSubComponents=\"true\"><item value=\"mast\"/></superitem><superitem id=\"operations\" visibleSubComponents=\"true\"><item value=\"getMast()\"/></superitem></UMLClass>" +
                "<UMLGeneralizationSet id=\"undefined:UMLGeneralizationSet_0\" side_A=\"undefined:UMLClass_2\" side_B=\"undefined:UMLClass_3\">" +
                "<item id=\"name\" value=\"un test ou pas\"/>" +
                "</UMLGeneralizationSet>" +
                "<UMLGeneralizationSet id=\"undefined:UMLGeneralizationSet_1\" side_A=\"undefined:UMLClass_0\" side_B=\"undefined:UMLClass_3\">" +
                "<item id=\"name\" value=\"\"/>" +
                "</UMLGeneralizationSet>" +
                "<UMLAssociation id=\"undefined:UMLAssociation_2\" side_A=\"undefined:UMLClass_0\" side_B=\"undefined:UMLClass_1\" direction=\"b\">" +
                "<point x=\"259\" y=\"229\"/>" +
                "<point x=\"400\" y=\"229\"/>" +
                "<superitem id=\"stereotype\" visibleSubComponents=\"true\"/>" +
                "<item id=\"name\" value=\"\"/><item id=\"roleA\" value=\"\"/><item id=\"roleB\" value=\"Work on\"/><item id=\"multiplicityA\" value=\"1.1\"/><item id=\"multiplicityB\" value=\"*\"/></UMLAssociation></UMLClassDiagram>",
            xml: "<UMLClassDiagram name='Class diagram'><UMLClass id='undefined:UMLClass_0' x='100' y='50' width='113' height='84' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='Vehicle'/><superitem id='attributes' visibleSubComponents='true'><item value='owner'/><item value='capacity'/></superitem><superitem id='operations' visibleSubComponents='true'><item value='getOwner()'/><item value='getCapacity()'/></superitem></UMLClass><UMLClass id='undefined:UMLClass_1' x='30' y='200' width='113' height='58' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='Car'/><superitem id='attributes' visibleSubComponents='true'><item value='num_doors'/></superitem><superitem id='operations' visibleSubComponents='true'><item value='getNumDoors()'/></superitem></UMLClass><UMLClass id='undefined:UMLClass_3' x='400' y='200' width='109' height='58' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='Sailor'/><superitem id='attributes' visibleSubComponents='true'><item value='name'/></superitem><superitem id='operations' visibleSubComponents='true'><item value='getName()'/></superitem></UMLClass><UMLClass id='undefined:UMLClass_2' x='150' y='200' width='109' height='58' backgroundColor='#ffffbb' lineColor='#294253' lineWidth='1' tagValues='' abstract='false'><superitem id='stereotypes' visibleSubComponents='true'/><item id='name' value='Boat'/><superitem id='attributes' visibleSubComponents='true'><item value='mast'/></superitem><superitem id='operations' visibleSubComponents='true'><item value='getMast()'/></superitem></UMLClass><UMLGeneralizationSet id='undefined:UMLGeneralizationSet_0' side_A='undefined:UMLClass_1' side_B='undefined:UMLClass_0'><point x='101.31751824817519' y='200'/><point x='122.39416058394161' y='158.75'/><point x='126.6094890510949' y='150.5'/><point x='135.04014598540147' y='134'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value=''/></UMLGeneralizationSet><UMLGeneralizationSet id='undefined:UMLGeneralizationSet_1' side_A='undefined:UMLClass_2' side_B='undefined:UMLClass_0'><point x='194.33941605839416' y='200'/><point x='179.88686131386862' y='158.75'/><point x='176.99635036496352' y='150.5'/><point x='171.21532846715328' y='134'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value=''/></UMLGeneralizationSet><UMLAssociation id='undefined:UMLAssociation_2' side_A='undefined:UMLClass_2' side_B='undefined:UMLClass_3' direction='b'><point x='259' y='229'/><point x='400' y='229'/><superitem id='stereotype' visibleSubComponents='true'/><item id='name' value=''/><item id='roleA' value=''/><item id='roleB' value='Work on'/><item id='multiplicityA' value='1.1'/><item id='multiplicityB' value='*'/></UMLAssociation></UMLClassDiagram>"
        }
    },
    methods: {
        initDraw () {
            // eslint-disable-next-line no-undef
            this.umlDiagram = new UMLClassDiagram({
                id: this.diagramType,

                background: 'transparent'
            });
            this.umlDiagram.setXMLString(this.xml2)
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
            // this.umlDiagram.setHeight(this.height)
            // this.umlDiagram. notifyDraw() ()
            // this.umlDiagram.setXMLString(this.xml2)
            // this.umlDiagram. notifyDraw() ()
            // this.umlDiagram.draw();



            // if (this.diagramData != null) {
            //     var nodeDataArray = this.diagramData.nodeDataArray
            //     // var linkDataArray = this.diagramData.linkDataArray
            //     var tables = {}
            //     for (let i = 0; i < nodeDataArray.length; i++) {
            //         // eslint-disable-next-line no-undef
            //         var t = new UMLClass({ x:100*i, y:50 })
            //         t.setName(nodeDataArray.name);
            //         for (let j = 0; j < nodeDataArray.properties.length; j++) {
            //             t.addAttribute( nodeDataArray.properties.name );
            //         }
            //         for (let j = 0; j < nodeDataArray.methods.length; j++) {
            //             t.addOperation( nodeDataArray.methods.name+'()' );
            //         }
            //         tables[nodeDataArray.name] = t
            //         this.umlDiagram.addElement(tables[nodeDataArray.name]);
            //     }
            //     //Draw the diagram
            //     this.diagramData.draw();
            //
            //     //Interaction is possible (editable)
            //     this.diagramData.interaction(true);
            // }
        }
    },
    mounted () {
        this.initDraw()
    },
    watch: {
        modelData() {
            this.refreshDraw()
        },
        width() {
            this.refreshDraw()
        },
        saveImg() {
          if(this.saveImg != this.makeCopy) {
            this.umlDiagram.stopEvents()
            this.umlDiagram.draw()
            let mainCanvas = document.getElementById(this.diagramType).children[0]
            let url = mainCanvas.toDataURL( 'image/png' )

            let link = document.createElement('a')
            link.setAttribute('download', this.umlDiagram.getName().replaceAll(' ', '-') + '[udesign.me].png');
            link.setAttribute('href', url);
            link.click();

            window.open( url, '_blank' );
          }
          this.makeCopy = this.saveImg
        },
        scale() {
          document.getElementById(this.diagramType).style.scale=(this.scale/100)
        }
    },
    beforeCreate () {
      //
    },
  }
</script>

<style scoped>
canvas {
    width: 100%;
    height: 100%;
}
</style>
