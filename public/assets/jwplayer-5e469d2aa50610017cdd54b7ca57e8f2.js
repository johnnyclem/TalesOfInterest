typeof jwplayer=="undefined"&&(jwplayer=function(e){if(jwplayer.api)return jwplayer.api.selectPlayer(e)},jwplayer.version="6.0.2813",jwplayer.vid=document.createElement("video"),jwplayer.audio=document.createElement("audio"),jwplayer.source=document.createElement("source"),function(e){function a(e){if(!u.exists(e))return;var t=e.indexOf("://"),n=e.indexOf("?");return t>0&&(n<0||n>t)}function l(e){return function(){return f(e)}}var t=document,n=window,r=navigator,i="undefined",s="string",o="object",u=e.utils=function(){};u.exists=function(e){switch(typeof e){case s:return e.length>0;case o:return e!==null;case i:return!1}return!0},u.styleDimension=function(e){return e+(e.toString().indexOf("%")>0?"":"px")},u.getAbsolutePath=function(e,n){u.exists(n)||(n=t.location.href);if(!u.exists(e))return undefined;if(a(e))return e;var r=n.substring(0,n.indexOf("://")+3),i=n.substring(r.length,n.indexOf("/",r.length+1)),s;if(e.indexOf("/")===0)s=e.split("/");else{var o=n.split("?")[0];o=o.substring(r.length+i.length+1,o.lastIndexOf("/")),s=o.split("/").concat(e.split("/"))}var f=[];for(var l=0;l<s.length;l++){if(!s[l]||!u.exists(s[l])||s[l]==".")continue;s[l]==".."?f.pop():f.push(s[l])}return r+i+"/"+f.join("/")},u.extend=function(){var e=u.extend.arguments;if(e.length>1){for(var t=1;t<e.length;t++)for(var n in e[t])try{u.exists(e[t][n])&&(e[0][n]=e[t][n])}catch(r){}return e[0]}return null},u.log=function(e,t){typeof console!=i&&typeof console.log!=i&&(t?console.log(e,t):console.log(e))};var f=u.userAgentMatch=function(e){var t=r.userAgent.toLowerCase();return t.match(e)!==null};u.isIE=l(/msie/i),u.isFF=l(/firefox/i),u.isIOS=l(/iP(hone|ad|od)/i),u.isIPod=l(/iP(hone|od)/i),u.isIPad=l(/iPad/i),u.isAndroid=function(e){return e?f(new RegExp("android.*"+e,"i")):f(/android/i)},u.isMobile=function(){return u.isIOS()||u.isAndroid()},u.saveCookie=function(e,n){t.cookie="jwplayer."+e+"="+n+"; path=/"},u.getCookies=function(){var e={},n=t.cookie.split("; ");for(var r=0;r<n.length;r++){var i=n[r].split("=");i[0].indexOf("jwplayer.")==0&&(e[i[0].substring(9,i[0].length)]=i[1])}return e},u.typeOf=function(e){var t=typeof e;return t==="object"?e?e instanceof Array?"array":t:"null":t},u.translateEventResponse=function(t,n){var r=u.extend({},n);t==e.events.JWPLAYER_FULLSCREEN&&!r.fullscreen?(r.fullscreen=r.message=="true"?!0:!1,delete r.message):typeof r.data==o?(r=u.extend(r,r.data),delete r.data):typeof r.metadata==o&&u.deepReplaceKeyName(r.metadata,["__dot__","__spc__","__dsh__"],["."," ","-"]);var i=["position","duration","offset"];for(var s in i)r[i[s]]&&(r[i[s]]=Math.round(r[i[s]]*1e3)/1e3);return r},u.flashVersion=function(){if(u.isAndroid())return 0;var e=r.plugins,t;if(e!=i){t=e["Shockwave Flash"];if(t)return parseInt(t.description.replace(/\D+(\d+)\..*/,"$1"))}if(typeof n.ActiveXObject!=i)try{t=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(t)return parseInt(t.GetVariable("$version").split(" ")[1].split(",")[0])}catch(s){}return 0},u.getScriptPath=function(e){var n=t.getElementsByTagName("script");for(var r=0;r<n.length;r++){var i=n[r].src;if(i&&i.indexOf(e)>=0)return i.substr(0,i.indexOf(e))}return""},u.deepReplaceKeyName=function(t,n,r){switch(e.utils.typeOf(t)){case"array":for(var i=0;i<t.length;i++)t[i]=e.utils.deepReplaceKeyName(t[i],n,r);break;case o:for(var s in t){var u,a;if(n instanceof Array&&r instanceof Array){if(n.length!=r.length)continue;u=n,a=r}else u=[n],a=[r];var f=s;for(var i=0;i<u.length;i++)f=f.replace(new RegExp(n[i],"g"),r[i]);t[f]=e.utils.deepReplaceKeyName(t[s],n,r),s!=f&&delete t[s]}}return t};var c=u.pluginPathType={ABSOLUTE:0,RELATIVE:1,CDN:2};u.getPluginPathType=function(e){if(typeof e!=s)return;e=e.split("?")[0];var t=e.indexOf("://");if(t>0)return c.ABSOLUTE;var n=e.indexOf("/"),r=u.extension(e);return t<0&&n<0&&(!r||!isNaN(r))?c.CDN:c.RELATIVE},u.getPluginName=function(e){return e.replace(/^(.*\/)?([^-]*)-?.*\.(swf|js)$/,"$2")},u.getPluginVersion=function(e){return e.replace(/[^-]*-?([^\.]*).*$/,"$1")},u.isYouTube=function(e){return e.indexOf("youtube.com")>-1||e.indexOf("youtu.be")>-1},u.isRtmp=function(e,t){return e.indexOf("rtmp")==0||t=="rtmp"},u.foreach=function(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n)},u.isHTTPS=function(){return n.location.href.indexOf("https")==0}}(jwplayer),function(e){var t="video/",n="audio/",r="image",i="mp4",s="webm",o="ogg",u="aac",a="mp3",f="vorbis",l={mp4:t+i,vorbis:n+o,ogg:t+o,webm:t+s,aac:n+i,mp3:n+a,hls:"application/vnd.apple.mpegurl"},c={mp4:l[i],f4v:l[i],m4v:l[i],mov:l[i],m4a:l[u],f4a:l[u],aac:l[u],mp3:l[a],ogv:l[o],ogg:l[f],oga:l[f],webm:l[s],m3u8:l.hls},t="video",h={flv:t,f4v:t,mov:t,m4a:t,m4v:t,mp4:t,aac:t,mp3:"sound",smil:"rtmp",m3u8:"hls"},p=e.extensionmap={};for(var d in c)p[d]={html5:c[d]};for(d in h)p[d]||(p[d]={}),p[d].flash=h[d];p.types=l,p.mimeType=function(e){for(var t in l)if(l[t]==e)return t},p.extType=function(e){return p.mimeType(c[e])}}(jwplayer.utils),function(e){var t=e.loaderstatus={NEW:0,LOADING:1,ERROR:2,COMPLETE:3},n=document;e.scriptloader=function(r){function u(e){i=t.ERROR,o.sendEvent(s.ERROR)}function f(e){i=t.COMPLETE,o.sendEvent(s.COMPLETE)}var i=t.NEW,s=jwplayer.events,o=new s.eventdispatcher;e.extend(this,o),this.load=function(){var o=e.scriptloader.loaders[r];if(!(!o||o.getStatus()!=t.NEW&&o.getStatus()!=t.LOADING)){o.addEventListener(s.ERROR,u),o.addEventListener(s.COMPLETE,f);return}e.scriptloader.loaders[r]=this;if(i==t.NEW){i=t.LOADING;var l=n.createElement("script");l.addEventListener?(l.onload=f,l.onerror=u):l.readyState&&(l.onreadystatechange=function(){(l.readyState=="loaded"||l.readyState=="complete")&&f()}),n.getElementsByTagName("head")[0].appendChild(l),l.src=r}},this.getStatus=function(){return i}},e.scriptloader.loaders={}}(jwplayer.utils),function(e){e.trim=function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},e.pad=function(e,t,n){n||(n="0");while(e.length<t)e=n+e;return e},e.xmlAttribute=function(e,t){for(var n=0;n<e.attributes.length;n++)if(e.attributes[n].name&&e.attributes[n].name.toLowerCase()==t.toLowerCase())return e.attributes[n].value.toString();return""},e.jsonToString=function(t){var n=n||{};if(n&&n.stringify)return n.stringify(t);var r=typeof t;if(r=="object"&&t!==null){var i=[],s=t&&t.constructor==Array;for(var o in t){var u=t[o];switch(typeof u){case"string":u='"'+u.replace(/"/g,'\\"')+'"';break;case"object":e.exists(u)&&(u=e.jsonToString(u))}s?typeof u!="function"&&i.push(String(u)):typeof u!="function"&&i.push('"'+o+'":'+String(u))}return s?"["+String(i)+"]":"{"+String(i)+"}"}if(r!="string")return String(t);t='"'+t.replace(/"/g,'\\"')+'"'},e.extension=function(e){if(!e||e.substr(0,4)=="rtmp")return"";e=e.substring(e.lastIndexOf("/")+1,e.length).split("?")[0].split("#")[0];if(e.lastIndexOf(".")>-1)return e.substr(e.lastIndexOf(".")+1,e.length).toLowerCase()},e.stringToColor=function(e){return e=e.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2"),e.length==3&&(e=e.charAt(0)+e.charAt(0)+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)),parseInt(e,16)}}(jwplayer.utils),function(e){var t="invalid",n="36QXq4W@GSBV^teR";e.key=function(r){function u(n){e.exists(n)||(n="");try{n=f(n);var r=n.split("/");i=r[0],i?e.key.valid.indexOf(i)<0&&(i=t):i="free",s=r[1],r[2]&&parseInt(r[2])>0&&(o=new Date,o.setTime(String(r[2])))}catch(u){i=t}}function f(t){return e.tea.decrypt(t,n)}var i,s,o;this.edition=function(){return o&&o.getTime()<(new Date).getTime()?t:i},this.token=function(){return s},u(r)},e.key.valid=["free","pro"]}(jwplayer.utils),function(e){var t=e.tea={};t.encrypt=function(e,i){if(e.length==0)return"";var s=t.strToLongs(r.encode(e));s.length<=1&&(s[1]=0);var o=t.strToLongs(r.encode(i).slice(0,16)),u=s.length,f=s[u-1],l=s[0],h=2654435769,p,v,m=Math.floor(6+52/u),g=0;while(m-->0){g+=h,v=g>>>2&3;for(var y=0;y<u;y++)l=s[(y+1)%u],p=(f>>>5^l<<2)+(l>>>3^f<<4)^(g^l)+(o[y&3^v]^f),f=s[y]+=p}var b=t.longsToStr(s);return n.encode(b)},t.decrypt=function(e,i){if(e.length==0)return"";var s=t.strToLongs(n.decode(e)),o=t.strToLongs(r.encode(i).slice(0,16)),u=s.length,f=s[u-1],l=s[0],h=2654435769,p,v,m=Math.floor(6+52/u),g=m*h;while(g!=0){v=g>>>2&3;for(var y=u-1;y>=0;y--)f=s[y>0?y-1:u-1],p=(f>>>5^l<<2)+(l>>>3^f<<4)^(g^l)+(o[y&3^v]^f),l=s[y]-=p;g-=h}var b=t.longsToStr(s);return b=b.replace(/\0+$/,""),r.decode(b)},t.strToLongs=function(e){var t=new Array(Math.ceil(e.length/4));for(var n=0;n<t.length;n++)t[n]=e.charCodeAt(n*4)+(e.charCodeAt(n*4+1)<<8)+(e.charCodeAt(n*4+2)<<16)+(e.charCodeAt(n*4+3)<<24);return t},t.longsToStr=function(e){var t=new Array(e.length);for(var n=0;n<e.length;n++)t[n]=String.fromCharCode(e[n]&255,e[n]>>>8&255,e[n]>>>16&255,e[n]>>>24&255);return t.join("")};var n={};n.code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n.encode=function(e,t){t=typeof t=="undefined"?!1:t;var i,s,o,u,f,l,c,h,p=[],v="",m,g,y,b=n.code;g=t?r.encode(e):e,m=g.length%3;if(m>0)while(m++<3)v+="=",g+="\0";for(m=0;m<g.length;m+=3)i=g.charCodeAt(m),s=g.charCodeAt(m+1),o=g.charCodeAt(m+2),u=i<<16|s<<8|o,f=u>>18&63,l=u>>12&63,c=u>>6&63,h=u&63,p[m/3]=b.charAt(f)+b.charAt(l)+b.charAt(c)+b.charAt(h);return y=p.join(""),y=y.slice(0,y.length-v.length)+v,y},n.decode=function(e,t){t=typeof t=="undefined"?!1:t;var i,s,o,u,f,l,c,h,p=[],v,m,g=n.code;m=t?r.decode(e):e;for(var y=0;y<m.length;y+=4)u=g.indexOf(m.charAt(y)),f=g.indexOf(m.charAt(y+1)),l=g.indexOf(m.charAt(y+2)),c=g.indexOf(m.charAt(y+3)),h=u<<18|f<<12|l<<6|c,i=h>>>16&255,s=h>>>8&255,o=h&255,p[y/4]=String.fromCharCode(i,s,o),c==64&&(p[y/4]=String.fromCharCode(i,s)),l==64&&(p[y/4]=String.fromCharCode(i));return v=p.join(""),t?r.decode(v):v};var r={};r.encode=function(e){var t=e.replace(/[\u0080-\u07ff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(192|t>>6,128|t&63)});return t=t.replace(/[\u0800-\uffff]/g,function(e){var t=e.charCodeAt(0);return String.fromCharCode(224|t>>12,128|t>>6&63,128|t&63)}),t},r.decode=function(e){var t=e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(e){var t=(e.charCodeAt(0)&15)<<12|(e.charCodeAt(1)&63)<<6|e.charCodeAt(2)&63;return String.fromCharCode(t)});return t=t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(e){var t=(e.charCodeAt(0)&31)<<6|e.charCodeAt(1)&63;return String.fromCharCode(t)}),t}}(jwplayer.utils),function(e){e.events={COMPLETE:"COMPLETE",ERROR:"ERROR",API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_MEDIA_BEFOREPLAY:"jwplayerMediaBeforePlay",JWPLAYER_MEDIA_BEFORECOMPLETE:"jwplayerMediaBeforeComplete",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_MEDIA_LEVELS:"jwplayerMediaLevels",JWPLAYER_MEDIA_LEVEL_CHANGED:"jwplayerMediaLevelChanged",JWPLAYER_CAPTIONS_CHANGED:"jwplayerCaptionsChanged",JWPLAYER_CAPTIONS_LIST:"jwplayerCaptionsList",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",state:{BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"},JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem",JWPLAYER_PLAYLIST_COMPLETE:"jwplayerPlaylistComplete",JWPLAYER_DISPLAY_CLICK:"jwplayerViewClick",JWPLAYER_CONTROLS:"jwplayerViewControls",JWPLAYER_INSTREAM_CLICK:"jwplayerInstreamClicked",JWPLAYER_INSTREAM_DESTROYED:"jwplayerInstreamDestroyed"}}(jwplayer),function(e){var t=jwplayer.utils;e.eventdispatcher=function(e,n){var r=e,i=n,s,o;this.resetEventListeners=function(){s={},o=[]},this.resetEventListeners(),this.addEventListener=function(e,n,r){try{t.exists(s[e])||(s[e]=[]),t.typeOf(n)=="string"&&(n=(new Function("return "+n))()),s[e].push({listener:n,count:r})}catch(i){t.log("error",i)}return!1},this.removeEventListener=function(e,n){if(!s[e])return;try{for(var r=0;r<s[e].length;r++)if(s[e][r].listener.toString()==n.toString()){s[e].splice(r,1);break}}catch(i){t.log("error",i)}return!1},this.addGlobalListener=function(e,n){try{t.typeOf(e)=="string"&&(e=(new Function("return "+e))()),o.push({listener:e,count:n})}catch(r){t.log("error",r)}return!1},this.removeGlobalListener=function(e){if(!e)return;try{for(var n=0;n<o.length;n++)if(o[n].listener.toString()==e.toString()){o.splice(n,1);break}}catch(r){t.log("error",r)}return!1},this.sendEvent=function(e,n){t.exists(n)||(n={}),t.extend(n,{id:r,version:jwplayer.version,type:e}),i&&t.log(e,n);if(t.typeOf(s[e])!="undefined")for(var u=0;u<s[e].length;u++){try{s[e][u].listener(n)}catch(a){t.log("There was an error while handling a listener: "+a.toString(),s[e][u].listener)}s[e][u]&&(s[e][u].count===1?delete s[e][u]:s[e][u].count>0&&(s[e][u].count=s[e][u].count-1))}var l;for(l=0;l<o.length;l++){try{o[l].listener(n)}catch(a){t.log("There was an error while handling a listener: "+a.toString(),o[l].listener)}o[l]&&(o[l].count===1?delete o[l]:o[l].count>0&&(o[l].count=o[l].count-1))}}}}(jwplayer.events),function(e){var t={},n={};e.plugins=function(){},e.plugins.loadPlugins=function(r,i){return n[r]=new e.plugins.pluginloader(new e.plugins.model(t),i),n[r]},e.plugins.registerPlugin=function(n,r,i,s){var o=e.utils.getPluginName(n);t[o]||(t[o]=new e.plugins.plugin(n)),t[o].registerPlugin(n,r,i,s)}}(jwplayer),function(e){e.plugins.model=function(t){this.addPlugin=function(n){var r=e.utils.getPluginName(n);return t[r]||(t[r]=new e.plugins.plugin(n)),t[r]},this.getPlugins=function(){return t}}}(jwplayer),function(e){var t=jwplayer.utils,n=jwplayer.events,r="undefined";e.pluginmodes={FLASH:0,JAVASCRIPT:1,HYBRID:2},e.plugin=function(i){function p(){switch(t.getPluginPathType(i)){case t.pluginPathType.ABSOLUTE:return i;case t.pluginPathType.RELATIVE:return t.getAbsolutePath(i,window.location.href)}}function v(e){l=setTimeout(function(){s=t.loaderstatus.COMPLETE,h.sendEvent(n.COMPLETE)},1e3)}function m(e){s=t.loaderstatus.ERROR,h.sendEvent(n.ERROR)}var s=t.loaderstatus.NEW,o,u,f,l,h=new n.eventdispatcher;t.extend(this,h),this.load=function(){if(s==t.loaderstatus.NEW){if(i.lastIndexOf(".swf")>0){o=i,s=t.loaderstatus.COMPLETE,h.sendEvent(n.COMPLETE);return}if(t.getPluginPathType(i)==t.pluginPathType.CDN){s=t.loaderstatus.COMPLETE,h.sendEvent(n.COMPLETE);return}s=t.loaderstatus.LOADING;var e=new t.scriptloader(p());e.addEventListener(n.COMPLETE,v),e.addEventListener(n.ERROR,m),e.load()}},this.registerPlugin=function(e,r,i,p){l&&(clearTimeout(l),l=undefined),f=r,i&&p?(o=p,u=i):typeof i=="string"?o=i:typeof i=="function"?u=i:!i&&!p&&(o=e),s=t.loaderstatus.COMPLETE,h.sendEvent(n.COMPLETE)},this.getStatus=function(){return s},this.getPluginName=function(){return t.getPluginName(i)},this.getFlashPath=function(){if(o)switch(t.getPluginPathType(o)){case t.pluginPathType.ABSOLUTE:return o;case t.pluginPathType.RELATIVE:if(i.lastIndexOf(".swf")>0)return t.getAbsolutePath(o,window.location.href);return t.getAbsolutePath(o,p())}return null},this.getJS=function(){return u},this.getTarget=function(){return f},this.getPluginmode=function(){if(typeof o!=r&&typeof u!=r)return e.pluginmodes.HYBRID;if(typeof o!=r)return e.pluginmodes.FLASH;if(typeof u!=r)return e.pluginmodes.JAVASCRIPT},this.getNewInstance=function(e,t,n){return new u(e,t,n)},this.getURL=function(){return i}}}(jwplayer.plugins),function(e){var t=e.utils,n=e.events;e.plugins.pluginloader=function(r,i){function d(){f?p.sendEvent(n.ERROR,{message:l}):u||(u=!0,s=t.loaderstatus.COMPLETE,p.sendEvent(n.COMPLETE))}function v(){h||d();if(!u&&!f){var n=0,i=r.getPlugins();for(var s in h){var o=t.getPluginName(s),c=i[o],p=c.getJS(),v=c.getTarget(),m=c.getStatus();m==t.loaderstatus.LOADING||m==t.loaderstatus.NEW?n++:p&&(!v||parseFloat(v)>parseFloat(e.version))&&(f=!0,l="Incompatible player version",d())}n==0&&d()}}var s=t.loaderstatus.NEW,o=!1,u=!1,f=!1,l,h=i,p=new n.eventdispatcher;t.extend(this,p),this.setupPlugins=function(e,n,i){var s={length:0,plugins:{}},o={length:0,plugins:{}},u=r.getPlugins();for(var f in n.plugins){var l=t.getPluginName(f),c=u[l],h=c.getFlashPath(),p=c.getJS(),d=c.getURL();h&&(s.plugins[h]=t.extend({},n.plugins[f]),s.plugins[h].pluginmode=c.getPluginmode(),s.length++);if(p&&n.plugins&&n.plugins[d]){var v=document.createElement("div");v.id=e.id+"_"+l,v.style.position="absolute",v.style.top=0,v.style.zIndex=o.length+10,o.plugins[l]=c.getNewInstance(e,t.extend({},n.plugins[d]),v),o.length++,e.onReady(i(o.plugins[l],v,!0)),e.onResize(i(o.plugins[l],v))}}return e.plugins=o.plugins,s},this.load=function(){if(t.exists(i)&&t.typeOf(i)!="object"){v();return}s=t.loaderstatus.LOADING,o=!0;for(var e in i)if(t.exists(e)){var u=r.addPlugin(e);u.addEventListener(n.COMPLETE,v),u.addEventListener(n.ERROR,m)}var f=r.getPlugins();for(e in f)f[e].load();o=!1,v()};var m=this.pluginFailed=function(e){f||(f=!0,l="File not found",d())};this.getStatus=function(){return s}}}(jwplayer),function(e){e.playlist=function(t){var n=[];if(e.utils.typeOf(t)=="array")for(var r=0;r<t.length;r++)n.push(new e.playlist.item(t[r]));else n.push(new e.playlist.item(t));return n}}(jwplayer),function(e){var t=e.item=function(n){var r=jwplayer.utils.extend({},t.defaults,n);r.sources.length==0&&(r.sources=[new e.source(r)]);for(var i=0;i<r.sources.length;i++)r.sources[i]=new e.source(r.sources[i]);return r};t.defaults={description:"",image:"",mediaid:"",title:"",tags:"",duration:-1,sources:[]}}(jwplayer.playlist),function(e){var t=undefined,n=jwplayer.utils,r={file:t,label:t,bitrate:t,width:t,height:t,type:t};e.source=function(e){var t=n.extend({},r);for(var i in r)n.exists(e[i])&&(t[i]=e[i],delete e[i]);return t.type&&t.type.indexOf("/")>0&&(t.type=n.extensionmap.mimeType(t.type)),t}}(jwplayer.playlist),function(e){var t=e.utils,n=e.events,r=document,i=e.embed=function(s){function m(e,t){for(var n in t)typeof e[n]=="function"&&e[n].call(e,t[n])}function g(){if(t.typeOf(o.playlist)=="array"&&o.playlist.length<2)if(o.playlist.length==0||!o.playlist[0].sources||o.playlist[0].sources.length==0){S();return}if(v.getStatus()==t.loaderstatus.COMPLETE){for(var e=0;e<o.modes.length;e++)if(o.modes[e].type&&i[o.modes[e].type]){var r=o.modes[e].config,f=t.extend({},r?i.config.addConfig(o,r):o),l=new i[o.modes[e].type](u,o.modes[e],f,v,s);if(l.supportsConfig())return l.addEventListener(n.ERROR,w),l.embed(),m(s,f.events),s}o.fallback?(t.log("No suitable players found and fallback enabled"),new i.download(u,o,S)):(t.log("No suitable players found and fallback disabled"),y())}}function y(){u.parentNode.replaceChild(f,u)}function w(e){x(u,p+e.message)}function E(e){x(u,"Could not load plugins: "+e.message)}function S(){x(u,p+"No playable sources found")}function x(e,n){if(!o.fallback)return;var r=e.style;r.backgroundColor="#000",r.color="#FFF",r.width=t.styleDimension(o.width),r.height=t.styleDimension(o.height),r.display="table",r.opacity=1;var i=document.createElement("p"),s=i.style;s.verticalAlign="middle",s.textAlign="center",s.display="table-cell",s.font="15px/20px Arial, Helvetica, sans-serif",i.innerHTML=n.replace(":",":<br>"),e.innerHTML="",e.appendChild(i)}var o=new i.config(s.config),u,f,l=o.width,h=o.height,p="Error loading player: ",v=e.plugins.loadPlugins(s.id,o.plugins);return o.id=s.id,f=r.getElementById(s.id),u=r.createElement("div"),u.id=f.id,u.style.width=l.toString().indexOf("%")>0?l:l+"px",u.style.height=h.toString().indexOf("%")>0?h:h+"px",f.parentNode.replaceChild(u,f),e.embed.errorScreen=x,v.addEventListener(n.COMPLETE,g),v.addEventListener(n.ERROR,E),v.load(),s}}(jwplayer),function(e){function o(e){if(!e.playlist){var t={};for(var n in r.defaults)u(e,t,n);if(!t.sources)if(e.levels)t.sources=e.levels,delete e.levels;else{var i={};u(e,i,"file"),u(e,i,"type"),t.sources=i.file?[i]:[]}e.playlist=[t]}else for(var s=0;s<e.playlist.length;s++)e.playlist[s]=new r(e.playlist[s])}function u(e,n,r){t.exists(e[r])&&(n[r]=e[r],delete e[r])}var t=e.utils,n=e.embed,r=e.playlist.item,i=undefined,s=n.config=function(e){function n(e,t,n){for(var r=0;r<e.length;r++){var i=e[r].type;e[r].src||(e[r].src=n[i]?n[i]:t+"jwplayer."+i+(i=="flash"?".swf":".js"))}}var r={fallback:!0,height:270,primary:"html5",width:480,base:i},s={html5:{type:"html5"},flash:{type:"flash"}},u=t.extend(r,e);return u.base||(u.base=t.getScriptPath("jwplayer.js")),u.modes||(u.modes=u.primary=="flash"?[s.flash,s.html5]:[s.html5,s.flash]),u.listbar&&(u.playlistsize=u.listbar.size,u.playlistposition=u.listbar.position),n(u.modes,u.base,{html5:u.html5player,flash:u.flashplayer}),o(u),u};s.addConfig=function(e,n){return o(n),t.extend(e,n)}}(jwplayer),function(e){var t=e.embed,n=e.utils,r=document,i="pointer",s="none",o="block",u="100%",a="relative",f="absolute";t.download=function(t,i,l){function E(){var t,r,i,s,o=h.playlist,u,a,s,f=["mp4","aac","mp3"];if(!o||!o.length)return;u=o[0],a=u.sources;for(s=0;s<a.length;s++){var c=a[s],p=c.type?c.type:n.extensionmap.extType(n.extension(c.file));if(c.file){for(s in f)p==f[s]?(t=c.file,r=u.image):n.isYouTube(c.file)&&(i=c.file);if(t||i)continue}}t?(g=t,y=r,w.prefix&&(n.isHTTPS()&&(w.prefix=w.prefix.replace("http://","https://ssl.")),w.prefix+=e.version.split(/\W/).splice(0,2).join("/")),S(),T()):i?C(i):l()}function S(){t&&(p=N("a","display",t),N("div","icon",p),N("div","logo",p),g&&p.setAttribute("href",n.getAbsolutePath(g)))}function x(e,t){var n=r.querySelectorAll(e);for(var i=0;i<n.length;i++)for(var s in t)n[i].style[s]=t[s]}function T(){var e="#"+t.id+" .jwdownload";t.style.width="",t.style.height="",x(e+"display",{width:n.styleDimension(Math.max(320,v)),height:n.styleDimension(Math.max(180,m)),background:"black center no-repeat "+(y?"url("+y+")":""),backgroundSize:"contain",position:a,border:s,display:o}),x(e+"display div",{position:f,width:u,height:u}),x(e+"logo",{top:w.margin+"px",right:w.margin+"px",background:"top right no-repeat url("+w.prefix+w.file+")"}),x(e+"icon",{background:"center no-repeat url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAgNJREFUeNrs28lqwkAYB/CZqNVDDj2r6FN41QeIy8Fe+gj6BL275Q08u9FbT8ZdwVfotSBYEPUkxFOoks4EKiJdaDuTjMn3wWBO0V/+sySR8SNSqVRKIR8qaXHkzlqS9jCfzzWcTCYp9hF5o+59sVjsiRzcegSckFzcjT+ruN80TeSlAjCAAXzdJSGPFXRpAAMYwACGZQkSdhG4WCzehMNhqV6vG6vVSrirKVEw66YoSqDb7cqlUilE8JjHd/y1MQefVzqdDmiaJpfLZWHgXMHn8F6vJ1cqlVAkEsGuAn83J4gAd2RZymQygX6/L1erVQt+9ZPWb+CDwcCC2zXGJaewl/DhcHhK3DVj+KfKZrMWvFarcYNLomAv4aPRSFZVlTlcSPA5fDweW/BoNIqFnKV53JvncjkLns/n/cLdS+92O7RYLLgsKfv9/t8XlDn4eDyiw+HA9Jyz2eyt0+kY2+3WFC5hluej0Ha7zQQq9PPwdDq1Et1sNsx/nFBgCqWJ8oAK1aUptNVqcYWewE4nahfU0YQnk4ntUEfGMIU2m01HoLaCKbTRaDgKtaVLk9tBYaBcE/6Artdr4RZ5TB6/dC+9iIe/WgAMYADDpAUJAxjAAAYwgGFZgoS/AtNNTF7Z2bL0BYPBV3Jw5xFwwWcYxgtBP5OkE8i9G7aWGOOCruvauwADALMLMEbKf4SdAAAAAElFTkSuQmCC)"})}function N(e,t,n){var i=r.createElement(e);return t&&(i.className="jwdownload"+t),n&&n.appendChild(i),i}function C(e){var n=N("embed","",t);n.src="http://www.youtube.com/v/"+/v[=\/](\w*)|\/(\w+)$|^(\w+)$/i.exec(e).slice(1).join(""),n.type="application/x-shockwave-flash",n.width=v,n.height=m}var h=n.extend({},i),p,v=h.width?h.width:480,m=h.height?h.height:320,g,y,w=i.logo?i.logo:{prefix:"http://p.jwpcdn.com/",file:"logo.png",margin:10};E()}}(jwplayer),function(e){var t=e.utils,n=e.events,r={},i=e.embed.flash=function(i,s,o,u,f){function p(e,t,n){var r=document.createElement("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function v(e,t,n){return function(r){try{n&&document.getElementById(f.id+"_wrapper").appendChild(t);var i=document.getElementById(f.id).getPluginConfig("display");typeof e.resize=="function"&&e.resize(i.width,i.height),t.style.left=i.x,t.style.top=i.h}catch(s){}}}function m(e){if(!e)return{};var t={};for(var n in e){var r=e[n];for(var i in r)t[n+"."+i]=r[i]}return t}function g(e){if(!e)return{};var n={},r=[];for(var i in e){var s=t.getPluginName(i),o=e[i];r.push(i);for(var u in o)n[s+"."+u]=o[u]}return n.plugins=r.join(","),n}function y(e){var n={};for(var r in e)typeof e[r]=="object"?n[r]="[[JSON]]"+t.jsonToString(e[r]):n[r]=e[r];return n}function w(e,n){if(t.isYouTube(e))return!0;if(t.isRtmp(e,n))return!0;if(n=="hls")return!0;var r=t.extensionmap[n?n:t.extension(e)];return r?!!r.flash:!1}var l=new e.events.eventdispatcher,h=t.flashVersion();t.extend(this,l),this.embed=function(){o.id=f.id;if(h<10)return l.sendEvent(n.ERROR,{message:"Flash version must be 10.0 or greater"}),!1;var e,c=t.extend({},o);i.id+"_wrapper"==i.parentNode.id?e=document.getElementById(i.id+"_wrapper"):(e=document.createElement("div"),e.id=i.id+"_wrapper",e.style.position="relative",e.style.width=t.styleDimension(c.width),e.style.height=t.styleDimension(c.height),i.parentNode.replaceChild(e,i),e.appendChild(i));var m=u.setupPlugins(f,c,v);m.length>0?t.extend(c,g(m.plugins)):delete c.plugins,typeof c["dock.position"]!="undefined"&&c["dock.position"].toString().toLowerCase()=="false"&&(c.dock=c["dock.position"],delete c["dock.position"]);var w=t.getCookies();for(var E in w)typeof c[E]=="undefined"&&(c[E]=w[E]);var S="#000000",x,T=c.wmode?c.wmode:c.height&&c.height<=40?"transparent":"opaque",N=["height","width","modes","events","primary","base","fallback"];for(var C=0;C<N.length;C++)delete c[N[C]];var L=window.location.pathname.split("/");L.splice(L.length-1,1),L=L.join("/"),c.base=L+"/",r[i.id]=y(c);if(t.isIE()){var A='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" " width="100%" height="100%" id="'+i.id+'" name="'+i.id+'" tabindex=0"">';A+='<param name="movie" value="'+s.src+'">',A+='<param name="allowfullscreen" value="true">',A+='<param name="allowscriptaccess" value="always">',A+='<param name="seamlesstabbing" value="true">',A+='<param name="wmode" value="'+T+'">',A+='<param name="bgcolor" value="'+S+'">',A+="</object>",i.outerHTML=A,x=document.getElementById(i.id)}else{var O=document.createElement("object");O.setAttribute("type","application/x-shockwave-flash"),O.setAttribute("data",s.src),O.setAttribute("width","100%"),O.setAttribute("height","100%"),O.setAttribute("bgcolor",S),O.setAttribute("id",i.id),O.setAttribute("name",i.id),O.setAttribute("tabindex",0),p(O,"allowfullscreen","true"),p(O,"allowscriptaccess","always"),p(O,"seamlesstabbing","true"),p(O,"wmode",T),i.parentNode.replaceChild(O,i),x=O}f.container=x,f.setPlayer(x,"flash")},this.supportsConfig=function(){if(h){if(!o)return!0;try{var e=o.playlist[0],t=e.sources;if(typeof t=="undefined")return!0;for(var n=0;n<t.length;n++)if(t[n].file&&w(t[n].file,t[n].type))return!0}catch(r){return!1}}return!1}};i.getVars=function(e){return r[e]}}(jwplayer),function(e){var t=e.utils,n=t.extensionmap,r=e.events;e.embed.html5=function(i,s,o,u,f){function p(e,t,n){return function(r){try{var s=document.querySelector("#"+i.id+" .jwmain");n&&s.appendChild(t),typeof e.resize=="function"&&(e.resize(s.clientWidth,s.clientHeight),setTimeout(function(){e.resize(s.clientWidth,s.clientHeight)},400)),t.left=s.style.left,t.top=s.style.top}catch(o){}}}function v(e){l.sendEvent(e.type,{message:"HTML5 player not found"})}function m(e,r){if(navigator.userAgent.match(/BlackBerry/i)!==null)return!1;if(t.isRtmp(e,r))return!1;var i=n[r?r:t.extension(e)];return i?i.flash&&!i.html5?!1:g(i.html5):!1}function g(t){var n=e.vid;if(!t)return!0;try{return n.canPlayType(t)?!0:!1}catch(r){return!1}}var l=this,h=new r.eventdispatcher;t.extend(l,h),l.embed=function(){if(e.html5){u.setupPlugins(f,o,p),i.innerHTML="";var n=e.utils.extend({},o),h=new e.html5.player(n);f.container=document.getElementById(f.id),f.setPlayer(h,"html5")}else{var m=new t.scriptloader(s.src);m.addEventListener(r.ERROR,v),m.addEventListener(r.COMPLETE,l.embed),m.load()}},l.supportsConfig=function(){if(!!e.vid.canPlayType)try{if(t.typeOf(o.playlist)=="string")return!0;var n=o.playlist[0].sources;for(var r=0;r<n.length;r++){var i=n[r].file,s=n[r].type;if(m(i,s))return!0}}catch(u){return!1}return!1}}}(jwplayer),function(e){var t=e.embed,n=e.utils,r=n.extend(function(r){var i=r.config,s=i.plugins,o=i.analytics,u=(n.isHTTPS()?"https://ssl.":"http://")+"p.jwpcdn.com/"+e.version.replace(/(\d+)\.(\d+).*/,"$1/$2")+"/jwpsrv.js";return delete i.key,e.key&&(i.key=e.key),delete i.analytics,s=s?s:{},s[u]=o?o:{},i.plugins=s,new t(r)},t);e.embed=r}(jwplayer),function(e){var t=[],n=e.utils,r=e.events,i=r.state,s=document,o=e.api=function(t){function N(e,t){return function(n){return t(e,n)}}function C(e){y=[],o.destroyPlayer(e.id)}function k(e,t){return c[e]||(c[e]=[],_(r.JWPLAYER_PLAYER_STATE,L(e))),c[e].push(t),u}function L(e){return function(t){var n=t.newstate,r=t.oldstate;if(n==e){var i=c[n];if(i)for(var s=0;s<i.length;s++)typeof i[s]=="function"&&i[s].call(this,{oldstate:r,newstate:n})}}}function A(e,t,n){return h[e]||(h[e]={}),h[e][t]||(h[e][t]=[],_(t,O(e,t))),h[e][t].push(n),u}function O(e,t){return function(n){if(e==n.component){var r=h[e][t];if(r)for(var i=0;i<r.length;i++)typeof r[i]=="function"&&r[i].call(this,n)}}}function M(e,t){try{e.jwAddEventListener(t,'function(dat) { jwplayer("'+u.id+'").dispatchEvent("'+t+'", dat); }')}catch(r){n.log("Could not add internal listener")}}function _(e,t){return l[e]||(l[e]=[],v&&m&&M(v,e)),l[e].push(t),u}function D(){if(m){var e=arguments[0],t=[];for(var n=1;n<arguments.length;n++)t.push(arguments[n]);if(typeof v!="undefined"&&typeof v[e]=="function")switch(t.length){case 4:return v[e](t[0],t[1],t[2],t[3]);case 3:return v[e](t[0],t[1],t[2]);case 2:return v[e](t[0],t[1]);case 1:return v[e](t[0]);default:return v[e]()}return null}y.push(arguments)}function P(e,t,n){var r=[];t||(t=0),n||(n=e.length-1);for(var i=t;i<=n;i++)r.push(e[i]);return r}var u=this,l={},c={},h={},p=[],v=undefined,m=!1,y=[],w=undefined,E={},S={};u.container=t,u.id=t.id,u.getBuffer=function(){return D("jwGetBuffer")},u.getContainer=function(){return u.container},u.addButton=function(e,t,r,i){try{S[i]=r;var s="jwplayer('"+u.id+"').callback('"+i+"')";D("jwDockAddButton",e,t,s,i)}catch(o){n.log("Could not add dock button"+o.message)}},u.removeButton=function(e){D("jwDockRemoveButton",e)},u.callback=function(e){S[e]&&S[e]()},u.getDuration=function(){return D("jwGetDuration")},u.getFullscreen=function(){return D("jwGetFullscreen")},u.getStretching=function(){return D("jwGetStretching")},u.getHeight=function(){return D("jwGetHeight")},u.getLockState=function(){return D("jwGetLockState")},u.getMeta=function(){return u.getItemMeta()},u.getMute=function(){return D("jwGetMute")},u.getPlaylist=function(){var e=D("jwGetPlaylist");u.renderingMode=="flash"&&n.deepReplaceKeyName(e,["__dot__","__spc__","__dsh__"],["."," ","-"]);for(var t=0;t<e.length;t++)n.exists(e[t].index)||(e[t].index=t);return e},u.getPlaylistItem=function(e){return n.exists(e)||(e=u.getCurrentItem()),u.getPlaylist()[e]},u.getPosition=function(){return D("jwGetPosition")},u.getRenderingMode=function(){return u.renderingMode},u.getState=function(){return D("jwGetState")},u.getVolume=function(){return D("jwGetVolume")},u.getWidth=function(){return D("jwGetWidth")},u.setFullscreen=function(e){return n.exists(e)?D("jwSetFullscreen",e):D("jwSetFullscreen",!D("jwGetFullscreen")),u},u.setStretching=function(e){return D("jwSetStretching",e),u},u.setMute=function(e){return n.exists(e)?D("jwSetMute",e):D("jwSetMute",!D("jwGetMute")),u},u.lock=function(){return u},u.unlock=function(){return u},u.load=function(e){return D("jwLoad",e),u},u.playlistItem=function(e){return D("jwPlaylistItem",parseInt(e)),u},u.playlistPrev=function(){return D("jwPlaylistPrev"),u},u.playlistNext=function(){return D("jwPlaylistNext"),u},u.resize=function(e,t){if(u.renderingMode=="html5")v.jwResize(e,t);else{var r=s.getElementById(u.id+"_wrapper");r&&(r.style.width=n.styleDimension(e),r.style.height=n.styleDimension(t))}return u},u.play=function(e){return typeof e=="undefined"?(e=u.getState(),e==i.PLAYING||e==i.BUFFERING?D("jwPause"):D("jwPlay")):D("jwPlay",e),u},u.pause=function(e){return typeof e=="undefined"?(e=u.getState(),e==i.PLAYING||e==i.BUFFERING?D("jwPause"):D("jwPlay")):D("jwPause",e),u},u.stop=function(){return D("jwStop"),u},u.seek=function(e){return D("jwSeek",e),u},u.setVolume=function(e){return D("jwSetVolume",e),u},u.loadInstream=function(e,t){return w=new o.instream(this,v,e,t),w},u.getQualityLevels=function(){return D("jwGetQualityLevels")},u.getCurrentQuality=function(){return D("jwGetCurrentQuality")},u.setCurrentQuality=function(e){D("jwSetCurrentQuality",e)},u.getCaptionsList=function(){return D("jwGetCaptionsList")},u.getCurrentCaptions=function(){return D("jwGetCurrentCaptions")},u.setCurrentCaptions=function(e){D("jwSetCurrentCaptions"
,e)},u.getControls=function(){return D("jwGetControls")},u.getSafeRegion=function(){return D("jwGetSafeRegion")},u.setControls=function(e){D("jwSetControls",e)};var x={onBufferChange:r.JWPLAYER_MEDIA_BUFFER,onBufferFull:r.JWPLAYER_MEDIA_BUFFER_FULL,onError:r.JWPLAYER_ERROR,onFullscreen:r.JWPLAYER_FULLSCREEN,onMeta:r.JWPLAYER_MEDIA_META,onMute:r.JWPLAYER_MEDIA_MUTE,onPlaylist:r.JWPLAYER_PLAYLIST_LOADED,onPlaylistItem:r.JWPLAYER_PLAYLIST_ITEM,onPlaylistComplete:r.JWPLAYER_PLAYLIST_COMPLETE,onReady:r.API_READY,onResize:r.JWPLAYER_RESIZE,onComplete:r.JWPLAYER_MEDIA_COMPLETE,onSeek:r.JWPLAYER_MEDIA_SEEK,onTime:r.JWPLAYER_MEDIA_TIME,onVolume:r.JWPLAYER_MEDIA_VOLUME,onBeforePlay:r.JWPLAYER_MEDIA_BEFOREPLAY,onBeforeComplete:r.JWPLAYER_MEDIA_BEFORECOMPLETE,onDisplayClick:r.JWPLAYER_DISPLAY_CLICK,onControls:r.JWPLAYER_CONTROLS,onQualityLevels:r.JWPLAYER_MEDIA_LEVELS,onQualityChange:r.JWPLAYER_MEDIA_LEVEL_CHANGED,onCaptionsList:r.JWPLAYER_CAPTIONS_LIST,onCaptionsChange:r.JWPLAYER_CAPTIONS_CHANGED};n.foreach(x,function(e){u[e]=N(x[e],_)});var T={onBuffer:i.BUFFERING,onPause:i.PAUSED,onPlay:i.PLAYING,onIdle:i.IDLE};return n.foreach(T,function(e){u[e]=N(T[e],k)}),u.remove=function(){if(!m)throw"Cannot call remove() before player is ready";C(this)},u.setup=function(t){if(e.embed){C(u);var n=e(u.id);return n.config=t,new e.embed(n)}return u},u.registerPlugin=function(t,n,r,i){e.plugins.registerPlugin(t,n,r,i)},u.setPlayer=function(e,t){v=e,u.renderingMode=t},u.detachMedia=function(){if(u.renderingMode=="html5")return D("jwDetachMedia")},u.attachMedia=function(){if(u.renderingMode=="html5")return D("jwAttachMedia")},u.dispatchEvent=function(e){if(l[e]){var t=n.translateEventResponse(e,arguments[1]);for(var r=0;r<l[e].length;r++)typeof l[e][r]=="function"&&l[e][r].call(this,t)}},u.dispatchInstreamEvent=function(e){w&&w.dispatchEvent(e,arguments)},u.playerReady=function(e){m=!0,v||u.setPlayer(s.getElementById(e.id)),u.container=s.getElementById(u.id),n.foreach(l,function(e){M(v,e)}),_(r.JWPLAYER_PLAYLIST_ITEM,function(e){E={}}),_(r.JWPLAYER_MEDIA_META,function(e){n.extend(E,e.metadata)}),u.dispatchEvent(r.API_READY);while(y.length>0)D.apply(this,y.shift())},u.getItemMeta=function(){return E},u.getCurrentItem=function(){return D("jwGetPlaylistIndex")},u};o.selectPlayer=function(e){var r;n.exists(e)||(e=0),e.nodeType?r=e:typeof e=="string"&&(r=s.getElementById(e));if(r){var i=o.playerById(r.id);return i?i:o.addPlayer(new o(r))}return typeof e=="number"?t[e]:null},o.playerById=function(e){for(var n=0;n<t.length;n++)if(t[n].id==e)return t[n];return null},o.addPlayer=function(e){for(var n=0;n<t.length;n++)if(t[n]==e)return e;return t.push(e),e},o.destroyPlayer=function(e){var r=-1,i;for(var o=0;o<t.length;o++)if(t[o].id==e){r=o,i=t[o];continue}if(r>=0){var u=i.id,f=s.getElementById(u+(i.renderingMode=="flash"?"_wrapper":""));n.clearCss&&n.clearCss("#"+u);if(f){var l=s.createElement("div");l.id=u,f.parentNode.replaceChild(l,f)}t.splice(r,1)}return null},e.playerReady=function(t){var n=e.api.playerById(t.id);n?n.playerReady(t):e.api.selectPlayer(t.id).playerReady(t)}}(jwplayer),function(e){var t=e.events,n=t.state;e.api.instream=function(e,r,i,s){function d(){o.callInternal("jwLoadInstream",i,s)}function v(e,t){u.jwInstreamAddEventListener(t,'function(dat) { jwplayer("'+o.id+'").dispatchInstreamEvent("'+t+'", dat); }')}function m(e,t){return h[e]||(h[e]=[],v(u,e)),h[e].push(t),this}function g(e,n){return p[e]||(p[e]=[],m(t.JWPLAYER_PLAYER_STATE,y(e))),p[e].push(n),this}function y(e){return function(t){var n=t.newstate,r=t.oldstate;if(n==e){var i=p[n];if(i)for(var s=0;s<i.length;s++)typeof i[s]=="function"&&i[s].call(this,{oldstate:r,newstate:n,type:t.type})}}}var o=e,u=r,f=i,l=s,h={},p={};this.dispatchEvent=function(e,t){if(h[e]){var n=_utils.translateEventResponse(e,t[1]);for(var r=0;r<h[e].length;r++)typeof h[e][r]=="function"&&h[e][r].call(this,n)}},this.onError=function(e){return m(t.JWPLAYER_ERROR,e)},this.onFullscreen=function(e){return m(t.JWPLAYER_FULLSCREEN,e)},this.onMeta=function(e){return m(t.JWPLAYER_MEDIA_META,e)},this.onMute=function(e){return m(t.JWPLAYER_MEDIA_MUTE,e)},this.onComplete=function(e){return m(t.JWPLAYER_MEDIA_COMPLETE,e)},this.onSeek=function(e){return m(t.JWPLAYER_MEDIA_SEEK,e)},this.onTime=function(e){return m(t.JWPLAYER_MEDIA_TIME,e)},this.onVolume=function(e){return m(t.JWPLAYER_MEDIA_VOLUME,e)},this.onBuffer=function(e){return g(n.BUFFERING,e)},this.onPause=function(e){return g(n.PAUSED,e)},this.onPlay=function(e){return g(n.PLAYING,e)},this.onIdle=function(e){return g(n.IDLE,e)},this.onInstreamClick=function(e){return m(t.JWPLAYER_INSTREAM_CLICK,e)},this.onInstreamDestroyed=function(e){return m(t.JWPLAYER_INSTREAM_DESTROYED,e)},this.play=function(e){u.jwInstreamPlay(e)},this.pause=function(e){u.jwInstreamPause(e)},this.seek=function(e){u.jwInstreamSeek(e)},this.destroy=function(){u.jwInstreamDestroy()},this.getState=function(){return u.jwInstreamGetState()},this.getDuration=function(){return u.jwInstreamGetDuration()},this.getPosition=function(){return u.jwInstreamGetPosition()},d()}}(jwplayer));