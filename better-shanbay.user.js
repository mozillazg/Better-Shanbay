// ==UserScript==
// @name            Better Shanbay
// @namespace       http://userscripts.org/scripts/show/152641
// @description     Enhance shanbay.com
// @version         0.1.0
// @author          mozillazg
// @updateURL       https://userscripts.org/scripts/source/152641.meta.js
// @downloadURL     https://userscripts.org/scripts/source/152641.user.js
// @match           http://www.shanbay.com/forum/thread/*
// @match           http://www.shanbay.com/team/thread/*
// ==/UserScript==

function submit(e) {
  if (e.ctrlKey && e.keyCode == 13) {
    //var form = this.parentNode.parentNode;
    //form.submit();
    //return false;
    this.submit();
  }
}

function handleCtrlEnter() {
  var forms = document.getElementsByTagName('form');
  if (forms && forms.length) {
    for (var i = 0; i < forms.length; i++){
      var form = forms[i];
      form.addEventListener('keydown', submit, false);
    }
  }
}

(function() {
  handleCtrlEnter();
})();
//var ctrl = GM_registerMenuCommand("Ctrl + Enter", handleCtrlEnter);
//(function() {
  //GM_enableMenuCommand(ctrl);
//})();

