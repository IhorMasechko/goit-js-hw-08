!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a);var l=a("1WSnx"),n=document.querySelector(".feedback-form"),o=document.querySelector('input[name="email"]'),i=document.querySelector('textarea[name="message"]'),u="feedback-form-state";n.addEventListener("input",(0,l.throttle)((function(e){var t={email:o.value,message:i.value};localStorage.setItem(u,JSON.stringify(t))}),500)),n.addEventListener("submit",(function(e){return e.preventDefault(),""===o.value?alert('Please fill in the "Email"!'):""===i.value?alert('Please fill in the "message"!'):(console.log({email:o.value,message:i.value}),n.reset(),void localStorage.removeItem(u))}));var s=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(u);s&&(o.value=s.email,i.value=s.message)}();
//# sourceMappingURL=03-feedback.f02084ac.js.map