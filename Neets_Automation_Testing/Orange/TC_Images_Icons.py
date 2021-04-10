
"""
Test
    - check that images and icons on home page load
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class OrangeImageTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/orange")


    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_images_load(self):
        title_image = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/div/img")
        self.assertTrue(title_image.is_displayed())

        farmer_corner_image_1 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[3]/div[1]/div[2]/img")
        self.assertTrue(farmer_corner_image_1.is_displayed())

        farmer_corner_image_2 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[3]/div[2]/div[2]/img")
        self.assertTrue(farmer_corner_image_2.is_displayed())

        critic_review_image_1 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[2]/div/div[1]/img")
        self.assertTrue(critic_review_image_1.is_displayed())

        critic_review_image_2 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[3]/div/div[1]/img")
        self.assertTrue(critic_review_image_2.is_displayed())



    def test_icons_load(self):
        timeline_icon_1 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[2]/div/div[1]/div/img")
        self.assertTrue(timeline_icon_1.is_displayed())

        timeline_icon_2 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[2]/div/div[2]/div/img")
        self.assertTrue(timeline_icon_2.is_displayed())

        timeline_icon_3 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[2]/div/div[3]/div/img")
        self.assertTrue(timeline_icon_3.is_displayed())

        timeline_icon_4 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[2]/div/div[4]/div/img")
        self.assertTrue(timeline_icon_4.is_displayed())

        timeline_icon_5 = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[2]/div/div[5]/div/img")
        self.assertTrue(timeline_icon_5.is_displayed())


if __name__ == "__main__":
    unittest.main()

