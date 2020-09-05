function ciemny_motyw() {
  var checkBox = document.getElementById("theme-button");
  if (checkBox.checked == true){/*motyw ciemny*/
    document.getElementById("theme").innerHTML = '<style> :root{--background-color: #1f1f1f; --nav-option: #E7B024; --switch-background: #E7B024; --slider-before-background-color: #1f1f1f; --button-menu-background-color: #E7B024; --button-menu-color: #1f1f1f; --cat-name-background-color: #E7B024; --cat-name-image-white-background-color: #E7B024; --separator-tex-background-background-color: #E7B024; ---webkit-media-controls-panel: #E7B024; --board-bar-background-color: #E7B024; --hi-fi-status-background-color: #E7B024; --board-name-bc: #000;} body{transition:.4s;} *{transition:.4s !important;} </style>';
    }

    else {/*motyw jasny*/
    document.getElementById("theme").innerHTML =  '<style>:root{--background-color:#fafafa; --nav-option: white; --switch-background: #fff; --slider-before-background-color: #E7B024; --button-menu-background-color: #E7B024; --button-menu-color: #fff; --cat-name-background-color: #fff; --cat-name-image-white-background-color: #fff; --separator-tex-background-background-color: #fff; ---webkit-media-controls-panel: #fff; --board-bar-background-color: #fff; --hi-fi-status-background-color: #fff; --board-name-bc: #181818;} body{transition:.4s;} *{transition:.4s !important;} </style>';
  }
}
