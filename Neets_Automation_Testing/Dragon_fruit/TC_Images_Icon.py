
"""
Test
    - check that images and icons on home page load
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import requests

PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class DragonfruitImageTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/dragonfruit")
        cls.verificationErrors = []


    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_images_load(self):
        home_page_images = driver.find_elements(By.TAG_NAME, 'img')
        for image in home_page_images:
            current_link = image.get_attribute("src")
            r = requests.get(current_link)
            try:
                self.assertEqual(r.status_code, 200)
            except AssertionError:
                self.verificationErrors.append(current_link + ' delivered response code of ' + r.status_code)

    def test_icons_load(self):
        heart_health_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[9]/div/div[1]/i")
        self.assertTrue(heart_health_icon)

        check_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[9]/div/div[3]/i")
        self.assertTrue(check_icon)

        gear_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[9]/div/div[5]/i")
        self.assertTrue(gear_icon)

        energy_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[9]/div/div[7]/i")
        self.assertTrue(energy_icon)

        diamond_icon = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[9]/div/div[9]/i")
        self.assertTrue(diamond_icon)


if __name__ == "__main__":
    unittest.main()
