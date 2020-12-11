
import pygame
from Hangman_UI import helper
import random


pygame.init()

# creating game window
display_width = 800
display_height = 600
screen = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption("Hangman")
# colors
white = (255, 255, 255)
black = (0, 0, 0)
red = (210, 12, 12)
brightred = (255,0,0)
green = (0, 180, 0)
brightgreen = (0, 255, 0)
# text
largeText = pygame.font.Font("freesansbold.ttf", 115)
myfont = pygame.font.SysFont('Comic Sans MS', 20)
boxFont = pygame.font.SysFont('Comic Sans MS', 30)
smallText = pygame.font.Font("freesansbold.ttf", 20)
# load music and sounds
letter_incorrect_sound = pygame.mixer.Sound("incorrect.wav")
letter_correct_sound = pygame.mixer.Sound("correct.wav")


def button(message, x,y,width,height,inactive,active,action = None):
    mouse = pygame.mouse.get_pos()
    click = pygame.mouse.get_pressed()
    if x + width > mouse[0] > x and y + height > mouse[1] > y:
        pygame.draw.rect(screen, active, (x, y, width, height))
        if click[0] == 1 and action != None:
            action()
    else:
        pygame.draw.rect(screen, inactive, (x, y, width, height))

    textSurf, textrect = text_objects(message, smallText)
    textrect.center = ((x + (width / 2)), (y + height / 2))
    screen.blit(textSurf, textrect)

def game_intro():
    screen.fill(black)
    intro = True
    while intro:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                exit()

        TextSurf, TextRect = text_objects("Hangman", largeText)
        TextRect.center = ((display_width / 2), (display_height / 4))
        screen.blit(TextSurf, TextRect)
        pygame.display.update()
        pygame.event.get()
        button("Start!", (display_width/2 - 50), 300, 100, 50, green, brightgreen, game_loop)
        button("Quit!", (display_width/2 - 50), 400, 100, 50, red, brightred, quitgame)

def hintmethod():
    global thishint
    thishint = True

def text_objects(text, font):
    textSurface = font.render(text, True, white)
    return textSurface, textSurface.get_rect()

def quitgame():
    pygame.quit()
    quit()

def game_loop():
    # loop that creates window
    screen.fill(black)
    global thishint
    thishint = False

    # Gallows construction
    gallow = helper.Gallow(screen, white, display_width / 2, display_height / 2, 200, 100)
    # hanging man initialization
    hanging_man = helper.Hanging_man(screen, white, display_width / 2, display_height / 2, 200, 100)
    # incorrect box initialization
    mistake_box = helper.incorrect_box(screen, white, display_width / 2, display_height / 2, 200, 100)
    # word
    word = helper.wordSelected().strip()
    start_letter_pos = 100
    counter = 0
    input = ""
    incorrectList = []
    maxed_out = False
    newAlpha = helper.return_alphabet_without_chars_in_word(word)
    input_Set = set()
    correct_Set = set(word)

    # Prevent multiple loops based on holding down a key
    runningOnce = True
    ranUp = False
    # more variables
    mistake_counter = 0
    not_at_end = True
    replace = False
    one_hint = True
    # for incorrect box and printing incorrect letters
    starting_x_pos = 120
    starting_y_pos = 600
    start_print = 0


    running = True
    while running:

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
                pygame.display.quit()
                pygame.quit()
                exit()

            if ((event.type == pygame.KEYDOWN) and runningOnce):
                input = pygame.key.name(event.key)
                runningOnce = False
                ranUp = True

                # reset printing of word
                if input in word:
                    print(input)
                    print(word)
                    not_at_end = True
                    start_letter_pos = 100
                    counter = 0
                    pygame.mixer.Sound.play(letter_correct_sound)
                    input_Set.add(input)

                    if input_Set == correct_Set:
                        replace = True

                else:
                    pygame.mixer.Sound.set_volume(letter_incorrect_sound, 0.5)
                    pygame.mixer.Sound.play(letter_incorrect_sound)
                    incorrectList.append(input)
                    # for hint!
                    newAlpha = newAlpha.replace(input, "")
                    mistake_counter += 1

                if mistake_counter == 1:
                    hanging_man.make_head(screen, white, int(display_width / 2), int(display_height / 2))
                elif mistake_counter == 2:
                    hanging_man.make_spine(screen, white, int(display_width / 2), int(display_height / 2))
                elif mistake_counter == 3:
                    hanging_man.make_armL(screen, white, int(display_width / 2), int(display_height / 2))
                elif mistake_counter == 4:
                    hanging_man.make_armR(screen, white, int(display_width / 2), int(display_height / 2))
                elif mistake_counter == 5:
                    hanging_man.make_legL(screen, white, int(display_width / 2), int(display_height / 2))
                elif mistake_counter == 6:
                    hanging_man.make_legR(screen, white, int(display_width / 2), int(display_height / 2))
                    maxed_out = True
                    not_at_end = True
                    counter = 0
                    start_letter_pos = 100
                    replace = True
                    one_hint = True
                else:
                    pass

            if event.type == pygame.KEYUP and ranUp:
                runningOnce = True
                ranUp = False

        # displays word and letter placement lines
        if not_at_end:
            for letter in word:
                if input == letter or maxed_out:
                    # letters
                    textsurface = myfont.render(letter, False, white)
                    screen.blit(textsurface, (start_letter_pos, 470))

                counter += 1
                # letter positions
                letter_position = pygame.draw.rect(screen, white, [start_letter_pos, 500, 15, 5])
                start_letter_pos += 30

                if counter == len(word):
                    not_at_end = False


        # box of incorrect inputs
        incorrectTextSurface = myfont.render("Incorrect Letters", False, red)
        screen.blit(incorrectTextSurface, (display_width / 2 + 120, display_height / 2 - 230))
        mistake_box.make_box(screen, red, display_width / 2, display_height / 2, 2)
        for x in range(start_print, len(incorrectList)):
            incorrectLetters = boxFont.render(incorrectList[x], False, red)
            screen.blit(incorrectLetters, (display_width / 2 + starting_x_pos + 10, starting_y_pos / 2 - 200))
            starting_x_pos += 22
            if len(incorrectList) % 7 == 0:
                starting_y_pos += 55
                starting_x_pos = 120

        start_print = len(incorrectList)  # previously_printed_len
        button("Quit!", (display_width - 100), display_height - 50, 100, 50, red, brightred, quitgame)

        if not replace:
            button("hint", 0, display_height - 50, 100, 50, green, brightgreen, hintmethod)
        if replace:
            button("Reset", 0, display_height - 50, 100, 50, green, brightgreen, game_loop)

        if thishint and runningOnce and one_hint:
            if pygame.mouse.get_pressed()[0] == 1:
                runningOnce = False
            incorrectList.append(newAlpha[random.randint(0, len(newAlpha) - 1)])
            thishint = False
            one_hint = False
            x_pos = 120
            for element in incorrectList:
                incorrectLetters = boxFont.render(element, False, red)
                screen.blit(incorrectLetters, (display_width / 2 + x_pos + 10, display_height / 2 - 200))
                x_pos += 22

        if pygame.mouse.get_pressed()[0] == 0:
            runningOnce = True

        pygame.display.update()


# Methods being called
game_intro()
game_loop()
pygame.display.quit()
pygame.quit()
quit()
