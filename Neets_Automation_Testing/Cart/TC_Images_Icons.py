"""
Test
    - check that images and icons on cart page load
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import requests


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class CartImageTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/cart")

    @classmethod
    def tearDownClass(cls):
        cls.verificationErrors = []
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

    def test_modal_images_load(self):
        orange_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[1]/div[2]/button[1]")
        blueberry_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[2]/div[2]/button[1]")
        dragonfruit_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[3]/div[2]/div/button[1]")
        driver.execute_script("arguments[0].click();", orange_increase_button)
        driver.execute_script("arguments[0].click();", blueberry_increase_button)
        driver.execute_script("arguments[0].click();", dragonfruit_increase_button)
        place_order = driver.find_element(By.XPATH, "//*[@id='myBtn']")
        driver.execute_script("arguments[0].click();", place_order)

        neets_icon = driver.find_element(By.CSS_SELECTOR, "#myModal > div > div > div.cart-icon-container > div > svg")
        self.assertTrue(neets_icon.is_displayed())
        tree_icon = driver.find_element(By.XPATH, "//*[@id='navi']/img[1]")
        self.assertTrue(tree_icon.is_displayed())
        truck_icon = driver.find_element(By.XPATH, "//*[@id='infoi']/img")
        self.assertTrue(truck_icon.is_displayed())
        home_icon = driver.find_element(By.XPATH, "//*[@id='navi']/img[2]")
        self.assertTrue(home_icon.is_displayed())


if __name__ == "__main__":
    unittest.main()
