
"""
Test
    - error icon is displayed
    - home link works
    - error link works for anything placed after original url
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import random


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class HomeErrorTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/error")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_error_icon(self):
        error_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/img")
        self.assertTrue(error_icon.is_displayed())

    def test_error_home_link(self):
        home_link_button = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/a/div/div")
        driver.execute_script("arguments[0].click();", home_link_button)
        url = driver.current_url
        self.assertEqual(url, "https://neets.netlify.app/")
        driver.back()
        url = driver.current_url
        self.assertEqual(url, "https://neets.netlify.app/error")

    def test_error_url(self):
        original_url = "https://neets.netlify.app/"
        repetitions = random.randint(2, 9)
        result = ""
        i = 0
        while i < repetitions:
            char_type = random.randint(0, 3)

            if char_type == 0:
                select = random.randint(97, 122)
                low = chr(select)
                result += low
            elif char_type == 1:
                select = random.randint(65, 90)
                upp = chr(select)
                result += upp
            elif char_type == 2:
                select = random.randint(48, 57)
                num = chr(select)
                result += num
            else:
                select = random.randint(0, 2)
                lis = ["-", "_", "~"]
                sp_char = lis[select]
                result += sp_char

            i += 1

        original_url += result
        driver.get(original_url)
        error_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/img")
        self.assertTrue(error_icon.is_displayed())


if __name__ == "__main__":
    unittest.main()
