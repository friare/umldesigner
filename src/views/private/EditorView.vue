<template>
  <div class='udesign'>
    <div class="app-container">
      <div class="edit-zone resizable-left">
        <header class="edit-header space-between darkula">
          <div class="d-flex">
            <button class="u-btn u-btn-secondary" @click="goBackB"><i class="fa fa-home"></i></button>
            <div class="btn-lot d-none d-md-flex">
              <button @click.stop="orderSync" class="u-btn no-border np">
                <img v-if="waitingApiTextSync"  width="50" src="@/assets/image/preloader/load2.gif" alt="loader"/>
                <i v-elsemg v-if="waitingApiTextSync"  width="50" src="@/assets/image/preloader/load2.gif" alt="loader"/>
                <i v-else class="fa fa-sync-alt"></i>
              </button>
            </div>
          </div>
          <!-- -------------------------------- -->
          <div v-if="diagramData != null" class="select_mate d-none d-md-block" data-mate-select="active">
              <div class="d-flex align-items-center" v-if="diagramData.type == 'USE_CASE'" value="1">
                &nbsp;<svg class="width15" alt="uml chart type icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M450 555 c0 -24 -3 -25 -58 -25 -80 0 -90 -13 -94 -115 l-3 -80 -57 -3 -58 -3 0 36 0 35 -65 0 -65 0 0 -80 0 -80 65 0 65 0 0 35 0 35 60 0 60 0 0 -83 c0 -104 10 -117 93 -117 54 0 57 -1 57 -25 0 -24 2 -25 70 -25 l70 0 0 60 0 60 -70 0 c-68 0 -70 -1 -70 -25 0 -23 -3 -25 -49 -25 -70 0 -81 14 -81 106 l0 74 64 0 c59 0 65 -2 68 -22 3 -21 9 -23 71 -26 l67 -3 0 61 0 60 -70 0 c-68 0 -70 -1 -70 -25 0 -25 -1 -26 -62 -23 l-63 3 -3 71 c-4 89 8 104 79 104 46 0 49 -2 49 -25 0 -24 2 -25 70 -25 l70 0 0 60 0 60 -70 0 c-68 0 -70 -1 -70 -25z m120 -35 c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z m-420 -200 l0 -60 -40 0 -40 0 0 60 0 60 40 0 40 0 0 -60z m418 3 c3 -33 3 -33 -42 -33 -46 0 -46 0 -46 36 l0 35 43 -3 c39 -3 42 -5 45 -35z m2 -203 c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z"/>
                  </g>
                </svg>
                &nbsp;<span class="umlTypeName">USE CASE</span>
              </div>
              <div class="d-flex align-items-center" v-else-if="diagramData.type == 'CLASS'" value="2">
                &nbsp;<svg class="width15" alt="uml chart type icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M450 555 c0 -24 -3 -25 -58 -25 -80 0 -90 -13 -94 -115 l-3 -80 -57 -3 -58 -3 0 36 0 35 -65 0 -65 0 0 -80 0 -80 65 0 65 0 0 35 0 35 60 0 60 0 0 -83 c0 -104 10 -117 93 -117 54 0 57 -1 57 -25 0 -24 2 -25 70 -25 l70 0 0 60 0 60 -70 0 c-68 0 -70 -1 -70 -25 0 -23 -3 -25 -49 -25 -70 0 -81 14 -81 106 l0 74 64 0 c59 0 65 -2 68 -22 3 -21 9 -23 71 -26 l67 -3 0 61 0 60 -70 0 c-68 0 -70 -1 -70 -25 0 -25 -1 -26 -62 -23 l-63 3 -3 71 c-4 89 8 104 79 104 46 0 49 -2 49 -25 0 -24 2 -25 70 -25 l70 0 0 60 0 60 -70 0 c-68 0 -70 -1 -70 -25z m120 -35 c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z m-420 -200 l0 -60 -40 0 -40 0 0 60 0 60 40 0 40 0 0 -60z m418 3 c3 -33 3 -33 -42 -33 -46 0 -46 0 -46 36 l0 35 43 -3 c39 -3 42 -5 45 -35z m2 -203 c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z"/>
                  </g>
                </svg>
                &nbsp;<span class="umlTypeName">CLASS</span> 
              </div>
              <div class="d-flex align-items-center" v-else-if="diagramData.type == 'SEQUENCE'" value="4">
                &nbsp;<svg class="width15" alt="uml chart type icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="64.000000pt" height="64.000000pt" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                    <path d="M450 555 c0 -24 -3 -25 -58 -25 -80 0 -90 -13 -94 -115 l-3 -80 -57 -3 -58 -3 0 36 0 35 -65 0 -65 0 0 -80 0 -80 65 0 65 0 0 35 0 35 60 0 60 0 0 -83 c0 -104 10 -117 93 -117 54 0 57 -1 57 -25 0 -24 2 -25 70 -25 l70 0 0 60 0 60 -70 0 c-68 0 -70 -1 -70 -25 0 -23 -3 -25 -49 -25 -70 0 -81 14 -81 106 l0 74 64 0 c59 0 65 -2 68 -22 3 -21 9 -23 71 -26 l67 -3 0 61 0 60 -70 0 c-68 0 -70 -1 -70 -25 0 -25 -1 -26 -62 -23 l-63 3 -3 71 c-4 89 8 104 79 104 46 0 49 -2 49 -25 0 -24 2 -25 70 -25 l70 0 0 60 0 60 -70 0 c-68 0 -70 -1 -70 -25z m120 -35 c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z m-420 -200 l0 -60 -40 0 -40 0 0 60 0 60 40 0 40 0 0 -60z m418 3 c3 -33 3 -33 -42 -33 -46 0 -46 0 -46 36 l0 35 43 -3 c39 -3 42 -5 45 -35z m2 -203 c0 -29 -2 -30 -45 -30 -43 0 -45 1 -45 30 0 29 2 30 45 30 43 0 45 -1 45 -30z"/>
                  </g>
                </svg>
                &nbsp;<span class="umlTypeName">SEQUENCE</span> 
              </div>
            <span class="icon_select_mate" >
              <i style="cursor: pinter;" @click="setOrderGetText" class="fa fa-save"></i>
            </span>
            <div class="cont_list_select_mate">
              <ul class="cont_select_int">  </ul>
            </div>
          </div>
          <!-- -------------------------------- -->
        </header>

        <!-- DRAW EDITOR HERE  -->
        <!-- ----------------- -->
        <g-text-edit v-if="waitingApiTextSync" @sync="syncDiagram" @saveDiagram="saveDiagram" :getText="orderGetText" plainText="" :action="syncOrder" placeholder="Patientez un instant."></g-text-edit>
        <g-text-edit v-else @sync="syncDiagram" @saveDiagram="saveDiagram" :getText="orderGetText" @startSync="waitingApiXmlSync=true" :plainText="plainText" :action="syncOrder" placeholder="Insérer du texte ici"></g-text-edit>
        <!-- ----------------- -->

        <div class="resizer-zone resizer-right">
          <div class="resizer"></div>
        </div>
        <div class="pb-2 app-data d-flex align-items-center justify-content-between darkula">
          <div><a class="github" href="https://github.com/Genereux-akotenou" target="_blank"><i class="fa2 fa-github u-icon"></i></a></div>
          <div class="no-select">v1.0.0</div>
        </div>
      </div>
      <div class="diagram-zone resizable-right" @click.stop="closeToolTip">
        <header id="horzMenu" class="justify-content-between d-none d-md-flex">
          <div>
            <button v-if="waitingApiXmlSync" @click.prevent="" class="u-btn no-border np">
              <img  width="50" src="@/assets/image/preloader/load2.gif" alt="loader"/>
            </button>
            <span v-if="saved" style="color: green;padding: 1em .4em 0 .4em;position: relative;top: .3em;">
              ENREGISTRÉ
            </span>
          </div>
          <div class="text-right d-none d-md-flex">
            <!--<div class="d-flex">
              <div class="btn-lot d-fl">
                <button class="u-btn u-btn-user no-border avatar-online">
                  <img class="u-icon" src="../../assets/image/avatars/avatar3.jpeg" alt="">
                </button>
                <button class="u-btn u-btn-user no-border avatar-online">
                  <img class="u-icon" src="../../assets/image/avatars/avatar4.jpeg" alt="">
                </button>
                <button class="u-btn u-btn-user no-border avatar-online">
                  <img class="u-icon" src="../../assets/image/avatars/avatar5.jpeg" alt="">
                </button>
              </div>
            </div>-->
            <div class="d-flex">
              <div class="btn-lot">
                <button @click.stop="saveUML" download="class_uda.jpg" class="u-btn u-btn-share no-border">
                  <img class="svg u-icon" src="../../assets/image/ico/download-btn.png"/>
                </button>
                <button @click.stop="shareBoxDesktop" class="u-btn u-btn-share no-border">
                  <img class="svg u-icon" src="../../assets/image/ico/share-64.png"/>
                </button>
                <button @click.stop="resizeDiagram" class="u-btn u-btn-share no-border">
                  <img v-show="screenView == '70%'" class="svg u-icon" src="../../assets/image/ico/fit-to-screen.png"/>
                  <img v-show="screenView == '100%'" class="svg u-icon" src="../../assets/image/ico/normal-to-screen.png"/>
                </button>
              </div>
              <div class="btn-lot">
                <button @click.stop="codeBoxDesktop" class="u-btn no-border"><i class="fa fa-code u-icon"></i></button>
                <button @click.stop="folderBoxDesktop" class="u-btn no-border"><i class="fa fa-folder u-icon"></i></button>
              </div>
              <div class="btn-lot" style="background-color: darkorange; margin-right: .2em;">
                <button @click.stop="preniumBoxDesktop" class="u-btn no-border" style="background-color: darkorange; color: white;"><i class="fa fa- u-icon"></i>PREMIUM</button>
              </div>
              <!-- <a href="../../assets/login.html">
                <button class="u-btn u-btn-primary u-btn-transparent">SE CONNECTER</button>
              </a> -->
            </div>
          </div>
        </header>
        <div class="vertical-menu">
          <div class="top-to-left-mobile ">
            <div class="btn-lot d-flex d-md-none">
              <button class="u-btn no-border avatar-online">
                <img class="u-icon" src="../../assets/image/avatars/avatar3.jpeg" alt="">
              </button>
              <button class="u-btn no-border avatar-online">
                <img class="u-icon" src="../../assets/image/avatars/avatar4.jpeg" alt="">
              </button>
              <button class="u-btn no-border avatar-online">
                <img class="u-icon" src="../../assets/image/avatars/avatar5.jpeg" alt="">
              </button>
            </div>
            <div class="btn-lot d-flex d-md-none">
              <button @click.stop="preniumBoxMobile" class="u-btn no-border"><i class="fa fa-award u-icon"></i></button>
            </div>
            <div class="btn-lot d-flex d-md-none">
              <button @click.stop="saveUML" class="u-btn no-border">
                <img class="svg u-icon" src="../../assets/image/ico/download-btn.png"/>
              </button>
              <button @click.stop="shareBoxMobile" class="u-btn no-border">
                <img class="svg u-icon" src="../../assets/image/ico/share-64.png"/>
              </button>
              <button @click.stop="resizeDiagram" class="u-btn no-border">
                <img v-show="screenView == '70%'" class="svg u-icon" src="../../assets/image/ico/fit-to-screen.png"/>
                <img v-show="screenView == '100%'" class="svg u-icon" src="../../assets/image/ico/normal-to-screen.png"/>
              </button>
            </div>
            <div class="btn-lot d-flex d-md-none">
              <button @click.stop="codeBoxMobile" class="u-btn no-border"><i class="fa fa-code u-icon"></i></button>
              <button @click.stop="folderBoxMobile" class="u-btn no-border"><i class="fa fa-folder u-icon"></i></button>
            </div>
          </div>
          <div>
            <span class="p-2 zoomLabel"> {{ this.zoomScale }}% </span>
            <div class="btn-lot">
              <button @click.stop="diagramZoomIn" class="u-btn no-border"><i class="fa fa-plus u-icon"></i></button>
              <button @click.stop="diagramZoomOut" class="u-btn no-border"><i class="fa fa-minus u-icon"></i></button>
              <button @click.stop="playDemo" class="u-btn no-border"><i class="fa fa-question-circle u-icon"></i></button>
            </div>
          </div>
        </div>

        <!-- DRAW DIAGRAM HERE  -->
        <!-- ----------------- -->
        <div id="gb22k" class="content">
           <iframe style="background-color:transparent;" id="diagViewer" src="/diagram" height="100%" width="100%" title="description"></iframe> 
        </div>
        <!-- ----------------- -->
      </div>

      <g-tool-tip @mouseenter="this.onToolTip=true" @mouseleave="this.onToolTip=false" :arrow-position="arrowPosition" :side="toolTipSide" :show="toolTipOpened" :posX="toolTipPos.x" :posY="toolTipPos.y">
        <template #header>
          <div v-if="shareHTML" class=" header_modal--header--c8kL6">
            <div class="px-3 permissions_modal--fileTitle--1GMA_">
              <p class="p_title">Partager</p>
              <button class="s_btn mr-2" @click.stop="toolTipOpened=false">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </div>
          <div v-if="folderHTML" class=" header_modal--header--c8kL6">
            <div class="px-3 permissions_modal--fileTitle--1GMA_">
              <p class="p_title">Dans le même Projet</p>
              <button class="s_btn mr-2" @click.stop="toolTipOpened=false">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </div>
          <div v-if="preniumHTML" class=" header_modal--header--c8kL6">
            <div class="px-3 permissions_modal--fileTitle--1GMA_">
              <p class="p_title">Devenez premium</p>
              <button class="s_btn mr-2" @click.stop="toolTipOpened=false">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </div>
          <div v-if="codeHTML" class=" header_modal--header--c8kL6">
            <div class="px-3 permissions_modal--fileTitle--1GMA_">
              <p class="p_title">Générer le code source</p>
              <button class="s_btn mr-2" @click.stop="toolTipOpened=false">
                <i class="fa fa-close"></i>
              </button>
            </div>
          </div>
        </template>
        <template #body>
          <div v-if="shareHTML">
            <!--<div class="permissions_modal--contentContainer__OLD--2MUHp">
              send to specific-->
              <!--<div class="w-100 mb-1">
                <form class="d-flex">
                  <div class="d-flex col-8 email_f px-0">
                    <input class="col-8" type="email" placeholder="Email"/>
                    <select class="col-4">
                      <option id="sel_opt">👁️ &nbsp;&nbsp;Peut Lire </option>
                      <option id="sel_opt">📝️ &nbsp;&nbsp;Peut Modifier </option>
                      <option id="sel_opt">🌐️ &nbsp;&nbsp;Peut Partager </option>
                    </select>
                  </div>
                  <button class="s_btn col-4 submit_f s_invite" type="submit">INVITER</button>
                </form>
              </div>-->

              <!--<div class="permissions_modal--roleRows--3IhV0 overflow--overflowYAuto--2H5Wf overflow--momentumScroll--2_z54">
                <div class="role_row--roleRow--1utt9">
                  <img data-tooltip-type="text" data-tooltip="datnv.it3@gmail.com" src="https://s3-alpha.figma.com/profile/9c7e43b1-aa68-4e52-b14f-7210ea4897b5" class="role_row--avatar--1wPrK role_row--avatarNoMargin--lAfW7 role_row--avatarMargin--1B16A" alt="">
                  <div class="role_row--nameAndSelect--uiDVd">
                    <div class="role_row--name--2Pl36">
                      <div>Mr.Dat</div>
                    </div>
                    <span>auteur</span>
                  </div>
                </div>
              </div>
            </div>-->
            <!--broadcast-->
            <div class="border-thin px-3">
              <div class="role_row--roleRow--1utt9">
                    <span class="svg-container role_row--linkAccessIcon--2AfeY">
                      <svg class="svg" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.018 16.5c.219 3.104 2.46 5.649 5.415 6.324-.81-1.325-1.365-3.646-1.427-6.324H9.018zM16 24c-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8 4.418 0 8 3.582 8 8 0 4.418-3.582 8-8 8zM14.434 9.176c-2.955.675-5.197 3.22-5.416 6.324h3.988c.062-2.678.618-5 1.428-6.324zm3.133 0c2.954.675 5.196 3.22 5.415 6.324h-3.988c-.062-2.678-.618-5-1.427-6.324zm5.415 7.324h-3.988c-.062 2.678-.618 5-1.427 6.324 2.954-.675 5.196-3.22 5.415-6.324zm-5.797 4.806c.452-1.206.763-2.891.809-4.806h-3.988c.046 1.915.357 3.6.809 4.806.247.658.517 1.121.766 1.402.25.282.394.292.419.292.026 0 .17-.01.42-.292.248-.28.518-.744.765-1.402zm-2.37-10.612c-.452 1.205-.762 2.891-.809 4.806h3.988c-.046-1.915-.357-3.6-.809-4.806-.247-.658-.517-1.121-.765-1.402C16.17 9.01 16.024 9 16 9c-.025 0-.17.01-.42.292-.248.28-.518.744-.765 1.402z" fill-rule="evenodd" fill-opacity="1" fill="#000" stroke="none"></path>
                      </svg>
                    </span>

                <div class="role_row--nameAndSelect--uiDVd">
                  <div>
                    <div class="role_row--permissionLabel--pUx2j ">Tout le monde peut voir</div>
                  </div>
                  <input style="opacity: 0; position: absolute;" v-if="diagramData != null && !isProduction" type="text" id="publicLink" :value="'http://localhost:8080/public/diagram/'+diagramData.public_acces_token"/>
                  <input style="opacity: 0; position: absolute;" v-if="diagramData != null && isProduction" type="text" id="publicLink" :value="'https://umldesigner.app/public/diagram/'+diagramData.public_acces_token"/>
                  <div @click="copyLink" class="permissions_modal--footerLink--tBFNA blue_link--blueLink--22X56" id="ccopy">
                    <span class="svg-container permissions_modal--copyIcon--zdrgs">
                      <svg class="svg" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.525 13.657l2.652-2.652.707.707-2.652 2.652c-1.269 1.27-3.327 1.27-4.596 0-1.27-1.27-1.27-3.327 0-4.596l2.652-2.652.707.707-2.652 2.652c-.879.879-.879 2.303 0 3.182.879.879 2.303.879 3.182 0zm6.187-4.773l-.707-.707 2.652-2.652c.879-.879.879-2.303 0-3.182-.879-.879-2.303-.879-3.182 0L7.823 4.995l-.707-.707 2.652-2.652c1.269-1.27 3.327-1.27 4.596 0 1.27 1.27 1.27 3.327 0 4.596l-2.652 2.652zm-5.45 1.62l4.242-4.242-.766-.766-4.242 4.242.766.766z" fill-rule="nonzero" fill-opacity="1" fill="#000" stroke="none"></path>
                      </svg>
                    </span> Copier
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="folderHTML">
            <div v-if="allDiagrams != null" class="d-flex flex-column p-3">
              <div v-for="diagram, i in allDiagrams" v-bind:key="i" class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fa fa-file"></i>&nbsp; {{ (diagram.label.length > 15) ? diagram.label.substring(0, 15) + ' •••' : diagram.label }}</span>
                <a :href="'/editeur/' + toSlug(diagram.label)+ '/' +diagram.public_acces_token"><button class="btn btn-darkula p-1 px-2">OUVRIR</button></a>
              </div>
            </div>
          </div>
          <div v-if="preniumHTML">
            <div class="d-flex flex-column p-3">
              <p>Pourquoi devenir premium?</p>
              <div class="d-flex justify-content-between align-items-center mb-2 mt-2">
                <span><i class="fa fa-award"></i>&nbsp; Soon •••</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fa fa-award"></i>&nbsp; Soon •••</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fa fa-award"></i>&nbsp; Soon •••</span>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fa fa-award"></i>&nbsp; Soon •••</span>
              </div>
              <div class="w-100 text-center mb-2 mt-3">
                <button class="btn btn-danger p-1 px-2">ACTIVER (•••$)</button>
              </div>
            </div>
          </div>
          <div v-if="codeHTML">
            <div class="d-flex flex-column p-3">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fa fa-database"></i>&nbsp; SQL</span>
                <button class="btn btn-darkula p-1 px-2">CREER</button>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fab fa-java"></i>&nbsp; JAVA</span>
                <button class="btn btn-darkula p-1 px-2">CREER</button>
              </div>
              <div class="d-flex justify-content-between align-items-center mb-2">
                <span><i class="fab fa-laravel"></i>&nbsp; LARAVEL</span>
                <button class="btn btn-darkula p-1 px-2">CREER</button>
              </div>
            </div>
          </div>
        </template>
      </g-tool-tip>

      <transition name="slide-fade" appear mode="out-in">
        <alert v-show="alertMe" :status="gAlertType" :message="gAlertMessage"></alert>
      </transition>

      <!-- create project popup -->
      <modal :waitingResult="false" v-if="hintBox" @close="hintBox=false" @sendInvite="hintBox=false">
        <template #header>
          <div>Hint !</div>
        </template>
        <template #body>
          <form>
            <div class="col-12 pl-0">
              <div class="form-group ">
                <label class="control-label" for="inputPassnew">Editer les règles de gestion dans la zone de texte à votre gauche. <br>La vue du diagramme est synchoniser et rafraîchir automatiquement lors de l'édition lorsque vous appuyer sur les touches "espace" ou "•"<br><br>Vous pouvez aussi rafraichir le diagramme en cliquant manuellement la touche <img width='30' src="@/assets/images/hint/sync.png" alt="hint btn"/> se trouvant dans le coin supérieur gauche du navigateur.</label>
              </div>
            </div>
          </form>
        </template>
        <template #footer>
        </template>
      </modal>

      <transition name="slide-fade" appear mode="out-in">
        <alert v-show="alertMe" :status="gAlertType" :message="gAlertMessage"></alert>
      </transition>

      <!-- create project popup -->
      <modal :waitingResult="false" v-if="hintBox" @close="hintBox=false" @sendInvite="hintBox=false">
        <template #header>
          <div>Hint !</div>
        </template>
        <template #body>
          <form>
            <div class="col-12 pl-0">
              <div class="form-group ">
                <label class="control-label" for="inputPassnew">Editer les règles de gestion dans la zone de texte à votre gauche. <br>La vue du diagramme est synchoniser et rafraîchir automatiquement lors de l'édition lorsque vous appuyer sur les touches "espace" ou "•"<br><br>Vous pouvez aussi rafraichir le diagramme en cliquant manuellement la touche <img width='30' src="@/assets/images/hint/sync.png" alt="hint btn"/> se trouvant dans le coin supérieur gauche du navigateur.</label>
              </div>
            </div>
          </form>
        </template>
        <template #footer>
        </template>
      </modal>
    </div>
  </div>
