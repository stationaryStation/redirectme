// ==UserScript==
// @name RedirectMe
// @description Simple Redirection Script for Youtube.com
// @namespace Backend
// @match http://www.youtube.com/*
// @match https://www.youtube.com/*
// @version 1.0
// @run-at document-start
// @grant none
// ==/UserScript==
var a = 0;
const FRONTEND = "poketube.fun"
setInterval(function () {
	if (a === 0 && window.location.href.indexOf('watch?') > -1 && window.location.href.indexOf('list=WL') < 0) {
		a = `//${FRONTEND}/watch?` + window.parent.location.href.split('?')[1];
		window.location.replace(a);
	}
}, 10);
