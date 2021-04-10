
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


class HomeImageTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/")
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

    def test_images_icons(self):
        main_neets_icon = driver.find_element(By.XPATH, "// *[ @ id = 'root'] / nav / div / div[1] / a")
        self.assertTrue(main_neets_icon.is_displayed())
        github_icon = driver.find_element(By.XPATH, "// *[ @ id = 'root'] / nav / div / ul / a")
        self.assertTrue(github_icon.is_displayed())
        footer_github_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[1]")
        self.assertTrue(footer_github_icon.is_displayed())
        footer_linkedin_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[2]")
        self.assertTrue(footer_linkedin_icon.is_displayed())
        footer_youtube_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[3]")
        self.assertTrue(footer_youtube_icon.is_displayed())
        footer_twitter_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[4]")
        self.assertTrue(footer_twitter_icon.is_displayed())
        footer_facebook_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[5]")
        self.assertTrue(footer_facebook_icon.is_displayed())


if __name__ == "__main__":
    unittest.main()

