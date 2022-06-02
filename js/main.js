//====== root ======
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

//==========================
const tabs = $$  ('.item')
const descriptions = $$ ('.description')

const itemActive = $('.item.item__actived')
const bar = $('.bar')
console.log(bar)
bar.style.left = itemActive.offsetLeft + 'px'
bar.style.width = itemActive.offsetWidth + 'px'

tabs.forEach((item, index) => {
    const description = descriptions[index]
    item.onclick = function() {
        $('.description.actived').classList.remove('actived')
        description.classList.add('actived')
        
        bar.style.left = this.offsetLeft + 'px'
        bar.style.width = this.offsetWidth + 'px'

        $('.item.item__actived').classList.remove('item__actived')
        this.classList.add('item__actived')

        
        clearInterval(autoRandom)
        $('.item.next__actived').classList.remove('next__actived')
    }
});

var index = 0;
var autoRandom = setInterval(() => {
    //item
    $('.item.item__actived').classList.remove('item__actived')
    $('.item.next__actived').classList.remove('next__actived')
    tabs[index].classList.add('item__actived')
    tabs[index].classList.add('next__actived')

    //description
    $('.description.actived').classList.remove('actived')
    descriptions[index].classList.add('actived')

    // bar
    bar.style.width = tabs[index].offsetWidth + 'px';
    bar.style.left  = tabs[index].offsetLeft + 'px';
    
    index++;
    if(index === 4)
        index = 0;
},2000);