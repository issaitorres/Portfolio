
"""
Test
    - check that grid works correctly
    - hover on image changes text
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
import time


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class AboutGridTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/about")
        driver.maximize_window()

    @classmethod
    def tearDownClass(cls):
        driver.quit()


    def test_grid_images_hover(self):

        actions = ActionChains(driver)

        for image_number in range(9,-1,-1):
            grid_image = driver.find_element(By.XPATH, f"//*[@id='{str(image_number)}']")

            driver.execute_script("arguments[0].scrollIntoView();", grid_image)
            time.sleep(1)
            actions.move_to_element(grid_image).perform()
            hover_image = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[4]/h4")
            review = [" Loving Every Bite! ",
                      " One With The Fruits! ",
                      " Looking Forward To Eating This When Teeth Come In! ",
                      " My Expression After Eating An Neet'S Orange! ",
                      " Much Taste, Very Orange! ",
                      " Berry By Berry! ",
                      " I Love These! ",
                      " Afternoon Delight! ",
                      " Always Share With Friends! ",
                      " Puts A Smile On My Face! "]
            self.assertEqual(review[image_number], hover_image.text)


if __name__ == "__main__":
    unittest.main()


