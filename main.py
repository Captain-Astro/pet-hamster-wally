def on_button_pressed_a():
    global test
    basic.show_string("Yum ")
    if test == 5:
        basic.show_icon(IconNames.SKULL)
        basic.show_string("No more food ")
        soundExpression.sad.play_until_done()
        basic.show_icon(IconNames.ASLEEP)
        test = 0
    test += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    input.set_sound_threshold(SoundThreshold.LOUD, 84)
    basic.show_string("I'm scared!!")
    basic.show_icon(IconNames.SAD)
    basic.pause(100)
    for index in range(4):
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        # . # . .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        basic.show_leds("""
            . . . . .
                        . . # . #
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # # # .
                        # . . . #
        """)
        basic.pause(100)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    basic.show_string("I love you ")
    for index2 in range(4):
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(100)
        basic.show_icon(IconNames.HEART)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_icon(IconNames.SAD)
    soundExpression.sad.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    basic.show_string("Hello! I am Wally")
    basic.show_icon(IconNames.HAPPY)
    soundExpression.giggle.play_until_done()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def my_function():
    for index3 in range(4):
        basic.show_icon(IconNames.DIAMOND)
        basic.pause(100)
        basic.show_icon(IconNames.SMALL_DIAMOND)
        basic.pause(100)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
        basic.pause(100)
    basic.show_icon(IconNames.GHOST)
    basic.pause(100)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(100)
    basic.show_icon(IconNames.GHOST)
buttonClicks.on_button_held(buttonClicks.AorB.A, my_function)

Light_level = 0
test = 0
basic.show_icon(IconNames.ASLEEP)
test = 0

def on_forever():
    pass
basic.forever(on_forever)

def on_every_interval():
    basic.show_string("" + str((input.temperature())))
loops.every_interval(3600000, on_every_interval)

def on_every_interval2():
    global Light_level
    basic.show_string("" + str((input.light_level())))
    Light_level = input.light_level()
loops.every_interval(3600000, on_every_interval2)
