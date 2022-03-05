const docWidth = document.body.clientWidth;
console.log(docWidth)
const img = document.querySelectorAll('img')
console.log(img)

for (let i = 0; i < img.length; i++) {
    let n = i + 1


    if (docWidth < 912) {
        img[i].src = `./images/${n}__tablet.jpg`
        console.log(img[i].src)
    } else {
        img[i].src = `./images/${n}__desk.jpg`
        console.log(img[i].src)
    }
}
