let nub = 0
let tem = 0
input.onButtonPressed(Button.A, function () {
    nub = 1
    for (let index = 0; index < 10; index++) {
        basic.showNumber(nub)
        nub += 2
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    tem = input.temperature()
    if (tem < 25) {
        basic.showString("switch off air conditioner")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(20211174)
})
basic.forever(function () {
	
})
