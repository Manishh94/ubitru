/*
 *
 * Find more about this plugin by visiting
 * http://alxgbsn.co.uk/
 *
 * Copyright (c) 2010-2012 Alex Gibson
 * Released under MIT license
 *
 */
!function(t,e){function i(){if(this.hasDeviceMotion="ondevicemotion"in t,this.threshold=8,this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}i.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},i.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},i.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},i.prototype.devicemotion=function(e){var i,n,s=e.accelerationIncludingGravity,o=0,a=0,r=0;return null===this.lastX&&null===this.lastY&&null===this.lastZ?(this.lastX=s.x,this.lastY=s.y,this.lastZ=s.z,void 0):(o=Math.abs(this.lastX-s.x),a=Math.abs(this.lastY-s.y),r=Math.abs(this.lastZ-s.z),(o>this.threshold&&a>this.threshold||o>this.threshold&&r>this.threshold||a>this.threshold&&r>this.threshold)&&(i=new Date,n=i.getTime()-this.lastTime.getTime(),n>1e3&&(t.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=s.x,this.lastY=s.y,this.lastZ=s.z,void 0)},i.prototype.handleEvent=function(t){return"function"==typeof this[t.type]?this[t.type](t):void 0};var n=new i;n&&n.start()}(window,document);