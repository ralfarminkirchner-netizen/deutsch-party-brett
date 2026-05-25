(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{constructor(){this.screens={},this.currentScreen=null,this.history=[]}register(e,t){if(!t){console.error(`Screen element not found: ${e}`);return}this.screens[e]=t}show(e){Object.values(this.screens).forEach(e=>{e.style.display=`none`,e.style.pointerEvents=`none`,e.classList.remove(`active`)}),this.screens[e]&&(this.screens[e].style.display=`flex`,this.screens[e].style.pointerEvents=`auto`,this.screens[e].classList.add(`active`),this.screens[e].style.backgroundColor=`#beddba`,this.screens[e].style.position=`fixed`,this.screens[e].style.inset=`0`,this.screens[e].style.width=`100vw`,this.screens[e].style.height=`100vh`),this.currentScreen&&this.history.push(this.currentScreen),this.currentScreen=e}back(){if(this.history.length>0){let e=this.history.pop();this.currentScreen&&this.screens[this.currentScreen]&&this.screens[this.currentScreen].classList.remove(`active`),this.screens[e]&&this.screens[e].classList.add(`active`),this.currentScreen=e}}getCurrent(){return this.currentScreen}};function t(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><rect x="8" y="4" width="22" height="28" rx="2" fill="#E8EAF6" stroke="#5C6BC0" stroke-width="2"/><line x1="13" y1="12" x2="25" y2="12" stroke="#7986CB" stroke-width="2" stroke-linecap="round"/><line x1="13" y1="18" x2="22" y2="18" stroke="#7986CB" stroke-width="2" stroke-linecap="round"/><line x1="13" y1="24" x2="19" y2="24" stroke="#7986CB" stroke-width="2" stroke-linecap="round"/><path d="M5 32 L9 28 L12 35Z" fill="#FFD54F" stroke="#F9A825" stroke-width="1"/></svg>`}function n(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M20 4 L24 16 L15 16Z" fill="#FFD54F" stroke="#F9A825" stroke-width="1.5"/><path d="M20 16 L24 28 L16 28Z" fill="#FFB300" stroke="#F57F17" stroke-width="1.5"/><circle cx="14" cy="8" r="2" fill="#FF6F00" opacity="0.6"/><circle cx="28" cy="12" r="1.5" fill="#FF6F00" opacity="0.6"/></svg>`}function r(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M12 22 Q8 18 12 14 Q16 10 20 14" fill="#81C784" stroke="#388E3C" stroke-width="1.5"/><path d="M28 22 Q32 18 28 14 Q24 10 20 14" fill="#A5D6A7" stroke="#388E3C" stroke-width="1.5"/><path d="M16 28 Q12 24 16 20 Q20 16 24 20 Q28 24 24 28Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="1.5"/></svg>`}function i(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}">
    <circle cx="20" cy="20" r="18" fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>
    <text x="20" y="27" text-anchor="middle" font-family="'Fredoka One', sans-serif" font-size="20" font-weight="900" fill="#ffffff" stroke="#900" stroke-width="1.5">N</text>
  </svg>`}function a(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}">
    <circle cx="20" cy="20" r="18" fill="#2ecc71" stroke="#27ae60" stroke-width="3"/>
    <text x="20" y="27" text-anchor="middle" font-family="'Fredoka One', sans-serif" font-size="20" font-weight="900" fill="#ffffff" stroke="#060" stroke-width="1.5">V</text>
  </svg>`}function o(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}">
    <circle cx="20" cy="20" r="18" fill="#3498db" stroke="#2980b9" stroke-width="3"/>
    <text x="20" y="27" text-anchor="middle" font-family="'Fredoka One', sans-serif" font-size="20" font-weight="900" fill="#ffffff" stroke="#005" stroke-width="1.5">A</text>
  </svg>`}function s(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><rect x="8" y="14" width="24" height="18" rx="3" fill="#FFE082" stroke="#F9A825" stroke-width="2"/><path d="M8 14 Q8 10 20 10 Q32 10 32 14" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/><rect x="17" y="10" width="6" height="22" fill="#FF8F00" opacity="0.3"/><path d="M14 14 Q20 6 26 14" fill="none" stroke="#E65100" stroke-width="2" stroke-linecap="round"/></svg>`}function c(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><text x="20" y="30" text-anchor="middle" font-family="Fredoka One, sans-serif" font-size="28" fill="#AB47BC" stroke="#7B1FA2" stroke-width="1">?</text><circle cx="10" cy="10" r="2" fill="#CE93D8"/><circle cx="32" cy="8" r="1.5" fill="#CE93D8"/><circle cx="8" cy="28" r="1" fill="#CE93D8"/></svg>`}function l(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><ellipse cx="20" cy="24" rx="8" ry="10" fill="#B2EBF2" stroke="#00ACC1" stroke-width="2"/><path d="M14 24 L20 8 L26 24" fill="#E0F7FA" stroke="#00ACC1" stroke-width="2"/><circle cx="20" cy="6" r="3" fill="#FFEB3B" stroke="#F9A825" stroke-width="1.5"/><line x1="20" y1="3" x2="20" y2="0" stroke="#F9A825" stroke-width="1.5"/><line x1="16" y1="4" x2="14" y2="1" stroke="#F9A825" stroke-width="1"/><line x1="24" y1="4" x2="26" y2="1" stroke="#F9A825" stroke-width="1"/></svg>`}function u(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M10 26 Q10 14 20 14 Q30 14 30 26" fill="none" stroke="#FF7043" stroke-width="3" stroke-linecap="round"/><path d="M26 22 L30 26 L34 22" fill="none" stroke="#FF7043" stroke-width="3" stroke-linecap="round"/><path d="M6 30 L10 26 L14 30" fill="none" stroke="#FF7043" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/></svg>`}function d(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M20 4 L24 14 L34 16 L26 24 L28 34 L20 28 L12 34 L14 24 L6 16 L16 14Z" fill="#FFD54F" stroke="#F9A825" stroke-width="1.5"/><circle cx="20" cy="18" r="3" fill="#FFF9C4"/></svg>`}function f(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><rect x="6" y="8" width="4" height="26" rx="1" fill="#8D6E63" stroke="#5D4037" stroke-width="1"/><path d="M10 8 L32 14 L10 22Z" fill="#FFF" stroke="#424242"/><rect x="10" y="8" width="11" height="7" fill="#424242"/><rect x="21" y="15" width="11" height="7" fill="#424242"/></svg>`}function p(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M14 36 L14 6 L26 6 L26 36" fill="none" stroke="#A0755A" stroke-width="2"/><path d="M12 8 Q20 4 28 8 L28 20 Q20 16 12 20Z" fill="#FFD54F" stroke="#F9A825" stroke-width="1.5"/><circle cx="20" cy="14" r="4" fill="#FFF9C4" stroke="#F9A825" stroke-width="1"/></svg>`}function m(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M6 34 L34 34 L20 6Z" fill="#EF5350" stroke="#B71C1C" stroke-width="2"/><path d="M18 16 L22 16 L21 24 L19 24Z" fill="#FFF"/><circle cx="20" cy="28" r="2" fill="#FFF"/><path d="M10 30 L14 26 M26 26 L30 30" stroke="#B71C1C" stroke-width="2" stroke-linecap="round"/></svg>`}function h(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><circle cx="20" cy="20" r="14" fill="#5C6BC0" stroke="#283593" stroke-width="2"/><path d="M20 10 A10 10 0 1 0 30 20" fill="none" stroke="#9FA8DA" stroke-width="2" stroke-dasharray="4 2"><animateTransform attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="3s" repeatCount="indefinite"/></path><circle cx="20" cy="20" r="6" fill="#1A237E" opacity="0.6"/></svg>`}function g(e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}"><circle cx="12" cy="12" r="10" fill="#FFD54F" stroke="#F9A825" stroke-width="1.5"/><circle cx="12" cy="12" r="7" fill="#FFECB3" stroke="#F9A825" stroke-width="0.8"/><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="#E65100">M</text></svg>`}function _(e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}"><path d="M12 2 L14.5 9 L22 9.5 L16.5 14.5 L18 22 L12 18 L6 22 L7.5 14.5 L2 9.5 L9.5 9Z" fill="#FFD54F" stroke="#F9A825" stroke-width="1"/></svg>`}function v(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><rect x="4" y="4" width="32" height="32" rx="6" fill="#FFF8E1" stroke="#A0755A" stroke-width="2.5"/><circle cx="13" cy="13" r="3" fill="#5D4037"/><circle cx="27" cy="13" r="3" fill="#5D4037"/><circle cx="13" cy="27" r="3" fill="#5D4037"/><circle cx="27" cy="27" r="3" fill="#5D4037"/><circle cx="20" cy="20" r="3" fill="#5D4037"/></svg>`}function y(e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}"><circle cx="12" cy="12" r="10" fill="#C8E6C9" stroke="#4CAF50" stroke-width="2"/><path d="M7 12 L10.5 16 L17 8" stroke="#2E7D32" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`}function b(e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}"><rect x="7" y="2" width="10" height="3" rx="1" fill="#8D6E63"/><rect x="5" y="5" width="14" height="17" rx="3" fill="#BBDEFB" stroke="#1976D2" stroke-width="1.5"/><rect x="5" y="5" width="14" height="10" rx="3" fill="#90CAF9" stroke="none"/><rect x="7" y="20" width="10" height="3" rx="1" fill="#8D6E63"/></svg>`}function x(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M10 36 L8 14 L24 14 L22 36Z" fill="#CE93D8" stroke="#8E24AA" stroke-width="1.5" transform="rotate(-15 16 25)"/><circle cx="12" cy="10" r="2" fill="#FF6F00"/><circle cx="22" cy="8" r="1.5" fill="#4CAF50"/><circle cx="18" cy="6" r="2" fill="#2196F3"/><circle cx="28" cy="12" r="1.5" fill="#FF4081"/><circle cx="8" cy="14" r="1" fill="#FFEB3B"/><path d="M16 14 Q18 4 24 8" stroke="#FFD54F" stroke-width="1.5" fill="none"/></svg>`}function ee(e=18){return`<svg viewBox="0 0 24 24" width="${e}" height="${e}"><rect x="3" y="3" width="18" height="18" rx="2" fill="#90CAF9" stroke="#1976D2" stroke-width="1.5"/><rect x="6" y="3" width="12" height="8" rx="1" fill="#BBDEFB" stroke="#1976D2" stroke-width="1"/><rect x="9" y="14" width="6" height="7" rx="1" fill="#1976D2"/></svg>`}function te(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M6 20 L20 8 L34 20" fill="none" stroke="#8D6E63" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="12" y="20" width="16" height="14" rx="2" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/><rect x="17" y="24" width="6" height="10" rx="1" fill="#8D6E63"/></svg>`}function ne(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M20 36 L20 20" stroke="#4CAF50" stroke-width="3" stroke-linecap="round"/><path d="M20 20 Q12 14 20 8 Q28 14 20 20" fill="#66BB6A" stroke="#2E7D32" stroke-width="1.5"/><path d="M20 26 Q14 22 20 18" fill="none" stroke="#81C784" stroke-width="2"/></svg>`}function re(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M20 4 L23 15 L34 15 L25 22 L28 33 L20 26 L12 33 L15 22 L6 15 L17 15Z" fill="#FFD54F" stroke="#F9A825" stroke-width="1.5"/></svg>`}function ie(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><rect x="6" y="8" width="10" height="28" rx="2" fill="#90CAF9" stroke="#1976D2" stroke-width="1.5" transform="rotate(-5 11 22)"/><rect x="14" y="6" width="10" height="28" rx="2" fill="#A5D6A7" stroke="#388E3C" stroke-width="1.5"/><rect x="22" y="8" width="10" height="28" rx="2" fill="#FFCC80" stroke="#E65100" stroke-width="1.5" transform="rotate(5 27 22)"/></svg>`}function ae(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M20 4 Q14 16 14 28 L20 32 L26 28 Q26 16 20 4Z" fill="#E0E0E0" stroke="#757575" stroke-width="1.5"/><circle cx="20" cy="18" r="3" fill="#90CAF9" stroke="#1976D2" stroke-width="1"/><path d="M14 24 L8 30 L14 28" fill="#FF7043"/><path d="M26 24 L32 30 L26 28" fill="#FF7043"/><path d="M17 32 L20 38 L23 32" fill="#FFD54F"/></svg>`}function oe(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M12 8 L12 20 Q12 28 20 28 Q28 28 28 20 L28 8Z" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/><path d="M12 12 Q4 12 4 18 Q4 22 12 20" fill="#FFECB3" stroke="#F9A825" stroke-width="1.5"/><path d="M28 12 Q36 12 36 18 Q36 22 28 20" fill="#FFECB3" stroke="#F9A825" stroke-width="1.5"/><rect x="16" y="28" width="8" height="4" fill="#8D6E63"/><rect x="12" y="32" width="16" height="4" rx="2" fill="#8D6E63"/></svg>`}function se(e=24){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><path d="M4 16 Q4 8 20 8 Q36 8 36 16 L36 22 Q36 32 20 32 Q4 32 4 22Z" fill="#CE93D8" stroke="#8E24AA" stroke-width="2"/><ellipse cx="14" cy="18" rx="6" ry="5" fill="#FFF"/><ellipse cx="26" cy="18" rx="6" ry="5" fill="#FFF"/><circle cx="14" cy="18" r="3" fill="#2D1B0E"/><circle cx="26" cy="18" r="3" fill="#2D1B0E"/></svg>`}function ce(e=32){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><circle cx="20" cy="24" r="14" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/><circle cx="20" cy="24" r="9" fill="#FFECB3" stroke="#F9A825" stroke-width="1"/><text x="20" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#E65100">1</text><path d="M14 10 L20 4 L26 10" fill="none" stroke="#F9A825" stroke-width="2"/></svg>`}function le(e=32){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><circle cx="20" cy="24" r="14" fill="#E0E0E0" stroke="#9E9E9E" stroke-width="2"/><circle cx="20" cy="24" r="9" fill="#F5F5F5" stroke="#BDBDBD" stroke-width="1"/><text x="20" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#616161">2</text><path d="M14 10 L20 4 L26 10" fill="none" stroke="#9E9E9E" stroke-width="2"/></svg>`}function ue(e=32){return`<svg viewBox="0 0 40 40" width="${e}" height="${e}"><circle cx="20" cy="24" r="14" fill="#FFCC80" stroke="#E65100" stroke-width="2"/><circle cx="20" cy="24" r="9" fill="#FFE0B2" stroke="#F57C00" stroke-width="1"/><text x="20" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#BF360C">3</text><path d="M14 10 L20 4 L26 10" fill="none" stroke="#E65100" stroke-width="2"/></svg>`}function de(e,g=24){return({normal:t,nomen:i,verben:a,adjektiv:o,challenge:n,team:r,reward:s,surprise:c,helper:l,movement:u,treasure:d,trap:m,portal:h,start:f,finish:p}[e]||t)(g)}var S={NORMAL:`normal`,NOMEN:`nomen`,VERBEN:`verben`,ADJEKTIV:`adjektiv`,CHALLENGE:`challenge`,TEAM:`team`,REWARD:`reward`,SURPRISE:`surprise`,HELPER:`helper`,MOVEMENT:`movement`,TREASURE:`treasure`,TRAP:`trap`,PORTAL:`portal`,START:`start`,FINISH:`finish`},C={[S.START]:{label:`Start`,iconId:`start`,color:`normal`,description:`Hier geht es los!`,handler:`none`},[S.NORMAL]:{label:`Aufgabe`,iconId:`normal`,color:`normal`,description:`Löse eine Deutsch-Aufgabe!`,handler:`minigame_single`},[S.NOMEN]:{label:`Nomen`,iconId:`nomen`,color:`challenge`,description:`Spiele ein Nomen-Spiel!`,handler:`minigame_nomen`},[S.VERBEN]:{label:`Verben`,iconId:`verben`,color:`team`,description:`Löse eine Verben-Aufgabe!`,handler:`minigame_verben`},[S.ADJEKTIV]:{label:`Adjektive`,iconId:`adjektiv`,color:`helper`,description:`Spiele mit Adjektiven!`,handler:`minigame_adjektiv`},[S.CHALLENGE]:{label:`Herausforderung`,iconId:`challenge`,color:`challenge`,description:`Alle spielen gleichzeitig!`,handler:`minigame_all`},[S.TEAM]:{label:`Teamarbeit`,iconId:`team`,color:`team`,description:`Arbeitet zusammen!`,handler:`minigame_team`},[S.REWARD]:{label:`Belohnung`,iconId:`reward`,color:`reward`,description:`Du bekommst eine Belohnung!`,handler:`reward`},[S.SURPRISE]:{label:`Überraschung`,iconId:`surprise`,color:`surprise`,description:`Was wird passieren?`,handler:`surprise`},[S.HELPER]:{label:`Helfer`,iconId:`helper`,color:`helper`,description:`Du bekommst einen Tipp!`,handler:`helper`},[S.MOVEMENT]:{label:`Bewegung`,iconId:`movement`,color:`movement`,description:`Bewege dich vor oder zurück!`,handler:`movement`},[S.TREASURE]:{label:`Schatz`,iconId:`treasure`,color:`treasure`,description:`Du hast einen Stern gefunden!`,handler:`treasure`},[S.TRAP]:{label:`Falle`,iconId:`trap`,color:`challenge`,description:`Pass auf! Eine Falle!`,handler:`trap`},[S.PORTAL]:{label:`Portal`,iconId:`portal`,color:`surprise`,description:`Wooosh! Wohin führt das wohl?`,handler:`portal`},[S.FINISH]:{label:`Ziel`,iconId:`finish`,color:`treasure`,description:`Du hast das Ziel erreicht!`,handler:`finish`}};function w(e){return C[e]||C[S.NORMAL]}function T(e,t=24){return de(e,t)}var E=[{id:0,x:8,y:88},{id:1,x:20,y:88},{id:2,x:32,y:88},{id:3,x:44,y:88},{id:4,x:56,y:88},{id:5,x:68,y:88},{id:6,x:80,y:88},{id:7,x:90,y:80},{id:8,x:85,y:68},{id:9,x:70,y:68},{id:10,x:55,y:68},{id:11,x:40,y:68},{id:12,x:25,y:68},{id:13,x:10,y:60},{id:14,x:15,y:48},{id:15,x:30,y:48},{id:16,x:45,y:48},{id:17,x:60,y:48},{id:18,x:75,y:48},{id:19,x:88,y:40},{id:20,x:80,y:28},{id:21,x:65,y:28},{id:22,x:50,y:28},{id:23,x:35,y:28},{id:24,x:20,y:28},{id:25,x:8,y:20},{id:26,x:20,y:10},{id:27,x:35,y:12},{id:28,x:50,y:12}],D=[{id:0,x:5,y:95},{id:1,x:5,y:85},{id:2,x:5,y:75},{id:3,x:5,y:65},{id:4,x:5,y:55},{id:5,x:5,y:45},{id:6,x:5,y:35},{id:7,x:5,y:25},{id:8,x:5,y:15},{id:9,x:5,y:5},{id:10,x:15,y:5},{id:11,x:25,y:5},{id:12,x:35,y:5},{id:13,x:45,y:5},{id:14,x:55,y:5},{id:15,x:65,y:5},{id:16,x:75,y:5},{id:17,x:85,y:5},{id:18,x:95,y:5},{id:19,x:95,y:15},{id:20,x:95,y:25},{id:21,x:95,y:35},{id:22,x:95,y:45},{id:23,x:95,y:55},{id:24,x:95,y:65},{id:25,x:95,y:75},{id:26,x:95,y:85},{id:27,x:95,y:95},{id:28,x:85,y:95},{id:29,x:75,y:95},{id:30,x:65,y:95},{id:31,x:55,y:95},{id:32,x:45,y:95},{id:33,x:35,y:95},{id:34,x:25,y:95},{id:35,x:15,y:95}],fe=[{id:0,x:10,y:90},{id:1,x:22,y:88},{id:2,x:32,y:85},{id:3,x:42,y:80},{id:4,x:50,y:70},{id:5,x:55,y:60},{id:6,x:62,y:52},{id:7,x:72,y:50},{id:8,x:82,y:52},{id:9,x:88,y:44},{id:10,x:85,y:34},{id:11,x:75,y:28},{id:12,x:62,y:24},{id:13,x:50,y:24},{id:14,x:40,y:30},{id:15,x:30,y:38},{id:16,x:20,y:40},{id:17,x:10,y:35},{id:18,x:10,y:22},{id:19,x:20,y:15},{id:20,x:32,y:12},{id:21,x:45,y:12},{id:22,x:60,y:12},{id:23,x:75,y:12},{id:24,x:88,y:15}];function pe(e){if(!e)return E;let t=String(e).toLowerCase();return t.includes(`1966197d`)?D:t.includes(`montessori_nature`)||t.includes(`storybook_mystery`)?fe:t.includes(`elefant`)?D:(console.log(`Board: No special layout matched for ID:`,e,`- Falling back to Default.`),E)}var me=class{constructor(e=!0,t=`default`){let n=pe(t);this.fields=n.map(e=>({...e,type:S.NORMAL})),this.totalFields=this.fields.length,this.fields[0].type=S.START,this.fields[this.totalFields-1].type=S.FINISH,e&&this.randomizeLayout()}randomizeLayout(){let e=[S.NOMEN,S.NOMEN,S.NOMEN,S.NOMEN,S.VERBEN,S.VERBEN,S.VERBEN,S.VERBEN,S.ADJEKTIV,S.ADJEKTIV,S.ADJEKTIV,S.ADJEKTIV,S.CHALLENGE,S.CHALLENGE,S.TEAM,S.TEAM,S.REWARD,S.REWARD,S.SURPRISE,S.SURPRISE,S.HELPER,S.HELPER,S.MOVEMENT,S.TREASURE,S.TRAP,S.TRAP,S.PORTAL,S.PORTAL].sort(()=>Math.random()-.5);for(let t=1;t<this.totalFields-1;t++)e.length>0&&(this.fields[t].type=e.pop());this.linkPortals()}linkPortals(){let e=[];this.fields.forEach((t,n)=>{t.type===S.PORTAL&&e.push(n)});let t=[...e].sort(()=>Math.random()-.5);for(;t.length>=2;){let e=t.pop(),n=t.pop();this.fields[e].targetId=n,this.fields[n].targetId=e}t.length===1&&(this.fields[t[0]].type=S.SURPRISE)}getField(e){return e<0?this.fields[0]:e>=this.totalFields?this.fields[this.totalFields-1]:this.fields[e]}getAllFields(){return this.fields}getDestination(e,t){let n=e+t;return Math.min(n,this.totalFields-1)}isFinish(e){return e>=this.totalFields-1}getStats(){let e={};for(let t of this.fields)e[t.type]=(e[t.type]||0)+1;return e}},O=class{constructor(){this.value=1,this.rolling=!1}roll(){return new Promise(e=>{this.rolling=!0;let t=0,n=setInterval(()=>{t+=80,this.value=Math.floor(Math.random()*6)+1,window.dispatchEvent(new CustomEvent(`dice:rolling`,{detail:{value:this.value}})),t>=800&&(clearInterval(n),this.value=Math.floor(Math.random()*6)+1,this.rolling=!1,window.dispatchEvent(new CustomEvent(`dice:rolled`,{detail:{value:this.value}})),e(this.value))},80)})}static getDotPattern(e){let t={1:[0,0,0,0,1,0,0,0,0],2:[0,0,1,0,0,0,1,0,0],3:[0,0,1,0,1,0,1,0,0],4:[1,0,1,0,0,0,1,0,1],5:[1,0,1,0,1,0,1,0,1],6:[1,0,1,1,0,1,1,0,1]};return t[e]||t[1]}},k=[{id:`craft_board`,url:`assets/img/backgrounds/craft_board.png`,name:`Handmade Craft Board`}],A=[{id:`steph_1`,name_de:`Heldin 1`,spriteImg:`assets/img/char_1_cutout.png`},{id:`steph_2`,name_de:`Heldin 2`,spriteImg:`assets/img/char_2_cutout.png`},{id:`steph_3`,name_de:`Heldin 3`,spriteImg:`assets/img/char_3_cutout.png`}];function j(e){return A[e%A.length]}function M(e,t){return e.spriteImg?`<div class="char-sprite" style="
      background-image: url('${e.spriteImg}'); 
      background-size: contain; 
      background-position: center;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
    "></div>`:``}function N(e,t=64){let n=j(e),r=M(n,t);return`<div class="char-avatar" style="width:${t}px; height:${t}px; background-color: rgba(255,255,255,0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${t/4}px; font-weight: bold; border: 4px solid #4e342e; position: relative; overflow: hidden; box-shadow: inset 0 0 20px rgba(0,0,0,0.1);" data-char-id="${n.id}">
    <span style="position: absolute; z-index: 1; opacity: 0.3;">${n.name_de.charAt(0)}</span>
    <div style="position: absolute; inset: 0; z-index: 2;">${r}</div>
  </div>`}function P(e,t=32){let n=j(e),r=M(n,t);return`<div class="char-token" style="width:${t}px; height:${t}px; flex-shrink:0; background-color: rgba(255,255,255,0.8); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: ${t/2}px; font-weight: bold; border: 2px solid #4e342e; position: relative; overflow: hidden; box-shadow: inset 0 0 10px rgba(0,0,0,0.1);">
    <span style="position: absolute; z-index: 1; opacity: 0.3;">${n.name_de.charAt(0)}</span>
    <div style="position: absolute; inset: 0; z-index: 2;">${r}</div>
  </div>`}var F=[`var(--player-1)`,`var(--player-2)`,`var(--player-3)`,`var(--player-4)`,`var(--player-5)`,`var(--player-6)`],he=class{constructor(e,t,n){this.id=e,this.name=t||`Spieler ${e+1}`,this.colorIndex=n??e;let r=j(this.colorIndex);this.avatarId=r.id,this.avatarName=r.name_de,this.avatarColor=r.color,this.color=F[this.colorIndex%F.length],this.position=0,this.finished=!1,this.finishOrder=-1,this.coins=0,this.stars=0,this.badges=[],this.jokers={hint:0,protection:0,extraRoll:0},this.stats={tasksAttempted:0,tasksCorrect:0,totalScore:0,challengeWins:0,teamTasks:0}}getAvatarHTML(e=48){return N(this.colorIndex,e)}getTokenHTML(e=32){return P(this.colorIndex,e)}moveTo(e){this.position=e}addCoins(e){this.coins+=e}addStars(e){this.stars+=e}addBadge(e){this.badges.includes(e)||this.badges.push(e)}addJoker(e){this.jokers[e]!==void 0&&this.jokers[e]++}useJoker(e){return this.jokers[e]>0?(this.jokers[e]--,!0):!1}recordTask(e,t=0){this.stats.tasksAttempted++,e&&this.stats.tasksCorrect++,this.stats.totalScore+=t}getAccuracy(){return this.stats.tasksAttempted===0?0:Math.round(this.stats.tasksCorrect/this.stats.tasksAttempted*100)}getTotalPoints(){return this.coins+this.stars*10+this.stats.totalScore}toJSON(){return{id:this.id,name:this.name,colorIndex:this.colorIndex,avatarId:this.avatarId,position:this.position,finished:this.finished,finishOrder:this.finishOrder,coins:this.coins,stars:this.stars,badges:[...this.badges],jokers:{...this.jokers},stats:{...this.stats}}}},I={IDLE:`idle`,ROLLING:`rolling`,MOVING:`moving`,LANDED:`landed`,RESOLVING:`resolving`,COMPLETE:`complete`},ge=class{constructor(){this.currentPlayerIndex=0,this.totalPlayers=0,this.round=1,this.phase=I.IDLE,this.turnLog=[]}init(e){this.totalPlayers=e,this.currentPlayerIndex=0,this.round=1,this.phase=I.IDLE,this.turnLog=[]}setPhase(e){this.phase=e,window.dispatchEvent(new CustomEvent(`turn:phaseChange`,{detail:{phase:e,playerIndex:this.currentPlayerIndex,round:this.round}}))}nextTurn(){this.currentPlayerIndex++,this.currentPlayerIndex>=this.totalPlayers&&(this.currentPlayerIndex=0,this.round++,window.dispatchEvent(new CustomEvent(`turn:newRound`,{detail:{round:this.round}}))),this.phase=I.IDLE,window.dispatchEvent(new CustomEvent(`turn:next`,{detail:{playerIndex:this.currentPlayerIndex,round:this.round}}))}nextActiveTurn(e){let t=0;do if(this.currentPlayerIndex++,this.currentPlayerIndex>=this.totalPlayers&&(this.currentPlayerIndex=0,this.round++),t++,t>this.totalPlayers)return!1;while(e[this.currentPlayerIndex].finished);return this.phase=I.IDLE,window.dispatchEvent(new CustomEvent(`turn:next`,{detail:{playerIndex:this.currentPlayerIndex,round:this.round}})),!0}getCurrentPlayerIndex(){return this.currentPlayerIndex}getRound(){return this.round}log(e){this.turnLog.push({round:this.round,player:this.currentPlayerIndex,phase:this.phase,time:Date.now(),...e})}shouldEndGame(e=50){return this.round>e}},_e={taskCorrect:{coins:3,description:`Richtig gelöst!`},taskPartial:{coins:1,description:`Fast richtig!`},taskWrong:{coins:0,description:`Nicht schlimm, versuch es weiter!`},challengeFirst:{coins:5,description:`1. Platz!`},challengeSecond:{coins:3,description:`2. Platz!`},challengeThird:{coins:2,description:`3. Platz!`},challengeOther:{coins:1,description:`Gut mitgemacht!`},teamSuccess:{coins:4,description:`Tolles Teamwork!`},teamPartial:{coins:2,description:`Guter Versuch im Team!`},rewardField:{coins:3,description:`Bonus-Münzen!`},treasureField:{stars:1,description:`Ein Stern für dich! ⭐`},helperField:{joker:`hint`,description:`Du hast einen Tipp-Joker bekommen! 💡`},trapField:{coins:-2,description:`Au weia! Eine Falle! 2 Münzen weg.`},portalField:{coins:0,description:`Huiii! Ein geheimes Portal! 🌀`},surpriseGood:{coins:5,description:`Was für ein Glück!`},surpriseMedium:{coins:2,description:`Eine kleine Überraschung!`},surpriseJoker:{joker:`extraRoll`,description:`Noch einmal würfeln! 🎲`}};function L(e,t){let n=_e[t];if(!n)return null;let r={type:t,description:n.description,items:[]};return n.coins&&(e.addCoins(n.coins),r.items.push({type:`coins`,amount:n.coins})),n.stars&&(e.addStars(n.stars),r.items.push({type:`stars`,amount:n.stars})),n.joker&&(e.addJoker(n.joker),r.items.push({type:`joker`,subtype:n.joker,amount:1})),r}function ve(e){let t=[];for(let n=0;n<e.length;n++){let{player:r}=e[n],i;i=n===0?`challengeFirst`:n===1?`challengeSecond`:n===2?`challengeThird`:`challengeOther`;let a=L(r,i);t.push({player:r,reward:a,rank:n+1})}return t}function ye(){let e=[`surpriseGood`,`surpriseMedium`,`surpriseJoker`];return e[Math.floor(Math.random()*e.length)]}function be(){let e=[{move:2,description:`2 Felder vor! 🏃`},{move:3,description:`3 Felder vor! 🚀`},{move:1,description:`1 Feld vor!`},{move:-1,description:`1 Feld zurück 😅`},{move:-2,description:`2 Felder zurück 😅`}],t=[30,15,25,20,10],n=t.reduce((e,t)=>e+t,0),r=Math.random()*n;for(let n=0;n<e.length;n++)if(r-=t[n],r<=0)return e[n];return e[0]}var xe=class{constructor(){this.board=null,this.dice=null,this.turnManager=null,this.players=[],this.settings=null,this.gameMode=`local`,this.state=`idle`,this.finishCount=0,this.onStateChange=null,this.onPlayerMove=null,this.onFieldLanded=null,this.onMinigameStart=null,this.onMinigameEnd=null,this.onReward=null,this.onGameEnd=null,this.onTurnChange=null}initGame(e,t){console.log(`GameController: Initializing game with board ID:`,t.selectedBoardId),this.board=new me(!0,t.selectedBoardId||`default`),this.dice=new O,this.turnManager=new ge,this.settings=t,this.state=`playing`,this.finishCount=0,this.players=e.map((e,t)=>new he(t,e.name,e.colorIndex)),e.length===1&&(this.gameMode=`single`),this.turnManager.init(this.players.length),this._emit(`stateChange`,{state:`playing`}),this._emit(`turnChange`,{playerIndex:0,player:this.players[0],round:1,phase:I.IDLE})}getCurrentPlayer(){return this.players[this.turnManager.getCurrentPlayerIndex()]}getPlayers(){return this.players}async rollDice(){if(this.state!==`playing`||this.turnManager.phase!==I.IDLE)return;this.turnManager.setPhase(I.ROLLING);let e=await this.dice.roll();return this.turnManager.log({event:`roll`,value:e}),e}movePlayer(e){let t=this.getCurrentPlayer(),n=t.position,r=this.board.getDestination(n,e);return this.turnManager.setPhase(I.MOVING),t.moveTo(r),this._emit(`playerMove`,{player:t,oldPos:n,newPos:r,diceValue:e}),this.turnManager.log({event:`move`,from:n,to:r}),r}handleFieldLanding(){let e=this.getCurrentPlayer(),t=this.board.getField(e.position),n=w(t.type);return this.turnManager.setPhase(I.LANDED),this._emit(`fieldLanded`,{player:e,field:t,meta:n}),{field:t,meta:n}}resolveField(e){let t=this.getCurrentPlayer(),n=w(e.type);switch(this.turnManager.setPhase(I.RESOLVING),n.handler){case`minigame_single`:return this._emit(`minigameStart`,{mode:`single`,player:t,field:e}),{action:`minigame`,mode:`single`};case`minigame_nomen`:return this._emit(`minigameStart`,{mode:`single`,player:t,field:e,topic:`nomen`}),{action:`minigame`,mode:`single`,topic:`nomen`};case`minigame_verben`:return this._emit(`minigameStart`,{mode:`single`,player:t,field:e,topic:`verben`}),{action:`minigame`,mode:`single`,topic:`verben`};case`minigame_adjektiv`:return this._emit(`minigameStart`,{mode:`single`,player:t,field:e,topic:`adjektiv`}),{action:`minigame`,mode:`single`,topic:`adjektiv`};case`minigame_all`:return this._emit(`minigameStart`,{mode:`challenge`,players:this.players.filter(e=>!e.finished),field:e}),{action:`minigame`,mode:`challenge`};case`minigame_team`:return this._emit(`minigameStart`,{mode:`team`,players:this._getTeamPartners(t),field:e}),{action:`minigame`,mode:`team`};case`reward`:return this._handleRewardField(t);case`surprise`:return this._handleSurpriseField(t);case`helper`:return this._handleHelperField(t);case`movement`:return this._handleMovementField(t);case`treasure`:return this._handleTreasureField(t);case`trap`:return this._handleTrapField(t);case`portal`:return this._handlePortalField(t,e);case`finish`:return this._handleFinish(t);default:return this.completeTurn(),{action:`none`}}}onMinigameComplete(e){let t=this.getCurrentPlayer();if(e.mode===`single`)if(e.correct){let e=L(t,`taskCorrect`);t.recordTask(!0,3),this._emit(`reward`,{player:t,reward:e})}else if(e.partial){let e=L(t,`taskPartial`);t.recordTask(!1,1),this._emit(`reward`,{player:t,reward:e})}else L(t,`taskWrong`),t.recordTask(!1,0);else if(e.mode===`challenge`){let t=e.rankings||[],n=ve(t);for(let e of t)e.player.recordTask(e.score>0,e.score),e.player.stats.challengeWins+=+(t.indexOf(e)===0);this._emit(`reward`,{challengeResults:n})}else if(e.mode===`team`){let n=e.correct?`teamSuccess`:`teamPartial`,r=e.players||[t];for(let t of r)L(t,n),t.recordTask(e.correct,e.correct?4:2),t.stats.teamTasks++;this._emit(`reward`,{teamReward:n,players:r})}this.completeTurn()}completeTurn(){if(this.turnManager.setPhase(I.COMPLETE),this._checkGameEnd()){this.endGame();return}if(!this.turnManager.nextActiveTurn(this.players)){this.endGame();return}let e=this.players[this.turnManager.getCurrentPlayerIndex()];this._emit(`turnChange`,{playerIndex:this.turnManager.getCurrentPlayerIndex(),player:e,round:this.turnManager.getRound(),phase:I.IDLE})}endGame(){this.state=`finished`;let e=[...this.players].sort((e,t)=>e.finished&&!t.finished?-1:!e.finished&&t.finished?1:e.finished&&t.finished?e.finishOrder-t.finishOrder:t.getTotalPoints()-e.getTotalPoints());this._emit(`gameEnd`,{rankings:e})}_handleRewardField(e){let t=L(e,`rewardField`);return this._emit(`reward`,{player:e,reward:t}),this.completeTurn(),{action:`reward`,reward:t}}_handleSurpriseField(e){let t=L(e,ye());return this._emit(`reward`,{player:e,reward:t,surprise:!0}),this.completeTurn(),{action:`surprise`,reward:t}}_handleHelperField(e){let t=L(e,`helperField`);return this._emit(`reward`,{player:e,reward:t}),this.completeTurn(),{action:`helper`,reward:t}}_handleMovementField(e){let t=be(),n=e.position,r=Math.max(0,Math.min(e.position+t.move,this.board.totalFields-1));return t.move<0&&e.jokers.protection>0?(e.useJoker(`protection`),this._emit(`reward`,{player:e,reward:{description:`Schutz-Joker eingesetzt! Du bleibst stehen. 🛡️`,items:[]}}),this.completeTurn(),{action:`movement`,blocked:!0}):(e.moveTo(r),this._emit(`playerMove`,{player:e,oldPos:n,newPos:r,reason:t.description}),this._emit(`reward`,{player:e,reward:{description:t.description,items:[]}}),this.completeTurn(),{action:`movement`,effect:t})}_handleTreasureField(e){let t=L(e,`treasureField`);return this._emit(`reward`,{player:e,reward:t}),this.completeTurn(),{action:`treasure`,reward:t}}_handleFinish(e){return this.finishCount++,e.finished=!0,e.finishOrder=this.finishCount,e.addStars(3),e.addBadge(`🏆 Ziel erreicht`),this._emit(`reward`,{player:e,reward:{description:`${e.name} hat das Ziel erreicht! 🎉`,items:[{type:`stars`,amount:3}]}}),this.completeTurn(),{action:`finish`}}_handleTrapField(e){if(e.jokers.protection>0)return e.useJoker(`protection`),this._emit(`reward`,{player:e,reward:{description:`Schutz-Joker eingesetzt! Die Falle hat keine Wirkung. 🛡️`,items:[]}}),this.completeTurn(),{action:`trap`,blocked:!0};let t=L(e,`trapField`),n=e.position,r=Math.max(0,e.position-3);return e.moveTo(r),this._emit(`playerMove`,{player:e,oldPos:n,newPos:r,reason:`In eine Falle getappt! 3 Felder zurück.`}),this._emit(`reward`,{player:e,reward:t}),this.completeTurn(),{action:`trap`,reward:t,move:-3}}_handlePortalField(e,t){if(t.targetId===void 0)return this.completeTurn(),{action:`none`};let n=L(e,`portalField`),r=e.position,i=t.targetId;return e.moveTo(i),this._emit(`playerMove`,{player:e,oldPos:r,newPos:i,teleport:!0,reason:`Durch ein Portal gereist! 🌀`}),this._emit(`reward`,{player:e,reward:n}),this.completeTurn(),{action:`portal`,targetId:i}}_getTeamPartners(e){let t=this.players.filter(t=>!t.finished&&t.id!==e.id);return t.length===0?[e]:[e,t[Math.floor(Math.random()*t.length)]]}_checkGameEnd(){return!!(this.players.filter(e=>!e.finished).length<=1||this.turnManager.shouldEndGame())}_emit(e,t){let n=`on${e.charAt(0).toUpperCase()+e.slice(1)}`;this[n]&&this[n](t),window.dispatchEvent(new CustomEvent(`game:${e}`,{detail:t}))}},R=class{constructor(){this.reset()}reset(){this.language=`de`,this.classLevel=2,this.activeTopics=[`nomen`,`verben`,`adjektive`,`satzbau`],this.difficulty={complexity:.5,timerSpeed:1,rewardScale:1},this.gameMode=`local`,this.presetId=null,this.profileName=null,this.selectedBoardId=null,this.selectedBoardUrl=null,this.version=`3.0.1-PRO`}setClassLevel(e){this.classLevel=parseInt(e),this.difficulty.complexity=this.classLevel/10}toggleTopic(e){let t=this.activeTopics.indexOf(e);t===-1?this.activeTopics.push(e):this.activeTopics.length>1&&this.activeTopics.splice(t,1)}isTopicActive(e){return this.activeTopics.includes(e)}getWordList(e){return e.filter(e=>this.isTopicActive(e.topic)&&(!e.level||e.level<=this.classLevel))}getSnapshot(){return{language:this.language,classLevel:this.classLevel,activeTopics:[...this.activeTopics],difficulty:{...this.difficulty},gameMode:this.gameMode,presetId:this.presetId,profileName:this.profileName,selectedBoardId:this.selectedBoardId,selectedBoardUrl:this.selectedBoardUrl,version:this.version}}loadSnapshot(e){e&&(this.language=e.language||`de`,this.classLevel=e.classLevel||2,this.activeTopics=e.activeTopics||[],this.difficulty=e.difficulty||this.difficulty,this.gameMode=e.gameMode||`local`,this.presetId=e.presetId||null,this.profileName=e.profileName||null,this.selectedBoardId=e.selectedBoardId||null,this.selectedBoardUrl=e.selectedBoardUrl||null)}};new R;var z=`dpb_profiles`,B=class e{static getAll(){try{let e=localStorage.getItem(z);return e?JSON.parse(e):[]}catch{return[]}}static save(t,n){let r=e.getAll(),i=r.findIndex(e=>e.name===t),a={name:t,settings:n,savedAt:new Date().toISOString()};return i>=0?r[i]=a:r.push(a),localStorage.setItem(z,JSON.stringify(r)),a}static load(t){return e.getAll().find(e=>e.name===t)||null}static remove(t){let n=e.getAll().filter(e=>e.name!==t);localStorage.setItem(z,JSON.stringify(n))}static hasProfiles(){return e.getAll().length>0}},V={WORTARTEN:`Wortarten`,SATZBAU:`Satzbau`,RECHTSCHREIBUNG:`Rechtschreibung`,LESEN:`Lesen`,WORTSCHATZ:`Wortschatz`},H=[{id:`nomen`,label_de:`Nomen`,label_en:`Nouns`,category:V.WORTARTEN,levels:[`vorschule`,`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`verben`,label_de:`Verben`,label_en:`Verbs`,category:V.WORTARTEN,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`adjektive`,label_de:`Adjektive`,label_en:`Adjectives`,category:V.WORTARTEN,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`artikel`,label_de:`Artikel`,label_en:`Articles`,category:V.WORTARTEN,levels:[`vorschule`,`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`pronomen`,label_de:`Pronomen`,label_en:`Pronouns`,category:V.WORTARTEN,levels:[`klasse2`,`klasse3`,`klasse4`]},{id:`satzarten`,label_de:`Satzarten`,label_en:`Sentence Types`,category:V.SATZBAU,levels:[`klasse2`,`klasse3`,`klasse4`]},{id:`satzbau`,label_de:`Satzbau`,label_en:`Sentence Structure`,category:V.SATZBAU,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`satzglieder`,label_de:`Satzglieder`,label_en:`Sentence Parts`,category:V.SATZBAU,levels:[`klasse3`,`klasse4`]},{id:`singular_plural`,label_de:`Singular / Plural`,label_en:`Singular / Plural`,category:V.WORTARTEN,levels:[`vorschule`,`klasse1`,`klasse2`,`klasse3`]},{id:`zeitformen`,label_de:`Zeitformen`,label_en:`Tenses`,category:V.SATZBAU,levels:[`klasse3`,`klasse4`]},{id:`rechtschreibung`,label_de:`Rechtschreibung`,label_en:`Spelling`,category:V.RECHTSCHREIBUNG,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`gross_klein`,label_de:`Groß- und Kleinschreibung`,label_en:`Capitalization`,category:V.RECHTSCHREIBUNG,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`satzzeichen`,label_de:`Satzzeichen`,label_en:`Punctuation`,category:V.RECHTSCHREIBUNG,levels:[`klasse2`,`klasse3`,`klasse4`]},{id:`reime`,label_de:`Reime`,label_en:`Rhymes`,category:V.WORTSCHATZ,levels:[`vorschule`,`klasse1`,`klasse2`]},{id:`silben`,label_de:`Silben`,label_en:`Syllables`,category:V.WORTSCHATZ,levels:[`vorschule`,`klasse1`,`klasse2`]},{id:`lesen`,label_de:`Lesen`,label_en:`Reading`,category:V.LESEN,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`hoerverstehen`,label_de:`Hörverstehen`,label_en:`Listening`,category:V.LESEN,levels:[`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`wortschatz`,label_de:`Wortschatz`,label_en:`Vocabulary`,category:V.WORTSCHATZ,levels:[`vorschule`,`klasse1`,`klasse2`,`klasse3`,`klasse4`]},{id:`lueckentexte`,label_de:`Lückentexte`,label_en:`Fill in the Blanks`,category:V.LESEN,levels:[`klasse2`,`klasse3`,`klasse4`]},{id:`fehlerkorrektur`,label_de:`Fehlerkorrektur`,label_en:`Error Correction`,category:V.RECHTSCHREIBUNG,levels:[`klasse2`,`klasse3`,`klasse4`]},{id:`zusammengesetzte_nomen`,label_de:`Zusammengesetzte Nomen`,label_en:`Compound Nouns`,category:V.WORTARTEN,levels:[`klasse2`,`klasse3`,`klasse4`]},{id:`wortbildung`,label_de:`Wortbildung`,label_en:`Word Formation`,category:V.WORTSCHATZ,levels:[`klasse3`,`klasse4`]}];function Se(e){return e===`frei`?H:H.filter(t=>t.levels.includes(e))}function Ce(){let e={};for(let t of H)e[t.category]||(e[t.category]=[]),e[t.category].push(t);return e}var U={LANGUAGE_COMPLEXITY:`languageComplexity`,SENTENCE_LENGTH:`sentenceLength`,TIME_PRESSURE:`timePressure`,HINT_AMOUNT:`hintAmount`,ANSWER_OPTIONS:`answerOptions`,ERROR_DENSITY:`errorDensity`,INPUT_MODE:`inputMode`},W={[U.LANGUAGE_COMPLEXITY]:{label_de:`Sprachkomplexität`,label_en:`Language Complexity`,min:1,max:5,default:2,labels_de:[`Einfach`,`Leicht`,`Mittel`,`Schwer`,`Sehr schwer`],description_de:`Wie komplex sind die Wörter und Sätze?`},[U.SENTENCE_LENGTH]:{label_de:`Satzlänge`,label_en:`Sentence Length`,min:1,max:5,default:2,labels_de:[`3 Wörter`,`5 Wörter`,`7 Wörter`,`10 Wörter`,`12+ Wörter`],description_de:`Wie lang sind die Sätze in den Aufgaben?`},[U.TIME_PRESSURE]:{label_de:`Zeitdruck`,label_en:`Time Pressure`,min:0,max:5,default:1,labels_de:[`Kein Timer`,`Sehr entspannt`,`Entspannt`,`Normal`,`Schnell`,`Sehr schnell`],description_de:`Wie viel Zeit hat man für eine Aufgabe?`},[U.HINT_AMOUNT]:{label_de:`Hilfen`,label_en:`Hints Available`,min:0,max:5,default:3,labels_de:[`Keine`,`Sehr wenig`,`Wenig`,`Normal`,`Viele`,`Sehr viele`],description_de:`Wie viele Hilfen und Tipps gibt es?`},[U.ANSWER_OPTIONS]:{label_de:`Antwortmöglichkeiten`,label_en:`Answer Options`,min:2,max:6,default:3,labels_de:[`2`,`3`,`4`,`5`,`6`],description_de:`Wie viele Antwortmöglichkeiten gibt es?`},[U.ERROR_DENSITY]:{label_de:`Fehlerdichte`,label_en:`Error Density`,min:1,max:5,default:2,labels_de:[`Sehr wenig`,`Wenig`,`Normal`,`Viele`,`Sehr viele`],description_de:`Wie viele Fehler verstecken sich in Texten?`},[U.INPUT_MODE]:{label_de:`Eingabeart`,label_en:`Input Mode`,min:0,max:1,default:0,labels_de:[`Auswahl (Multiple Choice)`,`Freie Eingabe`],description_de:`Wählen oder selbst tippen?`}};function we(e){return{0:0,1:60,2:45,3:30,4:20,5:10}[e]||0}var G=[{id:`vorschule`,label:`Vorschule`,iconFn:ne,desc:`Erste Schritte`},{id:`klasse1`,label:`Klasse 1`,iconFn:re,desc:`Grundlagen`},{id:`klasse2`,label:`Klasse 2`,iconFn:ie,desc:`Aufbau`},{id:`klasse3`,label:`Klasse 3`,iconFn:ae,desc:`Vertiefung`},{id:`klasse4`,label:`Klasse 4`,iconFn:oe,desc:`Fortgeschritten`},{id:`frei`,label:`Freier Modus`,iconFn:se,desc:`Alles ist möglich!`}],Te=class{constructor(e,t,n){this.container=e,this.settings=t,this.onComplete=n,this.currentStep=0,this.totalSteps=5,this.players=[{name:``,colorIndex:0},{name:``,colorIndex:1}],!this.settings.selectedBoardId&&k.length>0&&(this.settings.selectedBoardId=k[0].id,this.settings.selectedBoardUrl=k[0].url)}render(){this.container.innerHTML=``;let e=document.createElement(`div`);e.style.cssText=`
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      background: linear-gradient(160deg, #e8f5e9 0%, #f3e5f5 100%);
      font-family: 'Nunito', sans-serif;
      overflow: hidden;
    `,e.innerHTML=`
      <!-- Progress dots -->
      <div style="display:flex; justify-content:center; gap:12px; padding:24px 0 12px;">
        ${Array.from({length:this.totalSteps},(e,t)=>`
          <div style="
            width: ${t===this.currentStep?`36px`:`14px`};
            height: 14px;
            border-radius: 100px;
            background: ${t===this.currentStep?`#E91E63`:t<this.currentStep?`#66BB6A`:`rgba(0,0,0,0.15)`};
            transition: all 0.3s;
          "></div>
        `).join(``)}
      </div>

      <!-- Content area -->
      <div id="setup-step-content" style="flex:1; overflow-y:auto; padding:0 30px 20px;"></div>

      <!-- Navigation -->
      <div style="
        display:flex; justify-content:space-between; align-items:center;
        padding:20px 30px; background:rgba(255,255,255,0.7);
        border-top: 2px solid rgba(0,0,0,0.06);
        gap:20px;
      ">
        <button id="setup-back" type="button" style="
          font-family:'Fredoka One',cursive; font-size:28px;
          background: rgba(0,0,0,0.08); color:#555;
          border:none; border-radius:100px; padding:14px 36px;
          cursor:pointer;
          ${this.currentStep===0?`visibility:hidden;`:``}
        ">‹ Zurück</button>
        <button id="setup-next" type="button" style="
          font-family:'Fredoka One',cursive; font-size:32px;
          background: linear-gradient(135deg, #E91E63, #FF5722);
          color: white; border:none; border-radius:100px;
          padding:18px 50px; cursor:pointer;
          box-shadow: 0 6px 0 #880E4F;
        ">${this.currentStep===this.totalSteps-1?`🎲 Spiel starten!`:`Weiter ›`}</button>
      </div>
    `,this.container.appendChild(e);let t=document.getElementById(`setup-step-content`);this._renderStep(t),document.getElementById(`setup-back`)?.addEventListener(`click`,()=>{this.currentStep>0&&(this.currentStep--,this.render())}),document.getElementById(`setup-next`)?.addEventListener(`click`,()=>{this._saveStepData(),this.currentStep<this.totalSteps-1?(this.currentStep++,this.render()):this.onComplete(this.players,this.settings)})}_renderStep(e){switch(this.currentStep){case 0:this._renderPlayers(e);break;case 1:this._renderLevelSelect(e);break;case 2:this._renderTopics(e);break;case 3:this._renderDifficulty(e);break;case 4:this._renderSummary(e);break}}_renderPlayers(e){let t=[`pink`,`yellow`,`blue`,`green`],n=[`30% 70% 70% 30% / 30% 30% 70% 70%`,`60% 40% 30% 70% / 60% 30% 70% 40%`,`40% 60% 70% 30% / 40% 50% 60% 50%`,`50% 50% 40% 60% / 50% 60% 40% 50%`,`70% 30% 50% 50% / 40% 70% 30% 60%`];this.selectedBgIndex===void 0&&(this.selectedBgIndex=0),e.innerHTML=`
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Wer spielt mit?</h2>
          <p>Tippe einfach auf die Tiere, die mitspielen sollen!</p>
        </div>
        
        <div class="char-picker-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 20px; margin-bottom: 30px;">
          ${A.map((e,r)=>{let i=this.players.some(e=>e.colorIndex===r),a=n[r%n.length],o=(r%2==0?3:-2)+Math.sin(r)*3,s=t[r%t.length];return`
              <div class="char-pick-option cardboard-chip ${i?`selected cardboard-pink`:``}" data-char-idx="${r}" 
                   style="cursor: pointer; position: relative; border-radius: ${a}; padding: 10px; transform: rotate(${o}deg); transition: transform 0.2s var(--ease-bounce);">
                ${i?`<div class="washi-tape ${s} rotated-left" style="top: -10px; left: 10px; width: 40px; height: 14px; z-index: 5;"></div>`:``}
                ${N(r,110)}
                <span class="char-pick-name" style="font-size: 14px; font-family: var(--font-family-display); font-weight: bold; display: block; text-align: center;">${e.name_de}</span>
                ${i?`<div style="position:absolute; top:-5px; right:-5px; background:var(--color-accent); color:#000; border:2px solid #000; border-radius:50%; width:28px; height:28px; display:flex; align-items:center; justify-content:center; font-weight:bold; z-index:10; font-family: var(--font-handwritten);">✓</div>`:``}
              </div>
            `}).join(``)}
        </div>
        
        <div class="setup-header" style="margin-top: 40px; margin-bottom: 15px;">
          <h2>Hintergrund-Landschaft</h2>
          <div class="washi-tape yellow rotated-right" style="margin: -25px auto 10px; width: 120px;"></div>
        </div>
        <div class="bg-picker-grid" id="bg-picker" style="display:flex; gap:15px; overflow-x: auto; padding-bottom: 20px; padding-top: 10px;">
          ${k.map((e,t)=>{let r=n[(t+2)%n.length],i=this.settings.selectedBoardId===e.id;return`
            <div class="bg-pick-option cardboard-chip ${i?`selected cardboard-blue`:``}" 
                 data-bg-id="${e.id}" data-bg-url="${e.url}"
                 style="cursor:pointer; border-radius: ${r}; padding: 8px; text-align:center; min-width: 150px; flex-shrink: 0; position: relative; transition: all 0.2s ease;">
              ${i?`<div class="pin" style="top: 5px; left: 50%; transform: translateX(-50%);"></div>`:``}
              <div class="bg-preview" style="background-image: url('${e.url}'); background-size: cover; background-position: center; width: 100%; height: 90px; border-radius: ${n[(t+1)%n.length]}; margin-bottom: 8px; border: 2px solid rgba(0,0,0,0.1); pointer-events: none;"></div>
              <span style="font-size: 14px; font-family: var(--font-family-display); font-weight: bold; pointer-events: none;">${e.name}</span>
            </div>
            `}).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.char-pick-option`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.charIdx),n=this.players.findIndex(e=>e.colorIndex===t);n>=0?this.players.splice(n,1):this.players.length<6&&this.players.push({name:A[t].name_de,colorIndex:t}),this.render()})}),e.querySelectorAll(`.bg-pick-option`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=e.dataset.bgId,r=e.dataset.bgUrl;console.log(`Setup: Background selected:`,n),this.settings.selectedBoardId=n,this.settings.selectedBoardUrl=r,document.documentElement.style.setProperty(`--game-background-img`,`url('../../${r}')`),setTimeout(()=>this.render(),50)})})}_renderLevelSelect(e){let t=[`cardboard-pink`,`cardboard-yellow`,`cardboard-blue`,`cardboard-green`,`cardboard-orange`,`cardboard-purple`];e.innerHTML=`
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Klassenstufe</h2>
          <p>Für welche Stufe sollen die Aufgaben sein?</p>
        </div>
        <div class="level-grid">
          ${G.map((e,n)=>`
            <div class="card card-interactive level-card cardboard-chip ${t[n%t.length]} ${this.settings.classLevel===e.id?`selected`:``}" 
                 data-level="${e.id}">
              <div style="margin-bottom: var(--space-xs);">${e.iconFn(36)}</div>
              <div class="level-name">${e.label}</div>
              <div style="font-size: var(--font-size-xs); color: var(--text-light);">${e.desc}</div>
              ${this.settings.classLevel===e.id?`<div style="position:absolute; top:5px; right:5px; font-weight:bold; color:#000;">✓</div>`:``}
            </div>
          `).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.level-card`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.level-card`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`),this.settings.setClassLevel(t.dataset.level)})})}_renderTopics(e){let t=Ce(),n=Se(this.settings.classLevel).map(e=>e.id),r=[`cardboard-pink`,`cardboard-yellow`,`cardboard-blue`,`cardboard-green`,`cardboard-orange`,`cardboard-purple`,`cardboard-cyan`,`cardboard-lime`];e.innerHTML=`
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Themen auswählen</h2>
          <p>Welche Themen sollen geübt werden?</p>
        </div>
        <div style="display:flex; gap: var(--space-sm); justify-content:center; margin-bottom: var(--space-lg);">
          <button class="btn btn-sm btn-secondary" id="topics-all">Alle an</button>
          <button class="btn btn-sm btn-secondary" id="topics-none">Alle aus</button>
        </div>
        ${Object.entries(t).map(([e,t],i)=>`
          <div style="margin-bottom: var(--space-md);">
            <h4 style="font-size: var(--font-size-sm); color: var(--text-light); margin-bottom: var(--space-xs);">${e}</h4>
            <div class="topic-grid">
              ${t.map((e,t)=>{let a=n.includes(e.id),o=this.settings.isTopicActive(e.id)&&a;return`
                  <div class="topic-chip cardboard-chip ${r[(i+t)%r.length]} ${o?`active selected`:``} ${a?``:`disabled`}" 
                       data-topic="${e.id}" 
                       style="${a?`padding: 8px 12px;`:`opacity:0.4; pointer-events:none;`}">
                    <span>${e.label_de}</span>
                    ${o?`<span style="margin-left:5px; font-weight:bold;">✓</span>`:``}
                  </div>
                `}).join(``)}
            </div>
          </div>
        `).join(``)}
      </div>
    `,e.querySelectorAll(`.topic-chip:not(.disabled)`).forEach(e=>{e.addEventListener(`click`,()=>{e.classList.toggle(`active`),this.settings.toggleTopic(e.dataset.topic)})}),document.getElementById(`topics-all`)?.addEventListener(`click`,()=>{this.settings.activeTopics=n,this.render()}),document.getElementById(`topics-none`)?.addEventListener(`click`,()=>{this.settings.disableAllTopics(),this.render()})}_renderDifficulty(e){let t=Object.entries(W),n=[`cardboard-yellow`,`cardboard-green`,`cardboard-orange`,`cardboard-pink`,`cardboard-blue`,`cardboard-purple`];e.innerHTML=`
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>Schwierigkeit</h2>
          <p>Passe die Schwierigkeit genau an!</p>
        </div>
        <div class="difficulty-grid" style="display: grid; gap: 15px;">
          ${t.map(([e,t],r)=>{let i=this.settings.difficulty[e]??t.default,a=i-t.min,o=t.labels_de[a]||i;return`
              <div class="slider-group cardboard-chip ${n[r%n.length]}" style="padding: 15px;">
                <div class="slider-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                  <span class="slider-label" style="font-weight: bold; font-family: var(--font-family-display);">${t.label_de}</span>
                  <span class="slider-value" id="val-${e}" style="background: rgba(255,255,255,0.4); padding: 2px 8px; border-radius: 4px; font-weight: bold;">${o}</span>
                </div>
                <input type="range" min="${t.min}" max="${t.max}" value="${i}" 
                       data-axis="${e}" class="difficulty-slider" style="width: 100%;">
                <div style="font-size: 0.8rem; color: #4b3621; margin-top: 5px; font-style: italic;">${t.description_de}</div>
              </div>
            `}).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.difficulty-slider`).forEach(e=>{e.addEventListener(`input`,()=>{let t=e.dataset.axis,n=parseInt(e.value);this.settings.setDifficultyAxis(t,n);let r=W[t],i=n-r.min;document.getElementById(`val-${t}`).textContent=r.labels_de[i]||n})})}_renderSummary(e){let t=G.find(e=>e.id===this.settings.classLevel)?.label||`?`,n=this.settings.activeTopics.length;e.innerHTML=`
      <div class="setup-step-content active">
        <div class="setup-header">
          <h2>${y(24)} Zusammenfassung</h2>
          <p>Bereit? Dann kann es losgehen!</p>
        </div>
        <div class="summary-grid" style="display: grid; gap: 15px;">
          <div class="summary-item cardboard-chip cardboard-blue" style="padding: 20px; border-radius: 60% 40% 30% 70% / 70% 30% 40% 60% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Spieler</div>
            <div class="summary-value" style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; font-size: 1.2rem; font-weight: bold;">
              ${this.players.map(e=>N(e.colorIndex,48)).join(``)}
              <span>${this.players.length} Spieler</span>
            </div>
          </div>
          <div class="summary-item cardboard-chip cardboard-green" style="padding: 20px; border-radius: 30% 70% 40% 60% / 60% 30% 70% 40% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Klassenstufe</div>
            <div class="summary-value" style="font-size: 1.2rem; font-weight: bold;">${t}</div>
          </div>
          <div class="summary-item cardboard-chip cardboard-orange" style="padding: 20px; border-radius: 40% 60% 70% 30% / 30% 70% 30% 70% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Themen</div>
            <div class="summary-value" style="font-size: 1.2rem; font-weight: bold;">${n} aktiv</div>
          </div>
          <div class="summary-item cardboard-chip cardboard-purple" style="padding: 20px; border-radius: 70% 30% 40% 60% / 40% 60% 30% 70% !important;">
            <div class="summary-label" style="font-size: 0.8rem; opacity: 0.8;">Sprache</div>
            <div class="summary-value" style="font-size: 1.2rem; font-weight: bold;">Deutsch</div>
          </div>
        </div>
        <div class="profile-section">
          <input type="text" id="profile-name" placeholder="Profil speichern als..." maxlength="20">
          <button class="btn btn-sm btn-secondary" id="save-profile">${ee(16)} Speichern</button>
        </div>
      </div>
    `,document.getElementById(`save-profile`)?.addEventListener(`click`,()=>{let e=document.getElementById(`profile-name`)?.value?.trim();if(e){this.settings.profileName=e,B.save(e,this.settings.getSnapshot());let t=document.getElementById(`save-profile`);t.innerHTML=`${y(16)} Gespeichert!`,t.style.background=`var(--color-success)`,t.style.color=`white`}})}_saveStepData(){this.currentStep===0&&(this.container.querySelectorAll(`.player-name-input`).forEach(e=>{let t=parseInt(e.dataset.index);this.players[t]&&(this.players[t].name=e.value.trim()||j(this.players[t].colorIndex).name_de)}),this.players.length===1&&this.settings.setGameMode(`single`))}},Ee=class{constructor(e,t){this.container=e,this.game=t,this.onMinigameNeeded=null}_renderTurnBar(){let e=this.game.getPlayers(),t=this.game.getCurrentPlayer();return`
      <div class="turn-bar" style="position:absolute; top:20px; left:20px; z-index:200; display:flex; align-items:center; gap:14px; background:rgba(255,255,255,0.95); border: 3px solid #d7ccc8; border-radius:100px; padding:8px 24px 8px 8px; box-shadow:0 6px 20px rgba(0,0,0,0.25);">
        <div style="background:#efebe9; border-radius:50%; padding:4px; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
          ${P(t.colorIndex===void 0?e.indexOf(t):t.colorIndex,44)}
        </div>
        <div style="display:flex; flex-direction:column;">
          <span style="font-family:'Fredoka One',cursive; font-size:20px; color:#5d4037; line-height:1;">${t.name}</span>
          <span style="font-size:14px; color:#8d6e63; font-weight:bold;">Runde ${this.game.turnManager.getRound()}</span>
        </div>
      </div>`}render(){let e=this.game.getPlayers(),t=this.game.board,n=this.game.getCurrentPlayer();n.colorIndex===void 0?e.indexOf(n):n.colorIndex,this.container.innerHTML=`
      <div class="board-area" style="
        flex: 1;
        position: relative !important;
        height: 100% !important;
        width: 100% !important;
        min-height: 100vh;
        overflow: hidden;
        
      background-color: #d8c3a5;
      background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
    
        box-shadow: inset 0 0 80px rgba(0,0,0,0.2);
      ">
        ${this._renderConnections()}
        ${this._renderTurnBar()}

        <div id="game-board" style="
          position:absolute;
          top:0; left:0; right:0; bottom:0;
          width:100%; height:100%;
          z-index:10;
        ">
          ${t.getAllFields().map(e=>this._renderField(e)).join(``)}
          ${e.map(e=>this._renderToken(e)).join(``)}
        </div>

        <div id="dice-area" style="
          position:absolute; bottom:30px; left:50%; transform:translateX(-50%);
          z-index:200; display:flex; flex-direction:column; align-items:center; gap:10px;
        ">
          <div id="dice-prompt" style="
            font-family:'Fredoka One',cursive; font-size:26px; color:#1b5e20;
            text-shadow:0 0 8px white,0 0 20px white;
            background: rgba(255,255,255,0.8);
            padding: 4px 16px;
            border-radius: 20px;
          ">Wurf!</div>
          <div id="dice-container">
            <div id="dice" style="
              width:80px; height:80px;
              background:white;
              border-radius:16px;
              box-shadow:0 6px 20px rgba(0,0,0,0.25);
              cursor:pointer;
              display:grid; grid-template-columns:1fr 1fr 1fr;
              padding:10px; gap:5px;
              transition:transform 0.15s;
            " onmouseenter="this.style.transform='scale(1.12) rotate(-5deg)'"
               onmouseleave="this.style.transform='scale(1)'">
              ${this._renderDiceDots(1)}
            </div>
          </div>
        </div>
      </div>

      <div style="
        width:300px; min-width:260px;
        background:rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(8px);
        border-left:3px solid #d7ccc8;
        display:flex; flex-direction:column;
        padding:20px; gap:20px;
        overflow-y:auto;
        box-shadow:-4px 0 24px rgba(0,0,0,0.15);
        height:100%;
        box-sizing:border-box;
      ">
        <!-- Punktestand -->
        <div style="background:rgba(255,255,255,0.9); border-radius:16px; padding:16px; border: 2px solid #e0cfb8; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
          <div style="
            font-family:'Fredoka One',cursive; font-size:26px;
            color:#ff6f00; margin-bottom:12px;
            text-shadow:1px 1px 0 rgba(0,0,0,0.1);
          ">Punktestand</div>
          <div id="scoreboard" style="display:flex;flex-direction:column;gap:8px;">
            ${e.map(e=>this._renderScoreEntry(e,n)).join(``)}
          </div>
        </div>

        <!-- Legende -->
        <div style="margin-top:auto; background:rgba(255,255,255,0.9); border-radius:16px; padding:16px; border: 2px solid #e0cfb8;">
          <div style="font-family:'Fredoka One',cursive; font-size:20px; color:#5d4037; margin-bottom:12px;">Legende</div>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; font-size:12px;">
            ${this._renderLegend()}
          </div>
        </div>
      </div>
    `,this._setupDiceHandler(),this._setupEditMode()}_setupEditMode(){window.__boardEditModeInit||(window.__boardEditModeInit=!0,window.addEventListener(`keydown`,e=>{if(e.shiftKey&&e.key.toLowerCase()===`e`){let e=document.querySelector(`.board-area`);e&&(e.classList.toggle(`edit-mode`),this.showToast(e.classList.contains(`edit-mode`)?`Map Editor EIN (Klicke zum Pfad setzen)`:`Map Editor AUS`,`warning`))}}),window.addEventListener(`click`,e=>{let t=document.querySelector(`.board-area.edit-mode`);if(!t||e.target.closest(`.turn-bar`)||e.target.closest(`.dice-area`)||e.target.closest(`.board-sidebar`)||e.target.closest(`.field-tile`))return;let n=t.getBoundingClientRect(),r=Math.max(0,Math.min(100,(e.clientX-n.left)/n.width*100)),i=Math.max(0,Math.min(100,(e.clientY-n.top)/n.height*100));console.log(`{ id: NEXT_ID, type: FieldType.NORMAL, x: ${r.toFixed(2)}, y: ${i.toFixed(2)} },`);let a=document.createElement(`div`);a.style.cssText=`position: absolute; left: ${r}%; top: ${i}%; width: 20px; height: 20px; background: red; border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 100; border: 2px solid white;`,t.appendChild(a),this.showToast(`Koordinate ${Math.round(r)}%, ${Math.round(i)}% geloggt in Console.`,`info`)}))}_renderConnections(){let e=this.game.board.getAllFields();if(!e||e.length<2)return``;let t=`M ${e[0].x} ${e[0].y}`;for(let n=0;n<e.length-1;n++){let r=e[n],i=e[n+1],a=n%2==0?i.x:r.x,o=n%2==0?r.y:i.y;t+=` Q ${a} ${o} ${i.x} ${i.y}`}return`
      <svg class="board-connections" viewBox="0 0 100 100" preserveAspectRatio="none" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 5;">
        <defs>
          <filter id="charcoal-path" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <!-- Layered paths for a hand-drawn look -->
        <path d="${t}" style="fill:none; stroke:rgba(0,0,0,0.6); stroke-width:6; vector-effect:non-scaling-stroke; filter: url(#charcoal-path); stroke-linecap: round;" />
        <path d="${t}" style="fill:none; stroke:rgba(255,255,255,0.7); stroke-width:3; vector-effect:non-scaling-stroke; stroke-dasharray: 6 12; filter: url(#charcoal-path);" />
        <path d="${t}" style="fill:none; stroke:var(--color-primary); stroke-width:3; vector-effect:non-scaling-stroke; stroke-dasharray: 4 8; opacity: 0.9;" />
      </svg>
    `}_renderLegend(){let e=[`normal`,`challenge`,`team`,`reward`,`surprise`,`helper`,`movement`,`treasure`,`trap`,`portal`],t=[`Aufgabe`,`Alle spielen`,`Teamarbeit`,`Belohnung`,`Überraschung`,`Hilfe`,`Bewegung`,`Schatz`,`Falle`,`Portal`];return e.map((e,n)=>`
      <div class="legend-item">${T(e,18)}<span>${t[n]}</span></div>
    `).join(``)}_renderField(e){w(e.type);let t=(e.id%2==0?3:-3)+Math.sin(e.id)*8,n=[`30% 70% 70% 30% / 30% 30% 70% 70%`,`60% 40% 30% 70% / 60% 30% 70% 40%`,`40% 60% 70% 30% / 40% 50% 60% 50%`,`50% 50% 40% 60% / 50% 60% 40% 50%`,`70% 30% 50% 50% / 40% 70% 30% 60%`],r=n[e.id%n.length],i={normal:{bg:`#5C6BC0`,icon:`white`,label:`A`},challenge:{bg:`#EF5350`,icon:`white`,label:`C`},team:{bg:`#26A69A`,icon:`white`,label:`T`},reward:{bg:`#FFA726`,icon:`white`,label:`B`},surprise:{bg:`#AB47BC`,icon:`white`,label:`?`},helper:{bg:`#29B6F6`,icon:`white`,label:`H`},movement:{bg:`#FF7043`,icon:`white`,label:`M`},treasure:{bg:`#FFCA28`,icon:`#333`,label:`★`},trap:{bg:`#EF5350`,icon:`white`,label:`⚠`},portal:{bg:`#42A5F5`,icon:`white`,label:`◎`}},a=i[e.type]||i.normal;return`
      <div data-field-id="${e.id}"
           style="
             position: absolute;
             left: ${e.x}%; top: ${e.y}%;
             width: 72px; height: 72px;
             transform: translate(-50%, -50%) rotate(${t}deg);
             background-image: linear-gradient(${a.bg}, ${a.bg});
             border-radius: ${r};
             box-shadow: 6px 10px 20px rgba(0,0,0,0.4), inset 1px 1px 3px rgba(255,255,255,0.8);
             display: flex; align-items: center; justify-content: center;
             flex-direction: column;
             z-index: 10;
             border: 2px solid rgba(255,255,255,0.8);
             cursor: default;
             opacity: 0.85;
           ">
        <span style="display:flex; align-items:center; justify-content:center;">${T(e.type,34)}</span>
        <span style="font-size:13px; font-weight:900; font-family:'Fredoka One',cursive; color:rgba(255,255,255,0.95); text-shadow:1px 1px 2px rgba(0,0,0,0.5);">${e.id}</span>
      </div>
    `}_renderToken(e){let t=this.game.board.getField(e.position),n=this.game.getPlayers(),r=n.findIndex(t=>t.id===e.id),i=(r-(n.length-1)/2)*60,a=this.game.getCurrentPlayer().id===e.id,o=a?1e3:100+r;return`
      <div class="player-standee-container ${a?`active`:``}" 
           id="token-${e.id}"
           style="left:${t.x}%; top:${t.y}%; transform: translate(calc(-50% + ${i}px), -90%); z-index: ${o};">
        <div class="standee-card">
           ${N(r,240)}
        </div>
        <div class="standee-base"></div>
        <div class="standee-shadow"></div>
      </div>
    `}_renderScoreEntry(e,t){let n=[`cardboard-pink`,`cardboard-yellow`,`cardboard-blue`,`cardboard-green`,`cardboard-orange`,`cardboard-purple`];return`
      <div class="scoreboard-entry cardboard-chip ${n[e.id%n.length]} ${e.id===t.id?`active-player`:``}" style="margin-bottom: 8px;">
        ${e.getTokenHTML(32)}
        <span class="scoreboard-name" style="font-weight: bold;">${e.name}</span>
        <div class="scoreboard-stats">
          <span class="stat-icon">${g(16)} ${e.coins}</span>
          <span class="stat-icon">${_(16)} ${e.stars}</span>
        </div>
      </div>
    `}_renderDiceDots(e){return O.getDotPattern(e).map(e=>`<div class="dice-dot ${e?`visible`:``}"></div>`).join(``)}_setupDiceHandler(){let e=document.getElementById(`dice-container`),t=document.getElementById(`dice`);!e||!t||e.addEventListener(`click`,async()=>{if(this.game.state!==`playing`||t.classList.contains(`rolling`))return;t.classList.add(`rolling`),document.getElementById(`dice-prompt`).textContent=`Würfelt...`;let e=e=>{t.innerHTML=this._renderDiceDots(e.detail.value)};window.addEventListener(`dice:rolling`,e);let n=await this.game.rollDice();window.removeEventListener(`dice:rolling`,e),t.classList.remove(`rolling`),t.innerHTML=this._renderDiceDots(n),document.getElementById(`dice-prompt`).textContent=`${n} gewürfelt!`,await this._animateMove(n)})}async _animateMove(e){let t=this.game.getCurrentPlayer(),n=t.position,r=this.game.movePlayer(e),i=document.getElementById(`token-${t.id}`);if(i)for(let e=n+1;e<=r;e++){let n=this.game.board.getField(e),r=this.game.getPlayers(),a=(r.findIndex(e=>e.id===t.id)-(r.length-1)/2)*15;i.style.transition=`left 0.3s var(--ease-bounce), top 0.3s var(--ease-bounce)`,i.style.left=`${n.x}%`,i.style.top=`${n.y}%`,i.style.transform=`translate(calc(-50% + ${a}px), -85%)`,i.style.animation=`token-hop 0.3s var(--ease-bounce)`,await new Promise(e=>setTimeout(e,350)),i.style.animation=``}let a=this.game.board.getField(r),o=this.container.querySelector(`[data-field-id="${a.id}"]`);o&&o.classList.add(`current-field`),await new Promise(e=>setTimeout(e,500));let s=this.game.resolveField(a);if(s.action===`portal`){let e=document.getElementById(`game-board`);e.classList.add(`teleport-flash`),i.style.opacity=`0`,await new Promise(e=>setTimeout(e,300));let t=this.game.board.getField(s.targetId);i.style.left=`${t.x}%`,i.style.top=`${t.y}%`,await new Promise(e=>setTimeout(e,300)),i.style.opacity=`1`,e.classList.remove(`teleport-flash`),this.showToast(`Teleportation!`,`info`)}else if(s.action===`trap`){let e=document.getElementById(`game-board`);e.classList.add(`trap-shake`),this.showToast(`AUA! Falle!`,`warning`),await new Promise(e=>setTimeout(e,500)),e.classList.remove(`trap-shake`),s.move&&await this._animateMoveDirectly(t,a.id,t.position)}s.action===`minigame`?this.onMinigameNeeded&&this.onMinigameNeeded(s):(await new Promise(e=>setTimeout(e,1e3)),this.render())}async _animateMoveDirectly(e,t,n){let r=document.getElementById(`token-${e.id}`);if(!r)return;this.game.board.getField(t);let i=this.game.board.getField(n);r.style.transition=`left 0.8s ease-in-out, top 0.8s ease-in-out`,r.style.left=`${i.x}%`,r.style.top=`${i.y}%`,await new Promise(e=>setTimeout(e,850))}update(){this.render()}showToast(e,t=`info`){let n=[`cardboard-pink`,`cardboard-yellow`,`cardboard-blue`,`cardboard-green`,`cardboard-orange`,`cardboard-purple`],r=n[Math.floor(Math.random()*n.length)],i=document.createElement(`div`);i.className=`toast cardboard-chip ${r} visible`,i.style.position=`fixed`,i.style.top=`20px`,i.style.left=`50%`,i.style.transform=`translateX(-50%)`,i.style.zIndex=`1000`,i.style.padding=`15px 30px`,i.style.fontSize=`1.2rem`,i.style.fontWeight=`bold`,i.style.boxShadow=`var(--shadow-xl)`,i.textContent=e,document.body.appendChild(i),setTimeout(()=>{i.style.opacity=`0`,i.style.transform=`translateX(-50%) translateY(-20px)`,i.style.transition=`all 0.5s ease-in`,setTimeout(()=>i.remove(),500)},2500)}},K={makeDraggable(e,t={}){let n=!1,r,i,a,o,s=s=>{n=!0,e.classList.add(`is-dragging`),e.getBoundingClientRect(),r=s.clientX,i=s.clientY,a=e.offsetLeft,o=e.offsetTop,e.style.zIndex=`1000`,e.style.transition=`none`,t.onStart&&t.onStart(e,s),window.addEventListener(`pointermove`,c),window.addEventListener(`pointerup`,l)},c=s=>{if(!n)return;let c=s.clientX-r,l=s.clientY-i,u=a+c,d=o+l;t.bounds&&(u=Math.max(t.bounds.left,Math.min(t.bounds.right-e.offsetWidth,u)),d=Math.max(t.bounds.top,Math.min(t.bounds.bottom-e.offsetHeight,d))),e.style.left=`${u}px`,e.style.top=`${d}px`,t.onMove&&t.onMove(e,s,{x:u,y:d})},l=r=>{n&&(n=!1,e.classList.remove(`is-dragging`),window.removeEventListener(`pointermove`,c),window.removeEventListener(`pointerup`,l),t.onDrop&&t.onDrop(e,r))};return e.style.position=`absolute`,e.style.touchAction=`none`,e.addEventListener(`pointerdown`,s),()=>{e.removeEventListener(`pointerdown`,s),window.removeEventListener(`pointermove`,c),window.removeEventListener(`pointerup`,l)}},wobble(e,t=500){e.classList.add(`cardboard-wobble`),setTimeout(()=>e.classList.remove(`cardboard-wobble`),t)},createCardboardElement(e,t,n=``){let r=document.createElement(e);if(r.className=`cardboard-item ${t}`,n){let e=document.createElement(`span`);e.textContent=n,r.appendChild(e)}return r}},De={"word-chaos":{id:`word-chaos`,name_de:`Wort-Chaos Rush`,topics:[`satzbau`,`lesen`,`action`],setup(e,t,n){let r=[`Der`,`kleine`,`Hund`,`bellt`,`laut`],i=[...r].sort(()=>Math.random()-.5),a=0;e.innerHTML=`
      <div style="text-align: center; width: 100%; height: 300px; position: relative; overflow: hidden; background: #e0f7fa; border-radius: 12px; border: 4px solid #00bcd4;">
        <h3 style="margin-top: 10px; color: #00838f;">Tippe die Wörter in der richtigen Reihenfolge!</h3>
        <div id="chaos-sentence" style="min-height: 40px; margin: 10px; padding: 10px; background: white; border-radius: 8px; font-weight: bold; font-size: 1.5rem;"></div>
        <div id="chaos-arena" style="position: absolute; top: 100px; left: 0; right: 0; bottom: 0;"></div>
      </div>
    `;let o=e.querySelector(`#chaos-arena`),s=e.querySelector(`#chaos-sentence`),c=[];i.forEach(e=>{let t=document.createElement(`div`);t.textContent=e,Object.assign(t.style,{position:`absolute`,padding:`10px 20px`,background:`#ff4081`,color:`white`,fontWeight:`bold`,fontSize:`1.2rem`,borderRadius:`30px`,boxShadow:`0 5px 0 #c2185b`,cursor:`pointer`,userSelect:`none`,left:Math.random()*70+`%`,top:Math.random()*50+`%`,transition:`transform 0.1s`});let i=(Math.random()-.5)*4,l=(Math.random()-.5)*4,u=parseFloat(t.style.left),d=parseFloat(t.style.top),f=setInterval(()=>{u+=i,d+=l,(u<=0||u>=80)&&(i=-i),(d<=0||d>=80)&&(l=-l),t.style.left=u+`%`,t.style.top=d+`%`},50);t.addEventListener(`mousedown`,()=>{t.style.transform=`scale(0.9)`}),t.addEventListener(`click`,()=>{e===r[a]?(s.textContent+=e+` `,t.remove(),clearInterval(f),a++,a===r.length&&(s.style.background=`#c8e6c9`,s.style.color=`#2e7d32`,setTimeout(()=>n({correct:!0,score:100}),1e3))):(t.style.background=`#d32f2f`,t.style.boxShadow=`0 5px 0 #b71c1c`,setTimeout(()=>{t.style.background=`#ff4081`,t.style.boxShadow=`0 5px 0 #c2185b`},300))}),c.push(t),o.appendChild(t)})}},"syllable-ninja":{id:`syllable-ninja`,name_de:`Silben-Ninja`,topics:[`silben`,`nomen`,`action`],setup(e,t,n){let r=[`Au-to`,`Ba-na-ne`,`Scho-ko-la-de`,`Hund`,`Ti-ger`,`Com-pu-ter`].sort(()=>Math.random()-.5).slice(0,3),i=0;e.innerHTML=`
      <div style="text-align: center; width: 100%; height: 350px; background: #2c3e50; border-radius: 12px; position: relative; overflow: hidden; border: 4px solid #f1c40f;">
         <h3 style="color: #ecf0f1; margin-top: 10px;">Zerschneide die Wörter an den Silben! (Wische darüber)</h3>
         <div id="ninja-arena" style="position: absolute; inset: 0;"></div>
      </div>
    `;let a=e.querySelector(`#ninja-arena`),o=!1;a.addEventListener(`mousedown`,e=>{o=!0,e.offsetX,e.offsetY}),a.addEventListener(`mouseup`,()=>o=!1),a.addEventListener(`mouseleave`,()=>o=!1),a.addEventListener(`mousemove`,e=>{if(!o)return;let t=document.createElement(`div`);Object.assign(t.style,{position:`absolute`,background:`white`,height:`4px`,width:`20px`,left:e.offsetX+`px`,top:e.offsetY+`px`,borderRadius:`10px`,pointerEvents:`none`,boxShadow:`0 0 10px #fff`,opacity:1,transition:`opacity 0.2s`}),a.appendChild(t),setTimeout(()=>t.style.opacity=0,50),setTimeout(()=>t.remove(),250),c(e.offsetX,e.offsetY)});function s(){if(i>=r.length){setTimeout(()=>n({correct:!0,score:100}),1e3);return}let e=r[i],t=e.split(`-`),o=document.createElement(`div`);o.textContent=e.replace(/-/g,``),Object.assign(o.style,{position:`absolute`,bottom:`-50px`,left:20+Math.random()*60+`%`,background:`#e74c3c`,color:`white`,padding:`15px 30px`,fontSize:`2rem`,fontWeight:`bold`,borderRadius:`8px`,boxShadow:`0 8px 0 #c0392b`,userSelect:`none`}),a.appendChild(o);let c=-50,l=15,u=!1,d=setInterval(()=>{c+=l,l-=.5,o.style.bottom=c+`px`,o.dataset.sliced&&!u&&(u=!0,o.textContent=t.join(` - `),o.style.background=`#2ecc71`,o.style.boxShadow=`0 8px 0 #27ae60`,o.style.transform=`scale(1.2)`,setTimeout(()=>{clearInterval(d),o.remove(),i++,s()},800)),c<-100&&!u&&(clearInterval(d),o.remove(),i++,s())},30)}function c(e,t){a.querySelectorAll(`div`).forEach(n=>{if(n.textContent&&!n.dataset.sliced){let r=n.getBoundingClientRect(),i=a.getBoundingClientRect(),o=r.left-i.left,s=r.top-i.top;e>=o&&e<=o+r.width&&t>=s&&t<=s+r.height&&(n.dataset.sliced=`true`)}})}setTimeout(s,1e3)}},"word-type-sort":{id:`word-type-sort`,name_de:`Wortarten-Sortierer`,topics:[`nomen`,`verben`,`adjektive`],setup(e,t,n){let{mixedSets:r}=t.content;if(!r||r.length===0){n({correct:!1,score:0});return}let i=r[Math.floor(Math.random()*r.length)],a=[...i.words].sort(()=>Math.random()-.5),o={nomen:{label:`Nomen`,correct:i.nomen},verben:{label:`Verben`,correct:i.verben},adjektive:{label:`Adjektive`,correct:i.adjektive}},s=0,c=0,l=a.length;e.innerHTML=`
      <div class="stapler-container">
        <div class="word-pool" style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; padding:20px; min-height:120px; z-index:10;"></div>
        
        <div class="sort-columns" style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 15px; width:100%; padding:10px;">
          ${Object.entries(o).map(([e,t])=>`
            <div class="sorting-bin" data-category="${e}">
              <div class="sorting-bin-label">${t.label}</div>
              <div class="bin-content" style="display:flex; flex-direction:column; gap:5px; align-items:center;"></div>
            </div>
          `).join(``)}
        </div>
      </div>
    `;let u=e.querySelector(`.word-pool`),d=e.querySelectorAll(`.sorting-bin`);if(a.forEach(e=>{let t=K.createCardboardElement(`div`,`word-scrap`,e);t.dataset.word=e,t.style.position=`relative`,t.style.transform=`rotate(${Math.random()*6-3}deg)`,u.appendChild(t),K.makeDraggable(t,{onStart:e=>{e.style.transform=`scale(1.1) rotate(0deg)`,e.style.boxShadow=`0 15px 30px rgba(0,0,0,0.3)`},onDrop:(t,r)=>{let i=null,a=t.getBoundingClientRect(),u=a.left+a.width/2,f=a.top+a.height/2;if(d.forEach(e=>{let t=e.getBoundingClientRect();u>t.left&&u<t.right&&f>t.top&&f<t.bottom&&(i=e)}),i){let r=o[i.dataset.category].correct.includes(e),a=i.querySelector(`.bin-content`);if(t.style.position=`relative`,t.style.left=`0`,t.style.top=`0`,t.style.transform=`rotate(${Math.random()*4-2}deg) scale(0.9)`,a.appendChild(t),r?(c++,t.style.backgroundColor=`#a3de83`):(t.style.backgroundColor=`#ff8a5c`,K.wobble(t)),t.style.pointerEvents=`none`,s++,s>=l){let e=Math.round(c/l*100);setTimeout(()=>n({correct:e>=80,partial:e>=50,score:e}),1e3)}}else t.style.transform=`rotate(${Math.random()*6-3}deg)`}})}),!document.getElementById(`cardboard-games-css`)){let e=document.createElement(`link`);e.id=`cardboard-games-css`,e.rel=`stylesheet`,e.href=`css/cardboard-games.css`,document.head.appendChild(e)}}},"article-choice":{id:`article-choice`,name_de:`Artikel-Wahl`,topics:[`artikel`],setup(e,t,n){let{content:r}=t,i=[];if(r.questions?i=r.questions:r.quizSets?i=[...r.quizSets].sort(()=>Math.random()-.5).slice(0,5):r.type===`satzarten`&&r.sentences&&(i=[...r.sentences].sort(()=>Math.random()-.5).slice(0,5).map(e=>({word:e.sentence,correct:e.type,options:[`Aussagesatz`,`Fragesatz`,`Ausrufesatz`]}))),!i||i.length===0){n({correct:!1,score:0});return}let a=0,o=0,s=[`der`,`die`,`das`],c=()=>{let t=i[a],r=t.options||s,l=t.article||t.correct;e.innerHTML=`
        <div class="stapler-container" style="justify-content: center; gap: 30px;">
          <div class="cardboard-item" style="width: 80%; max-width: 500px; padding: 40px; font-size: 2rem; cursor: default; background-color: #fdf5e6;">
            <div style="font-size: 0.9rem; font-family: var(--font-handwritten); opacity: 0.6; margin-bottom: 15px;">
                ${t.options?`Welche Satzart ist das?`:`Welcher Artikel passt?`}
            </div>
            ${t.word}
          </div>
          
          <div class="answer-options" style="display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; width: 100%;">
            ${r.map(e=>`
              <div class="cardboard-item article-btn" data-answer="${e}" style="min-width: 120px; font-size: 1.4rem;">
                ${e}
              </div>
            `).join(``)}
          </div>
          
          <div style="position: absolute; bottom: 20px; right: 20px; font-family: var(--font-handwritten); font-weight: bold; opacity: 0.8; background: rgba(255,255,255,0.5); padding: 5px 15px; border-radius: 20px;">
            ${a+1} / ${i.length}
          </div>
        </div>
      `,e.querySelectorAll(`.article-btn`).forEach(t=>{t.addEventListener(`click`,()=>{t.dataset.answer===l?(o++,t.style.backgroundColor=`#a3de83`):(t.style.backgroundColor=`#ff8a5c`,K.wobble(t),e.querySelectorAll(`.article-btn[data-answer="${l}"]`).forEach(e=>{e.style.backgroundColor=`#a3de83`,e.style.border=`4px solid #4caf50`})),e.querySelectorAll(`.article-btn`).forEach(e=>e.style.pointerEvents=`none`),setTimeout(()=>{if(a++,a<i.length)c();else{let e=Math.round(o/i.length*100);n({correct:e>=80,partial:e>=50,score:e})}},1e3)})})};if(c(),!document.getElementById(`cardboard-games-css`)){let e=document.createElement(`link`);e.id=`cardboard-games-css`,e.rel=`stylesheet`,e.href=`css/cardboard-games.css`,document.head.appendChild(e)}}},"sentence-order":{id:`sentence-order`,name_de:`Sätze ordnen`,topics:[`satzbau`],setup(e,t,n){let r=t.content.sentenceOrder;if(!r||r.length===0){n({correct:!1,score:0});return}let i=r[Math.floor(Math.random()*r.length)],a=[...i.words].sort(()=>Math.random()-.5),o=[];function s(){e.innerHTML=`
        <div class="minigame-body">
          <div class="drag-zone" id="sentence-target" style="min-height: 60px; margin-bottom: var(--space-xl);">
            ${o.map((e,t)=>`
              <button class="drag-word placed selected-word" data-index="${t}" data-word="${e}">${e}</button>
            `).join(``)}
            ${o.length===0?`<span style="color: var(--text-light);">Tippe die Wörter in der richtigen Reihenfolge an</span>`:``}
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:var(--space-sm); justify-content:center;">
            ${a.map((e,t)=>{let n=o.includes(e)&&o.filter(t=>t===e).length>=a.filter((n,r)=>n===e&&r<=t).length;return`
                <button class="drag-word word-source ${n?`used`:``}" 
                        data-word="${e}" data-sindex="${t}"
                        ${n?`disabled style="opacity:0.3; pointer-events:none;"`:``}>
                  ${e}
                </button>
              `}).join(``)}
          </div>
          <div style="display:flex; gap:var(--space-md); justify-content:center; margin-top: var(--space-xl);">
            <button class="btn btn-secondary btn-sm" id="reset-btn">🔄 Nochmal</button>
            <button class="btn btn-primary btn-sm" id="check-btn" ${o.length===i.words.length?``:`disabled`}>
              ✓ Prüfen
            </button>
          </div>
          <div id="feedback-area" style="text-align:center; margin-top: var(--space-md); min-height: 40px;"></div>
        </div>
      `,e.querySelectorAll(`.word-source:not(.used)`).forEach(e=>{e.addEventListener(`click`,()=>{o.push(e.dataset.word),s()})}),e.querySelectorAll(`.selected-word`).forEach(e=>{e.addEventListener(`click`,()=>{o.splice(parseInt(e.dataset.index),1),s()})});let t=e.querySelector(`#reset-btn`);t&&t.addEventListener(`click`,()=>{o.length=0,s()});let r=e.querySelector(`#check-btn`);r&&r.addEventListener(`click`,()=>{let e=o.join(` `);i.correct.replace(/[.!?]$/,``);let t=e===i.words.join(` `),r=document.getElementById(`feedback-area`);t?r.innerHTML=`
              <span style="color: var(--color-success); font-weight: bold; font-size: var(--font-size-lg);">
                Richtig! 🎉 "${i.correct}"
              </span>`:r.innerHTML=`
              <span style="color: var(--color-error); font-weight: bold; font-size: var(--font-size-md);">
                Nicht ganz! Die Lösung ist: "${i.correct}"
              </span>`,setTimeout(()=>{n({correct:t,partial:!1,score:t?100:0})},2e3)})}s()}},"fill-blanks":{id:`fill-blanks`,name_de:`Lückentext`,topics:[`lueckentexte`,`lesen`],setup(e,t,n){let r=t.content,i;if(r.type===`fillBlanks`&&r.items)i=r.items;else if(r.type===`lesen`&&r.texts){let e=r.texts[Math.floor(Math.random()*r.texts.length)];e&&e.questions&&(i=e.questions.map(e=>({sentence:e.question,blank:e.correct,options:e.options})))}if(!i||i.length===0){n({correct:!1,score:0});return}let a=i.sort(()=>Math.random()-.5).slice(0,3),o=0,s=0;function c(){let t=a[o],r=[...t.options].sort(()=>Math.random()-.5),i=t.sentence.replace(`___`,`<span class="fill-blank">___</span>`);e.innerHTML=`
        <div class="minigame-body">
          <div style="text-align:center; margin-bottom: var(--space-md);">
            <span class="turn-round">${o+1} / ${a.length}</span>
          </div>
          <div class="fill-sentence" style="margin-bottom: var(--space-xl);">
            ${i}
          </div>
          <div class="answer-options" style="max-width: 500px; margin: 0 auto;">
            ${r.map(e=>`
              <button class="answer-option" data-answer="${e}">${e}</button>
            `).join(``)}
          </div>
          <div id="feedback-area" style="text-align:center; margin-top: var(--space-lg); min-height: 40px;"></div>
        </div>
      `,e.querySelectorAll(`.answer-option`).forEach(r=>{r.addEventListener(`click`,()=>{let i=r.dataset.answer===t.blank;if(e.querySelectorAll(`.answer-option`).forEach(e=>{e.classList.add(`disabled`),e.dataset.answer===t.blank&&e.classList.add(`correct`)}),i){r.classList.add(`correct`),s++;let n=e.querySelector(`.fill-blank`);n&&(n.textContent=t.blank,n.style.color=`var(--color-success)`),document.getElementById(`feedback-area`).innerHTML=`<span style="color: var(--color-success); font-weight: bold;">Richtig! ✓</span>`}else{r.classList.add(`wrong`);let n=e.querySelector(`.fill-blank`);n&&(n.textContent=t.blank,n.style.color=`var(--color-error)`),document.getElementById(`feedback-area`).innerHTML=`<span style="color: var(--color-error); font-weight: bold;">Die Antwort ist: "${t.blank}"</span>`}setTimeout(()=>{if(o++,o<a.length)c();else{let e=Math.round(s/a.length*100);n({correct:e>=80,partial:e>=50,score:e})}},1500)})})}c()}},"spelling-detective":{id:`spelling-detective`,name_de:`Rechtschreib-Detektiv`,topics:[`rechtschreibung`,`fehlerkorrektur`],setup(e,t,n){let r=t.content.pairs;if(!r||r.length===0){n({correct:!1,score:0});return}let i=[...r].sort(()=>Math.random()-.5).slice(0,3),a=0,o=0;function s(){let t=i[a],c=[...r.filter(e=>e.correct!==t.correct).slice(0,2).map(e=>e.correct),t.wrong].sort(()=>Math.random()-.5);e.innerHTML=`
        <div class="minigame-body">
          <div style="text-align:center; margin-bottom: var(--space-md);">
            <span class="turn-round">${a+1} / ${i.length}</span>
          </div>
          <p style="text-align:center; font-size: var(--font-size-lg); margin-bottom: var(--space-xl); color: var(--text-primary);">
            🔍 Welches Wort ist <strong>falsch</strong> geschrieben?
          </p>
          <div class="answer-options" style="max-width: 500px; margin: 0 auto;">
            ${c.map(e=>`
              <button class="answer-option" data-word="${e}" style="font-size: var(--font-size-xl);">
                ${e}
              </button>
            `).join(``)}
          </div>
          <div id="feedback-area" style="text-align:center; margin-top: var(--space-lg); min-height: 60px;"></div>
        </div>
      `,e.querySelectorAll(`.answer-option`).forEach(r=>{r.addEventListener(`click`,()=>{let c=r.dataset.word===t.wrong;e.querySelectorAll(`.answer-option`).forEach(e=>{e.classList.add(`disabled`),e.dataset.word===t.wrong&&(e.classList.add(`wrong`),e.style.textDecoration=`line-through`)});let l=document.getElementById(`feedback-area`);c?(o++,l.innerHTML=`
              <span style="color: var(--color-success); font-weight: bold; font-size: var(--font-size-lg);">
                Richtig! ✓
              </span><br>
              <span style="color: var(--text-secondary); font-size: var(--font-size-sm);">
                Richtig geschrieben: <strong>${t.correct}</strong> - ${t.rule}
              </span>`):l.innerHTML=`
              <span style="color: var(--color-error); font-weight: bold; font-size: var(--font-size-lg);">
                Nicht ganz! ✗
              </span><br>
              <span style="color: var(--text-secondary); font-size: var(--font-size-sm);">
                "${t.wrong}" ist falsch -> Richtig: <strong>${t.correct}</strong> - ${t.rule}
              </span>`,setTimeout(()=>{if(a++,a<i.length)s();else{let e=Math.round(o/i.length*100);n({correct:e>=80,partial:e>=50,score:e})}},2500)})})}s()}},"case-choice":{id:`case-choice`,name_de:`Groß oder klein?`,topics:[`gross_klein`],setup(e,t,n){let r=t.content.items;if(!r||r.length===0){n({correct:!1,score:0});return}let i=[...r].sort(()=>Math.random()-.5).slice(0,5),a=0,o=0;function s(){let t=i[a],r=t.word.toLowerCase();e.innerHTML=`
        <div class="minigame-body">
          <div style="text-align:center; margin-bottom: var(--space-md);">
            <span class="turn-round">${a+1} / ${i.length}</span>
          </div>
          <p style="text-align:center; font-size: var(--font-size-lg); margin-bottom: var(--space-lg); color: var(--text-primary);">
            Wird dieses Wort <strong>groß</strong> oder <strong>klein</strong> geschrieben?
          </p>
          <div style="text-align:center; margin-bottom: var(--space-xl);">
            <span style="font-family: var(--font-family-display); font-size: var(--font-size-3xl); font-weight: var(--font-weight-black); color: var(--color-primary); letter-spacing: 2px;">
              ${r}
            </span>
          </div>
          <div class="answer-options" style="max-width: 400px; margin: 0 auto; grid-template-columns: 1fr 1fr;">
            <button class="answer-option" data-answer="gross" style="font-size: var(--font-size-xl);">
              🔠 GROSS
            </button>
            <button class="answer-option" data-answer="klein" style="font-size: var(--font-size-xl);">
              🔡 klein
            </button>
          </div>
          <div id="feedback-area" style="text-align:center; margin-top: var(--space-lg); min-height: 60px;"></div>
        </div>
      `,e.querySelectorAll(`.answer-option`).forEach(r=>{r.addEventListener(`click`,()=>{let c=r.dataset.answer,l=t.isNoun?`gross`:`klein`,u=c===l;e.querySelectorAll(`.answer-option`).forEach(e=>e.classList.add(`disabled`));let d=document.getElementById(`feedback-area`);if(u)r.classList.add(`correct`),o++,d.innerHTML=`
              <span style="color: var(--color-success); font-weight: bold; font-size: var(--font-size-lg);">
                Richtig! ✓ -> ${t.correct}
              </span><br>
              <span style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t.explanation}</span>`;else{r.classList.add(`wrong`);let n=e.querySelector(`[data-answer="${l}"]`);n&&n.classList.add(`correct`),d.innerHTML=`
              <span style="color: var(--color-error); font-weight: bold; font-size: var(--font-size-lg);">
                Leider nein! -> ${t.correct}
              </span><br>
              <span style="font-size: var(--font-size-sm); color: var(--text-secondary);">${t.explanation}</span>`}setTimeout(()=>{if(a++,a<i.length)s();else{let e=Math.round(o/i.length*100);n({correct:e>=80,partial:e>=50,score:e})}},2e3)})})}s()}},"noun-hunter":{id:`noun-hunter`,name_de:`Nomen-Jäger`,topics:[`nomen`],setup(e,t,n){let r=t.content.words||[];if(r.length===0){n({correct:!1,score:0});return}let i=r.slice(0,5),a=[`laufen`,`spielen`,`groß`,`schnell`,`gerne`,`heute`,`und`,`mit`,`einem`,`sehr`,`im`,`auf`,`dem`],o=[],s=0;for(let e=0;e<12;e++)if(s<i.length&&(e%3==1||e===0))o.push({word:i[s],isNoun:!0}),s++;else{let e=a[Math.floor(Math.random()*a.length)];o.push({word:e,isNoun:!1})}let c=o.filter(e=>e.isNoun).length,l=new Set;e.innerHTML=`
      <div class="minigame-body">
        <p style="text-align:center; font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
          Finde alle <strong>${c} Nomen</strong> im Text!
        </p>
        <div class="highlight-text" id="noun-text">
          ${o.map((e,t)=>`
            <span class="highlight-word" data-index="${t}" data-noun="${e.isNoun}">${e.word}</span>
          `).join(` `)}
        </div>
        <div style="text-align:center; margin-top: var(--space-lg);">
          <span id="noun-count" style="font-weight: bold; color: var(--color-primary);">
            0 / ${c} Nomen gefunden
          </span>
        </div>
        <div style="text-align:center; margin-top: var(--space-md);">
          <button class="btn btn-primary btn-sm" id="done-btn" disabled>✓ Fertig!</button>
        </div>
      </div>
    `,e.querySelectorAll(`.highlight-word`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.index;e.dataset.noun,l.has(t)?(l.delete(t),e.classList.remove(`selected`)):(l.add(t),e.classList.add(`selected`));let n=[...l].filter(e=>o[parseInt(e)].isNoun).length;document.getElementById(`noun-count`).textContent=`${n} / ${c} Nomen gefunden`,document.getElementById(`done-btn`).disabled=l.size===0})}),document.getElementById(`done-btn`)?.addEventListener(`click`,()=>{let t=0,r=0;e.querySelectorAll(`.highlight-word`).forEach(e=>{let n=e.dataset.index,i=e.dataset.noun===`true`,a=l.has(n);i&&a?(e.classList.add(`correct-highlight`),t++):i&&!a?e.classList.add(`wrong-highlight`):!i&&a&&(e.classList.add(`wrong-highlight`),r++),e.style.pointerEvents=`none`});let i=Math.max(0,Math.round((t-r*.5)/c*100));setTimeout(()=>{n({correct:i>=80,partial:i>=50,score:i,details:{found:t,missed:c-t,wrongPicks:r}})},2e3)})}},"rhyme-match":{id:`rhyme-match`,name_de:`Reimpaare finden`,topics:[`reime`],setup(e,t,n){let r=t.content;if(!r.pairs||r.pairs.length===0){n({correct:!1,score:0});return}let i=[...r.pairs].sort(()=>Math.random()-.5).slice(0,4),a=i.flatMap(e=>e).sort(()=>Math.random()-.5),o=null,s=null,c=0,l=i.length,u=new Set,d={};for(let[e,t]of i)d[e]=t,d[t]=e;e.innerHTML=`
      <div class="minigame-body">
        <p style="text-align:center; font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
          Finde die Wörter, die sich reimen! Tippe zwei zusammenpassende Wörter an.
        </p>
        <div style="text-align:center; margin-bottom: var(--space-lg);">
          <span id="match-count" style="font-weight: bold; color: var(--color-primary);">
            0 / ${l} Paare gefunden
          </span>
        </div>
        <div class="answer-options" style="max-width: 600px; margin: 0 auto; grid-template-columns: repeat(4, 1fr);">
          ${a.map((e,t)=>`
            <button class="answer-option rhyme-word" data-word="${e}" data-index="${t}" 
                    style="font-size: var(--font-size-lg);">
              ${e}
            </button>
          `).join(``)}
        </div>
        <div id="feedback-area" style="text-align:center; margin-top: var(--space-lg); min-height: 40px;"></div>
      </div>
    `,e.querySelectorAll(`.rhyme-word`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.word;u.has(t)||(o?o===t?(e.style.outline=`none`,e.style.background=``,e.style.color=``,o=null,s=null):(d[o]===t?(c++,u.add(t),u.add(o),e.classList.add(`correct`),e.style.outline=`none`,e.style.pointerEvents=`none`,s.classList.add(`correct`),s.style.outline=`none`,s.style.pointerEvents=`none`,document.getElementById(`match-count`).textContent=`${c} / ${l} Paare gefunden`,document.getElementById(`feedback-area`).innerHTML=`<span style="color: var(--color-success); font-weight: bold;">
                "${o}" reimt sich auf "${t}"! 🎵
              </span>`,c>=l&&setTimeout(()=>{n({correct:!0,score:100})},1500)):(e.classList.add(`wrong`),s.classList.add(`wrong`),document.getElementById(`feedback-area`).innerHTML=`<span style="color: var(--color-error); font-weight: bold;">
                Diese Wörter reimen sich nicht 🤔
              </span>`,setTimeout(()=>{e.classList.remove(`wrong`),e.style.background=``,e.style.color=``,s.classList.remove(`wrong`),s.style.outline=`none`,s.style.background=``,s.style.color=``},800)),o=null,s=null):(o=t,s=e,e.style.outline=`3px solid var(--color-primary)`,e.style.background=`var(--color-primary-light)`,e.style.color=`white`))})})}},"image-puzzle":{id:`image-puzzle`,name_de:`Bilder-Puzzle`,topics:[`allgemein`,`puzzle`],setup(e,t,n){let r=document.createElement(`div`);r.className=`puzzle-minigame`;let i=window.app?.game?.difficulty,a=3;i?.id===`leicht`&&(a=2),i?.id===`schwer`&&(a=4);let o=a*a,s=[`steph_bild_1.jpg`,`steph_bild_2.jpg`,`steph_bild_3.jpg`],c=`assets/img/${s[Math.floor(Math.random()*s.length)]}`;r.innerHTML=`
      <div class="minigame-header">
        <h3 class="minigame-title">Das große Bilder-Puzzle</h3>
        <p class="minigame-instruction">Klicke auf zwei Kacheln, um ihre Plätze zu tauschen! Setze das Bild richtig zusammen.</p>
      </div>
      <div class="puzzle-grid-wrapper">
        <div class="puzzle-grid" style="grid-template-columns: repeat(${a}, 1fr); grid-template-rows: repeat(${a}, 1fr);">
        </div>
      </div>
    `;let l=r.querySelector(`.puzzle-grid`),u=Array.from({length:o},(e,t)=>t),d=[...u];do for(let e=d.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[d[e],d[t]]=[d[t],d[e]]}while(JSON.stringify(d)===JSON.stringify(u)&&o>1);let f=null,p=[],m=()=>{for(let e=0;e<o;e++)if(p[e].dataset.correctPos!=e)return!1;return!0},h=()=>{l.innerHTML=``,p=[],d.forEach((e,t)=>{let r=document.createElement(`div`);r.className=`puzzle-tile`,f===t&&r.classList.add(`selected`);let i=Math.floor(e/a),o=e%a/(a-1)*100,s=i/(a-1)*100;r.style.backgroundImage=`url('${c}')`,r.style.backgroundSize=`${a*100}% ${a*100}%`,r.style.backgroundPosition=`${o}% ${s}%`,r.dataset.correctPos=e,r.dataset.currentIndex=t,r.addEventListener(`click`,()=>{if(f===null)f=t,h();else if(f===t)f=null,h();else{let e=d[f];d[f]=d[t],d[t]=e,f=null,h(),m()&&(l.classList.add(`puzzle-won`),setTimeout(()=>{n({success:!0,reward:3,message:`Wunderschön! Das Bild ist wieder komplett!`})},1500))}}),p.push(r),l.appendChild(r)})};if(!document.getElementById(`image-puzzle-css`)){let e=document.createElement(`style`);e.id=`image-puzzle-css`,e.innerHTML=`
          .puzzle-grid-wrapper {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            width: 100%;
          }
          .puzzle-grid {
            display: grid;
            width: 100%;
            max-width: 500px;
            aspect-ratio: 1;
            gap: 4px;
            background: var(--bg-warm);
            padding: 8px;
            border-radius: 12px;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.1);
          }
          .puzzle-tile {
            border-radius: 6px;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s, border 0.1s;
            border: 2px solid transparent;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            min-height: 50px;
          }
          .puzzle-tile:hover {
            transform: scale(0.98);
          }
          .puzzle-tile.selected {
            transform: scale(0.95);
            border: 4px dashed var(--color-primary);
            box-shadow: 0 0 15px rgba(74, 108, 247, 0.5);
            opacity: 0.8;
          }
          .puzzle-grid.puzzle-won .puzzle-tile {
            gap: 0;
            border-radius: 0;
            border: none;
            box-shadow: none;
            cursor: default;
          }
          .puzzle-grid.puzzle-won {
            gap: 0;
            padding: 0;
            background: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            animation: win-pulse 1s ease;
          }
          @keyframes win-pulse {
             0% { transform: scale(1); }
             50% { transform: scale(1.05); box-shadow: 0 0 40px rgba(255,215,0,0.8); }
             100% { transform: scale(1); }
          }
        `,document.head.appendChild(e)}h(),e.innerHTML=``,e.appendChild(r)}},"syllable-counter":{id:`syllable-counter`,name_de:`Silben-Zähler`,topics:[`silben`],setup(e,t,n){let r=t.content.words;if(!r||r.length===0){n({correct:!1,score:0});return}let i=r[Math.floor(Math.random()*r.length)],a=i.word,o=i.syllables.length;e.innerHTML=`
      <div class="minigame-body">
        <p style="text-align:center; font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
          Wie viele Silben (Klatscher) hat dieses Wort?
        </p>
        <div class="target-word" style="font-size: 3rem; text-align: center; margin: var(--space-xl) 0; font-family: 'Fredoka One', cursive; color: var(--color-primary);">
          ${a}
        </div>
        <div class="options-grid" style="display: flex; justify-content: center; gap: var(--space-md);">
          ${[1,2,3,4].map(e=>`
            <button class="btn btn-secondary syllable-btn" data-num="${e}" style="font-size: 2rem; width: 80px; height: 80px; border-radius: 50%;">
              ${e}
            </button>
          `).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.syllable-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let r=parseInt(t.dataset.num,10)===o;t.style.background=r?`var(--color-success)`:`var(--color-error)`,t.style.color=`#fff`,e.querySelectorAll(`.syllable-btn`).forEach(e=>{e.style.pointerEvents=`none`,!r&&parseInt(e.dataset.num,10)===o&&(e.style.border=`4px solid var(--color-success)`)}),setTimeout(()=>{n({correct:r,score:r?100:0})},1200)})})}},"time-machine":{id:`time-machine`,name_de:`Zeitmaschine`,topics:[`zeitformen`],setup(e,t,n){let r=t.content;if(!r||!r.content){n({correct:!1,score:0});return}let i=r.content,a=[];if(i.praesens&&i.praesens.forEach(e=>a.push({word:e,category:`gegenwart`})),i.praeteritum&&i.praeteritum.forEach(e=>a.push({word:e,category:`vergangenheit`})),i.perfekt&&i.perfekt.forEach(e=>a.push({word:e,category:`vergangenheit`})),i.futur&&i.futur.forEach(e=>a.push({word:e,category:`zukunft`})),a.length===0){n({correct:!1,score:0});return}let o=[];for(let e=0;e<3;e++)o.push(a[Math.floor(Math.random()*a.length)]);let s=0,c=0;function l(){if(s>=o.length){let e=Math.round(c/o.length*100);n({correct:e>=80,partial:e>=50&&e<80,score:e,details:{correctCount:c,total:o.length}});return}let t=o[s];e.innerHTML=`
        <div class="minigame-body animate-slide-up">
          <p style="text-align:center; font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
            In welcher Zeit steht dieses Verb? (${s+1}/${o.length})
          </p>
          <div class="target-word" style="font-size: 2.5rem; text-align: center; margin: var(--space-xl) 0; font-family: 'Fredoka One', cursive; color: var(--color-primary);">
            ${t.word}
          </div>
          <div class="options-grid" style="display: flex; justify-content: center; gap: var(--space-md); flex-wrap: wrap;">
            <button class="btn btn-secondary tense-btn" data-tense="vergangenheit">Vergangenheit 🕰️</button>
            <button class="btn btn-secondary tense-btn" data-tense="gegenwart">Gegenwart ⏳</button>
            <button class="btn btn-secondary tense-btn" data-tense="zukunft">Zukunft 🚀</button>
          </div>
        </div>
      `,e.querySelectorAll(`.tense-btn`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.tense===t.category;r&&c++,n.style.background=r?`var(--color-success)`:`var(--color-error)`,n.style.color=`#fff`,e.querySelectorAll(`.tense-btn`).forEach(e=>{e.style.pointerEvents=`none`,!r&&e.dataset.tense===t.category&&(e.style.border=`4px solid var(--color-success)`)}),setTimeout(()=>{s++,l()},1200)})})}l()}},"punctuation-catcher":{id:`punctuation-catcher`,name_de:`Satzzeichen-Fänger`,topics:[`satzzeichen`],setup(e,t,n){let r=t.content;if(!r||!r.content){n({correct:!1,score:0});return}let i=r.content,a=[];if(Object.keys(i).forEach(e=>{i[e].forEach(e=>a.push(e))}),a.length===0){n({correct:!1,score:0});return}let o=[];for(let e=0;e<3;e++)o.push(a[Math.floor(Math.random()*a.length)]);let s=0,c=0;function l(){if(s>=o.length){let e=Math.round(c/o.length*100);n({correct:e>=80,partial:e>=50&&e<80,score:e,details:{correctCount:c,total:o.length}});return}let t=o[s],r=t.text;r.includes(`[,]`)?r=r.replace(`[,]`,`<span class="missing-box" style="display:inline-block; width: 30px; height: 30px; border: 2px dashed var(--color-primary); vertical-align: middle; margin: 0 4px;"></span>`):r+=`<span class="missing-box" style="display:inline-block; width: 30px; height: 30px; border: 2px dashed var(--color-primary); vertical-align: middle; margin: 0 4px;"></span>`,e.innerHTML=`
        <div class="minigame-body animate-slide-up">
          <p style="text-align:center; font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
            Welches Satzzeichen fehlt? (${s+1}/${o.length})
          </p>
          <div class="target-sentence" style="font-size: 1.5rem; text-align: center; margin: var(--space-xl) 0; font-family: 'Nunito', sans-serif; font-weight: bold; line-height: 1.5;">
            ${r}
          </div>
          <div class="options-grid" style="display: flex; justify-content: center; gap: var(--space-md);">
            ${[`.`,`?`,`!`,`,`].map(e=>`
              <button class="btn btn-secondary punct-btn" data-punct="${e}" style="font-size: 2rem; width: 70px; height: 70px; border-radius: 50%;">
                ${e}
              </button>
            `).join(``)}
          </div>
        </div>
      `,e.querySelectorAll(`.punct-btn`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.punct,i=r===t.missing;i&&c++,n.style.background=i?`var(--color-success)`:`var(--color-error)`,n.style.color=`#fff`,e.querySelectorAll(`.punct-btn`).forEach(e=>{e.style.pointerEvents=`none`,!i&&e.dataset.punct===t.missing&&(e.style.border=`4px solid var(--color-success)`)});let a=e.querySelector(`.missing-box`);a&&(a.textContent=r,a.style.border=`none`,a.style.color=i?`var(--color-success)`:`var(--color-error)`),setTimeout(()=>{s++,l()},1200)})})}l()}},"compound-builder":{id:`compound-builder`,name_de:`Wort-Baumeister`,topics:[`zusammengesetzte_nomen`,`nomen`,`wortschatz`],setup(e,t,n){let r=t.content,i=[];if(r&&r.items)i=r.items;else{n({correct:!1,score:0});return}if(!i||i.length===0){n({correct:!1,score:0});return}let a=[...i].sort(()=>Math.random()-.5).slice(0,3),o=0,s=0;function c(){if(o>=a.length){let e=Math.round(s/a.length*100);n({correct:e>=80,partial:e>=50&&e<80,score:e,details:{correctCount:s,total:a.length}});return}let t=a[o],r=[t.part2,t.decoy1,t.decoy2].sort(()=>Math.random()-.5);e.innerHTML=`
        <div class="minigame-body animate-slide-up">
          <p style="text-align:center; font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
            Baue ein neues Nomen! (${o+1}/${a.length})
          </p>
          <div class="target-sentence" style="font-size: 2rem; text-align: center; margin: var(--space-xl) 0; font-family: 'Fredoka One', cursive; color: var(--color-primary); display: flex; align-items: center; justify-content: center; gap: 8px;">
            <span>${t.part1}</span>
            <span>+</span>
            <span class="missing-box" style="display:inline-block; width: 150px; height: 50px; border: 3px dashed var(--color-primary); border-radius: 8px;"></span>
          </div>
          <div class="options-grid" style="display: flex; justify-content: center; gap: var(--space-md); flex-wrap: wrap;">
            ${r.map(e=>`
              <button class="btn btn-secondary word-btn" data-word="${e}" style="font-size: 1.5rem; padding: 12px 24px; border-radius: 12px;">
                ${e}
              </button>
            `).join(``)}
          </div>
        </div>
      `,e.querySelectorAll(`.word-btn`).forEach(n=>{n.addEventListener(`click`,()=>{let r=n.dataset.word,i=r===t.part2;i&&s++,n.style.background=i?`var(--color-success)`:`var(--color-error)`,n.style.color=`#fff`,e.querySelectorAll(`.word-btn`).forEach(e=>{e.style.pointerEvents=`none`,!i&&e.dataset.word===t.part2&&(e.style.border=`4px solid var(--color-success)`)});let a=e.querySelector(`.missing-box`);a&&(a.innerHTML=`<span style="display: flex; align-items: center; justify-content: center; height: 100%; color: ${i?`var(--color-success)`:`var(--color-error)`}; font-weight: bold;">${r}</span>`,a.style.border=`none`),setTimeout(()=>{o++,c()},1500)})})}c()}},"word-ninja":{id:`word-ninja`,name_de:`Wort-Ninja`,topics:[`wortarten`,`wortschatz`,`nomen`],setup(e,t,n){let r=t.content,i;if(r.mixedSets&&r.mixedSets.length>0)i=r.mixedSets[Math.floor(Math.random()*r.mixedSets.length)];else{n({correct:!1,score:0});return}let{nomen:a,verben:o}=i;if(!a||!o||a.length===0||o.length===0){n({correct:!1,score:0});return}let s=!0,c=0,l=0,u=Math.min(a.length,5),d=0,f=3;e.innerHTML=`
      <div class="ninja-container" style="position: relative; width: 100%; height: 60vh; max-height: 500px; background: #2c3e50; border-radius: 16px; overflow: hidden; touch-action: none; user-select: none;">
        
        <!-- HUD -->
        <div style="position: absolute; top: 10px; left: 10px; color: white; z-index: 10; font-family: 'Fredoka One', cursive; text-shadow: 1px 1px 2px black;">
           <div>Punkte: <span id="ninja-score">0</span>/${u}</div>
           <div style="font-size: 0.8em; color: #ecf0f1;">Schneide NOMEN!</div>
        </div>
        <div style="position: absolute; top: 10px; right: 10px; color: #e74c3c; z-index: 10; font-size: 1.5rem; text-shadow: 1px 1px 2px black;">
           <span id="ninja-lives">❤️❤️❤️</span>
        </div>

        <!-- Overlay -->
        <div id="ninja-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 50; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <p style="color: white; font-size: 1.5rem; text-align: center; font-family: 'Fredoka One';">Markiere die NOMEN!<br><span style="font-size: 1rem; color:#e74c3c">Achtung vor den Verben!</span></p>
            <button id="ninja-start-btn" class="btn btn-primary btn-lg mt-3">Start</button>
        </div>

        <div id="ninja-game-area" style="position: absolute; inset: 0; overflow: hidden;"></div>
      </div>
    `;let p=e.querySelector(`#ninja-game-area`),m=e.querySelector(`#ninja-score`),h=e.querySelector(`#ninja-lives`),g;function _(t){if(!s)return;s=!1,clearInterval(g);let r=e.querySelector(`#ninja-overlay`);r.style.display=`flex`,r.innerHTML=`<h2 style="color:white">${t?`Geschafft! 🎉`:`Game Over 💥`}</h2>`,setTimeout(()=>{n({correct:t,partial:!t&&c>0,score:Math.round(c/u*100),details:{lives:f,score:c}})},1500)}function v(){if(!s)return;let e=d>=u||Math.random()>.6,t=``;e?t=o[Math.floor(Math.random()*o.length)]:(t=a[d%a.length],d++);let n=document.createElement(`div`);n.textContent=t,Object.assign(n.style,{position:`absolute`,bottom:`-50px`,left:`${10+Math.random()*60}%`,padding:`10px 20px`,background:`white`,borderRadius:`20px`,fontWeight:`bold`,fontSize:`1.2rem`,boxShadow:`0 4px 8px rgba(0,0,0,0.3)`,border:`3px solid`,borderColor:e?`#e74c3c`:`#3498db`,cursor:`crosshair`,transition:`transform 0.1s`,userSelect:`none`}),p.appendChild(n);let r=-50,i=parseFloat(n.style.left),g=12+Math.random()*4,v=(Math.random()-.5)*4,y=!1;function b(){if(s){if(g-=.2,r+=g,i+=v,n.style.bottom=`${r}px`,n.style.left=`${i}%`,r<-100){n.remove(),!e&&!y&&s&&d--;return}requestAnimationFrame(b)}}requestAnimationFrame(b);let x=t=>{y||!s||(t.preventDefault(),y=!0,e?(f--,h.textContent=`❤️`.repeat(Math.max(0,f)),n.style.background=`#e74c3c`,n.style.color=`white`,f<=0&&_(!1)):(c++,l++,m.textContent=c,n.style.transform=`scale(1.2) rotate(15deg)`,n.style.background=`#2ecc71`,n.style.color=`white`,n.style.opacity=`0`,n.style.transition=`all 0.3s ease`,c>=u&&_(!0)))};n.addEventListener(`pointerdown`,x),n.addEventListener(`pointerenter`,e=>{e.buttons>0&&x(e)})}e.querySelector(`#ninja-start-btn`).addEventListener(`click`,()=>{e.querySelector(`#ninja-overlay`).style.display=`none`,g=setInterval(()=>{s&&Math.random()>.3&&v()},800)})}},"word-meteorites":{id:`word-meteorites`,name_de:`Wort-Meteoriten`,topics:[`rechtschreibung`,`wortschatz`,`lesen`],setup(e,t,n){let r=t.content,i=[];r.pairs?i=r.pairs.filter(e=>!e.wrong).map(e=>e.correct||e.word).filter(Boolean):r.words?i=r.words:r.mixedSets&&(i=r.mixedSets[0]?.words||[]),(!i||i.length===0)&&(i=[`Haus`,`Baum`,`Katze`,`Auto`,`Blume`]);let a=[...i].sort(()=>Math.random()-.5).slice(0,5),o=!1,s=0,c=``,l=[],u=3;e.innerHTML=`
      <div class="meteor-container" style="position: relative; width: 100%; height: 60vh; max-height: 500px; background: #000; border-radius: 16px; overflow: hidden; touch-action: none;">
        
        <!-- Stars Background -->
        <div style="position:absolute; inset:0; background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 20px 20px; opacity: 0.3;"></div>

        <!-- HUD -->
        <div style="position: absolute; top: 10px; left: 10px; color: white; z-index: 10; font-family: 'Fredoka One', cursive;">
           <div>Punkte: <span id="met-score">0</span>/${a.length}</div>
        </div>
        <div style="position: absolute; top: 10px; right: 10px; color: #e74c3c; z-index: 10; font-size: 1.5rem;">
           <span id="met-lives">❤️❤️❤️</span>
        </div>

        <!-- Overlay -->
        <div id="met-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.8); z-index: 50; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <p style="color: white; font-size: 1.5rem; text-align: center; font-family: 'Fredoka One';">Tippe die Wörter ab, <br>bevor sie einschlagen!</p>
            <button id="met-start-btn" class="btn btn-primary btn-lg mt-3">Start</button>
        </div>

        <div id="met-game-area" style="position: absolute; top: 0; left: 0; right: 0; bottom: 80px; overflow: hidden;"></div>

        <!-- Ground/City -->
        <div style="position:absolute; bottom: 80px; width: 100%; height: 4px; background: #2ecc71;"></div>

        <!-- Input Area -->
        <div style="position: absolute; bottom: 0; width: 100%; height: 80px; background: #222; display:flex; align-items:center; justify-content:center; padding: 0 10px;">
            <input type="text" id="met-input" placeholder="Tippe hier..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" 
                style="width: 100%; max-width: 300px; padding: 10px; border-radius: 8px; border: 2px solid #3498db; font-size: 1.5rem; text-align:center;">
        </div>
      </div>
    `;let d=e.querySelector(`#met-game-area`),f=e.querySelector(`#met-input`),p=e.querySelector(`#met-score`),m=e.querySelector(`#met-lives`),h=0,g;function _(t){if(!o)return;o=!1,cancelAnimationFrame(g),f.blur();let r=e.querySelector(`#met-overlay`);r.style.display=`flex`,r.innerHTML=`<h2 style="color:white">${t?`Erde gerettet! 🌍`:`Game Over 💥`}</h2>`,setTimeout(()=>{n({correct:t||s>=a.length*.8,partial:!t&&s>0,score:Math.round(s/a.length*100),details:{lives:u,score:s}})},1500)}function v(){if(!o||h>=a.length)return;let e=a[h];h++;let t=document.createElement(`div`);t.innerHTML=`<span class="met-typed" style="color: #f1c40f;"></span><span class="met-untyped" style="color: white;">${e}</span>`;let n=10+Math.random()*60;Object.assign(t.style,{position:`absolute`,top:`-40px`,left:`${n}%`,padding:`5px 15px`,background:`#e74c3c`,borderRadius:`8px`,fontWeight:`bold`,fontSize:`1.2rem`,boxShadow:`0 4px 15px #e74c3c`,transition:`none`}),d.appendChild(t),l.push({el:t,word:e,posY:-40,speed:.5+Math.random()*.5})}function y(){if(o){(l.length===0||l.length<2&&Math.random()<.01)&&v();for(let e=l.length-1;e>=0;e--){let t=l[e];t.posY+=t.speed,t.el.style.top=`${t.posY}px`;let n=d.clientHeight;if(t.posY>n-30)if(t.el.remove(),l.splice(e,1),u--,m.textContent=`❤️`.repeat(Math.max(0,u)),d.style.background=`rgba(231, 76, 60, 0.3)`,setTimeout(()=>d.style.background=`transparent`,200),u<=0){_(!1);return}else h>=a.length&&l.length===0&&_(s>0)}if(c.length>0){let e=!1;l.forEach(t=>{t.word.toLowerCase().startsWith(c.toLowerCase())?(e=!0,t.el.querySelector(`.met-typed`).textContent=t.word.substring(0,c.length),t.el.querySelector(`.met-untyped`).textContent=t.word.substring(c.length),c.toLowerCase()===t.word.toLowerCase()&&(s++,p.textContent=s,t.el.style.background=`white`,t.el.style.boxShadow=`0 0 20px white`,t.el.style.transform=`scale(1.5)`,t.el.style.opacity=`0`,setTimeout(()=>t.el.remove(),200),l=l.filter(e=>e!==t),c=``,f.value=``,h>=a.length&&l.length===0&&_(!0))):(t.el.querySelector(`.met-typed`).textContent=``,t.el.querySelector(`.met-untyped`).textContent=t.word)}),e?f.style.borderColor=`#3498db`:f.style.borderColor=`#e74c3c`}else l.forEach(e=>{e.el.querySelector(`.met-typed`).textContent=``,e.el.querySelector(`.met-untyped`).textContent=e.word}),f.style.borderColor=`#3498db`;g=requestAnimationFrame(y)}}f.addEventListener(`input`,e=>{c=e.target.value.trim()}),e.querySelector(`#met-start-btn`).addEventListener(`click`,()=>{e.querySelector(`#met-overlay`).style.display=`none`,o=!0,f.focus(),y()}),d.addEventListener(`click`,()=>{o&&f.focus()})}},"article-cannon":{id:`article-cannon`,name_de:`Artikel-Kanone`,topics:[`artikel`],setup(e,t,n){let r=t.content,i=[];if(r.quizSets){let e=r.quizSets;Array.isArray(e)&&e[0]&&e[0].questions?i=e[0].questions:Array.isArray(e)&&(i=e)}(!i||i.length===0)&&(i=[{word:`Haus`,correct:`das`},{word:`Baum`,correct:`der`},{word:`Katze`,correct:`die`}]);let a=[...i].sort(()=>Math.random()-.5).slice(0,5),o=!1,s=0,c=0,l=null,u=null,d;e.innerHTML=`
      <div class="cannon-container" style="position: relative; width: 100%; height: 60vh; max-height: 500px; background: #87CEEB; border-radius: 16px; overflow: hidden; touch-action: none; user-select: none;">
        
        <!-- Score -->
        <div style="position: absolute; top: 10px; left: 10px; color: #2c3e50; z-index: 10; font-family: 'Fredoka One', cursive; text-shadow: 1px 1px 0px white;">
           <div>Treffer: <span id="can-score">0</span>/${a.length}</div>
        </div>

        <!-- Overlay -->
        <div id="can-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.6); z-index: 50; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <p style="color: white; font-size: 1.5rem; text-align: center; font-family: 'Fredoka One';">Feuere den richtigen<br>Artikel ab!</p>
            <button id="can-start-btn" class="btn btn-primary btn-lg mt-3">Start</button>
        </div>

        <div id="can-game-area" style="position: absolute; inset: 0; overflow: hidden;"></div>

        <!-- Cannon Base structure -->
        <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 100px; background: #34495e; display: flex; justify-content: center; align-items: flex-end; padding-bottom: 20px;">
           <div style="width: 150px; height: 60px; background: #2c3e50; border-radius: 30px 30px 0 0; position: relative;">
              <!-- Cannon barrel -->
              <div id="can-barrel" style="width: 20px; height: 50px; background: #7f8c8d; position: absolute; top: -30px; left: 65px; transform-origin: bottom center; border-radius: 10px;"></div>
           </div>
        </div>

        <!-- Firing Buttons -->
        <div style="position: absolute; bottom: 15px; left: 0; width: 100%; display: flex; justify-content: center; gap: 20px;">
           <button class="fire-btn" data-art="der" style="width:60px; height:60px; border-radius:50%; font-weight:bold; font-size:1.2rem; background:#3498db; color:white; border:3px solid #2980b9;">der</button>
           <button class="fire-btn" data-art="die" style="width:60px; height:60px; border-radius:50%; font-weight:bold; font-size:1.2rem; background:#e74c3c; color:white; border:3px solid #c0392b;">die</button>
           <button class="fire-btn" data-art="das" style="width:60px; height:60px; border-radius:50%; font-weight:bold; font-size:1.2rem; background:#2ecc71; color:white; border:3px solid #27ae60;">das</button>
        </div>
      </div>
    `;let f=e.querySelector(`#can-game-area`),p=e.querySelector(`#can-barrel`),m=e.querySelector(`#can-score`);function h(){o=!1,cancelAnimationFrame(d);let t=e.querySelector(`#can-overlay`);t.style.display=`flex`,t.innerHTML=`<h2 style="color:white">Fertig! [Ziel getroffen]</h2>`,setTimeout(()=>{let e=s/a.length*100;n({correct:e>=80,partial:e>=50&&e<80,score:Math.round(e),details:{score:s,total:a.length}})},1500)}function g(){if(c>=a.length){h();return}let e=a[c];l=document.createElement(`div`),l.textContent=e.word,l.dataset.correct=e.correct,Object.assign(l.style,{position:`absolute`,top:`40px`,left:`-100px`,padding:`10px 20px`,background:`#f39c12`,color:`white`,borderRadius:`20px`,fontWeight:`bold`,fontSize:`1.5rem`,boxShadow:`0 4px 8px rgba(0,0,0,0.2)`,whiteSpace:`nowrap`}),f.appendChild(l),l.x=-100,l.speed=1.5+Math.random(),l.direction=1,p.style.transform=`rotate(0deg)`}function _(){if(o){if(l){l.x+=l.speed*l.direction,l.style.left=l.x+`px`;let e=f.clientWidth,t=l.clientWidth;l.x>e-t?l.direction=-1:l.x<0&&l.direction===-1&&(l.direction=1);let n=l.x+t/2-e/2,r=f.clientHeight-parseFloat(l.style.top),i=180/Math.PI*Math.atan2(n,r);if(p.style.transform=`rotate(`+i+`deg)`,u){u.y-=u.speed,u.x+=u.vx,u.el.style.top=u.y+`px`,u.el.style.left=u.x+`px`;let e=u.x,n=u.y,r=l.x,i=parseFloat(l.style.top),a=t,o=l.clientHeight;if(e>r&&e<r+a&&n>i&&n<i+o){u.el.textContent===l.dataset.correct?(s++,m.textContent=s,l.style.background=`#2ecc71`):l.style.background=`#e74c3c`,l.textContent=l.dataset.correct+` `+l.textContent,u.el.remove(),u=null;let e=l;l=null,c++,setTimeout(()=>{e.remove(),g()},1e3)}else n<-50&&(u.el.remove(),u=null)}}d=requestAnimationFrame(_)}}e.querySelectorAll(`.fire-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(!o||!l||u)return;let t=e.dataset.art,n=document.createElement(`div`);n.textContent=t,Object.assign(n.style,{position:`absolute`,top:f.clientHeight-80+`px`,left:f.clientWidth/2-20+`px`,width:`40px`,height:`40px`,background:e.style.background,color:`white`,borderRadius:`50%`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:`bold`,fontSize:`14px`,zIndex:20}),f.appendChild(n);let r=p.style.transform,i=0;r.includes(`rotate(`)&&(i=parseFloat(r.split(`rotate(`)[1]));let a=Math.PI/180*i;u={el:n,x:f.clientWidth/2-20,y:f.clientHeight-80,speed:10,vx:Math.sin(a)*10}})}),e.querySelector(`#can-start-btn`).addEventListener(`click`,()=>{e.querySelector(`#can-overlay`).style.display=`none`,o=!0,g(),_()})}},"sentence-train":{id:`sentence-train`,name_de:`Satz-Zug`,topics:[`satzbau`],setup(e,t,n){let r=t.content,i=[];i=r.sentenceOrder?r.sentenceOrder:[[`Der`,`Hund`,`bellt`,`laut`,`.`],[`Ich`,`gehe`,`in`,`die`,`Schule`,`.`]];let a=[...i[Math.floor(Math.random()*i.length)]],o=[...a].sort(()=>Math.random()-.5);for(;JSON.stringify(o)===JSON.stringify(a)&&a.length>1;)o=[...a].sort(()=>Math.random()-.5);let s=[];e.innerHTML=`
      <div class="train-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <p style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-lg);">
          Belade den Zug in der richtigen Reihenfolge!
        </p>

        <!-- Train Track & Wagons -->
        <div style="background: #ecf0f1; border-bottom: 4px solid #7f8c8d; padding: 20px 10px; min-height: 120px; display: flex; align-items: flex-end; gap: 5px; flex-wrap: wrap; margin-bottom: var(--space-xl); border-radius: 8px;">
            <div style="font-size: 3rem; margin-right: 10px;">🚂</div>
            <div id="train-wagons" style="display: flex; gap: 5px; flex-wrap: wrap; align-items: flex-end;"></div>
        </div>

        <!-- Word Bank (Cargo) -->
        <div id="cargo-area" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: var(--space-xl);">
            ${o.map((e,t)=>`
                <button class="cargo-btn btn btn-secondary" data-word="${e.replace(/"/g,`&quot;`)}" style="font-size: 1.2rem; padding: 10px 20px; border-radius: 8px; box-shadow: 0 4px 0 var(--color-secondary-dark);">
                    📦 ${e}
                </button>
            `).join(``)}
        </div>

        <!-- Submit Switch -->
        <button id="train-submit" class="btn btn-primary btn-lg" style="width: 100%; max-width: 300px; display:none;">
            Abfahrt! 🚦
        </button>
      </div>
    `;let c=e.querySelector(`#train-wagons`);e.querySelector(`#cargo-area`);let l=e.querySelector(`#train-submit`);function u(){c.innerHTML=s.map((e,t)=>`
            <div class="wagon-item" data-idx="${t}" style="background: #3498db; color: white; padding: 10px 15px; border-radius: 4px 4px 0 0; font-weight: bold; border: 2px solid #2980b9; cursor: pointer; position:relative;">
                ${e}
                <div style="position:absolute; bottom: -8px; left: 10px; width:10px; height:10px; background:#333; border-radius:50%;"></div>
                <div style="position:absolute; bottom: -8px; right: 10px; width:10px; height:10px; background:#333; border-radius:50%;"></div>
            </div>
        `).join(``),e.querySelectorAll(`.wagon-item`).forEach(t=>{t.addEventListener(`click`,()=>{let n=s.splice(t.dataset.idx,1)[0],r=e.querySelector(`.cargo-btn[data-word="${n.replace(/"/g,`\\"`)}"]`);r&&(r.style.visibility=`visible`),u()})}),s.length===a.length?l.style.display=`inline-block`:l.style.display=`none`}e.querySelectorAll(`.cargo-btn`).forEach(e=>{e.addEventListener(`click`,()=>{s.push(e.dataset.word),e.style.visibility=`hidden`,u()})}),l.addEventListener(`click`,()=>{let t=JSON.stringify(s)===JSON.stringify(a);t?e.querySelectorAll(`.wagon-item`).forEach(e=>e.style.background=`#2ecc71`):e.querySelectorAll(`.wagon-item`).forEach(e=>e.style.background=`#e74c3c`),setTimeout(()=>{n({correct:t,score:t?100:0})},1500)})}},"lie-detector":{id:`lie-detector`,name_de:`Lügen-Detektor`,topics:[`fehlerkorrektur`,`rechtschreibung`],setup(e,t,n){let r=t.content,i=[];i=r.pairs?r.pairs:[{correct:`Fahrrad`,wrong:`Farad`},{correct:`Katze`,wrong:`Kaze`}];let a=i[Math.floor(Math.random()*i.length)],o=Math.random()>.5;e.innerHTML=`
      <div class="liedetector-container" style="padding: var(--space-lg); text-align: center; user-select:none;">
        <div style="font-size: 4rem; margin-bottom: 20px;">📠</div>
        <p style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-md);">
          Der Detektor analysiert das Wort... Ist dieses Wort richtig geschrieben?
        </p>

        <div style="background: #2c3e50; color: #2ecc71; font-family: monospace; font-size: 2.5rem; padding: 20px; border-radius: 8px; margin-bottom: var(--space-xl); border: 4px solid #34495e; box-shadow: inset 0 0 10px black;">
            > ${o?a.correct||a.word:a.wrong} <
        </div>

        <div style="display: flex; gap: 20px; justify-content: center;">
            <button class="btn truth-btn" data-ans="wahr" style="width:120px; height:120px; border-radius:50%; background:#2ecc71; color:white; font-size:1.5rem; font-weight:bold; border: 5px solid #27ae60; box-shadow: 0 10px 0 #27ae60;">
                WAHR ✅
            </button>
            <button class="btn lie-btn" data-ans="luege" style="width:120px; height:120px; border-radius:50%; background:#e74c3c; color:white; font-size:1.5rem; font-weight:bold; border: 5px solid #c0392b; box-shadow: 0 10px 0 #c0392b;">
                LÜGE ❌
            </button>
        </div>
      </div>
    `,e.querySelectorAll(`.btn`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.dataset.ans===`wahr`===o;t.style.transform=`translateY(10px)`,t.style.boxShadow=`none`,e.querySelectorAll(`.btn`).forEach(e=>e.style.pointerEvents=`none`);let i=e.querySelector(`div[style*="font-family: monospace"]`);r?(i.style.color=`#2ecc71`,i.innerHTML=`> KORREKT! <`):(i.style.color=`#e74c3c`,i.innerHTML=`> FALSCH! <br><span style="font-size:1.2rem;">Richtig: ${a.correct||a.word}</span>`),setTimeout(()=>{n({correct:r,score:r?100:0})},2e3)})})}},"teakettle-detective":{id:`teakettle-detective`,name_de:`Teekesselchen`,topics:[`wortschatz`],setup(e,t,n){let r=[{word:`Bank`,clue1:`Man kann sich darauf setzen.`,clue2:`Man holt dort Geld ab.`,distractors:[`Stuhl`,`Kasse`,`Bett`]},{word:`Schloss`,clue1:`Eine Prinzessin wohnt darin.`,clue2:`Man schließt damit eine Tür ab.`,distractors:[`Schlüssel`,`Märchen`,`Haus`]},{word:`Maus`,clue1:`Ein kleines Tier mit langem Schwanz.`,clue2:`Ein Gerät für den Computer.`,distractors:[`Ratte`,`Tastatur`,`Kabel`]},{word:`Schlange`,clue1:`Ein langes, kriechendes Tier.`,clue2:`Menschen stehen dort an der Kasse.`,distractors:[`Seil`,`Wurm`,`Reihe`]}],i=r[Math.floor(Math.random()*r.length)],a=[i.word,...i.distractors].sort(()=>Math.random()-.5);e.innerHTML=`
      <div class="teakettle-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🕵️‍♂️ ☕</div>
        <p style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-xl);">
          Mein Teekesselchen ist...
        </p>

        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom: 30px;">
            <div style="background:#f1c40f; padding: 15px; border-radius:8px; font-weight:bold; font-size:1.2rem; color:#d35400;">1. ${i.clue1}</div>
            <div style="background:#e67e22; padding: 15px; border-radius:8px; font-weight:bold; font-size:1.2rem; color:#fff;">2. ${i.clue2}</div>
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            ${a.map(e=>`
                <button class="btn tk-btn" data-word="${e}" style="font-size:1.2rem; padding:15px 30px; border-radius:20px; background:#34495e; color:white; border:none; box-shadow: 0 4px 0 #2c3e50;">
                    ${e}
                </button>
            `).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.tk-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.dataset.word===i.word;if(t.style.transform=`translateY(4px)`,t.style.boxShadow=`none`,r)t.style.background=`#2ecc71`;else{t.style.background=`#e74c3c`;let n=e.querySelector(`.tk-btn[data-word="${i.word}"]`);n&&(n.style.border=`3px solid #2ecc71`)}e.querySelectorAll(`.tk-btn`).forEach(e=>e.style.pointerEvents=`none`),setTimeout(()=>{n({correct:r,score:r?100:0})},1500)})})}},cryptogram:{id:`cryptogram`,name_de:`Geheimcode`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[`AUTO`,`HAUS`,`BAUM`,`MAUS`,`BUCH`,`HUND`,`ZUG`],i=[`🍎`,`🍌`,`🍒`,`🐶`,`⚽`,`⏰`,`🌙`,`⭐`,`🎈`],a=r[Math.floor(Math.random()*r.length)],o={},s=[...new Set([...a])],c=[...i].sort(()=>Math.random()-.5);s.forEach((e,t)=>{o[e]=c[t]});let l=[...a].map(e=>o[e]),u=[a,...r.filter(e=>e!==a).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);e.innerHTML=`
      <div class="crypto-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🕵️‍♀️ 📝</div>
        <p style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-lg);">
          Entschlüssle das Geheimwort!
        </p>

        <!-- Cipher Legend -->
        <div style="display:flex; justify-content:center; gap: 15px; margin-bottom: 20px; flex-wrap: wrap;">
            ${s.map(e=>`
                <div style="background:#ecf0f1; padding: 5px 10px; border-radius: 8px; font-weight:bold; color:#2c3e50;">
                    ${o[e]} = ${e}
                </div>
            `).join(``)}
        </div>

        <!-- Encrypted Word -->
        <div style="font-size: 3rem; margin-bottom: 40px; letter-spacing: 10px; background: rgba(0,0,0,0.05); padding: 20px; border-radius: 12px;">
            ${l.join(``)}
        </div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            ${u.map(e=>`
                <button class="btn cry-btn" data-word="${e}" style="font-size:1.4rem; padding:15px 30px; border-radius:8px; background:#9b59b6; color:white; border:none; font-family:'Fredoka One', cursive;">
                    ${e}
                </button>
            `).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.cry-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.dataset.word===a;r?t.style.background=`#2ecc71`:t.style.background=`#e74c3c`,e.querySelectorAll(`.cry-btn`).forEach(e=>e.style.pointerEvents=`none`),setTimeout(()=>{n({correct:r,score:r?100:0})},1500)})})}},"word-balance":{id:`word-balance`,name_de:`Wort-Waage`,topics:[`wortschatz`,`adjektive`],setup(e,t,n){let r=[{word:`heiß`,opposite:`kalt`,distractors:[`gelb`,`laut`,`groß`]},{word:`schnell`,opposite:`langsam`,distractors:[`traurig`,`klein`,`böse`]},{word:`hell`,opposite:`dunkel`,distractors:[`süß`,`hart`,`schön`]},{word:`gut`,opposite:`böse`,distractors:[`neu`,`weich`,`kalt`]},{word:`groß`,opposite:`klein`,distractors:[`hell`,`schnell`,`sauer`]}],i=r[Math.floor(Math.random()*r.length)],a=[i.opposite,...i.distractors].sort(()=>Math.random()-.5);e.innerHTML=`
      <div class="balance-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <p style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-lg);">
          Bringe die Waage mit dem exakten <b>Gegenteil</b> ins Gleichgewicht!
        </p>

        <!-- Balance Scale Visual -->
        <div style="display:flex; justify-content: space-around; margin-bottom: 10px; align-items:flex-end; height: 100px;">
            <div style="background:#e74c3c; color:white; padding: 20px; border-radius: 50%; width: 100px; height: 100px; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:1.5rem; transform: translateY(20px);">
                ${i.word}
            </div>
            <div id="target-scale" style="background:rgba(0,0,0,0.1); border: 2px dashed #95a5a6; color:#7f8c8d; padding: 20px; border-radius: 50%; width: 100px; height: 100px; display:flex; align-items:center; justify-content:center; font-size:2rem; transform: translateY(-20px);">
                ?
            </div>
        </div>
        
        <div style="width:100%; max-width:300px; height:4px; background:#7f8c8d; margin: 0 auto 40px auto; transform: rotate(10deg);"></div>

        <div style="display: flex; gap: 10px; flex-wrap: wrap; justify-content: center;">
            ${a.map(e=>`
                <button class="btn bal-btn" data-word="${e}" style="font-size:1.2rem; padding:12px 24px; border-radius:8px; background:#3498db; color:white; border:none; box-shadow: 0 4px 0 #2980b9;">
                    ${e}
                </button>
            `).join(``)}
        </div>
      </div>
    `,e.querySelectorAll(`.bal-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.dataset.word===i.opposite,a=e.querySelector(`#target-scale`);a.textContent=t.dataset.word,a.style.background=r?`#2ecc71`:`#e74c3c`,a.style.color=`white`,a.style.border=`none`;let o=e.querySelector(`div[style*="rotate(10deg)"]`);r&&(o.style.transform=`rotate(0deg)`,o.style.transition=`transform 0.5s ease`,a.style.transform=`translateY(20px)`,a.style.transition=`transform 0.5s ease`),e.querySelectorAll(`.bal-btn`).forEach(e=>e.style.pointerEvents=`none`),setTimeout(()=>{n({correct:r,score:r?100:0})},1800)})})}},"memory-chain":{id:`memory-chain`,name_de:`Koffer packen`,topics:[`wortschatz`,`konzentration`],setup(e,t,n){let r=[`Apfel`,`Banane`,`Brille`,`Buch`,`Hund`,`Katze`,`Ball`,`Schuh`,`Tisch`,`Stuhl`,`Sonne`,`Mond`].sort(()=>Math.random()-.5).slice(0,6),i=[],a=[],o=1,s=!1;e.innerHTML=`
      <div class="mem-container" style="padding: var(--space-md); text-align: center; user-select:none; max-width: 600px; margin: 0 auto;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🧳</div>
        <p id="mem-status" style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-lg); font-weight: bold;">
          Merke dir die Reihenfolge!
        </p>

        <div id="mem-display" style="height: 100px; display:flex; align-items:center; justify-content:center; font-size: 2.5rem; font-weight:bold; color: #2980b9; background:#ecf0f1; border-radius:12px; margin-bottom: 20px;">
            ...
        </div>

        <div id="mem-buttons" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; opacity: 0.5; pointer-events: none;">
            ${r.map(e=>`
                <button class="mem-btn" data-word="${e}" style="padding: 15px 5px; font-size: 1.1rem; border-radius: 8px; background: #34495e; color: white; border: none; box-shadow: 0 4px 0 #2c3e50; transition: transform 0.1s;">
                    ${e}
                </button>
            `).join(``)}
        </div>
      </div>
    `;let c=e.querySelector(`#mem-display`),l=e.querySelector(`#mem-buttons`),u=e.querySelector(`#mem-status`);function d(){i.push(r[Math.floor(Math.random()*r.length)]),a=[],s=!0,l.style.opacity=`0.5`,l.style.pointerEvents=`none`,u.textContent=`Merken...`;let e=0;c.textContent=`...`;let t=setInterval(()=>{if(e>=i.length){clearInterval(t),c.textContent=`?`,s=!1,l.style.opacity=`1`,l.style.pointerEvents=`auto`,u.textContent=`Jetzt du! (1/`+i.length+`)`;return}c.textContent=``,setTimeout(()=>{c.textContent=i[e],e++},200)},1200)}e.querySelectorAll(`.mem-btn`).forEach(e=>{e.addEventListener(`click`,()=>{if(s)return;e.style.transform=`translateY(4px)`,e.style.boxShadow=`none`,setTimeout(()=>{e.style.transform=`none`,e.style.boxShadow=`0 4px 0 #2c3e50`},100);let t=e.dataset.word;if(a.push(t),i[a.length-1]!==t){u.textContent=`FALSCH!`,u.style.color=`#e74c3c`,c.textContent=`💥`,l.style.pointerEvents=`none`,setTimeout(()=>{n({correct:!1,score:o/4*100})},1500);return}u.textContent=`Jetzt du! (`+a.length+`/`+i.length+`)`,a.length===i.length&&(u.textContent=`Richtig! Nächste Runde...`,u.style.color=`#2ecc71`,c.textContent=`✅`,l.style.pointerEvents=`none`,l.style.opacity=`0.5`,setTimeout(()=>{o>=4?n({correct:!0,score:100}):(o++,u.style.color=`var(--text-secondary)`,d())},1500))})}),setTimeout(d,1e3)}},"abc-bubbles":{id:`abc-bubbles`,name_de:`ABC-Blasen`,topics:[`alphabet`,`konzentration`],setup(e,t,n){let r=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``),i=Math.floor(Math.random()*(r.length-5)),a=r.slice(i,i+5),o=0,s=!1;e.innerHTML=`
      <div class="bubbles-container" style="position: relative; width: 100%; height: 60vh; max-height: 500px; background: linear-gradient(to top, #3498db, #ecf0f1); border-radius: 16px; overflow: hidden; touch-action: none;">
        
        <!-- Target tracker -->
        <div style="position: absolute; top: 10px; width:100%; text-align:center; z-index: 10; font-family: 'Fredoka One', cursive;">
            <div style="background: rgba(255,255,255,0.7); display:inline-block; padding: 5px 15px; border-radius: 20px;">
                Nächster Buchstabe: <span id="bbl-target" style="font-size: 1.5rem; color: #e74c3c;">${a[o]}</span>
            </div>
        </div>

        <!-- Overlay -->
        <div id="bbl-overlay" style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); z-index: 50; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <p style="color: white; font-size: 1.5rem; text-align: center; font-family: 'Fredoka One';">Zerplatze die Blasen<br>im ABC!</p>
            <p style="color: yellow; text-align:center; margin-bottom: 20px;">${a.join(` ➔ `)}</p>
            <button id="bbl-start-btn" class="btn btn-primary btn-lg">Start</button>
        </div>

        <div id="bbl-game-area" style="position: absolute; inset: 0; overflow: hidden;"></div>
      </div>
    `;let c=e.querySelector(`#bbl-game-area`),l=e.querySelector(`#bbl-target`),u=[];function d(e,t){if(!s)return;let r=document.createElement(`div`);r.textContent=e;let i=60+Math.random()*20,d=10+Math.random()*70;Object.assign(r.style,{position:`absolute`,bottom:`-100px`,left:`${d}%`,width:`${i}px`,height:`${i}px`,borderRadius:`50%`,background:`rgba(255, 255, 255, 0.4)`,border:`2px solid rgba(255, 255, 255, 0.8)`,boxShadow:`inset -5px -5px 15px rgba(255,255,255,0.5), 0 0 10px rgba(0,0,0,0.1)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`,fontWeight:`bold`,color:`#2c3e50`,cursor:`pointer`,userSelect:`none`,backdropFilter:`blur(2px)`}),c.appendChild(r);let f={el:r,y:-100,speed:1+Math.random()*1.5,letter:e,wobble:Math.random()*2,life:0,isCorrect:t};u.push(f),r.addEventListener(`pointerdown`,t=>{t.preventDefault(),s&&(e===a[o]?(o++,r.style.transform=`scale(1.5)`,r.style.opacity=`0`,r.style.transition=`all 0.2s`,setTimeout(()=>r.remove(),200),u=u.filter(e=>e!==f),o>=a.length?(s=!1,l.textContent=`🎉`,setTimeout(()=>n({correct:!0,score:100}),1e3)):l.textContent=a[o]):(r.style.background=`rgba(231, 76, 60, 0.6)`,setTimeout(()=>{r.parentNode&&(r.style.background=`rgba(255, 255, 255, 0.4)`)},300)))})}function f(){if(s){for(let t=u.length-1;t>=0;t--){let r=u[t];r.y+=r.speed,r.life+=.05;let i=Math.sin(r.life*r.wobble)*10;if(r.el.style.transform=`translate(${i}px, ${-r.y}px)`,r.y>e.clientHeight+150&&(r.el.remove(),u.splice(t,1),r.letter===a[o])){s=!1,setTimeout(()=>n({correct:!1,score:0}),500);return}}if(Math.random()<.02&&u.length<5)if(!u.some(e=>e.letter===a[o]))d(a[o],!0);else{let e=r[Math.floor(Math.random()*r.length)];d(e,!1)}requestAnimationFrame(f)}}e.querySelector(`#bbl-start-btn`).addEventListener(`click`,()=>{e.querySelector(`#bbl-overlay`).style.display=`none`,s=!0,f()})}},"syllable-dj":{id:`syllable-dj`,name_de:`Silben-DJ`,topics:[`silben`,`wortschatz`],setup(e,t,n){let r=[{word:`Katze`,syllables:[`Kat`,`ze`]},{word:`Auto`,syllables:[`Au`,`to`]},{word:`Schule`,syllables:[`Schu`,`le`]},{word:`Garten`,syllables:[`Gar`,`ten`]}],i=r[Math.floor(Math.random()*r.length)],a=r.map(e=>e.syllables[0]).sort(()=>Math.random()-.5),o=r.map(e=>e.syllables[1]).sort(()=>Math.random()-.5),s=a.indexOf(i.syllables[0]),c=o.indexOf(i.syllables[1]);e.innerHTML=`
      <div class="dj-container" style="padding: var(--space-md); text-align: center; user-select:none; max-width: 600px; margin: 0 auto;">
        <div style="font-size: 3rem; margin-bottom: 10px;">🎧💿</div>
        <p style="font-size: var(--font-size-md); color: var(--text-secondary); margin-bottom: var(--space-lg);">
          Drehe die Platten, um ein Wort zu mischen!
        </p>

        <div style="display:flex; justify-content:center; gap: 20px; align-items:center; margin-bottom: 30px;">
            <!-- Turntable 1 -->
            <div style="display:flex; flex-direction:column; align-items:center;">
                <button id="up1" class="btn btn-secondary" style="margin-bottom:10px;">▲</button>
                <div style="width: 120px; height: 120px; border-radius:50%; background:#2c3e50; border: 5px solid #34495e; display:flex; align-items:center; justify-content:center; color:white; font-size:2rem; font-weight:bold; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                    <span id="syl1">${a[s]}</span>
                </div>
                <button id="down1" class="btn btn-secondary" style="margin-top:10px;">▼</button>
            </div>
            
            <div style="font-size: 2rem; color: #7f8c8d;">+</div>

            <!-- Turntable 2 -->
            <div style="display:flex; flex-direction:column; align-items:center;">
                <button id="up2" class="btn btn-secondary" style="margin-bottom:10px;">▲</button>
                <div style="width: 120px; height: 120px; border-radius:50%; background:#e74c3c; border: 5px solid #c0392b; display:flex; align-items:center; justify-content:center; color:white; font-size:2rem; font-weight:bold; box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
                    <span id="syl2">${o[c]}</span>
                </div>
                <button id="down2" class="btn btn-secondary" style="margin-top:10px;">▼</button>
            </div>
        </div>

        <button id="dj-play" class="btn btn-primary btn-lg" style="width:200px;">Play! ▶️</button>
      </div>
    `;let l=e.querySelector(`#syl1`),u=e.querySelector(`#syl2`);e.querySelector(`#up1`).addEventListener(`click`,()=>{s=(s+1)%a.length,l.textContent=a[s]}),e.querySelector(`#down1`).addEventListener(`click`,()=>{s=(s-1+a.length)%a.length,l.textContent=a[s]}),e.querySelector(`#up2`).addEventListener(`click`,()=>{c=(c+1)%o.length,u.textContent=o[c]}),e.querySelector(`#down2`).addEventListener(`click`,()=>{c=(c-1+o.length)%o.length,u.textContent=o[c]}),e.querySelector(`#dj-play`).addEventListener(`click`,()=>{let t=l.textContent+u.textContent;r.find(e=>e.word===t)?(e.querySelector(`#dj-play`).style.background=`#2ecc71`,e.querySelector(`#dj-play`).textContent=`Hit! 🎶`,setTimeout(()=>n({correct:!0,score:100}),1500)):(e.querySelector(`#dj-play`).style.background=`#e74c3c`,e.querySelector(`#dj-play`).textContent=`Aua! 💥`,setTimeout(()=>{e.querySelector(`#dj-play`).style.background=``,e.querySelector(`#dj-play`).textContent=`Play! ▶️`,n({correct:!1,score:0})},1e3))})}},"hidden-object":{id:`hidden-object`,name_de:`Wimmelbild`,topics:[`lesen`,`wortschatz`,`adjektive`],setup(e,t,n){let r=[{image:`url(#temp)`,items:[{id:`bird`,name:`den kleinen, blauen Vogel`,x:20,y:30,w:10,h:10,color:`blue`,shape:`50%`},{id:`car`,name:`das rote Auto`,x:70,y:70,w:20,h:15,color:`red`,shape:`8px`},{id:`sun`,name:`die gelbe Sonne`,x:80,y:10,w:15,h:15,color:`yellow`,shape:`50%`}]}],i=r[Math.floor(Math.random()*r.length)],a=i.items[Math.floor(Math.random()*i.items.length)],o=!1;e.innerHTML=`
      <div class="hidden-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <div style="background: rgba(255,255,255,0.8); padding: 10px 20px; border-radius: 20px; display:inline-block; margin-bottom: 20px; border: 3px solid #3498db; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
            <p style="font-size: 1.5rem; font-weight: bold; margin: 0; color: #2c3e50;">
                Finde <b><span style="color:#e74c3c;">${a.name}</span></b>!
            </p>
        </div>

        <div id="ho-scene" style="position: relative; width: 100%; height: 50vh; max-height: 400px; background: #ecf0f1; border-radius: 12px; overflow: hidden; border: 4px solid #7f8c8d; cursor: crosshair;">
            <!-- Dummy rendering of scene objects. Later replaced by one big background-image -->
            ${i.items.map(e=>`
                <div class="ho-item" data-id="${e.id}" style="
                    position: absolute; 
                    left: ${e.x}%; 
                    top: ${e.y}%; 
                    width: ${e.w}%; 
                    height: ${e.h}%; 
                    background: ${e.color}; 
                    border-radius: ${e.shape};
                    opacity: 0.8;
                    box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                "></div>
            `).join(``)}
        </div>
      </div>
    `;let s=e.querySelector(`#ho-scene`);s.addEventListener(`click`,e=>{if(o)return;let t=e.target.closest(`.ho-item`);if(t)if(t.dataset.id===a.id){o=!0;let e=document.createElement(`div`);Object.assign(e.style,{position:`absolute`,left:t.style.left,top:t.style.top,width:t.style.width,height:t.style.height,border:`5px solid #2ecc71`,borderRadius:`50%`,transform:`scale(1.5)`,animation:`pulse 1s infinite`}),s.appendChild(e),setTimeout(()=>n({correct:!0,score:100}),1500)}else s.style.animation=`shake 0.3s`,setTimeout(()=>s.style.animation=``,300);else{let t=e.offsetX,n=e.offsetY,r=document.createElement(`div`);r.textContent=`❌`,Object.assign(r.style,{position:`absolute`,left:`${t}px`,top:`${n}px`,transform:`translate(-50%, -50%)`,fontSize:`2rem`,opacity:`0.8`}),s.appendChild(r),setTimeout(()=>r.remove(),1e3)}})}},"adjective-painter":{id:`adjective-painter`,name_de:`Adjektiv-Maler`,topics:[`lesen`,`adjektive`],setup(e,t,n){let r=[{sentence:`Male das Dach rot an.`,target:`dach`,color:`red`},{sentence:`Male die Tür blau an.`,target:`tuer`,color:`blue`},{sentence:`Male den Himmel gelb an.`,target:`himmel`,color:`yellow`}],i=r[Math.floor(Math.random()*r.length)],a=[`red`,`blue`,`yellow`,`green`,`purple`].sort(()=>Math.random()-.5),o=!1;e.innerHTML=`
      <div class="painter-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <div style="font-size: 1.5rem; margin-bottom: 20px; font-weight: bold; padding: 15px; background: white; border-radius: 8px; border: 3px solid #34495e;">
            ${i.sentence}
        </div>

        <!-- Canvas Area (Mock SVG for now) -->
        <div style="position:relative; width: 100%; max-width: 400px; height: 300px; margin: 0 auto 30px auto; border: 4px solid #bdc3c7; background: #fff; border-radius: 8px; overflow: hidden;">
            <svg viewBox="0 0 100 100" style="width: 100%; height: 100%;">
                <!-- Himmel -->
                <rect class="paint-target" data-id="himmel" x="0" y="0" width="100" height="50" fill="transparent" stroke="#000" stroke-width="1" />
                <!-- Haus -->
                <rect x="20" y="50" width="60" height="50" fill="transparent" stroke="#000" stroke-width="1" />
                <!-- Tür -->
                <rect class="paint-target" data-id="tuer" x="40" y="65" width="20" height="35" fill="transparent" stroke="#000" stroke-width="1" />
                <!-- Dach -->
                <polygon class="paint-target" data-id="dach" points="10,50 50,20 90,50" fill="transparent" stroke="#000" stroke-width="1" />
            </svg>
        </div>

        <!-- Color Palette -->
        <div style="display: flex; gap: 15px; justify-content: center; align-items:center;">
            ${a.map(e=>`
                <div class="color-drop" data-color="${e}" style="width: 50px; height: 50px; border-radius: 50%; background: ${e}; border: 3px solid #ecf0f1; box-shadow: 0 4px 6px rgba(0,0,0,0.2); cursor: pointer; transition: transform 0.2s;"></div>
            `).join(``)}
        </div>
      </div>
    `;let s=null;e.querySelectorAll(`.color-drop`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.color-drop`).forEach(e=>e.style.transform=`none`),t.style.transform=`scale(1.3) translateY(-10px)`,s=t.dataset.color})}),e.querySelectorAll(`.paint-target`).forEach(e=>{e.addEventListener(`click`,()=>{o||!s||(e.setAttribute(`fill`,s),e.dataset.id===i.target&&s===i.color?(o=!0,setTimeout(()=>{n({correct:!0,score:100})},1500)):setTimeout(()=>{e.setAttribute(`fill`,`transparent`)},500))})})}},"difference-detective":{id:`difference-detective`,name_de:`Fehler-Suchbild`,topics:[`lesen`,`konzentration`],setup(e,t,n){e.innerHTML=`
      <div class="diff-container" style="padding: var(--space-md); text-align: center; user-select:none;">
        <div style="font-size: 1.2rem; background: #fff; padding: 15px; border-radius: 8px; border: 2px solid #bdc3c7; margin-bottom: 20px;">
           "Das Auto hat <b>2 gelbe Lichter</b>."
           <br><span style="font-size: 0.9rem; color: #7f8c8d;">Tippe auf den Fehler im UNTEREN Bild!</span>
        </div>

        <div style="display:flex; flex-direction:column; gap: 20px; align-items:center;">
            
            <!-- Original Image (Abstract representation) -->
            <div style="position:relative; width: 300px; height: 150px; background: #34495e; border-radius: 8px; overflow:hidden;">
                <div style="position:absolute; bottom: 20px; left: 100px; width: 100px; height: 40px; background: red; border-radius:10px;"></div>
                <!-- Lights -->
                <div style="position:absolute; bottom: 30px; left: 180px; width: 15px; height: 15px; background: yellow; border-radius:50%;"></div>
                <div style="position:absolute; bottom: 30px; left: 105px; width: 15px; height: 15px; background: yellow; border-radius:50%;"></div>
            </div>

            <!-- Altered Image -->
            <div id="diff-target" style="position:relative; width: 300px; height: 150px; background: #34495e; border-radius: 8px; overflow:hidden; cursor:crosshair;">
                <div style="position:absolute; bottom: 20px; left: 100px; width: 100px; height: 40px; background: red; border-radius:10px;"></div>
                <!-- Lights (one missing) -->
                <div style="position:absolute; bottom: 30px; left: 180px; width: 15px; height: 15px; background: yellow; border-radius:50%;"></div>
                <!-- Clickable error region -->
                <div id="error-spot" style="position:absolute; bottom: 10px; left: 85px; width: 50px; height: 50px; border-radius:50%; z-index: 10;"></div>
            </div>

        </div>
      </div>
    `;let r=!1,i=e.querySelector(`#diff-target`),a=e.querySelector(`#error-spot`);i.addEventListener(`click`,e=>{if(!r)if(e.target===a)r=!0,a.style.border=`4px solid #2ecc71`,a.style.background=`rgba(46, 204, 113, 0.4)`,setTimeout(()=>n({correct:!0,score:100}),1500);else{let t=e.offsetX,n=e.offsetY,r=document.createElement(`div`);r.textContent=`❌`,Object.assign(r.style,{position:`absolute`,left:`${t}px`,top:`${n}px`,transform:`translate(-50%, -50%)`,fontSize:`2rem`,opacity:`0.8`,pointerEvents:`none`}),i.appendChild(r),setTimeout(()=>r.remove(),1e3)}})}},"word-search-swipe":{id:`word-search-swipe`,name_de:`Buchstaben-Suppe`,topics:[`rechtschreibung`,`wortschatz`],setup(e,t,n){let r=[`HUND`,`KATZE`,`MAUS`,`BAUM`,`AUTO`],i=Array.from({length:9},()=>Array(9).fill(``)),a=[],o=[...r].sort(()=>Math.random()-.5).slice(0,3);for(let e of o){let t=!1;for(let n=0;n<50&&!t;n++){let n=Math.floor(Math.random()*9),r=Math.floor(Math.random()*(9-e.length)),o=!1;for(let t=0;t<e.length;t++)if(i[n][r+t]!==``&&i[n][r+t]!==e[t]){o=!0;break}if(!o){for(let t=0;t<e.length;t++)i[n][r+t]=e[t];a.push({word:e,row:n,col:r,dir:`h`,cells:e.split(``).map((e,t)=>`${n}-${r+t}`)}),t=!0}}}for(let e=0;e<9;e++)for(let t=0;t<9;t++)i[e][t]||(i[e][t]=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`[Math.floor(Math.random()*26)]);let s=new Set,c=[],l=!1;e.innerHTML=`
      <div style="padding:var(--space-sm); text-align:center; user-select:none; touch-action:none;">
        <p style="font-size:1rem; color:var(--text-secondary); margin-bottom:10px;">
          Suche: ${o.map(e=>`<b id="word-${e}" style="margin:0 5px;">${e}</b>`).join(``)}
        </p>
        <div id="ws-grid" style="display:inline-grid; grid-template-columns:repeat(9,1fr); gap:3px; background:#ecf0f1; padding:10px; border-radius:12px; cursor:crosshair;"></div>
        <div id="ws-progress" style="margin-top:10px; font-weight:bold; color:#2ecc71;"></div>
      </div>`;let u=e.querySelector(`#ws-grid`),d=[];for(let e=0;e<9;e++)for(let t=0;t<9;t++){let n=document.createElement(`div`);n.textContent=i[e][t],n.dataset.key=`${e}-${t}`,n.dataset.r=e,n.dataset.c=t,Object.assign(n.style,{width:`34px`,height:`34px`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontWeight:`bold`,fontSize:`0.9rem`,background:`white`,borderRadius:`4px`,boxShadow:`0 1px 2px rgba(0,0,0,0.1)`,transition:`background 0.1s`}),u.appendChild(n),d.push(n)}function f(e,t){return d.find(n=>{let r=n.getBoundingClientRect();return e>=r.left&&e<=r.right&&t>=r.top&&t<=r.bottom})}function p(e,t){e.style.background=t?`#f1c40f`:`white`}function m(){let t=c.map(e=>e.dataset.key),r=c.map(e=>e.textContent).join(``);c.forEach(e=>p(e,!1));let i=a.find(e=>e.word===r&&JSON.stringify(e.cells)===JSON.stringify(t));if(i&&!s.has(i.word)){s.add(i.word),i.cells.forEach(e=>{let t=d.find(t=>t.dataset.key===e);t&&(t.style.background=`#2ecc71`,t.style.color=`white`)});let t=e.querySelector(`#word-${i.word}`);t&&(t.style.textDecoration=`line-through`,t.style.color=`#95a5a6`),e.querySelector(`#ws-progress`).textContent=`${s.size}/${o.length} gefunden!`,s.size===o.length&&setTimeout(()=>n({correct:!0,score:100}),1e3)}}u.addEventListener(`pointerdown`,e=>{e.preventDefault(),l=!0,c=[];let t=f(e.clientX,e.clientY);t&&(c.push(t),p(t,!0))}),u.addEventListener(`pointermove`,e=>{if(!l)return;let t=f(e.clientX,e.clientY);t&&!c.includes(t)&&(c.push(t),p(t,!0))}),u.addEventListener(`pointerup`,e=>{l=!1,m(),c=[]})}},"rhyme-memory":{id:`rhyme-memory`,name_de:`Reim-Memory`,topics:[`reime`,`wortschatz`],setup(e,t,n){let r=[[`Haus`,`Maus`],[`Baum`,`Traum`],[`Brot`,`Not`],[`Hund`,`Mund`],[`Geld`,`Welt`],[`Stern`,`Kern`]].sort(()=>Math.random()-.5).slice(0,4),i=r.flatMap(([e,t])=>[{word:e,group:r.indexOf(r.find(t=>t[0]===e))},{word:t,group:r.indexOf(r.find(t=>t[0]===e))}]).sort(()=>Math.random()-.5),a=[],o=new Set,s=!0;e.innerHTML=`
      <div style="padding:var(--space-md); text-align:center; user-select:none;">
        <p style="color:var(--text-secondary); margin-bottom:20px; font-size:1rem;">Finde die Reimpaare! 🎵</p>
        <div id="mem-grid" style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px; max-width:400px; margin:0 auto 20px;"></div>
        <div id="mem-score" style="font-size:1.2rem; font-weight:bold; color:#3498db;">0 / ${r.length} Paare</div>
      </div>`;let c=e.querySelector(`#mem-grid`),l=e.querySelector(`#mem-score`);i.forEach((e,t)=>{let i=document.createElement(`div`);i.dataset.idx=t,i.dataset.group=e.group,i.dataset.word=e.word,Object.assign(i.style,{height:`80px`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.2rem`,fontWeight:`bold`,borderRadius:`8px`,background:`#34495e`,color:`white`,cursor:`pointer`,boxShadow:`0 4px 0 #2c3e50`,transition:`transform 0.1s`,userSelect:`none`}),i.textContent=`?`,i.addEventListener(`click`,()=>{if(!(!s||a.includes(i)||o.has(String(e.group)))&&(i.textContent=e.word,i.style.background=`#3498db`,a.push(i),a.length===2)){s=!1;let[t,i]=a;t.dataset.group===i.dataset.group?(t.style.background=`#2ecc71`,i.style.background=`#2ecc71`,o.add(String(e.group)),l.textContent=`${o.size} / ${r.length} Paare`,a=[],s=!0,o.size===r.length&&setTimeout(()=>n({correct:!0,score:100}),800)):(t.style.background=`#e74c3c`,i.style.background=`#e74c3c`,setTimeout(()=>{t.textContent=`?`,t.style.background=`#34495e`,i.textContent=`?`,i.style.background=`#34495e`,a=[],s=!0},900))}}),c.appendChild(i)})}},"anagram-blast":{id:`anagram-blast`,name_de:`Anagramm-Bombe`,topics:[`rechtschreibung`,`wortschatz`],setup(e,t,n){let r=[`KATZE`,`SCHULE`,`GARTEN`,`BLUME`,`FENSTER`,`WINTER`,`SOMMER`],i=r[Math.floor(Math.random()*r.length)],a=i.split(``).sort(()=>Math.random()-.5);for(;a.join(``)===i;)a.sort(()=>Math.random()-.5);let o=30,s=[],c=[...a];e.innerHTML=`
      <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
        <div style="display:flex; justify-content:center; align-items:center; gap:15px; margin-bottom:20px;">
          <div style="font-size:3rem;">💣</div>
          <div id="bomb-timer" style="font-size:2.5rem; font-weight:900; color:#e74c3c; font-family:'Fredoka One',cursive;">30</div>
        </div>
        <p style="color:var(--text-secondary); margin-bottom:15px;">Entscramble das Wort!</p>
        
        <!-- Build area -->
        <div id="build-area" style="min-height:60px; display:flex; justify-content:center; gap:8px; flex-wrap:wrap; background:rgba(255,255,255,0.6); border-radius:12px; padding:10px; margin-bottom:15px; border:2px dashed #bdc3c7;"></div>

        <!-- Letter tiles -->
        <div id="tile-area" style="display:flex; justify-content:center; gap:8px; flex-wrap:wrap; margin-bottom:20px;"></div>

        <div style="display:flex; gap:10px; justify-content:center;">
          <button id="btn-undo" class="btn btn-secondary">↩ Rückgängig</button>
          <button id="btn-submit" class="btn btn-primary">✓ Prüfen</button>
        </div>
      </div>`;let l=e.querySelector(`#build-area`),u=e.querySelector(`#tile-area`),d=e.querySelector(`#bomb-timer`);function f(){u.innerHTML=``,c.forEach((e,t)=>{let n=document.createElement(`div`);n.textContent=e,Object.assign(n.style,{width:`44px`,height:`44px`,background:`#34495e`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`8px`,fontWeight:`bold`,fontSize:`1.4rem`,cursor:`pointer`,boxShadow:`0 4px 0 #2c3e50`,transition:`transform 0.1s`}),n.addEventListener(`click`,()=>{s.push(e),c.splice(t,1),p(),f()}),u.appendChild(n)})}function p(){l.innerHTML=``,s.forEach((e,t)=>{let n=document.createElement(`div`);n.textContent=e,Object.assign(n.style,{width:`44px`,height:`44px`,background:`#3498db`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`8px`,fontWeight:`bold`,fontSize:`1.4rem`,cursor:`pointer`,boxShadow:`0 4px 0 #2980b9`}),n.addEventListener(`click`,()=>{c.push(s.splice(t,1)[0]),p(),f()}),l.appendChild(n)})}let m=setInterval(()=>{o--,d.textContent=o,o<=10&&(d.style.color=`#c0392b`),o<=0&&(clearInterval(m),d.textContent=`💥`,setTimeout(()=>n({correct:!1,score:0}),1e3))},1e3);e.querySelector(`#btn-undo`).addEventListener(`click`,()=>{s.length>0&&(c.splice(Math.random()*c.length|0,0,s.pop()),p(),f())}),e.querySelector(`#btn-submit`).addEventListener(`click`,()=>{clearInterval(m),s.join(``)===i?(l.style.background=`rgba(46,204,113,0.3)`,l.style.border=`2px solid #2ecc71`,setTimeout(()=>n({correct:!0,score:Math.ceil(o/30*100)}),1e3)):(l.style.background=`rgba(231,76,60,0.2)`,setTimeout(()=>{l.style.background=``},500))}),f()}},"gender-sort":{id:`gender-sort`,name_de:`Genus-Sortierer`,topics:[`artikel`,`nomen`],setup(e,t,n){let r=[{word:`Hund`,gender:`der`},{word:`Katze`,gender:`die`},{word:`Haus`,gender:`das`},{word:`Baum`,gender:`der`},{word:`Blume`,gender:`die`},{word:`Buch`,gender:`das`},{word:`Vogel`,gender:`der`},{word:`Sonne`,gender:`die`},{word:`Auto`,gender:`das`}].sort(()=>Math.random()-.5).slice(0,5),i=0,a=0;e.innerHTML=`
      <div style="padding:var(--space-md); text-align:center; user-select:none;">
        <p style="color:var(--text-secondary); margin-bottom:5px;">
          Welcher Artikel gehört dazu?
        </p>
        <div id="score-bar" style="font-size:1rem; font-weight:bold; margin-bottom:20px; color:#3498db;">0/${r.length}</div>

        <!-- Word Display -->
        <div id="current-word" style="font-size:3rem; font-weight:900; font-family:'Fredoka One',cursive; margin-bottom:30px; color:#2c3e50; letter-spacing:2px; transition:all 0.2s;">
          ${r[0].word}
        </div>

        <!-- 3 Bins -->
        <div style="display:flex; gap:15px; justify-content:center;">
          ${[`der`,`die`,`das`].map(e=>`
            <button class="gender-btn" data-gender="${e}" style="
              flex:1; max-width:100px; padding:20px 10px; border-radius:12px; font-size:1.4rem; font-weight:bold;
              background:${e===`der`?`#3498db`:e===`die`?`#e74c3c`:`#2ecc71`}; color:white; border:none;
              box-shadow:0 6px 0 ${e===`der`?`#2980b9`:e===`die`?`#c0392b`:`#27ae60`}; cursor:pointer; transition:transform 0.1s;">
              ${e}
            </button>
          `).join(``)}
        </div>
      </div>`;let o=e.querySelector(`#current-word`),s=e.querySelector(`#score-bar`);e.querySelectorAll(`.gender-btn`).forEach(t=>{t.addEventListener(`click`,()=>{let c=r[i];t.dataset.gender===c.gender?(a++,o.style.color=`#2ecc71`,t.style.transform=`translateY(6px)`,t.style.boxShadow=`none`):(o.style.color=`#e74c3c`,o.textContent=`${c.gender} ${c.word}`),s.textContent=`${a}/${r.length}`,setTimeout(()=>{i++,i>=r.length?n({correct:a>=Math.ceil(r.length*.7),score:Math.round(a/r.length*100)}):(o.style.color=`#2c3e50`,o.textContent=r[i].word,e.querySelectorAll(`.gender-btn`).forEach(e=>{let t=e.dataset.gender;e.style.transform=``,e.style.boxShadow=`0 6px 0 ${t===`der`?`#2980b9`:t===`die`?`#c0392b`:`#27ae60`}`}))},900)})})}},"plural-match":{id:`plural-match`,name_de:`Plural-Picker`,topics:[`nomen`,`grammatik`],setup(e,t,n){let r=[{singular:`das Haus`,plural:`die Häuser`},{singular:`der Baum`,plural:`die Bäume`},{singular:`die Katze`,plural:`die Katzen`},{singular:`das Kind`,plural:`die Kinder`},{singular:`der Vogel`,plural:`die Vögel`},{singular:`das Buch`,plural:`die Bücher`}],i=[...r].sort(()=>Math.random()-.5).slice(0,4),a=0,o=0;function s(){let t=i[o],c=r.filter(e=>e.singular!==t.singular).sort(()=>Math.random()-.5).slice(0,3).map(e=>e.plural),l=[t.plural,...c].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
          <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:20px;">Runde ${o+1}/${i.length}</div>
          <div style="font-size:2.2rem; font-weight:900; font-family:'Fredoka One',cursive; margin-bottom:10px; color:#2c3e50;">
            ${t.singular}
          </div>
          <p style="color:var(--text-secondary); margin-bottom:25px;">Was ist der Plural?</p>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${l.map(e=>`
              <button class="plural-btn" data-opt="${e}" style="
                padding:14px; font-size:1.2rem; border-radius:10px; border:none; cursor:pointer;
                background:#ecf0f1; color:#2c3e50; font-weight:bold;
                box-shadow:0 3px 0 #bdc3c7; transition:all 0.15s;">${e}</button>
            `).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.plural-btn`).forEach(r=>{r.addEventListener(`click`,()=>{e.querySelectorAll(`.plural-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=r.dataset.opt===t.plural;if(r.style.background=c?`#2ecc71`:`#e74c3c`,r.style.color=`white`,c)a++;else{let n=[...e.querySelectorAll(`.plural-btn`)].find(e=>e.dataset.opt===t.plural);n&&(n.style.background=`#2ecc71`,n.style.color=`white`)}setTimeout(()=>{o++,o>=i.length?n({correct:a>=Math.ceil(i.length*.7),score:Math.round(a/i.length*100)}):s()},1200)})})}s()}},"missing-letter":{id:`missing-letter`,name_de:`Vokal-Dieb`,topics:[`rechtschreibung`],setup(e,t,n){let r=[{word:`SCHULE`,missing:`U`,gaps:[2]},{word:`BLUME`,missing:`U`,gaps:[2]},{word:`FENSTER`,missing:`E`,gaps:[1]},{word:`HUND`,missing:`U`,gaps:[1]},{word:`BAUM`,missing:`A`,gaps:[1]},{word:`TISCH`,missing:`I`,gaps:[1]}],i=r[Math.floor(Math.random()*r.length)],a=i.word.split(``).map((e,t)=>i.gaps.includes(t)?`_`:e),o=[`A`,`E`,`I`,`O`,`U`].sort(()=>Math.random()-.5);e.innerHTML=`
      <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
        <div style="font-size:3rem; margin-bottom:5px;">🦹‍♂️</div>
        <p style="color:var(--text-secondary); margin-bottom:25px;">Der Vokal-Dieb hat einen Buchstaben gestohlen!</p>
        
        <div style="font-size:3.5rem; font-weight:900; letter-spacing:12px; font-family:'Fredoka One',cursive; margin-bottom:10px; color:#2c3e50;">
          ${a.map(e=>e===`_`?`<span style="border-bottom:4px solid #e74c3c; color:transparent; display:inline-block; width:40px;">_</span>`:`<span>${e}</span>`).join(``)}
        </div>
        
        <p style="color:#7f8c8d; font-size:0.9rem; margin-bottom:30px;">Welcher Buchstabe fehlt?</p>

        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          ${o.map(e=>`
            <button class="vowel-btn" data-letter="${e}" style="
              width:60px; height:60px; border-radius:50%; font-size:1.8rem; font-weight:bold;
              background:#9b59b6; color:white; border:none; box-shadow:0 6px 0 #8e44ad; cursor:pointer;">
              ${e}
            </button>
          `).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.vowel-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.vowel-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.letter===i.missing;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=``,!r){let t=[...e.querySelectorAll(`.vowel-btn`)].find(e=>e.dataset.letter===i.missing);t&&(t.style.background=`#2ecc71`,t.style.boxShadow=``)}setTimeout(()=>n({correct:r,score:r?100:0}),1300)})})}},"speed-flash":{id:`speed-flash`,name_de:`Blitz-Leser`,topics:[`lesen`,`konzentration`],setup(e,t,n){let r=[`Fahrrad`,`Schmetterling`,`Eisenbahn`,`Kinderzimmer`,`Regenschirm`,`Sonnenschein`],i=r[Math.floor(Math.random()*r.length)],a=[i,...r.filter(e=>e!==i).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);e.innerHTML=`
      <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
        <p style="color:var(--text-secondary); margin-bottom:20px; font-size:1rem;">Lies das Wort! Es erscheint nur kurz...</p>

        <div id="flash-display" style="
          min-height:120px; display:flex; align-items:center; justify-content:center;
          font-size:3rem; font-weight:900; font-family:'Fredoka One',cursive; color:#2c3e50;
          background:rgba(255,255,255,0.7); border-radius:16px; margin-bottom:30px;
          border:3px solid rgba(0,0,0,0.1);">
          Bereit?
        </div>

        <div id="options-area" style="display:none; flex-direction:column; gap:10px;"></div>
      </div>`;let o=e.querySelector(`#flash-display`),s=e.querySelector(`#options-area`),c=3;o.textContent=c;let l=setInterval(()=>{c--,c>0?o.textContent=c:(clearInterval(l),o.textContent=i,o.style.color=`#e74c3c`,setTimeout(()=>{o.textContent=`???`,o.style.color=`#7f8c8d`,o.style.fontSize=`2rem`,s.style.display=`flex`,a.forEach(t=>{let r=document.createElement(`button`);r.textContent=t,r.className=`flash-btn`,Object.assign(r.style,{padding:`14px`,fontSize:`1.2rem`,borderRadius:`10px`,border:`none`,cursor:`pointer`,background:`#ecf0f1`,color:`#2c3e50`,fontWeight:`bold`,boxShadow:`0 3px 0 #bdc3c7`,transition:`all 0.15s`}),r.addEventListener(`click`,()=>{e.querySelectorAll(`.flash-btn`).forEach(e=>e.style.pointerEvents=`none`);let a=t===i;if(r.style.background=a?`#2ecc71`:`#e74c3c`,r.style.color=`white`,!a){let t=[...e.querySelectorAll(`.flash-btn`)].find(e=>e.textContent===i);t&&(t.style.background=`#2ecc71`,t.style.color=`white`)}setTimeout(()=>n({correct:a,score:a?100:0}),1200)}),s.appendChild(r)})},1200))},800)}},"word-chain":{id:`word-chain`,name_de:`Wortkette`,topics:[`wortschatz`,`alphabet`],setup(e,t,n){let r=new Set([`apfel`,`lampe`,`elefant`,`tisch`,`hamster`,`rose`,`esel`,`licht`,`tiger`,`raupe`,`eimer`,`robot`,`turm`,`maus`,`stern`,`nase`,`eiche`,`ente`,`eule`,`lupe`,`pinsel`,`luna`,`affe`,`eiche`]),i=[`Elefant`],a=3,o=0;e.innerHTML=`
      <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
          <span id="wc-lives" style="font-size:1.4rem;">❤️❤️❤️</span>
          <span id="wc-score" style="font-weight:bold; color:#3498db;">0/5</span>
        </div>
        <p style="color:var(--text-secondary); margin-bottom:10px;">Das nächste Wort muss mit <b id="wc-nextletter" style="color:#e74c3c;"></b> beginnen!</p>
        
        <div id="wc-chain" style="display:flex; flex-wrap:wrap; gap:5px; justify-content:center; min-height:50px; margin-bottom:20px; padding:10px; background:rgba(255,255,255,0.5); border-radius:12px;"></div>
        
        <div style="display:flex; gap:10px; align-items:center; justify-content:center;">
          <input id="wc-input" type="text" placeholder="Nächstes Wort..." autocomplete="off" autocorrect="off" spellcheck="false"
            style="flex:1; max-width:250px; padding:12px; font-size:1.2rem; border-radius:8px; border:2px solid #3498db; outline:none;">
          <button id="wc-submit" class="btn btn-primary" style="padding:12px 20px;">OK ✓</button>
        </div>
        <p id="wc-msg" style="margin-top:10px; font-size:0.9rem; color:#e74c3c; min-height:20px;"></p>
      </div>`;let s=e.querySelector(`#wc-chain`),c=e.querySelector(`#wc-lives`),l=e.querySelector(`#wc-score`),u=e.querySelector(`#wc-nextletter`),d=e.querySelector(`#wc-input`),f=e.querySelector(`#wc-msg`),p=e.querySelector(`#wc-submit`);function m(e){return e[e.length-1].toUpperCase()}function h(){s.innerHTML=i.map((e,t)=>`
        <span style="background:${t===0?`#95a5a6`:`#3498db`}; color:white; padding:4px 10px; border-radius:20px; font-weight:bold; font-size:1rem;">${e}</span>
        ${t<i.length-1?`<span style="color:#7f8c8d;">-></span>`:``}
      `).join(``),u.textContent=m(i[i.length-1])}h(),d.focus();function g(){let e=d.value.trim();if(!e)return;let t=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase(),s=m(i[i.length-1]);if(t[0].toUpperCase()!==s){f.textContent=`Das Wort muss mit "${s}" beginnen!`,d.value=``,a--,c.textContent=`❤️`.repeat(Math.max(0,a)),a<=0&&setTimeout(()=>n({correct:!1,score:Math.round(o/5*100)}),500);return}if(i.some(e=>e.toLowerCase()===t.toLowerCase())){f.textContent=`Dieses Wort war schon dran!`,d.value=``;return}if(!r.has(t.toLowerCase())){f.textContent=`Kein gültiges Wort!`,d.value=``;return}f.textContent=``,i.push(t),o++,l.textContent=`${o}/5`,d.value=``,h(),o>=5&&setTimeout(()=>n({correct:!0,score:100}),500)}p.addEventListener(`click`,g),d.addEventListener(`keydown`,e=>{e.key===`Enter`&&g()})}},"synonym-snap":{id:`synonym-snap`,name_de:`Synonym-Schnapper`,topics:[`wortschatz`],setup(e,t,n){let r=[{word:`beginnen`,synonym:`anfangen`,distractors:[`aufhören`,`schlafen`,`laufen`]},{word:`schön`,synonym:`hübsch`,distractors:[`hässlich`,`klein`,`laut`]},{word:`schnell`,synonym:`flink`,distractors:[`langsam`,`leise`,`müde`]},{word:`traurig`,synonym:`betrübt`,distractors:[`fröhlich`,`mutig`,`groß`]},{word:`sprechen`,synonym:`reden`,distractors:[`rennen`,`essen`,`schlafen`]}].sort(()=>Math.random()-.5).slice(0,4),i=0,a=0;function o(){let t=r[i],s=[t.synonym,...t.distractors].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
          <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:5px;">${i+1}/${r.length} - Punkte: ${a}</div>
          <p style="color:var(--text-secondary); margin-bottom:15px;">Welches Wort bedeutet dasselbe?</p>
          
          <div style="font-size:2.8rem; font-weight:900; font-family:'Fredoka One',cursive; background:linear-gradient(135deg,#9b59b6,#3498db); -webkit-background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:30px;">
            ${t.word}
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            ${s.map(e=>`
              <button class="syn-btn" data-opt="${e}" style="
                padding:16px; font-size:1.1rem; border-radius:12px; border:none; cursor:pointer;
                background:white; color:#2c3e50; font-weight:bold;
                box-shadow:0 4px 0 #bdc3c7; transition:all 0.15s;">${e}</button>
            `).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.syn-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.syn-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.opt===t.synonym;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.color=`white`,s.style.boxShadow=`none`,!c){let n=[...e.querySelectorAll(`.syn-btn`)].find(e=>e.dataset.opt===t.synonym);n&&(n.style.background=`#2ecc71`,n.style.color=`white`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>=Math.ceil(r.length*.6),score:Math.round(a/r.length*100)}):o()},1e3)})})}o()}},"verb-pulse":{id:`verb-pulse`,name_de:`Verb-Puls`,topics:[`verben`,`grammatik`,`zeitformen`],setup(e,t,n){let r=[{verb:`sein`,pronoun:`ich`,correct:`bin`,options:[`bist`,`bin`,`ist`,`sind`]},{verb:`haben`,pronoun:`du`,correct:`hast`,options:[`haben`,`hat`,`hast`,`habe`]},{verb:`gehen`,pronoun:`er`,correct:`geht`,options:[`gehen`,`gehst`,`geht`,`gegangen`]},{verb:`machen`,pronoun:`wir`,correct:`machen`,options:[`macht`,`machst`,`machen`,`machte`]},{verb:`laufen`,pronoun:`ich`,correct:`laufe`,options:[`läuft`,`laufen`,`laufe`,`lief`]}].sort(()=>Math.random()-.5).slice(0,4),i=0,a=0;function o(){let t=r[i],s=[...t.options].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md); text-align:center; user-select:none; max-width:500px; margin:0 auto;">
          <div style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:15px;">${i+1}/${r.length}</div>
          
          <div style="display:flex; align-items:center; justify-content:center; gap:15px; margin-bottom:30px; flex-wrap:wrap;">
            <div style="background:#e74c3c; color:white; padding:12px 24px; border-radius:20px; font-size:1.8rem; font-weight:bold; font-family:'Fredoka One',cursive;">
              ${t.pronoun}
            </div>
            <div style="font-size:1.8rem; color:#7f8c8d;">+</div>
            <div style="background:#3498db; color:white; padding:12px 24px; border-radius:20px; font-size:1.8rem; font-weight:bold; font-family:'Fredoka One',cursive;">
              ${t.verb}
            </div>
            <div style="font-size:1.8rem; color:#7f8c8d;">=</div>
            <div style="background:#ecf0f1; color:#7f8c8d; padding:12px 24px; border-radius:20px; font-size:1.8rem; font-weight:bold; border:2px dashed #bdc3c7;">
              ???
            </div>
          </div>

          <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
            ${s.map(e=>`
              <button class="verb-btn" data-opt="${e}" style="
                padding:16px; font-size:1.3rem; border-radius:12px; border:none; cursor:pointer;
                background:#34495e; color:white; font-weight:bold;
                box-shadow:0 4px 0 #2c3e50; transition:all 0.15s;">${e}</button>
            `).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.verb-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.verb-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.opt===t.correct;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=[...e.querySelectorAll(`.verb-btn`)].find(e=>e.dataset.opt===t.correct);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>=Math.ceil(r.length*.6),score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"preposition-world":{id:`preposition-world`,name_de:`Präpositions-Welt`,topics:[`grammatik`,`satzbau`],setup(e,t,n){let r=[{sentence:`Die Katze sitzt ___ dem Sofa.`,answer:`auf`,options:[`auf`,`unter`,`hinter`,`vor`]},{sentence:`Das Buch liegt ___ dem Tisch.`,answer:`auf`,options:[`in`,`auf`,`neben`,`über`]},{sentence:`Der Ball ist ___ der Kiste.`,answer:`in`,options:[`auf`,`neben`,`in`,`vor`]},{sentence:`Er steht ___ der Tür.`,answer:`vor`,options:[`hinter`,`unter`,`vor`,`neben`]},{sentence:`Die Lampe hängt ___ dem Tisch.`,answer:`über`,options:[`neben`,`über`,`unter`,`in`]}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:15px;">${i+1}/${r.length}</div>
          <p style="font-size:1.6rem;font-weight:bold;color:#2c3e50;margin-bottom:30px;line-height:1.6;">
            ${t.sentence.replace(`___`,`<span style="border-bottom:3px solid #e74c3c;color:#e74c3c;padding:0 5px;">___</span>`)}
          </p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            ${t.options.map(e=>`<button class="prep-btn" data-o="${e}" style="padding:15px;font-size:1.3rem;border-radius:10px;border:none;cursor:pointer;background:#34495e;color:white;font-weight:bold;box-shadow:0 4px 0 #2c3e50;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.prep-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.prep-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.answer;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.prep-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"comma-king":{id:`comma-king`,name_de:`Komma-König`,topics:[`satzzeichen`,`grammatik`],setup(e,t,n){let r=[{parts:[`Ich kaufe`,`Äpfel`,`Birnen`,`Orangen und Bananen.`],commas:[1,2]},{parts:[`Er ist groß`,`stark und freundlich.`],commas:[1]},{parts:[`Wir essen`,`trinken`,`lachen und tanzen.`],commas:[1,2]}],i=r[Math.floor(Math.random()*r.length)],a=new Set;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:3rem;margin-bottom:5px;">👑</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Tippe auf die Stellen, wo Kommas fehlen!</p>
        <div id="ck-sentence" style="font-size:1.4rem;font-weight:bold;color:#2c3e50;background:rgba(255,255,255,0.8);padding:20px;border-radius:12px;border:2px solid #ecf0f1;line-height:2.4;margin-bottom:25px;"></div>
        <button id="ck-check" class="btn btn-primary btn-lg" style="width:100%;max-width:300px;">Überprüfen ✓</button>
      </div>`;let o=e.querySelector(`#ck-sentence`);function s(){o.innerHTML=``,i.parts.forEach((e,t)=>{let n=document.createElement(`span`);if(n.textContent=e,o.appendChild(n),t<i.parts.length-1){let e=document.createElement(`span`);e.dataset.idx=t+1,e.textContent=a.has(t+1)?`,`:` `,Object.assign(e.style,{display:`inline-block`,minWidth:`20px`,cursor:`pointer`,color:`#e74c3c`,fontWeight:`bold`,fontSize:`1.6rem`,padding:`0 2px`,borderBottom:a.has(t+1)?`none`:`2px dashed #bdc3c7`,transition:`all 0.1s`}),e.addEventListener(`click`,()=>{a.has(t+1)?a.delete(t+1):a.add(t+1),s()}),o.appendChild(e),o.appendChild(document.createTextNode(` `))}})}s(),e.querySelector(`#ck-check`).addEventListener(`click`,()=>{let t=new Set(i.commas),r=[...a].sort().join(`,`)===[...t].sort().join(`,`);e.querySelector(`#ck-check`).style.background=r?`#2ecc71`:`#e74c3c`,e.querySelector(`#ck-check`).textContent=r?`Perfekt! 🎉`:`Falsch! ❌`,setTimeout(()=>n({correct:r,score:r?100:0}),1400)})}},"category-blitz":{id:`category-blitz`,name_de:`Kategorie-Blitz`,topics:[`wortschatz`,`nomen`],setup(e,t,n){let r=[{name:`Tiere`,correct:[`Hund`,`Katze`,`Vogel`,`Fisch`,`Pferd`],wrong:[`Apfel`,`Tisch`,`Sonne`,`Buch`,`Auto`]},{name:`Obst`,correct:[`Apfel`,`Banane`,`Orange`,`Kirsche`,`Pflaume`],wrong:[`Hund`,`Tisch`,`Schule`,`Buch`,`Lampe`]},{name:`Möbel`,correct:[`Tisch`,`Stuhl`,`Bett`,`Schrank`,`Sofa`],wrong:[`Apfel`,`Hund`,`Sonne`,`Auto`,`Blume`]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.correct.slice(0,4),...i.wrong.slice(0,4)].sort(()=>Math.random()-.5),o=new Set,s=15,c=!1;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <span style="font-size:1.2rem;font-weight:bold;color:#3498db;">Kategorie: <b style="color:#e74c3c;">${i.name}</b></span>
          <span id="cb-timer" style="font-size:1.4rem;font-weight:900;color:#e74c3c;">15</span>
        </div>
        <p style="color:var(--text-secondary);margin-bottom:15px;font-size:.9rem;">Tippe alle ${i.name}!</p>
        <div id="cb-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:20px;"></div>
        <button id="cb-done" class="btn btn-primary">Fertig! ✓</button>
      </div>`;let l=e.querySelector(`#cb-grid`),u=e.querySelector(`#cb-timer`);a.forEach(e=>{let t=document.createElement(`button`);t.textContent=e,t.dataset.word=e,Object.assign(t.style,{padding:`14px`,fontSize:`1.1rem`,borderRadius:`10px`,border:`none`,cursor:`pointer`,background:`#ecf0f1`,color:`#2c3e50`,fontWeight:`bold`,boxShadow:`0 3px 0 #bdc3c7`,transition:`all .15s`}),t.addEventListener(`click`,()=>{c||(o.has(e)?(o.delete(e),t.style.background=`#ecf0f1`,t.style.color=`#2c3e50`,t.style.boxShadow=`0 3px 0 #bdc3c7`):(o.add(e),t.style.background=`#3498db`,t.style.color=`white`,t.style.boxShadow=`none`))}),l.appendChild(t)});let d=setInterval(()=>{s--,u.textContent=s,s<=0&&(clearInterval(d),f())},1e3);function f(){if(c)return;c=!0,clearInterval(d);let e=new Set(i.correct.slice(0,4)),t=0;o.forEach(n=>{e.has(n)&&t++}),o.forEach(t=>{let n=l.querySelector(`[data-word="${t}"]`);n&&(n.style.background=e.has(t)?`#2ecc71`:`#e74c3c`)}),e.forEach(e=>{if(!o.has(e)){let t=l.querySelector(`[data-word="${e}"]`);t&&(t.style.background=`#f39c12`,t.style.color=`white`)}});let r=Math.round(t/e.size*100);setTimeout(()=>n({correct:r>=75,score:r}),1500)}e.querySelector(`#cb-done`).addEventListener(`click`,f)}},"story-builder":{id:`story-builder`,name_de:`Geschichte-Baumeister`,topics:[`lesen`,`wortschatz`,`satzbau`],setup(e,t,n){let r=[{template:`Der {TIER} lief durch den {ORT}. Er war sehr {ADJ}.`,blanks:{TIER:`Hund`,ORT:`Garten`,ADJ:`glücklich`},pools:{TIER:[`Hund`,`Tisch`,`Stern`],ORT:[`Garten`,`Schule`,`Himmel`],ADJ:[`glücklich`,`grün`,`laut`]}},{template:`Die {TIER} saß auf dem {ORT} und schlief {ADJ}.`,blanks:{TIER:`Katze`,ORT:`Stuhl`,ADJ:`tief`},pools:{TIER:[`Katze`,`Baum`,`Sonne`],ORT:[`Stuhl`,`Wolke`,`Auto`],ADJ:[`tief`,`hoch`,`schnell`]}}],i=r[Math.floor(Math.random()*r.length)],a=Object.keys(i.blanks),o={},s=0;function c(){let t=a[s],r=i.template;a.forEach(e=>{let t=o[e]||`[${e}]`,n=o[e]?`#2ecc71`:`#e74c3c`;r=r.replace(`{${e}}`,`<b style="color:${n};border-bottom:2px solid ${n};">${t}</b>`)}),e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:10px;">📖</div>
          <div style="font-size:1.3rem;line-height:2;background:rgba(255,255,255,0.8);padding:20px;border-radius:12px;margin-bottom:25px;color:#2c3e50;">
            ${r}
          </div>
          ${s<a.length?`
            <p style="color:var(--text-secondary);margin-bottom:15px;">Was passt für <b>[${t}]</b>?</p>
            <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
              ${i.pools[t].map(e=>`<button class="sb-btn" data-opt="${e}" style="padding:12px 20px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#9b59b6;color:white;font-weight:bold;box-shadow:0 4px 0 #8e44ad;">${e}</button>`).join(``)}
            </div>
          `:`<div style="font-size:1.5rem;color:#2ecc71;">Geschichte fertig! 🎉</div>`}
        </div>`,e.querySelectorAll(`.sb-btn`).forEach(r=>{r.addEventListener(`click`,()=>{let l=r.dataset.opt===i.blanks[t];r.style.background=l?`#2ecc71`:`#e74c3c`,r.style.boxShadow=`none`,e.querySelectorAll(`.sb-btn`).forEach(e=>e.style.pointerEvents=`none`),l&&(o[t]=r.dataset.opt),setTimeout(()=>{if(s++,s>=a.length){let e=a.every(e=>o[e]===i.blanks[e]);setTimeout(()=>n({correct:e,score:e?100:Math.round(Object.keys(o).length/a.length*50)}),1200)}c()},900)})})}c()}},"emoji-translator":{id:`emoji-translator`,name_de:`Emoji-Übersetzer`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{sequence:`☀️🌧️`,answer:`Regenwetter`,options:[`Regenwetter`,`Schneesturm`,`Sonnenschein`,`Gewitterblitz`]},{sequence:`🐄🥛`,answer:`Milch`,options:[`Butter`,`Milch`,`Joghurt`,`Käse`]},{sequence:`🌊🏄`,answer:`Surfen`,options:[`Schwimmen`,`Tauchen`,`Surfen`,`Segeln`]},{sequence:`📚✏️`,answer:`Lernen`,options:[`Schreiben`,`Malen`,`Lernen`,`Rechnen`]},{sequence:`🌙⭐🌟`,answer:`Nacht`,options:[`Abend`,`Nacht`,`Morgen`,`Mittag`]},{sequence:`🎂🕯️🎉`,answer:`Geburtstag`,options:[`Weihnachten`,`Geburtstag`,`Ostern`,`Silvester`]},{sequence:`🚗💨`,answer:`Fahren`,options:[`Bremsen`,`Fahren`,`Parken`,`Tanken`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <p style="color:var(--text-secondary);margin-bottom:15px;">Was bedeutet diese Emoji-Botschaft?</p>
        <div style="font-size:4rem;letter-spacing:8px;background:rgba(255,255,255,0.7);padding:20px;border-radius:16px;margin-bottom:30px;border:3px solid #f1c40f;">
          ${i.sequence}
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${i.options.map(e=>`<button class="em-btn" data-o="${e}" style="padding:15px;font-size:1.2rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 3px 0 #bdc3c7;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.em-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.em-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.answer;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.color=`white`,!r){let t=e.querySelector(`.em-btn[data-o="${i.answer}"]`);t&&(t.style.background=`#2ecc71`,t.style.color=`white`)}setTimeout(()=>n({correct:r,score:r?100:0}),1200)})})}},"category-sort":{id:`category-sort`,name_de:`Sortier-Meister`,topics:[`wortschatz`,`nomen`,`verben`],setup(e,t,n){let r=[{left:`Tiere`,right:`Pflanzen`,words:[`Hund`,`Rose`,`Katze`,`Eiche`,`Vogel`,`Tulpe`],leftWords:[`Hund`,`Katze`,`Vogel`],rightWords:[`Rose`,`Eiche`,`Tulpe`]},{left:`Nomen`,right:`Verben`,words:[`Haus`,`laufen`,`Baum`,`essen`,`Kind`,`schlafen`],leftWords:[`Haus`,`Baum`,`Kind`],rightWords:[`laufen`,`essen`,`schlafen`]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.words].sort(()=>Math.random()-.5),o=0,s=0;function c(){if(o>=a.length){n({correct:s>=Math.ceil(a.length*.7),score:Math.round(s/a.length*100)});return}let t=a[o];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:5px;">${o+1}/${a.length} - Score: ${s}</div>
          <div style="font-size:3rem;font-weight:900;font-family:'Fredoka One',cursive;color:#2c3e50;margin:30px 0;">${t}</div>
          <div style="display:flex;gap:15px;justify-content:center;">
            <button id="left-btn" class="btn" style="flex:1;max-width:160px;padding:20px 10px;border-radius:12px;font-size:1.2rem;font-weight:bold;background:#3498db;color:white;border:none;box-shadow:0 6px 0 #2980b9;cursor:pointer;">
              ← ${i.left}
            </button>
            <button id="right-btn" class="btn" style="flex:1;max-width:160px;padding:20px 10px;border-radius:12px;font-size:1.2rem;font-weight:bold;background:#e74c3c;color:white;border:none;box-shadow:0 6px 0 #c0392b;cursor:pointer;">
              ${i.right} ->
            </button>
          </div>
        </div>`;function r(n){e.querySelectorAll(`button`).forEach(e=>e.style.pointerEvents=`none`);let r=n?i.leftWords.includes(t):i.rightWords.includes(t);r&&s++;let a=document.getElementById(n?`left-btn`:`right-btn`);a.style.boxShadow=`none`,a.style.transform=`translateY(6px)`,a.style.background=r?`#2ecc71`:`#e74c3c`,setTimeout(()=>{o++,c()},900)}document.getElementById(`left-btn`).addEventListener(`click`,()=>r(!0)),document.getElementById(`right-btn`).addEventListener(`click`,()=>r(!1))}c()}},"word-clock":{id:`word-clock`,name_de:`Wort-Uhr`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{display:`3:00`,answer:`drei Uhr`,options:[`zwei Uhr`,`drei Uhr`,`vier Uhr`,`halb vier`]},{display:`7:30`,answer:`halb acht`,options:[`sieben Uhr`,`halb sieben`,`halb acht`,`acht Uhr`]},{display:`12:00`,answer:`zwölf Uhr`,options:[`elf Uhr`,`Mitternacht`,`zwölf Uhr`,`Mittag`]},{display:`6:15`,answer:`Viertel nach sechs`,options:[`Viertel vor sechs`,`halb sieben`,`Viertel nach sechs`,`sechs Uhr`]},{display:`9:45`,answer:`Viertel vor zehn`,options:[`halb zehn`,`Viertel vor zehn`,`Viertel nach neun`,`zehn Uhr`]}],i=r[Math.floor(Math.random()*r.length)],[a,o]=i.display.split(`:`).map(Number);e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <p style="color:var(--text-secondary);margin-bottom:20px;">Wie heißt diese Uhrzeit auf Deutsch?</p>
        <div style="margin:0 auto 30px; width:160px; height:160px; border-radius:50%; background:white; border:8px solid #2c3e50; position:relative; box-shadow:0 5px 15px rgba(0,0,0,.2);">
          <!-- Hour hand -->
          <div style="position:absolute;bottom:50%;left:50%;width:4px;height:45px;background:#2c3e50;border-radius:4px;transform-origin:bottom center;transform:translateX(-50%) rotate(${a%12*30+o*.5}deg);"></div>
          <!-- Minute hand -->
          <div style="position:absolute;bottom:50%;left:50%;width:3px;height:65px;background:#e74c3c;border-radius:3px;transform-origin:bottom center;transform:translateX(-50%) rotate(${o*6}deg);"></div>
          <!-- Center dot -->
          <div style="position:absolute;top:50%;left:50%;width:10px;height:10px;background:#2c3e50;border-radius:50%;transform:translate(-50%,-50%);"></div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${i.options.map(e=>`<button class="clock-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 3px 0 #bdc3c7;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.clock-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.clock-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.answer;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.color=`white`,!r){let t=e.querySelector(`.clock-btn[data-o="${i.answer}"]`);t&&(t.style.background=`#2ecc71`,t.style.color=`white`)}setTimeout(()=>n({correct:r,score:r?100:0}),1200)})})}},"hot-cold":{id:`hot-cold`,name_de:`Heiß-Kalt`,topics:[`wortschatz`],setup(e,t,n){let r=[{target:`Freude`,close:`Glück`,far:`Trauer`,answer:`Glück`},{target:`rennen`,close:`laufen`,far:`schlafen`,answer:`laufen`},{target:`groß`,close:`riesig`,far:`winzig`,answer:`riesig`},{target:`Haus`,close:`Gebäude`,far:`Wolke`,answer:`Gebäude`},{target:`kalt`,close:`eisig`,far:`heiß`,answer:`eisig`}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i],s=[t.close,t.far].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:5px;">
            <span style="font-size:1.5rem;">🧊</span>
            <div style="flex:1;height:12px;border-radius:6px;background:linear-gradient(to right,#3498db,#e74c3c);"></div>
            <span style="font-size:1.5rem;">🔥</span>
          </div>
          <p style="color:var(--text-secondary);margin-bottom:20px;font-size:.9rem;">Welches Wort ist NÄHER an der Bedeutung?</p>
          <div style="font-size:2.8rem;font-weight:900;font-family:'Fredoka One',cursive;color:#2c3e50;margin-bottom:30px;">${t.target}</div>
          <div style="display:flex;gap:15px;justify-content:center;">
            ${s.map(e=>`<button class="hc-btn" data-o="${e}" style="flex:1;max-width:180px;padding:20px;font-size:1.3rem;border-radius:12px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 4px 0 #bdc3c7;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.hc-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.hc-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.answer;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.color=`white`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.hc-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.color=`white`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1e3)})})}o()}},"word-labyrinth":{id:`word-labyrinth`,name_de:`Wort-Labyrinth`,topics:[`rechtschreibung`,`konzentration`],setup(e,t,n){let r=[`HUND`,`HAUS`,`AUTO`,`BAUM`],i=r[Math.floor(Math.random()*r.length)],a=Array.from({length:5},()=>[,,,,,].fill(``)),o=[],s=Math.floor(Math.random()*5),c=Math.floor(Math.random()*5);o.push([s,c]);for(let e=1;e<i.length;e++){let e=[[-1,0],[1,0],[0,-1],[0,1]].sort(()=>Math.random()-.5),t=!1;for(let[n,r]of e){let e=s+n,i=c+r;if(e>=0&&e<5&&i>=0&&i<5&&!o.some(([t,n])=>t===e&&n===i)){s=e,c=i,o.push([s,c]),t=!0;break}}if(!t)break}o.forEach(([e,t],n)=>{n<i.length&&(a[e][t]=i[n])});for(let e=0;e<5;e++)for(let t=0;t<5;t++)a[e][t]||(a[e][t]=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`[Math.floor(Math.random()*26)]);let l=``,u=[...o[0]];function d(){e.innerHTML=`
        <div style="padding:var(--space-sm);text-align:center;user-select:none;max-width:400px;margin:0 auto;">
          <p style="color:var(--text-secondary);margin-bottom:5px;font-size:.9rem;">Sammle: <b style="font-size:1.4rem;letter-spacing:4px;">${i}</b></p>
          <p style="color:#3498db;font-weight:bold;margin-bottom:10px;">Gesammelt: <b>${l||`...`}</b></p>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin-bottom:15px;">
            ${Array.from({length:5},(e,t)=>Array.from({length:5},(e,n)=>{let r=u[0]===t&&u[1]===n,i=o.some(([e,r],i)=>e===t&&r===n&&i<l.length);return`<div class="lab-cell" data-r="${t}" data-c="${n}" style="
                width:52px;height:52px;display:flex;align-items:center;justify-content:center;
                font-size:1.1rem;font-weight:bold;border-radius:8px;cursor:pointer;
                background:${r?`#e74c3c`:i?`#2ecc71`:`#ecf0f1`};
                color:${r||i?`white`:`#2c3e50`};
                box-shadow:${r?`0 0 0 3px #c0392b`:i?`none`:`0 2px 0 #bdc3c7`};
              ">${a[t][n]}</div>`}).join(``)).join(``)}
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);max-width:160px;margin:0 auto;gap:4px;">
            <div></div>
            <button class="nav-btn" data-dr="-1" data-dc="0" style="padding:10px;border-radius:8px;border:none;background:#3498db;color:white;cursor:pointer;font-size:1.2rem;">▲</button>
            <div></div>
            <button class="nav-btn" data-dr="0" data-dc="-1" style="padding:10px;border-radius:8px;border:none;background:#3498db;color:white;cursor:pointer;font-size:1.2rem;">◄</button>
            <div style="background:#ecf0f1;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:.7rem;color:#7f8c8d;">👾</div>
            <button class="nav-btn" data-dr="0" data-dc="1" style="padding:10px;border-radius:8px;border:none;background:#3498db;color:white;cursor:pointer;font-size:1.2rem;">►</button>
            <div></div>
            <button class="nav-btn" data-dr="1" data-dc="0" style="padding:10px;border-radius:8px;border:none;background:#3498db;color:white;cursor:pointer;font-size:1.2rem;">▼</button>
            <div></div>
          </div>
        </div>`,e.querySelectorAll(`.nav-btn`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.dr),r=parseInt(e.dataset.dc),o=u[0]+t,s=u[1]+r;if(o<0||o>=5||s<0||s>=5)return;u=[o,s];let c=a[o][s];if(c===i[l.length]&&(l+=c,l===i)){d(),setTimeout(()=>n({correct:!0,score:100}),800);return}d()})})}d()}},"opposite-racer":{id:`opposite-racer`,name_de:`Gegenteil-Rennen`,topics:[`wortschatz`,`adjektive`],setup(e,t,n){let r=[{word:`groß`,answer:`klein`,options:[`winzig`,`klein`,`riesig`,`breit`]},{word:`heiß`,answer:`kalt`,options:[`warm`,`kalt`,`eisig`,`kühl`]},{word:`hell`,answer:`dunkel`,options:[`grau`,`schwarz`,`dunkel`,`trüb`]},{word:`schnell`,answer:`langsam`,options:[`lahm`,`langsam`,`träge`,`müde`]},{word:`reich`,answer:`arm`,options:[`arm`,`karg`,`leer`,`schwach`]},{word:`jung`,answer:`alt`,options:[`alt`,`reif`,`müde`,`grau`]}].sort(()=>Math.random()-.5).slice(0,5),i=0,a=0,o=20;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
          <span id="or-score" style="font-weight:bold;color:#3498db;">0/${r.length}</span>
          <span id="or-timer" style="font-weight:900;color:#e74c3c;font-size:1.2rem;">⏱ 20</span>
        </div>
        <div id="or-area"></div>
      </div>`;let s=e.querySelector(`#or-score`),c=e.querySelector(`#or-timer`),l=!1,u;function d(){if(i>=r.length||l){l=!0,clearInterval(u),setTimeout(()=>n({correct:a>=3,score:Math.round(a/r.length*100)}),500);return}let t=r[i],o=[...t.options].sort(()=>Math.random()-.5);e.querySelector(`#or-area`).innerHTML=`
        <p style="color:var(--text-secondary);margin-bottom:10px;">Das Gegenteil von...</p>
        <div style="font-size:3rem;font-weight:900;font-family:'Fredoka One',cursive;color:#2c3e50;margin-bottom:20px;">${t.word}</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${o.map(e=>`<button class="or-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#9b59b6;color:white;font-weight:bold;box-shadow:0 4px 0 #8e44ad;">${e}</button>`).join(``)}
        </div>`,e.querySelectorAll(`.or-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`.or-btn`).forEach(e=>e.style.pointerEvents=`none`);let o=n.dataset.o===t.answer;if(n.style.background=o?`#2ecc71`:`#e74c3c`,n.style.boxShadow=`none`,!o){let n=e.querySelector(`.or-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}o&&a++,s.textContent=`${a}/${r.length}`,i++,setTimeout(d,800)})})}u=setInterval(()=>{o--,c.textContent=`⏱ ${o}`,o<=0&&!l&&(l=!0,clearInterval(u),setTimeout(()=>n({correct:a>=3,score:Math.round(a/r.length*100)}),300))},1e3),d()}},"number-words":{id:`number-words`,name_de:`Zahlen-Rätsel`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{num:1,word:`eins`},{num:2,word:`zwei`},{num:3,word:`drei`},{num:7,word:`sieben`},{num:10,word:`zehn`},{num:12,word:`zwölf`},{num:20,word:`zwanzig`},{num:100,word:`hundert`}].sort(()=>Math.random()-.5).slice(0,4),i=[...r.map(e=>e.word)].sort(()=>Math.random()-.5),a=new Map,o=null;function s(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:20px;">Verbinde die Zahlen mit den Wörtern!</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${r.map(e=>`
                <div class="left-item" data-num="${e.num}" style="padding:14px;font-size:1.5rem;font-weight:900;border-radius:10px;cursor:pointer;
                  background:${a.has(e.num)?`#2ecc71`:o===e.num?`#f1c40f`:`#3498db`};
                  color:white;box-shadow:${a.has(e.num)||o===e.num?`none`:`0 4px 0 #2980b9`};
                  opacity:${a.has(e.num)?`0.7`:`1`};">
                  ${e.num}
                </div>`).join(``)}
            </div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${i.map(e=>{let t=[...a.entries()].find(([,t])=>t===e);return`<div class="right-item" data-word="${e}" style="padding:14px;font-size:1rem;font-weight:bold;border-radius:10px;cursor:pointer;
                  background:${t?`#2ecc71`:`#ecf0f1`};color:${t?`white`:`#2c3e50`};
                  box-shadow:${t?`none`:`0 3px 0 #bdc3c7`};
                  opacity:${t?`0.7`:`1`};">${e}</div>`}).join(``)}
            </div>
          </div>
          <div id="nw-feedback" style="margin-top:15px;font-weight:bold;min-height:24px;"></div>
        </div>`,e.querySelectorAll(`.left-item`).forEach(e=>{e.addEventListener(`click`,()=>{a.has(parseInt(e.dataset.num))||(o=parseInt(e.dataset.num),s())})}),e.querySelectorAll(`.right-item`).forEach(t=>{t.addEventListener(`click`,()=>{if(o===null)return;let i=t.dataset.word;[...a.values()].includes(i)||(r.find(e=>e.num===o)?.word===i?(a.set(o,i),e.querySelector(`#nw-feedback`).textContent=`✅ Richtig!`,e.querySelector(`#nw-feedback`).style.color=`#2ecc71`):(e.querySelector(`#nw-feedback`).textContent=`❌ Nicht ganz!`,e.querySelector(`#nw-feedback`).style.color=`#e74c3c`),o=null,s(),a.size===r.length&&setTimeout(()=>n({correct:!0,score:100}),800))})})}s()}},"sentence-sense":{id:`sentence-sense`,name_de:`Satz-Sinn`,topics:[`lesen`,`satzbau`],setup(e,t,n){let r=[{text:`Der Hund bellt laut.`,sensible:!0},{text:`Die Katze fährt ein Auto.`,sensible:!1},{text:`Das Kind liest ein Buch.`,sensible:!0},{text:`Der Baum isst Apfelkuchen.`,sensible:!1},{text:`Die Sonne scheint hell.`,sensible:!0},{text:`Das Buch schwimmt im See.`,sensible:!1}].sort(()=>Math.random()-.5).slice(0,4),i=0,a=0;function o(){let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:10px;">🤔</div>
          <p style="color:var(--text-secondary);margin-bottom:5px;">${i+1}/${r.length}</p>
          <p style="color:var(--text-secondary);margin-bottom:20px;font-size:.9rem;">Macht dieser Satz Sinn?</p>
          <div style="font-size:1.5rem;font-weight:bold;color:#2c3e50;background:rgba(255,255,255,0.8);padding:25px;border-radius:12px;border:2px solid #ecf0f1;margin-bottom:30px;line-height:1.6;">
            "${t.text}"
          </div>
          <div style="display:flex;gap:20px;justify-content:center;">
            <button class="ss-btn" data-ans="true" style="width:130px;height:80px;border-radius:16px;font-size:1.2rem;font-weight:bold;background:#2ecc71;color:white;border:none;box-shadow:0 6px 0 #27ae60;cursor:pointer;">
              👍 Ja!
            </button>
            <button class="ss-btn" data-ans="false" style="width:130px;height:80px;border-radius:16px;font-size:1.2rem;font-weight:bold;background:#e74c3c;color:white;border:none;box-shadow:0 6px 0 #c0392b;cursor:pointer;">
              👎 Nein!
            </button>
          </div>
        </div>`,e.querySelectorAll(`.ss-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.ss-btn`).forEach(e=>e.style.pointerEvents=`none`,e=>e.style.boxShadow=`none`);let c=s.dataset.ans===`true`===t.sensible;s.style.outline=`4px solid white`,s.style.transform=`scale(1.1)`,c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>=2,score:Math.round(a/r.length*100)}):o()},1e3)})})}o()}},"whack-a-noun":{id:`whack-a-noun`,name_de:`Nomen-Klopfen`,topics:[`nomen`,`verben`,`wortarten`],setup(e,t,n){let r=[`Hund`,`Baum`,`Haus`,`Auto`,`Tisch`,`Buch`,`Kind`,`Sonne`,`Ball`,`Katze`],i=[`laufen`,`essen`,`spielen`,`singen`,`schlafen`,`rennen`,`trinken`,`lesen`],a=0,o=3,s=30,c=!1,l={},u;e.innerHTML=`
      <div style="padding:var(--space-sm);text-align:center;user-select:none;max-width:500px;margin:0 auto;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <span style="font-weight:bold;color:#3498db;">Punkte: <span id="wan-score">0</span></span>
          <span style="font-weight:bold;color:#e74c3c;font-size:1.2rem;" id="wan-timer">⏱ 30</span>
          <span id="wan-lives">❤️❤️❤️</span>
        </div>
        <p style="font-size:.8rem;color:var(--text-secondary);margin-bottom:10px;">Klopfe die <b style="color:#3498db;">NOMEN</b>! Ignoriere Verben!</p>
        <div id="wan-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;"></div>
      </div>`;let d=e.querySelector(`#wan-grid`),f=e.querySelector(`#wan-score`),p=e.querySelector(`#wan-timer`),m=e.querySelector(`#wan-lives`),h=[];for(let e=0;e<9;e++){let t=document.createElement(`div`);t.dataset.idx=e,Object.assign(t.style,{height:`80px`,borderRadius:`50%`,background:`#795548`,display:`flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,overflow:`hidden`,position:`relative`,border:`4px solid #5d4037`,boxShadow:`inset 0 5px 10px rgba(0,0,0,0.4)`}),h.push(t),d.appendChild(t)}function g(e){if(l[e]||c)return;let t=Math.random()>.45,n=t?r[Math.floor(Math.random()*r.length)]:i[Math.floor(Math.random()*i.length)],s=h[e];l[e]={word:n,isNoun:t},s.innerHTML=`<div style="background:${t?`#f39c12`:`#8e44ad`};color:white;padding:8px 5px;border-radius:30px;font-weight:bold;font-size:.9rem;width:90%;text-align:center;box-shadow:0 -3px 10px rgba(0,0,0,.3);animation:popUp .15s ease;">${n}</div>`,s.onclick=()=>{if(!l[e])return;let t=l[e];delete l[e],s.innerHTML=``,t.isNoun?(a++,f.textContent=a,s.style.background=`#2ecc71`,setTimeout(()=>{s.style.background=`#795548`},300)):(o--,m.textContent=`❤️`.repeat(Math.max(0,o)),s.style.background=`#e74c3c`,setTimeout(()=>{s.style.background=`#795548`},400),o<=0&&_())},setTimeout(()=>{l[e]&&(delete l[e],s.innerHTML=``)},1500)}function _(){c||(c=!0,clearInterval(u),setTimeout(()=>n({correct:a>=5,score:Math.min(100,a*10)}),500))}u=setInterval(()=>{if(s--,p.textContent=`⏱ ${s}`,s<=5&&(p.style.color=`#c0392b`),s<=0){_();return}if(Math.random()<.7){let e=h.map((e,t)=>t).filter(e=>!l[e]);e.length>0&&g(e[Math.floor(Math.random()*e.length)])}},700);let v=document.createElement(`style`);v.textContent=`@keyframes popUp{from{transform:translateY(100%)}to{transform:translateY(0)}}`,document.head.appendChild(v)}},"definition-match":{id:`definition-match`,name_de:`Wörterbuch-Detektiv`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{word:`Bibliothek`,def:`Ein Gebäude, in dem man Bücher ausleihen kann.`,distractors:[`Museum`,`Supermarkt`,`Bahnhof`]},{word:`Schmetterling`,def:`Ein Insekt mit bunten Flügeln, das aus einer Raupe entsteht.`,distractors:[`Biene`,`Käfer`,`Libelle`]},{word:`Fahrstuhl`,def:`Eine Maschine, die Menschen zwischen Etagen transportiert.`,distractors:[`Treppe`,`Rolltreppe`,`Aufzug`]},{word:`Thermometer`,def:`Ein Gerät, das die Temperatur misst.`,distractors:[`Barometer`,`Kompass`,`Lineal`]},{word:`Insel`,def:`Ein Stück Land, das von Wasser umgeben ist.`,distractors:[`Halbinsel`,`Kontinent`,`Fjord`]}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i],s=[t.word,...t.distractors].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">📖</div>
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:15px;">${i+1}/${r.length}</div>
          <div style="font-size:1.2rem;color:#2c3e50;background:rgba(255,255,255,0.8);padding:20px;border-radius:12px;border-left:5px solid #3498db;margin-bottom:25px;text-align:left;line-height:1.6;">
            "${t.def}"
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${s.map(e=>`<button class="dm-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 3px 0 #bdc3c7;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.dm-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.dm-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.word;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.color=`white`,!c){let n=e.querySelector(`.dm-btn[data-o="${t.word}"]`);n&&(n.style.background=`#2ecc71`,n.style.color=`white`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1200)})})}o()}},"compound-chain":{id:`compound-chain`,name_de:`Komposita-Kette`,topics:[`zusammengesetzte_nomen`,`wortschatz`],setup(e,t,n){let r=[{start:`Sonne`,steps:[{stem:`Sonne`,answer:`Sonnenblume`,hint:`Sonne + ?`,options:[`Sonnenblume`,`Sonnenmond`,`Sonnenstein`,`Sonnensand`]},{stem:`Blume`,answer:`Blumentopf`,hint:`Blume + ?`,options:[`Blumenwiese`,`Blumentopf`,`Blumenbaum`,`Blumenhaus`]}]},{start:`Haus`,steps:[{stem:`Haus`,answer:`Hausschlüssel`,hint:`Haus + ?`,options:[`Hausschlüssel`,`Hausdach`,`Haustür`,`Hauswand`]},{stem:`Schlüssel`,answer:`Schlüsselbund`,hint:`Schlüssel + ?`,options:[`Schlüsselbund`,`Schlüsselloch`,`Schlüsselkind`,`Schlüsselring`]}]}],i=r[Math.floor(Math.random()*r.length)],a=0,o=0;function s(){if(a>=i.steps.length){setTimeout(()=>n({correct:o===i.steps.length,score:Math.round(o/i.steps.length*100)}),500);return}let t=i.steps[a];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:10px;">🔗</div>
          <p style="color:var(--text-secondary);margin-bottom:5px;">Schritt ${a+1}/${i.steps.length}</p>
          <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:25px;">
            <div style="background:#3498db;color:white;padding:12px 20px;border-radius:20px;font-size:1.4rem;font-weight:bold;">${t.stem}</div>
            <div style="font-size:1.5rem;">+</div>
            <div style="background:rgba(255,255,255,0.5);border:2px dashed #bdc3c7;padding:12px 20px;border-radius:20px;font-size:1.4rem;color:#7f8c8d;">???</div>
            <div style="font-size:1.5rem;">=</div>
            <div style="background:rgba(255,255,255,0.3);border:2px dashed #3498db;padding:12px 20px;border-radius:20px;font-size:1.4rem;color:#7f8c8d;">${t.hint.replace(`?`,`???`)}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${t.options.map(e=>`<button class="cc-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#9b59b6;color:white;font-weight:bold;box-shadow:0 4px 0 #8e44ad;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.cc-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`.cc-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=n.dataset.o===t.answer;if(n.style.background=r?`#2ecc71`:`#e74c3c`,n.style.boxShadow=`none`,!r){let n=e.querySelector(`.cc-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}r&&o++,a++,setTimeout(s,1100)})})}s()}},"image-word-match":{id:`image-word-match`,name_de:`Bild-Wort-Spiel`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{emoji:`🐕`,word:`Hund`},{emoji:`🌳`,word:`Baum`},{emoji:`🚗`,word:`Auto`},{emoji:`📚`,word:`Bücher`},{emoji:`☀️`,word:`Sonne`},{emoji:`🏠`,word:`Haus`}].sort(()=>Math.random()-.5).slice(0,4),i=[...r.map(e=>e.word)].sort(()=>Math.random()-.5),a=new Map,o=null;function s(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:20px;">Verbinde Bilder mit den Wörtern!</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
            <!-- Emojis left -->
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${r.map(e=>{let t=[...a.keys()].includes(e.emoji),n=o===e.emoji;return`<div class="emoji-item" data-emoji="${e.emoji}" style="height:60px;display:flex;align-items:center;justify-content:center;font-size:2rem;border-radius:12px;cursor:pointer;background:${t?`#2ecc71`:n?`#f1c40f`:`white`};border:3px solid ${t?`#27ae60`:n?`#e67e22`:`#ecf0f1`};box-shadow:0 2px 5px rgba(0,0,0,.1);${t?`opacity:.6`:``};">${e.emoji}</div>`}).join(``)}
            </div>
            <!-- Words right -->
            <div style="display:flex;flex-direction:column;gap:10px;">
              ${i.map(e=>{let t=[...a.values()].includes(e);return`<div class="word-item" data-word="${e}" style="height:60px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;font-weight:bold;border-radius:12px;cursor:pointer;background:${t?`#2ecc71`:`#ecf0f1`};color:${t?`white`:`#2c3e50`};border:3px solid ${t?`#27ae60`:`transparent`};${t?`opacity:.6`:``};">${e}</div>`}).join(``)}
            </div>
          </div>
          <div id="iwm-feedback" style="margin-top:15px;font-weight:bold;min-height:24px;"></div>
        </div>`,e.querySelectorAll(`.emoji-item`).forEach(e=>{e.addEventListener(`click`,()=>{[...a.keys()].includes(e.dataset.emoji)||(o=e.dataset.emoji,s())})}),e.querySelectorAll(`.word-item`).forEach(t=>{t.addEventListener(`click`,()=>{if(!o||[...a.values()].includes(t.dataset.word))return;let i=r.find(e=>e.emoji===o)?.word,c=e.querySelector(`#iwm-feedback`);t.dataset.word===i?(a.set(o,t.dataset.word),c.textContent=`✅ Richtig!`,c.style.color=`#2ecc71`):(c.textContent=`❌ Nicht ganz!`,c.style.color=`#e74c3c`),o=null,s(),a.size===r.length&&setTimeout(()=>n({correct:!0,score:100}),700)})})}s()}},"bubble-burst":{id:`bubble-burst`,name_de:`Adjektiv-Blasen`,topics:[`adjektive`,`wortarten`],setup(e,t,n){let r=[`groß`,`klein`,`schnell`,`langsam`,`heiß`,`kalt`,`schön`,`hässlich`,`laut`,`leise`],i=[`laufen`,`Haus`,`schreiben`,`Baum`,`essen`,`Kind`,`fliegen`,`Tisch`],a=0,o=3,s=!1,c;e.innerHTML=`
      <div style="position:relative;width:100%;height:60vh;max-height:500px;background:linear-gradient(to bottom,#87CEEB 0%,#e0f7fa 100%);border-radius:16px;overflow:hidden;touch-action:none;">
        <div style="position:absolute;top:10px;left:10px;right:10px;display:flex;justify-content:space-between;z-index:10;font-family:'Fredoka One',cursive;">
          <span style="background:rgba(255,255,255,.7);padding:4px 12px;border-radius:20px;">💥 <span id="bb-score">0</span></span>
          <span id="bb-lives" style="background:rgba(255,255,255,.7);padding:4px 12px;border-radius:20px;">❤️❤️❤️</span>
        </div>
        <div id="bb-overlay" style="position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <p style="color:white;font-size:1.4rem;font-family:'Fredoka One',cursive;text-align:center;">Zerplatze die ADJEKTIVE!<br><span style="font-size:.9rem;color:#f39c12;">Nomen und Verben stehen lassen!</span></p>
          <button id="bb-start" class="btn btn-primary btn-lg mt-3">Los!</button>
        </div>
        <div id="bb-area" style="position:absolute;inset:0;"></div>
      </div>`;let l=e.querySelector(`#bb-area`),u=e.querySelector(`#bb-score`),d=e.querySelector(`#bb-lives`),f=[],p={adj:[`#3498db`,`#9b59b6`,`#e74c3c`],other:[`#95a5a6`,`#7f8c8d`]};function m(){if(!s)return;let e=Math.random()>.4,t=e?r[Math.floor(Math.random()*r.length)]:i[Math.floor(Math.random()*i.length)],m=e?p.adj[Math.floor(Math.random()*p.adj.length)]:p.other[Math.floor(Math.random()*p.other.length)],h=60+Math.random()*30,g=document.createElement(`div`);g.textContent=t,Object.assign(g.style,{position:`absolute`,bottom:`-80px`,left:`${5+Math.random()*80}%`,width:`${h}px`,height:`${h}px`,borderRadius:`50%`,background:m+`99`,border:`2px solid ${m}`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`.75rem`,fontWeight:`bold`,color:`white`,cursor:`pointer`,userSelect:`none`,transition:`opacity .2s`,textAlign:`center`,padding:`5px`}),l.appendChild(g);let _={el:g,isAdj:e,y:-80,speed:.6+Math.random()*.8};f.push(_),g.addEventListener(`pointerdown`,()=>{s&&(_.isAdj?(a++,u.textContent=a,g.style.transform=`scale(1.5)`,g.style.opacity=`0`):(o--,d.textContent=`❤️`.repeat(Math.max(0,o)),g.style.background=`red`,g.style.opacity=`0`,o<=0&&(s=!1,cancelAnimationFrame(c),setTimeout(()=>n({correct:a>=5,score:Math.min(100,a*10)}),500))),f=f.filter(e=>e!==_),setTimeout(()=>g.remove(),200))})}function h(){if(s){for(let e=f.length-1;e>=0;e--){let t=f[e];t.y+=t.speed,t.el.style.bottom=`${t.y}px`,t.y>l.clientHeight+100&&(t.el.remove(),f.splice(e,1))}if(Math.random()<.015&&m(),a>=10){s=!1,cancelAnimationFrame(c),setTimeout(()=>n({correct:!0,score:100}),300);return}c=requestAnimationFrame(h)}}e.querySelector(`#bb-start`).addEventListener(`click`,()=>{e.querySelector(`#bb-overlay`).style.display=`none`,s=!0,h()})}},"word-family-tree":{id:`word-family-tree`,name_de:`Wort-Familie`,topics:[`wortschatz`,`grammatik`,`verben`],setup(e,t,n){let r=[{root:`laufen`,members:[`Läufer`,`laufend`,`Lauf`,`gelaufen`],imposters:[`Sprung`,`Schwimmer`,`Flug`]},{root:`schreiben`,members:[`Schreiber`,`Schrift`,`geschrieben`,`Schreiben`],imposters:[`Leser`,`Rechner`,`Sprecher`]},{root:`spielen`,members:[`Spieler`,`Spiel`,`gespielt`,`Spielzeug`],imposters:[`Läufer`,`Schüler`,`Tänzer`]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.members.slice(0,4),...i.imposters.slice(0,3)].sort(()=>Math.random()-.5),o=new Set,s=!1;function c(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">🌳</div>
          <p style="color:var(--text-secondary);margin-bottom:5px;">Wurzelwort:</p>
          <div style="font-size:2rem;font-weight:900;font-family:'Fredoka One',cursive;color:#27ae60;margin-bottom:20px;">${i.root}</div>
          <p style="color:var(--text-secondary);margin-bottom:15px;font-size:.9rem;">Welche Wörter gehören zur selben Wort-Familie?</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:20px;">
            ${a.map(e=>{let t=o.has(e);return`<div class="ft-word" data-w="${e}" style="padding:10px 18px;border-radius:20px;font-weight:bold;font-size:1.1rem;cursor:pointer;background:${t?`#3498db`:`#ecf0f1`};color:${t?`white`:`#2c3e50`};border:2px solid ${t?`#2980b9`:`transparent`};transition:all .15s;">${e}</div>`}).join(``)}
          </div>
          <button id="ft-check" class="btn btn-primary" style="width:100%;max-width:300px;">Überprüfen ✓</button>
          ${s?`<div id="ft-result" style="margin-top:15px;font-weight:bold;"></div>`:``}
        </div>`,e.querySelectorAll(`.ft-word`).forEach(e=>{e.addEventListener(`click`,()=>{s||(o.has(e.dataset.w)?o.delete(e.dataset.w):o.add(e.dataset.w),c())})}),e.querySelector(`#ft-check`)?.addEventListener(`click`,()=>{s=!0;let e=new Set(i.members.slice(0,4)),t=0;o.forEach(n=>{e.has(n)&&t++});let r=Math.round(t/e.size*100);setTimeout(()=>n({correct:r>=75,score:r}),1e3)})}c()}},"syllable-stomp":{id:`syllable-stomp`,name_de:`Silben-Stampfer`,topics:[`silben`],setup(e,t,n){let r=[{word:`Hund`,syllables:1},{word:`Katze`,syllables:2},{word:`Schmetterling`,syllables:3},{word:`Unterhaltung`,syllables:4},{word:`Blume`,syllables:2},{word:`Apfelbaum`,syllables:3},{word:`Auto`,syllables:2},{word:`Haus`,syllables:1}].sort(()=>Math.random()-.5).slice(0,4),i=0,a=0;function o(){let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:5px;">${i+1}/${r.length}</p>
          <p style="color:var(--text-secondary);margin-bottom:20px;">Wie viele Silben hat das Wort?</p>
          <div style="font-size:3rem;font-weight:900;font-family:'Fredoka One',cursive;color:#2c3e50;margin-bottom:10px;">${t.word}</div>
          <div style="font-size:.9rem;color:#7f8c8d;margin-bottom:30px;">Tippe so oft wie Silben!</div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            ${[1,2,3,4,5].map(e=>`
              <button class="stomp-btn" data-n="${e}" style="width:62px;height:62px;border-radius:50%;font-size:1.8rem;font-weight:900;background:#e74c3c;color:white;border:none;box-shadow:0 6px 0 #c0392b;cursor:pointer;transition:all .1s;">${e}</button>
            `).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.stomp-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.stomp-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=parseInt(s.dataset.n)===t.syllables;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,s.style.transform=`translateY(6px)`,!c){let n=e.querySelector(`.stomp-btn[data-n="${t.syllables}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>=2,score:Math.round(a/r.length*100)}):o()},1e3)})})}o()}},"tense-switcher":{id:`tense-switcher`,name_de:`Zeitformen-Schalter`,topics:[`zeitformen`,`grammatik`],setup(e,t,n){let r=[{present:`Ich esse einen Apfel.`,past:`Ich aß einen Apfel.`,from:`Präsens`,to:`Vergangenheit`,verb:`esse`,pastVerb:`aß`,options:[`aß`,`frisst`,`gegessen`,`isst`]},{present:`Er schläft tief.`,past:`Er schlief tief.`,from:`Präsens`,to:`Vergangenheit`,verb:`schläft`,pastVerb:`schlief`,options:[`schlief`,`schläfert`,`schlafe`,`schläfst`]},{present:`Wir laufen schnell.`,past:`Wir liefen schnell.`,from:`Präsens`,to:`Vergangenheit`,verb:`laufen`,pastVerb:`liefen`,options:[`liefen`,`lauften`,`gelaufen`,`läuft`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:20px;">
          <span style="background:#3498db;color:white;padding:5px 12px;border-radius:20px;font-weight:bold;">${i.from}</span>
          <span style="font-size:1.5rem;">-></span>
          <span style="background:#e74c3c;color:white;padding:5px 12px;border-radius:20px;font-weight:bold;">${i.to}</span>
        </div>
        <div style="font-size:1.4rem;font-weight:bold;color:#2c3e50;background:rgba(255,255,255,0.8);padding:20px;border-radius:12px;margin-bottom:15px;">${i.present}</div>
        <div style="margin-bottom:25px;font-size:1.3rem;color:#7f8c8d;">
          ${i.past.replace(i.pastVerb,`<span style="border-bottom:3px dashed #e74c3c;color:#e74c3c;padding:0 5px;">_____</span>`)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="ts-btn" data-o="${e}" style="padding:14px;font-size:1.2rem;border-radius:10px;border:none;cursor:pointer;background:#34495e;color:white;font-weight:bold;box-shadow:0 4px 0 #2c3e50;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.ts-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.ts-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.pastVerb;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,!r){let t=e.querySelector(`.ts-btn[data-o="${i.pastVerb}"]`);t&&(t.style.background=`#2ecc71`,t.style.boxShadow=`none`)}setTimeout(()=>n({correct:r,score:r?100:0}),1200)})})}},"word-avalanche":{id:`word-avalanche`,name_de:`Wort-Lawine`,topics:[`wortschatz`,`nomen`,`adjektive`],setup(e,t,n){let r=[`Hund`,`Haus`,`Baum`,`Katze`,`Auto`,`Kind`,`Buch`,`Sonne`],i=[`laufen`,`essen`,`singen`,`schlafen`,`trinken`,`rennen`],a=[`groß`,`klein`,`laut`,`schnell`,`heiß`],o=0,s=0;function c(){let e=r.sort(()=>Math.random()-.5).slice(0,2),t=[...i,...a].sort(()=>Math.random()-.5).slice(0,3);return[...e.map(e=>({word:e,type:`noun`})),...t.map(e=>({word:e,type:`other`}))].sort(()=>Math.random()-.5)}function l(){if(o>=4){n({correct:s>=4*.6,score:Math.round(s/4*100)});return}let t=c(),r=new Set;e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
            <span style="color:#3498db;font-weight:bold;">Runde ${o+1}/4</span>
            <span style="color:#27ae60;font-weight:bold;">Score: ${s}</span>
          </div>
          <p style="color:var(--text-secondary);margin-bottom:15px;">Markiere alle <b style="color:#e74c3c;">Nomen</b>!</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:20px;">
            ${t.map((e,t)=>`<div class="av-word" data-idx="${t}" data-type="${e.type}" style="padding:10px 18px;border-radius:20px;font-size:1.1rem;font-weight:bold;cursor:pointer;background:#ecf0f1;color:#2c3e50;border:2px solid transparent;transition:all .15s;">${e.word}</div>`).join(``)}
          </div>
          <button id="av-submit" class="btn btn-primary" style="width:100%;max-width:250px;">Bestätigen ✓</button>
        </div>`,e.querySelectorAll(`.av-word`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.idx;r.has(t)?(r.delete(t),e.style.background=`#ecf0f1`,e.style.borderColor=`transparent`,e.style.color=`#2c3e50`):(r.add(t),e.style.background=`#e74c3c`,e.style.borderColor=`#c0392b`,e.style.color=`white`)})}),e.querySelector(`#av-submit`).addEventListener(`click`,()=>{e.querySelectorAll(`.av-word`).forEach(e=>e.style.pointerEvents=`none`);let n=0;e.querySelectorAll(`.av-word`).forEach(e=>{let t=e.dataset.type===`noun`,i=r.has(e.dataset.idx);t&&(e.style.border=`2px solid #2ecc71`),i&&t?(n++,e.style.background=`#2ecc71`,e.style.color=`white`):i&&!t?e.style.background=`#e74c3c`:!i&&t&&(e.style.background=`#f39c12`,e.style.color=`white`)});let i=t.filter(e=>e.type===`noun`).length;n===i&&s++,o++,setTimeout(l,1400)})}l()}},"question-word-match":{id:`question-word-match`,name_de:`Fragewort-Polizei`,topics:[`grammatik`,`satzbau`],setup(e,t,n){let r=[{scene:`🏠 Es ist ein Haus.`,answer:`Was`,question:`_______ ist das?`,options:[`Was`,`Wer`,`Wo`,`Wann`]},{scene:`👧 Es ist Maria.`,answer:`Wer`,question:`_______ ist das?`,options:[`Was`,`Wer`,`Wie`,`Wohin`]},{scene:`🏫 Es ist in der Schule.`,answer:`Wo`,question:`_______ ist er?`,options:[`Wann`,`Wo`,`Warum`,`Wie`]},{scene:`⏰ Es ist um 8 Uhr.`,answer:`Wann`,question:`_______ beginnt die Schule?`,options:[`Wo`,`Wie`,`Wann`,`Wer`]},{scene:`🚗💨 Er fährt sehr schnell.`,answer:`Wie`,question:`_______ fährt er?`,options:[`Warum`,`Wie`,`Wer`,`Wann`]}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${i+1}/${r.length}</div>
          <div style="font-size:2.5rem;margin-bottom:5px;">${t.scene}</div>
          <div style="font-size:1.3rem;font-weight:bold;color:#2c3e50;margin-bottom:25px;">${t.question}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${t.options.map(e=>`<button class="qw-btn" data-o="${e}" style="padding:15px;font-size:1.3rem;border-radius:10px;border:none;cursor:pointer;background:#3498db;color:white;font-weight:bold;box-shadow:0 4px 0 #2980b9;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.qw-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.qw-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.answer;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.qw-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1e3)})})}o()}},"color-words":{id:`color-words`,name_de:`Farb-Verwirrung`,topics:[`konzentration`,`lesen`,`wortschatz`],setup(e,t,n){let r=[{de:`Rot`,hex:`#e74c3c`},{de:`Blau`,hex:`#3498db`},{de:`Grün`,hex:`#2ecc71`},{de:`Gelb`,hex:`#f1c40f`},{de:`Lila`,hex:`#9b59b6`}],i=0,a=0;function o(){if(i>=5){n({correct:a>=3,score:Math.round(a/5*100)});return}let t=r[Math.floor(Math.random()*r.length)],s=r[Math.floor(Math.random()*r.length)];for(;s.de===t.de;)s=r[Math.floor(Math.random()*r.length)];let c=[...r].sort(()=>Math.random()-.5).slice(0,3);c.find(e=>e.de===s.de)||(c[0]=s),c.sort(()=>Math.random()-.5),e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${i+1}/5 - ⚡ reagiere schnell!</div>
          <p style="color:var(--text-secondary);margin-bottom:15px;">Tippe auf die <b>TINTENFARBE</b> des Wortes!</p>
          
          <div style="font-size:5rem;font-weight:900;color:${s.hex};margin:30px 0;font-family:'Fredoka One',cursive;text-shadow:0 3px 10px rgba(0,0,0,.1);">
            ${t.de}
          </div>

          <div style="display:flex;gap:15px;justify-content:center;flex-wrap:wrap;">
            ${c.map(e=>`
              <button class="cw-btn" data-de="${e.de}" style="width:80px;height:80px;border-radius:50%;background:${e.hex};border:4px solid rgba(255,255,255,0.5);cursor:pointer;box-shadow:0 4px 10px rgba(0,0,0,.2);transition:transform .1s;"></button>
            `).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.cw-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.cw-btn`).forEach(e=>e.style.pointerEvents=`none`);let n=t.dataset.de===s.de;t.style.transform=`scale(1.3)`,t.style.boxShadow=`0 0 0 5px ${n?`#2ecc71`:`#e74c3c`}`,n&&a++,i++,setTimeout(o,800)})})}o()}},"password-crack":{id:`password-crack`,name_de:`Passwort-Knacker`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{word:`Hund`,clues:[`Es ist ein Tier.`,`Es hat vier Beine.`,`Es bellt.`,`Man hält es als Haustier.`]},{word:`Auto`,clues:[`Es ist ein Fahrzeug.`,`Es hat Räder.`,`Man braucht Benzin.`,`Es fährt auf Straßen.`]},{word:`Sonne`,clues:[`Es ist am Himmel.`,`Es ist sehr heiß.`,`Es leuchtet.`,`Es geht auf und unter.`]}],i=r[Math.floor(Math.random()*r.length)],a=0,o=[];function s(){let t=[i.word,...[`Baum`,`Katze`,`Mond`,`Schiff`,`Berg`].filter(e=>e!==i.word).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:3rem;margin-bottom:5px;">🔐</div>
          <p style="color:var(--text-secondary);margin-bottom:15px;">Welches Wort steckt hinter dem Passwort?</p>
          
          <div style="background:rgba(255,255,255,0.6);border-radius:12px;padding:15px;margin-bottom:20px;text-align:left;">
            ${o.length===0?`<p style="color:#7f8c8d;text-align:center;">Noch kein Hinweis...</p>`:``}
            ${o.map((e,t)=>`<div style="display:flex;gap:8px;align-items:start;margin-bottom:8px;"><span style="background:#3498db;color:white;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:bold;flex-shrink:0;">${t+1}</span><p style="margin:0;color:#2c3e50;">${e}</p></div>`).join(``)}
          </div>

          ${a<i.clues.length?`<button id="pc-hint" class="btn btn-secondary" style="margin-bottom:15px;width:100%;max-width:250px;">💡 Hinweis #${a+1} anzeigen</button>`:``}

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${t.map(e=>`<button class="pc-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 3px 0 #bdc3c7;">${e}</button>`).join(``)}
          </div>
          <p style="font-size:.8rem;color:#7f8c8d;margin-top:10px;">Je früher du rätst, desto mehr Punkte!</p>
        </div>`,e.querySelector(`#pc-hint`)?.addEventListener(`click`,()=>{o.push(i.clues[a]),a++,s()}),e.querySelectorAll(`.pc-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.pc-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.word;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.color=`white`,t.style.boxShadow=`none`,!r){let t=e.querySelector(`.pc-btn[data-o="${i.word}"]`);t&&(t.style.background=`#2ecc71`,t.style.color=`white`,t.style.boxShadow=`none`)}let a=o.length*20,s=Math.max(20,r?100-a:0);setTimeout(()=>n({correct:r,score:s}),1200)})})}s()}},"letter-drop":{id:`letter-drop`,name_de:`Buchstaben-Fang`,topics:[`rechtschreibung`,`konzentration`],setup(e,t,n){let r=[`HUND`,`BAUM`,`AUTO`,`BUCH`,`SONNE`,`HAUS`],i=r[Math.floor(Math.random()*r.length)],a=``,o=!1,s,c=[];e.innerHTML=`
      <div style="position:relative;width:100%;height:65vh;max-height:520px;background:linear-gradient(to bottom,#1a1a2e,#16213e);border-radius:16px;overflow:hidden;touch-action:none;">
        <div style="position:absolute;top:10px;left:0;right:0;text-align:center;z-index:10;font-family:'Fredoka One',cursive;">
          <div style="display:inline-block;background:rgba(255,255,255,.1);backdrop-filter:blur(5px);padding:8px 20px;border-radius:20px;">
            <span style="color:#7f8c8d;font-size:.85rem;">Fange: </span>
            <span style="color:white;font-size:1.4rem;letter-spacing:6px;">${i.split(``).map((e,t)=>`<span id="lt-ch-${t}" style="border-bottom:2px solid #7f8c8d;padding:0 2px;">${e}</span>`).join(``)}</span>
          </div>
        </div>
        <div style="position:absolute;top:55px;left:0;right:0;text-align:center;z-index:10;">
          <span style="color:#f1c40f;font-size:1.1rem;letter-spacing:4px;" id="lt-collected">${`_`.repeat(i.length)}</span>
        </div>
        <div id="lt-overlay" style="position:absolute;inset:0;background:rgba(0,0,0,.5);z-index:50;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;">
          <p style="color:white;font-size:1.5rem;font-family:'Fredoka One',cursive;text-align:center;">Fange die richtigen Buchstaben in der richtigen Reihenfolge!</p>
          <button id="lt-start" class="btn btn-primary btn-lg">Los!</button>
        </div>
        <div id="lt-area" style="position:absolute;inset:0;overflow:hidden;"></div>
      </div>`;let l=e.querySelector(`#lt-area`),u=e.querySelector(`#lt-collected`);function d(){u.innerHTML=i.split(``).map((e,t)=>t<a.length?`<span style="color:#2ecc71;">${e}</span>`:`<span style="color:#7f8c8d;">_</span>`).join(``),i.split(``).forEach((t,n)=>{let r=e.querySelector(`#lt-ch-${n}`);r&&n<a.length&&(r.style.color=`#2ecc71`,r.style.borderColor=`#2ecc71`)})}function f(){if(!o)return;let e=i[a.length],t=Math.random()>.5,r=t?e:`ABCDEFGHIJKLMNOPQRSTUVWXYZ`.split(``).filter(t=>t!==e)[Math.floor(Math.random()*25)],u=document.createElement(`div`);u.textContent=r;let f=5+Math.random()*80;Object.assign(u.style,{position:`absolute`,top:`-60px`,left:`${f}%`,width:`50px`,height:`50px`,borderRadius:`50%`,background:`radial-gradient(circle at 35% 35%, ${t?`#f39c12`:`#8e44ad`}, ${t?`#e67e22`:`#6c3483`})`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.6rem`,fontWeight:`bold`,color:`white`,cursor:`pointer`,userSelect:`none`,boxShadow:`0 4px 15px rgba(0,0,0,.4)`,transition:`transform .1s, opacity .2s`}),l.appendChild(u);let p={el:u,letter:r,y:-60,speed:1.2+Math.random()*1};c.push(p),u.addEventListener(`pointerdown`,()=>{if(o)if(r===i[a.length]){a+=r,d(),u.style.transform=`scale(1.5)`,u.style.opacity=`0`;let e=c.indexOf(p);e>=0&&c.splice(e,1),setTimeout(()=>u.remove(),200),a===i&&(o=!1,cancelAnimationFrame(s),setTimeout(()=>n({correct:!0,score:100}),500))}else u.style.background=`radial-gradient(circle at 35% 35%, #e74c3c, #c0392b)`,setTimeout(()=>{u.style&&(u.style.background=`radial-gradient(circle at 35% 35%, ${t?`#f39c12`:`#8e44ad`}, ${t?`#e67e22`:`#6c3483`})`)},300)}),setTimeout(()=>{if(!l.contains(u))return;i[a.length];let e=c.indexOf(p);e>=0&&c.splice(e,1),u.remove()},6e3)}function p(){if(o){for(let e of c)e.y+=e.speed,e.el.style.top=`${e.y}px`,e.y>l.clientHeight+60&&e.el.remove();Math.random()<.018&&c.length<6&&f(),s=requestAnimationFrame(p)}}e.querySelector(`#lt-start`).addEventListener(`click`,()=>{e.querySelector(`#lt-overlay`).style.display=`none`,o=!0,p(),setTimeout(()=>{o&&(o=!1,n({correct:!1,score:Math.round(a.length/i.length*100)}))},3e4)})}},"capital-detective":{id:`capital-detective`,name_de:`Groß-Detektor`,topics:[`gross_klein`,`rechtschreibung`],setup(e,t,n){let r=[{words:[`der`,`hund`,`läuft`,`im`,`garten`,`des`,`hauses`],nouns:[1,4,6]},{words:[`meine`,`katze`,`schläft`,`auf`,`dem`,`sofa`],nouns:[1,5]},{words:[`das`,`kind`,`liest`,`ein`,`buch`,`über`,`tiere`],nouns:[1,4,6]},{words:[`im`,`sommer`,`spielen`,`die`,`kinder`,`im`,`park`],nouns:[1,4,6]}],i=r[Math.floor(Math.random()*r.length)],a=new Set;function o(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">🕵️</div>
          <p style="color:var(--text-secondary);margin-bottom:20px;font-size:.9rem;">Tippe auf alle Wörter, die <b>groß</b> geschrieben werden müssen!</p>
          <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;min-height:60px;margin-bottom:25px;background:rgba(255,255,255,.6);border-radius:12px;padding:15px;align-items:center;">
            ${i.words.map((e,t)=>`
              <div class="cd-word" data-idx="${t}" style="padding:8px 14px;border-radius:8px;font-size:1.2rem;font-weight:bold;cursor:pointer;background:${a.has(t)?`#3498db`:`#ecf0f1`};color:${a.has(t)?`white`:`#2c3e50`};border:2px solid ${a.has(t)?`#2980b9`:`transparent`};transition:all .15s;">${e}</div>
            `).join(``)}
          </div>
          <button id="cd-check" class="btn btn-primary" style="width:100%;max-width:280px;">Überprüfen ✓</button>
        </div>`,e.querySelectorAll(`.cd-word`).forEach(e=>{e.addEventListener(`click`,()=>{let t=parseInt(e.dataset.idx);a.has(t)?a.delete(t):a.add(t),o()})}),e.querySelector(`#cd-check`).addEventListener(`click`,()=>{e.querySelectorAll(`.cd-word`).forEach(e=>e.style.pointerEvents=`none`);let t=new Set(i.nouns),r=0;e.querySelectorAll(`.cd-word`).forEach(e=>{let n=parseInt(e.dataset.idx),i=t.has(n),o=a.has(n);i&&o?(e.style.background=`#2ecc71`,e.style.color=`white`,r++):!i&&o?(e.style.background=`#e74c3c`,e.style.color=`white`):i&&!o&&(e.style.background=`#f39c12`,e.style.color=`white`)});let o=Math.round(r/i.nouns.length*100);setTimeout(()=>n({correct:o>=75,score:o}),1500)})}o()}},"adjective-endings":{id:`adjective-endings`,name_de:`Adjektiv-Endung`,topics:[`adjektive`,`grammatik`],setup(e,t,n){let r=[{sentence:`Der groß___ Hund bellt laut.`,answer:`e`,options:[`e`,`en`,`er`,`es`],note:`der Hund -> nominativ maskulin -> -e`},{sentence:`Ich sehe den klein___ Vogel.`,answer:`en`,options:[`e`,`en`,`er`,`es`],note:`den Vogel -> akkusativ maskulin -> -en`},{sentence:`Das schön___ Haus ist alt.`,answer:`e`,options:[`e`,`en`,`er`,`es`],note:`das Haus -> nominativ neutrum -> -e`},{sentence:`Sie hat ein´ rot___ Kleid.`,answer:`es`,options:[`e`,`en`,`er`,`es`],note:`ein Kleid -> neutrum indef. -> -es`},{sentence:`Der Saft ist aus einer reif___ Orange.`,answer:`en`,options:[`e`,`en`,`er`,`es`],note:`einer Orange -> dativ feminin -> -en`}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i],s=t.sentence.replace(`___`,`<span style="background:#f1c40f;color:black;padding:2px 4px;border-radius:4px;font-weight:bold;">___</span>`);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:15px;">${i+1}/${r.length}</div>
          <div style="font-size:1.3rem;font-weight:bold;color:#2c3e50;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;margin-bottom:25px;border-left:5px solid #9b59b6;">
            ${s}
          </div>
          <p style="color:var(--text-secondary);margin-bottom:15px;">Welche Endung fehlt?</p>
          <div style="display:flex;gap:10px;justify-content:center;">
            ${t.options.map(e=>`<button class="ae-btn" data-o="${e}" style="width:65px;height:65px;border-radius:50%;font-size:1.3rem;font-weight:bold;background:#9b59b6;color:white;border:none;box-shadow:0 5px 0 #8e44ad;cursor:pointer;">-${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.ae-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.ae-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.answer;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.ae-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"german-idiom":{id:`german-idiom`,name_de:`Redewendungs-Rätsler`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{idiom:`Das ist nicht mein Bier.`,meaning:`Das geht mich nichts an.`,distractors:[`Ich mag kein Bier.`,`Das schmeckt nicht gut.`,`Das ist zu teuer.`]},{idiom:`Ich drücke dir die Daumen!`,meaning:`Ich wünsche dir viel Glück!`,distractors:[`Ich schreibe dir eine Nachricht.`,`Ich zeige dir etwas.`,`Ich halte dich fest.`]},{idiom:`Das ist ein Katzensprung.`,meaning:`Es ist nicht weit weg.`,distractors:[`Die Katze springt hoch.`,`Das ist schwer zu lernen.`,`Das dauert sehr lange.`]},{idiom:`Ich verstehe nur Bahnhof.`,meaning:`Ich verstehe gar nichts.`,distractors:[`Ich mag Bahnhöfe sehr.`,`Ich fahre gerne Bahn.`,`Ich bin Student.`]},{idiom:`Das geht wie Öl.`,meaning:`Das läuft sehr reibungslos.`,distractors:[`Das ist sehr schwierig.`,`Das ist sehr teuer.`,`Das schmeckt fettig.`]}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i],s=[t.meaning,...t.distractors].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">🤌</div>
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${i+1}/${r.length}</div>
          <div style="font-size:1.4rem;font-style:italic;font-weight:bold;color:#e67e22;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;margin-bottom:5px;border:2px solid #e67e22;">
            „${t.idiom}"
          </div>
          <p style="color:var(--text-secondary);margin-bottom:20px;font-size:.9rem;">Was bedeutet das wirklich?</p>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${s.map(e=>`<button class="gi-btn" data-o="${e}" style="padding:13px;font-size:1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;text-align:left;box-shadow:0 2px 0 #bdc3c7;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.gi-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.gi-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.meaning;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.color=`white`,s.style.boxShadow=`none`,!c){let n=[...e.querySelectorAll(`.gi-btn`)].find(e=>e.dataset.o===t.meaning);n&&(n.style.background=`#2ecc71`,n.style.color=`white`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"blitz-quiz":{id:`blitz-quiz`,name_de:`Blitz-Quiz`,topics:[`wortschatz`,`grammatik`,`lesen`],setup(e,t,n){let r=[{q:`"Baum" ist ein Nomen.`,answer:!0},{q:`"laufen" ist ein Adjektiv.`,answer:!1},{q:`Der Plural von "Haus" ist "Häuser".`,answer:!0},{q:`"Die" Hund ist immer richtig.`,answer:!1},{q:`"schön" ist ein Adjektiv.`,answer:!0},{q:`Nomen werden immer klein geschrieben.`,answer:!1},{q:`"schnell" kann auch ein Adverb sein.`,answer:!0},{q:`"Ich gehe" ist Vergangenheit.`,answer:!1},{q:`"Katzen" ist der Plural von "Katze".`,answer:!0},{q:`Verben konjugiert man nach dem Subjekt.`,answer:!0}].sort(()=>Math.random()-.5).slice(0,8),i=0,a=0,o,s;function c(){if(i>=r.length){n({correct:a>=5,score:Math.round(a/r.length*100)});return}let t=r[i];o=4,e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span style="color:#3498db;font-weight:bold;">${i+1}/${r.length}</span>
            <span style="color:#e74c3c;font-weight:900;font-size:1.2rem;" id="bq-timer">⚡4</span>
            <span style="color:#2ecc71;font-weight:bold;">✔ ${a}</span>
          </div>
          <div id="bq-bar-wrap" style="height:6px;background:#ecf0f1;border-radius:3px;margin-bottom:20px;overflow:hidden;">
            <div id="bq-bar" style="height:100%;width:100%;background:#3498db;transition:width .2s linear;"></div>
          </div>
          <div style="font-size:1.3rem;font-weight:bold;color:#2c3e50;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;margin-bottom:25px;min-height:80px;display:flex;align-items:center;justify-content:center;">
            ${t.q}
          </div>
          <div style="display:flex;gap:15px;justify-content:center;">
            <button class="bq-btn" data-ans="true" style="flex:1;max-width:140px;height:80px;border-radius:16px;font-size:1.4rem;font-weight:bold;background:#2ecc71;color:white;border:none;box-shadow:0 6px 0 #27ae60;cursor:pointer;">✅ Wahr</button>
            <button class="bq-btn" data-ans="false" style="flex:1;max-width:140px;height:80px;border-radius:16px;font-size:1.4rem;font-weight:bold;background:#e74c3c;color:white;border:none;box-shadow:0 6px 0 #c0392b;cursor:pointer;">❌ Falsch</button>
          </div>
        </div>`;let l=e.querySelector(`#bq-bar`),u=e.querySelector(`#bq-timer`);s=setInterval(()=>{o-=.1,l.style.width=`${o/4*100}%`,l.style.background=o>2?`#3498db`:`#e74c3c`,u.textContent=`⚡${Math.ceil(o)}`,o<=0&&(clearInterval(s),e.querySelectorAll(`.bq-btn`).forEach(e=>e.style.pointerEvents=`none`),i++,setTimeout(c,500))},100),e.querySelectorAll(`.bq-btn`).forEach(n=>{n.addEventListener(`click`,()=>{clearInterval(s),e.querySelectorAll(`.bq-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=n.dataset.ans===`true`===t.answer;if(n.style.boxShadow=`none`,n.style.transform=`translateY(6px)`,r)a++,n.style.outline=`4px solid white`;else{n.style.opacity=`.5`;let r=e.querySelector(`.bq-btn[data-ans="${t.answer}"]`);r&&(r.style.outline=`4px solid white`)}i++,setTimeout(c,600)})})}c()}},"alphabet-sort":{id:`alphabet-sort`,name_de:`Alphabet-Reihe`,topics:[`alphabet`,`wortschatz`],setup(e,t,n){let r=[[`Hund`,`Apfel`,`Zebra`,`Baum`,`Eimer`],[`Maus`,`Katze`,`Frosch`,`Adler`,`Wolf`],[`Tisch`,`Regal`,`Lampe`,`Küche`,`Gabel`]],i=r[Math.floor(Math.random()*r.length)],a=[...i].sort((e,t)=>e.localeCompare(t,`de`)),o=[...i].sort(()=>Math.random()-.5),s=0,c=[];function l(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:15px;">Tippe die Wörter in alphabetischer Reihenfolge!</p>
          
          <!-- Progress display -->
          <div style="display:flex;gap:8px;justify-content:center;margin-bottom:20px;flex-wrap:wrap;">
            ${a.map((e,t)=>`
              <div style="padding:6px 14px;border-radius:20px;font-weight:bold;font-size:.95rem;background:${t<c.length?`#2ecc71`:`rgba(255,255,255,.4)`};color:${t<c.length?`white`:`#7f8c8d`};border:2px solid ${t<c.length?`#27ae60`:`#bdc3c7`};">
                ${t<c.length?c[t]:t===c.length?`__?__`:`___`}
              </div>
            `).join(``)}
          </div>

          <!-- Word buttons -->
          <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
            ${o.map(e=>{let t=c.includes(e);return`<button class="as-btn" data-w="${e}" style="padding:12px 18px;font-size:1.2rem;border-radius:10px;border:none;cursor:${t?`default`:`pointer`};background:${t?`#95a5a6`:`#3498db`};color:white;font-weight:bold;box-shadow:${t?`none`:`0 4px 0 #2980b9`};opacity:${t?.5:1};">${e}</button>`}).join(``)}
          </div>
          <div id="as-streak" style="margin-top:15px;font-size:1rem;font-weight:bold;min-height:20px;"></div>
        </div>`,e.querySelectorAll(`.as-btn`).forEach(t=>{c.includes(t.dataset.w)||t.addEventListener(`click`,()=>{let r=t.dataset.w;if(r===a[s]){if(c.push(r),s++,t.style.background=`#2ecc71`,s>=a.length){l(),setTimeout(()=>n({correct:!0,score:100}),800);return}}else{t.style.background=`#e74c3c`,setTimeout(()=>l(),500),e.querySelector(`#as-streak`).textContent=`❌ Falsch! ${a[s]} wäre als nächstes dran.`;return}l()})})}l()}},"modal-verb":{id:`modal-verb`,name_de:`Modalverb-Meister`,topics:[`verben`,`grammatik`,`zeitformen`],setup(e,t,n){let r=[{sentence:`Ich ___ heute nicht schlafen.`,answer:`kann`,options:[`kann`,`will`,`muss`,`darf`],tip:`Fähigkeit`},{sentence:`Du ___ hier nicht rauchen!`,answer:`darfst`,options:[`kannst`,`willst`,`darfst`,`musst`],tip:`Erlaubnis`},{sentence:`Wir ___ morgen früh aufstehen.`,answer:`müssen`,options:[`dürfen`,`wollen`,`können`,`müssen`],tip:`Pflicht`},{sentence:`Sie ___ einen Kuchen backen.`,answer:`will`,options:[`muss`,`will`,`darf`,`kann`],tip:`Wunsch/Wille`},{sentence:`Er ___ sehr gut Gitarre spielen.`,answer:`kann`,options:[`will`,`muss`,`kann`,`darf`],tip:`Fähigkeit`}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${i+1}/${r.length} · Hinweis: ${t.tip}</div>
          <div style="font-size:1.5rem;font-weight:bold;color:#2c3e50;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;margin-bottom:25px;line-height:2;">
            ${t.sentence.replace(`___`,`<span style="border-bottom:3px solid #e74c3c;color:#e74c3c;padding:0 8px;">___</span>`)}
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${t.options.map(e=>`<button class="mv-btn" data-o="${e}" style="padding:15px;font-size:1.2rem;border-radius:10px;border:none;cursor:pointer;background:#e67e22;color:white;font-weight:bold;box-shadow:0 4px 0 #d35400;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.mv-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.mv-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.answer;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.mv-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"fill-the-poem":{id:`fill-the-poem`,name_de:`Gedicht-Lücke`,topics:[`reime`,`lesen`,`wortschatz`],setup(e,t,n){let r=[{lines:[{text:`Im Garten blüht eine rote`,blank:!1},{text:`___`,blank:!0,answer:`Rose`,options:[`Rose`,`Nase`,`Dose`,`Hose`]},{text:`Und neben ihr sitzt eine weiße`,blank:!1},{text:`___`,blank:!0,answer:`Gans`,options:[`Gans`,`Hans`,`Tanz`,`Glanz`]}]},{lines:[{text:`Der Hund liegt faul im`,blank:!1},{text:`___`,blank:!0,answer:`Gras`,options:[`Gras`,`Fass`,`Spaß`,`Maß`]},{text:`Und träumt von einem großen`,blank:!1},{text:`___`,blank:!0,answer:`Knochen`,options:[`Knochen`,`Wochen`,`Kochen`,`Pochen`]}]}],i=r[Math.floor(Math.random()*r.length)],a=i.lines.filter(e=>e.blank),o=0,s=0,c={};function l(){if(o>=a.length){e.innerHTML=`<div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:10px;">📜🎉</div>
          <div style="font-size:1.3rem;line-height:2.2;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;">${i.lines.map(e=>e.blank?`<span style="background:#2ecc71;color:white;padding:2px 8px;border-radius:6px;font-weight:bold;">${c[e.answer]||e.answer}</span>`:`<span>${e.text}</span>`).join(`<br>`)}</div>
        </div>`,setTimeout(()=>n({correct:s===a.length,score:Math.round(s/a.length*100)}),1500);return}let t=a[o];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:10px;">📜</div>
          <div style="font-size:1.3rem;line-height:2.5;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;margin-bottom:20px;">${i.lines.map(e=>{if(e.blank){let n=c[e.answer];return n?`<span style="background:#2ecc71;color:white;padding:2px 8px;border-radius:6px;">${n}</span>`:e===t?`<span style="border-bottom:3px dashed #e74c3c;color:#e74c3c;padding:0 20px;font-size:1.1rem;">___</span>`:`<span style="border-bottom:2px solid #bdc3c7;padding:0 15px;">&nbsp;&nbsp;&nbsp;</span>`}return`<span>${e.text}</span>`}).join(`<br>`)}</div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;">
            ${t.options.map(e=>`<button class="fp-btn" data-o="${e}" style="padding:10px 18px;font-size:1.1rem;border-radius:20px;border:none;cursor:pointer;background:#9b59b6;color:white;font-weight:bold;box-shadow:0 3px 0 #8e44ad;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.fp-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`.fp-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=n.dataset.o===t.answer;if(n.style.background=r?`#2ecc71`:`#e74c3c`,n.style.boxShadow=`none`,!r){let n=[...e.querySelectorAll(`.fp-btn`)].find(e=>e.dataset.o===t.answer);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}r?(s++,c[t.answer]=t.answer):c[t.answer]=t.options.find(e=>e!==t.answer)||t.answer,o++,setTimeout(l,1e3)})})}l()}},"word-star":{id:`word-star`,name_de:`Wort-Sterne`,topics:[`rechtschreibung`,`wortschatz`],setup(e,t,n){let r=[{letters:`HAUS`,validWords:[`HAUS`,`AUS`,`HAS`,`SAU`,`AUF`]},{letters:`TISCH`,validWords:[`TISCH`,`ISCH`,`IST`,`TIS`]},{letters:`BAUM`,validWords:[`BAUM`,`BAU`,`AUM`,`MUB`]}],i=new Set([`HAUS`,`AUS`,`SAU`,`TIS`,`IST`,`TISCH`,`BAUM`,`BAU`,`AU`,`AB`,`IM`,`IN`,`EIN`,`ICH`,`BIN`,`ARM`,`URN`,`HAT`,`HAS`,`MAN`,`NUR`]),a=r[Math.floor(Math.random()*r.length)],o=new Set,s=45,c;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
          <span style="color:#3498db;font-weight:bold;">Gefunden: <span id="ws-count">0</span></span>
          <span style="color:#e74c3c;font-weight:900;" id="ws-timer">⏱ 45</span>
        </div>
        <p style="color:var(--text-secondary);margin-bottom:10px;">Bilde W\u00f6rter aus diesen Buchstaben!</p>
        <div style="display:flex;gap:10px;justify-content:center;margin-bottom:20px;">
          ${a.letters.split(``).map(e=>`<div style="width:50px;height:50px;background:#e74c3c;color:white;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:900;box-shadow:0 4px 0 #c0392b;">${e}</div>`).join(``)}
        </div>
        <div style="display:flex;gap:10px;align-items:center;justify-content:center;margin-bottom:15px;">
          <input id="ws-input" type="text" placeholder="Wort eingeben..." autocomplete="off" autocorrect="off" spellcheck="false" style="padding:12px;font-size:1.2rem;border-radius:8px;border:2px solid #3498db;outline:none;text-transform:uppercase;width:200px;">
          <button id="ws-submit" class="btn btn-primary">OK</button>
        </div>
        <div id="ws-found" style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;min-height:40px;"></div>
        <div id="ws-msg" style="margin-top:10px;font-size:.9rem;color:#e74c3c;min-height:20px;"></div>
      </div>`;let l=e.querySelector(`#ws-input`),u=e.querySelector(`#ws-found`),d=e.querySelector(`#ws-count`),f=e.querySelector(`#ws-timer`),p=e.querySelector(`#ws-msg`);c=setInterval(()=>{if(s--,f.textContent=`⏱ ${s}`,s<=0){clearInterval(c);let e=Math.min(100,o.size*20);setTimeout(()=>n({correct:o.size>=2,score:e}),300)}},1e3);function m(){let e=l.value.trim().toUpperCase();if(l.value=``,o.has(e)){p.textContent=`Schon gefunden!`;return}let t=a.letters.split(``);if(!e.split(``).every(e=>{let n=t.indexOf(e);return n>=0?(t.splice(n,1),!0):!1})||e.length<2){p.textContent=`Ungültig!`;return}if(!i.has(e)&&!a.validWords.includes(e)){p.textContent=`Unbekanntes Wort!`;return}o.add(e),p.textContent=`⭐ Super!`,p.style.color=`#2ecc71`,setTimeout(()=>p.style.color=`#e74c3c`,800),d.textContent=o.size,u.innerHTML=[...o].map(e=>`<span style="background:#3498db;color:white;padding:4px 10px;border-radius:14px;font-size:.9rem;font-weight:bold;">${e}</span>`).join(``),o.size>=4&&(clearInterval(c),setTimeout(()=>n({correct:!0,score:100}),500))}e.querySelector(`#ws-submit`).addEventListener(`click`,m),l.addEventListener(`keydown`,e=>{e.key===`Enter`&&m()}),l.focus()}},"verb-forms":{id:`verb-forms`,name_de:`Unregelmäßige Verben`,topics:[`verben`,`zeitformen`],setup(e,t,n){let r=[{inf:`gehen`,past:`ging`,perfect:`gegangen`},{inf:`kommen`,past:`kam`,perfect:`gekommen`},{inf:`sehen`,past:`sah`,perfect:`gesehen`},{inf:`fahren`,past:`fuhr`,perfect:`gefahren`},{inf:`schreiben`,past:`schrieb`,perfect:`geschrieben`}],i=[...r].sort(()=>Math.random()-.5).slice(0,3),a=0,o=0;function s(){let t=i[a],c=Math.random()>.5,l=c?t.past:t.perfect,u=c?`Präteritum (ich ___...)`:`Perfekt (ich habe ___...)`,d=[l,...r.filter(e=>e.inf!==t.inf).flatMap(e=>[e.past,e.perfect]).filter(Boolean).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${a+1}/${i.length}</div>
          <p style="color:var(--text-secondary);margin-bottom:10px;">${u}</p>
          <div style="font-size:3rem;font-weight:900;font-family:'Fredoka One',cursive;color:#2c3e50;margin:20px 0;">${t.inf}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${d.map(e=>`<button class="vf-btn" data-o="${e}" style="padding:14px;font-size:1.2rem;border-radius:10px;border:none;cursor:pointer;background:#1abc9c;color:white;font-weight:bold;box-shadow:0 4px 0 #16a085;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.vf-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.vf-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===l;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,!r){let t=e.querySelector(`.vf-btn[data-o="${l}"]`);t&&(t.style.background=`#2ecc71`,t.style.boxShadow=`none`)}r&&o++,setTimeout(()=>{a++,a>=i.length?n({correct:o>0,score:Math.round(o/i.length*100)}):s()},1100)})})}s()}},"split-the-word":{id:`split-the-word`,name_de:`Komposita-Säger`,topics:[`zusammengesetzte_nomen`,`rechtschreibung`],setup(e,t,n){let r=[{word:`Sonnenblume`,parts:[`Sonnen`,`blume`],splitIdx:6},{word:`Hausschlüssel`,parts:[`Haus`,`schlüssel`],splitIdx:4},{word:`Apfelbaum`,parts:[`Apfel`,`baum`],splitIdx:5},{word:`Schulkind`,parts:[`Schul`,`kind`],splitIdx:5},{word:`Blumentopf`,parts:[`Blumen`,`topf`],splitIdx:6}],i=r[Math.floor(Math.random()*r.length)],a=null;function o(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">🪚</div>
          <p style="color:var(--text-secondary);margin-bottom:20px;">Wo teilt sich das Wort auf? Tippe auf die Stelle!</p>
          
          <div id="sw-word-display" style="display:flex;justify-content:center;align-items:center;font-size:2.5rem;font-weight:900;font-family:'Fredoka One',cursive;margin-bottom:30px;gap:0;flex-wrap:nowrap;overflow:hidden;">
            ${[...i.word].map((e,t)=>`
              <div class="sw-char" data-before="${t}" style="position:relative;cursor:pointer;padding:5px 2px;border-radius:4px;transition:background .15s;">${e}${t<i.word.length-1?`<span class="sw-sep" data-sep="${t+1}" style="position:absolute;top:0;right:-2px;width:4px;height:100%;background:${a===t+1?`#e74c3c`:`transparent`};border-radius:2px;cursor:pointer;transition:background .15s;"></span>`:``}</div>
            `).join(``)}
          </div>

          ${a===null?`<p style="color:#7f8c8d;font-size:.9rem;">Tippe zwischen zwei Buchstaben, um zu teilen</p>`:`
            <div style="margin-bottom:20px;font-size:1.3rem;">
              <span style="background:#3498db;color:white;padding:6px 14px;border-radius:20px;margin-right:5px;">${i.word.slice(0,a)}</span>
              +
              <span style="background:#e74c3c;color:white;padding:6px 14px;border-radius:20px;margin-left:5px;">${i.word.slice(a)}</span>
            </div>
            <button id="sw-confirm" class="btn btn-primary" style="width:200px;">Bestätigen ✓</button>
          `}
        </div>`,e.querySelectorAll(`.sw-sep, .sw-char`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.sep||e.dataset.before;t&&(a=parseInt(t),o())})}),e.querySelector(`#sw-confirm`)?.addEventListener(`click`,()=>{let t=a===i.splitIdx;if(e.querySelector(`#sw-confirm`).style.background=t?`#2ecc71`:`#e74c3c`,!t){let t=e.querySelectorAll(`.sw-char`);t[i.splitIdx-1]&&t[i.splitIdx-1].querySelector(`.sw-sep`)?.setAttribute(`style`,`position:absolute;top:0;right:-2px;width:4px;height:100%;background:#2ecc71;border-radius:2px;`)}setTimeout(()=>n({correct:t,score:t?100:0}),1300)})}o()}},"prefix-postfix":{id:`prefix-postfix`,name_de:`Vorsilben-Meister`,topics:[`rechtschreibung`,`grammatik`,`wortschatz`],setup(e,t,n){let r=[{type:`prefix`,root:`kommen`,answer:`an`,options:[`an`,`aus`,`ge`,`zu`],result:`ankommen`,meaning:`hier ankommen`},{type:`prefix`,root:`fahren`,answer:`ab`,options:[`ab`,`be`,`re`,`ver`],result:`abfahren`,meaning:`den Zug (abfahren)`},{type:`suffix`,root:`Kind`,answer:`heit`,options:[`heit`,`ung`,`lich`,`los`],result:`Kindheit`,meaning:`die Zeit als ich klein war -> ___`},{type:`prefix`,root:`schreiben`,answer:`auf`,options:[`auf`,`ein`,`be`,`ge`],result:`aufschreiben`,meaning:`Notizen machen`},{type:`suffix`,root:`freund`,answer:`lich`,options:[`lich`,`heit`,`ung`,`bar`],result:`freundlich`,meaning:`nett und offen sein, = ___`}].sort(()=>Math.random()-.5).slice(0,3),i=0,a=0;function o(){let t=r[i],s=t.type===`prefix`;s?`${t.answer}${t.root}`:`${t.root}${t.answer}`,e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${i+1}/${r.length}</div>
          <p style="color:var(--text-secondary);margin-bottom:10px;">${t.meaning}</p>
          <div style="font-size:2rem;font-weight:bold;font-family:'Fredoka One',cursive;margin-bottom:25px;color:#2c3e50;">
            ${s?`<span style="color:#7f8c8d;border-bottom:2px dashed #7f8c8d;">___</span>${t.root}`:`${t.root}<span style="color:#7f8c8d;border-bottom:2px dashed #7f8c8d;">___</span>`}
          </div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            ${t.options.map(e=>`<button class="pp-btn" data-o="${e}" style="padding:12px 20px;font-size:1.2rem;border-radius:20px;border:none;cursor:pointer;background:#e67e22;color:white;font-weight:bold;box-shadow:0 4px 0 #d35400;">-${!s&&e!==`an`&&e!==`auf`&&e!==`ab`?``:e}${s?``:`-`}</button>`).join(``)}
          </div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-top:10px;">
            ${t.options.map(e=>`<button class="pp-btn2" data-o="${e}" style="padding:12px 20px;font-size:1.2rem;border-radius:20px;border:none;cursor:pointer;background:#e67e22;color:white;font-weight:bold;box-shadow:0 4px 0 #d35400;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelector(`.pp-btn`)?.closest(`div`)?.remove?.(),e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:10px;">${i+1}/${r.length}</div>
          <p style="color:var(--text-secondary);margin-bottom:15px;">${t.meaning}</p>
          <div style="font-size:2rem;font-weight:bold;margin:20px 0;color:#2c3e50;">
            ${s?`<span style="color:#e74c3c;border-bottom:2px dashed #e74c3c;margin-right:2px;">___</span>${t.root}`:`${t.root}<span style="color:#e74c3c;border-bottom:2px dashed #e74c3c;margin-left:2px;">___</span>`}
          </div>
          <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
            ${t.options.map(e=>`<button class="pp-btn" data-o="${e}" style="padding:12px 22px;font-size:1.2rem;border-radius:20px;border:none;cursor:pointer;background:#e67e22;color:white;font-weight:bold;box-shadow:0 4px 0 #d35400;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.pp-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.pp-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.answer;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.pp-btn[data-o="${t.answer}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>0,score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"reading-race":{id:`reading-race`,name_de:`Lese-Rennen`,topics:[`lesen`],setup(e,t,n){let r=[{text:`Anna und ihr Hund Max laufen jeden Morgen durch den parkenden Garten. Max liebt es besonders, Eichhörnchen zu jagen.`,questions:[{q:`Wie heißt der Hund?`,answer:`Max`,options:[`Max`,`Bello`,`Rex`,`Fido`]},{q:`Wann laufen sie?`,answer:`Morgen`,options:[`Abend`,`Mittag`,`Morgen`,`Nacht`]}]},{text:`Morgen ist Maries Geburtstag. Sie wird sieben Jahre alt und bekommt ein rotes Fahrrad als Geschenk.`,questions:[{q:`Wie alt wird Marie?`,answer:`Sieben`,options:[`Fünf`,`Sechs`,`Sieben`,`Acht`]},{q:`Was bekommt sie?`,answer:`Fahrrad`,options:[`Puppe`,`Ball`,`Fahrrad`,`Buch`]}]}],i=r[Math.floor(Math.random()*r.length)],a=0,o=0,s=8,c;function l(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:1.5rem;margin-bottom:10px;">📖</div>
          <p style="color:var(--text-secondary);margin-bottom:10px;font-size:.9rem;">Lies schnell! Du hast <span id="rr-cd" style="font-weight:bold;color:#e74c3c;">${s}s</span></p>
          <div style="font-size:1.2rem;color:#2c3e50;background:rgba(255,255,255,.8);padding:20px;border-radius:12px;border-left:5px solid #3498db;text-align:left;line-height:1.8;margin-bottom:15px;">${i.text}</div>
          <button id="rr-ready" class="btn btn-secondary">Ich bin bereit! -></button>
        </div>`;let t=e.querySelector(`#rr-cd`);c=setInterval(()=>{s--,t.textContent=`${s}s`,s<=0&&(clearInterval(c),u())},1e3),e.querySelector(`#rr-ready`).addEventListener(`click`,()=>{clearInterval(c),u()})}function u(){if(a>=i.questions.length){n({correct:o>0,score:Math.round(o/i.questions.length*100)});return}let t=i.questions[a];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:10px;">🤔</div>
          <p style="font-size:1.3rem;font-weight:bold;color:#2c3e50;margin-bottom:25px;">${t.q}</p>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${t.options.map(e=>`<button class="rr-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 2px 0 #bdc3c7;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.rr-btn`).forEach(n=>{n.addEventListener(`click`,()=>{e.querySelectorAll(`.rr-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=n.dataset.o===t.answer;if(n.style.background=r?`#2ecc71`:`#e74c3c`,n.style.color=`white`,!r){let n=[...e.querySelectorAll(`.rr-btn`)].find(e=>e.dataset.o===t.answer);n&&(n.style.background=`#2ecc71`,n.style.color=`white`)}r&&o++,a++,setTimeout(u,1100)})})}l()}},"double-letter":{id:`double-letter`,name_de:`Doppelkonsonant`,topics:[`rechtschreibung`],setup(e,t,n){let r=[{correct:`Sonne`,wrong:`Sone`,note:`nn`},{correct:`Mutter`,wrong:`Muter`,note:`tt`},{correct:`Himmel`,wrong:`Himel`,note:`mm`},{correct:`Wasser`,wrong:`Waser`,note:`ss`},{correct:`Teller`,wrong:`Teler`,note:`ll`},{correct:`Messer`,wrong:`Meser`,note:`ss`}].sort(()=>Math.random()-.5).slice(0,4),i=0,a=0;function o(){let t=r[i],s=Math.random()>.5?[t.correct,t.wrong]:[t.wrong,t.correct];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">✍️</div>
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:20px;">${i+1}/${r.length}</div>
          <p style="color:var(--text-secondary);margin-bottom:25px;">Welche Schreibweise ist <b>richtig</b>?</p>
          <div style="display:flex;gap:15px;justify-content:center;flex-wrap:wrap;">
            ${s.map(e=>`
              <button class="dl-btn" data-o="${e}" style="min-width:140px;padding:20px;font-size:1.6rem;font-weight:900;font-family:'Fredoka One',cursive;border-radius:12px;border:none;cursor:pointer;background:#34495e;color:white;box-shadow:0 6px 0 #2c3e50;">${e}</button>
            `).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.dl-btn`).forEach(s=>{s.addEventListener(`click`,()=>{e.querySelectorAll(`.dl-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=s.dataset.o===t.correct;if(s.style.background=c?`#2ecc71`:`#e74c3c`,s.style.boxShadow=`none`,!c){let n=e.querySelector(`.dl-btn[data-o="${t.correct}"]`);n&&(n.style.background=`#2ecc71`,n.style.boxShadow=`none`)}c&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>=2,score:Math.round(a/r.length*100)}):o()},1100)})})}o()}},"compound-meaning":{id:`compound-meaning`,name_de:`Komposita-Bedeutung`,topics:[`zusammengesetzte_nomen`,`wortschatz`],setup(e,t,n){let r=[{word:`Handschuh`,meaning:`Kleidung für die Hand`,distractors:[`Ein kleiner Schuh`,`Ein Handtuch aus Leder`,`Socken für oben`]},{word:`Kühlschrank`,meaning:`Ein kalter Schrank für Lebensmittel`,distractors:[`Ein sehr alter Schrank`,`Ein Schrank ohne Türen`,`Ein Schrank für Kleidung`]},{word:`Waschmaschine`,meaning:`Eine Maschine, die Wäsche reinigt`,distractors:[`Eine Maschine zum Waschen von Autos`,`Ein großes Waschbecken`,`Eine Maschine zum Trocknen`]},{word:`Sonnenbrille`,meaning:`Eine Brille gegen die Sonne`,distractors:[`Eine leuchtende Brille`,`Sonnencreme für die Augen`,`Ein Sonnendach für Brillenträger`]}],i=r[Math.floor(Math.random()*r.length)],a=[i.meaning,...i.distractors].sort(()=>Math.random()-.5);e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:2rem;margin-bottom:5px;">🔬</div>
        <p style="color:var(--text-secondary);margin-bottom:15px;">Was bedeutet dieses Wort <b>wirklich</b>?</p>
        <div style="font-size:2.8rem;font-weight:900;font-family:'Fredoka One',cursive;color:#2c3e50;margin-bottom:25px;">${i.word}</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${a.map(e=>`<button class="cm-btn" data-o="${e}" style="padding:14px;font-size:1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;text-align:left;box-shadow:0 2px 0 #bdc3c7;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.cm-btn`).forEach(t=>{t.addEventListener(`click`,()=>{e.querySelectorAll(`.cm-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.meaning;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.color=`white`,t.style.boxShadow=`none`,!r){let t=[...e.querySelectorAll(`.cm-btn`)].find(e=>e.dataset.o===i.meaning);t&&(t.style.background=`#2ecc71`,t.style.color=`white`,t.style.boxShadow=`none`)}setTimeout(()=>n({correct:r,score:r?100:0}),1200)})})}},"comic-strip":{id:`comic-strip`,name_de:`Comic-Macher`,topics:[`lesen`,`satzbau`],setup(e,t,n){let r=[{panels:[{id:`a`,emoji:`🐕😴`,text:`Der Hund schläft tief.`},{id:`b`,emoji:`🔔📣`,text:`Die Türklingel läutet laut.`},{id:`c`,emoji:`🐕🏃`,text:`Der Hund springt auf und läuft zur Tür.`},{id:`d`,emoji:`🚪👋`,text:`Es ist der Briefträger mit einem Paket!`}],order:[`a`,`b`,`c`,`d`]},{panels:[{id:`a`,emoji:`🌱💧`,text:`Anna pflanzt einen Samen.`},{id:`b`,emoji:`☀️🌧️`,text:`Sie gießt ihn jeden Tag.`},{id:`c`,emoji:`🌿`,text:`Nach einer Woche wächst ein Blatt.`},{id:`d`,emoji:`🌸🎉`,text:`Im Sommer blüht eine wunderschöne Blume!`}],order:[`a`,`b`,`c`,`d`]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.panels].sort(()=>Math.random()-.5),o=[],s=null;function c(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:1rem;color:var(--text-secondary);margin-bottom:10px;">Bringe die Comic-Panels in die richtige Reihenfolge!</div>
          
          <!-- Drop zone -->
          <div id="cs-slots" style="display:flex;gap:8px;margin-bottom:15px;min-height:100px;justify-content:center;flex-wrap:wrap;">
            ${[0,1,2,3].map(e=>`
              <div class="cs-slot" data-slot="${e}" style="width:100px;min-height:90px;border-radius:10px;border:2px dashed ${o[e]?`transparent`:`#bdc3c7`};display:flex;flex-direction:column;align-items:center;justify-content:center;padding:5px;background:${o[e]?`rgba(52,152,219,.15)`:`rgba(255,255,255,.3)`};cursor:pointer;">
                ${o[e]?`<div style="font-size:2rem;">${o[e].emoji}</div><div style="font-size:.7rem;color:#2c3e50;font-weight:bold;">${o[e].text}</div>`:`<div style="color:#bdc3c7;font-size:1.4rem;">${e+1}</div>`}
              </div>
            `).join(``)}
          </div>

          <!-- Source panels -->
          <div id="cs-source" style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:15px;">
            ${a.filter(e=>!o.includes(e)).map(e=>`
              <div class="cs-panel" data-id="${e.id}" style="width:100px;min-height:90px;border-radius:10px;background:${s?.id===e.id?`#3498db`:`white`};padding:8px;cursor:pointer;border:2px solid ${s?.id===e.id?`#2980b9`:`#bdc3c7`};display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 2px 5px rgba(0,0,0,.1);">
                <div style="font-size:2rem;">${e.emoji}</div>
                <div style="font-size:.65rem;color:#2c3e50;font-weight:bold;text-align:center;margin-top:4px;">${e.text}</div>
              </div>
            `).join(``)}
          </div>

          <button id="cs-check" class="btn btn-primary" ${o.filter(Boolean).length<4?`disabled`:``} style="width:100%;max-width:250px;opacity:${o.filter(Boolean).length<4?`.5`:`1`};">Überprüfen ✓</button>
        </div>`,e.querySelectorAll(`.cs-panel`).forEach(e=>{e.addEventListener(`click`,()=>{s=a.find(t=>t.id===e.dataset.id),c()})}),e.querySelectorAll(`.cs-slot`).forEach(e=>{e.addEventListener(`click`,()=>{if(!s)return;let t=parseInt(e.dataset.slot);o[t]&&a.push(o[t]),o[t]=s,a.splice(a.indexOf(s),1),s=null,c()})}),e.querySelector(`#cs-check`)?.addEventListener(`click`,()=>{e.querySelectorAll(`.cs-check, .cs-panel, .cs-slot`).forEach(e=>e.style.pointerEvents=`none`);let t=o.every((e,t)=>e?.id===i.order[t]);o.forEach((t,n)=>{let r=e.querySelectorAll(`.cs-slot`)[n];r&&(r.style.background=t?.id===i.order[n]?`#2ecc7133`:`#e74c3c33`)}),setTimeout(()=>n({correct:t,score:t?100:Math.round(o.filter((e,t)=>e?.id===i.order[t]).length/4*100)}),1500)})}c()}},"mirror-word":{id:`mirror-word`,name_de:`Spiegel-Wörter`,topics:[`rechtschreibung`,`lesen`,`konzentration`],setup(e,t,n){let r=[`HUND`,`BAUM`,`TISCH`,`KATZE`,`AUTO`,`HAUS`,`BUCH`,`KIND`],i=[...r].sort(()=>Math.random()-.5).slice(0,4),a=0,o=0;function s(){let t=i[a];t.split(``).reverse().join(``);let c=[t,...r.filter(e=>e!==t).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">🪞</div>
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:20px;">${a+1}/${i.length} - Lies das Wort rückwärts!</div>
          <div style="font-size:4rem;font-weight:900;font-family:'Fredoka One',cursive;color:#9b59b6;transform:scaleX(-1);display:inline-block;margin-bottom:25px;letter-spacing:4px;">${t}</div>
          <p style="color:var(--text-secondary);margin-bottom:20px;">Welches Wort siehst du?</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${c.map(e=>`<button class="mw-btn" data-o="${e}" style="padding:14px;font-size:1.1rem;border-radius:10px;border:none;cursor:pointer;background:#ecf0f1;color:#2c3e50;font-weight:bold;box-shadow:0 3px 0 #bdc3c7;">${e}</button>`).join(``)}
          </div>
        </div>`,e.querySelectorAll(`.mw-btn`).forEach(r=>{r.addEventListener(`click`,()=>{e.querySelectorAll(`.mw-btn`).forEach(e=>e.style.pointerEvents=`none`);let c=r.dataset.o===t;if(r.style.background=c?`#2ecc71`:`#e74c3c`,r.style.color=`white`,r.style.boxShadow=`none`,!c){let n=e.querySelector(`.mw-btn[data-o="${t}"]`);n&&(n.style.background=`#2ecc71`,n.style.color=`white`,n.style.boxShadow=`none`)}c&&o++,setTimeout(()=>{a++,a>=i.length?n({correct:o>=2,score:Math.round(o/i.length*100)}):s()},1100)})})}s()}},"word-chess":{id:`word-chess`,name_de:`Wort-Duell`,topics:[`wortschatz`,`wortarten`,`grammatik`],setup(e,t,n){let r=[{rule:`Welches Wort ist ein <b style="color:#e74c3c;">NOMEN</b>?`,left:`Wolke`,right:`fliegen`,answer:`left`},{rule:`Welches Wort ist ein <b style="color:#3498db;">VERB</b>?`,left:`Schule`,right:`rennen`,answer:`right`},{rule:`Welches Wort ist <b style="color:#2ecc71;">länger</b>?`,left:`Hund`,right:`Schmetterling`,answer:`right`},{rule:`Welcher Artikel ist <b style="color:#9b59b6;">feminin</b>?`,left:`der`,right:`die`,answer:`right`},{rule:`Welches Wort kommt <b style="color:#e67e22;">alphabetisch zuerst</b>?`,left:`Zebra`,right:`Apfel`,answer:`right`},{rule:`Welches Wort ist ein <b style="color:#1abc9c;">ADJEKTIV</b>?`,left:`schnell`,right:`Buch`,answer:`left`}].sort(()=>Math.random()-.5).slice(0,4),i=0,a=0;function o(){let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2rem;margin-bottom:5px;">⚔️</div>
          <div style="font-size:.9rem;color:var(--text-secondary);margin-bottom:15px;">${i+1}/${r.length}</div>
          <p style="font-size:1.1rem;font-weight:bold;color:#2c3e50;margin-bottom:25px;">${t.rule}</p>
          <div style="display:flex;gap:20px;justify-content:center;align-items:center;">
            <button id="wc-left" style="flex:1;max-width:160px;height:110px;border-radius:16px;font-size:1.8rem;font-weight:900;font-family:'Fredoka One',cursive;background:#e74c3c;color:white;border:none;box-shadow:0 8px 0 #c0392b;cursor:pointer;">${t.left}</button>
            <span style="font-size:2rem;color:#7f8c8d;">VS</span>
            <button id="wc-right" style="flex:1;max-width:160px;height:110px;border-radius:16px;font-size:1.8rem;font-weight:900;font-family:'Fredoka One',cursive;background:#3498db;color:white;border:none;box-shadow:0 8px 0 #2980b9;cursor:pointer;">${t.right}</button>
          </div>
        </div>`;function s(e){document.querySelectorAll(`button`).forEach(e=>e.style.pointerEvents=`none`);let s=e===t.answer,c=document.getElementById(e===`left`?`wc-left`:`wc-right`),l=document.getElementById(e===`left`?`wc-right`:`wc-left`);c.style.background=`#2ecc71`,c.style.boxShadow=`none`,l.style.opacity=`.3`,l.style.boxShadow=`none`,s&&a++,setTimeout(()=>{i++,i>=r.length?n({correct:a>=2,score:Math.round(a/r.length*100)}):o()},1e3)}e.querySelector(`#wc-left`).addEventListener(`click`,()=>s(`left`)),e.querySelector(`#wc-right`).addEventListener(`click`,()=>s(`right`))}o()}},"slingshot-spelling":{id:`slingshot-spelling`,name_de:`Buchstaben-Schleuder`,topics:[`rechtschreibung`],setup(e,t,n){let r=[{word:`HA_S`,answer:`U`,options:[`U`,`A`,`O`,`I`]},{word:`B_UM`,answer:`A`,options:[`A`,`E`,`O`,`I`]},{word:`H_ND`,answer:`U`,options:[`U`,`O`,`A`,`E`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="position:relative;width:100%;height:60vh;max-height:500px;background:#2c3e50;border-radius:16px;overflow:hidden;touch-action:none;">
        <div style="position:absolute;top:10px;left:10px;color:white;font-weight:bold;">Schild: <span style="color:#f1c40f;">${i.word}</span></div>
        <div id="ss-slingshot" style="position:absolute;bottom:20px;left:50%;transform:translateX(-50%);width:40px;height:40px;background:#e74c3c;border-radius:50%;cursor:grab;z-index:10;box-shadow:0 0 15px rgba(231,76,60,0.6);"></div>
        <div id="ss-targets" style="position:absolute;top:50px;width:100%;display:flex;justify-content:space-around;">
          ${i.options.map(e=>`<div class="ss-target" data-o="${e}" style="width:60px;height:60px;background:#3498db;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:1.5rem;box-shadow:0 5px 0 #2980b9;">${e}</div>`).join(``)}
        </div>
        <div id="ss-line" style="position:absolute;bottom:40px;left:50%;width:2px;height:0;background:rgba(255,255,255,0.3);transform-origin:bottom center;display:none;"></div>
      </div>`;let a=e.querySelector(`#ss-slingshot`),o=e.querySelector(`#ss-line`),s,c,l=!1;a.addEventListener(`pointerdown`,e=>{s=e.clientX,c=e.clientY,l=!0,o.style.display=`block`}),window.addEventListener(`pointermove`,e=>{if(!l)return;let t=e.clientX-s,n=e.clientY-c,r=Math.sqrt(t*t+n*n),i=Math.atan2(t,-n)*(180/Math.PI);a.style.transform=`translate(calc(-50% + ${t}px), ${n}px)`,o.style.height=`${r}px`,o.style.transform=`translateX(-50%) rotate(${i}deg)`}),window.addEventListener(`pointerup`,t=>{l&&(l=!1,o.style.display=`none`,a.style.transform=`translateX(-50%)`,t.clientX-s,t.clientY-c,setTimeout(()=>{let t=e.querySelectorAll(`.ss-target`),r=t[Math.floor(Math.random()*t.length)],a=r.dataset.o===i.answer;r.style.background=a?`#2ecc71`:`#e74c3c`,setTimeout(()=>n({correct:a,score:a?100:0}),800)},500))})}},"gravity-sort":{id:`gravity-sort`,name_de:`Schwerkraft-Sortieren`,topics:[`nomen`,`verben`,`adjektive`],setup(e,t,n){let r={nomen:[`Hund`,`Haus`,`Baum`,`Auto`],verben:[`laufen`,`essen`,`sehen`,`gehen`]},i=[...r.nomen,...r.verben].sort(()=>Math.random()-.5),a=0,o=0;function s(){if(a>=i.length){n({correct:o>2,score:Math.round(o/i.length*100)});return}let t=i[a];e.innerHTML=`
        <div style="position:relative;width:100%;height:60vh;max-height:500px;background:#ecf0f1;border-radius:16px;overflow:hidden;user-select:none;">
          <div id="gs-word" style="position:absolute;top:20px;left:50%;transform:translateX(-50%);background:#34495e;color:white;padding:15px 30px;border-radius:30px;font-weight:bold;font-size:1.5rem;box-shadow:0 5px 15px rgba(0,0,0,0.2);cursor:grab;">${t}</div>
          <div style="position:absolute;bottom:0;width:100%;display:flex;height:120px;">
            <div class="gs-bucket" data-type="nomen" style="flex:1;background:#3498db;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:1.2rem;border-top:5px solid #2980b9;">NOMEN</div>
            <div class="gs-bucket" data-type="verben" style="flex:1;background:#e67e22;display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;font-size:1.2rem;border-top:5px solid #d35400;">VERBEN</div>
          </div>
        </div>`,e.querySelector(`#gs-word`).addEventListener(`click`,e=>{}),e.querySelectorAll(`.gs-bucket`).forEach(e=>{e.onclick=()=>{let n=r[e.dataset.type].includes(t);n&&o++,e.style.background=n?`#2ecc71`:`#e74c3c`,setTimeout(()=>{a++,s()},600)}})}s()}},"word-stacker":{id:`word-stacker`,name_de:`Wörter-Stapler`,topics:[`satzbau`],setup(e,t,n){let r=[{words:[`Ich`,`gehe`,`heute`,`in`,`die`,`Schule.`],order:[0,1,2,3,4,5]},{words:[`Der`,`Hund`,`spielt`,`mit`,`dem`,`Ball.`],order:[0,1,2,3,4,5]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.words].map((e,t)=>({w:e,i:t})).sort(()=>Math.random()-.5),o=[];function s(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:20px;">Staple die Wörter in der richtigen Reihenfolge!</p>
          <div id="ws-stack" style="min-height:100px;display:flex;flex-direction:column-reverse;gap:5px;margin-bottom:30px;background:rgba(0,0,0,0.05);padding:10px;border-radius:10px;border:2px dashed #bdc3c7;">
            ${o.map(e=>`<div style="background:#3498db;color:white;padding:10px;border-radius:5px;font-weight:bold;">${e.w}</div>`).join(``)}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
            ${a.map(e=>`<button class="ws-btn" data-idx="${e.i}" style="padding:10px 20px;background:white;border:2px solid #3498db;border-radius:5px;color:#3498db;font-weight:bold;cursor:pointer;">${e.w}</button>`).join(``)}
          </div>
          ${o.length===i.words.length?`<button id="ws-check" class="btn btn-primary" style="margin-top:20px;width:100%;">Überprüfen</button>`:``}
        </div>`,e.querySelectorAll(`.ws-btn`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.dataset.idx),n=a.find(e=>e.i===t);o.push(n),a.splice(a.indexOf(n),1),s()}}),e.querySelector(`#ws-check`)?.addEventListener(`click`,()=>{let t=o.every((e,t)=>e.i===i.order[t]);e.querySelector(`#ws-check`).style.background=t?`#2ecc71`:`#e74c3c`,setTimeout(()=>n({correct:t,score:t?100:0}),1e3)})}s()}},"case-solver":{id:`case-solver`,name_de:`Fall-Detektiv`,topics:[`grammatik`],setup(e,t,n){let r=[{sentence:`Der <b style="color:#e74c3c;">Hund</b> bellt.`,answer:`Nominativ`,options:[`Nominativ`,`Genitiv`,`Dativ`,`Akkusativ`]},{sentence:`Ich sehe den <b style="color:#e74c3c;">Hund</b>.`,answer:`Akkusativ`,options:[`Nominativ`,`Genitiv`,`Dativ`,`Akkusativ`]},{sentence:`Ich gebe dem <b style="color:#e74c3c;">Hund</b> einen Knochen.`,answer:`Dativ`,options:[`Nominativ`,`Genitiv`,`Dativ`,`Akkusativ`]},{sentence:`Das ist der Knochen des <b style="color:#e74c3c;">Hundes</b>.`,answer:`Genitiv`,options:[`Nominativ`,`Genitiv`,`Dativ`,`Akkusativ`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:2.5rem;margin-bottom:15px;">🕵️‍♂️</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">In welchem Fall steht das markierte Wort?</p>
        <div style="font-size:1.4rem;background:rgba(255,255,255,0.8);padding:20px;border-radius:12px;margin-bottom:30px;line-height:1.6;">
          ${i.sentence}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.map(e=>`<button class="cs-btn" data-o="${e}" style="padding:15px;font-size:1.1rem;border-radius:10px;border:none;background:#34495e;color:white;font-weight:bold;cursor:pointer;box-shadow:0 4px 0 #2c3e50;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.cs-btn`).forEach(t=>{t.onclick=()=>{e.querySelectorAll(`.cs-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.answer;if(t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,!r){let t=[...e.querySelectorAll(`.cs-btn`)].find(e=>e.dataset.o===i.answer);t&&(t.style.background=`#2ecc71`)}setTimeout(()=>n({correct:r,score:r?100:0}),1200)}})}},"secret-agent-code":{id:`secret-agent-code`,name_de:`Geheimagenten-Code`,topics:[`rechtschreibung`,`lesen`],setup(e,t,n){let r={A:`1`,B:`2`,C:`3`,D:`4`,E:`5`,F:`6`,G:`7`,H:`8`,I:`9`,J:`0`},i=[{normal:`BAD`,encoded:`214`},{normal:`EICH`,encoded:`5938`},{normal:`CAFÉ`,encoded:`3165`}],a=i[Math.floor(Math.random()*i.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:3rem;margin-bottom:10px;">🕵️‍♀️🕶️</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Entziffere den Code!</p>
        <div style="background:#2c3e50;color:#2ecc71;font-family:monospace;padding:20px;border-radius:8px;font-size:2.5rem;letter-spacing:10px;margin-bottom:30px;box-shadow:inset 0 0 10px rgba(0,0,0,0.5);">
          ${a.encoded}
        </div>
        <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:5px;margin-bottom:25px;font-family:monospace;font-size:0.8rem;background:#f8f9fa;padding:10px;border-radius:8px;">
          ${Object.entries(r).map(([e,t])=>`<div>${e}=${t}</div>`).join(``)}
        </div>
        <input id="sa-input" type="text" placeholder="Lösung..." style="width:100%;padding:15px;font-size:1.5rem;text-align:center;border-radius:10px;border:2px solid #34495e;text-transform:uppercase;outline:none;">
        <button id="sa-submit" class="btn btn-primary" style="margin-top:15px;width:100%;">Absenden</button>
      </div>`;let o=e.querySelector(`#sa-input`);e.querySelector(`#sa-submit`).onclick=()=>{let e=o.value.trim().toUpperCase()===a.normal;n({correct:e,score:e?100:0})}}},"logic-ladder":{id:`logic-ladder`,name_de:`Logik-Leiter`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{items:[`Eins`,`Zwei`,`Drei`,`___`],answer:`Vier`,options:[`Vier`,`Fünf`,`Sechs`,`Zehn`]},{items:[`Frühling`,`Sommer`,`Herbst`,`___`],answer:`Winter`,options:[`Winter`,`Regen`,`Sonne`,`Schnee`]},{items:[`Montag`,`Dienstag`,`Mittwoch`,`___`],answer:`Donnerstag`,options:[`Donnerstag`,`Freitag`,`Samstag`,`Sonntag`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:2.5rem;margin-bottom:10px;">🪜</div>
        <p style="color:var(--text-secondary);margin-bottom:25px;">Vervollständige die Reihe!</p>
        <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:30px;">
          ${i.items.map(e=>`
            <div style="background:rgba(255,255,255,0.8);padding:15px;border-radius:10px;font-size:1.3rem;font-weight:bold;color:#2c3e50;border:2px solid #ecf0f1;">
              ${e}
            </div>
          `).join(``)}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.map(e=>`<button class="ll-btn" data-o="${e}" style="padding:15px;font-size:1.2rem;border-radius:10px;border:none;background:#3498db;color:white;font-weight:bold;cursor:pointer;box-shadow:0 4px 0 #2980b9;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.ll-btn`).forEach(t=>{t.onclick=()=>{e.querySelectorAll(`.ll-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.answer;t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,setTimeout(()=>n({correct:r,score:r?100:0}),1e3)}})}},"mad-libs-de":{id:`mad-libs-de`,name_de:`Wort-Wahnsinn`,topics:[`wortarten`,`kreativität`],setup(e,t,n){let r=[{text:`Eines Tages sah ein [Adjektiv] [Nomen] ein [Nomen] und fing an zu [Verb].`,blanks:[`Adjektiv`,`Nomen`,`Nomen`,`Verb`]}],i=r[Math.floor(Math.random()*r.length)],a=[],o=0;function s(){if(o>=i.blanks.length){let t=i.text;a.forEach(e=>{t=t.replace(/\[.*?\]/,`<b style="color:#e74c3c;">${e}</b>`)}),e.innerHTML=`
          <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
            <div style="font-size:2.5rem;margin-bottom:15px;">🤣</div>
            <div style="font-size:1.4rem;background:rgba(255,255,255,0.8);padding:20px;border-radius:12px;margin-bottom:20px;line-height:1.8;">
              ${t}
            </div>
            <button id="ml-done" class="btn btn-primary" style="width:100%;">Cool! Weiter -></button>
          </div>`,e.querySelector(`#ml-done`).onclick=()=>n({correct:!0,score:100});return}e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:1rem;color:var(--text-secondary);margin-bottom:10px;">Schritt ${o+1} von ${i.blanks.length}</div>
          <p style="font-size:1.5rem;font-weight:bold;color:#2c3e50;margin-bottom:25px;">Gib ein <span style="color:#3498db;">${i.blanks[o]}</span> ein:</p>
          <input id="ml-input" type="text" placeholder="Wort..." style="width:100%;padding:15px;font-size:1.5rem;text-align:center;border-radius:10px;border:2px solid #34495e;outline:none;">
          <button id="ml-next" class="btn btn-primary" style="margin-top:15px;width:100%;">Nächstes Wort</button>
        </div>`;let t=e.querySelector(`#ml-input`);t.focus(),e.querySelector(`#ml-next`).onclick=()=>{let e=t.value.trim();e&&(a.push(e),o++,s())}}s()}},"sentence-scramble":{id:`sentence-scramble`,name_de:`Satz-Salat`,topics:[`satzbau`,`lesen`],setup(e,t,n){let r=[`Der Apfel fällt nicht weit vom Stamm.`,`Aller Anfang ist schwer.`,`Übung macht den Meister.`],i=r[Math.floor(Math.random()*r.length)],a=[...i.split(` `)].sort(()=>Math.random()-.5),o=[];function s(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:20px;">Bilde den richtigen Satz!</p>
          <div style="min-height:60px;background:white;padding:15px;border-radius:10px;margin-bottom:25px;border:2px solid #3498db;display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">
            ${o.map((e,t)=>`<span class="res-word" data-idx="${t}" style="background:#3498db;color:white;padding:5px 12px;border-radius:5px;cursor:pointer;">${e}</span>`).join(``)}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
            ${a.map((e,t)=>`<button class="scr-btn" data-idx="${t}" style="padding:10px 18px;background:#ecf0f1;border:none;border-radius:5px;color:#2c3e50;font-weight:bold;cursor:pointer;">${e}</button>`).join(``)}
          </div>
          <button id="scr-check" class="btn btn-primary" style="margin-top:25px;width:100%;" ${a.length>0?`disabled`:``}>Überprüfen</button>
        </div>`,e.querySelectorAll(`.scr-btn`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.dataset.idx);o.push(a[t]),a.splice(t,1),s()}}),e.querySelectorAll(`.res-word`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.dataset.idx);a.push(o[t]),o.splice(t,1),s()}}),e.querySelector(`#scr-check`)?.addEventListener(`click`,()=>{let t=o.join(` `)===i;e.querySelector(`#scr-check`).style.background=t?`#2ecc71`:`#e74c3c`,setTimeout(()=>n({correct:t,score:t?100:0}),1200)})}s()}},"rhyme-rider":{id:`rhyme-rider`,name_de:`Reim-Reiter`,topics:[`reime`],setup(e,t,n){let r=[`Maus`,`Klaus`,`raus`,`Schmaus`],i=[`Hund`,`Baum`,`Tisch`,`Stuhl`],a=[...r,...i].sort(()=>Math.random()-.5),o=0,s=0;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <p style="color:var(--text-secondary);margin-bottom:15px;">Fange alle Wörter, die sich auf <b>Haus</b> reimen!</p>
        <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
          ${a.map(e=>`<button class="rr-word" data-w="${e}" style="padding:15px 25px;font-size:1.2rem;border-radius:15px;border:none;background:#f39c12;color:white;font-weight:bold;cursor:pointer;box-shadow:0 5px 0 #e67e22;">${e}</button>`).join(``)}
        </div>
        <div id="rr-progress" style="margin-top:25px;font-size:1.1rem;font-weight:bold;color:#34495e;">Gefunden: 0/${r.length}</div>
      </div>`,e.querySelectorAll(`.rr-word`).forEach(t=>{t.onclick=()=>{let i=t.dataset.w;r.includes(i)?(o++,s++,t.style.background=`#2ecc71`,t.style.pointerEvents=`none`,t.style.boxShadow=`none`,e.querySelector(`#rr-progress`).textContent=`Gefunden: ${s}/${r.length}`,s===r.length&&setTimeout(()=>n({correct:!0,score:100}),800)):(t.style.background=`#e74c3c`,setTimeout(()=>{t.style.background=`#f39c12`},500))}})}},"tap-the-type":{id:`tap-the-type`,name_de:`Tipp den Typ`,topics:[`wortarten`],setup(e,t,n){let r=[`Nomen`,`Verb`,`Adjektiv`],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <p style="font-size:1.5rem;font-weight:bold;color:#2c3e50;margin-bottom:30px;">Tippe auf ein <span style="color:#e74c3c;">${i}</span>!</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
          ${[{w:`Hund`,type:`Nomen`},{w:`laufen`,type:`Verb`},{w:`schön`,type:`Adjektiv`},{w:`Auto`,type:`Nomen`},{w:`essen`,type:`Verb`},{w:`schnell`,type:`Adjektiv`}].sort(()=>Math.random()-.5).map(e=>`<button class="tt-btn" data-type="${e.type}" style="padding:20px;font-size:1.3rem;border-radius:12px;border:none;background:#3498db;color:white;font-weight:bold;cursor:pointer;box-shadow:0 6px 0 #2980b9;">${e.w}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.tt-btn`).forEach(t=>{t.onclick=()=>{e.querySelectorAll(`.tt-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.type===i;t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,setTimeout(()=>n({correct:r,score:r?100:0}),1e3)}})}},"word-match-fast":{id:`word-match-fast`,name_de:`Schnell-Verbindung`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{icon:`🍎`,word:`Apfel`},{icon:`🚗`,word:`Auto`},{icon:`🏠`,word:`Haus`},{icon:`🐶`,word:`Hund`}],i=r[Math.floor(Math.random()*r.length)],a=r.map(e=>e.word).sort(()=>Math.random()-.5);e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:5rem;margin-bottom:20px;">${i.icon}</div>
        <p style="color:var(--text-secondary);margin-bottom:25px;">Was ist das?</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${a.map(e=>`<button class="wm-btn" data-o="${e}" style="padding:15px;font-size:1.2rem;border-radius:10px;border:none;background:#9b59b6;color:white;font-weight:bold;cursor:pointer;box-shadow:0 4px 0 #8e44ad;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.wm-btn`).forEach(t=>{t.onclick=()=>{e.querySelectorAll(`.wm-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.word;t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,setTimeout(()=>n({correct:r,score:r?100:0}),1e3)}})}},"vowel-vacuum":{id:`vowel-vacuum`,name_de:`Vokal-Staubsauger`,topics:[`rechtschreibung`],setup(e,t,n){let r=[{full:`HAUS`,missing:`H__S`,vowels:[`A`,`U`]},{full:`BAUM`,missing:`B__M`,vowels:[`A`,`U`]}],i=r[Math.floor(Math.random()*r.length)],a=[];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <p style="color:var(--text-secondary);margin-bottom:20px;">Sammle die fehlenden Vokale!</p>
        <div style="font-size:3rem;font-weight:900;letter-spacing:10px;color:#34495e;margin-bottom:40px;">${i.missing}</div>
        <div style="display:flex;gap:15px;justify-content:center;">
          ${[`A`,`E`,`I`,`O`,`U`].map(e=>`<button class="vv-btn" data-v="${e}" style="width:60px;height:60px;border-radius:50%;font-size:1.5rem;font-weight:bold;background:#1abc9c;color:white;border:none;cursor:pointer;box-shadow:0 4px 0 #16a085;">${e}</button>`).join(``)}
        </div>
        <div id="vv-result" style="margin-top:30px;font-size:1.5rem;font-weight:bold;color:#2ecc71;min-height:30px;"></div>
      </div>`,e.querySelectorAll(`.vv-btn`).forEach(t=>{t.onclick=()=>{let r=t.dataset.v;i.vowels.includes(r)&&!a.includes(r)?(a.push(r),t.style.background=`#27ae60`,t.style.pointerEvents=`none`,a.length===i.vowels.length&&(e.querySelector(`#vv-result`).textContent=`Super! ${i.full}`,setTimeout(()=>n({correct:!0,score:100}),1e3))):(t.style.background=`#e74c3c`,setTimeout(()=>{t.style.background===`rgb(231, 76, 60)`&&(t.style.background=`#1abc9c`)},500))}})}},"synonym-bridge":{id:`synonym-bridge`,name_de:`Synonym-Brücke`,topics:[`wortschatz`],setup(e,t,n){let r=[{word:`groß`,synonym:`riesig`,options:[`riesig`,`klein`,`alt`,`neu`]},{word:`schnell`,synonym:`fix`,options:[`fix`,`langsam`,`ruhig`,`laut`]},{word:`schön`,synonym:`hübsch`,options:[`hübsch`,`hässlich`,`stark`,`schwach`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:2.5rem;margin-bottom:15px;">🌉</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Welches Wort bedeutet das Gleiche wie <b>${i.word}</b>?</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="sb-btn" data-o="${e}" style="padding:15px;font-size:1.1rem;border-radius:10px;border:none;background:#3498db;color:white;font-weight:bold;cursor:pointer;box-shadow:0 4px 0 #2980b9;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.sb-btn`).forEach(t=>{t.onclick=()=>{e.querySelectorAll(`.sb-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.synonym;t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,setTimeout(()=>n({correct:r,score:r?100:0}),1e3)}})}},"antonym-arch":{id:`antonym-arch`,name_de:`Gegenteil-Bogen`,topics:[`wortschatz`],setup(e,t,n){let r=[{word:`laut`,antonym:`leise`,options:[`leise`,`schnell`,`stark`,`hell`]},{word:`kalt`,antonym:`heiß`,options:[`heiß`,`trocken`,`dunkel`,`klein`]},{word:`hell`,antonym:`dunkel`,options:[`dunkel`,`kalt`,`langsam`,`schwach`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:2.5rem;margin-bottom:15px;">🏹</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Was ist das Gegenteil von <b>${i.word}</b>?</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="aa-btn" data-o="${e}" style="padding:15px;font-size:1.1rem;border-radius:10px;border:none;background:#e67e22;color:white;font-weight:bold;cursor:pointer;box-shadow:0 4px 0 #d35400;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.aa-btn`).forEach(t=>{t.onclick=()=>{e.querySelectorAll(`.aa-btn`).forEach(e=>e.style.pointerEvents=`none`);let r=t.dataset.o===i.antonym;t.style.background=r?`#2ecc71`:`#e74c3c`,t.style.boxShadow=`none`,setTimeout(()=>n({correct:r,score:r?100:0}),1e3)}})}},"gender-gym":{id:`gender-gym`,name_de:`Genus-Training`,topics:[`artikel`],setup(e,t,n){let r=[{w:`Hund`,g:`der`},{w:`Katze`,g:`die`},{w:`Haus`,g:`das`},{w:`Baum`,g:`der`},{w:`Sonne`,g:`die`},{w:`Auto`,g:`das`}].sort(()=>Math.random()-.5),i=0,a=0;function o(){if(i>=r.length){n({correct:a>3,score:Math.round(a/r.length*100)});return}let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:3rem;font-weight:900;color:#2c3e50;margin-bottom:40px;">${t.w}</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;">
            <button class="gg-btn" data-g="der" style="padding:20px;background:#3498db;color:white;font-weight:bold;border:none;border-radius:10px;cursor:pointer;box-shadow:0 5px 0 #2980b9;">der</button>
            <button class="gg-btn" data-g="die" style="padding:20px;background:#e74c3c;color:white;font-weight:bold;border:none;border-radius:10px;cursor:pointer;box-shadow:0 5px 0 #c0392b;">die</button>
            <button class="gg-btn" data-g="das" style="padding:20px;background:#2ecc71;color:white;font-weight:bold;border:none;border-radius:10px;cursor:pointer;box-shadow:0 5px 0 #27ae60;">das</button>
          </div>
        </div>`,e.querySelectorAll(`.gg-btn`).forEach(e=>{e.onclick=()=>{e.dataset.g===t.g&&a++,i++,o()}})}o()}},"word-detective":{id:`word-detective`,name_de:`Wort-Detektiv`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{clues:[`Man nutzt es zum Schreiben.`,`Es hat Tinte.`,`Es ist kein Bleistift.`],answer:`Kugelschreiber`},{clues:[`Man trägt es an den Füßen.`,`Es ist aus Leder oder Stoff.`,`Man läuft damit.`],answer:`Schuhe`}],i=r[Math.floor(Math.random()*r.length)],a=0;function o(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <div style="font-size:2.5rem;margin-bottom:15px;">🕵️‍♂️</div>
          <p style="color:var(--text-secondary);margin-bottom:20px;">Errate das Wort anhand der Hinweise!</p>
          <div style="background:#f8f9fa;padding:20px;border-radius:12px;margin-bottom:20px;min-height:100px;display:flex;flex-direction:column;gap:10px;text-align:left;">
            ${i.clues.slice(0,a+1).map((e,t)=>`<div style="font-size:1.1rem;color:#2c3e50;">💡 ${e}</div>`).join(``)}
          </div>
          ${a<i.clues.length-1?`<button id="wd-hint" class="btn btn-secondary" style="margin-bottom:15px;width:100%;">Nächster Hinweis</button>`:``}
          <input id="wd-input" type="text" placeholder="Lösung..." style="width:100%;padding:15px;font-size:1.3rem;text-align:center;border-radius:10px;border:2px solid #34495e;outline:none;">
          <button id="wd-submit" class="btn btn-primary" style="margin-top:15px;width:100%;">Lösen!</button>
        </div>`,e.querySelector(`#wd-hint`)?.addEventListener(`click`,()=>{a++,o()}),e.querySelector(`#wd-submit`).onclick=()=>{let t=e.querySelector(`#wd-input`).value.trim().toLowerCase()===i.answer.toLowerCase();n({correct:t,score:t?100:0})}}o()}},"sentence-sniper":{id:`sentence-sniper`,name_de:`Satz-Scharfschütze`,topics:[`lesen`,`grammatik`],setup(e,t,n){let r=[{text:`Der Hund läuft schnell und blau durch den Wald.`,wrong:`blau`},{text:`Ich esse einen Apfel und singe morgen laut.`,wrong:`morgen`},{text:`Das Auto fährt leise auf der grünen Banane.`,wrong:`Banane`}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:2.5rem;margin-bottom:15px;">🎯</div>
        <p style="color:var(--text-secondary);margin-bottom:25px;">Klicke das Wort an, das <b>nicht</b> in den Satz passt!</p>
        <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;background:white;padding:20px;border-radius:12px;border:2px solid #3498db;">
          ${i.text.split(` `).map(e=>`<span class="ss-word" style="font-size:1.3rem;font-weight:bold;color:#2c3e50;cursor:pointer;padding:5px;border-radius:5px;transition:background 0.2s;">${e}</span>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.ss-word`).forEach(e=>{e.onclick=()=>{let t=e.textContent.replace(/[.,!]/g,``)===i.wrong;e.style.background=t?`#2ecc71`:`#e74c3c`,e.style.color=`white`,setTimeout(()=>n({correct:t,score:t?100:0}),1e3)}})}},"article-ace":{id:`article-ace`,name_de:`Artikel-Ass`,topics:[`artikel`],setup(e,t,n){let r=[{w:`Hund`,a:`der`},{w:`Katze`,a:`die`},{w:`Haus`,a:`das`}].sort(()=>Math.random()-.5),i=0,a=0;function o(){if(i>=r.length){n({correct:a>=2,score:Math.round(a/r.length*100)});return}let t=r[i];e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
          <div style="font-size:4rem;font-weight:bold;margin-bottom:30px;">${t.w}</div>
          <div style="display:flex;gap:15px;justify-content:center;">
             <button class="ace-btn" data-a="der" style="padding:15px 30px;background:#3498db;color:white;border:none;border-radius:10px;font-size:1.5rem;font-weight:bold;cursor:pointer;">der</button>
             <button class="ace-btn" data-a="die" style="padding:15px 30px;background:#e74c3c;color:white;border:none;border-radius:10px;font-size:1.5rem;font-weight:bold;cursor:pointer;">die</button>
             <button class="ace-btn" data-a="das" style="padding:15px 30px;background:#2ecc71;color:white;border:none;border-radius:10px;font-size:1.5rem;font-weight:bold;cursor:pointer;">das</button>
          </div>
        </div>`,e.querySelectorAll(`.ace-btn`).forEach(e=>{e.onclick=()=>{e.dataset.a===t.a&&a++,i++,o()}})}o()}},"grammar-ghost":{id:`grammar-ghost`,name_de:`Grammatik-Gespenst`,topics:[`grammatik`,`rechtschreibung`],setup(e,t,n){let r=[{wrong:`Ich gehe in die Haus.`,right:`Ich gehe in das Haus.`,hint:`Artikel falsch?`},{wrong:`Er lauft schnell.`,right:`Er läuft schnell.`,hint:`Vokal falsch?`}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:15px;">👻</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Das Gespenst hat einen Fehler gemacht! Korrigiere den Satz:</p>
        <div style="font-size:1.3rem;background:#f8f9fa;padding:15px;border-radius:8px;margin-bottom:20px;color:#e74c3c;font-style:italic;">"${i.wrong}"</div>
        <input id="gg-input" type="text" placeholder="Richtiger Satz..." style="width:100%;padding:15px;font-size:1.2rem;border-radius:10px;border:2px solid #34495e;outline:none;">
        <button id="gg-submit" class="btn btn-primary" style="margin-top:15px;width:100%;">Geist bannen!</button>
      </div>`,e.querySelector(`#gg-submit`).onclick=()=>{let t=e.querySelector(`#gg-input`).value.trim().toLowerCase()===i.right.toLowerCase();n({correct:t,score:t?100:0})}}},"idiom-island":{id:`idiom-island`,name_de:`Insel der Redewendungen`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[{situation:`Jemand hat dir sehr geholfen.`,answer:`Vielen Dank!`,options:[`Vielen Dank!`,`Guten Tag.`,`Bis bald.`,`Entschuldigung.`]},{situation:`Du hast einen Fehler gemacht.`,answer:`Entschuldigung.`,options:[`Entschuldigung.`,`Hallo!`,`Prost!`,`Gesundheit!`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:15px;">🏝️</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Was sagt man in dieser Situation?</p>
        <div style="font-size:1.2rem;background:#f8f9fa;padding:20px;border-radius:10px;margin-bottom:25px;font-weight:bold;">"${i.situation}"</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="ii-btn" data-o="${e}" style="padding:15px;background:#3498db;color:white;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.ii-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.o===i.answer;n({correct:t,score:t?100:0})}})}},"proverb-path":{id:`proverb-path`,name_de:`Sprichwort-Pfad`,topics:[`lesen`,`wortschatz`],setup(e,t,n){let r=[{start:`Morgenstund hat Gold im ___`,answer:`Mund`,options:[`Mund`,`Hand`,`Kopf`,`Haus`]},{start:`Wer rastet, der ___`,answer:`rostet`,options:[`rostet`,`schläft`,`läuft`,`lacht`]}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:15px;">🛣️</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Vervollständige das Sprichwort!</p>
        <div style="font-size:1.4rem;background:#f8f9fa;padding:20px;border-radius:10px;margin-bottom:30px;font-style:italic;">"${i.start}"</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="pp-btn" data-o="${e}" style="padding:15px;background:#e67e22;color:white;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.pp-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.o===i.answer;n({correct:t,score:t?100:0})}})}},"prefix-power":{id:`prefix-power`,name_de:`Präfix-Power`,topics:[`verben`,`grammatik`],setup(e,t,n){let r=[{base:`stellen`,answer:`vor`,options:[`vor`,`be`,`ge`,`ent`],result:`vorstellen`},{base:`gehen`,answer:`aus`,options:[`aus`,`unter`,`mit`,`nach`],result:`ausgehen`}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:15px;">⚡</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Welches Präfix bildet ein sinnvolles Verb mit <b>${i.base}</b>?</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="pp-btn" data-o="${e}" style="padding:15px;background:#9b59b6;color:white;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">${e}-</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.pp-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.o===i.answer;n({correct:t,score:t?100:0})}})}},"suffix-sun":{id:`suffix-sun`,name_de:`Suffix-Sonne`,topics:[`wortarten`,`grammatik`],setup(e,t,n){let r=[{base:`Kind`,answer:`heit`,options:[`heit`,`ung`,`keit`,`schaft`],result:`Kindheit`},{base:`freund`,answer:`lich`,options:[`lich`,`ig`,`bar`,`sam`],result:`freundlich`}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:15px;">☀️</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Welches Suffix passt zu <b>${i.base}</b>?</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
          ${i.options.sort(()=>Math.random()-.5).map(e=>`<button class="ss-btn" data-o="${e}" style="padding:15px;background:#f1c40f;color:#2c3e50;border:none;border-radius:8px;font-weight:bold;cursor:pointer;">-${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.ss-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.o===i.answer;n({correct:t,score:t?100:0})}})}},"tense-tornado":{id:`tense-tornado`,name_de:`Zeitformen-Tornado`,topics:[`zeitformen`],setup(e,t,n){let r=[{v:`ich gehe`,t:`Präsens`},{v:`ich ging`,t:`Präteritum`},{v:`ich bin gegangen`,t:`Perfekt`}],i=r[Math.floor(Math.random()*r.length)];e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:15px;">🌪️</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Welche Zeitform ist das?</p>
        <div style="font-size:2.5rem;font-weight:900;color:#2c3e50;margin-bottom:30px;">${i.v}</div>
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${[`Präsens`,`Präteritum`,`Perfekt`].map(e=>`<button class="tt-btn" data-o="${e}" style="padding:15px;background:#34495e;color:white;border:none;border-radius:10px;font-weight:bold;cursor:pointer;">${e}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.tt-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.o===i.t;n({correct:t,score:t?100:0})}})}},"word-puzzle-3x3":{id:`word-puzzle-3x3`,name_de:`Wort-Puzzle`,topics:[`konzentration`,`rechtschreibung`],setup(e,t,n){let r=[`H`,`U`,`N`,`D`,`A`,`B`,`C`,`D`,null].sort(()=>Math.random()-.5);function i(){e.innerHTML=`
        <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
          <p style="color:var(--text-secondary);margin-bottom:20px;">Schiebe die Kacheln!</p>
          <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:5px;width:240px;margin:0 auto;">
            ${r.map((e,t)=>`
              <div class="tile" data-idx="${t}" style="width:75px;height:75px;background:${e?`#3498db`:`transparent`};color:white;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;border-radius:8px;cursor:${e?`pointer`:`default`};">
                ${e||``}
              </div>
            `).join(``)}
          </div>
          <button id="wp-skip" class="btn btn-secondary" style="margin-top:20px;width:100%;">Fertig (Auto-Win für Demo)</button>
        </div>`,e.querySelectorAll(`.tile`).forEach(e=>{e.onclick=()=>{let t=parseInt(e.dataset.idx),n=r.indexOf(null),a=Math.floor(t/3),o=t%3,s=Math.floor(n/3),c=n%3;Math.abs(a-s)+Math.abs(o-c)===1&&(r[n]=r[t],r[t]=null,i())}}),e.querySelector(`#wp-skip`).onclick=()=>n({correct:!0,score:100})}i()}},"letter-bounce":{id:`letter-bounce`,name_de:`Buchstaben-Bounce`,topics:[`rechtschreibung`],setup(e,t,n){e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:20px;">🏀</div>
        <p style="color:var(--text-secondary);margin-bottom:30px;">Lasse den Buchstaben in das richtige Feld springen!</p>
        <div style="display:flex;justify-content:center;gap:20px;">
          <div style="width:100px;height:100px;border:3px solid #3498db;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;color:#3498db;">A</div>
          <div style="width:100px;height:100px;border:3px solid #e74c3c;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:bold;color:#e74c3c;">B</div>
        </div>
        <button id="lb-win" class="btn btn-primary" style="margin-top:40px;width:100%;">Sprung! -></button>
      </div>`,e.querySelector(`#lb-win`).onclick=()=>n({correct:!0,score:100})}},"word-fishing":{id:`word-fishing`,name_de:`Wort-Angeln`,topics:[`wortarten`],setup(e,t,n){let r=`Nomen`;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:3rem;margin-bottom:10px;">🎣</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Angle dir ein <span style="color:#3498db;font-weight:bold;">${r}</span>!</p>
        <div style="display:flex;flex-wrap:wrap;gap:15px;justify-content:center;">
          ${[{w:`Baum`,type:`Nomen`},{w:`schnell`,type:`Adjektiv`},{w:`laufen`,type:`Verb`},{w:`Haus`,type:`Nomen`}].map(e=>`<button class="wf-btn" data-type="${e.type}" style="padding:15px;background:#1abc9c;color:white;border:none;border-radius:50%;width:80px;height:80px;font-weight:bold;cursor:pointer;box-shadow:0 4px 0 #16a085;">${e.w}</button>`).join(``)}
        </div>
      </div>`,e.querySelectorAll(`.wf-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.type===r;e.style.background=t?`#2ecc71`:`#e74c3c`,setTimeout(()=>n({correct:t,score:t?100:0}),800)}})}},"sentence-bridge":{id:`sentence-bridge`,name_de:`Satz-Brücke`,topics:[`satzbau`],setup(e,t,n){let r={left:`Ich gehe`,right:`nach Hause.`};e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <p style="color:var(--text-secondary);margin-bottom:30px;">Verbinde die Satzteile!</p>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="background:#3498db;color:white;padding:15px;border-radius:10px;font-weight:bold;">${r.left}</div>
          <div style="font-size:2rem;">🔗</div>
          <div style="background:#3498db;color:white;padding:15px;border-radius:10px;font-weight:bold;">${r.right}</div>
        </div>
        <button id="sb-win" class="btn btn-primary" style="margin-top:40px;width:100%;">Brücke fertig! -></button>
      </div>`,e.querySelector(`#sb-win`).onclick=()=>n({correct:!0,score:100})}},"category-cannon":{id:`category-cannon`,name_de:`Kategorie-Kanone`,topics:[`wortschatz`],setup(e,t,n){e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:10px;">🚀</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Schieße den <b>Apfel</b> in die richtige Tonne!</p>
        <div style="display:flex;justify-content:center;gap:20px;">
          <button class="cc-btn" data-c="Obst" style="padding:20px;background:#2ecc71;color:white;border:none;border-radius:10px;font-weight:bold;cursor:pointer;">Obst</button>
          <button class="cc-btn" data-c="Gemüse" style="padding:20px;background:#e67e22;color:white;border:none;border-radius:10px;font-weight:bold;cursor:pointer;">Gemüse</button>
        </div>
      </div>`,e.querySelectorAll(`.cc-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.c===`Obst`;n({correct:t,score:t?100:0})}})}},"spelling-bee-de":{id:`spelling-bee-de`,name_de:`Buchstabier-Profi`,topics:[`rechtschreibung`],setup(e,t,n){let r=`BAUM`;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:10px;">🐝</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Buchstabiere das Wort!</p>
        <div style="font-size:2.5rem;font-weight:bold;letter-spacing:10px;margin-bottom:30px;color:#34495e;">${r}</div>
        <input id="sb-input" type="text" placeholder="W-O-R-T" style="width:100%;padding:15px;font-size:1.5rem;text-align:center;border-radius:10px;border:2px solid #34495e;text-transform:uppercase;outline:none;">
        <button id="sb-submit" class="btn btn-primary" style="margin-top:20px;width:100%;">Fertig!</button>
      </div>`,e.querySelector(`#sb-submit`).onclick=()=>{let t=e.querySelector(`#sb-input`).value.trim().toUpperCase()===r;n({correct:t,score:t?100:0})}}},"word-pyramid":{id:`word-pyramid`,name_de:`Wort-Pyramide`,topics:[`rechtschreibung`],setup(e,t,n){e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:10px;">🧱</div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:5px;">
          <div style="background:#3498db;color:white;padding:10px 20px;border-radius:5px;font-weight:bold;">A</div>
          <div style="background:#3498db;color:white;padding:10px 40px;border-radius:5px;font-weight:bold;">AN</div>
          <div style="background:#3498db;color:white;padding:10px 60px;border-radius:5px;font-weight:bold;">AMT</div>
        </div>
        <button id="wp-win" class="btn btn-primary" style="margin-top:40px;width:100%;">Pyramide steht! -></button>
      </div>`,e.querySelector(`#wp-win`).onclick=()=>n({correct:!0,score:100})}},"crossword-mini":{id:`crossword-mini`,name_de:`Mini-Kreuzwort`,topics:[`wortschatz`,`rechtschreibung`],setup(e,t,n){e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:10px;">📝</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Löse das Mini-Rätsel!</p>
        <div style="display:grid;grid-template-columns:repeat(3, 40px);gap:2px;justify-content:center;margin-bottom:20px;">
          <input type="text" maxlength="1" style="width:40px;height:40px;text-align:center;text-transform:uppercase;">
          <input type="text" maxlength="1" style="width:40px;height:40px;text-align:center;text-transform:uppercase;">
          <input type="text" maxlength="1" style="width:40px;height:40px;text-align:center;text-transform:uppercase;">
        </div>
        <button id="cm-win" class="btn btn-primary" style="width:100%;">Gelöst! -></button>
      </div>`,e.querySelector(`#cm-win`).onclick=()=>n({correct:!0,score:100})}},"word-balloon":{id:`word-balloon`,name_de:`Wort-Ballon`,topics:[`rechtschreibung`],setup(e,t,n){let r=[`H`,`A`,`N`,`D`],i=``;e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;user-select:none;">
        <div style="font-size:3rem;margin-bottom:10px;">🎈</div>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Platze die Buchstaben für <b>HAND</b>!</p>
        <div style="display:flex;gap:15px;justify-content:center;">
          ${r.map(e=>`<button class="wb-btn" data-l="${e}" style="width:60px;height:80px;background:#e74c3c;color:white;border:none;border-radius:30px;font-weight:bold;font-size:1.5rem;cursor:pointer;box-shadow:0 5px 0 #c0392b;">${e}</button>`).join(``)}
        </div>
        <div id="wb-res" style="margin-top:30px;font-size:1.5rem;font-weight:bold;color:#3498db;"></div>
      </div>`,e.querySelectorAll(`.wb-btn`).forEach(t=>{t.onclick=()=>{i+=t.dataset.l,t.style.opacity=`0.3`,t.style.pointerEvents=`none`,e.querySelector(`#wb-res`).textContent=i,i===`HAND`&&setTimeout(()=>n({correct:!0,score:100}),800)}})}},"grammar-maze":{id:`grammar-maze`,name_de:`Grammatik-Pfad`,topics:[`grammatik`],setup(e,t,n){e.innerHTML=`
      <div style="padding:var(--space-md);text-align:center;max-width:500px;margin:0 auto;">
        <div style="font-size:3rem;margin-bottom:10px;">🌀</div>
        <p style="color:var(--text-secondary);margin-bottom:30px;">Finde den Weg durch die richtige Grammatik!</p>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <button class="gm-btn" style="padding:15px;background:#34495e;color:white;border:none;border-radius:10px;font-weight:bold;cursor:pointer;">Start -></button>
        </div>
      </div>`,e.querySelector(`.gm-btn`).onclick=()=>n({correct:!0,score:100})}},"detective-adventure":{id:`detective-adventure`,name_de:`Detektiv-Abenteuer`,topics:[`lesen`,`grammatik`,`wortschatz`],setup(e,t,n){let r=`intro`,i=[],a=[{id:`fox`,name:`Fuchs`,clue:`Der Täter trägt einen <b style="color:#e74c3c;">roten</b> Schal.`},{id:`bear`,name:`Bär`,clue:`Der Täter hat <b style="color:#e74c3c;">große</b> Pfoten.`},{id:`rabbit`,name:`Hase`,clue:`Der Täter liebt <b style="color:#e74c3c;">Karotten</b>.`}],o=a[Math.floor(Math.random()*a.length)];function s(){e.innerHTML=``;let t=document.createElement(`div`);if(t.style.cssText=`padding:var(--space-md);max-width:600px;margin:0 auto;text-align:center;font-family:inherit;`,r===`intro`)t.innerHTML=`
          <div style="font-size:4rem;margin-bottom:20px;">🕵️‍♂️🔎</div>
          <h2 style="color:var(--text-primary);margin-bottom:15px;">Der Fall: Das verschwundene Wort</h2>
          <p style="color:var(--text-secondary);font-size:1.1rem;line-height:1.6;margin-bottom:30px;">
            Ein wertvolles Nomen wurde gestohlen! Ein Zeuge sagt: <i>"Ich habe jemanden weglaufen sehen, aber mein Gedächtnis ist lückenhaft."</i>
            Sammle 3 Hinweise in der Stadt, um den Dieb zu entlarven!
          </p>
          <button id="start-da" class="btn btn-primary" style="width:100%;padding:18px;font-size:1.2rem;">Ermittlung starten -></button>
        `,t.querySelector(`#start-da`).onclick=()=>{r=`map`,s()};else if(r===`map`){let e=[{id:`park`,name:`Stadtpark`,icon:`🌳`,found:i.includes(`park`)},{id:`shop`,name:`Supermarkt`,icon:`🛒`,found:i.includes(`shop`)},{id:`house`,name:`Altes Haus`,icon:`🏚️`,found:i.includes(`house`)}];t.innerHTML=`
          <div style="font-size:2rem;margin-bottom:15px;">📍 Die Stadt-Karte</div>
          <p style="color:var(--text-secondary);margin-bottom:20px;">Wo willst du suchen? (${i.length}/3 Hinweise)</p>
          <div style="display:grid;grid-template-columns:1fr;gap:15px;">
            ${e.map(e=>`
              <button class="loc-btn" data-id="${e.id}" style="padding:20px;background:${e.found?`#ecf0f1`:`white`};border:2px solid #34495e;border-radius:12px;display:flex;align-items:center;gap:20px;cursor:${e.found?`default`:`pointer`};opacity:${e.found?.6:1};" ${e.found?`disabled`:``}>
                <span style="font-size:2.5rem;">${e.icon}</span>
                <span style="font-size:1.3rem;font-weight:bold;color:#2c3e50;">${e.name} ${e.found?`✅`:``}</span>
              </button>
            `).join(``)}
          </div>
          ${i.length===3?`
            <button id="accuse-btn" class="btn btn-primary" style="margin-top:25px;width:100%;background:#e74c3c;">Anklage erheben! ⚖️</button>
          `:``}
        `,t.querySelectorAll(`.loc-btn`).forEach(e=>{e.onclick=()=>{r=`location_`+e.dataset.id,s()}}),t.querySelector(`#accuse-btn`)?.addEventListener(`click`,()=>{r=`accusation`,s()})}else if(r.startsWith(`location_`)){let e=r.split(`_`)[1],n={park:{title:`Im Stadtpark`,text:`Auf einer Parkbank liegt eine Nachricht: "Das Adjektiv für die Schalfarbe ist kleingeschrieben."`,question:`Welches Wort ist ein Farbadjektiv?`,options:[`Rot`,`blau`,`Groß`],answer:`blau`},shop:{title:`Im Supermarkt`,text:`Der Verkäufer sagt: "Der Dieb hat viele Karotten gekauft."`,question:`Was liebt der Täter?`,options:[`Schokolade`,`Karotten`,`Äpfel`],answer:`Karotten`},house:{title:`Im Alten Haus`,text:`An der Wand klebt ein Pfotenabdruck: Er ist riesig!`,question:`Was ist das Gegenteil von klein?`,options:[`groß`,`schön`,`schnell`],answer:`groß`}}[e];t.innerHTML=`
          <div style="font-size:3rem;margin-bottom:10px;">🔍</div>
          <h3 style="margin-bottom:10px;">${n.title}</h3>
          <div style="background:#fdfcf0;padding:20px;border-radius:12px;border:1px solid #dcdde1;font-style:italic;margin-bottom:20px;line-height:1.6;">
            "${n.text}"
          </div>
          <p style="font-weight:bold;margin-bottom:20px;">${n.question}</p>
          <div style="display:grid;grid-template-columns:1fr;gap:10px;">
            ${n.options.map(e=>`<button class="opt-btn" style="padding:15px;background:white;border:2px solid #3498db;border-radius:10px;font-weight:bold;cursor:pointer;">${e}</button>`).join(``)}
          </div>
        `,t.querySelectorAll(`.opt-btn`).forEach(t=>{t.onclick=()=>{t.textContent===n.answer?(i.push(e),r=`map`,s()):(t.style.background=`#e74c3c`,t.style.color=`white`,setTimeout(()=>{t.style.background=`white`,t.style.color=`inherit`},600))}})}else r===`accusation`&&(t.innerHTML=`
          <div style="font-size:3rem;margin-bottom:15px;">⚖️ Wer ist der Dieb?</div>
          <p style="color:var(--text-secondary);margin-bottom:30px;">Wähle den Verdächtigen aus, auf den alle Hinweise passen:</p>
          <div style="display:grid;grid-template-cols:1fr 1fr;gap:15px;">
            ${a.map(e=>`
              <button class="suspect-btn" data-id="${e.id}" style="padding:15px;background:white;border:2px solid #2c3e50;border-radius:12px;cursor:pointer;transition:transform 0.2s;">
                <div style="font-size:2.5rem;margin-bottom:10px;">${e.id===`fox`?`🦊`:e.id===`bear`?`🐻`:`🐰`}</div>
                <div style="font-weight:bold;font-size:1.2rem;">${e.name}</div>
              </button>
            `).join(``)}
          </div>
          <div id="da-feedback" style="margin-top:25px;font-size:1.3rem;font-weight:bold;min-height:30px;"></div>
        `,t.querySelectorAll(`.suspect-btn`).forEach(e=>{e.onclick=()=>{let r=e.dataset.id===o.id,i=t.querySelector(`#da-feedback`);i.textContent=r?`FALL GELÖST! Du bist ein Meisterdetektiv! 🏆`:`Falscher Verdächtiger! Die Beweise passen nicht...`,i.style.color=r?`#2ecc71`:`#e74c3c`,e.style.borderColor=r?`#2ecc71`:`#e74c3c`,e.style.transform=`scale(1.1)`,setTimeout(()=>n({correct:r,score:r?100:0}),1500)}}));e.appendChild(t)}s()}},"grammar-rpg":{id:`grammar-rpg`,name_de:`Grammatik-Abenteuer`,topics:[`grammatik`,`wortschatz`,`konzentration`],setup(e,t,n){let r={x:0,y:0},i={x:4,y:4},a=0,o=[{x:2,y:0,solved:!1,q:`Was ist der Artikel von "Baum"?`,a:`der`,opts:[`der`,`die`,`das`]},{x:0,y:2,solved:!1,q:`Welches Wort ist ein Verb?`,a:`laufen`,opts:[`blau`,`laufen`,`Hund`]},{x:3,y:3,solved:!1,q:`Was ist das Gegenteil von "laut"?`,a:`leise`,opts:[`leise`,`schnell`,`kalt`]}];function s(){e.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`padding:var(--space-md);max-width:500px;margin:0 auto;text-align:center;user-select:none;touch-action:none;`,t.innerHTML=`
        <div style="font-size:1.5rem;margin-bottom:10px;">🦊 Grammatik-Entdecker</div>
        <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:20px;">Finde alle 3 Schreine (💎), um das goldene Tor (🚪) zu öffnen!</p>
        
        <div id="rpg-grid" style="display:grid;grid-template-columns:repeat(5, 1fr);gap:4px;background:#34495e;padding:4px;border-radius:12px;margin-bottom:25px;aspect-ratio:1/1;">
          ${Array.from({length:25}).map((e,t)=>{let n=t%5,s=Math.floor(t/5),c=r.x===n&&r.y===s,l=o.find(e=>e.x===n&&e.y===s),u=i.x===n&&i.y===s,d=``;return c?d=`🦊`:l?d=l.solved?`✅`:`💎`:u&&(d=a===3?`🚪`:`🔒`),`<div class="rpg-tile" data-x="${n}" data-y="${s}" style="background:#2c3e50;display:flex;align-items:center;justify-content:center;font-size:2rem;border-radius:6px;cursor:pointer;">${d}</div>`}).join(``)}
        </div>

        <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:10px;width:180px;margin:0 auto;">
          <div></div>
          <button class="nav-btn" data-dir="up" style="padding:15px;background:#3498db;color:white;border:none;border-radius:10px;">⬆️</button>
          <div></div>
          <button class="nav-btn" data-dir="left" style="padding:15px;background:#3498db;color:white;border:none;border-radius:10px;">⬅️</button>
          <button class="nav-btn" data-dir="down" style="padding:15px;background:#3498db;color:white;border:none;border-radius:10px;">⬇️</button>
          <button class="nav-btn" data-dir="right" style="padding:15px;background:#3498db;color:white;border:none;border-radius:10px;">➡️</button>
        </div>
      `,t.querySelectorAll(`.nav-btn`).forEach(e=>{e.onclick=()=>{let t=e.dataset.dir,n=r.x,i=r.y;t===`up`&&i--,t===`down`&&i++,t===`left`&&n--,t===`right`&&n++,n>=0&&n<5&&i>=0&&i<5&&(r={x:n,y:i},c(),s())}}),e.appendChild(t)}function c(){let e=o.find(e=>e.x===r.x&&e.y===r.y);e&&!e.solved?l(e):r.x===i.x&&r.y===i.y&&a===3&&n({correct:!0,score:100})}function l(t){let n=document.createElement(`div`);n.style.cssText=`position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1000;padding:20px;text-align:center;border-radius:16px;`,n.innerHTML=`
        <div style="font-size:3rem;margin-bottom:20px;">💎 Schrein gefunden!</div>
        <p style="font-size:1.3rem;margin-bottom:30px;">${t.q}</p>
        <div style="display:grid;grid-template-columns:1fr;gap:15px;width:100%;max-width:300px;">
          ${t.opts.map(e=>`<button class="shrine-opt" style="padding:15px;background:#3498db;color:white;border:none;border-radius:10px;font-weight:bold;font-size:1.1rem;cursor:pointer;">${e}</button>`).join(``)}
        </div>
      `,n.querySelectorAll(`.shrine-opt`).forEach(r=>{r.onclick=()=>{r.textContent===t.a?(t.solved=!0,a++,e.removeChild(n),s()):(r.style.background=`#e74c3c`,setTimeout(()=>{r.style.background=`#3498db`},600))}}),e.appendChild(n)}s()}},"kitchen-chaos":{id:`kitchen-chaos`,name_de:`Küchen-Schlacht`,topics:[`lesen`,`wortschatz`,`verben`],setup(e,t,n){let r=[{id:`cut_onion`,text:`Schneide die Zwiebel!`,icon:`🧅`,action:`swipe`,result:`🔪`},{id:`dry_apple`,text:`Wasche den Apfel!`,icon:`🍎`,action:`tap`,result:`💧`},{id:`pour_salt`,text:`Gib das Salz dazu!`,icon:`🧂`,action:`drag`,target:`🍲`,result:`🍲✨`}],i=0;function a(){e.innerHTML=``;let t=r[i];if(!t){n({correct:!0,score:100});return}let a=document.createElement(`div`);a.style.cssText=`padding:var(--space-md);max-width:500px;margin:0 auto;text-align:center;user-select:none;touch-action:none;position:relative;height:60vh;`,a.innerHTML=`
        <div style="font-size:2rem;margin-bottom:10px;">🍳 Meisterkoch</div>
        <div id="kc-instruction" style="background:#f8f9fa;padding:15px;border-radius:10px;font-size:1.3rem;font-weight:bold;color:#2c3e50;margin-bottom:40px;border-left:5px solid #e67e22;">
          ${t.text}
        </div>
        
        <div style="position:relative;height:300px;display:flex;align-items:center;justify-content:center;">
          <div id="kc-main-item" style="font-size:8rem;cursor:grab;z-index:2;transition:transform 0.2s;">${t.icon}</div>
          ${t.target?`<div id="kc-target" style="position:absolute;bottom:0;right:20px;font-size:8rem;">${t.target}</div>`:``}
        </div>
        
        <div style="color:var(--text-secondary);font-size:0.9rem;margin-top:20px;">
          ${t.action===`swipe`?`👉 Ziehe schnell über das Objekt zum Schneiden!`:t.action===`tap`?`👋 Tippe mehrmals zum Waschen!`:`🎯 Ziehe das Objekt zum Ziel!`}
        </div>
      `;let s=a.querySelector(`#kc-main-item`),c;if(t.action===`swipe`)s.onpointerdown=e=>{c=e.clientX,e.clientY},s.onpointerup=e=>{Math.abs(e.clientX-c)>50&&o()};else if(t.action===`tap`){let e=0;s.onclick=()=>{e++,s.style.transform=`scale(${1+e*.1})`,e>=5&&o()}}else if(t.action===`drag`){let e=!1;s.onpointerdown=()=>{e=!0,s.style.cursor=`grabbing`},window.onpointermove=t=>{if(!e)return;let n=a.getBoundingClientRect();s.style.position=`absolute`,s.style.left=`${t.clientX-n.left-50}px`,s.style.top=`${t.clientY-n.top-50}px`;let r=a.querySelector(`#kc-target`);if(r){let t=r.getBoundingClientRect(),n=s.getBoundingClientRect();n.left<t.right&&n.right>t.left&&n.top<t.bottom&&n.bottom>t.top&&(e=!1,o())}},window.onpointerup=()=>{e=!1}}e.appendChild(a)}function o(){let t=document.createElement(`div`);t.style.cssText=`position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:5rem;pointer-events:none;animation:popIn 0.5s forwards;z-index:100;`,t.textContent=`✨ Super! ✨`,e.appendChild(t),setTimeout(()=>{i++,a()},1e3)}a()}},"sentence-architect":{id:`sentence-architect`,name_de:`Satz-Bauhaus`,topics:[`satzbau`,`grammatik`],setup(e,t,n){let r=[{structure:[`Subjekt`,`Verb`,`Objekt`],words:[{w:`Der Hund`,type:`Subjekt`},{w:`frisst`,type:`Verb`},{w:`den Knochen`,type:`Objekt`}]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.words].sort(()=>Math.random()-.5),o=i.structure.map(e=>({type:e,filled:null}));function s(){e.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`padding:var(--space-md);max-width:600px;margin:0 auto;text-align:center;user-select:none;touch-action:none;`,t.innerHTML=`
        <div style="font-size:2rem;margin-bottom:10px;">🏗️ Satz-Architekt</div>
        <p style="color:var(--text-secondary);margin-bottom:30px;">Baue den Satz Stein für Stein auf!</p>
        
        <div id="architect-site" style="min-height:200px;background:#ecf0f1;border-radius:16px;padding:20px;border-bottom:10px solid #bdc3c7;margin-bottom:30px;display:flex;justify-content:center;align-items:flex-end;gap:10px;">
          ${o.map((e,t)=>`
            <div class="architect-slot" data-idx="${t}" style="width:120px;height:60px;border:2px dashed #bdc3c7;background:rgba(255,255,255,0.5);border-radius:8px;display:flex;align-items:center;justify-content:center;color:#bdc3c7;font-weight:bold;font-size:0.8rem;transition:all 0.2s;">
              ${e.filled?`
                <div style="width:100%;height:100%;background:#34495e;color:white;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1rem;box-shadow:0 4px 0 #2c3e50;">${e.filled.w}</div>
              `:e.type}
            </div>
          `).join(``)}
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
          ${a.map((e,t)=>`
            <div class="architect-brick" data-idx="${t}" style="padding:15px;background:#3498db;color:white;border-radius:8px;font-weight:bold;cursor:grab;box-shadow:0 4px 0 #2980b9;min-width:80px;">${e.w}</div>
          `).join(``)}
        </div>

        ${o.every(e=>e.filled)?`<button id="arch-check" class="btn btn-primary" style="margin-top:40px;width:100%;background:#e67e22;">Abnahme durch den Polier 👷‍♂️</button>`:``}
      `,t.querySelectorAll(`.architect-brick`).forEach(e=>{e.onpointerdown=t=>{let n=parseInt(e.dataset.idx),r=a[n],i=o.find(e=>!e.filled);i&&(i.filled=r,a.splice(n,1),s())}}),t.querySelector(`#arch-check`)?.addEventListener(`click`,()=>{o.every(e=>e.filled.type===e.type)?(t.querySelector(`#architect-site`).style.background=`#d4edda`,setTimeout(()=>n({correct:!0,score:100}),1e3)):(t.querySelector(`#architect-site`).style.transform=`skew(5deg)`,t.querySelector(`#architect-site`).style.background=`#f8d7da`,setTimeout(()=>{o.forEach(e=>{e.filled&&a.push(e.filled),e.filled=null}),s()},1e3))}),e.appendChild(t)}s()}},"word-alchemy":{id:`word-alchemy`,name_de:`Wort-Alchemie`,topics:[`wortbildung`,`wortschatz`,`rechtschreibung`],setup(e,t,n){let r=[{base:`stellen`,options:[`vor`,`be`,`ge`,`ent`],answer:`vor`,full:`vorstellen`},{base:`laufen`,options:[`hin`,`weg`,`mit`,`aus`],answer:`hin`,full:`hinlaufen`}],i=r[Math.floor(Math.random()*r.length)];function a(){e.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`padding:var(--space-md);max-width:500px;margin:0 auto;text-align:center;user-select:none;touch-action:none;position:relative;background:linear-gradient(to bottom, #2c3e50, #000);border-radius:20px;color:white;overflow:hidden;height:65vh;`,t.innerHTML=`
        <style>
          @keyframes bubble { 0% { transform: translateY(0) scale(1); opacity: 0; } 50% { opacity: 0.8; } 100% { transform: translateY(-100px) scale(0.5); opacity: 0; } }
          .bubble { position:absolute; bottom:60px; width:15px; height:15px; background:rgba(255,215,0,0.6); border-radius:50%; animation: bubble 3s infinite ease-out; }
          .wa-ingredient { cursor:grab; padding:15px 25px; border-radius:30px; font-weight:bold; font-size:1.2rem; box-shadow:0 0 15px rgba(255,255,255,0.2); }
        </style>
        <div style="font-size:2rem;color:#f1c40f;margin-bottom:10px;">🧪 Die Alchemie-Küche</div>
        <p style="color:#bdc3c7;font-size:0.9rem;margin-bottom:30px;">Mische ein Präfix zu <b>"${i.base}"</b>!</p>
        
        <!-- The Cauldron -->
        <div id="wa-cauldron" style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:280px;height:120px;background:#34495e;border-radius:100px 100px 20px 20px;border-top:8px solid #2c3e50;box-shadow:inset 0 10px 30px rgba(0,0,0,0.5), 0 10px 0 #1a252f;">
          <div style="position:absolute;top:-10px;left:20px;right:20px;height:20px;background:#8e44ad;border-radius:50%;opacity:0.6;filter:blur(5px);"></div>
          <!-- Bubbles -->
          ${Array.from({length:8}).map((e,t)=>`<div class="bubble" style="left:${20+Math.random()*240}px; animation-delay:${Math.random()*3}s;"></div>`).join(``)}
        </div>

        <div id="wa-shelf" style="display:flex;flex-wrap:wrap;gap:15px;justify-content:center;">
          ${i.options.map((e,t)=>`
            <div class="wa-ingredient" data-opt="${e}" style="background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.3);">${e}-</div>
          `).join(``)}
        </div>
        
        <div id="wa-feedback" style="position:absolute;top:40%;left:50%;transform:translate(-50%,-50%);font-size:3rem;font-weight:900;text-shadow:0 0 20px #f1c40f;pointer-events:none;display:none;"></div>
      `;let r=t.querySelectorAll(`.wa-ingredient`),a=t.querySelector(`#wa-cauldron`),o=t.querySelector(`#wa-feedback`);r.forEach(e=>{let t=!1,r,s;e.onpointerdown=n=>{t=!0,r=n.clientX,s=n.clientY,e.style.zIndex=100},window.onpointermove=n=>{if(!t)return;let i=n.clientX-r,o=n.clientY-s;e.style.transform=`translate(${i}px, ${o}px) rotate(${i/10}deg)`;let c=a.getBoundingClientRect(),l=e.getBoundingClientRect();l.left<c.right&&l.right>c.left&&l.top<c.bottom&&l.bottom>c.top?a.style.background=`#8e44ad`:a.style.background=`#34495e`},window.onpointerup=r=>{if(!t)return;t=!1;let s=a.getBoundingClientRect(),c=e.getBoundingClientRect();c.left<s.right&&c.right>s.left&&c.top<s.bottom&&c.bottom>s.top?e.dataset.opt===i.answer?(e.style.display=`none`,o.style.display=`block`,o.innerHTML=`<span style="color:#f1c40f;">GOLD!</span><br><small style="font-size:1.5rem;">"${i.full}"</small>`,a.style.background=`#f1c40f`,setTimeout(()=>n({correct:!0,score:100}),1500)):(e.style.transform=`translate(0,0)`,a.style.background=`#e74c3c`,setTimeout(()=>a.style.background=`#34495e`,500)):e.style.transform=`translate(0,0)`}}),e.appendChild(t)}a()}},"sentence-symphony":{id:`sentence-symphony`,name_de:`Satz-Sinfonie`,topics:[`satzbau`,`grammatik`,`lesen`],setup(e,t,n){let r=[{words:[`Heute`,`gehen`,`wir`,`in`,`den`,`Zoo.`],order:[0,1,2,3,4,5]}],i=r[Math.floor(Math.random()*r.length)],a=[...i.words].sort(()=>Math.random()-.5),o=[];function s(){e.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`padding:var(--space-md);max-width:600px;margin:0 auto;text-align:center;user-select:none;touch-action:none;position:relative;background:linear-gradient(135deg, #2c3e50, #4b79a1);border-radius:24px;color:white;min-height:60vh;overflow:hidden;`,t.innerHTML=`
        <style>
          @keyframes music-wave { 0%, 100% { height: 10px; } 50% { height: 40px; } }
          .music-bar { width:4px; margin:0 2px; background:#f1c40f; animation: music-wave 1s infinite alternate; }
          .word-note { cursor:pointer; padding:15px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.3); border-radius:12px; font-weight:bold; transition:all 0.2s; }
          .word-note:active { transform:scale(0.9); background:#f1c40f; color:#2c3e50; }
        </style>
        
        <div style="font-size:2rem;margin-bottom:10px;">🎶 Die Satz-Sinfonie</div>
        <p style="color:#bdc3c7;margin-bottom:30px;">Tippe die Instrumente (Wörter) in der richtigen Melodie-Pause!</p>
        
        <!-- Score Visualization -->
        <div style="height:80px;background:rgba(0,0,0,0.2);border-radius:15px;margin-bottom:40px;display:flex;align-items:center;justify-content:center;">
          <div style="font-size:1.5rem;font-weight:bold;letter-spacing:2px;color:#f1c40f;">
            ${o.length>0?o.join(` `):`--- --- ---`}
          </div>
          <!-- Animated Music Bars -->
          <div style="display:flex;margin-left:20px;">
            <div class="music-bar" style="animation-delay:0.1s;"></div>
            <div class="music-bar" style="animation-delay:0.3s;"></div>
            <div class="music-bar" style="animation-delay:0.2s;"></div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(2, 1fr);gap:15px;">
          ${a.map((e,t)=>`
            <div class="word-note" data-w="${e}">${e}</div>
          `).join(``)}
        </div>

        ${o.length===i.words.length?`
          <button id="ss-finish" class="btn btn-primary" style="margin-top:30px;width:100%;height:60px;font-size:1.3rem;">Applaus abholen 🎻</button>
        `:``}
      `,t.querySelectorAll(`.word-note`).forEach(e=>{e.onclick=()=>{let t=e.dataset.w;o.push(t),a.splice(a.indexOf(t),1),s()}}),t.querySelector(`#ss-finish`)?.addEventListener(`click`,()=>{o.join(` `)===i.words.join(` `)?(t.style.background=`linear-gradient(135deg, #27ae60, #2ecc71)`,setTimeout(()=>n({correct:!0,score:100}),1500)):(t.style.animation=`shake 0.5s`,t.style.background=`linear-gradient(135deg, #c0392b, #e74c3c)`,setTimeout(()=>{o=[],a.push(...i.words),s()},1e3))}),e.appendChild(t)}s()}},"time-traveler":{id:`time-traveler`,name_de:`Zeitreisende Pflanze`,topics:[`zeitformen`,`verben`,`grammatik`],setup(e,t,n){let r=[{inf:`gehen`,pr:`ich gehe`,pt:`ich ging`,pf:`ich bin gegangen`},{inf:`laufen`,pr:`ich laufe`,pt:`ich lief`,pf:`ich bin gelaufen`}],i=r[Math.floor(Math.random()*r.length)],a=[`Präsens`,`Präteritum`,`Perfekt`],o=a[Math.floor(Math.random()*a.length)],s=o===`Präsens`?i.pr:o===`Präteritum`?i.pt:i.pf,c=[i.pr,i.pt,i.pf,`ich gehete`,`ich habe gegangen`].sort(()=>Math.random()-.5);function l(){e.innerHTML=``;let t=document.createElement(`div`);t.style.cssText=`padding:var(--space-md);max-width:500px;margin:0 auto;text-align:center;user-select:none;touch-action:none;background:linear-gradient(to bottom, #dff9fb, #ffffff);border-radius:24px;border:4px solid #7ed6df;min-height:65vh;overflow:hidden;position:relative;`,t.innerHTML=`
        <style>
          @keyframes grow { 0% { transform: scale(0.5); opacity: 0; } 100% { transform: scale(1); opacity: 1; } }
          .tt-leaf { animation: grow 0.5s ease-out forwards; width:50px; height:80px; background:#6ab04c; border-radius:100% 0 100% 0; position:absolute; }
          .tt-btn { padding:15px; background:white; border:2px solid #7ed6df; border-radius:12px; font-weight:bold; cursor:pointer; font-size:1.1rem; transition:all 0.2s; }
          .tt-btn:active { transform:scale(0.95); background:#7ed6df; color:white; }
        </style>
        
        <div style="font-size:1.8rem;color:#22a6b3;margin-bottom:10px;">⏳ Baum der Zeiten</div>
        <p style="color:#535c68;margin-bottom:30px;">Wähle die Form für <b>${i.inf}</b> im <span style="color:#eb4d4b;font-weight:bold;">${o}</span>!</p>
        
        <!-- The Plant -->
        <div id="tt-plant" style="height:200px;display:flex;align-items:flex-end;justify-content:center;position:relative;margin-bottom:40px;">
          <div style="width:15px;height:150px;background:#95afc0;border-radius:10px;position:relative;">
             <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);font-size:3rem;">🌱</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:1fr;gap:10px;">
          ${c.map(e=>`<button class="tt-btn" data-v="${e}">${e}</button>`).join(``)}
        </div>
      `,t.querySelectorAll(`.tt-btn`).forEach(e=>{e.onclick=()=>{if(e.dataset.v===s){e.style.background=`#6ab04c`,e.style.borderColor=`#6ab04c`,e.style.color=`white`;for(let e=0;e<3;e++){let e=document.createElement(`div`);e.classList.add(`tt-leaf`),e.style.left=`${Math.random()*80+10}%`,e.style.top=`${Math.random()*50+10}%`,t.querySelector(`#tt-plant`).appendChild(e)}setTimeout(()=>n({correct:!0,score:100}),1500)}else e.style.background=`#eb4d4b`,e.style.borderColor=`#eb4d4b`,e.style.color=`white`,t.style.animation=`shake 0.5s`,setTimeout(()=>{e.style.background=`white`,e.style.color=`inherit`},600)}}),e.appendChild(t)}l()}},"dialogue-duel":{id:`dialogue-duel`,name_de:`Dialog-Duell`,topics:[`lesen`,`wortschatz`,`pragmatik`],setup(e,t,n){let r={start:{text:`Hallo! Hast du heute Zeit für einen Ausflug?`,npc:`🦊`,emotion:`😊`,choices:[{text:`Ja, gerne! Wohin?`,next:`park`},{text:`Nein, ich muss lernen.`,next:`end_sad`}]},park:{text:`Lass uns in den Park gehen. Was sollen wir mitnehmen?`,npc:`🦊`,emotion:`😃`,choices:[{text:`Ein Picknick-Korb!`,next:`end_happy`},{text:`Einen Regenschirm.`,next:`end_rain`}]},end_happy:{text:`Toll! Das wird ein super Tag. 🧺🍓`,npc:`🦊`,emotion:`🥳`,isEnd:!0,correct:!0},end_sad:{text:`Schade. Vielleicht ein anderes Mal. 📚`,npc:`🦊`,emotion:`😟`,isEnd:!0,correct:!1},end_rain:{text:`Gute Idee! Es sieht bewölkt aus. 🌧️`,npc:`🦊`,emotion:`🤔`,isEnd:!0,correct:!0}},i=`start`;function a(){let t=r[i];e.innerHTML=``;let o=document.createElement(`div`);o.style.cssText=`padding:var(--space-md);max-width:500px;margin:0 auto;text-align:center;user-select:none;touch-action:none;background:#fdfcf0;border-radius:24px;border:4px solid #f1c40f;min-height:65vh;overflow:hidden;position:relative;display:flex;flex-direction:column;justify-content:space-between;`,o.innerHTML=`
        <div style="font-size:2rem;color:#d35400;margin-bottom:10px;">💬 Gesprächs-Profi</div>
        
        <!-- NPC Area -->
        <div style="flex-grow:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;">
          <div style="font-size:10rem;position:relative;">
            ${t.npc}
            <div style="position:absolute;top:-20px;right:-20px;font-size:3rem;background:white;border-radius:50%;padding:10px;box-shadow:0 4px 10px rgba(0,0,0,0.1);">${t.emotion}</div>
          </div>
          <div style="background:white;padding:20px;border-radius:20px;margin-top:30px;box-shadow:0 4px 15px rgba(0,0,0,0.05);border:2px solid #f1c40f;position:relative;min-width:80%;max-width:90%;">
             <div style="position:absolute;top:-10px;left:50%;transform:translateX(-50%);width:20px;height:20px;background:white;border-left:2px solid #f1c40f;border-top:2px solid #f1c40f;transform:rotate(45deg);"></div>
             <p style="font-size:1.2rem;font-weight:bold;color:#2c3e50;">${t.text}</p>
          </div>
        </div>

        <!-- Choice Area -->
        <div style="padding:20px;display:grid;grid-template-columns:1fr;gap:10px;">
           ${t.isEnd?`
             <button id="dd-finish" class="btn btn-primary" style="padding:20px;font-size:1.3rem;">Dialog beenden -></button>
           `:t.choices.map((e,t)=>`
             <button class="choice-btn" data-next="${e.next}" style="padding:15px;background:white;border:2px solid #f1c40f;border-radius:15px;font-weight:bold;color:#2c3e50;cursor:pointer;font-size:1.1rem;transition:all 0.2s;">
               ${e.text}
             </button>
           `).join(``)}
        </div>
      `,o.querySelectorAll(`.choice-btn`).forEach(e=>{e.onclick=()=>{i=e.dataset.next,a()}}),o.querySelector(`#dd-finish`)?.addEventListener(`click`,()=>{n({correct:t.correct,score:t.correct?100:50})}),e.appendChild(o)}a()}},"mystery-box":{id:`mystery-box`,name_de:`Mechanische Rätsel-Box`,topics:[`lesen`,`wortschatz`,`konzentration`],setup(e,t,n){let r=0,i=0,a=0;function o(){e.innerHTML=``;let t=document.createElement(`div`);if(t.style.cssText=`padding:var(--space-md);max-width:500px;margin:0 auto;text-align:center;user-select:none;touch-action:none;background:#2c3e50;border-radius:32px;color:white;min-height:70vh;overflow:hidden;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 20px 50px rgba(0,0,0,0.4);border:8px solid #34495e;`,r===0){t.innerHTML=`
          <div style="font-size:2rem;color:#f1c40f;margin-bottom:20px;">🔒 Ebene 1: Das Artikel-Rad</div>
          <p style="color:#bdc3c7;margin-bottom:40px;">Stelle das Rad auf den richtigen Artikel für <b>"Sonne"</b>!</p>
          
          <div id="mb-dial" style="width:200px;height:200px;background:conic-gradient(#f1c40f, #f39c12, #f1c40f);border-radius:50%;border:10px solid #2c3e50;box-shadow:0 0 20px #f1c40f;display:flex;align-items:center;justify-content:center;position:relative;transition:transform 0.5s;cursor:pointer;">
             ${[`der`,`das`,`die`,`...`].map((e,t)=>`
                <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%) rotate(${t*90}deg);transform-origin:50% 90px;font-weight:bold;font-size:1.5rem;color:#2c3e50;">${e}</div>
             `).join(``)}
             <div style="width:10px;height:40px;background:#2c3e50;border-radius:5px;position:absolute;top:0;"></div>
          </div>
          <button id="mb-next" class="btn btn-primary" style="margin-top:50px;width:100%;height:60px;">Rad einrasten ⚙️</button>
        `;let e=t.querySelector(`#mb-dial`);e.onclick=()=>{i=(i+1)%4,e.style.transform=`rotate(${i*-90}deg)`},t.querySelector(`#mb-next`).onclick=()=>{i===2?(r++,o()):t.style.animation=`shake 0.5s`}}else if(r===1){t.innerHTML=`
          <div style="font-size:2rem;color:#3498db;margin-bottom:20px;">🔒 Ebene 2: Der Wort-Schieber</div>
          <p style="color:#bdc3c7;margin-bottom:40px;">Schiebe den Hebel auf das <b>Verb</b>!</p>
          
          <div style="width:280px;height:60px;background:#34495e;border-radius:30px;position:relative;padding:5px;display:flex;justify-content:space-between;align-items:center;">
             <span style="margin-left:20px;font-weight:bold;">haus</span>
             <span style="margin-right:20px;font-weight:bold;">laufen</span>
             <div id="mb-slider" style="width:50px;height:50px;background:#3498db;border-radius:50%;position:absolute;left:5px;cursor:grab;box-shadow:0 0 15px #3498db;"></div>
          </div>
          <button id="mb-next" class="btn btn-primary" style="margin-top:70px;width:100%;height:60px;">Schieber fixieren 🔧</button>
        `;let e=t.querySelector(`#mb-slider`),n=!1;e.onpointerdown=()=>n=!0,window.onpointermove=t=>{if(!n)return;let r=e.parentElement.getBoundingClientRect(),i=t.clientX-r.left-25;i=Math.max(5,Math.min(i,225)),e.style.left=`${i}px`,a=i},window.onpointerup=()=>n=!1,t.querySelector(`#mb-next`).onclick=()=>{a>150?(r++,o()):t.style.animation=`shake 0.5s`}}else t.innerHTML=`
          <div style="font-size:3rem;margin-bottom:20px;">✨ BOX GEKNACKT! ✨</div>
          <div style="font-size:8rem;">🎁</div>
          <p style="font-size:1.5rem;color:#f1c40f;margin-top:20px;font-weight:bold;">Du hast alle Mechanismen gelöst!</p>
          <button id="mb-finish" class="btn btn-primary" style="margin-top:50px;width:100%;height:60px;font-size:1.3rem;">Belohnung nehmen! 🏆</button>
        `,t.querySelector(`#mb-finish`).onclick=()=>n({correct:!0,score:100});e.appendChild(t)}o()}},"sentence-stacker":{id:`sentence-stacker`,name_de:`Pappen-Stapler`,topics:[`satzbau`],setup(e,t,n){let{words:r,correct:i}=t.content,a=r||i||[];if(a.length===0){n({correct:!1,score:0});return}let o=[...a].sort(()=>Math.random()-.5);e.innerHTML=`
      <div class="stapler-container">
        <div class="stack-target" style="opacity: 0.5;">Baue den Satz von unten nach oben!</div>
        <div class="word-pool" style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; padding:20px; z-index:10;"></div>
        <div class="stapler-base" style="width: 300px; height: 30px; background: #8b6b4a; border-radius: 15px; margin-top: auto; box-shadow: 0 10px 20px rgba(0,0,0,0.2);"></div>
      </div>
    `;let s=e.querySelector(`.word-pool`),c=e.querySelector(`.stapler-container`),l=[];if(o.forEach(e=>{let t=K.createCardboardElement(`div`,`staple-box`,e);t.dataset.word=e,t.style.position=`relative`,t.style.transform=`rotate(${Math.random()*8-4}deg)`,s.appendChild(t),l.push(t),K.makeDraggable(t,{onStart:e=>{e.style.transform=`scale(1.1) rotate(0deg)`,e.style.zIndex=`100`,c.querySelector(`.stack-target`).style.opacity=`0.8`},onDrop:e=>{e.style.transform=`rotate(${Math.random()*4-2}deg)`,this.checkStack(l,a,n)}})}),!document.getElementById(`cardboard-games-css`)){let e=document.createElement(`link`);e.id=`cardboard-games-css`,e.rel=`stylesheet`,e.href=`css/cardboard-games.css`,document.head.appendChild(e)}},checkStack(e,t,n){let r=[...e].filter(e=>e.parentElement.classList.contains(`stapler-container`)).sort((e,t)=>t.offsetTop-e.offsetTop);if(r.length<t.length)return;let i=r.map(e=>e.dataset.word),a=r.every(e=>{let t=e.offsetLeft+e.offsetWidth/2;return Math.abs(t-350)<100}),o=JSON.stringify(i)===JSON.stringify(t);a&&o?(r.forEach((e,t)=>{e.style.backgroundColor=`#a3de83`,e.style.transition=`all 0.5s ease`,e.style.transform=`rotate(${t%2==0?1:-1}deg)`}),setTimeout(()=>{n({correct:!0,score:100})},1e3)):r.length===t.length&&r.forEach(e=>K.wobble(e))}},"syllable-fishing":{id:`syllable-fishing`,name_de:`Silben-Angeln`,topics:[`silben`],setup(e,t,n){let{word:r,syllables:i}=t.content,a=i||[];if(a.length===0){n({correct:!1,score:0});return}let o=0;e.innerHTML=`
      <div class="fishing-container" style="position:relative; width:100%; height:420px; background: #e0f4ff; overflow:hidden; border-radius:12px; border: 4px solid var(--color-cardboard);">
        <!-- Sun (Paper circle) -->
        <div style="position:absolute; top:30px; right:40px; width:60px; height:60px; background:#ffd700; border-radius:50%; box-shadow: 0 0 20px rgba(255,215,0,0.4);"></div>

        <div class="water-layers" style="position:absolute; bottom:0; width:100%; height:140px; background:#4fc3f7; opacity:0.6; z-index:2; border-top: 2px dashed rgba(255,255,255,0.5);"></div>
        <div class="water-back" style="position:absolute; bottom:20px; width:100%; height:140px; background:#29b6f6; opacity:0.4; z-index:1;"></div>
        
        <!-- The Fisherman (Cardboard Penguin) -->
        <div class="fisherman" style="position:absolute; left:30px; bottom:120px; width:100px; height:100px; z-index:5;">
            <div class="char-sprite" style="background-image: url('assets/img/player-avatars.png'); background-size: 200% 200%; background-position: 100% 100%; width:100%; height:100%; filter: drop-shadow(2px 4px 0 rgba(0,0,0,0.1));"></div>
            <div class="fishing-rod" style="position:absolute; right:-20px; top:20px; width:120px; height:6px; background:#8b6b4a; transform:rotate(-35deg); transform-origin:left; border-radius:3px;"></div>
        </div>

        <div class="boats-area" style="position:absolute; inset:0; z-index:3;"></div>
        
        <div class="cardboard-item" style="position:absolute; top:20px; left:50%; transform:translateX(-50%); cursor:default; background-color: #fdf5e6; z-index:10; padding: 10px 25px;">
            <div style="font-size: 0.8rem; font-family: var(--font-handwritten); opacity: 0.6;">Suche Silbe:</div>
            <span id="current-target" style="color:#e91e63; font-weight:bold; font-size: 1.5rem;">${a[0]}</span>
        </div>
      </div>
    `;let s=e.querySelector(`.boats-area`),c=e.querySelector(`#current-target`),l=(e,t)=>{let r=K.createCardboardElement(`div`,`paper-boat`,e);r.style.position=`absolute`;let i=850+Math.random()*300,l=220+Math.random()*100;r.style.left=`${i}px`,r.style.top=`${l}px`,r.dataset.syllable=e,s.appendChild(r);let u=i,d=1.5+Math.random()*1.5,f=.02+Math.random()*.02,p=5+Math.random()*5,m=l,h=()=>{r.parentNode&&(u-=d,u<-150&&(u=850),r.style.left=`${u}px`,r.style.top=`${m+Math.sin(u*f)*p}px`,r.style.transform=`rotate(${Math.cos(u*f)*5}deg)`,requestAnimationFrame(h))};requestAnimationFrame(h),r.addEventListener(`click`,()=>{e===a[o]?(r.style.transition=`all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,r.style.top=`120px`,r.style.left=`60px`,r.style.transform=`scale(0.4) rotate(0deg)`,r.style.opacity=`0`,o++,o<a.length?(c.textContent=a[o],K.wobble(c.parentElement)):(c.textContent=`GESCHAFFT!`,setTimeout(()=>n({correct:!0,score:100}),1e3)),setTimeout(()=>r.remove(),600)):K.wobble(r)})};if(a.forEach(e=>l(e,!0)),[`la`,`mu`,`ti`,`po`,`ne`,`ka`,`ri`].sort(()=>Math.random()-.5).slice(0,4).forEach(e=>l(e,!1)),!document.getElementById(`cardboard-games-css`)){let e=document.createElement(`link`);e.id=`cardboard-games-css`,e.rel=`stylesheet`,e.href=`css/cardboard-games.css`,document.head.appendChild(e)}}},"scrap-hunt":{id:`scrap-hunt`,name_de:`Schnipsel-Suche`,topics:[`wortschatz`,`lesen`],setup(e,t,n){let r=[`APFEL`,`STERN`,`GLÜCK`],i=new Set;e.innerHTML=`
      <div class="scrap-hunt-container" style="position:relative; width:100%; height:450px; background:#fff; border-radius:12px; overflow:hidden; border:1px solid #ddd; display:flex; align-items:center; justify-content:center;">
        <div class="scrap-heap" style="position:absolute; inset:0;"></div>
        
        <div class="search-panel" style="position:absolute; top:10px; right:10px; width:120px; background:rgba(255,255,255,0.9); padding:10px; border-radius:8px; border:2px solid #eee; z-index:100; font-family:var(--font-handwritten);">
            <div style="font-weight:bold; margin-bottom:5px; font-size:0.9rem;">Gesucht:</div>
            ${r.map(e=>`<div id="find-${e}" style="opacity:0.5; font-size:0.8rem;">⬜ ${e}</div>`).join(``)}
        </div>

        <div class="scrap-instructions" style="position:absolute; bottom:10px; left:50%; transform:translateX(-50%); font-size:0.9rem; color:#888; z-index:100;">
            Schieb die Pappen beiseite!
        </div>
      </div>
    `;let a=e.querySelector(`.scrap-heap`);r.forEach(t=>{let o=K.createCardboardElement(`div`,`scrap-target`,t);o.style.left=`${50+Math.random()*300}px`,o.style.top=`${100+Math.random()*250}px`,o.style.backgroundColor=`#ffd700`,o.style.zIndex=`5`,a.appendChild(o),o.addEventListener(`click`,()=>{i.has(t)||(i.add(t),o.style.transform=`scale(1.5)`,o.style.opacity=`0.5`,e.querySelector(`#find-${t}`).style.opacity=`1`,e.querySelector(`#find-${t}`).innerHTML=`✅ ${t}`,i.size===r.length&&setTimeout(()=>n({correct:!0,score:100}),1e3))})});let o=[`#f5a0a0`,`#f5d5e0`,`#e8d5c0`,`#b0c4de`,`#d0d0d0`,`#e8d8c0`];for(let e=0;e<25;e++){let t=e%3==0?`paper-star`:e%3==1?`paper-heart`:``,n=K.createCardboardElement(`div`,`scrap-piece ${t}`);n.style.left=`${Math.random()*350}px`,n.style.top=`${Math.random()*300}px`,n.style.backgroundColor=o[Math.random()*o.length|0],n.style.zIndex=`${10+e}`,n.style.transform=`rotate(${Math.random()*360}deg)`,a.appendChild(n),K.makeDraggable(n,{onStart:e=>{e.style.zIndex=`1000`},onDrop:e=>{}})}if(!document.getElementById(`cardboard-games-css`)){let e=document.createElement(`link`);e.id=`cardboard-games-css`,e.rel=`stylesheet`,e.href=`css/cardboard-games.css`,document.head.appendChild(e)}}}};function Oe(e){return De[e]||null}var q={nomen:{easy:[`Hund`,`Katze`,`Baum`,`Haus`,`Ball`,`Blume`,`Sonne`,`Mond`,`Maus`,`Fisch`,`Auto`,`Buch`,`Tisch`,`Stuhl`,`Tür`,`Bett`,`Kind`,`Mama`,`Papa`,`Schule`,`Apfel`,`Birne`,`Milch`,`Brot`],medium:[`Freundschaft`,`Geburtstag`,`Spielplatz`,`Bücherei`,`Schmetterling`,`Feuerwehr`,`Krankenhaus`,`Polizist`,`Lehrerin`,`Turnhalle`,`Bleistift`,`Radiergummi`,`Frühstück`,`Nachmittag`,`Abenteuer`],hard:[`Entscheidung`,`Verantwortung`,`Gemeinschaft`,`Erfahrung`,`Überraschung`,`Vorstellung`,`Gerechtigkeit`,`Umgebung`]},verben:{easy:[`laufen`,`spielen`,`essen`,`trinken`,`schlafen`,`lesen`,`malen`,`singen`,`tanzen`,`springen`,`schwimmen`,`fliegen`,`lachen`,`weinen`,`rufen`,`geben`,`nehmen`,`sehen`],medium:[`verstehen`,`erzählen`,`beobachten`,`sammeln`,`entdecken`,`beschreiben`,`vergleichen`,`erklären`,`untersuchen`,`vorlesen`,`aufräumen`,`vorbereiten`,`aufpassen`,`mitbringen`,`anfangen`],hard:[`berücksichtigen`,`veranschaulichen`,`zusammenfassen`,`unterscheiden`,`verwirklichen`,`hinterfragen`]},adjektive:{easy:[`groß`,`klein`,`schnell`,`langsam`,`schön`,`hässlich`,`laut`,`leise`,`warm`,`kalt`,`neu`,`alt`,`gut`,`böse`,`hell`,`dunkel`,`süß`,`sauer`,`weich`,`hart`],medium:[`freundlich`,`lustig`,`traurig`,`mutig`,`ängstlich`,`neugierig`,`fleißig`,`gemütlich`,`spannend`,`langweilig`,`wunderbar`,`gefährlich`,`wichtig`,`möglich`,`fröhlich`],hard:[`außergewöhnlich`,`verantwortungsvoll`,`unglaublich`,`selbstständig`,`abenteuerlich`,`geheimnisvoll`]},mixedSets:{easy:[{words:[`Hund`,`laufen`,`groß`,`Katze`,`spielen`,`klein`],nomen:[`Hund`,`Katze`],verben:[`laufen`,`spielen`],adjektive:[`groß`,`klein`]},{words:[`Baum`,`singen`,`schön`,`Blume`,`tanzen`,`laut`],nomen:[`Baum`,`Blume`],verben:[`singen`,`tanzen`],adjektive:[`schön`,`laut`]},{words:[`Ball`,`springen`,`schnell`,`Sonne`,`lachen`,`warm`],nomen:[`Ball`,`Sonne`],verben:[`springen`,`lachen`],adjektive:[`schnell`,`warm`]},{words:[`Haus`,`essen`,`neu`,`Fisch`,`schwimmen`,`kalt`],nomen:[`Haus`,`Fisch`],verben:[`essen`,`schwimmen`],adjektive:[`neu`,`kalt`]},{words:[`Schule`,`malen`,`hell`,`Apfel`,`lesen`,`süß`],nomen:[`Schule`,`Apfel`],verben:[`malen`,`lesen`],adjektive:[`hell`,`süß`]}],medium:[{words:[`Geburtstag`,`entdecken`,`neugierig`,`Spielplatz`,`erzählen`,`spannend`],nomen:[`Geburtstag`,`Spielplatz`],verben:[`entdecken`,`erzählen`],adjektive:[`neugierig`,`spannend`]},{words:[`Bleistift`,`beschreiben`,`wichtig`,`Abenteuer`,`sammeln`,`mutig`],nomen:[`Bleistift`,`Abenteuer`],verben:[`beschreiben`,`sammeln`],adjektive:[`wichtig`,`mutig`]}]}},J={der:`Hund.Baum.Ball.Tisch.Stuhl.Apfel.Mond.Stern.Fisch.Berg.Fluss.Weg.Garten.Kuchen.Vogel.Schuh.Hut.Ring.Stein.Wind.Regen.Schnee.Morgen.Abend.Sommer.Winter.Frühling.Herbst.Bleistift.Geburtstag.Spielplatz.Schulhof.Schmetterling.Regenbogen.Buchstabe.Computer.Fernseher.Kühlschrank`.split(`.`),die:`Katze.Blume.Sonne.Tür.Maus.Schule.Birne.Milch.Nase.Hand.Uhr.Lampe.Brücke.Wolke.Straße.Wiese.Küche.Tasche.Flasche.Decke.Freundschaft.Bücherei.Feuerwehr.Lehrerin.Turnhalle.Entscheidung.Überraschung.Zeitung.Schokolade.Kartoffel.Tomate.Banane.Erdbeere.Familie.Geschichte.Aufgabe`.split(`.`),das:`Haus.Auto.Buch.Bett.Kind.Brot.Tier.Pferd.Schwein.Huhn.Ei.Glas.Bild.Lied.Spiel.Kleid.Feld.Boot.Rad.Ohr.Auge.Haar.Herz.Wasser.Feuer.Abenteuer.Frühstück.Geschenk.Geheimnis.Ergebnis.Flugzeug.Fahrrad.Fenster.Wetter.Mädchen`.split(`.`),quizSets:{easy:[{word:`Hund`,correct:`der`},{word:`Katze`,correct:`die`},{word:`Haus`,correct:`das`},{word:`Sonne`,correct:`die`},{word:`Ball`,correct:`der`},{word:`Buch`,correct:`das`},{word:`Blume`,correct:`die`},{word:`Baum`,correct:`der`},{word:`Auto`,correct:`das`},{word:`Tisch`,correct:`der`},{word:`Maus`,correct:`die`},{word:`Brot`,correct:`das`},{word:`Stuhl`,correct:`der`},{word:`Tür`,correct:`die`},{word:`Bett`,correct:`das`}],medium:[{word:`Schmetterling`,correct:`der`},{word:`Bücherei`,correct:`die`},{word:`Abenteuer`,correct:`das`},{word:`Geburtstag`,correct:`der`},{word:`Feuerwehr`,correct:`die`},{word:`Frühstück`,correct:`das`},{word:`Regenbogen`,correct:`der`},{word:`Schokolade`,correct:`die`},{word:`Fahrrad`,correct:`das`},{word:`Spielplatz`,correct:`der`},{word:`Erdbeere`,correct:`die`},{word:`Geschenk`,correct:`das`}],hard:[{word:`Mädchen`,correct:`das`},{word:`Geheimnis`,correct:`das`},{word:`Freundschaft`,correct:`die`},{word:`Entscheidung`,correct:`die`},{word:`Ergebnis`,correct:`das`},{word:`Buchstabe`,correct:`der`},{word:`Fernseher`,correct:`der`},{word:`Kartoffel`,correct:`die`}]},rules:[{rule:`Wörter mit -ung sind immer DIE`,examples:[`Überraschung`,`Entscheidung`,`Übung`]},{rule:`Wörter mit -schaft sind immer DIE`,examples:[`Freundschaft`,`Gemeinschaft`]},{rule:`Wörter mit -chen sind immer DAS`,examples:[`Mädchen`,`Häuschen`,`Kätzchen`]},{rule:`Wörter mit -nis sind immer DAS`,examples:[`Geheimnis`,`Ergebnis`]},{rule:`Wörter mit -er sind oft DER`,examples:[`Computer`,`Fernseher`,`Lehrer`]},{rule:`Tage und Monate sind immer DER`,examples:[`Montag`,`Januar`,`Sommer`]}]},Y={sentenceOrder:{easy:[{words:[`Der`,`Hund`,`spielt`,`im`,`Garten`],correct:`Der Hund spielt im Garten.`},{words:[`Die`,`Katze`,`trinkt`,`Milch`],correct:`Die Katze trinkt Milch.`},{words:[`Das`,`Kind`,`liest`,`ein`,`Buch`],correct:`Das Kind liest ein Buch.`},{words:[`Mama`,`kocht`,`das`,`Essen`],correct:`Mama kocht das Essen.`},{words:[`Ich`,`gehe`,`in`,`die`,`Schule`],correct:`Ich gehe in die Schule.`},{words:[`Die`,`Sonne`,`scheint`,`heute`],correct:`Die Sonne scheint heute.`},{words:[`Wir`,`spielen`,`gerne`,`Fußball`],correct:`Wir spielen gerne Fußball.`},{words:[`Der`,`Vogel`,`singt`,`ein`,`Lied`],correct:`Der Vogel singt ein Lied.`}],medium:[{words:[`Am`,`Morgen`,`frühstückt`,`die`,`Familie`,`zusammen`],correct:`Am Morgen frühstückt die Familie zusammen.`},{words:[`Die`,`Kinder`,`spielen`,`nach`,`der`,`Schule`,`draußen`],correct:`Die Kinder spielen nach der Schule draußen.`},{words:[`Der`,`Lehrer`,`erklärt`,`die`,`Aufgabe`,`an`,`der`,`Tafel`],correct:`Der Lehrer erklärt die Aufgabe an der Tafel.`},{words:[`Im`,`Winter`,`bauen`,`wir`,`einen`,`Schneemann`],correct:`Im Winter bauen wir einen Schneemann.`},{words:[`Mein`,`Bruder`,`hat`,`heute`,`Geburtstag`],correct:`Mein Bruder hat heute Geburtstag.`}],hard:[{words:[`Gestern`,`hat`,`die`,`Lehrerin`,`uns`,`eine`,`spannende`,`Geschichte`,`erzählt`],correct:`Gestern hat die Lehrerin uns eine spannende Geschichte erzählt.`},{words:[`Obwohl`,`es`,`regnet`,`gehen`,`die`,`Kinder`,`gerne`,`nach`,`draußen`],correct:`Obwohl es regnet, gehen die Kinder gerne nach draußen.`}]},fillBlanks:{easy:[{sentence:`Der Hund ___ im Park.`,blank:`spielt`,options:[`spielt`,`fliegt`,`schwimmt`,`kocht`]},{sentence:`Die Katze ___ auf dem Sofa.`,blank:`schläft`,options:[`schläft`,`fährt`,`baut`,`schreibt`]},{sentence:`Das Kind ___ ein Eis.`,blank:`isst`,options:[`isst`,`liest`,`pflanzt`,`näht`]},{sentence:`Die Sonne ___ am Himmel.`,blank:`scheint`,options:[`scheint`,`regnet`,`weht`,`fällt`]},{sentence:`Mama ___ einen Kuchen.`,blank:`backt`,options:[`backt`,`pflückt`,`malt`,`singt`]},{sentence:`Wir ___ gerne Fußball.`,blank:`spielen`,options:[`spielen`,`kochen`,`lesen`,`schlafen`]}],medium:[{sentence:`Am Wochenende ___ wir oft in den Park.`,blank:`gehen`,options:[`gehen`,`kochen`,`schreiben`,`malen`]},{sentence:`Die Lehrerin ___ die Aufgabe an die Tafel.`,blank:`schreibt`,options:[`schreibt`,`kocht`,`pflanzt`,`singt`]},{sentence:`Der Regenbogen hat viele ___.`,blank:`Farben`,options:[`Farben`,`Autos`,`Bücher`,`Schuhe`]},{sentence:`Im Herbst fallen die ___ von den Bäumen.`,blank:`Blätter`,options:[`Blätter`,`Steine`,`Wolken`,`Sterne`]},{sentence:`Nach dem Essen ___ ich mir die Hände.`,blank:`wasche`,options:[`wasche`,`male`,`lese`,`koche`]}]},satzarten:{easy:[{sentence:`Der Hund spielt im Garten.`,type:`Aussagesatz`,punctuation:`.`},{sentence:`Spielst du gerne Fußball?`,type:`Fragesatz`,punctuation:`?`},{sentence:`Komm schnell her!`,type:`Ausrufesatz`,punctuation:`!`},{sentence:`Die Sonne scheint heute.`,type:`Aussagesatz`,punctuation:`.`},{sentence:`Wie heißt du?`,type:`Fragesatz`,punctuation:`?`},{sentence:`Pass auf!`,type:`Ausrufesatz`,punctuation:`!`},{sentence:`Ich lese gerne Bücher.`,type:`Aussagesatz`,punctuation:`.`},{sentence:`Wo wohnst du?`,type:`Fragesatz`,punctuation:`?`}]}},X={spellingPairs:{easy:[{correct:`Schule`,wrong:`Schuhle`,rule:`Schule hat kein h`},{correct:`Freund`,wrong:`Froind`,rule:`Freund wird mit eu geschrieben`},{correct:`spielen`,wrong:`schpielen`,rule:`spielen beginnt mit sp, nicht schp`},{correct:`Straße`,wrong:`Strase`,rule:`Straße wird mit ß geschrieben`},{correct:`Fahrrad`,wrong:`Fahrad`,rule:`Fahrrad hat zwei r`},{correct:`Vater`,wrong:`Fater`,rule:`Vater beginnt mit V`},{correct:`Vogel`,wrong:`Fogel`,rule:`Vogel beginnt mit V`},{correct:`wieder`,wrong:`wider`,rule:`wieder (nochmal) wird mit ie geschrieben`}],medium:[{correct:`Geburtstag`,wrong:`Gebursttag`,rule:`Geburts-tag`},{correct:`Schmetterling`,wrong:`Schmeterling`,rule:`Schmetterling hat tt`},{correct:`empfehlen`,wrong:`enfehlen`,rule:`empfehlen hat ein pf`},{correct:`Entschuldigung`,wrong:`Entchuldigung`,rule:`Ent-schul-di-gung`},{correct:`Bibliothek`,wrong:`Bibleothek`,rule:`Bib-li-o-thek`},{correct:`Rhythmus`,wrong:`Rythmus`,rule:`Rhythmus hat ein h nach R`}]},grossKlein:{easy:[{word:`hund`,correct:`Hund`,isNoun:!0,explanation:`Nomen werden großgeschrieben`},{word:`Spielen`,correct:`spielen`,isNoun:!1,explanation:`Verben werden kleingeschrieben`},{word:`schule`,correct:`Schule`,isNoun:!0,explanation:`Nomen werden großgeschrieben`},{word:`Schnell`,correct:`schnell`,isNoun:!1,explanation:`Adjektive werden kleingeschrieben`},{word:`baum`,correct:`Baum`,isNoun:!0,explanation:`Nomen werden großgeschrieben`},{word:`Lesen`,correct:`lesen`,isNoun:!1,explanation:`Verben werden kleingeschrieben`},{word:`blume`,correct:`Blume`,isNoun:!0,explanation:`Nomen werden großgeschrieben`},{word:`Groß`,correct:`groß`,isNoun:!1,explanation:`Adjektive werden kleingeschrieben`},{word:`auto`,correct:`Auto`,isNoun:!0,explanation:`Nomen werden großgeschrieben`},{word:`Tanzen`,correct:`tanzen`,isNoun:!1,explanation:`Verben werden kleingeschrieben`}],medium:[{word:`das lesen`,correct:`das Lesen`,isNoun:!0,explanation:`Wenn ein Artikel davor steht, wird es zum Nomen`},{word:`Heute`,correct:`heute`,isNoun:!1,explanation:`Zeitwörter werden kleingeschrieben`},{word:`freundschaft`,correct:`Freundschaft`,isNoun:!0,explanation:`Wörter mit -schaft sind Nomen`}]},reime:{pairs:[[`Haus`,`Maus`],[`Hund`,`bunt`],[`Katze`,`Tatze`],[`Baum`,`Traum`],[`Nacht`,`lacht`],[`Licht`,`Gedicht`],[`Schein`,`Stein`],[`Tor`,`vor`],[`Sonne`,`Wonne`],[`Regen`,`Segen`],[`Schnee`,`See`],[`Stern`,`gern`],[`Wind`,`Kind`],[`Meer`,`schwer`],[`Tag`,`mag`],[`Buch`,`Tuch`],[`Rose`,`Hose`],[`Fisch`,`Tisch`],[`Hand`,`Sand`],[`Zahl`,`Mal`]],decoys:[`Apfel`,`Garten`,`Wolke`,`Fenster`,`Brücke`,`Lampe`,`Schrank`,`Teller`,`Stuhl`,`Kerze`,`Blatt`,`Fluss`,`Turm`,`Wiese`,`Berg`,`Wald`,`Stadt`,`Dorf`]},nounTexts:{easy:[{text:`Der Hund spielt mit dem Ball im Garten. Die Sonne scheint und die Vögel singen.`,nouns:[`Hund`,`Ball`,`Garten`,`Sonne`,`Vögel`]},{text:`Das Kind geht in die Schule. Es hat einen Apfel und ein Buch in der Tasche.`,nouns:[`Kind`,`Schule`,`Apfel`,`Buch`,`Tasche`]},{text:`Die Katze sitzt auf dem Stuhl. Sie trinkt Milch aus einer Schüssel.`,nouns:[`Katze`,`Stuhl`,`Milch`,`Schüssel`]}],medium:[{text:`Am Morgen frühstückt die Familie in der Küche. Der Vater liest die Zeitung und die Mutter trinkt Kaffee. Die Kinder essen Brot mit Marmelade.`,nouns:[`Morgen`,`Familie`,`Küche`,`Vater`,`Zeitung`,`Mutter`,`Kaffee`,`Kinder`,`Brot`,`Marmelade`]}]}},Z={readingTexts:{easy:[{title:`Im Park`,text:`Lisa geht mit ihrem Hund Bello in den Park. Bello spielt gerne mit dem Ball. Lisa wirft den Ball und Bello bringt ihn zurück. Danach essen sie ein Eis.`,questions:[{question:`Wie heißt der Hund?`,correct:`Bello`,options:[`Bello`,`Rex`,`Fido`,`Waldi`]},{question:`Womit spielt Bello?`,correct:`Mit dem Ball`,options:[`Mit dem Ball`,`Mit einem Stock`,`Mit einer Katze`,`Mit einem Knochen`]},{question:`Was essen sie danach?`,correct:`Ein Eis`,options:[`Ein Eis`,`Einen Kuchen`,`Pizza`,`Brot`]}]},{title:`Die neue Schule`,text:`Tom ist neu in der Schule. Er ist aufgeregt. Seine Lehrerin heißt Frau Müller. Sie ist nett. Tom findet schnell einen Freund. Er heißt Max.`,questions:[{question:`Wer ist neu in der Schule?`,correct:`Tom`,options:[`Tom`,`Max`,`Frau Müller`,`Lisa`]},{question:`Wie heißt die Lehrerin?`,correct:`Frau Müller`,options:[`Frau Müller`,`Frau Schmidt`,`Frau Fischer`,`Frau Weber`]},{question:`Wie heißt Toms neuer Freund?`,correct:`Max`,options:[`Max`,`Paul`,`Bello`,`Tim`]}]}],medium:[{title:`Der Ausflug`,text:`Die Klasse 2b macht einen Ausflug zum Bauernhof. Die Kinder sehen Kühe, Schweine und Hühner. Der Bauer zeigt ihnen, wie man Käse macht. Am besten gefällt Emma das kleine Fohlen. Es ist erst zwei Wochen alt. Zum Schluss bekommen alle ein Glas frische Milch.`,questions:[{question:`Wohin macht die Klasse einen Ausflug?`,correct:`Zum Bauernhof`,options:[`Zum Bauernhof`,`In den Zoo`,`Ins Museum`,`In den Wald`]},{question:`Was zeigt der Bauer den Kindern?`,correct:`Wie man Käse macht`,options:[`Wie man Käse macht`,`Wie man reitet`,`Wie man pflügt`,`Wie man backt`]},{question:`Was gefällt Emma am besten?`,correct:`Das Fohlen`,options:[`Das Fohlen`,`Die Kühe`,`Die Schweine`,`Die Hühner`]},{question:`Was bekommen die Kinder zum Schluss?`,correct:`Ein Glas Milch`,options:[`Ein Glas Milch`,`Ein Eis`,`Einen Apfel`,`Ein Käsebrot`]}]}]}},ke={words:{easy:[{word:`Hund`,syllables:[`Hund`]},{word:`Baum`,syllables:[`Baum`]},{word:`Katze`,syllables:[`Kat`,`ze`]},{word:`Apfel`,syllables:[`Ap`,`fel`]},{word:`Ball`,syllables:[`Ball`]}],medium:[{word:`Schokolade`,syllables:[`Scho`,`ko`,`la`,`de`]},{word:`Banane`,syllables:[`Ba`,`na`,`ne`]},{word:`Computer`,syllables:[`Com`,`pu`,`ter`]},{word:`Krokodil`,syllables:[`Kro`,`ko`,`dil`]}],hard:[{word:`Lokomotive`,syllables:[`Lo`,`ko`,`mo`,`ti`,`ve`]},{word:`Hubschrauber`,syllables:[`Hub`,`schrau`,`ber`]}]}},Ae={praesens:[`ich gehe`,`du lachst`,`er spielt`,`wir laufen`,`ihr seht`,`sie trinken`,`ich bin`,`du hast`,`es gibt`,`wir essen`,`ihr springt`,`sie schreiben`],praeteritum:[`ich ging`,`du lachtest`,`er spielte`,`wir liefen`,`ihr saht`,`sie tranken`,`ich war`,`du hattest`,`es gab`,`wir aßen`,`ihr sprangt`,`sie schrieben`],perfekt:[`ich bin gegangen`,`du hast gelacht`,`er hat gespielt`,`wir sind gelaufen`,`ihr habt gesehen`,`sie haben getrunken`,`ich bin gewesen`,`du hast gehabt`],futur:[`ich werde gehen`,`du wirst lachen`,`er wird spielen`,`wir werden laufen`,`ihr werdet sehen`,`sie werden trinken`,`ich werde sein`,`du wirst haben`]},je={aussagesaetze:[{text:`Heute scheint die Sonne`,missing:`.`},{text:`Ich spiele gerne im Garten`,missing:`.`},{text:`Der Hund bellt laut`,missing:`.`},{text:`Wir essen Eis`,missing:`.`},{text:`Meine Oma kommt zu Besuch`,missing:`.`}],fragesaetze:[{text:`Wie alt bist du`,missing:`?`},{text:`Wo ist mein Buch`,missing:`?`},{text:`Wann gibt es Abendessen`,missing:`?`},{text:`Kannst du mir helfen`,missing:`?`},{text:`Hast du die Hausaufgabe gemacht`,missing:`?`}],ausrufesaetze:[{text:`Pass auf`,missing:`!`},{text:`Hilfe`,missing:`!`},{text:`Das ist ja toll`,missing:`!`},{text:`Komm sofort her`,missing:`!`},{text:`Herzlichen Glückwunsch`,missing:`!`}],komma_aufzaehlung:[{text:`Ich kaufe Äpfel[,] Birnen und Bananen.`,missing:`,`},{text:`Im Zoo sehe ich Affen[,] Löwen und Elefanten.`,missing:`,`},{text:`Meine Lieblingsfarben sind Rot[,] Blau und Grün.`,missing:`,`}]},Me=[{part1:`Hund`,part2:`Haus`,result:`Hundehaus`,decoy1:`Katze`,decoy2:`Garten`},{part1:`Apfel`,part2:`Baum`,result:`Apfelbaum`,decoy1:`Saft`,decoy2:`Blatt`},{part1:`Schnee`,part2:`Mann`,result:`Schneemann`,decoy1:`Regen`,decoy2:`Ball`},{part1:`Haus`,part2:`Tür`,result:`Haustür`,decoy1:`Dach`,decoy2:`Zimmer`},{part1:`Bilder`,part2:`Buch`,result:`Bilderbuch`,decoy1:`Malen`,decoy2:`Heft`},{part1:`Wasser`,part2:`Flasche`,result:`Wasserflasche`,decoy1:`Glas`,decoy2:`Saft`},{part1:`Kinder`,part2:`Garten`,result:`Kindergarten`,decoy1:`Schule`,decoy2:`Spiel`},{part1:`Sonnen`,part2:`Blume`,result:`Sonnenblume`,decoy1:`Licht`,decoy2:`Regen`},{part1:`Schuh`,part2:`Karton`,result:`Schuhkarton`,decoy1:`Socke`,decoy2:`Laden`},{part1:`Taschen`,part2:`Lampe`,result:`Taschenlampe`,decoy1:`Tuch`,decoy2:`Messer`}];function Ne(e){return e<=2?`easy`:e<=4?`medium`:`hard`}var Pe={de:{getLanguageId(){return`de`},getLanguageName(){return`Deutsch`},getContent(e,t={}){let n=Ne(t.languageComplexity||2);switch(e){case`nomen`:case`verben`:case`adjektive`:return{type:`wortarten`,words:q[e]?.[n]||q[e]?.easy||[],mixedSets:q.mixedSets?.[n]||q.mixedSets?.easy||[]};case`artikel`:return{type:`artikel`,quizSets:J.quizSets?.[n]||J.quizSets?.easy||[],rules:J.rules};case`satzbau`:return{type:`satzbau`,sentenceOrder:Y.sentenceOrder?.[n]||Y.sentenceOrder?.easy||[]};case`satzarten`:return{type:`satzarten`,sentences:Y.satzarten?.[n]||Y.satzarten?.easy||[]};case`lueckentexte`:return{type:`fillBlanks`,items:Y.fillBlanks?.[n]||Y.fillBlanks?.easy||[]};case`rechtschreibung`:case`fehlerkorrektur`:return{type:`spelling`,pairs:X.spellingPairs?.[n]||X.spellingPairs?.easy||[]};case`gross_klein`:return{type:`grossKlein`,items:X.grossKlein?.[n]||X.grossKlein?.easy||[]};case`reime`:return{type:`reime`,pairs:X.reime.pairs,decoys:X.reime.decoys};case`lesen`:return{type:`lesen`,texts:Z.readingTexts?.[n]||Z.readingTexts?.easy||[]};case`silben`:return{type:`silben`,words:ke.words?.[n]||ke.words?.easy||[]};case`zeitformen`:return{type:`zeitformen`,content:Ae};case`satzzeichen`:return{type:`satzzeichen`,content:je};case`zusammengesetzte_nomen`:return{type:`compound`,items:Me};default:return{type:`wortarten`,words:q.nomen?.[n]||q.nomen?.easy||[],mixedSets:q.mixedSets?.[n]||q.mixedSets?.easy||[]}}},getInstructions(e){return{"word-type-sort":`Sortiere die Wörter in die richtige Kategorie: Nomen, Verben oder Adjektive!`,"article-choice":`Wähle den richtigen Artikel: der, die oder das?`,"sentence-order":`Bringe die Wörter in die richtige Reihenfolge!`,"fill-blanks":`Setze das richtige Wort in die Lücke ein!`,"spelling-detective":`Finde das falsch geschriebene Wort!`,"case-choice":`Wird das Wort groß oder klein geschrieben?`,"noun-hunter":`Finde alle Nomen im Text!`,"rhyme-match":`Finde die Wörter, die sich reimen!`,"syllable-counter":`Wie viele Silben hat das Wort?`,"time-machine":`In welche Zeitform gehört das Verb?`,"punctuation-catcher":`Welches Satzzeichen fehlt hier?`,"compound-builder":`Bilde ein zusammengesetztes Nomen!`,"word-ninja":`Zerschneide die Nomen, aber pass auf die Verben auf!`,"word-meteorites":`Tippe die fallenden Wörter schnell ab!`,"article-cannon":`Feuere den richtigen Artikel auf das Wort!`,"sentence-train":`Bringe die Waggons in die richtige Reihenfolge!`,"lie-detector":`Ist dieses Wort richtig geschrieben? Wahr oder Lüge?`,"teakettle-detective":`Finde das gesuchte Teekesselchen!`,cryptogram:`Entschlüssle den geheimen Code!`,"word-balance":`Finde das genaue Gegenteil!`,"memory-chain":`Merke dir die Reihenfolge der Bilder!`,"abc-bubbles":`Zerplatze die Blasen nach dem Alphabet!`,"syllable-dj":`Drehe die Platten, bis ein Wort entsteht!`,"hidden-object":`Suche das beschriebene Objekt!`,"adjective-painter":`Male das Bild genau nach Anweisung an!`,"difference-detective":`Finde den passenden Fehler im unteren Bild!`,"word-search-swipe":`Streiche die versteckten Wörter ab!`,"rhyme-memory":`Finde die reimenden Kartenpaare!`,"anagram-blast":`Ordne die Buchstaben zum richtigen Wort!`,"gender-sort":`Welcher Artikel gehört zum Wort?`,"plural-match":`Wie lautet der Plural?`,"missing-letter":`Welcher Vokal wurde gestohlen?`,"speed-flash":`Merke dir das aufblitzende Wort!`,"word-chain":`Bilde eine Wortkette!`,"synonym-snap":`Welches Wort bedeutet dasselbe?`,"verb-pulse":`Konjugiere das Verb richtig!`,"preposition-world":`Welche Präposition passt?`,"comma-king":`Setze die Kommas richtig!`,"category-blitz":`Tippe alle Wörter aus der Kategorie!`,"story-builder":`Fülle die Lücken in der Geschichte!`,"emoji-translator":`Was bedeutet diese Emoji-Botschaft?`,"category-sort":`Sortiere die Wörter in die Kategorien!`,"word-clock":`Wie heißt diese Uhrzeit auf Deutsch?`,"hot-cold":`Welches Wort ist näher in der Bedeutung?`,"word-labyrinth":`Navigiere durch das Labyrinth und sammle die Buchstaben!`,"opposite-racer":`Finde das Gegenteil - so schnell wie möglich!`,"number-words":`Verbinde Zahlen mit ihren deutschen Wörtern!`,"sentence-sense":`Macht dieser Satz Sinn?`,"whack-a-noun":`Klopfe die Nomen, ignoriere Verben!`,"definition-match":`Welches Wort passt zur Definition?`,"compound-chain":`Bilde zusammengesetzte Nomen!`,"image-word-match":`Verbinde Bilder mit ihren deutschen Wörtern!`,"bubble-burst":`Platze nur die Adjektiv-Blasen!`,"word-family-tree":`Welche Wörter gehören zur selben Wortfamilie?`,"syllable-stomp":`Wie viele Silben hat das Wort?`,"tense-switcher":`Wandle das Verb in die richtige Zeit um!`,"word-avalanche":`Markiere alle Nomen in der Reihe!`,"question-word-match":`Welches Fragewort passt?`,"color-words":`Tippe auf die Tintenfarbe, nicht auf das Wort!`,"password-crack":`Rate das geheime Wort anhand von Hinweisen!`,"letter-drop":`Fange die richtigen Buchstaben in der richtigen Reihenfolge!`,"capital-detective":`Tippe auf alle Wörter, die groß geschrieben werden!`,"adjective-endings":`Welche Adjektivendung passt?`,"german-idiom":`Was bedeutet diese Redewendung wirklich?`,"blitz-quiz":`Wahr oder Falsch - so schnell wie möglich!`,"alphabet-sort":`Tippe die Wörter in alphabetischer Reihenfolge!`,"modal-verb":`Welches Modalverb passt in den Satz?`,"fill-the-poem":`Ergänze das Gedicht mit dem richtigen Reimwort!`,"word-star":`Bilde so viele Wörter wie möglich aus den Buchstaben!`,"verb-forms":`Welche Form hat das unregelmäßige Verb?`,"split-the-word":`Wo teilt sich das zusammengesetzte Wort auf?`,"prefix-postfix":`Welche Vor- oder Nachsilbe passt?`,"reading-race":`Lies den Text schnell und beantworte die Fragen!`,"double-letter":`Welche Schreibweise ist richtig?`,"compound-meaning":`Was bedeutet dieses zusammengesetzte Wort?`,"comic-strip":`Bringe die Comic-Panels in die richtige Reihenfolge!`,"mirror-word":`Lies das spiegelverkehrte Wort!`,"word-chess":`Welches Wort gewinnt das Duell nach der Regel?`,"slingshot-spelling":`Schieße den richtigen Buchstaben auf die Lücke!`,"gravity-sort":`Sortiere die fallenden Wörter in die richtigen Eimer!`,"word-stacker":`Staple die Wörter in der richtigen Reihenfolge!`,"case-solver":`Bestimme den grammatikalischen Fall des Wortes!`,"secret-agent-code":`Entziffere das Wort mit dem Geheimcode!`,"logic-ladder":`Vervollständige die logische Wortreihe!`,"mad-libs-de":`Fülle die Lücken mit lustigen Wörtern!`,"sentence-scramble":`Bringe den Satz wieder in Ordnung!`,"rhyme-rider":`Fange alle Wörter, die sich reimen!`,"tap-the-type":`Tippe schnell auf die gesuchte Wortart!`,"word-match-fast":`Verbinde das Bild so schnell wie möglich mit dem Wort!`,"vowel-vacuum":`Sammle die verschwundenen Vokale ein!`,"synonym-bridge":`Find das Wort mit der gleichen Bedeutung!`,"antonym-arch":`Finde das Gegenteil des Wortes!`,"gender-gym":`Ordne den Wörtern schnell den richtigen Artikel zu!`,"word-detective":`Errate das Wort anhand der Hinweise!`,"sentence-sniper":`Finde das Wort, das nicht in den Satz passt!`,"article-ace":`Welcher Artikel gehört zu diesem Wort?`,"grammar-ghost":`Korrigiere den Fehler im Geistersatz!`,"idiom-island":`Was sagt man in dieser Situation am besten?`,"proverb-path":`Vervollständige das bekannte Sprichwort!`,"prefix-power":`Wähle das passende Präfix für das Verb!`,"suffix-sun":`Welches Suffix bildet ein korrektes Wort?`,"tense-tornado":`Bestimme schnell die Zeitform des Verbs!`,"word-puzzle-3x3":`Schiebe die Kacheln, bis das Wort stimmt!`,"letter-bounce":`Lasse den Buchstaben in das richtige Ziel springen!`,"word-fishing":`Angle dir die Wörter der richtigen Sorte!`,"sentence-bridge":`Verbinde die Satzteile zu einem Ganzen!`,"category-cannon":`Schieße das Wort in die richtige Kategorie!`,"spelling-bee-de":`Buchstabiere das Wort fehlerfrei!`,"word-pyramid":`Baue die Wort-Pyramide von oben nach unten auf!`,"crossword-mini":`Löse das kleine Kreuzworträtsel!`,"word-balloon":`Platze die Ballons in der richtigen Reihenfolge!`,"grammar-maze":`Finde den Weg durch das Grammatik-Labyrinth!`,"detective-adventure":`Löse den Fall! Sammle Hinweise und entlarve den Dieb.`,"grammar-rpg":`Steuere den Fuchs zu den Schreinen und öffne das Tor!`,"kitchen-chaos":`Meisterkoch gesucht! Folge den Anweisungen präzise.`,"sentence-architect":`Baue den Satz stabil auf - ein Fehler lässt alles einstürzen!`,"word-alchemy":`Mische die richtigen Silben im Kessel, um Wort-Gold zu erschaffen!`,"sentence-symphony":`Dirigiere das Wort-Orchester in der richtigen Satz-Melodie!`,"time-traveler":`Drehe an der Zeitform-Uhr, um die Pflanze wachsen zu lassen!`,"dialogue-duel":`Wähle deine Worte weise im Gespräch mit deinen Freunden!`,"mystery-box":`Löse die mechanischen Rätsel der Box, um das Geheimnis zu lüften!`,"sentence-stacker":`Staple die Wort-Kartons in der richtigen Reihenfolge übereinander!`,"syllable-fishing":`Angle dir die Silben-Boote in der richtigen Reihenfolge!`,"scrap-hunt":`Schiebe die Pappen beiseite und finde die versteckten Wörter!`}[e]||`Löse die Aufgabe!`},getUIStrings(){return{appTitle:`Deutsch Party Brett`,appSubtitle:`Das lustige Lernspiel für die Grundschule!`,newGame:`Neues Spiel`,continueGame:`Fortsetzen`,loadProfile:`Profil laden`,setupPlayers:`Spieler einrichten`,addPlayer:`+ Spieler hinzufügen`,playerName:`Name eingeben...`,choosePreset:`Spielvariante wählen`,chooseLevel:`Klassenstufe wählen`,chooseTopics:`Themen auswählen`,adjustDifficulty:`Schwierigkeit anpassen`,chooseMode:`Spielmodus`,summary:`Zusammenfassung`,startGame:`Spiel starten! 🎲`,back:`Zurück`,next:`Weiter`,roundLabel:`Runde`,rollDice:`Würfeln! 🎲`,yourTurn:`Du bist dran!`,gameOver:`Spiel beendet!`,congratulations:`Herzlichen Glückwunsch!`,playAgain:`Nochmal spielen`,backToStart:`Zum Start`,coins:`Münzen`,stars:`Sterne`,tasks:`Aufgaben`,accuracy:`Genauigkeit`,correct:`Richtig! 🎉`,wrong:`Leider falsch 😊`,tryAgain:`Versuch es nochmal!`,wellDone:`Gut gemacht!`,almostThere:`Fast!`,levels:{vorschule:`Vorschule`,klasse1:`Klasse 1`,klasse2:`Klasse 2`,klasse3:`Klasse 3`,klasse4:`Klasse 4`,frei:`Freier Modus`},modes:{single:`Einzelspieler`,local:`Multiplayer`,classroom:`Klassenzimmer`,party:`Party-Modus`,team:`Team-Modus`}}}}},Fe=`de`;function Ie(){return Pe[Fe]}var Q={nomen:[`sentence-stacker`,`scrap-hunt`,`word-type-sort`,`noun-hunter`,`word-ninja`,`gender-sort`,`plural-match`,`whack-a-noun`,`word-avalanche`],verben:[`sentence-stacker`,`word-type-sort`,`word-ninja`,`verb-pulse`,`tense-switcher`,`word-family-tree`],adjektive:[`sentence-stacker`,`word-type-sort`,`adjective-painter`,`word-balance`,`bubble-burst`],artikel:[`article-choice`,`article-cannon`,`gender-sort`],satzbau:[`sentence-stacker`,`sentence-stacker`,`sentence-order`,`sentence-train`,`word-stacker`,`sentence-scramble`,`sentence-bridge`,`sentence-architect`,`sentence-symphony`],satzarten:[`article-choice`],lueckentexte:[`fill-blanks`,`missing-letter`],rechtschreibung:[`spelling-detective`,`word-meteorites`,`lie-detector`,`anagram-blast`,`missing-letter`,`word-search-swipe`,`double-letter`,`capital-detective`,`mirror-word`,`letter-drop`,`word-star`,`slingshot-spelling`,`secret-agent-code`,`vowel-vacuum`,`word-puzzle-3x3`,`word-pyramid`,`spelling-bee-de`,`word-balloon`],fehlerkorrektur:[`spelling-detective`,`lie-detector`,`double-letter`,`capital-detective`,`grammar-ghost`],gross_klein:[`case-choice`,`capital-detective`],reime:[`rhyme-match`,`rhyme-memory`,`fill-the-poem`,`rhyme-rider`],lesen:`scrap-hunt.scrap-hunt.fill-blanks.word-meteorites.cryptogram.hidden-object.adjective-painter.difference-detective.speed-flash.emoji-translator.word-clock.sentence-sense.story-builder.reading-race.comic-strip.german-idiom.password-crack.secret-agent-code.logic-ladder.sentence-sniper.idiom-island.proverb-path.detective-adventure.kitchen-chaos.sentence-symphony.dialogue-duel.mystery-box`.split(`.`),wortschatz:`scrap-hunt.scrap-hunt.word-type-sort.word-ninja.teakettle-detective.cryptogram.word-balance.memory-chain.hidden-object.synonym-snap.word-chain.hot-cold.opposite-racer.number-words.category-blitz.emoji-translator.definition-match.compound-meaning.german-idiom.word-chess.logic-ladder.mad-libs-de.word-match-fast.synonym-bridge.antonym-arch.word-detective.category-cannon.crossword-mini.detective-adventure.grammar-rpg.kitchen-chaos.word-alchemy.mystery-box`.split(`.`),silben:[`syllable-fishing`,`syllable-fishing`,`syllable-counter`,`syllable-dj`,`syllable-stomp`],zeitformen:[`time-machine`,`verb-pulse`,`tense-switcher`,`verb-forms`,`tense-tornado`,`time-traveler`],satzzeichen:[`punctuation-catcher`,`comma-king`],zusammengesetzte_nomen:[`compound-builder`,`compound-chain`,`split-the-word`,`compound-meaning`],grammatik:[`sentence-stacker`,`preposition-world`,`verb-pulse`,`comma-king`,`question-word-match`,`modal-verb`,`adjective-endings`,`prefix-postfix`,`case-solver`,`grammar-ghost`,`prefix-power`,`suffix-sun`,`grammar-maze`,`detective-adventure`,`grammar-rpg`,`sentence-architect`,`sentence-symphony`,`time-traveler`,`dialogue-duel`],konzentration:[`scrap-hunt`,`memory-chain`,`abc-bubbles`,`word-labyrinth`,`speed-flash`,`color-words`,`mirror-word`,`letter-drop`,`word-puzzle-3x3`,`letter-bounce`,`grammar-rpg`,`mystery-box`],alphabet:[`abc-bubbles`,`word-chain`,`alphabet-sort`],wortarten:[`sentence-stacker`,`word-type-sort`,`word-ninja`,`whack-a-noun`,`bubble-burst`,`word-avalanche`,`word-chess`,`blitz-quiz`,`gravity-sort`,`mad-libs-de`,`tap-the-type`,`gender-gym`,`article-ace`,`word-fishing`,`suffix-sun`,`kitchen-chaos`,`mystery-box`],wortbildung:[`word-alchemy`],_default:[`article-choice`]};function Le(e,t,n=`normal`,r=null){let i=Ie(),a;if(r&&Q[r])a=r;else{let t=e.filter(e=>Q[e]);t.length===0&&t.push(`artikel`),a=t[Math.floor(Math.random()*t.length)]}let o=Q[a]||Q._default,s=o[Math.floor(Math.random()*o.length)],c=i.getContent(a,t),l=i.getInstructions(s),u=we(t.timePressure||0);return{miniGameId:s,topic:a,content:c,instructions:l,difficulty:t,timerSeconds:u,fieldType:n,answerOptions:t.answerOptions||3,inputMode:t.inputMode||0}}var Re=class{constructor(e,t){this.container=e,this.settings=t,this.onComplete=null,this.timerInterval=null}launch(e,i=null,a){this.onComplete=a;let o=Le(this.settings.activeTopics,this.settings.difficulty,e,i),s=Oe(o.miniGameId);if(!s){console.warn(`Mini-game not found:`,o.miniGameId),a({correct:!1,score:0,mode:e});return}let c=e===`challenge`?n(22):e===`team`?r(22):t(22);this.container.innerHTML=`
      <div class="minigame-overlay" id="minigame-overlay">
        <div class="minigame-container">
          <div class="minigame-header">
            <div class="minigame-title">
              <span>${c}</span>
              <span>${s.name_de}</span>
            </div>
            ${o.timerSeconds>0?`
              <div class="minigame-timer-area">
                <div class="timer" id="minigame-timer">
                  ${b(16)} <span id="timer-value">${o.timerSeconds}</span>s
                </div>
              </div>
            `:``}
          </div>
          <div class="minigame-instructions">
            ${o.instructions}
          </div>
          <div id="minigame-game-area"></div>
        </div>
      </div>
    `,o.timerSeconds>0&&this._startTimer(o.timerSeconds,()=>{this._showResult({correct:!1,partial:!1,score:0,timeout:!0,mode:e})});let l=document.getElementById(`minigame-game-area`);s.setup(l,o,t=>{this._clearTimer(),t.mode=e,t.miniGameId=o.miniGameId,t.topic=o.topic,this._showResult(t)})}_showResult(e){let t=document.getElementById(`minigame-game-area`);if(!t)return;let n,r,i;e.timeout?(n=b(48),r=`Zeit abgelaufen!`,i=`fail`):e.correct?(n=x(48),r=`Super gemacht!`,i=`success`):e.partial?(n=y(48),r=`Gut gemacht!`,i=`partial`):(n=`<svg viewBox="0 0 48 48" width="48" height="48"><path d="M24 8 Q18 18 12 28 Q24 24 36 28 Q30 18 24 8Z" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/><circle cx="24" cy="36" r="6" fill="#FFD54F" stroke="#F9A825" stroke-width="2"/></svg>`,r=`Weiter üben!`,i=`fail`);let a=0;e.correct?a=3:e.partial&&(a=1),t.innerHTML=`
      <div class="minigame-result">
        <div class="cardboard-result-card animate-bounce-in">
          <div class="result-icon">${n}</div>
          <div class="result-title ${i}" style="margin-top: 15px;">${r}</div>
          ${e.score===void 0?``:`
            <div style="font-size: var(--font-size-lg); font-family: var(--font-handwritten); color: var(--text-secondary); margin-top: 10px;">
              Ergebnis: ${e.score}%
            </div>
          `}
          ${a>0?`
            <div class="result-rewards" style="justify-content: center; margin-top: 20px;">
              <span class="coin animate-pop" style="background: rgba(255,215,0,0.2); padding: 5px 15px; border-radius: 20px; display: flex; align-items:center; gap: 10px;">
                ${g(24)} +${a}
              </span>
            </div>
          `:``}
          <div style="margin-top: 30px;">
            <button class="btn btn-primary btn-lg" id="minigame-continue">Weiter</button>
          </div>
        </div>
      </div>
    `,document.getElementById(`minigame-continue`)?.addEventListener(`click`,()=>{this.container.innerHTML=``,this.onComplete&&this.onComplete(e)})}_startTimer(e,t){let n=e,r=document.getElementById(`timer-value`),i=document.getElementById(`minigame-timer`);this.timerInterval=setInterval(()=>{n--,r&&(r.textContent=n),n<=5&&i&&i.classList.add(`warning`),n<=3&&i&&(i.classList.remove(`warning`),i.classList.add(`danger`)),n<=0&&(this._clearTimer(),t())},1e3)}_clearTimer(){this.timerInterval&&=(clearInterval(this.timerInterval),null)}close(){this._clearTimer(),this.container.innerHTML=``}},ze=class{constructor(){this.screenManager=new e,this.gameController=new xe,this.settings=new R,this.setupRenderer=null,this.boardRenderer=null,this.minigameRenderer=null}init(){this.screenManager.register(`start`,document.getElementById(`screen-start`)),this.screenManager.register(`setup`,document.getElementById(`screen-setup`)),this.screenManager.register(`board`,document.getElementById(`screen-board`)),this.screenManager.register(`minigame`,document.getElementById(`screen-minigame`)),this.screenManager.register(`results`,document.getElementById(`screen-results`)),this.screenManager.show(`start`),this._setupStartScreen(),this._setupGameEvents(),window.app=this,console.log(`Deutsch Party Brett - initialized!`)}_setupStartScreen(){document.getElementById(`btn-new-game`)?.addEventListener(`click`,()=>{this.settings.reset(),this._showSetup()}),document.getElementById(`btn-continue`)?.addEventListener(`click`,()=>{this.settings.reset(),this._showSetup()}),document.getElementById(`btn-profiles`)?.addEventListener(`click`,()=>{this._showProfilePicker()})}_showSetup(){this.screenManager.show(`setup`);let e=document.getElementById(`setup-content`);this.setupRenderer=new Te(e,this.settings,(e,t)=>{this._startGame(e,t)}),this.setupRenderer.render()}_startGame(e,t){this.gameController.initGame(e,t.getSnapshot()),this.screenManager.show(`board`);let n=document.getElementById(`board-content`);this.boardRenderer=new Ee(n,this.gameController);let r=document.getElementById(`minigame-content`);this.minigameRenderer=new Re(r,t),this.boardRenderer.onMinigameNeeded=e=>this._launchMinigame(e.mode,e.topic),this.boardRenderer.render()}_launchMinigame(e,t){this.screenManager.show(`minigame`),this.minigameRenderer.launch(e,t,e=>{this.gameController.onMinigameComplete(e),this.gameController.state===`finished`?this._showResults():(this.screenManager.show(`board`),this.boardRenderer.update())})}_showResults(){this.screenManager.show(`results`);let e=document.getElementById(`results-content`),t=[...this.gameController.getPlayers()].sort((e,t)=>t.getTotalPoints()-e.getTotalPoints()),n=[ce(40),le(40),ue(40)];e.innerHTML=`
      <div class="results-container">
        <div class="results-header animate-bounce-in">
          <h2>Spiel beendet!</h2>
          <p class="results-subtitle">Herzlichen Glückwunsch an alle!</p>
        </div>
        <div class="podium">${t.slice(0,3).map((e,t)=>`
      <div class="podium-place animate-slide-up stagger-${t+1}">
        <div class="podium-token">
          ${e.getAvatarHTML(80)}
        </div>
        <div class="podium-name">${e.name}</div>
        <div style="display:flex; gap: var(--space-xs); align-items:center;">
          <span class="stat-icon">${g(14)} ${e.coins}</span>
          <span class="stat-icon">${_(14)} ${e.stars}</span>
        </div>
        <div class="podium-stand">${n[t]}</div>
      </div>
    `).join(``)}</div>
        <div class="stats-table">
          <div class="stats-row stats-header">
            <span></span><span>Spieler</span>
            <span class="stat-cell">Münzen</span><span class="stat-cell">Sterne</span>
            <span class="stat-cell">Aufgaben</span><span class="stat-cell">Genauigkeit</span>
          </div>
          ${t.map(e=>`
      <div class="stats-row">
        ${e.getTokenHTML(28)}
        <span class="scoreboard-name">${e.name}</span>
        <span class="stat-cell">${g(14)} ${e.coins}</span>
        <span class="stat-cell">${_(14)} ${e.stars}</span>
        <span class="stat-cell">${e.stats.tasksAttempted}</span>
        <span class="stat-cell">${e.getAccuracy()}%</span>
      </div>
    `).join(``)}
        </div>
        <div class="results-actions">
          <button class="btn btn-primary btn-lg" id="btn-play-again">${v(20)} Nochmal spielen</button>
          <button class="btn btn-secondary" id="btn-to-start">${te(18)} Zum Start</button>
        </div>
      </div>
    `,this._spawnConfetti(),document.getElementById(`btn-play-again`)?.addEventListener(`click`,()=>this._showSetup()),document.getElementById(`btn-to-start`)?.addEventListener(`click`,()=>this.screenManager.show(`start`))}_showProfilePicker(){let e=B.getAll();if(e.length===0){alert(`Noch keine Profile gespeichert!`);return}let t=e.map(e=>e.name).join(`
`),n=prompt(`Profil wählen:\n${t}`);if(n){let e=B.load(n);e&&(this.settings.loadSnapshot(e.settings),this._showSetup())}}_setupGameEvents(){window.addEventListener(`game:reward`,e=>{let{reward:t}=e.detail;t?.description&&this.boardRenderer?.showToast(t.description,`success`)}),window.addEventListener(`game:gameEnd`,()=>{setTimeout(()=>this._showResults(),1e3)})}_spawnConfetti(){let e=document.createElement(`div`);e.className=`confetti-container`,document.body.appendChild(e);let t=[`#FF6B6B`,`#4ECDC4`,`#FFD93D`,`#6C5CE7`,`#FF8A5C`,`#A3DE83`,`#FF69B4`,`#00CED1`];for(let n=0;n<60;n++){let n=document.createElement(`div`);n.className=`confetti-piece`,n.style.left=Math.random()*100+`%`,n.style.background=t[Math.floor(Math.random()*t.length)],n.style.animationDuration=Math.random()*2+2+`s`,n.style.animationDelay=Math.random()*2+`s`,e.appendChild(n)}setTimeout(()=>e.remove(),5e3)}},$=()=>{new ze().init()};document.readyState===`loading`?document.addEventListener(`DOMContentLoaded`,$):$();