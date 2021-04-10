
"""
Test
    - check that images and icons on home page load
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class BlueberryImageTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/blueberry")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_images_load(self):

        hero_image = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[1]/div")
        self.assertTrue(hero_image.is_displayed())

        product_left_image = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[2]/div/ul/li[1]")
        self.assertTrue(product_left_image.is_displayed())

        user_creation_image_1 = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[3]/div[2]/div/div/div/div[1]/div/img")
        self.assertTrue(user_creation_image_1.is_displayed())

        user_creation_image_2 = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[3]/div[2]/div/div/div/div[2]/div/img")
        self.assertTrue(user_creation_image_2.is_displayed())

        user_creation_image_3 = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[3]/div[2]/div/div/div/div[3]/div/img")
        self.assertTrue(user_creation_image_3.is_displayed())

        user_creation_author_image_1 = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[3]/div[2]/div/div/div/div[1]/div/img")
        self.assertTrue(user_creation_author_image_1.is_displayed())

        user_creation_author_image_2 = \
            driver.find_element(By.XPATH,
                                "//*[@id='root']/section[1]/div[1]/div[3]/div[2]/div/div/div/div[2]/div/div/img")
        self.assertTrue(user_creation_author_image_2.is_displayed())

        user_creation_author_image_3 = \
            driver.find_element(By.XPATH,
                                "//*[@id='root']/section[1]/div[1]/div[3]/div[2]/div/div/div/div[3]/div/div/img")
        self.assertTrue(user_creation_author_image_3.is_displayed())

    def test_icons_load(self):
        customer_satisfaction_icon_1 = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[4]/div[2]/div[1]/img")
        self.assertTrue(customer_satisfaction_icon_1.is_displayed())

        customer_satisfaction_icon_2 = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div[4]/div[2]/div[2]/img")
        self.assertTrue(customer_satisfaction_icon_2.is_displayed())


if __name__ == "__main__":
    unittest.main()

