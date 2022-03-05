const adviceText = document.querySelector('.adviceText')
const adviceNum = document.querySelector('.adviceNum')
const img = document.querySelector('img')
const docWidth = document.body.clientWidth;

console.log(docWidth)
if (docWidth <= 375) {
    img.src = 'images/pattern-divider-mobile.svg'
}

async function getData() {
    await fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const getData = data.slip
            console.log(getData.advice)

            adviceNum.innerHTML = `ADVICE #${getData.id}`
            adviceText.innerHTML = `"${getData.advice}"`


        })
}

getData();