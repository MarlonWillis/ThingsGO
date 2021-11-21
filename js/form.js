var text = document.getElementById('animation-text-1');
var newDom = '';
var animationDelay = 4;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char-1">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

var text = document.getElementById('animation-text-2');
var newDom = '';
var animationDelay = 8;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char-2">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

function disableScroll() {
       document.body.classList.add("stop-scrolling");
   }

   function enableScroll() {
       document.body.classList.remove("stop-scrolling");
   }
