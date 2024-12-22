const copyButton= document.querySelector(".copy");
const email= document.querySelector(".email-input");

copyButton.addEventListener("click", ()=>{
   navigator.clipboard.writeText(email.value);
});