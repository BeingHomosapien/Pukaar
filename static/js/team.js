function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

var box = document.getElementsByClassName("box")

box[0].addEventListener("scroll",async (e)=>{
  var h = window.innerHeight
  var organiser = document.getElementsByClassName("organiser")
  for (var i = 0; i < organiser.length; i++) {
    let top = organiser[i].getBoundingClientRect().top
    if(top > h*0.15 && top < h*0.6){
      organiser[i].previousElementSibling.classList.add("animate")
      await sleep(300)
      let cards = organiser[i].children
      for (var j = 0; j < cards.length; j++) {
        cards[j].classList.add("animate")
        await sleep(500)
      }
      for (var j = 0; j < cards.length; j++) {
        cards[j].classList.add("hover")
      }
    }
  }

})



box[0].scrollBy(0,window.innerHeight/10)
box[0].scrollBy(0,window.innerHeight/(-10))
