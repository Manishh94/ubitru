/*
 *
 * Find more about this plugin by visiting
 * http://alxgbsn.co.uk/
 *
 * Copyright (c) 2010-2012 Alex Gibson
 * Released under MIT license
 *
 */
!function(e,t){function i(){if(this.hasDeviceMotion="ondevicemotion"in e,this.threshold=8,this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof t.CustomEvent)this.event=new t.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof t.createEvent)return!1;this.event=t.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}i.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},i.prototype.start=function(){this.reset(),this.hasDeviceMotion&&e.addEventListener("devicemotion",this,!1)},i.prototype.stop=function(){this.hasDeviceMotion&&e.removeEventListener("devicemotion",this,!1),this.reset()},i.prototype.devicemotion=function(t){var i,n,s=t.accelerationIncludingGravity,a=0,o=0,r=0;return null===this.lastX&&null===this.lastY&&null===this.lastZ?(this.lastX=s.x,this.lastY=s.y,this.lastZ=s.z,void 0):(a=Math.abs(this.lastX-s.x),o=Math.abs(this.lastY-s.y),r=Math.abs(this.lastZ-s.z),(a>this.threshold&&o>this.threshold||a>this.threshold&&r>this.threshold||o>this.threshold&&r>this.threshold)&&(i=new Date,n=i.getTime()-this.lastTime.getTime(),n>1e3&&(e.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=s.x,this.lastY=s.y,this.lastZ=s.z,void 0)},i.prototype.handleEvent=function(e){return"function"==typeof this[e.type]?this[e.type](e):void 0};var n=new i;n&&n.start()}(window,document);