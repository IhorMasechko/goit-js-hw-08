var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,r.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var l=r("kEUo3");const o=document.querySelector(".feedback-form"),n=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]');o.addEventListener("input",(0,l.throttle)((e=>{const t={email:n.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),o.addEventListener("submit",(e=>(e.preventDefault(),""===n.value?alert('Please fill in the "Email"!'):""===s.value?alert('Please fill in the "message"!'):(console.log({email:n.value,message:s.value}),o.reset(),void localStorage.removeItem("feedback-form-state")))));const i=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}})("feedback-form-state");i&&(n.value=i.email,s.value=i.message);
//# sourceMappingURL=03-feedback.639c074e.js.map
