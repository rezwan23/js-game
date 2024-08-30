import _implicitStylesheets from "./app.css";
import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div style="text-align:center"${3}><svg width="221" height="357" viewBox="0 0 221 357" fill="none" stroke="#16325c" stroke-linejoin="round" stroke-width="8"${3}><path fill="#e4f2f8" d="M51 4L4 177h68L30 353l187-228h-73L198 4z"${3}/><path d="M75 43l-24 90 24-90z"${3}/></svg><h1${3}>Fun Game Built with LWC within LWR </h1></div>`;
const $fragment2 = parseFragment`<section class="row${0}"${2}><div class="small-6 columns${0}"${2}><h1 class="text-center${0}"${2}>${"t3"}</h1><div class="healthbar${0}"${2}><div class="healthbar text-center${0}"${"s5"}${2}></div></div></div><div class="small-6 columns${0}"${2}><h1 class="text-center${0}"${2}>${"t8"}</h1><div class="healthbar${0}"${2}><div class="healthbar text-center${0}"${"s10"}${2}></div></div></div></section>`;
const $fragment3 = parseFragment`<section class="row${0}" style="margin-top:30px;text-align:center"${2}><div class="${0}" style="width:100%"${2}><input type="text" name="Player1Name" placeholder="Player 1 Name"${3}><input type="text" name="Player2Name" placeholder="Player 2 Name"${3}><button class="start-game${0}"${2}>NEXT</button></div></section>`;
const $fragment4 = parseFragment`<section class="row controls${0}"${2}><div class="small-12 columns${0}"${2}><button class="attack${0}"${2}>ATTACK</button><button class="special-attack${0}"${2}>SPECIAL ATTACK</button><button class="heal${0}"${2}>HEAL</button><button class="give-up${0}"${2}>GIVE UP</button></div></section>`;
const $fragment5 = parseFragment`<section class="row controls${0}"${2}><div class="small-12 columns${0}"${2}><button class="start-game${0}"${2}>START NEW GAME</button></div></section>`;
const $fragment6 = parseFragment`<li style="background:#f7a444"${3}>${"t1"}</li>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "row": true,
    "log": true
  },
  key: 15
};
const stc2 = {
  classMap: {
    "small-12": true,
    "columns": true
  },
  key: 16
};
const stc3 = {
  key: 17
};
const stc4 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, sp: api_static_part, fr: api_fragment, b: api_bind, k: api_key, i: api_iterator, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7} = $ctx;
  return [api_element("main", stc0, [api_static_fragment($fragment1, 2), $cmp.pns ? api_fragment(3, [api_static_fragment($fragment2, 5, [api_static_part(3, null, api_dynamic_text($cmp.Player1Name) + "(You) - " + api_dynamic_text($cmp.myWidth)), api_static_part(5, {
    style: $cmp.myStyle
  }, null), api_static_part(8, null, api_dynamic_text($cmp.Player2Name) + "(PC) - " + api_dynamic_text($cmp.monsterWidth)), api_static_part(10, {
    style: $cmp.monsterStyle
  }, null)])], 0) : api_fragment(3, [api_static_fragment($fragment3, 7, [api_static_part(2, {
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }, null), api_static_part(3, {
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleChange))
    }
  }, null), api_static_part(4, {
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.setName))
    }
  }, null)])], 0), $cmp.showAndPns ? api_fragment(8, [api_static_fragment($fragment4, 10, [api_static_part(2, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.attack))
    }
  }, null), api_static_part(4, {
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.spcAttack))
    }
  }, null), api_static_part(6, {
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.heal))
    }
  }, null), api_static_part(8, {
    on: {
      "click": _m6 || ($ctx._m6 = api_bind($cmp.giveUp))
    }
  }, null)])], 0) : null, $cmp.nShowAndPns ? api_fragment(11, [api_static_fragment($fragment5, 13, [api_static_part(2, {
    on: {
      "click": _m7 || ($ctx._m7 = api_bind($cmp.start))
    }
  }, null)])], 0) : null, $cmp.pns ? api_fragment(14, [api_element("section", stc1, [api_element("div", stc2, [api_element("ul", stc3, $cmp.attackLogs ? api_iterator($cmp.attackLogs, function (log) {
    return api_static_fragment($fragment6, api_key(19, $cmp.makeid), [api_static_part(1, null, api_dynamic_text(log))]);
  }) : stc4)])])], 0) : null])];
  /*LWC compiler v7.2.2*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-5la2ic78dit";
tmpl.legacyStylesheetToken = "example-app_app";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
