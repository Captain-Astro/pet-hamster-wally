input.onButtonPressed(Button.A, function () {
    basic.showString("Yum ")
    if (test == 5) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showIcon(IconNames.Skull)
        basic.showString("No more food ")
        soundExpression.sad.playUntilDone()
        basic.showIcon(IconNames.Asleep)
        test = 0
    }
    test += 1
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.No)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showIcon(IconNames.Surprised)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
})
input.onSound(DetectedSound.Loud, function () {
    input.setSoundThreshold(SoundThreshold.Loud, 128)
    basic.showString("I'm scared!!")
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
    basic.showIcon(IconNames.Asleep)
})
let test = 0
basic.showIcon(IconNames.Asleep)
test = 0
loops.everyInterval(60000, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
loops.everyInterval(3600000, function () {
    basic.showString("" + (input.temperature()))
})
