function purple () {
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    flag += 1
})
function rainbow () {
    strip.showRainbow(1, 360)
    strip.show()
    for (let index = 0; index <= 12; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
}
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    flag = 0
})
function red () {
    strip.setBrightness(255)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.setBrightness(10)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
}
function police () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(200)
}
let flag = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 13, NeoPixelMode.RGB)
flag = 0
basic.showLeds(`
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (flag == 0) {
        purple()
    }
    if (flag == 1) {
        rainbow()
    }
    if (flag == 2) {
        police()
    }
    if (flag == 3) {
        red()
    }
    if (flag > 3) {
        flag = 0
    }
})
