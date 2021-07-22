let images = [
    {id:1, title: 'SHAZAM', link: './img/021-shazam.svg'},
    {id:2, title: 'SAFARI', link: './img/022-safari.svg'},
    {id:3, title: 'NETFLIX', link: './img/035-netflix.svg'},
    {id:4, title: 'PEPSI', link: './img/027-pepsi.svg'},
    {id:5, title: 'PAYPAL', link: './img/028-paypal.svg'},
    {id:6, title: 'EDGE', link: './img/030-edge.svg'},
    {id:7, title: 'ODNOKLASSNIKI', link: './img/032-odnoklassniki.svg'},
    {id:8, title: 'NVIDIA', link: './img/033-nvidia.svg'},
    {id:9, title: 'NIKE', link: './img/034-nike.svg'},
    {id:10, title: 'WINDOWS', link: './img/038-windows.svg'},
    {id:11, title: 'UBER', link: './img/009-uber.svg'},
    {id:12, title: 'ANDROID', link: './img/082-android.svg'},
    {id:13, title: 'CHROME', link: './img/058-chrome.svg'},
    {id:14, title: 'HTML', link: './img/051-html-5.svg'},
    {id:15, title: 'EXCEL', link: './img/043-excel.svg'},
]
let count = 3
let result = 0
alert(`\n${images[0].title} logoni toping `)

for(let img of images){
    let randomX = Math.random() * (1150 - 100) + 100 | 0
    let randomY = Math.random() * (550 - 100) + 100 | 0
    
    let image = document.createElement('img')
    image.style.width = '70px'
    image.style.height = '70px'
    image.style.position = 'absolute'

    image.setAttribute('data-id', img.id)
    image.style.top = randomY + 'px'
    image.style.left = randomX + 'px'

    image.src = img.link
    document.body.append(image)

    image.onclick = function(){
        if(images[result].id == image.getAttribute('data-id')){
            image.remove()
            alert(`\n ${images[result+1].title} ni logosini toping\n\nUrinishlar soni ${count} ta bor`)
            result++
        }
        else{
            alert(`Urinshlar soni ${count} ta qoldi`)
            count--
        }
        if(count == 0){
            let h = document.querySelector('#hed')
            h.textContent = 'GAME OVER'
            h.style.color = 'red'
            h.style.textAlign = 'center'
        }
        if(count < 0 ){
            window.location.reload()
        }
        if(result == images.length-1){
            let h = document.querySelector('#hed')
            h.textContent = 'YOUR WIN'
            h.style.color = 'green'
            h.style.textAlign = 'center'
        }        
    }
}




