
"""
Test
    - check that buy link works correctly
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class OrangeLinksTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/orange")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_buy_link(self):
        buy_button = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/a/div/div")
        driver.execute_script("arguments[0].click();", buy_button)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/cart", url)
        driver.back()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/orange", url)


if __name__ == "__main__":
    unittest.main()