</template>



<script>
import Alert from '@/components/shared/Alert.vue'
import GTextEdit from "@/components/GTextEdit";
import GToolTip from "@/components/GToolTip";
import { getAPI } from '@/api/axios-api.js'
import Modal from '@/components/shared/Modal'


export default {
  name: 'EditorView',
  components: {
    GTextEdit,
    GToolTip,
    Alert,
    Modal
  },
  data() {
    return {
      isProduction: process.env.NODE_ENV === 'production',
      canvasWidth: 0,
      canvasHeight: 0,
      screenView: '70%',
      toolTipPos: {'x':0, 'y':0},
      onToolTip: false,
      toolTipOpened: false,
      toolTipSide: '',
      download: 0,
      shareHTML: true,
      folderHTML: false,
      preniumHTML: false,
      codeHTML: false,
      arrowPosition: 'center',
      zoomScale: 90,
      syncOrder: '',
      waitingApiTextSync: false,
      waitingApiXmlSync: false,
      plainText: "",
      alertMe: false,
      gAlertMessage: '',
      gAlertType: '',
      hintBox: false,
      generatedXML: "",
      saved: false,
      diagramData: null,
      orderGetText: null,
      allDiagrams: null
    }
  },
  methods: {
    toSlug (value) {
      return value.toLowerCase().replaceAll(' ', '-');
    },
    copyLink () {
      let Url = document.getElementById('publicLink')
      Url.select();
      document.execCommand("copy");
      document.getElementById('ccopy').style.color='red';
    },
    setOrderGetText() {
        this.orderGetText = this.getLastTime()
    },
    goBackB() {
      sessionStorage.setItem('xml', '');
      let a = document.createElement('a')
      a.setAttribute('href', '/acceuil')
      a.click()
      a.remove
    },
    displayError (error, type='alert-ok', time=4000) {
      this.gAlertMessage = error
      this.gAlertType = type
      this.alertMe = true
      setTimeout(() => {
        this.alertMe = false
      }, time);
    },
    saveDiagram(data) {
      getAPI.put('/diagram/'+this.diagramData.project_id+'/'+this.diagramData.id, 
      {
        label: this.diagramData.label,
        plain_text: data,
        xml_image: sessionStorage.getItem('xml')
      })
      .then(response => {
        if(response.status == 200) {
          this.saved = true
          setTimeout(() => {
            this.saved = false
          }, 2000)
        }
        else{
          this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
          this.waitingApiTextSync = false
        }
      })
      .catch((error) => {
        if (error.response) {
          this.displayError(error.response.data.detail, 'alertthis.$route.params.hash-no', 4000)
        } else if (error.request) {
          this.displayError('The request was made but no response was received. Please check your network.', 'alert-no', 8000)
        } else {
          this.displayError('Oups ! something went wrong.', 'alert-no', 5000)
        }
      })
    },
    syncDiagram (data) {
      sessionStorage.setItem('xml', data)
      this.waitingApiXmlSync = false
      var iframe = document.getElementById('diagViewer');
      iframe.contentWindow.location.reload(true);
      // let save this state 
      // -------------------
      this.orderGetText = this.getLastTime()
      // ----------------
      // ----------------
    },
    getLastTime() {
      let d = new Date()
      return d.getMilliseconds()
    },
    orderSync () {
      this.syncOrder = this.getLastTime()
    },
    closeToolTip () {
      if(this.toolTipOpened && !this.onToolTip) {
        this.toolTipOpened = false
      }
    },
    saveUML () {
      let iframe = document.getElementById('diagViewer')
      let element = iframe.contentWindow.document.getElementById('saveImg')
      element.click()
    },
    diagramZoomIn () {
      if (this.zoomScale <=150)
        this.zoomScale += 10
      // alert('+')
    },
    diagramZoomOut () {
      if (this.zoomScale >= 40)
        this.zoomScale -= 10
      // alert('-')
    },
    playDemo () {
      alert('play demo for user')
    },
    takeMousePos (event) {
      this.toolTipPos.x = event.clientX
      this.toolTipPos.y = event.clientY
      console.log("---1---")
      console.log(this.toolTipPos.x, this.toolTipPos.y)
    },
    changeBox (boxName, arrowPosition) {
      if (boxName == 'share') {
        this.shareHTML=true
        this.folderHTML=false
        this.preniumHTML=false
        this.codeHTML=false
      }
      else if (boxName == 'folder') {
        this.shareHTML=false
        this.folderHTML=true
        this.preniumHTML=false
        this.codeHTML=false
      }
      else if (boxName == 'prenium') {
        this.shareHTML=false
        this.folderHTML=false
        this.preniumHTML=true
        this.codeHTML=false
      }
      else if (boxName == 'code') {
        this.shareHTML=false
        this.folderHTML=false
        this.preniumHTML=false
        this.codeHTML=true
      }
      this.arrowPosition = arrowPosition
      if (!this.toolTipOpened) {
        this.toolTipPos.x = 0
        this.toolTipPos.y = 0
      }
    },
    codeBoxDesktop (event) {
      this.toolTipSide = 'top';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('code', 'center')
    },
    codeBoxMobile (event) {
      this.toolTipSide = 'right';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('code', 'right')
    },
    preniumBoxDesktop (event) {
      this.toolTipSide = 'top';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('prenium', 'right')
    },
    preniumBoxMobile (event) {
      this.toolTipSide = 'right';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('prenium', 'right')
    },
    folderBoxDesktop (event) {
      this.toolTipSide = 'top';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('folder', 'center')
    },
    folderBoxMobile (event) {
      this.toolTipSide = 'right';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('folder', 'center')
    },
    shareBoxDesktop (event) {
      this.toolTipSide = 'top';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('share', 'center')
    },
    shareBoxMobile (event) {
      this.toolTipSide = 'right';
      this.takeMousePos(event)
      this.toolTipOpened = (!this.toolTipOpened)
      this.changeBox('share', 'center')
    },
    resizeDiagram () {
      if (this.screenView == '70%') {
        document.getElementsByClassName('edit-zone')[0].style.display = 'none'
        document.getElementById('horzMenu').style.justifyContent='space-between'
        this.screenView = '100%'
      }
      else {
        document.getElementsByClassName('edit-zone')[0].style.display = 'flex'
        document.getElementById('horzMenu').style.justifyContent='right'
        this.screenView = '70%'
      }
    },
    syncDiagramData(token) {
      this.waitingApiTextSync = true
      getAPI.get('/diagram/'+token, )
        .then(response => {
          if(response.status == 200) {
            this.displayError('Great ! Diagramme chargé avec  succès.', 'alert-yes', 5000)
            this.diagramData = response.data
            this.plainText = response.data.plain_text
            setTimeout(() => {
              this.waitingApiTextSync = false
              sessionStorage.setItem('xml', this.diagramData.xml_image)
              var iframe = document.getElementById('diagViewer');
              iframe.contentWindow.location.reload(true);
            }, 2000)
            this.hintBox = true
            // --------------------
            getAPI.get('/diagram/all/'+this.diagramData.project_id, )
            .then(response => {
              this.allDiagrams = response.data
            })
            // --------------------
          }
          else{
            this.displayError('Oups ! quelque chose s\'est mal passé.', 'alert-no')
            this.waitingApiTextSync = false
          }
        })
        .catch((error) => {
          if (error.response) {
            this.displayError(error.response.data.detail, 'alertthis.$route.params.hash-no', 4000)
          } else if (error.request) {
            this.displayError('The request was made but no response was received. Please check your network.', 'alert-no', 8000)
          } else {
            this.displayError('Oups ! something went wrong.', 'alert-no', 5000)
          }
        })
    }
  },
  async created() {
    window.addEventListener('load', () => {
      this.syncDiagramData(this.$route.params.hash)
    })
  },
  mounted() {
    // this.canvasWidth = document.getElementById('gb22k').offsetWidth-30+300
    // this.canvasHeight = document.getElementById('gb22k').offsetHeight
    // sessionStorage.setItem('height', document.getElementById('gb22k').offsetHeight)
  },
  beforeRouteUpdate(to, from) {
    console.log(from);
  },
    beforeMount() {
    sessionStorage.setItem('xml', null)
  },
}
</script>


