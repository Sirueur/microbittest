let secouer = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . . . # .
        . . . # .
        `)
    if (secouer == 3) {
        basic.showLeds(`
            . # # . .
            # . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    if (secouer == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    if (secouer == 3) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    secouer = 3
})
basic.forever(function () {
	
})
