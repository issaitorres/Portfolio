
"""
Test
    - check that modal is working correctly
    - displays images
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class BlueberryModalTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/blueberry")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_modal(self):
        first_modal = driver.find_element(By.XPATH, "//*[@id='0']")
        second_modal = driver.find_element(By.XPATH, "//*[@id='1']")
        third_modal = driver.find_element(By.XPATH, "//*[@id='2']")
        close_modal = driver.find_element(By.XPATH, "//*[@id='myModal']/div/span")

        driver.execute_script("arguments[0].click();", first_modal)
        modal_content_image = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[1]/img")
        modal_content_author = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[2]/img")
        self.assertTrue(modal_content_image.is_displayed())
        self.assertTrue(modal_content_author.is_displayed())
        title = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[1]/h2")
        header_1 = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[1]/h4")
        header_2 = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[2]/h4")
        self.assertEqual(title.text, "Blueberry Ice Cream")
        self.assertEqual(header_1.text, "Ingredients")
        self.assertEqual(header_2.text, "Directions")
        driver.execute_script("arguments[0].click();", close_modal)

        driver.execute_script("arguments[0].click();", second_modal)
        modal_content_image = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[1]/img")
        modal_content_author = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[2]/img")
        self.assertTrue(modal_content_image.is_displayed())
        self.assertTrue(modal_content_author.is_displayed())
        title = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[1]/h2")
        header_1 = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[1]/h4")
        header_2 = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[2]/h4")
        self.assertEqual(title.text, "Blueberry Smoothie")
        self.assertEqual(header_1.text, "Ingredients")
        self.assertEqual(header_2.text, "Directions")
        driver.execute_script("arguments[0].click();", close_modal)

        driver.execute_script("arguments[0].click();", third_modal)
        modal_content_image = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[1]/img")
        modal_content_author = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[2]/img")
        self.assertTrue(modal_content_image.is_displayed())
        self.assertTrue(modal_content_author.is_displayed())
        title = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[1]/div[1]/h2")
        header_1 = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[1]/h4")
        header_2 = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[2]/h4")
        self.assertEqual(title.text, "Blueberry Filled Pie")
        self.assertEqual(header_1.text, "Ingredients")
        self.assertEqual(header_2.text, "Directions")
        driver.execute_script("arguments[0].click();", close_modal)


if __name__ == "__main__":
    unittest.main()

