class Formats{constructor(){let e=document.querySelectorAll(".format__number");function u(e){var t=e.keyCode;return!0===e.shiftKey||35===t||36===t||8===t||9===t||13===t||46===t||36<t&&t<41||(!0===e.ctrlKey||!0===e.metaKey)&&(65===t||67===t||86===t||88===t||90===t)}function t(e){var t;48<=(t=(t=e).keyCode)&&t<=57||96<=t&&t<=105||u(e)||e.preventDefault()}function n(e){if(!u(e)){const a=e.target,s=e.target.value.replace(/\D/g,"").substring(0,12);var e=s.substring(3,5),t=s.substring(5,8),n=s.substring(8,10),r=s.substring(10,12);10<s.length?a.value=`+38(0${e}) ${t}-${n}-`+r:8<s.length?a.value=`+38(0${e}) ${t}-`+n:5<s.length?a.value=`+38(0${e}) `+t:(3<s.length||0<=s.length)&&(a.value="+38(0"+e)}}e.forEach(function(e){e.addEventListener("click",t),e.addEventListener("keydown",t),e.addEventListener("keyup",n)})}}let formats=new Formats;