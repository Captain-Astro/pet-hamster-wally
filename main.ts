input.onButtonPressed(Button.A, function () {
    if (test < 3) {
        basic.showString("Yum ")
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Skull)
        basic.showString("NO MORE FOOD")
        soundExpression.sad.playUntilDone()
        basic.showIcon(IconNames.Asleep)
        test = 0
    }
    test += 1
    basic.showIcon(IconNames.Asleep)
    basic.pause(100)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
function upDate (text: string) {
	
}
input.onSound(DetectedSound.Loud, function () {
    basic.showString("I'm Scared!!")
    basic.showIcon(IconNames.Sad)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("I love you ")
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("Hello! I am Wally")
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
})
buttonClicks.onButtonHeld(buttonClicks.AorB.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.pause(100)
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
    }
    basic.showIcon(IconNames.Ghost)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.Ghost)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(200)
    basic.showIcon(IconNames.Asleep)
})
let test = 0
basic.showIcon(IconNames.Asleep)
test = 0
input.setSoundThreshold(SoundThreshold.Loud, 212)
basic.showString("" + (test))
loops.everyInterval(3600000, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(500)
    }
})
