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
    strip.clear()
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(5, neopixel.colors(NeoPixelColors.Red))
    strip.show()
    basic.pause(500)
    strip.clear()
    strip.setPixelColor(7, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(8, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(10, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(11, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(12, neopixel.colors(NeoPixelColors.Blue))
    strip.setPixelColor(13, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
    basic.pause(500)
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
        rainbow()
    }
    if (flag == 1) {
        police()
    }
    if (flag == 2) {
        purple()
    }
    if (flag == 3) {
        red()
    }
    if (flag > 3) {
        flag = 0
    }
})
