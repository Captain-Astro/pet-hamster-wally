def on_button_pressed_a():
    global test
    basic.show_string("Yum ")
    if test > 3:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
        """)
        basic.show_icon(IconNames.SKULL)
        basic.show_string("No more food ")
        soundExpression.sad.play_until_done()
        basic.show_icon(IconNames.ASLEEP)
        test = 0
    test += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_free_fall():
    basic.show_icon(IconNames.NO)
    music.start_melody(music.built_in_melody(Melodies.DADADADUM),
        MelodyOptions.ONCE)
input.on_gesture(Gesture.FREE_FALL, on_gesture_free_fall)

def upDate(text: str):
    pass

def on_sound_loud():
    basic.show_string("I'm Scared!!")
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
    basic.show_icon(IconNames.ASLEEP)
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
    basic.pause(200)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(200)
    basic.show_icon(IconNames.ASLEEP)
buttonClicks.on_button_held(buttonClicks.AorB.A, my_function)

test = 0
basic.show_icon(IconNames.ASLEEP)
test = 0
input.set_sound_threshold(SoundThreshold.LOUD, 212)
basic.show_string("" + str((test)))

def on_every_interval():
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    for index4 in range(4):
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        . # # # .
                        . . . . .
        """)
        basic.pause(500)
        basic.show_leds("""
            . . . . .
                        # # . # #
                        . . . . .
                        . # # # .
                        . . . . .
        """)
        basic.pause(200)
        basic.show_leds("""
            . . . . .
                        # . # . .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
        basic.pause(200)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
        basic.show_leds("""
            . . . . .
                        . . # . #
                        . . . . .
                        # . . . #
                        . # # # .
        """)
        basic.pause(200)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
        basic.pause(200)
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
        basic.pause(200)
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        # . . . #
                        . # # # .
        """)
        basic.pause(500)
loops.every_interval(3600000, on_every_interval)
