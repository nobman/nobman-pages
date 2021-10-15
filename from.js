var remove = 0;

//表示・非表示を切り替える要素を取得
let content = []
content[0] = document.getElementById('Clickerwork');
content[1] = document.getElementById('Fightgame');
content[2] = document.getElementById('Roguelike');
content[3] = document.getElementById('Bicycle');
content[4] = document.getElementById('Alley');
content[5] = document.getElementById('Ruins');
content[6] = document.getElementById('CharaModel');

const contentnum = 7;

// 要素をスライドしながら表示する関数(jQueryのslideDownと同じ)
const slideDown = (el, duration = 500) => {
  //el.classList.add("is-open");
  //el.style.removeProperty("display");
  let display = window.getComputedStyle(el).display;
  
  el.style.display = display;
  let height = el.offsetHeight;
  el.style.overflow = "hidden";
  el.style.height = 0;
  el.style.paddingTop = 0;
  el.style.paddingBottom = 0;
  el.style.marginTop = 0;
  el.style.marginBottom = 0;
  el.offsetHeight;
  el.style.transitionProperty = "height, margin, padding";
  el.style.transitionDuration = duration + "ms";
  el.style.transitionTimingFunction = "ease";
  el.style.height = height + "px";
  el.style.removeProperty("padding-top");
  el.style.removeProperty("padding-bottom");
  el.style.removeProperty("margin-top");
  el.style.removeProperty("margin-bottom");
  setTimeout(() => {
    el.style.removeProperty("height");
    el.style.removeProperty("overflow");
    el.style.removeProperty("transition-duration");
    el.style.removeProperty("transition-property");
    el.style.removeProperty("transition-timing-function");
  }, duration);
};


function radioDeselection(already, numeric){
  if(remove == numeric){
    already.checked = false;
    remove = 0;

    content[numeric-1].style.display = "none";

  }else{
    remove = numeric;

    if(numeric <= contentnum){
      for(let i=0; i < contentnum; i++){
        content[i].style.display = "none";
      }

      content[numeric-1].style.display = "block";
      
      const scrollpoint = content[numeric-1].getBoundingClientRect().top
      window.scrollTo({
        top: scrollpoint + window.pageYOffset,
        behavior: 'smooth'
      });

      slideDown(content[numeric-1]);

    }
  }
}

