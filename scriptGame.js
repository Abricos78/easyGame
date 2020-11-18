let startBtn = document.querySelector('.start'),
    nums = document.querySelectorAll('td'),
    restartBtn = document.querySelector('.again'),
    valueNums = []

startBtn.addEventListener('click', () => {
        let info = document.querySelector('.info'),
            game = document.querySelector('.game'),
            span = document.querySelector('span'),
            timer = document.querySelector('.timer')
        info.style.display = 'none'
        game.style.display = 'block'

        for (let i = 0; i < nums.length; i++) {
            addRandomNums(valueNums, nums[i])
            valueNums.push(+nums[i].innerHTML)
        }

        
        let lastTime = setInterval(() => {
                span.innerHTML = ' ' + --span.innerHTML
                if (span.innerHTML === ' 0') {
                    clearInterval(lastTime)
                    timer.innerHTML = 'Вы проиграли!!!'
                }
            }, 1000)


})


restartBtn.addEventListener('click', () => {
    let timer = document.querySelector('.timer')
    timer.innerHTML = 'Игра закончится через: <span>75</span>'

    let span = timer.querySelector('span')

    valueNums = []
    for (let i = 0; i < nums.length; i++) {
        nums[i].style.background = 'white'
        addRandomNums(valueNums, nums[i])
        valueNums.push(+nums[i].innerHTML)
    }

    let lastTime = setInterval(() => {
        span.innerHTML = ' ' + --span.innerHTML
        if (span.innerHTML === ' 0') {
            clearInterval(lastTime)
            timer.innerHTML = 'Вы проиграли!!!'
        }
    }, 1000)

})


let startNum = 1

for (let i = 0; i < nums.length; i++) {
    nums[i].addEventListener('click', () => {
        let timer = document.querySelector('.timer')
        console.log(1)
        if (nums[i].innerHTML == startNum) {
            nums[i].style.background = 'pink'
            ++startNum
        } 
        if (startNum === 26) {
            timer.innerHTML = 'Вы победили!!!'
            startNum = 1
        }
    })
}





function addRandomNums(arr, elem) {
    let randomNum = Math.ceil(Math.random() * 25)
    if (arr.indexOf(randomNum) === -1) {
        elem.innerHTML = randomNum
        elem.style.fontSize = addRandomFontSize() + 'px'
        elem.style.color = addRandomColor()
    } else {
        addRandomNums(arr, elem)
    }
}

function addRandomFontSize() {
    let randomFontSize = Math.ceil(Math.random() * 23) + 14
    return randomFontSize
}

function addRandomColor() {
    let arr = []
    for (let i = 0; i < 3; i++) {
        arr.push(Math.round(Math.random() * 256))
    }
    return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}