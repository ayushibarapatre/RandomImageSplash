let btn = document.querySelector('button')

 let arrImage = [
    "https://th.bing.com/th/id/OIP.0Tsi2T8-06Vxt0aWvo26RAHaMV?w=156&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
     "https://th.bing.com/th/id/OIP.q4XRuQWrO7hxDmA8gLRfAQHaFj?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.vhId6NDTyDJiRiYTz-QqvQHaE8?w=261&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    "https://th.bing.com/th/id/OIP.DyJmoOKCgaiTsvYK_VW0hAHaHB?w=172&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
 ]
 function randomImages (){
     let randomValue = Math.floor(Math.random()* arrImage.length)

     var randomX = Math.random() * 90;
     var randomY = Math.random() * 90;
     var randomScale = Math.random() * 360;

     return {randomValue ,randomScale,randomX ,randomY}

    }

 btn.addEventListener('click' , function(){
    const {randomValue ,randomScale,randomX ,randomY} = randomImages()


     let image =document.createElement('img')
    image.style.position ='absolute'
    image.style.top = randomY + "%";
    image.style.left = randomX + "%";
    image.style.transform = `rotate(${randomScale}deg)`;
    image.style.height = "120px";
    image.src = arrImage[randomValue];
    image.style.height = '200px'
    image.style.width = '120px'

    document.body.appendChild(image)

 })
