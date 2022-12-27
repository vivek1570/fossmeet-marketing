function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}
if (iOS()) {
  document.getElementById('alert').style.opacity=1
}
const cls = ()  =>{
  console.log('clicked');
  document.getElementById('alert').style.opacity=0
}
const scr =   (scrl=600)=>{    document.getElementById('main').scrollBy({
    behavior:"smooth",
    left:0,
    top:scrl
});
console.log('clicked down');
}
const scr2  =   ()=>{
    document.getElementById('main').scrollBy({
        behavior:'smooth',
        left:0,
        top:-600
    })
    console.log('clicked up');
}

window.sections = [...document.querySelectorAll('.section')];
window.bg   =   [...document.querySelectorAll('.bg-img')];
window.lastScrollTop = window.pageYOffset;
// window.bg[0].style.opacity=1
document.getElementById('main').addEventListener('scroll', onScroll);
function onScroll() {
  const scrollTop = window.pageYOffset;
  console.log('scrolled');
  const section = window.sections
    .map(section => {
      const el = section;
      const rect = el.getBoundingClientRect();
      return {el, rect};
    })
    .find(section => section.rect.bottom >= (window.innerHeight * 0.5));
    window.bg.forEach(x => {
        x.style.opacity=0
    });
    if (section.el.getAttribute('data-bg')!=100) {
      window.bg[section.el.getAttribute('data-bg')].style.opacity=1
    }
}
if(window.outerWidth > 425) {
    onScroll()
  }
