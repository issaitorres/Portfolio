
"""
Test
    - check that images and icons on home page load
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class AboutImageTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/about")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_images_load(self):
        title_image = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[1]/img")
        self.assertTrue(title_image.is_displayed())
        founder_image = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[2]/img")
        self.assertTrue(founder_image.is_displayed())

    def test_icons_load(self):
        community_icon = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[3]/div/div[2]/div[2]/div[1]/div[1]/img")
        self.assertTrue(community_icon.is_displayed())
        classroom_icon = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[3]/div/div[2]/div[2]/div[2]/div[1]/img")
        self.assertTrue(classroom_icon.is_displayed())
        international_icon = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[3]/div/div[2]/div[2]/div[3]/div[1]/img")
        self.assertTrue(international_icon.is_displayed())

    def test_grid_images_load(self):
        grid_image_0 = driver.find_element(By.XPATH, "//*[@id='0']")
        self.assertTrue(grid_image_0.is_displayed())
        grid_image_1 = driver.find_element(By.XPATH, "//*[@id='1']")
        self.assertTrue(grid_image_1.is_displayed())
        grid_image_2 = driver.find_element(By.XPATH, "//*[@id='2']")
        self.assertTrue(grid_image_2.is_displayed())
        grid_image_3 = driver.find_element(By.XPATH, "//*[@id='3']")
        self.assertTrue(grid_image_3.is_displayed())
        grid_image_4 = driver.find_element(By.XPATH, "//*[@id='4']")
        self.assertTrue(grid_image_4.is_displayed())
        grid_image_5 = driver.find_element(By.XPATH, "//*[@id='5']")
        self.assertTrue(grid_image_5.is_displayed())
        grid_image_6 = driver.find_element(By.XPATH, "//*[@id='6']")
        self.assertTrue(grid_image_6.is_displayed())
        grid_image_7 = driver.find_element(By.XPATH, "//*[@id='7']")
        self.assertTrue(grid_image_7.is_displayed())
        grid_image_8 = driver.find_element(By.XPATH, "//*[@id='8']")
        self.assertTrue(grid_image_8.is_displayed())
        grid_image_9 = driver.find_element(By.XPATH, "//*[@id='9']")
        self.assertTrue(grid_image_9.is_displayed())


if __name__ == "__main__":
    unittest.main()
