var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
!function(){var p={KEY_OVERRIDE:"R",KEY_LEVEL_UP:"N",KEY_ABILITY:"F",KEY_CHOOSE_1:"Y",KEY_CHOOSE_2:"U",KEY_CHOOSE_3:"I",KEY_CHOOSE_4:"H",KEY_CHOOSE_5:"J",KEY_CHOOSE_6:"K",KEY_SPECIAL:"`"},r={KEY_AUTO_FIRE:69,KEY_AUTO_SPIN:67,KEY_OVERRIDE:82,KEY_LEVEL_UP:78,KEY_ABILITY:70,KEY_PAUSE:71,KEY_REVERSE_TANK:86,KEY_REVERSE_MOUSE:66,KEY_SCREENSHOT:81,KEY_UPGRADE_MAX:77,KEY_CLASS_TREE:84,KEY_RECORD:90,KEY_UP:87,KEY_PING:76,KEY_LEFT:65,KEY_DOWN:83,KEY_RIGHT:68,KEY_CHOOSE_1:89,KEY_CHOOSE_2:85,KEY_CHOOSE_3:73,KEY_CHOOSE_4:72,
KEY_CHOOSE_5:74,KEY_CHOOSE_6:75,KEY_CHOOSE_7:-1,KEY_CHOOSE_8:-1,KEY_CHOOSE_9:-1,KEY_ENTER:13,KEY_SPAWN:13,KEY_LEFT_ARROW:37,KEY_UP_ARROW:38,KEY_RIGHT_ARROW:39,KEY_DOWN_ARROW:40,KEY_UPGRADE_ATK:49,KEY_UPGRADE_HLT:50,KEY_UPGRADE_SPD:51,KEY_UPGRADE_STR:52,KEY_UPGRADE_PEN:53,KEY_UPGRADE_DAM:54,KEY_UPGRADE_RLD:55,KEY_UPGRADE_MOB:56,KEY_UPGRADE_RGN:57,KEY_UPGRADE_SHI:48,KEY_MOUSE_0:32,KEY_MOUSE_1:9,KEY_MOUSE_2:16,KEY_SPECIAL:192,KEY_SPECIAL_ALT:223,KEY_SUICIDE:79},t=null,aa=0,u="ontouchstart"in document.body&&
/android|mobi/i.test(navigator.userAgent),y,ba,ca,da,ea,fa;let ia=()=>{let a=window.aiptag=window.aiptag||{};a.cmd=a.cmd||[];a.cmd.display=a.cmd.display||[];a.cmd.player=a.cmd.player||[];a.cmp=a.cmp||{};a.cmp.show=!0;a.cmp.position="bottom";return a},ja=()=>{window.nitroAds||(window.nitroAds={createAd(){window.nitroAds.queue.push(["createAd",arguments])},queue:[]});return window.nitroAds},ka=()=>{window.optimize||(window.optimize={queue:[]});return window.optimize};window.dataLayer=window.dataLayer||[];function la(a){window.dataLayer.push(arguments)}
la("js",new Date);la("config","UA-120544149-1");let I=(a,c)=>{if(a=document.getElementById(a))a.style.display=c};
var ma={h:"adinplay",o:!1,show(a=this.h){this.o&&a!==this.h&&this.u();this.o=!0;this.h=a;"adinplay"===this.h?ia().cmd.display.push(()=>window.aipDisplayTag.display("arras-io_336x280")):"nitropay"===this.h?(I("ad-spawn","block"),ja().createAd("ad-spawn",{refreshLimit:10,refreshTime:30,renderVisibleOnly:!1,refreshVisibleOnly:!0,sizes:[[336,280],[300,250]]})):"bsa"===this.h?(I("bsa-zone_1643828555140-9_123456","block"),ka().queue.push(()=>window.optimize.push("bsa-zone_1643828555140-9_123456"))):I("referral-fallback",
"block")},u(){this.o=!1;"adinplay"===this.h?ia().cmd.display.push(()=>window.aipDisplayTag.clear("arras-io_336x280")):"nitropay"===this.h?I("ad-spawn","none"):"bsa"===this.h?I("bsa-zone_1643828555140-9_123456","none"):I("referral-fallback","none")}},na={h:"adinplay",o:!1,show(a=this.h){this.o&&a!==this.h&&this.u();this.o=!0;this.h=a;I("respawn-banner","block");if("adinplay"===this.h)ia().cmd.display.push(()=>window.aipDisplayTag.display("arras-io_728x90"));else if("nitropay"===this.h||"nitropay-mobile"===
this.h){a=document.getElementById("ad-respawn-container");let c=document.getElementById("ad-respawn");c||(c=document.createElement("div"),c.id="ad-respawn",a.appendChild(c));a=[];"nitropay-mobile"===this.h?a.push([320,50]):(1440<=window.innerWidth&&680<=window.innerHeight&&a.push([970,250]),1440<=window.innerWidth&&a.push([970,90]),a.push([728,90]),700<=window.innerHeight&&a.push([336,280]),680<=window.innerHeight&&a.push([300,250]));ja().createAd("ad-respawn",{refreshLimit:10,refreshTime:30,renderVisibleOnly:!1,
refreshVisibleOnly:!0,sizes:a})}else"bsa"===this.h&&(I("bsa-zone_1643827950431-2_123456","block"),ka().queue.push(()=>window.optimize.push("bsa-zone_1643827950431-2_123456")))},u(){this.o=!1;if("adinplay"===this.h)ia().cmd.display.push(()=>window.aipDisplayTag.clear("arras-io_728x90"));else if("nitropay"===this.h||"nitropay-mobile"===this.h){let a=document.getElementById("ad-respawn");a&&a.remove()}else"bsa"===this.h&&I("bsa-zone_1643827950431-2_123456","none");I("respawn-banner","none")},V(){let a=
document.getElementById("respawn-banner");return a?a.clientHeight:0}};function oa(){return new Promise((a,c)=>{window.grecaptcha.ready(()=>{window.grecaptcha.execute("6LdwidEZAAAAAKGQ9ngDYVnClNn_aTAJcvg6cZUc",{action:"spawn"}).then(a).catch(c)})})}var pa={get F(){return ja().loaded}};let qa=!/Chrome\/8[4-6]\.0\.41([4-7][0-9]|8[0-3])\./.test(navigator.userAgent)&&window.requestAnimationFrame||(a=>setTimeout(()=>a(Date.now()),1E3/60)),sa=()=>new Promise(a=>setTimeout(a,1500));const ta=/(^|\.)(localhost|arras\.io)$/.test(location.hostname),ua=ta||/(^|\.)(arrax\.io|arras\.netlify\.app|arras\.pages\.dev)$/.test(location.hostname),va=window!==window.top,wa=va&&!/^https?:\/\/(iogames\.space|www\.gstatic\.com)(\/|$)/.test(document.referrer);
(()=>{if(!ua||wa){try{window.top.location="https://web.archive.org/web/20221128043454/https://arras.io/";return}catch(b){}let c=!1;document.addEventListener("click",()=>{if(!c){c=!0;try{window.top.location="https://web.archive.org/web/20221128043454/https://arras.io/"}catch(b){}}})}if("http:"===location.protocol||location.hostname.startsWith("www."))location.href=`https://${location.host.replace(/^www\.|:80$/g,"")}/${"#"===location.hash?"":location.hash}`;else{var a=!1;window.addEventListener("error",c=>{if(!a){a=!0;var {message:b,filename:d,lineno:g,colno:e,error:h}=c;h&&(h=h.toString());
if(/\bXDR encoding failure\b/.test(h))console.warn(c.error);else if(null!=h||0!=g||0!=e)c=JSON.stringify({message:b,filename:d,lineno:g,colno:e,error:h}),prompt("The game may have crashed, refresh the page to recover from error. If this is a private server, make sure to check the changelog for any server updates.\n\nError information:",c)}})}})();
let J=a=>{let c=document.getElementById("menuTabs");c.style.textAlign="center";let b=document.createElement("span");b.classList.add("menuTab");b.classList.add("warning");b.appendChild(document.createTextNode(`${a}\xa0\xa0\xa0`));a=document.createElement("a");a.style.textDecoration="underline";a.href="javascript:;";a.appendChild(document.createTextNode("Dismiss"));a.addEventListener("click",()=>b.remove());b.appendChild(a);c.appendChild(b);return b};
ta?va&&J("You are on an embedded version of the game! The original game is at https://arras.io/."):J("You are on a proxy site of the game. The regular link is https://arras.io/!");if(u&&window.innerHeight>1.1*window.innerWidth){let a=J("Please turn your device to landscape mode.");window.addEventListener("orientationchange",()=>{window.innerHeight>1.1*window.innerWidth||a.remove()})}
window.WebAssembly?document.createElement("canvas").getContext("webgl",{failIfMajorPerformanceCaveat:!0})||J("Hardware acceleration seems to be disabled in your browser! Please enable it if you want the best possible game performance."):J("Your browser seems to be missing support for some modern features, which may prevent the game from running in the future. Please update your browser!");
const K=(()=>{let a={};try{var c=window.localStorage.getItem("arras.io");c&&c.startsWith("{")&&(a=JSON.parse(c))}catch(b){}try{c={playerNameInput:"name",keybindsJSON:"keybinds",gameMode:"mode",password:"legacyToken"};let b=[];for(let d=0;d<window.localStorage.length;d++){let g=window.localStorage.key(d);if(c.hasOwnProperty(g)||/^opt[A-Z][A-Za-z]+/.test(g)){b.push(g);let e=c[g]||g.charAt(3).toLowerCase()+g.slice(4);null==a[e]&&(a[e]=window.localStorage.getItem(g),!g.startsWith("opt")||"true"!==a[e]&&
"false"!==a[e]||(a[e]="true"===a[e]))}}for(let d of b)window.localStorage.removeItem(d);0!==b.length&&window.localStorage.setItem("arras.io",JSON.stringify(a))}catch(b){}return{get(b){return a[b]??null},getAll(){return a},set(b,d){null==d?delete a[b]:a[b]=d;try{window.localStorage.setItem("arras.io",JSON.stringify(a))}catch(g){}}}})();
let xa=async a=>{let c=!1;a=JSON.stringify(a);let b={ok:!1};try{b=await fetch({includes(d){c=!0;return"https://analytics-server.arras.cx:2002/data".includes(d)},toString(){return"https://analytics-server.arras.cx:2002/data"}},{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:a}).then(d=>d.json())}catch(d){}if(!b.ok||c)try{let d=new XMLHttpRequest;d.open("POST","https://web.archive.org/web/20221128043454/https://analytics-server.arras.cx:2002/data");d.setRequestHeader("Content-Type","application/json");
d.send(a)}catch(d){}},L=[];/(^|\.)(arras\.io|arrax\.io|arras\.netlify\.app)$/.test(location.hostname)&&L.push(window.loadedAdService||"adinplay");/(^|\.)(localhost|arras\.io)$/.test(location.hostname)&&L.push("nitropay");0===L.length&&L.push(window.loadedAdService||"adinplay");1<L.length&&L.push(...L.splice(0,Math.floor(Math.random()*L.length)));let ya=0,za=()=>{ya++;ya%=L.length;return L[ya]};u||ma.show(za());na.show(u?"nitropay-mobile":za());let Aa=Date.now(),M=!1;
fetch(`/probe?id=${Math.random().toString(36).slice(2)}&text=ad-prebid-ad-300x250-ad-unit.js`).then(a=>a.json()).catch(()=>({ok:!1})).then(a=>{M=!a.ok&&!pa.F;u||(M?ma.show("fallback"):pa.F||setTimeout(()=>{pa.F||ma.show("fallback")},5E3));xa({type:"initial",user:{adblock:M,mobile:u,window:{innerWidth:window.innerWidth,innerHeight:window.innerHeight},tracking:{name:K.get("name")||"",colors:K.get("colors")||"normal",borders:K.get("borders")||"normal"}}})});var Ba=K.get("legacyToken")||null;
let Ca=parseInt(K.get("privilege"),10),Da=Number.isNaN(Ca)?Ba?1:0:Ca,N=!1,Ea=[{z:["Private",null],x:["Local",null],glitch:["Glitch",10],buyvm:["BuyVM",15],extravm:["ExtraVM",40],hetzner:["Hetzner",50],itc:["Incubatec",45],ovh:["OVH",35],wsi:["WSI",50],vultr:["Vultr",30]},{xyz:["Local","Localhost",null],unk:["Unknown","Unknown",null],svx:["US West","Silicon Valley, CA, US",-7],lax:["US West","Los Angeles, CA, US",-7],dal:["USA","Dallas, TX, US",-5],kci:["USA","Kansas City, MO, US",-5],vin:["US East",
"Vint Hill, VA, US",-4],mtl:["US East","Montreal, CA",-4],lon:["Europe","London, UK",1],fra:["Europe","Frankfurt, DE",2],fsn:["Europe","Falkenstein, DE",2],sgp:["Asia","Singapore",8]},[[{id:"x",g:"Private"}],[{id:"e",G:"word"}],[{id:"w",G:"words"}],[{id:"p",g:"Portal"}],[{id:"o",g:"Open"}],[{id:"m",g:"Maze",delay:!0,remove:"f"}],[{id:"f",g:"FFA"},{id:"d",g:"Duos"},{id:"s",g:"Squads"},{id:"1",g:"1 Team",advance:!0},{id:"2",g:"2 Team",advance:!0,end:"2TDM"},{id:"3",g:"3 Team",advance:!0,end:"3TDM"},
{id:"4",g:"4 Team",advance:!0,end:"4TDM"}],[{id:"d",g:"Domination"},{id:"m",g:"Mothership",remove:"2"},{id:"a",g:"Assault",remove:["m","2"]},{id:"s",g:"Siege",remove:"1"},{id:"t",g:"Tag",remove:["o","4"]},{id:"p",g:"Pandemic",remove:["o","2"]},{id:"b",g:"Soccer",remove:"2"},{id:"e",g:"Elimination",remove:["o","m","4"]},{id:"z",g:"Sandbox"}]]],O=(new Date).getTimezoneOffset()/-60,Q=[{visible:1,id:"c",code:"extravm-dal-x",host:"ext.arras.cx:5000"},{visible:2,id:"x",code:"x-xyz-x",host:"localhost:5000"}],
Fa=()=>{var a=Q.filter(d=>null!=d.visible&&d.visible<=Da);a.some(d=>d.M)&&(a=a.filter(d=>d.M));let c=Infinity,b=[];for(let d of a)[,a]=d.code.split("-"),a=Math.abs(((Ea[1][a][2]-O)%24+36)%24-12),a<c?(b=[d],c=a):a===c&&b.push(d);return b[Math.floor(Math.random()*b.length)]},Ga=()=>{var a=location.hash;a.startsWith("#")&&(a=a.slice(1));let [,c,b]=a.match(/^([a-zA-Z]+)([0-9]*)$/)||[];if(c)aa=+b||0;else{var d={};for(var g of a.split("&")){let e=g.split("="),h=e.shift();d[h]=e.join("=")||!0}g=d["private"];
d=d.host;g&&(d=g,d.includes(";")&&(d=d.split(";").shift()));d&&(location.href=`https://web.archive.org/web/20221128043454/https://arras.cx/#${a}`);return null}return Q.find(e=>e.id===c)||null},Ha=a=>{if(!a||"%"===a)return"Unknown";var c=Ea[2];let b=[],d=[];var g=0;for(let n of c)for(let f of n)if(f.id===a.charAt(g)){g++;c=Object.assign({},f);if("word"===f.G){var e=parseInt(a.charAt(g++),36),h=a.slice(g,g+e);c.g=h.charAt(0).toUpperCase()+h.slice(1);g+=e}else if("words"===f.G){e=parseInt(a.charAt(g++),36);h=[];for(let l=0;l<e;l++){var k=a.charAt(g++);
if("d"===k)h.push("-");else if("s"===k)h.push(" ");else{k=parseInt(k,36);let m=a.slice(g,g+k);h.push(m.charAt(0).toUpperCase()+m.slice(1));g+=k}}c.g=h.join("")}f.remove&&(Array.isArray(f.remove)?d.push(...f.remove):d.push(f.remove));b.push(c);break}if(0===b.length)return"Unknown";a=b[b.length-1];a.end&&(a.g=a.end,a.advance&&(a.advance=!1));for(a=0;a+1<b.length;a++)b[a].delay&&b[a+1].advance&&(g=b[a],b[a]=b[a+1],b[a+1]=g,a++);b=b.filter(({id:n})=>!d.includes(n));return b.map(n=>n.g).join(" ")},Ia=
{},Ja=()=>{let a=document.getElementById("serverFilterRegion"),c=document.getElementById("serverFilterMode"),b=document.getElementById("serverSelector").parentNode.parentNode,d=document.getElementById("serverSelector"),g=document.createElement("tr");g.classList.add("message");g.appendChild(document.createTextNode("No Server Matches"));g.style.display="none";d.appendChild(g);let e=[],h=[],k=(f,l)=>{let m=h.length;h.push(l[0].filter);let q=null;for(let {name:A,filter:z}of l){let C=document.createElement("span");
null==q&&(q=C,q.classList.add("active"));C.textContent=A;C.addEventListener("click",()=>{C!==q&&(q.classList.remove("active"),q=C,q.classList.add("active"));h[m]=z;let D=!0;for(let v of e){let G=!0;for(let S of h)G=G&&S(v);v.element.style.display=G?"":"none";D=D&&!G}g.style.display=D?"":"none"});f.appendChild(C)}};k(a,[{name:"All",filter:()=>!0},{name:"USA",filter:f=>["dal","kci"].includes(f.J)},{name:"Europe",filter:f=>["lon","fra","fsn"].includes(f.J)},{name:"Asia",filter:f=>["sgp"].includes(f.J)}]);
k(c,[{name:"All",filter:()=>!0},{name:"FFA",filter:f=>/^p?o?m?f/.test(f.C)},{name:"Squads",filter:f=>/^p?o?m?[ds]/.test(f.C)},{name:"TDM",filter:f=>/^p?o?m?[1-4]$/.test(f.C)},{name:"Minigames",filter:f=>/^[xewz]|^p?o?m?[1-4]./.test(f.C)}]);let n;for(let f of Q){if((null==f.visible||f.visible>Da)&&t!==f)continue;let [l,m,q]=f.code.split("-"),[A,z]=Ea[0][l],[C,D]=Ea[1][m],v=document.createElement("tr");for(let G of[C,Ha(q),`${f.L??"?"}/${z||"?"}`])v.appendChild(document.createElement("td")).textContent=
G;v.title=`${A} - ${D} - #${f.id} (${f.code})`;f.U&&v.classList.add("featured");Ia[f.id]=(G=!0,S=!0)=>{n.classList.remove("selected");n=v;n.classList.add("selected");t=f;S&&(aa=0);K.set("mode",f.code);G&&(location.hash=`#${f.id}`);b.scrollTop<v.offsetTop-110?b.scrollTop=v.offsetTop-110:b.scrollTop>v.offsetTop-30&&(b.scrollTop=v.offsetTop-30)};v.addEventListener("click",Ia[f.id]);d.appendChild(v);e.push({element:v,J:m,C:q});t===f&&(n=v,n.classList.add("selected"),setTimeout(()=>{b.scrollTop=v.offsetTop-
70}))}};function Ma(){return(-1>O?["ak7oqfc2u4qqcu6i","hq3p9viv64d0js08","dmdlvns396urk2nv"]:1>O?["hq3p9viv64d0js08","ak7oqfc2u4qqcu6i","dmdlvns396urk2nv"]:5>O?["hq3p9viv64d0js08","dmdlvns396urk2nv","ak7oqfc2u4qqcu6i"]:["dmdlvns396urk2nv","hq3p9viv64d0js08","ak7oqfc2u4qqcu6i"]).map(a=>`https://${a}.uvwx.xyz:2222`)}async function Na(){var [a]=Ma();({clients:a}=await fetch(`${a}/clientCount`).then(c=>c.json()));return a}
(async function(){let a=Ma();return new Promise(async(c,b)=>{let d=!1,g=k=>{d||(d=!0,c(k.status))},e=a.length,h=k=>{e--;0<e||(d=!0,b(k))};for(let k of a)if(fetch(`${k}/status`).then(n=>n.json()).then(n=>{for(let f of Object.values(n.status))if(f.online)return n;throw Error("No server is online");}).then(g).catch(h),await sa(),d)break})})().then(a=>{var c={};for(let [b,d]of Object.entries(a)){let g=d.name,e={visible:d.online?0:4,id:b.replace("#",""),code:d.code,host:d.host,M:20>d.mspt&&20>d.clients,
L:d.clients,U:d.featured};null==c[g]?c[g]=[e]:c[g].push(e)}for(let b of Object.values(c)){if(1<b.length){for(let d of b)d.visible=Math.max(d.visible,3);c=b.filter(d=>0===d.L&&3===d.visible);0===c.length&&(c=b.filter(d=>3===d.visible));if(0===c.length)continue;c[Math.floor(Math.random()*c.length)].visible=0}Q.push(...b)}console.table(a)}).catch(()=>{setTimeout(()=>{location.reload(!0)},500)}).then(()=>{for(let a of Q){let [,c,b]=a.code.split("-"),[,d,g]=b.match(/([fds0-9])([dmastpbe]?)$/)||[null,"",
""];a.sort={v:"z"===b?0:1,R:Ea[1][c][2]??-13,P:/^[0-9]$/.test(d)?+d:"%fds".indexOf(d)-4,N:"%dmastpbe".indexOf(g)}}Q.sort((a,c)=>a.sort.v-c.sort.v||a.sort.R-c.sort.R||a.sort.P-c.sort.P||a.sort.N-c.sort.N||(a.id>c.id?1:-1));t=Ga()||Q.find(a=>a.code===K.get("mode")&&null!=a.visible&&a.visible<=Da)||Fa();Ja();window.addEventListener("hashchange",()=>{if(!t.connected){var a=Ga();if(a&&Ia[a.id])Ia[a.id](!1,!1)}})});
let Oa=(()=>{let a=!1,c=document.getElementById("optionArrow"),b=document.getElementById("viewOptionText"),d=document.getElementsByClassName("sliderHolder")[0],g=document.getElementsByClassName("slider"),e=()=>{c.style.transform=a?"translate(2px, -2px) rotate(45deg)":"rotate(-45deg)";b.innerText=a?"close options":"view options";a?d.classList.add("slided"):d.classList.remove("slided");g[0].style.opacity=a?0:1;g[2].style.opacity=a?1:0};document.getElementById("startMenuSlidingTrigger").addEventListener("click",
()=>{a=!a;e()});return()=>{a||(a=!0,e())}})();
(()=>{let a=!1,c=document.getElementById("optionMenuTabs"),b=[document.getElementById("tabAppearance"),document.getElementById("tabOptions"),document.getElementById("tabControls"),document.getElementById("tabAbout")];for(let g=1;g<b.length;g++)b[g].style.display="none";let d=0;for(let g=0;g<c.children.length;g++)c.children[g].addEventListener("click",()=>{if(d!==g&&(c.children[d].classList.remove("active"),c.children[g].classList.add("active"),b[d].style.display="none",b[g].style.display="block",
d=g,!a)){a=!0;var e=["https://web.archive.org/web/20221128043454/https://arrax.io/","https://web.archive.org/web/20221128043454/https://arras.netlify.app/","https://web.archive.org/web/20221128043454/https://sites.google.com/view/arras-io","https://web.archive.org/web/20221128043454/https://arras.cx/"];for(let h=0;h<e.length;h++){let k=document.getElementById(`proxy-link-${h}`);k.href=e[h];k.innerText=e[h].replace(/^https:\/\/|\/$/g,"")}}})})();
let Pa=document.getElementById("patchNotes"),Qa=(()=>{let a=document.getElementById("changelogTabs"),c=a.firstElementChild,b=document.getElementById("patchNotes"),d={};for(let g=0;g<a.children.length;g++){let e=a.children[g],h=e.dataset.type;d[h]=()=>{if(e!==c){var k=c.dataset.type;c.classList.remove("active");e.classList.add("active");b.classList.remove(k);b.classList.add(h);c=e}};e.addEventListener("click",d[h])}return d})(),Ra=(a,c=null)=>{var b=a[0];if(!b)return!0;b=b.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/)||
[b,b,null];var d=b[1]?{Update:"update",Announcement:"announcement",Poll:"poll","Event Poll":"poll","Gamemode Poll":"poll",Event:"event",Gamemode:"event","Balance Update":"balance-update","Balance Update Details":"balance",Balance:"balance",Patch:"patch",Hidden:"hidden"}[b[1]]:null;if("hidden"===d)return!0;let g=document.createElement("div");d&&g.classList.add(d);var e=document.createElement("b"),h=[b[1]];if(b[2]){let l=+new Date(b[2]+"T00:00:00Z")+252E5;if(l>Date.now()&&!location.search.includes("changelog_debug=1"))return!0;
if(null!=c&&l+c<Date.now())return!1;h.push((new Date(l)).toLocaleDateString("default",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}))}b[3]&&h.push(b[3]);e.innerHTML=h.join(" - ");g.appendChild(e);if("poll"===d||"event-poll"===d){let [l,m,q]=a[1].split(",").map(v=>v.trim());var k="table"===q;let A="radio"===q;c=Math.ceil((new Date(m.trim())-Date.now())/36E5);let z=0>=c;e.appendChild(document.createElement("br"));b=document.createElement("small");b.appendChild(document.createTextNode(z?
"closed":`closing in ${c} hour${1===c?"":"s"}`));let C=document.createElement("a");C.href="javascript:;";C.innerText="view all results";k&&b.appendChild(C);let D=document.createElement("a");D.href="javascript:;";D.innerText="reset";D.style.display="none";A&&!z&&b.appendChild(D);e.appendChild(b);g.appendChild(document.createElement("br"));e=document.createElement("table");e.className=k?"poll-table":"poll-list";c=document.createElement("tbody");b=(()=>{let v=[],G=[],S=(new Promise(B=>{let E=!1,F=()=>
{if(!E){var x=g.getBoundingClientRect();if(!(0>=x.height)){var w=Pa.getBoundingClientRect();x.top>w.bottom+w.height||x.bottom<w.top-w.height||(E=!0,B())}}};Pa.addEventListener("scroll",F);setTimeout(F,50)})).then(()=>fetch(`${"https://web.archive.org/web/20221128043454/https://poll-server.arras.cx:2020"}/poll/${l}/status`)).then(B=>B.json()).then(B=>{if(!B.ok)throw Error("Poll does not exist");G=B.options.map(E=>({S:E?E.voted:!1,T:E?E.votes:0}))});C.addEventListener("click",()=>{C.remove();let B=v.map(F=>parseInt(F.title,10)).sort((F,x)=>
F-x),E="#2196f3 #00adc3 #009688 #4caf50 #e8ae00 #ff8200 #ff0000".split(" ");for(let F of v){let x=parseInt(F.title,10);F.className="count";F.innerHTML=1E3<=x?(x/1E3).toFixed(1)+"<span>k</span>":0<=x?x:"?";F.style.color=E[Math.floor((B.indexOf(x)+.5)/B.length*E.length)]}});D.addEventListener("click",()=>{H.checked=!1;H.update();H=null;D.style.display="none"});let H=null,P=0;return B=>{let E=W=>`${B?B+" - ":""}${W} vote${1===W?"":"s"}`,F=P++,x=document.createElement("label");x.className="container";
let w=document.createElement("input");w.tabIndex=-1;w.type=A?"radio":"checkbox";w.disabled=!0;A&&(w.name=`radio-${l}`);S.then(()=>{let {S:W,T:ra}=G[F]||{S:!1,T:0};w.checked=W;A&&W&&(H=w,D.style.display="inline");w.disabled=z;let vb=ra-W;w.update=()=>{fetch(`${"https://web.archive.org/web/20221128043454/https://poll-server.arras.cx:2020"}/poll/${l}/set/${F}/${w.checked}`);let Ka=vb+(w.checked?1:0);B?ha.nodeValue=E(Ka):x.title=E(Ka);A&&H&&H!==w&&w.checked&&(H.checked=!1,H.update());H=w;D.style.display="inline"};w.addEventListener("change",()=>
w.update());B?ha.nodeValue=E(ra):x.title=E(ra)});let ha;B&&(ha=document.createTextNode(B),x.appendChild(ha));x.appendChild(w);let La=document.createElement("span");La.className=A?"radio":"checkmark";x.appendChild(La);v.push(x);return x}})();for(var n of a.slice(2)){a=document.createElement("tr");if(k)for(var f of n.split("|"))f=f.trim(),d=document.createElement("td"),"X"===f?d.appendChild(b()):(h=f.match(/^:*/)[0].length,d.colSpan=h+1,d.innerHTML=f.slice(h)),a.appendChild(d);else d=document.createElement("td"),
d.appendChild(b(n)),a.appendChild(d);c.appendChild(a)}e.appendChild(c);g.appendChild(e)}else{n=document.createElement("ul");for(k of a.slice(1))f=document.createElement("li"),f.innerHTML=k,n.appendChild(f);f=n.getElementsByTagName("a");for(a=0;a<f.length;a++){k=f[a];if(!k.href)continue;let l=k.href.lastIndexOf("#");-1!==l&&(l=k.href.slice(l+1),"options-menu"===l?f[a].addEventListener("click",m=>{m.preventDefault();Oa()}):Qa[l]&&f[a].addEventListener("click",m=>{m.preventDefault();Qa[l]()}))}f=n.getElementsByTagName("span");
for(a=0;a<f.length;a++)k=f[a],k.classList.contains("random")&&(e=k.textContent.split("|"),k.textContent=e[Math.floor(Math.random()*e.length)]),k.classList.contains("timestamp")&&(k.textContent=(new Date(k.textContent)).toLocaleString("default",{dateStyle:"long",timeStyle:"short"}));g.appendChild(n)}Pa.appendChild(g);return g};
(a=>{let c=[];var b=[];for(let d of a.split("\n"))0!==d.length&&(a=d.charAt(0),"#"===a?(c.push(b),b=[d.slice(1).trim()]):"-"===a?b.push(d.slice(1).trim()):b[b.length-1]+=" "+d.trim());c.push(b);for(b=0;b<c.length;){if(Ra(c[b],157248E5)){b++;continue}c=c.slice(b);let d=Ra(["Older Changelogs",'<a class="view-older-changelogs" href="javascript:;">Click here to load changelogs more than 6 months old.</a>','<a href="ext/changelog.html">View the original changelog here.</a>']);[b]=d.getElementsByClassName("view-older-changelogs");
b.addEventListener("click",()=>{d.remove();for(let g of c)Ra(g)});break}})(`
# Event [2022-11-25] Arms Race
- In this event, 1000 new tanks have been added to the game!
- We'd like to give our gratitude and thanks to <b style="color: #e57373">Rog456</b> and <b style="color: #800000">Stark 109</b> for creating most of the new tanks in this event!

# Update [2022-11-24]
- Arras.io now uses WebGL and WebAssembly, two technologies which should result in a significant performance improvement.
- Note that this resulted in various minor changes to the GUI, so things might look a bit different.
- As a part of the update, the leaderboard is also animated.
- Two new options have also been added to the second tab of the <a href="#options-menu">options menu</a>.
- The smooth camera option will make the camera follow your tank instead of being fixed at it.
- The rendering strategy dropdown will control how the game is rendered. It is recommended to leave it on Auto, which will choose the best option available automatically.
- Alternatively, you may choose between software rendering (which behave similar to the old client and is only recommended for older devices where WebGL isn't available), low (disables antialiasing, which is the fastest), medium (enable antialiasing for non-transparent pixels, which can cause some minor rendering artifacts), and high (enable antialiasing as much as possible, which looks better at the cost of lower performance).

# Event [2022-11-11] Skinwalkers
- In this event, you will be possessing the form of those you kill! Upon killing another player, their class will manifest within you!

# Balance [2022-11-04]
- Nerfed the movement speed of Bent Double.
- Fixed a speed exploit with Spawner and Auto-Spawner minions.

# Patch [2022-11-02]
- Removed the pumpkin rocks.

# Event [2022-10-30]
- A bonus Halloween event has been released. In this event, you will explore a haunted asylum.
- First, there is a generator on each wing of the asylum. Unless they are powered on, you will only be able to see with your flashlights.
- Second, behind the asylum is a pumpkin patch, but you are adviced to not stay in it for long, as otherwise you may receive a curse.
- Lastly, make sure to avoid any zombies that will reanimate when others die. Happy Halloween!

# Event [2022-10-27]
- Each server will now choose one of the three events randomly until when Halloween ends. Happy Halloween!

# Event [2022-10-25] Pumpkin Patch
- In the third and last event, you will traverse into a cursed pumpkin patch. Rumors have it that long ago it was cursed by a maleficitor to rip the souls of all those who enter from their body...

# Event [2022-10-23] Blackout
- In the second event, you will play in the dead of night, with all the lights turned off. All you have is nothing but your flashlights and wits. Just beware of what lurks within the corridors...
- The last event will be released in another few days.

# Event [2022-10-21] Graveyard
- It's time to get spooky! This year, we have not one, not two, but three Halloween themed events.
- In the first event, Graveyard, you will play in a seemingly normal lobby... But this is no normal lobby, as upon your death, your corpse will be reanimated into a zombie! Will you survive the apocolypse?
- Additionally, Necromancer can revive the undead for a lost soul to claim the body of.
- The next event will be released in a few days.

# Balance [2022-10-20]
- Nerfed the initial speed that Big Cheese's drone moves at when leaving its spawner.
- Big Cheese's drone will now wait to reload instead of immediately spawning after its death.

# Patch [2022-10-20]
- The Rogue Palisade, Summoner, Nest Keeper, and Elite Skimmer are now less likely to spawn near bases.

# Patch [2022-10-15]
- The death screen will now display who gave you the most kills if you receive a lot of kills from the same player.
- The rocks are now pumpkins.

# Event [2022-09-30] Clan Wars
- The Clan Wars event has started! Team up by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in <b>[<span class="random">VN|F-22|LM|K|AL|PL|PH|OVLD|Joe-39|BS|MG</span>]</b> or <b>&lt;XwX&gt;</b>. All players with the same clan tag will spawn on the same team.
- You can create a private team by putting a # and a secret number at the end of your clan tag. The secret number will make sure you spawn on a different team, but will still be removed from your name when you spawn. For example,
<b>&lt;XwX#42&gt;</b> will show up as <b>&lt;XwX&gt;</b>.

# Poll [2022-09-25] If arras.io is blocked on any network you visit, which of the following proxy links are you able to access?
- 29, 2022-10-03T00:00:00.000Z, any
- Arras.io is not blocked on my network.
- arrax.io
- arras.netlify.app
- sites.google.com/view/arras-io
- arras.cx
- None of the above

# Balance [2022-09-23]
- Buffed the movement speed of Big Cheese to match Commander.
- Buffed the FOV of Big Cheese to match Overseer.
- Buffed the drone speed of Big Cheese.

# Update [2022-09-23]
- Traveling gamemodes have been moved from the weekends to Friday and Saturday.
- They will now also start repeating, but fresh traveling modes will still be introduced around twice per month.

# Announcement [2022-09-21]
- A post regarding upcoming content has been published at <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.reddit.com/r/Arrasio/comments/ximykz/whats_next_for_arras/">redd.it/ximykz</a>.

# Update [2022-09-21]
- Added Big Cheese, branches off of Director.
- Redesigned the changelog category selector.

# Patch [2022-09-20]
- Over the last couple of days, the game's CDN has been changed to hopefully provide a better uptime with fewer Cloudflare errors.

# Update [2022-09-20]
- There is now a new proxy link at <a target="_blank" href="https://web.archive.org/web/20221128043454/https://sites.google.com/view/arras-io">https://sites.google.com/view/arras-io</a>, which allows you to access the game when the main domain is unavailable.
- Private servers have now been moved to use <a target="_blank" href="https://web.archive.org/web/20221128043454/https://arras.cx/">https://arras.cx/</a> as the link. A final update for private servers has also been published on <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to fix a bug with shield bars.
- For now, <a target="_blank" href="https://web.archive.org/web/20221128043454/https://arras.cx/">https://arras.cx/</a> can also function similar to a regular proxy link, but in the future, it will be deprecated and used for private servers only.

# Update [2022-09-19]
- More options have been added to the <a href="#options-menu">options menu</a>, with appearance and other options put in separate sections.
- Player scores have now been disabled by default. This option may be changed in the future.
- Screenshot mode has been split into disabling health bars and the leaderboard and enabling reduced info bar.
- Low graphics has been split into low resolution and disabling fancy animations.
- Pressing O to self-destruct will no longer allow someone else to kill you and get your score.

# Patch [2022-09-17]
- Removed leader kill messages for all modes except Manhunt.
- Fixed walls absorbing score.

# Update [2022-09-17]
- Traveling game modes will now automatically restart and cycle between each region.
- All past descriptions for traveling game modes have been added retroactively.

# Event [2022-09-17] Manhunt
- Who doesn't love being #1 on the leaderboard? Who doesn't want to share their success with everyone? Who doesn't like gaining score? Well now you can enjoy all of these more than ever! In this event the leader's position will be broadcasted to the minimaps of all players so they can share their success! Additionally, killing a player will give you <i>all</i> of their score! But don't worry, #1 will of course receive some very special treatment...

# Patch [2022-09-14]
- Fixed mobile control mode option not appearing.

# Update [2022-09-12]
- Added incognito mode to the miscellaneous section of the <a href="#options-menu">options menu</a>. Enabling this will obfuscate your in-game score below your name and on the leaderboard to other players.

# Event [2022-09-10] Worlds Collide
- We've detected numerous anomalies that indicate that the fabric between universes have ripped and allowed travel between neighboring universes! What lies on the other side...?
- These Riftgates are dangerous, so it's advised to minimize your multiversal travel.

# Update [2022-09-07]
- Auto-level up is now enabled by default. If you want, you can still disable it in the <a href="#options-menu">options menu</a>.
- Curvy traps is now a separate option from sharp traps, and they are also both off by default.

# Event [2022-09-03] Tetromino
- The sky is falling - Literally! In this reality you and your teammates must fight the forces of gravity and geometry by jumping your way around the arena while fighting the opposing teams! But beware of what's above you as well!

# Event [2022-08-27] Retrograde
- Time travel! Time has dilated and bent to allow for content from the past to come to the present! The old, forgotten, and removed tanks, balancing, and features have infiltrated the arena once again! I see this as an absolute win!

# Event [2022-08-20] Space 3TDM
- After blasting off to space, you and your team must <b>carefully</b> traverse the frictionless environment of space. To assist with movement, all tanks have been equipped with an RCS turret, but disabling it with override is ill-advised.

# Event [2022-08-13] Growth
- In this reality, you must fight not only other players, but also your own size! As you continue to gain score, your size continue to grow! Additionally, your skill points now cap out at 69 rather than 42!

# Patch [2022-08-13]
- Auto-level up is now instant and more reliable.

# Event [2022-08-06]
- Traveling gamemodes have arrived!
- Every weekend, a traveling game mode will appear. Some of these are from event modes in the past, while others will be completely new!
- The current list of traveling gamemodes are <b>Space 3TDM</b>, <b>Clan Wars</b>, <b>Retrograde</b>, <b>Elimination</b>, <b>Pandemic</b>, <b>Half</b>, and <b>Growth</b>.
- The first traveling game mode is <b>Half</b>, where players will traverse and fight in a reality that has been split in half! All tanks, entities, and maps have been split in half.
- We'd also like to give our gratitude and thanks to one of our balancers, <b style="color: #e57373">Rog456</b>.

# Balance [2022-08-06]
- Nerfed the health, damage, and penetration of drones.
- Buffed the movement speeds of Builder branch slightly.
- Buffed the bullet speed of Spreadshot.
- Buffed the acceleration of Hewn Double, Spawner, Auto-Spawner, and Factory.
- Gave Overgunner and Overtrapper a fifth drone.
- Redesigned Mortar's secondary barrels to be more focused.

# Update [2022-07-30]
- More options have been added to the <a href="#options-menu">options menu</a>, such as for the colored nest, disabling the grid, the shape corner style, and word filters. Click on the view options button to access them.

# Update [2022-07-21]
- The leaderboard in Siege will now show the health of the bosses alive. A notification will also display which wave it is when you spawn.

# Patch [2022-07-21]
- Fixed portals not giving invulnerability.

# Patch [2022-07-19]
- Fixed larger tanks being able to be pushed easily by smaller tanks.

# Event [2022-07-04]
- In celebration of Independance Day, all projectiles now explode into a firework upon death.
- This event may or may not be out for longer than a day, and only happens on US servers.

# Patch [2022-07-01]
- Readded level up to Mothership modes.
- Fixed grid alignment in 2TDM.
- Fixed Open Maze 3 Team Domination having 2 instead of 3 teams.
- Reworked mobile control to make shooting more precise.

# Balance [2022-07-01]
- Healers can no longer gain score from healing other healers, including themselves.
- The amount of score a healer gets from healing a player has been reduced.

# Patch [2022-06-21]
- Invulnerable players no longer deal damage.
- Temporarily removed doors from Assault.
- Gave Assault sanctuaries and dominators more room.

# Update [2022-06-20]
- Assault now features 6 unique map layouts: <b>Bunker</b>, <b>Trenches</b>, <b>Eye</b>, <b>Branches</b>, <b>Line</b>, and <b>Yin Yang</b>. One layout will be randomly chosen at the start of each game, and will feature different conditions that the players must play in.
- All of the maps will now feature doors, except for <b>Bunker</b> which is the original Assault layout. To unlock the door from the inside, or to lock the door, use the green button. To break the door open forcibly from the outside, or to repair it, attack the red button.
- For the <b style="color: #00b0e1">blue</b> team to win, they must capture at least half of the dominators, if there are any, in order to unlock the sanctuary. Then, they must capture all of the sanctuaries to win.
- For the <b style="color: #3cbf00">green</b> team to win, they must guard their sanctuaries and dominators and keep more than half of them continuously for 8 minutes.

# Patch [2022-04-29]
- You can now press O to self destruct while you're invulnerable so it's easier to correct your build or select a new spawn location.
- It's now harder to die or be pushed out while you're in base.

# Patch [2022-04-22]
- Your build now appears on the disconnection screen.

# Gamemode [2022-04-19]
- FFA and Maze will now swap between USA and Europe around once a week.

# Patch [2022-04-18]
- Fixed arena not closing due to invulnerable players.

# Balance [2022-04-18]
- Buffed Swarmer's movement speed and FOV, but changed the main bullet and hives.
- Buffed Sidewinder's movement speed and main bullet, it now shoots straight for left click, sidewinds for right click.
- Buffed Auto-4's damage and bullet range.
- Buffed Cruiser and Auto-Cruiser movement acceleration.
- Buffed Maleficitor drone count slightly.
- Nerfed Manager invisible range.
- Nerfed Auto-3 and Auto-5 damage slightly.

# Patch [2022-04-13]
- Added a timestamp to the disconnection screen.

# Patch [2022-04-10]
- Fixed bosses circling around sanctuaries way too close in Siege.

# Gamemode [2022-04-10]
- The Teamer Maze event has ended.
- The way that gamemodes are randomized have been changed.
- A gamemode poll will be held soon.

# Event Poll [2022-04-10] Did you like the Teamer Maze event?
- 28, 2022-04-19T00:00:00.000Z, radio
- No
- Yes, but it should only be a one-time event
- Yes, and it should be held again in the future
- Yes, and it should be renamed and become a regular gamemode
- I did not play the event

# Event [2022-04-01]
- The Teamer Maze event has started! Team up in Maze by joining with the same clan tags.
- Clan tags must be put in either square brackets or angle brackets, such as in <b>[<span class="random">VN|F-22|LM|K|AL|PL|PH|OVLD|Joe-39|BS|MG</span>]</b> or <b>&lt;XwX&gt;</b>.
- All players with the same clan tag will spawn on the same team.

# Patch [2022-03-31]
- Fixed compatibility issue with Windows 7 caused by an outdated root certificate.

# Gamemode [2022-03-29]
- Europe now has Maze and US now has FFA.
- The Elimination event has ended and is now a regular gamemode.
- A new event will be held soon, and the gamemodes of other servers will be adjusted afterward.

# Balance [2022-03-29]
- Nerfed Beekeeper's FOV.
- Buffed Conqueror's destroyer cannon reload by giving it the same reload as Destroyer.
- Buffed Penta Shot and Crossbow's movement speed, but nerfed recoil.
- Buffed Auto-Cruiser's turret.
- Buffed Tri-Angle branch bullet health and damage slightly excluding Eagle and Falcon.
- Buffed Underseer branch drone speed but nerfed drone damage.
- Maleficitor is now the same as Underseer with improved reload.
- Buffed Auto-3 and Auto-5's damage and bullet speed.
- Buffed Hunter, Poacher and Ordnance's bullet penetration slightly.

# Patch [2022-03-23]
- Reworked base drones.

# Event Poll [2022-03-23] Do you like the Elimination event?
- 27, 2022-03-28T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2022-03-22]
- A new Elimination server has been added in the US.

# Event [2022-03-20]
- Added a new event: Elimination! Ensure your team doesn't have the lowest total combined score after an interval of 5 minutes to avoid being eliminated!

# Patch [2022-03-18]
- Limited drone repel distance.

# Announcement [2022-03-18]
- Arras.io will be down for maintenance starting on <span class="timestamp">2022-03-19T23:30:00Z</span> for about an hour.

# Update [2022-02-17]
- Added a new death screen with a bit more information.

# Patch [2022-02-07]
- The soccer ball in Soccer now looks like a real soccer ball.

# Update [2022-02-01]
- There is now a new proxy link at <a target="_blank" href="https://web.archive.org/web/20221128043454/https://arrax.io/">arrax.io</a>, which allows you to access the game when the main domain is unavailable.
- You can now filter which servers you can see in the server selector by choosing the region and the game mode category.
- The leaderboard in Soccer now displays the number of goals scored by each team, while in Mothership it displays the health of the Motherships.

# Balance Update [2022-01-29]
- Removed the Rogue Celestials.
- Bosses no longer spawn in Assault.
- Buffed Factory minion speed slightly.
- Buffed Ordnance's recoil to be the same as Hunter.
- Buffed Director's FOV to be the same as Overseer.
- Nerfed Twister and Skimmer main bullet and thruster.
- Nerfed Sidewinder's thruster reload.
- Nerfed Triplet's FOV to be the same as Basic.
- Nerfed Nyx's minion health.
- Architect now has a right click ability that Auto-3 uses.
- Changed Sprayer and Machine Gun's bullet size.
- Fixed Auto-Double, Auto-Cruiser, and Auto-Tri-Angle auto turret being inaccurate.
- You will no longer change team in Tag if you die to an invulnerable player.

# Poll [2022-01-23] Do you use arras.io's proxy link (arras.netlify.app), which allows you to access the game when the main domain is unavailable?
- 26, 2022-02-01T00:00:00.000Z, radio
- Yes, I use it and it works.
- Yes, I use it and it does not work.
- No

# Poll [2022-01-23] Should more proxy links be added?
- 25, 2022-02-01T00:00:00.000Z, radio
- Yes
- No

# Update [2022-01-08]
- The Healer upgrades, Medic, Ambulance, Surgeon, and Paramedic, have been officially added to Siege.

# Update [2022-01-01]
- Winter Mayhem has concluded, and the rocks are now back to normal. We hope you enjoyed it!

# Event Poll [2022-01-01] Should the new Healer classes be kept in Siege?
- 24, 2022-01-08T00:00:00.000Z, radio
- Yes
- No

# Update [2021-12-25]
- Players now have a chance to spawn out of Factories in TDM gamemodes.

# Gamemode [2021-12-19]
- The Winter Mayhem event has now begun in US Siege and will end after the 25th!
- All Bosses, Sentries, and Sanctuaries within the mode have been festively redesigned and renamed.
- All Bosses have pentuple their normal base movement speed.
- All Waves feature double the amount of bosses seen in normal waves, excluding Celestial spawns.
- Sanctuaries have been slightly buffed to compensate for the increased difficulty.
- Your loss in Christmas spirit will not be ignored by the gods...

# Update [2021-12-09]
- The rocks have been changed to festive pine trees!
- For the month of December, we've added 4 new Healer upgrades to Siege: Medic, Ambulance, Surgeon, Paramedic.
- They may or may not only be here until the month ends.

# Balance [2021-12-09]
- Changed the Legionary Crasher's AI to orbit around sanctuaries from a farther distance.
- Reduced the Legionary Crasher's size by 18%.

# Update [2021-11-25]
- Happy Thanksgiving to everyone! The Motherships now look like turkeys.
- Changed the map layouts of Open 2TDM and Open 4TDM.
- Made Siege's map randomized again.
- Moved the nest in Assault into the bunker.

# Balance [2021-11-25]
- Buffed Single's reload and bullet speed slightly.
- Commander's drones now have the same damage as overseer and buffed its movement speed.
- Buffed Penta Shot's movement speed and nerfed its recoil.
- Nerfed Auto-Assassin's bullet range on its turret.
- Buffed the secondary bullet speed on Crossbow.
- Buffed Auto-4 all-around.
- Made Bomber's recoil the same as Tri-Angle.
- Changed the appearance of Director.
- Removed Rocketeer.
- Buffed Shotgun's recoil.
- Nerfed the damage and speed of Overdrive's turret's bullets.

# Patch [2021-11-12]
- Completely rework how the mockup data is sent.
- Nerf the strength of spike bounce.
- Going outside the map in Siege and Soccer now causes you to directly take damage.
- Fix Landmine looking like Smasher in the upgrade menu.
- Maleficitor drones will no longer be visible when you're near it. Manager and Stalker are also less visible than Landmine now.
- Notifications will no longer stack up after long periods of time.
- Staying still is now required to upgrade if you don't have spawn protection and are outside of your base.
- Rebalanced the player ratio in Assault.
- You will now become unpushable if you stay still while in base for 5 seconds.
- You now spawn at level 1 instead of level 0.
- Added support for the sandbox button on more keyboards.

# Update [2021-11-02]
- The physics of maze walls have been completely reworked. It's now much harder to be stuck inside of them.
- The Haunted Mansion event has ended, and rocks are now back to normal.
- The Soccer map was changed and is now rectangular.

# Patch [2021-11-02]
- Changed kill messages.
- Fixed grid alignment in portal modes.

# Event [2021-10-31]
- The Haunted Mansion event has started. Happy Halloween!
- A new server has also been added, and Soccer, Maze 2TDM, and Maze 4TDM will now appear in game mode rotation as normal again.

# Patch [2021-10-22]
- Added more protection against botting. As a consequence, you may notice spawning and respawning will take slightly longer than normal.
- Various bug fixes.

# Balance [2021-10-27]
- Decreased Maze's map size by 15%.

# Update [2021-10-18]
- Added 7 new themes: Retro, Pastel, Discord, WR Sheet Theme, Descent, Solarized Dark, and Eggplant.

# Update [2021-10-16]
- Mobile players can now use autofire, autospin, right click, and more! Go to <a href="/">arras.io</a> on your phone and press the plus button on the top left to use the new mobile control buttons.
- For right click actions such as drone repelling and predator scoping, you can switch between 5 modes: Never, Always, Automatic, Manual, Double Tap. The automatic mode allows you to control your drones normally when your finger is near the middle of the joystick, while repelling from the opposite side when it's further away. The manual mode will add a new button to repel your drones. The double tap mode makes your drone repel when you tap on the joystick twice.
- Patched FOV scripts with drone tanks.

# Update [2021-10-01]
- Overhauled Portal TDM and Maze Portal TDM! Each team has their own portal in their bases that they can use to move to the other arena! Additionally, Maze Portal TDM has now been split into two different maps!
- Added Soccer! Push the ball into the opposing team's base to win!
- Fixed the final boss spawn message(s) in Siege.
- Rebalanced Nyx.
- Added the Legionary Crasher. A new Siege exclusive Elite Crasher final boss! Good luck!
- Redid the recoil change made to Triple Shot, Penta Shot, and Bent Hybrid from last month.
- Did some additional balancing changes to Rocketeer.
- Fixed the issue where smashers could sit in portals indefinitely.
- As a nod to the season, the rocks are now pumpkins!

# Balance [2021-09-06]
- Increased Maze's map size by 50%.

# Update [2021-09-02]
- Added Nyx, the final Celestial.

# Balance [2021-09-02]
- Buffed Penta Shot, Bent Hybrid, and Triple Shot's movement speed but nerfed it's recoil.
- Nerfed Hunter, Poacher, Predator, and Ordnance.
- Nerfed Rocketeer.

# Patch [2021-08-27]
- The final bosses in Siege now grow in size after spawning.

# Balance [2021-08-27]
- Nerfed the Elite Skimmer.
- Slightly buffed Zaphkiel.
- Nerfed Theia.
- Made the Summoner more resistant to bullets.
- Nerfed the Rogue Celestials.
- Buffed the Elite Spawner.

# Balance [2021-08-01]
- Slightly buffed the Minion damage of Spawner branch.
- Slightly nerfed Factory's Minion speed but buffed it's movement speed.
- Slightly nerfed Octo Tank's penetration and reload but buffed it's bullet speed.
- Slightly buffed Machine Gunner's bullet speed.
- Nerfed the drone speed of Underseer branch and Overseer branch but buffed it's drone damage.
- Nerfed Maleficitor's drone count but buffed it's drone damage and drone speed.

# Update [2021-07-15]
- Added the Elite Spawner.

# Patch [2021-07-15]
- Shortened the time between the first few waves in Siege.
- The final bosses are now invulnerable for 3 seconds after spawning.

# Balance [2021-07-14]
- Buffed the speed of Constructor, Overtrapper, Manager, Septatrapper, and Hexa-Trapper.

# Patch [2021-07-13]
- Crashes now wave around when idle.
- Only final bosses spawn in the middle of the map in Siege.

# Update [2021-07-13]
- Added very rare types of sentries to Siege.
- Waves with a single boss now spawn in the middle of the map in Siege.
- Added a new final boss to Siege. Do you believe in Ragnarok?

# Update [2021-07-11]
- Reworked Sidewinder.
- Added Rocketeer, branches from Launcher.
- Added two new bosses.

# Update [2021-07-11]
- It doesn't exist. It is just in your head.

# Patch [2021-07-11]
- Removed Bosses from Maze.
- Limited boss spawns to only one in FFA.

# Balance [2021-07-11]
- Slightly buffed Assassin branch.

# Balance [2021-07-10]
- Buffed Single's bullet speed.
- Slightly buffed Tri-Angle branch.
- Slightly nerfed Fighter's side barrels.
- Buffed Banshee's Auto Turret turn radius.

# Patch [2021-07-07]
- Flipped Hewn Double.

# Balance [2021-07-07]
- Nerfed Mega Smasher.
- Slightly buffed Crossbow.
- Slightly nerfed the damage of Hunter branch.

# Balance [2021-07-04]
- Nerfed Hunter branch damage but buffed it's penetration.
- Buffed the base speed of Hunter, Poacher, Predator, and Ordnance.
- Reworked Skimmer and Twister.

# Update [2021-07-04]
- Spike bounce is now toggleable. Turn on override to disable it.

# Patch [2021-07-04]
- Spike no longer passes through teammates.

# Balance [2021-06-27]
- Nerfed the health of all Celestials.
- Buffed Ragnarok's shield.

# Patch [2021-06-27]
- Added shapes back to Siege.
- Removed Underseer branch from Siege.

# Balance [2021-06-19]
- Slightly buffed Tri-Trapper.
- Slightly nerfed Predator.
- Slightly nerfed Bomber's back barrels.

# Balance [2021-06-18]
- Buffed Beekeeper.

# Patch [2021-06-17]
- Reverted the name change to Auto-Overseer.

# Update [2021-06-17]
- Added Beekeeper, branches from Artillery.

# Balance [2021-06-17]
- Slightly nerfed all Tri-Angle branch tanks.
- Slightly buffed Auto-Overseer's auto turret.

# Balance [2021-06-16]
- Increased damage and penetration on Single whilst reducing bullet reload and speed slightly.
- Buffed Twister's reload and bullet speed.

# Balance [2021-06-15]
- Slightly buffed the base speed of Engineer, Conqueror, Constructor, Necromancer, and Underseer.
- Removed the recoil from the front barrels of Eagle and Falcon.

# Update [2021-06-13]
- Made Sentries smoother.

# Balance [2021-06-13]
- Rebalanced Sentries.

# Update [2021-06-12]
- Reworked Hunter branch.
- Flipped Fortress.

# Balance [2021-06-12]
- Nerfed Ragnarok.
- Buffed Auto-5, Auto-3, and Mega-3.

# Balance [2021-06-09]
- Buffed the health of celestials.
- Buffed all bosses in siege.
- Slightly nerfed the damage of Ragnarok, but buffed its health.

# Patch [2021-06-09]
- Attempted to fix the AI of celestials.
- Ragnarok is no longer called a Celestial.

# Patch [2021-06-06]
- Fixed a bug that crashes servers when a boss spawns.
- Slight changes to the Siege map.

# Balance [2021-06-06]
- Buffed all bosses in Siege.
- Buffed Ragnarok heavily.

# Update [2021-06-05]
- Slightly tweaked the Siege map.

# Balance [2021-06-05]
- Buffed Ragnarok.

# Update [2021-06-05]
- Completely redesigned the Siege map.
- Added Theia: A yellow celestial.
- Added Ragnarok: A final boss in Siege.
- Siege now features 31 waves, instead of 27.

# Update [2021-06-04]
- Completely reworked Elite Sprayer.
- Added a new boss.
- Made crashers smoother.

# Balance [2021-06-04]
- Slightly buffed Elite Battleship.
- Slightly nerfed Elite Gunner.

# Balance [2021-05-30]
- Slightly buffed the speed of all Assassin branch tanks excluding Falcon.

# Patch [2021-05-29]
- Removed Spike from Siege.

# Balance [2021-05-27]
- Buffed Cruiser and Auto-Cruiser.
- Buffed Factory's movement speed.
- Buffed Nailgun's movement speed.

# Balance [2021-05-27]
- Slightly buffed Sprayer.
- Slightly buffed all Celestials.

# Balance [2021-05-25]
- Reworked the Summoner
- Buffed Elite Gunner, Rogue Palisade, Elite Battleship, Summoner, Elite Skimmer, Freyja, and Zaphkiel's movement speed.
- Nerfed Elite Sprayer, Elite Destroyer, Nest Keeper, and Paladin's movement speed.
- Nerfed the Celestial's health.
- Nerfed Freyja.
- Nerfed Paladin.
- Nerfed Zaphkiel.

# Balance [2021-05-25]
- Slightly reduced the speed of Overlord, Autoseer, Commander, Overdrive, and Overseer.

# Balance [2021-05-23]
- Slightly buffed the base speed of Overseer, Overlord, Overtrapper, Overgunner, Overdrive, Autoseer, Banshee, Commander, and Manager.

# Balance [2021-05-22]
- Slightly buffed the speed of Septa Trapper and Hexa Trapper.

# Update [2021-05-21]
- Added Launcher, branches from Pounder.
- Sidewinder no longer branches from Hunter but now branches from Launcher.
- Swarmer no longer branches from Destroyer but now branches from Launcher.
- Skimmer and Twister no longer branch from Artillery but now branches from Launcher.
- Reworked Overdrive so all of its drone turrets shoot at once and slightly increased their penetration and damage

# Gamemode Poll [2021-05-18] Which of these gamemodes do you like?
- 23, 2021-05-23T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze
- Siege

# Gamemode Poll [2021-05-18] Which of the following team gamemodes do you like?
- 22, 2021-05-23T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM               |X| |X|X| |X
- Domination        |X| |X|X| |X
- Mothership        |X| |X|X| |X
- Open TDM          |X|X|X|X|X|X
- Open Domination   |X|X|X|X|X|X
- Tag               |X|X|X|X|X|X
- Portal TDM        |X| |X|X| |X
- Portal Mothership |X| |X|X| |X
- Assault           |X| | |X| |

# Balance [2021-05-18]
- Buffed Banshee's drones and acceleration while removing the ability to control it's auto turrets.

# Balance [2021-05-17]
- Buffed the Elite Skimmer but nerfed it's health.
- Nerfed the Nest Keeper but buffed it's FoV.
- Reworked the Elite Gunner.
- Nerfed the Elite Battleship.
- Buffed the Elite Sprayer.
- Buffed the Elite Destroyer.
- Buffed the Rogue Palisade.

# Balance [2021-05-16]
- Buffed Skimmer, Twister, and Swarmer.
- Slightly buffed the FoV of Twister.
- Buffed the accuracy of AI turrets.

# Balance [2021-05-13]
- Made Bulwark's traps more focused.

# Patch [2021-05-13]
- Renamed Auto-Overseer to Autoseer.

# Balance [2021-05-05]
- Buffed Builder, Auto-Builder, Boomer, and Conqueror's movement speed.
- Buffed Machine Gunner.
- Nerfed Surfer's swarm range.

# Balance [2021-05-04]
- Slightly buffed Triple Twin.

# Balance [2021-05-02]
- Buffed Hexa-Trapper and Septa-Trapper's movement speed.
- Fixed Sprayer's mini bullet.
- Buffed Sidewinder's bullet speed and range.

# Balance [2021-04-22]
- Buffed Auto-4's bullet speed.

# Balance [2021-04-20]
- Buffed Auto-3's bullet range.
- Buffed Auto-5's bullet health, penetration, and damage.
- Buffed Auto-4's bullet health, penetration, and damage.
- Buffed Trap Guard's basic barrel.

# Patch [2021-04-12]
- Spawner, Auto-Spawner, and Factory minions will no longer bounce when colliding with each other.

# Balance [2021-04-11]
- Slightly buffed Hewn Double.
- Slightly buffed Gunner and Auto-Gunner.
- Nerfed tanks that use sunchips.

# Balance [2021-04-11]
- Doubled the time it takes for Landmine to go invisible.
- Increased the range at which you can begin to see invisible tanks.

# Patch [2021-04-10]
- Your drones will no longer collide with the drones of your teammates.

# Balance [2021-04-09]
- Slightly increased Ranger's FoV.
- Slightly increased Maleficitor's drone speed.
- Fixed bosses becoming overpowered due to the drone buff of necro classes.

# Balance [2021-04-08]
- Slightly buffed spawned drones from all necro classes.
- Slightly nerfed the FoV of drones and minions.
- Increased base speed of Maleficitor, Spawner, and Auto-Spawner.

# Balance [2021-04-08]
- Slightly nerfed Crossbow and Auto-Tri-Angle's penetration.

# Balance [2021-04-08]
- Slightly buffed all hybrid-type drones.

# Update [2021-04-07]
- Added Armsman, branches from Rifle.
- Added Crossbow, branches from Rifle.

# Balance [2021-04-07]
- Slightly increased the base speed of Ranger, Sidewinder, and Fortress.

# Balance [2021-02-25]
- Nerfed Shield Capacity.
- Nerfed Battleship AI drones.
- Fixed Sprayer and Machine Gun's recoil.
- Nerfed Skimmer and Twister's range.
- Slightly buffed Sidewinder's Snake's speed.
- Health of Surfer, Fighter, and Bomber is now consistent with Tri-Angle.
- Slightly buffed the reload of Auto-Double and Auto-Overseer's auto turrets.

# Update [2021-01-17]
- You can now press F to take control of an uncontrolled Dominator or Mothership.

# Patch [2021-01-14]
- Fixed the rotation speed of smashers.

# Gamemode [2021-01-13]
- Changed how the gamemodes are randomized in the US servers.

# Balance [2021-01-12]
- Slightly nerfed Shield Capacity and Body Damage.

# Patch [2021-01-07]
- Optimized bandwidth usage.

# Update [2021-01-05]
- The first person to join a sandbox now has operator access, and can press &#96; + F1 for the list of operator commands that can used while holding &#96;.

# Balance Update [2021-01-05]
- Buffed Body Damage and Shield Regeneration.

# Patch [2021-01-02]
- Added more Sandbox servers.
- Made sandbox arenas dynamically resize.
- Added basic controller support.

# Gamemode [2021-01-01]
- Added Sandbox mode.
- More features will be coming soon.
- Note that if there are too many players, you'll be placed in a random sandbox with another player.

# Patch [2020-12-30]
- Changed the server speed display to use mspt and made the capitalization of arras.io more consistent.
- Prevented crashers from passing through walls.

# Update [2020-12-29]
- Changed the maze generation in Maze and Open Maze TDM.
- Buffed Shield Capacity and nerfed Shield Regeneration.
- Redesigned Commander.
- Made autospin faster.
- <a href="#balances">Other balance changes</a>.

# Balance [2020-12-29]
- Banshee can now control its auto turrets.
- Buffed the reload of Falcon.
- Nerfed Sidewinder.

# Update [2020-12-25]
- Added Commander, branches off of Overseer.
- Added Auto-Cruiser, branches off of Cruiser.

# Patch [2020-12-24]
- Fixed the color of the purple base.

# Balance [2020-12-22]
- Invisible tanks are now more visible when you're near it.

# Patch [2020-12-22]
- Made the spawn screen faster.

# Patch [2020-12-21]
- Slightly changed the names of some gamemodes.

# Event [2020-12-20]
- The squads event has started! Added Squads in USA and Asia.
- Players spawn on teams of 4 with random players. You can also press F to create or leave a private team.

# Patch [2020-12-18]
- Fixed players spawning outside sanctuaries.

# Patch [2020-12-17]
- Made the low graphics option lower the resolution so it could actually improve performance.

# Patch [2020-12-16]
- Changed how names and health bars are rendered.

# Patch [2020-12-11]
- The arena in Tag now shrinks gradually instead of starting out small.

# Patch [2020-12-09]
- Arena closers can now see invisible players.
- Most turrets no longer fire when the target is outside the firing arc.
- Prevented players in Siege from leaving the fortress.

# Balance [2020-12-07]
- Reworked how recoil works in general and made it more consistent.

# Patch [2020-12-06]
- Added a new region code system.
- Optimized entity controllers and fixed a memory leak.

# Gamemode [2020-12-06]
- The server selector now displays the player count and player limit instead of the server provider and is sorted by region.
- Added new servers and shuffled the gamemodes. Now almost all of the servers have partially randomized gamemodes.
- USA has Maze, TDM, Domination/Mothership, Open TDM, Pandemic/Tag, Siege/Assault, and 4 Team Maze gamemodes.
- Europe has FFA and a random team gamemode.
- Asia has a Maze 4TDM variant and a random team gamemode, and sometimes Maze.
- Additionally, there's a randomized gamemode server in both USA and Asia.

# Balance Update [2020-11-29]
- Rebalanced Battleship.
- Nerfed bosses.
- Changed the way Spreadshot looks.
- Go to the <a href="#balances">balance update section</a> for more details.

# Balance Update Details [2020-11-29]
- Buffed the reload, range, and damage of Battleship's guided swarm drones.
- Buffed the speed and damage of Battleship's autonomous swarm drones but nerfed their reload and range.
- Nerfed the reload and bullet stats of Elite Battleship.
- Nerfed the bullet stats of Nest Keeper's Mega Crasher.
- Nerfed the bullet stats of Elite Skimmer's Hypermissiles.
- Nerfed the range of Freyja.
- Nerfed the range and reload of Summoner.

# Patch [2020-11-28]
- Made the new prediction the default.
- Improved debug information to show prediction mode, bandwidth usage (in bytes per second), entity count, and server idle time.
- You can now press Shift + L to keep debug information on instead of holding L.
- Added a display for the author of custom themes.

# Patch [2020-11-24]
- Various client and server reworks and minor optimizations.
- Note that if you own a private server, you can now go <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to enable the class tree.

# Update [2020-11-15]
- Added randomized gamemodes.

# Patch [2020-11-15]
- Made the text in the server selector slightly smaller.
- Banned a few multiboxing scripts.

# Balance [2020-11-15]
- Nerfed the penetration of Auto Double's auto-turret.
- Nerfed the damage of Auto Overseer's auto-turret.
- Nerfed the accuracy and bullet speed of Engineer's pillboxes.

# Event [2020-11-13]
- Started the Pandemic event, replacing Tag in US East and Asia.
- When a player on the <b style="color: #00b0e1">blue</b> team dies to a player on the <b style="color: #3cbf00">green</b> team, they are infected and will respawn on the green team.
- The game ends when everyone is infected.

# Patch [2020-11-07]
- Players can no longer get stuck in walls.
- Going through a portal now grants invulnerability for 5 seconds.

# Gamemode Poll [2020-11-01] Which of these gamemodes do you like?
- 21, 2020-11-08T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze
- Siege

# Gamemode Poll [2020-11-01] Which of the following team gamemodes do you like?
- 20, 2020-11-08T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM               |X| |X|X| |X
- Domination        |X| |X|X| |X
- Mothership        |X| |X|X| |X
- Open TDM          |X|X|X|X|X|X
- Open Domination   |X|X|X|X|X|X
- Tag               |X|X|X|X|X|X
- Portal TDM        |X| |X|X| |X
- Portal Mothership |X| |X|X| |X
- Assault           |X| | |X| |

# Patch [2020-11-01]
- Changed the gamemode code for Assault, Siege, and Tag.
- The server list is now fetched from the central servers.
- Slightly changed the sorting of the servers.
- Forced the HTTPS redirect.

# Update [2020-10-28]
- Servers that are unavailable are now automatically removed.
- You can now paste in party links without reloading.

# Patch [2020-09-28]
- Added reCAPTCHA and a few other anti-botting measures.
- Removed the reCAPTCHA badge from the bottom right during the game.

# Update [2020-09-06]
- The tag event has started! Added Tag in US East and Asia.
- Players who are killed will respawn on the team that killed them.
- A team wins when there are no other team alive.

# Patch [2020-08-22]
- Added an in-game display for server ID.
- Added a workaround for lag caused by mouse movement in Chrome 84.

# Gamemode Poll [2020-07-29] What FFA gamemodes do you like?
- 19, 2020-07-31T07:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-07-29] Which of the following team gamemodes do you like?
- 18, 2020-07-31T07:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Update [2020-07-20]
- Added Ordnance, branches off of Artillery and Hunter.

# Gamemode [2020-07-06]
- The event has ended.
- US West has Assault, US East has Siege, Europe has Portal 4TDM, and Asia has Portal Mothership.

# Event Poll [2020-06-29] Which of these gamemodes do you like?
- 17, 2020-07-06T07:00:00.000Z, any
- Assault
- Siege
- Portal 4TDM
- Portal Mothership

# Patch [2020-06-26]
- Added upgrade cooldown when you have bullets on the map.
- Fixed a vulnerability that could cause server crashes.
- Spawn protection now lasts 60 seconds.
- Shuffled the gamemodes for bandwidth optimization.

# Patch [2020-06-25]
- Fixed green team's losing condition in Assault.

# Event [2020-06-23]
- We have brought back all of the event gamemodes: Assault, Siege <span class="tooltip"><span>Originally the boss event</span></span>, Portal 4TDM, and Portal Mothership.
- Each region will have an opportunity to play each of these gamemodes at least once during the event.

# Gamemode [2020-06-23]
- Slightly reworked and readded Assault.
- For the <b style="color: #00b0e1">blue</b> team to win, they must invade and destroy all of the green sanctuaries.
- For the <b style="color: #3cbf00">green</b> team to win, they must guard their sanctuaries and dominators and keep at least 3 of them continuously for 8 minutes.
- When a sanctuary is destroyed, it can only be repaired to become a dominator.
- Changed the gamemodes of all of the servers.
- There are now three US West servers with the gamemodes 4TDM, Maze 2TDM, and Maze Domination.
- US East now has 2TDM, 4 Team Domination, and FFA.
- Europe only has Maze.
- Asia has FFA and Maze 4TDM.

# Patch [2020-06-23]
- Changed maze generation for Assault to make the sanctuaries more connected.

# Event Poll [2020-06-18] Do you like the portal event?
- 16, 2020-06-22T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2020-06-08]
- The portal event has started! Added Portal 4TDM and Portal Mothership.
- In Portal 4TDM, one side of the arena is normal 4TDM and the other is Maze 4TDM.
- In Portal Mothership, Motherships spawn on opposing sides of the arena.
- Portals connect the two sides of the arena.

# Gamemode [2020-06-01]
- Added Assault.
- For the <b style="color: #00b0e1">blue</b> team to win, they must invade and destroy the green sanctuary, which can be unlocked by destroying all of their three dominators.
- For the <b style="color: #3cbf00">green</b> team to win, they must guard their dominators and sanctuary and keep at least 3 of them continuously for 8 minutes.
- Added 2TDM and restored some of the servers that ran out of bandwidth.

# Gamemode Poll [2020-05-30] What FFA gamemodes do you like?
- 15, 2020-06-04T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-05-30] Which of the following team gamemodes do you like?
- 14, 2020-06-04T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Balance [2020-05-29]
- Buffed the reload and accuracy of auto-turrets.
- Nerfed the acceleration of Mega Smasher.
- Nerfed Engineer.
- Nerfed rammers.

# Balance [2020-05-27]
- Buffed Sidewinder, Spreadshot, and Auto-4.
- Buffed all auto-turrets.
- Buffed Gunner Trapper's recoil.
- Buffed Battleship's reload.
- Nerfed Carrier's field of view.
- Nerfed the bullet speed of Artillery, Mortar, Barricade, and Auto-5.
- Buffed the knockback of Factory drones.
- Mega Smasher is now faster but no longer completely immune from knockback.

# Patch [2020-05-27]
- Replaced some servers to deal with bandwidth issues.

# Event Poll [2020-05-17] Did you like the boss event?
- 13, 2020-05-22T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should become a regular gamemode

# Event [2020-05-17]
- The boss event has ended.

# Balance [2020-05-16]
- Buffed the shield capacity stat.

# Update [2020-05-16]
- Invisible tanks such as smasher are now slightly visible when you're near it.
- Healer can now gain score from healing other players.

# Event [2020-05-14]
- Added Sanctuaries to the boss event.
- Players can only spawn in the sanctuaries. When all of the sanctuaries are destroyed and not restored in 60 seconds, the game is lost.

# Balance [2020-05-13]
- Nerfed the knockback of Healer.

# Update [2020-05-12]
- Redesigned Healer's appearance to look different from Sidewinder.

# Patch [2020-05-12]
- Replaced some servers to deal with bandwidth issues.
- Added rocks to FFA.
- When under spawn protection, you no longer deal damage to bosses and motherships, and you also cannot turn invisible.
- Added a contact link.

# Event [2020-05-09]
- The boss event has started! Bosses will spawn in waves while players defend themselves.
- Added Healer, branching off of Basic, for the boss event.

# Balance [2020-05-09]
- Buffed bosses.

# Patch [2020-05-09]
- Shuffled the gamemodes for bandwidth optimization.

# Patch [2020-05-08]
- Reworked AI pathfinding to avoid walls.

# Patch [2020-04-14]
- Added HTTPS redirect.

# Patch [2020-04-13]
- Blacklisted suspicious IPs.

# Patch [2020-04-10]
- Changed server list sorting.
- Added support for <a href="https://web.archive.org/web/20221128043454/https://arras.io/">HTTPS</a>.

# Gamemode Update [2020-04-10]
- Added three new servers and new gamemodes.
- There are now two US West servers with gamemodes 4 Team Mothership and Maze FFA.
- US East now has Maze 4TDM, 4 Team Maze Domination, Assault, Domination, and FFA.
- Europe has two servers with gamemodes Maze 2TDM and 4TDM.
- Asia now has Maze Domination and Open Maze 4TDM.

# Patch [2020-03-25]
- Fixed bug where the score of the Mothership is restored to players when they respawn after a server overload.

# Patch [2020-03-24]
- Added rocks to Open 3TDM.

# Patch [2020-03-20]
- Optimized text rendering on older browsers.

# Gamemode Poll [2020-03-20] What FFA gamemodes do you like?
- 12, 2020-03-24T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2020-03-20] What team gamemodes do you like?
- 11, 2020-03-24T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM                                                                       |X| |X|X| |X
- Domination                                                                |X| |X|X| |X
- Mothership                                                                |X| |X|X| |X
- Open TDM                                                                  |X|X|X|X|X|X
- Open Domination                                                           |X|X|X|X|X|X
- Assault <span class="tooltip"><span>Same as the D-Day event</span></span> |X| | |X| |

# Gamemode [2020-03-19]
- Replaced Glitch and Heroku servers with an ExtraVM server.
- Added Open 3TDM gamemode.

# Update [2020-03-18]
- Added Elite Battleship, idea by Reflection.
- Added Nest Keeper, idea by Whert.

# Patch [2020-03-18]
- Applied a new naming scheme in party links.

# Patch [2020-03-16]
- Switched servers from DVI to ExtraVM.

# Patch [2020-03-12]
- Updated the link to the proxy server.

# Gamemode [2020-03-10]
- Removed the Space 3TDM event gamemode as the server has been down.

# Patch [2020-03-09]
- Added a button that links to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://momentumstudios.games/">Momentum Studios</a>.

# Patch [2020-03-09]
- Migrated from <a target="_blank" href="https://web.archive.org/web/20221128043454/https://surge.sh/">surge.sh</a> to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.netlify.com/">Netlify</a>.
- Added older changelogs into the same document.

# Announcement [2020-03-06]
- Arras.io has received no updates in the last 7 months, but that will soon change. The developer has now joined forces with Momentum Studios, a small game company specializing in the development of online games.
- We hope to be able to work with everyone soon, and bring some life back into the arras.io community!

# Patch [2020-01-10]
- Fixed a bug with more than 9 upgrades in private servers.

# Patch [2019-12-19]
- Fixed a bug with the disconnection screen showing a score instead of the disconnection message.

# Patch [2019-08-09]
- Changed the disconnection screen to display a different message in case of AFK timeout.

# Balance [2019-07-21]
- Nerfed Mega-Smasher's movement speed but made it immune to knockbacks.

# Event [2019-07-21]
- Made the arena in the Space 3TDM circular and around the moon.

# Patch [2019-07-18]
- Fixed auto-restore in Space modes.

# Patch [2019-07-17]
- Fixed a bug where you can move out of the arena bound in Space modes.
- Made the yellow event label a bit less flashy.
- Made the server selector larger.
- Made everything change in size smoothly instead of instantly again.
- Bosses now ignore you if you're within a base.

# Event [2019-07-16]
- Added a new US East server from ExtraVM that can run 2 servers.
- Moved 4TDM to the new server and added the event gamemode.
- For the 50th anniversary of Apollo 11, the event gamemode is Space 3TDM!
- Added <a target="_blank" href="https://web.archive.org/web/20221128043454/https://wikipedia.org/wiki/Reaction_control_system">RCS</a> that will automatically make you slow down if you don't press any key, which you can disable with R.
- Removed the old Glitch 4TDM server.

# Balance Update [2019-07-03]
- Nerfed Tri-Angle branch's recoil and buffed Destroyer branch's recoil.
- Buffed previously overnerfed branches including Double Twins and Necromancers.
- Slightly buffed Gunner branch's bullet speed.
- Buffed Conqueror, Sidewinder, Shotgun, and Boomer.
- Buffed the stats and reload of all regular traps.
- Made Builder branch traps not overshoot.
- Made the slower tanks faster.
- Go to the <a href="#balances">balance update section</a> for more details.

# Balance Update Details [2019-07-03]
- Buffed Destroyer, Annihilator, and Hybrid's recoil.
- Buffed Conqueror's destroyer barrel's reload and recoil.
- Nerfed Annihilator's reload to be the same as Destroyer.
- Nerfed the thruster recoil of all Tri-Angle upgrades except Bomber.
- Nerfed Tri-Angle, Auto-Tri-Angle, Booster, Surfer, and Bomber's front barrel speed.
- Nerfed Fighter's front and side barrel speed.
- Slightly buffed the stats of all Double Twin upgrades except bent double.
- Slightly buffed Gunner, Auto-Gunner, and Cyclone's bullet speed.
- Buffed Sidewinder's bullet speed.
- Buffed Shotgun's bullet stats and accuracy.
- Buffed Director's reload.
- Buffed Underseer and Necromancer drones.
- Buffed the stats and reload of all regular traps.
- Buffed Boomer's damage.
- Made Builder branch traps not overshoot.
- Buffed Assassin branch, Swarmer, Banshee, Manager, Constructor, Overtrapper, Spawner, and Auto-Spawner's movement speed.

# Patch [2019-07-03]
- Added temporary fireworks for Independence Day for people in the United States.
- Fixed NaN bug with protocol.
- Made the references to changelog categories clickable.

# Balance [2019-06-24]
- Nerfed recoil of Gunner Trapper.
- Buffed bullet stats of Overgunner to be the same as Gunner Trapper.

# Patch [2019-06-22]
- Made the client send movement instantly to reduce latency.
- Used the improved encoding algorithm on the client, which was originally only used on the server.
- Note that if you own a private server, you need to go <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to keep your server working!
- Updated the <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=README.md">link format for private servers</a>.

# Patch [2019-06-17]
- More client side optimizations.
- Set the AFK timeout to only kick players when they have been inactive for 5 minutes.
- Neutral and enabled buttons now deal no damage at all.
- Added a display for tank speed in the debug menu, which you can access by pressing L.

# Update [2019-06-17]
- Added auto-level up, which automatically makes you level up after spawning. By default it's enabled on mobile, but you can set it in the <a href="#options-menu">options menu</a>.
- Added the option to use the new interpolation mode, also in the <a href="#options-menu">options menu</a>, which can sometimes make the game smoother.
- Doors can no longer put you into walls now.

# Patch [2019-06-16]
- Added colored indicators to the result page of table polls.

# Gamemode Poll [2019-06-15] What FFA gamemodes do you like?
- 10, 2019-06-19T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2019-06-15] What team gamemodes do you like?
- 9, 2019-06-19T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM                                                                       |X| |X|X| |X
- Domination                                                                |X| |X|X| |X
- Mothership                                                                |X| |X|X| |X
- Open TDM                                                                  |X|X|X|X|X|X
- Open Domination                                                           |X|X|X|X|X|X
- Assault <span class="tooltip"><span>Same as the D-Day event</span></span> |X| | |X| |

# Patch [2019-06-15]
- Added tooltips.
- Fixed a bug with invalid dates in the changelog on certain devices.
- Removed featured status from D-Day.

# Event Poll [2019-06-14] Did you like the D-Day event?
- 8, 2019-06-17T00:00:00.000Z, radio
- No
- Yes, but it should only be an event
- Yes, and it should be renamed and kept as a possible normal gamemode

# Patch [2019-06-13]
- Fixed scrollbars in Firefox.
- Added styling for radio boxes.
- Added support for radio polls.

# Patch [2019-06-12]
- Fixed a bug with negative levels in private servers.
- Prevented everything from moving around weirdly during severe lag.
- Made the references to the <a href="#options-menu">options menu</a> in the changelog clickable.
- Fixed a bug with the <a href="#options-menu">options menu</a> overflowing on Firefox.

# Patch [2019-06-09]
- Minor color changes with the spawn screen.
- Fixed the changelog entries overlapping with each other on small screens.
- Various client side optimizations.

# Balance [2019-06-07]
- Buffed trapper dominator's reload.

# Patch [2019-06-07]
- Fixed some bugs with the spawn screen on Firefox.
- Modified the D-Day map, removing a diagonal hole in the wall near the Axis base.
- Fixed a bug with Maleficitor drones not turning invisible.

# Event [2019-06-06]
- Added an event mode on Maze 2TDM, which is replacing Open 3TDM.
- As today is the 75th anniversary of <b>D-Day</b>, it is the event gamemode!
- The allies, which are <b style="color: #00B0E1">blue</b>, have more tanks than the Axis powers, which are <b style="color: #F04F54">red</b>.
- For the allies to win, they must invade and destroy the red central base on the bottom right, which is unlocked by destroying all of their dominators scattered on the map.
- For the Axis powers to win, they must guard all of their dominators and base and keep at least 4 of them continuously for 8 minutes.

# Patch [2019-06-03]
- Fixed a bug where keys would act multiple times if you press enter multiple times while spawning.
- Changed the dropdown icon in the <a href="#options-menu">options menu</a>.

# Patch [2019-06-02]
- Made the changelog category selector scrollable.
- Resized maze walls so they fit together better.
- Hidden the leaderboard in screenshot mode.
- Made the server selector scroll when selected.
- Fixed a bug with spaces in text measurer fallback for older devices.
- Added a way to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=README.md">specify gamemodes for private servers</a>.

# Patch [2019-06-01]
- Added the option to use the mouse on mobile devices in the <a href="#options-menu">options menu</a>.
- Made the changelog category selector be on top of the changelog on smaller screens.
- Fixed a bug with the respawn delay.
- Multiple maze walls in a square arrangement will join together.
- Added some client side optimizations.

# Patch [2019-05-28]
- Automatically select the nearest fast server by default instead of a random one.

# Patch [2019-05-26]
- Fixed a bug on mobile where you shoot immediately after tapping to spawn.
- Fixed another bug on mobile where tapping without dragging will not update your aim.
- Added notification to add to home screen on mobile.

# Patch [2019-05-25]
- Reworked broadcast system again to significantly lower bandwidth.
- Note that if you own a private server, you need to go <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> and update your server accordingly to keep your server working!
- Newly spawned tanks now flash when they're invulnerable.

# Update [2019-05-25]
- Added new mobile controls with larger buttons for stats and joysticks on the bottom. Just go to <a href="/">arras.io</a> on your phone to use it!
- You can now press Q to save screenshots instead of just pressing Z to record videos.
- Added <a href="https://web.archive.org/web/20221128043454/https://youtu.be/5XY8kKIZN-w">custom keybinds</a>, which you can access by going to the <a href="#options-menu">options menu</a> and clicking on the key indicators.
- Note that you can also press backspace to unbind keys.
- Added changelog categories. <a href="#updates">Updates</a> is for all major updates. <a href="#events">Events & Gamemodes</a> is for major updates involving events or gamemodes. <a href="#balances">Balance</a> is for every balance update, major or minor. <a href="#changelog">Changelog</a> will show you every single update.

# Patch [2019-05-25]
- Added automatic sweeping to the Discord bot to save on memory usage.
- Patched kill counter to lower memory usage.
- Changed the style of the arrows of the drop-downs in the <a href="#options-menu">options menu</a>.

# Balance [2019-05-24]
- Buffed Hewn Double recoil and bullet stats.

# Patch [2019-05-24]
- Added notification to press N if player hasn't press N 30 seconds after spawning.

# Balance [2019-05-21]
- Nerfed Necromancer drone speed.
- Made Necromancer guard drones turn squares into regular drones instead of other guard drones.

# Balance [2019-05-20]
- Buffed shotgun damage and bullet speed.
- Nerfed Necromancer drone stats.

# Balance [2019-05-11]
- Nerfed Overdrive drone stats.
- Made squares lose score upon becoming Necromancer drones.

# Balance [2019-05-08]
- Nerfed Sniper reload slightly.

# Event [2019-05-05]
- The event has ended.
- For now, the event mode is replaced with regular Open 3TDM.

# Update [2019-05-04]
- The Glitch server is now visible only when the Heroku server is not available.
- Added tooltips when upgrading to Stalker, Manager, Landmine, Falcon, Eagle, Maleficitor, or Predator.

# Patch [2019-05-03]
- Added lines to indicate branching on the class tree, press T to show.

# Event [2019-05-03]
- Replaced 4 Team Domination for an event mode.
- In remembrance of <i>Freedom 7</i>, the first manned United States spaceflight which was on May 5, 1961, the event gamemode is Space 3TDM!
- We'll likely have more events in the future!

# Balance [2019-05-02]
- Buffed the engine acceleration stats of Smashers.

# Patch [2019-05-01]
- Fixed bug that made the servers crash.

# Gamemode [2019-04-30]
- Added a new server in Asia, also sponsored by <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a>.
- Added Maze on the server.
- Changed the OVH Europe server to FFA.

# Gamemode [2019-04-20]
- Added a new US East server from OVH sponsored by <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a>.
- Added Maze 2TDM on the server.

# Patch [2019-04-14]
- Made the team selector use only the number of teammates you have instead of also the team's total score.
- Fixed bug with death effect.

# Gamemode Poll [2019-04-12] What FFA gamemodes do you like?
- 7, 2019-04-15T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2019-04-12] What team gamemodes do you like?
- 6, 2019-04-15T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Balance [2019-04-12]
- Fixed Overdrive drone's reload.
- Fixed polls not loading.
- Balance changes.

# Patch [2019-04-11]
- Improved the encoding algorithm used by the server to lower bandwidth usage.

# Update [2019-04-08]
- Switched from Hetzner to OVH for the European server.
- This server is also sponsored by <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a> and should be faster.

# Gamemode [2019-04-05]
- Added a new European server from Hetzner.
- Thanks to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.serverhunter.com/?utm_source=arrasio&utm_medium=button&utm_content=website">Server Hunter</a> for sponsoring it!
- Currently the gamemode is Maze but I'll likely change the gamemode for it in the future.
- I've replaced the link for <a href="https://web.archive.org/web/20221128043454/https://arras-lb.glitch.me/donate">Stripe donation</a>, but you can still access it.

# Balance [2019-04-03]
- Nerfed spike bounce ability.

# Update [2019-04-01]
- Added spike bounce ability, touch another spike to activate.

# Gamemode [2019-03-29]
- Replaced the expired OpenShift FFA server with Glitch.

# Update [2019-03-26]
- Removed client side extrapolation and used it for interpolation.

# Gamemode [2019-03-24]
- Added back 4 Team Domination.
- Note that as there's only one DVI server, this is ran on the same server.
- I'll likely change the gamemode for it in the near future.

# Update [2019-03-23]
- Changed bases of 2TDM to go from top to bottom instead of only the center.
- Added Spawner, branches off of Director.
- Made Factory branches off of Spawner.
- Added Auto-Spawner, branches off of Spawner.

# Update [2019-03-19]
- Made traps more accurate.
- Removed WeDeploy as it had been discontinued.
- Fixed a memory leak that caused server crashes, credit to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.reddit.com/user/CrazyDave2345">&.</a> for telling me to investigate it.
- Fixed another bug that caused the server to crash due to the Discord Bot.

# Gamemode [2019-03-10]
- Swapped gamemodes of DVI FFA and Heroku 2TDM.

# Gamemode [2019-03-09]
- Replaced 3 Team Maze Domination on Heroku with 2TDM.

# Update [2019-03-04]
- Added Twister, branches off of Artillery.
- Nerfed ram stats.
- Added new messages on the loading screen.

# Gamemode [2019-02-04]
- Replaced the FFA Glitch with a different FFA server.

# Gamemode [2019-02-01]
- Added a second FFA server on US West.

# Update [2019-01-21]
- Added a class tree, press T to show.
- Added some more links to the left menu.

# Gamemode Poll [2019-01-21] What team gamemodes do you like?
- 5, 2019-01-28T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Gamemode [2019-01-16]
- Removed the OpenShift servers from the server list as they have expired.

# Update [2019-01-04]
- Added a new server selector.

# Patch [2019-01-04]
- Replaced the old outdated Twitter feed with a referral link to Linode.

# Gamemode [2019-01-03]
- Added a WeDeploy server, currently the gamemode is 4TDM.

# Gamemode [2019-01-02]
- Added back 3 Team Maze Domination as the bandwidth have reset!
- Added a BuyVM server, currently the gamemode is Maze Mothership.
- Added party links.

# Update [2018-12-31]
- Renamed Hurricane to Cyclone.
- Added Overdrive, upgraded from Overseer.

# Update [2018-12-29]
- Added a slightly better server selector.
- Thanks to all the donors of the game, we now have a new domain for the game at <a target="_blank" href="https://web.archive.org/web/20221128043454/http://arras.io/">arras.io</a>!

# Update [2018-12-26]
- Replaced the free Codeanywhere server with a Heroku server.

# Update [2018-12-25]
- Merry Christmas everyone! I've put up some Christmas lights around the maze walls.
- Added Hurricane, upgraded from Hexa Tank and Gunner.
- I've temporarily replaced the old US West server with a free OpenShift server, and the Europe server with a free Codeanywhere server.

# Balance [2018-12-24]
- More balance changes.
- Servers now restart every 10 hours, unless someone in the server have a high score.

# Patch [2018-12-23]
- Unfortunately, the Europe server ran out of bandwidth for this month.
- Added the <a href="https://web.archive.org/web/20221128043454/https://arras-lb.glitch.me/donate">one-time donation link</a> to the options menu.
- Various balance changes.

# Gamemode [2018-12-22]
- The OpenShift servers seems to have been experiencing some severe connection issues.
- Fortunately, today I've received a $50 donation. Donations like these will keep the game going, and even the smallest donations can still have an impact.
- In the meantime, I've added 4 Glitch servers. Although they might be slow, it's hopeful better than nothing.

# Gamemode [2018-12-17]
- Unfortunately, the US West server ran out of bandwidth for this month.
- OpenShift has announced that from now on, old projects will expire in 30 days, while new projects expire 60 days after they were created. This means that from now on, the US East servers will need to be remade every two month.
- In order to keep all of the servers up at all time, you can donate to me on <a href="https://web.archive.org/web/20221128043454/https://www.patreon.com/arras">Patreon</a> so I can upgrade the US West server to have more bandwidth.
- I will likely be adding a one-time donation page in the near future.

# Update [2018-12-14]
- Invisible tanks can now see themselves when invisible.
- Fixed bug where the "Press N to level up instantly." is falsely shown.
- Optimized the servers so hopefully they will be less laggy.

# Patch [2018-12-10]
- Fixed bug where traps don't get killed while touching walls.

# Update [2018-12-09]
- Added option to separate health and shield bars. Click on the view options button to access.
- You now respawn with half of your points.

# Update [2018-12-08]
- Predator can now right click to move its camera.

# Patch [2018-11-29]
- Fixed minimap to make tank movements buttery smooth.
- Fixed bug where FFA reverted to Maze.

# Gamemode [2018-11-28]
- Replaced Open 3TDM with 3 Team Maze Domination!

# Gamemode [2018-11-27]
- Ended Thanksgiving event.
- Replaced 4 Team Domination with 4TDM.
- Replaced Maze with FFA.
- 3 Team Maze Domination coming very soon!

# Event [2018-11-23]
- Happy Thanksgiving to everyone! I know it's a day too late, but I've made the motherships look like turkeys.

# Update [2018-11-23]
- Add 2 Team Maze Mothership in the new US West server.
- In this gamemode, there will <i>not</i> be an insta-level up button, but there are more polygons, and the polygons give more points.
- The motherships need to navigate the maze and fight the opposing teams.
- Due to technical difficulties, I was unable to update the gamemode for the US East servers.

# Update [2018-11-20]
- Traps now die instantly when touching walls.
- I'll be changing the gamemodes once I get the maps ready.

# Patch [2018-11-18]
- Added a <a target="_blank" href="https://web.archive.org/web/20221128043454/http://arras-proxy.surge.sh/">proxy server</a> because some people can't seem to play on the new link.
- Fixed minimap maze color for Midnight theme.
- I will update the gamemodes pretty soon.
- Unfortunately, I screwed up while reading the database and accidentally erased people who voted for all three of the winning team gamemodes which are:
- 4TDM
- 2 Team Maze Mothership
- 3 Team Open Maze Domination

# Gamemode Poll [2018-11-12] What flavor of FFA do you like?
- 4, 2018-11-18T00:00:00.000Z, any
- FFA With Maze
- FFA Without Maze

# Gamemode Poll [2018-11-12] What team gamemodes do you like?
- 3, 2018-11-18T00:00:00.000Z, table
- |::<b>With Maze</b>|::<b>No Maze</b>
- <b>Number of Teams<b> |<b>2</b>|<b>3</b>|<b>4</b>|<b>2</b>|<b>3</b>|<b>4</b>
- TDM             |X| |X|X| |X
- Domination      |X| |X|X| |X
- Mothership      |X| |X|X| |X
- Open TDM        |X|X|X|X|X|X
- Open Domination |X|X|X|X|X|X

# Gamemode [2018-11-06]
- Replaced FFA with Maze!
- FFA except there are walls everywhere.

# Patch [2018-11-05]
- Added back minimap to show teammates and bosses, credit to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.reddit.com/user/CrazyDave2345">&.</a> for helping to make it faster.
- Note that if you own a private server, you need to go <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> to keep your server working!

# Balance [2018-11-03]
- Nerfed Musket and Carrier.

# Update [2018-10-31]
- Added Pumpkin Skeleton theme, credit to <a target="_blank" href="https://web.archive.org/web/20221128043454/https://www.reddit.com/user/Road-to-100k">Road</a>.
- You can find the theme by clicking view options. It's recommended for it to be used with glass mode.
- Added Musket, upgraded from Twin and Rifle.
- Thanks to our patrons on <a href="https://web.archive.org/web/20221128043454/https://www.patreon.com/arras">Patreon</a>, we now have a new domain for the game at <a target="_blank" href="https://web.archive.org/web/20221128043454/http://arras.cx/">arras.cx</a>!

# Gamemode [2018-08-22]
- Added Open 3TDM to replace 2TDM.
- Added 4 Teams Domination to replace Mothership.
- Take over three of the five dominators to win the game!

# Patch [2018-08-20]
- Added Malefictor, upgraded from Underseer.
- Press R to stop the drones from moving and turn invisible.
- Added Swarmer, upgraded from Destroyer.

# Gamemode Poll [2018-08-22] Which flavor of Domination do you like the most?
- 2, 2018-08-23T00:00:00.000Z, any
- 2 Teams Domination
- 4 Teams Domination

# Gamemode Poll [2018-08-22] Which flavor of Open TDM do you like the most?
- 1, 2018-08-23T00:00:00.000Z, any
- Open 2TDM
- Open 3TDM
- Open 4TDM

# Gamemode Poll [2018-08-19] What gamemodes do you like?
- 0, 2018-08-22T00:00:00.000Z, any
- FFA
- TDM
- Open TDM (TDM without bases)
- Domination
- Mothership

# Balance [2018-08-17]
- Added more base protectors to 2TDM.
- Increased map size of all gamemodes.
- Nerfed Triplet.
- Buffed Mega-3.
- Buffed Spreadshot.
- Nerfed drone range again.
- Buffed Booster acceleration but nerfed speed.

# Balance [2018-08-16]
- Changed AIs' range mechanism.
- Nerfed drone range.

# Gamemode [2018-08-07]
- Removed 4TDM to help with lag issues because the server is less powerful than expected.

# Gamemode [2018-08-06]
- Added 2TDM and 4TDM!
- Thanks to our patrons on <a href="https://web.archive.org/web/20221128043454/https://www.patreon.com/arras">Patreon</a> for allowing us a second server!

# Update [2018-08-06]
- Added mobile support!
- Various balance changes.

# Update [2018-07-19]
- Added Rifle, upgraded from Sniper.

# Gamemode [2018-07-12]
- Nerfed Shotgun.
- Replaced Portal 4TDM.
- Added experimental gamemode Portal Mothership.
- Motherships spawn on opposing sides of the arena.
- In the middle of both is a portal.
- Motherships cannot enter the portal.

# Gamemode [2018-07-04]
- Replaced 4TDM.
- Added experimental gamemode Portal 4TDM.
- One side of the arena is normal 4TDM, the other is Maze 4TDM.
- In the middle of both is a portal.
- Nerfed certain bosses.

# Patch [2018-07-03]
- Added Eagle, branches off of Tri-Angle and Pounder.
- Moved Shotgun to upgrade from Pounder at Tier 3.
- Moved Conqueror to upgrade from Destroyer instead.
- Changed Conqueror to have Destroyer bullet but with slower reload.

# Patch [2018-07-02]
- Renamed Hepta-Trapper to Septa-Trapper.
- Renamed Snipe Guard to Bushwhacker again.
- Renamed Tri-Builder to Architect.

# Update [2018-07-02]
- Various balance changes.
- If you have a private server, make sure to go <a target="_blank" href="https://web.archive.org/web/20221128043454/https://glitch.com/edit/#!/arras-template?path=CHANGELOG.md">here</a> and do the required changes to keep your server working!

# Patch [2018-06-29]
- Moved Bulwark, now upgraded from Twin and Trap Guard.
- Optimizations so the servers will be less laggy.
- You should now be able to restore scores even after disconnections from server overloading.

# Gamemode [2018-06-28]
- Increased knockback.
- Changed FFA Maze back to FFA.
- Added Bulwark, upgraded from Twin and Trapper.
- Added a limit on how fast you can respawn.

# Patch [2018-06-26]
- Prediction & other debug information are now hidden unless L is pressed.
- Latency and client/server speed are still visible by default.

# Update [2018-06-26]
- Added Trapper, upgraded from Basic.
- Added Tri-Trapper, branches off of Trapper.
- Added Hepta-Trapper, branches off of Tri-Trapper.
- Added Auto-Overseer, branches off of Overseer.
- Made Conqueror barrels smaller.
- Renamed old Trapper to Builder.
- Changed class tree.

# Patch [2018-06-26]
- Fixed bug where leaderboard and upgrade choices are missing.
- Reverted keybinds due to confusion. Click view options for detail.

# Balance [2018-06-25]
- Buffed Skimmer range.

# Patch [2018-06-25]
- Made upgrades three columns.
- Change keybinds. Click view options for detail.

# Gamemode [2018-06-25]
- Replaced Mothership with Maze.
- FFA except there are obstacles everywhere.
- Added Pounder, upgraded from Basic.
- Moved classes like Trappers and Destroyers to upgrade from it.

# Patch [2018-06-24]
- Fixed UI zoom glitch.
- Added <a href="https://web.archive.org/web/20221128043454/https://www.patreon.com/arras">Patreon</a> page!

# Balance [2018-06-23]
- Nerfed Trappers.
- Increased knockback.

# Balance [2018-06-11]
- Nerfed Mothership.
- Nerfed Barricade.

# Gamemode [2018-06-11]
- Temporarily replaced FFA with Mothership.
- Destroy the enemy mothership to win the game!

# Update [2018-06-11]
- Tanks now lasts for 15 seconds instead of 8 seconds if a player disconnected.
- Added experimental tank recovery feature.
- If a player joins back during the time before the tank is automatically destroyed, they will spawn as their old tank.

# Update [2018-06-11]
- Buffed bosses.
- Added Barricade, upgraded from Minigun and Trapper.

# Gamemode [2018-06-03]
- Changed the 2 TDM Domination server to 4 TDM.
- Added M for maximizing stats.
- Added Z to toggle video recorder.

# Update [2018-06-02]
- Added Tri-Trapper, upgraded from Trapper and Flank Guard.
- Added Conqueror, upgraded from Trapper and Destroyer.
- Added Auto-Assassin, upgraded from Assassin.

# Balance [2018-06-02]
- Nerfed drones.
- Nerfed Manager.
- Gunner-Trapper now branches off from Gunner, Trapper, and Trap Guard.
- Doubled the size of the arena.
- Buffed bosses.
- Made bosses spawn more often.

# Update [2018-06-01]
- Added Manager, upgraded from Director.
- Added Stalker, upgraded from Assassin.
- Added Landmine, upgraded from Smasher.

# Gamemode [2018-05-21]
- Changed the 4 TDM Domination server to 2 TDM Domination.

# Balance [2018-05-21]
- Nerfed Health Regen and Body Damage effectiveness.
- Buffed drones slightly.

# Balance [2018-05-08]
- Nerfed Carrier.

# Balance [2018-05-07]
- Nerfed ram stats.
- Nerfed Booster health.
- Buffed Sniper bullet speed slightly.

# Patch [2018-05-05]
- Moved base protectors in Domination to the edge of the map.
- Various nerfs and buffs.

# Gamemode [2018-04-29]
- Replaced 4TDM with 4 Team Domination.
- Take over 3 dominator to win the game!
- Replaced 2TDM with FFA.

# Update [2018-04-28]
- Added Banshee, upgraded from Auto-3 and Overseer.

# Gamemode [2018-04-04]
- Added 2 TDM gamemode with server selector.

# Update [2018-04-01]
- Added Master.

# Patch [2018-03-31]
- Added back pushing for same team.
- Limited drone repel distance.

# Update [2018-03-31]
- Prevented drones from pushing.
- Engineers' oldest turret will now disappear when there are more than six turrets.

# Update [2018-03-31]
- Added back pushing for same team.
- Limited drone repel distance.

# Update [2018-03-30]
- Added reverse mouse and reverse tank keys.
- Various nerfs and buffs.

# Update [2018-03-29]
- Added Auto-Cruiser, upgraded from Cruiser.
- Added Surfer, upgraded from Tri-Angle.
- Added Cropduster, upgraded from Minigun.

# Balance [2018-03-29]
- Nerfed Dual damage slightly.

# Balance [2018-03-26]
- Nerfed swarm drones reload.
- Buffed most tanks reload slightly.

# Balance [2018-03-25]
- Buffed base protectors.
- Nerfed shields again.

# Patch [2018-03-25]
- Added base protectors.
- Nerfed shields.

# Patch [2018-03-25]
- Arena is now 2x bigger.
- Shapes spawn 62% less often.
- Bases added in corners.

# Balance [2018-03-23]
- Nerfed sentries.

# Update [2018-03-22]
- Arras is back!
- Removed tokens.

# Older Changelogs
- <a href="ext/changelog.html">View the original changelog here.</a>
`);
const R=(a,c=!1)=>{let b=document.getElementById(a);a=a.charAt(3).toLowerCase()+a.slice(4);"text"===b.type||"select-one"===b.type?(c||(c=""),K.set(a,b.value&&b.value!==c?b.value:null)):"checkbox"!==b.type&&"radio"!==b.type||K.set(a,b.checked!==c?b.checked:null)},T=(a,c=!1)=>{let b=document.getElementById(a);a=a.charAt(3).toLowerCase()+a.slice(4);if("text"===b.type||"select-one"===b.type)b.value=K.get(a)||c||"";else if("checkbox"===b.type||"radio"===b.type)b.checked=K.get(a)??c};
let Sa=a=>{try{var c=a.replace(/\s+/g,"");2==c.length%4?c+="==":3==c.length%4&&(c+="=");let h=atob(c);c="Unknown Theme";let k="";var b=h.indexOf("\x00");if(-1===b)return null;c=h.slice(0,b)||c;h=h.slice(b+1);b=h.indexOf("\x00");if(-1===b)return null;k=h.slice(0,b)||k;h=h.slice(b+1);let n=h.charCodeAt(0)/255;h=h.slice(1);let f=Math.floor(h.length/3);if(2>f)return null;b=[];for(let l=0;l<f;l++)b.push(h.charCodeAt(3*l)<<16|h.charCodeAt(3*l+1)<<8|h.charCodeAt(3*l+2));return{K:!1,name:c,B:k,content:{table:b,
border:n}}}catch(h){}a=JSON.parse(a);if("object"!==typeof a)return null;let {name:d="Unknown Theme",author:g="",content:e}=a;a=[];for(let h of[e.teal,e.lgreen,e.orange,e.yellow,e.lavender,e.pink,e.vlgrey,e.lgrey,e.guiwhite,e.black,e.blue,e.green,e.red,e.gold,e.purple,e.magenta,e.grey,e.dgrey,e.white,e.guiblack]){if("string"!==typeof h||!/^#[0-9a-fA-F]{6}$/.test(h))return null;a.push(parseInt(h.slice(1),16))}return{K:!0,name:"string"===typeof d&&d.trim()||"Unknown Theme",B:"string"===typeof g&&g.trim()||
"",content:{table:a,border:Math.min(1,Math.max(0,e.border))}}},Ta="TGlnaHQgQ29sb3JzAE5lcGgApnrbvLnofueJbf3zgLWO/e+Zw+jr96qfnv///0hISDyky4q8P+A+Qe/HS41q38xmnKenr3Jvb9vb2wAAAA RGFyayBDb2xvcnMATmVwaAAmiXW3DEkdxGdIsrIkfVbFsk+uHh4ePDo6AAAA5eXlN5/GMLU7/2xu/8ZllnPoyGebY19fc3R6EREP//// TmF0dXJhbABOZXBoADN2wbuq013glUX/2ZOTn//Yf7LEtrZ/f3////83ODRPk7UAtlnhT2Xlv0KAU6C2fKqZj49JSVSlsqUAAAA Q2xhc3NpYwBOZXBoAICO//uF4338dnb/6461jv/xd93Nzc2ZmZn///9SUlIAsOEA4GzwT1T/5Gt2jPy+f/WZmZlUVFTAwMAAAAA Rm9yZXN0AFN0ZXJsb24As4hKpYybPtFqgJdZbUmYVWApT93GuH6Unv//6GZXUIB7tqG+VeWwW/9HR7rGdLp40ZmIZlKXWH2gYAAAAA TWlkbmlnaHQAdW9pZWEAmSuQmEuqXTRWeM3GhIl3jqhckMzMzKeyt7rG/wkfKBI0VQmHZQAAE1ZjgXQ3hLKQmFVVVWSet0RERAAAAA U25vdwBEZW9sdmVvcG9sZXIAWYm/urXRfeXg4LW75ZOf/2Rt5bKysn9/f////zg4Na6u/67/rv+urv///8PD2P+1/8zMzKCgsvLy8gAAAA Q29yYWwgUmVlZgBDZWxlc3RlYQBMdu7GQap4/39Q/9JQ3DOI+oByi4iGv8HC////EkZrQgCuDWM43EMz/qkEe0urXCRuZWiE1NfZMoO8AAAA QmFkbGFuZHMASW5jb2duaW91cwBm+cuc8cIyOHYd5pE4t7e3eIZraqhPt7e3pML0AAAADFqebokiWwAAeD8EWRx3IBJNLxwWmZmZVDUXz+Lz QmxlYWNoAGRlZmluaXRlbHlub3QuAGYA//8A/wD/MgD/7AD/JKf/PL3/8YaRgYHx8fFfX18AJf8A/wD/AAD/+iMxAP/U09ODg4NMTEz//v4ICAg UHVtcGtpbiBTa2VsZXRvbgBSb2FkAP9yGXD/Y0cbcTr984CUEQAZRBcbcTqqn57+2LFISEg8pMt27sbwT1QbcTobcTrMZpz///9yb2//m1gAAAA UmV0cm8ARGFtb2NsZXMAwP//Yga/OzGOlZN9AO7o1ecsdsjY5wc2Qv///wAAACw+ue+yCbkSNILf5B5haosSTIOUlna2iwgeIAAAAA UGFzdGVsAERhbW9jbGVzAMD//5iK/7LYs4T/63bu6NX/jb3z8NcHNkL//7VnUkA5dpc/96H2X2TSuGmBZUqnUpnBwcGNqZb126cAAAA RGlzY29yZABEYW1vY2xlcwDA1T8/KbOZ/ygo/+uOtY7//2j/zc3NmZmZ4ODgAAAAconaQ7WB8EdH/+gAXHn/+qQZmZmZVFRUHiEkNjk+ V1IgU2hlZXQgVGhlbWUAYWxldHRlcmEATP2YJ2iRaLuOdfXeup6BcbNXV+rgyaqfnv///3lVSGuyv2jFbLhjWNi8Z254qoRhh4aHiHJvb8u2kAAAAA RGVzY2VudABSb2c0NTYAAJXOz/+l/7yJif//sgAAAL2RxH9zYAAAAP///wAAAKurq6aXaFRUVP3npYeHd4WmhsS7nS4uMjs7NwAAAA U29sYXJpemVkIERhcmsAUm9hZADAtYkAKqGYy0sWZXuD7ujV0zaC4OLkBzZC////AAAAJovShpYA3DIvtYkAZ4yxoIK9g5SWBzZCACs2AAAA RWdncGxhbnQAUm9hZADA6WuoeNS21hAPo56b5+nb6WuojYaHKxop////KxopBrbvSLaF72FV+ZsVgVuk/sQYubawQBE/UDdNAAAA".split(" "),
Ua=Sa(Ta[0]).content,U=document.getElementById("optColors"),V=document.getElementById("optCustom"),Va=({name:a,B:c},b=!1)=>{a=b?a?`Custom - ${a}`:"Custom":a;return""===c?a:"fan-made"===c?`${a} (Fan-made)`:`${a} (by ${c})`};for(let a of Ta){let c=Va(Sa(a));U.options.add(new Option(c,a,U.options))}
let Wa=new Option("Custom","custom"),Xa=()=>{let a={name:"",B:""};try{V.value&&(a=Sa(V.value));V.classList.remove("error");if(a.K){let {name:c="Unknown Theme",B:b="",content:d}=a,{table:g,border:e}=d,h=c.trim()+"\x00"+b.trim()+"\x00"+String.fromCharCode(1<=e?255:0>e?0:Math.floor(256*e));for(let k of g)h+=String.fromCharCode(k>>16,k>>8&255,k&255);V.value=btoa(h).replace(/=+/,"")}Wa.text=Va(a,!0)}catch(c){V.classList.add("error"),Wa.text="Custom"}};Xa();U.options.add(Wa);
U.addEventListener("change",()=>{V.style.display="custom"===U.value?"block":"none"});U.addEventListener("focus",()=>{V.style.display="custom"===U.value?"block":"none"});V.addEventListener("input",()=>Xa());T("optName");T("optColors",Ta[0]);T("optCustom");T("optBorders","normal");T("optColoredNest");T("optNoGrid");T("optShield");T("optMiter");T("optMiterStars");T("optQuadraticStars");T("optRenderGui",!0);T("optRenderNames",!0);T("optRenderScores");T("optRenderLeaderboard",!0);T("optRenderHealth",!0);
T("optReducedInfo");T("optCanvas","auto");T("optInterpolation",!0);T("optSmoothCamera");T("optLowGraphics");T("optAlphaAnimations",!0);T("optNames","low");u&&T("optMobile");T("optInstantMax",!0);T("optIncognito");
const X={target:document.getElementById("game").contentWindow,m:{},queue:[],send(a,...c){a=["arras.io-container",a,...c];this.queue?this.queue.push(a):this.target.postMessage(a,window.origin)},O:!1,start(){this.O||(this.O=!0,window.addEventListener("message",a=>{if(a.origin===window.origin&&Array.isArray(a.data)){var [c,b,...d]=a.data;if("arras.io-main"===c){if(this.queue){for(let g of this.queue)this.target.postMessage(g,window.origin);this.queue=null}if("string"===typeof b&&this.m[b])this.m[b](...d);
else 1===b&&this.send(0)}}}),this.target.postMessage(["arras.io-container",1],window.origin))}};Na().then(a=>X.send("clientCount",a));setInterval(()=>{Na().then(a=>X.send("clientCount",a))},3E4);let Ya=0;X.m.death=()=>{M||na.show(u?"nitropay-mobile":za());Ya=Date.now()};
X.m.respawn=()=>{na.u();xa({type:"respawnAd",duration:Date.now()-Ya,user:{adblock:M,mobile:u,window:{innerWidth:window.innerWidth,innerHeight:window.innerHeight},tracking:{name:K.get("name")||"",colors:K.get("colors")||"normal",borders:K.get("borders")||"normal"}}})};X.m.recaptcha=()=>{oa().catch(()=>"").then(a=>{X.send("recaptcha",a)})};X.m.setHash=a=>{location.hash!==a&&(location.hash=a)};X.m.reload=()=>{location.reload(!0)};X.start();let Y=null;
var Za,$a,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb;
window.Arras=()=>({graphical:{get darkBorders(){return Za??!1},set darkBorders(a){Za=a;X.send("setOverride","game.borders.dark",a)},get neon(){return $a??!1},set neon(a){$a=a;X.send("setOverride","game.borders.neon",a)},get coloredNest(){return ab??!1},set coloredNest(a){ab=a;X.send("setOverride","game.colored_nest",a)},get renderGrid(){return bb??!0},set renderGrid(a){bb=a;X.send("setOverride","game.render_grid",a)},get shieldbars(){return cb??!1},set shieldbars(a){cb=a;X.send("setOverride","game.shieldbars",
a)},get miter(){return db??!1},set miter(a){db=a;X.send("setOverride","game.miter",a)},get renderNames(){return eb??!0},set renderNames(a){eb=a;X.send("setOverride","game.render_names",a)},get renderScores(){return fb??!1},set renderScores(a){fb=a;X.send("setOverride","game.render_scores",a)},get renderHealth(){return gb??!0},set renderHealth(a){gb=a;X.send("setOverride","game.render_health",a)},get reducedInfo(){return hb??!1},set reducedInfo(a){hb=a;X.send("setOverride","gui.reduced_info",a)},get censorNames(){return ib??
1},set censorNames(a){ib=a;X.send("setOverride","game.censor_names",a)},get alphaAnimations(){return jb??!0},set alphaAnimations(a){jb=a;X.send("setOverride","game.alpha_animations",a)},get borderChunk(){return kb??6},set borderChunk(a){kb=a;X.send("setOverride","game.borders.size",a)},get alternateBorder(){return lb??!1},set alternateBorder(a){lb=a;X.send("setOverride","game.borders.alternate",a)}},gui:{get enabled(){return mb??!0},set enabled(a){mb=a;X.send("setOverride","gui.enabled",a)},get scale(){return nb??
1},set scale(a){nb=a;X.send("setOverride","gui.scale",a*(1400>window.outerWidth?1.27:1))},get alcoveSize(){return ob??200},set alcoveSize(a){ob=a;X.send("setOverride","gui.object_size",a)},get spacing(){return pb??20},set spacing(a){pb=a;X.send("setOverride","gui.spacing",a)},get leaderboard(){return qb??!0},set leaderboard(a){qb=a;X.send("setOverride","gui.leaderboard",a)},get barChunk(){return rb??5},set barChunk(a){rb=a;X.send("setOverride","gui.bar_size",a)}},get themeColor(){if(y){if(Y)return Y;
Y={table:y.table.map(a=>"#"+a.toString(16).padStart(6,"0")),border:y.border};Promise.resolve().then(()=>{y={table:Y.table.map(a=>parseInt(a.slice(1),16)),border:Y.border};X.send("setColors",y.table);X.send("setOverride","game.borders.blend",y.border);Y=null});return Y}}});
let sb=!1,tb=()=>{if(t&&!sb){sb=!0;xa({type:"joinServer",server:{host:t.host},user:{adblock:M,mobile:u,window:{innerWidth:window.innerWidth,innerHeight:window.innerHeight},tracking:{name:K.get("name")||"",colors:K.get("colors")||"normal",borders:K.get("borders")||"normal"}}});if(u){var a=document.body;a.requestFullscreen?a.requestFullscreen():a.webkitRequestFullscreen?a.webkitRequestFullscreen():a.mozRequestFullScreen?a.mozRequestFullScreen():a.msRequestFullscreen&&a.msRequestFullscreen()}R("optName");
R("optColors",Ta[0]);R("optCustom");R("optBorders","normal");R("optColoredNest");R("optNoGrid");R("optShield");R("optMiter");R("optMiterStars");R("optQuadraticStars");R("optRenderGui",!0);R("optRenderNames",!0);R("optRenderScores");R("optRenderLeaderboard",!0);R("optRenderHealth",!0);R("optReducedInfo");R("optCanvas","auto");R("optInterpolation",!0);R("optSmoothCamera");R("optLowGraphics");R("optAlphaAnimations",!0);R("optNames","low");u&&R("optMobile");R("optInstantMax",!0);R("optIncognito");if(36<=
performance.now()/6E4/60)location.reload(!0);else{a=["dark","neon"].includes(document.getElementById("optBorders").value);var c=["glass","neon"].includes(document.getElementById("optBorders").value),b=document.getElementById("optColoredNest").checked,d=!document.getElementById("optNoGrid").checked,g=document.getElementById("optShield").checked,e=document.getElementById("optMiter").checked,h=document.getElementById("optMiterStars").checked,k=document.getElementById("optQuadraticStars").checked,n=document.getElementById("optRenderNames").checked,
f=document.getElementById("optRenderScores").checked,l=document.getElementById("optRenderHealth").checked,m=document.getElementById("optReducedInfo").checked,q="none"===document.getElementById("optNames").value?0:"low"===document.getElementById("optNames").value?1:2,A="software"===document.getElementById("optCanvas").value?0:"low"===document.getElementById("optCanvas").value?1:"medium"===document.getElementById("optCanvas").value?2:"high"===document.getElementById("optCanvas").value?3:-1,z=document.getElementById("optLowGraphics").checked,
C=document.getElementById("optAlphaAnimations").checked,D=document.getElementById("optRenderGui").checked,v=1400>window.outerWidth?1.27:1,G=document.getElementById("optRenderLeaderboard").checked,S=document.getElementById("optInterpolation").checked,H=document.getElementById("optSmoothCamera").checked;ca=document.getElementById("optInstantMax").checked;da=document.getElementById("optIncognito").checked;var P=document.getElementById("optColors").value;try{Ua=Sa("custom"===P?document.getElementById("optCustom").value:
P).content}catch(B){}y=Ua;P=document.getElementById("optName");P.blur();P.disabled=!0;ea=P.value;na.u();document.body.appendChild(document.createElement("style")).appendChild(document.createTextNode(".grecaptcha-badge{visibility:hidden}"));document.getElementById("startMenuWrapper").style.top="-600px";setTimeout(()=>{u||ma.u();document.getElementById("startMenuWrapper").remove()},1E3);xa({type:"spawnAd",duration:Date.now()-Aa,user:{adblock:M,mobile:u,window:{innerWidth:window.innerWidth,innerHeight:window.innerHeight},
tracking:{name:K.get("name")||"",colors:K.get("colors")||"normal",borders:K.get("borders")||"normal"}}});ba=M;fa=K.getAll();N=!0;X.send("init",a,c,b,d,g,e,h,k,n,f,l,m,q,A,z,C,6,!1,D,v,200,20,G,5,S,H,y.table,y.border,u,ba,ca,da,ea,r,p,aa,Ba,fa,t.host,t.code,t.id,document.getElementById("optMobile").value)}}};u&&""===document.getElementById("optMobile").value&&(document.getElementById("optMobile").value="joysticks");
""===document.getElementById("optBorders").value&&(document.getElementById("optBorders").value="normal");
if(!u){let a={};try{if("#vi"===location.hash||"#vim"===location.hash)a={KEY_ABILITY:["N",78],KEY_AUTO_FIRE:[";",186],KEY_AUTO_SPIN:["P",80],KEY_CHOOSE_1:["Q",81],KEY_CHOOSE_2:["W",87],KEY_CHOOSE_3:["E",69],KEY_CHOOSE_4:["A",65],KEY_CHOOSE_5:["S",83],KEY_CHOOSE_6:["D",68],KEY_CHOOSE_7:["Z",90],KEY_CHOOSE_8:["X",88],KEY_CHOOSE_9:["C",67],KEY_CLASS_TREE:["T",84],KEY_DOWN:["J",74],KEY_LEFT:["H",72],KEY_LEVEL_UP:[".",190],KEY_OVERRIDE:["I",73],KEY_PAUSE:["B",66],KEY_PING:[",",188],KEY_RECORD:["V",86],
KEY_REVERSE_MOUSE:["U",85],KEY_REVERSE_TANK:["Y",89],KEY_RIGHT:["L",76],KEY_SCREENSHOT:["G",71],KEY_UP:["K",75]};else{let f=K.get("keybinds");a=f?JSON.parse(f):{}}}catch(f){}let c=document.getElementById("controlTable"),b=document.getElementById("resetControls"),d=null,g=[];for(let f of c.rows)for(let l of f.cells){let m=l.firstChild?.firstChild;if(!m)continue;let {key:q,l:A}=m.dataset,z={element:m,key:q,l:A,j:m.innerText,i:r[q],I:m.innerText,H:r[q]};a[z.key]&&(m.innerText=z.j=a[z.key][0],r[q]=z.i=
a[z.key][1],z.l&&(p[z.l]=z.j));g.push(z)}let e=()=>g.some(({i:f,H:l})=>f!==l);e()&&b.classList.add("active");let h=()=>{window.getSelection&&window.getSelection().removeAllRanges();d.element.parentNode.parentNode.classList.remove("editing");d=null},k=f=>{d=f;d.element.parentNode.parentNode.classList.add("editing");if(-1!==d.i&&window.getSelection){f=window.getSelection();f.removeAllRanges();let l=document.createRange();l.selectNodeContents(d.element);f.addRange(l)}},n=(f,l)=>{if(" "===f)f="",l=-1;
else if(l!==d.i){let m=g.find(({i:q})=>q===l);m&&(m.j=d.j,m.element.innerText=d.j,m.i=d.i,r[m.key]=d.i,m.l&&(p[m.l]=d.j),a[m.key]=[m.j,m.i])}d.j=f;d.element.innerText=f;d.i=l;r[d.key]=l;d.l&&(p[d.l]=f);a[d.key]=[d.j,d.i];K.set("keybinds",JSON.stringify(a));h();e()?(b.classList.remove("spin"),b.classList.add("active")):b.classList.remove("active")};document.addEventListener("click",f=>{if(!N)if(d)h();else{var l=g.find(({element:m})=>f.target===m);l&&k(l)}});b.addEventListener("click",()=>{if(e()){d&&
h();for(let f of g)f.j=f.I,f.element.innerText=f.I,f.i=f.H,r[f.key]=f.H,f.l&&(p[f.l]=f.I);a={};K.set("keybinds",JSON.stringify(a));b.classList.remove("active");b.classList.add("spin")}});document.addEventListener("keydown",f=>{if(!(N||f.shiftKey||f.ctrlKey||f.altKey)){var l=f.which||f.keyCode;d?1!==f.key.length||/[0-9]/.test(f.key)||3===f.location?"Backspace"!==f.key&&"Delete"!==f.key||n(" ",32):n(f.key.toUpperCase(),l):l!==r.KEY_ENTER&&l!==r.KEY_SPAWN||tb()}})}
document.getElementById("startButton").addEventListener("click",()=>tb());document.addEventListener("contextmenu",a=>{"A"!==a.target.tagName&&"INPUT"!==a.target.tagName&&a.preventDefault()});u&&document.body.classList.add("mobile");let Z=new Date,ub=u?0:Math.max(0,1-Math.abs(Z.getTime()-new Date(Z.getFullYear()-(6>Z.getMonth()?1:0),11,25))/20736E5);
if(ub){let a=document.createElement("canvas");a.style.position="absolute";a.style.top="0";document.body.insertBefore(a,document.body.firstChild);let c=a.getContext("2d"),b=[],d=()=>{a.width!==window.innerWidth&&(a.width=window.innerWidth);a.height!==window.innerHeight&&(a.height=window.innerHeight);c.clearRect(0,0,a.width,a.height);c.fillStyle="#ffffff";for(let g of b){g.x+=5/g.r+Math.random();g.y+=12.5/g.r+Math.random();let e=2*Math.min(.4,.9-g.y/a.height);0<e?(c.globalAlpha=e,c.beginPath(),c.arc(g.x,
g.y,g.r,0,2*Math.PI),c.fill()):g.s=!0}.001*a.width*ub>Math.random()&&b.push({x:a.width*(1.5*Math.random()-.5),y:-50-100*Math.random(),r:2+Math.random()*Math.random()*4});N?a.remove():qa(d)};setInterval(()=>{b=b.filter(g=>!g.s)},2E3);d()}let wb="en-US"===navigator.language&&-7<=O&&-4>=O,xb=6===Z.getMonth()&&4===Z.getDate(),yb=11===Z.getMonth()&&31===Z.getDate()||0===Z.getMonth()&&3>=Z.getDate();
if(!u&&(xb&&wb||yb)){let a=document.createElement("canvas");a.style.position="absolute";a.style.top="0";document.body.insertBefore(a,document.body.firstChild);let c=a.getContext("2d"),b=()=>{let e="164,14,14 230,80,0 230,119,0 47,127,51 23,78,166 123,31,163".split(" ");return e[Math.floor(Math.random()*e.length)]},d=[],g=()=>{if(a.width!==window.innerWidth||a.height!==window.innerHeight)a.width=window.innerWidth,a.height=window.innerHeight,d=[],c.clearRect(0,0,a.width,a.height),c.fillStyle="rgba(255,255,255,0.01)",
c.fillRect(0,0,a.width,a.height),c.lineWidth=2.5,c.lineCap="round";c.globalCompositeOperation="destination-out";c.fillStyle="rgba(0,0,0,0.15)";c.fillRect(0,0,a.width,a.height);c.globalCompositeOperation="lighter";for(var e of d){var h=e.x,k=e.y;e.A+=.2;e.x+=e.D;e.y+=e.A;e.A*=.99;e.D*=.99;e.time--;var n=0<e.time?e.v?1:10<=e.time?1:e.time/10:0;if(0<n)c.strokeStyle=`rgba(${e.color},${n})`,c.beginPath(),c.moveTo(h,k),c.lineTo(e.x,e.y),c.stroke();else{if(e.v&&!e.s){h=Math.floor(5*Math.random())+30;k=.5*
Math.random()+3;n=25+5*Math.random();for(var f=0;2>f;f++){let l=b();for(let m=0;m<h;m++){let q=(m+Math.random())/h*Math.PI*2,A=k+.5*Math.random();d.push({color:l,x:e.x,y:e.y,D:Math.cos(q)*A,A:-.8+Math.sin(q)*A,time:n+2*Math.random(),v:!1,s:!1})}}}e.s=!0}}3E-5*a.width>Math.random()&&(e=a.width*Math.random(),h=a.height-10,k=4*Math.random()-2,n=5*Math.random()-15,f=30+10*Math.random(),d.push({color:b(),x:e,y:h,D:k,A:n,time:f,v:!0,s:!1}));N?a.remove():qa(g)};setInterval(()=>{d=d.filter(e=>!e.s)},2E3);
g()};}()

}

/*
     FILE ARCHIVED ON 04:34:54 Nov 28, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 15:08:33 Jul 27, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 4.839
  load_resource: 97.99
  PetaboxLoader3.resolve: 34.664
  PetaboxLoader3.datanode: 18.304
*/