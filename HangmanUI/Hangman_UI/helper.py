
import pygame
import random


# Gallows Construction (pole that holds the man)
class Gallow():
    def __init__(self, screen, color, x_middle, y_middle, gallow_spine, gallow_platform):
        self.screen = screen
        self.color = color
        self.x_middle = x_middle
        self.y_middle = y_middle
        self.gallow_spine = gallow_spine
        self.gallow_platform = gallow_platform

        # Platform
        pygame.draw.rect(screen, color, [x_middle, y_middle, gallow_platform, 5])
        # Gallows spine
        pygame.draw.rect(screen, color, [x_middle + 45, y_middle - gallow_spine, 5, gallow_spine])
        # Gallows ceiling
        pygame.draw.rect(screen, color, [x_middle - 50, y_middle - gallow_spine, gallow_platform, 5])
        # Gallows hanger
        pygame.draw.rect(screen, color, [x_middle - 50, y_middle - gallow_spine, 5, 20])


class Hanging_man():
    def __init__(self, screen, color, x_middle, y_middle, gallow_spine, gallow_platform):
        self.screen = screen
        self.color = color
        self.x_middle = x_middle
        self.y_middle = y_middle
        self.gallow_spine = gallow_spine
        self.gallow_platform = gallow_platform

    def make_head(self, screen, color, x_middle, y_middle):
        pygame.draw.circle(screen, color, [x_middle - 48, y_middle - 160], 20, 2)

    def make_spine(self, screen, color, x_middle, y_middle):
        pygame.draw.rect(screen, color, [x_middle - 50, y_middle - 141, 5, 90])

    def make_armL(self, screen, color, x_middle, y_middle):
        pygame.draw.polygon(screen, color, [(x_middle - 50, y_middle - 70), (x_middle - 50, y_middle - 80),
                                            (x_middle - 20, y_middle - 140), (x_middle - 20, y_middle - 130)], 0)

    def make_armR(self, screen, color, x_middle, y_middle):
        pygame.draw.polygon(screen, color, [(x_middle - 50, y_middle - 70), (x_middle - 50, y_middle - 80),
                                            (x_middle - 80, y_middle - 140), (x_middle - 80, y_middle - 130)], 0)

    def make_legL(self, screen, color, x_middle, y_middle):
        pygame.draw.polygon(screen, color, [(x_middle - 50, y_middle - 50), (x_middle - 50, y_middle - 60),
                                            (x_middle - 80, y_middle), (x_middle - 80, y_middle + 10)], 0)

    def make_legR(self, screen, color, x_middle, y_middle):
        pygame.draw.polygon(screen, color, [(x_middle - 50, y_middle - 50), (x_middle - 50, y_middle - 60),
                                            (x_middle - 20, y_middle), (x_middle - 20, y_middle + 10)], 0)


class incorrect_box():
    def __init__(self, screen, color, x_middle, y_middle, gallow_spine, gallow_platform):
        self.screen = screen
        self.color = color
        self.x_middle = x_middle
        self.y_middle = y_middle
        self.gallow_spine = gallow_spine
        self.gallow_platform = gallow_platform

    def make_box(self,screen,color,x_middle,y_middle, mode):
        pygame.draw.rect(screen, color, [x_middle + 120, y_middle - 200, 200, 130], mode)


def wordSelected():
    illegalTerms = "1234567890!@#$%^&*()_-+={[}]|:;'<,>.?/"
    dictionary = open("dictionary.txt", "r")
    arrayDictionary = dictionary.readlines()
    length = len(arrayDictionary)
    word_needs_to_be_selected = True
    while word_needs_to_be_selected:
        random_selected_word = arrayDictionary[random.randint(1, length)]
        if illegalTerms in random_selected_word:
            random_selected_word = arrayDictionary[random.randint(1, length)]
        else:
            word_needs_to_be_selected = False

    dictionary.close()
    return random_selected_word

word = wordSelected()

def return_alphabet_without_chars_in_word(word):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for letter in word:
        alphabet = alphabet.replace(letter,"")
    return alphabet

def testadder(test, testing):
    test.append(1)
    return testing + 1

def main():
    test = []
    testing = 1
    testing = testadder(test, testing)

main()