<style scoped>
  .umlTypeName {
      position: relative !important;
      top: .3em !important;
  }
  #gb22k{
    overflow: hidden;
  }
  #diagViewer{
    border: 5px solid #ddd;
  }
  .s_invite{
    border-radius: 0px !important;
  }
  .zoomLabel{
    font-size: .7em; user-select: none;
  }
  .content{
    /*position: relative;*/
    text-align: center;
  }
  #myDiagramDiv {
    width: 100%;
    height: 100%;
  }
  /* figma style */
  .header_modal--modal--3V0h3 {
    width: 100%;
    max-height: 100%;
    position: relative;
    border-radius: 2px;
  }
  h1, h2, h3, h4, h5, h6, .p_title, a {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: inherit;
    outline: none;
    letter-spacing: inherit;
    text-decoration: none;
    cursor: inherit;
    /*font-size: 0.8em;*/
  }
  .header_modal--header--c8kL6 {
    font-weight: 600;
    box-sizing: border-box;
    height: 41px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 8px;
    padding-right: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid #e6e6e6;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .border-thin{
    border-top: 1px solid #e6e6e6;
  }
  .permissions_modal--fileTitle--1GMA_ {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .permissions_modal--resourceName--3NW-R {
    max-width: 275px;
    font-weight: 500;
  }
  .permissions_modal--truncateText--3BWPl {
    display: inline-block;
    vertical-align: top;
    max-width: 90px;
  }
  .ellipsis--ellipsis--1RWY6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .permissions_modal--resourceName--3NW-R {
    max-width: 275px;
    font-weight: 500;
  }
  .permissions_modal--truncateText--3BWPl {
    display: inline-block;
    vertical-align: top;
    max-width: 90px;
  }
  .ellipsis--ellipsis--1RWY6 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .permissions_modal--contentContainer__OLD--2MUHp {
    padding: 8px 16px 0;
  }
  .permissions_modal--inviteBar--dvsSo {
    padding: 8px 0;
  }
  .token_form--row--3Vkiu {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr min-content;
    box-sizing: border-box;
  }
  .token_form--autocompleteWrapper--3bTu2 {
    flex-grow: 1;
    position: relative;
    margin-right: 8px;
  }
  .autocomplete_input--inputWrapper--1naDE {
    background-color:  #fff;
    display: flex;
    align-items: center;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
    padding: 2.5px;
    justify-content: space-between;
  }
  .basic_form--primaryBtn--3NqnQ:disabled {
    color:  #fff;
    background-color: rgba(0, 0, 0, .3);
    border-color: transparent;
  }
  .basic_form--btn--3A-Ju:disabled {
    background-color: transparent;
    color: #b3b3b3;
    border: 1px solid  rgba(0, 0, 0, .3);
  }
  .token_form--button--3fGsN {
    width: 96px;
  }
  .permissions_modal--roleRows--3IhV0 {
    max-height: 50vh;
    overflow-x: hidden;
    margin-bottom: 12px;
  }
  .overflow--overflowYAuto--2H5Wf {
    overflow-y: auto;
  }
  .role_row--roleRow--1utt9 {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 11px;
    width: 100%;
  }
  .role_row--linkAccessIcon--2AfeY {
    width: 32px;
    height: 32px;
    margin-right: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #000;
    color: #000;
  }
  svg {
    display: block;
  }
  .role_row--linkAccessIcon--2AfeY {
    fill: #000;
    color: #000;
  }
  .role_row--nameAndSelect--uiDVd {
    height: 100%;
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
  }
  .role_row--permissionLabel--pUx2j {
    display: flex;
    align-items: center;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    max-width: 100%;
  }
  .role_row--roleRow--1utt9 {
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 11px;
    width: 100%;
  }
  .role_row--avatarNoMargin--lAfW7 {
    width: 24px;
    height: 24px;
    border-radius: 100%;
    flex: 0 0 24px;
    color: #fff;
  }
  .role_row--avatarMargin--1B16A {
    margin-right: 12px;
  }
  .role_row--nameAndSelect--uiDVd {
    height: 100%;
    box-sizing: border-box;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
  }
  .role_row--name--2Pl36 {
    flex: 1;
    margin-right: 12px;
    overflow-x: overlay;
  }
  .permissions_modal--dividedInputSection--32etK {
    border-top: 1px solid #e5e5e5;
  }
  .permissions_modal--inputSection--310o_ {
    padding: 0;
  }
  .permissions_modal--footerLinks--1dvpq {
    padding: 16px;
    display: flex;
  }
  .permissions_modal--footerLink--tBFNA {
    display: flex;
    align-items: center;
  }
  .blue_link--blueLink--22X56 {
    color: #258ee8;
    cursor: pointer;
    -webkit-user-select: auto;
    -moz-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
  }
  .permissions_modal--linkToNodeDisabled--1hJC3 {
    pointer-events: none;
  }
  .permissions_modal--linkToNode--2kOyC {
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
  }
  .permissions_modal--copyIcon--zdrgs {
    fill: currentColor;
    margin-right: 5px;
  }
  .permissions_modal--copyIcon--zdrgs {
    fill: currentColor;
    margin-right: 5px;
  }
  #sel_opt {
    background: white !important;
  }
  .s_btn, input, select{
    outline: none !important;
    outline: none !important;
    background: none;
    border: none;
  }
  .email_f{
    border: 1px solid #e6e6e6;
  }
  .submit_f{
    background-color: #263238 !important;
    color: #fff;
  }
  .email_f input{
    padding: 0.4em 0.6em;
  }
</style>
