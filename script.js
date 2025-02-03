let btn = document.querySelector('button')

 let arrImage = [
    "https://th.bing.com/th/id/OIP.jhXnUwoGlpMUib5c39_sUwHaHa?w=165&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
     "https://dp-pic.com/wp-content/uploads/2024/03/a-cute-little-baby-dp-by-dp-pic-baby-dp-cute-dp-cute-pfp-2.jpg",
    "https://th.bing.com/th/id/OIP.rfv7nHYjw6FgCVPhBF7yzwHaJP?pid=ImgDet&w=184&h=229&c=7&dpr=1.3",
    "https://th.bing.com/th/id/OIP.UIi6bb0EYAk730qvvObcrgHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
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
