"""
Test
    - check quantity changes
    - check that price matches
    - check that icons load in the modal
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class CartOrdersTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/cart")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_quantity_change(self):
        orange_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[1]/div[2]/button[1]")
        orange_decrease_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[1]/div[2]/button[2]")
        driver.execute_script("arguments[0].click();", orange_increase_button)
        driver.execute_script("arguments[0].click();", orange_increase_button)
        orange_quantity = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[1]/div[2]/p")
        self.assertEqual("2 pounds", orange_quantity.text)
        driver.execute_script("arguments[0].click();", orange_decrease_button)
        self.assertEqual("1 pounds", orange_quantity.text)

        blueberry_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[2]/div[2]/button[1]")
        blueberry_decrease_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[2]/div[2]/button[2]")
        driver.execute_script("arguments[0].click();", blueberry_increase_button)
        driver.execute_script("arguments[0].click();", blueberry_increase_button)
        blueberry_quantity = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[2]/div[2]/p")
        self.assertEqual("2 pounds", blueberry_quantity.text)
        driver.execute_script("arguments[0].click();", blueberry_decrease_button)
        self.assertEqual("1 pounds", blueberry_quantity.text)

        dragonfruit_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[3]/div[2]/div/button[1]")
        dragonfruit_decrease_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[3]/div[2]/div/button[2]")
        driver.execute_script("arguments[0].click();", dragonfruit_increase_button)
        driver.execute_script("arguments[0].click();", dragonfruit_increase_button)
        dragonfruit_quantity = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[3]/div[2]/div/p")
        self.assertEqual("2 pounds", dragonfruit_quantity.text)
        driver.execute_script("arguments[0].click();", dragonfruit_decrease_button)
        self.assertEqual("1 pounds", dragonfruit_quantity.text)

        total_price = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[3]/h4[2]")
        self.assertEqual("$ 17", total_price.text)

        clear_cart = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[4]")
        driver.execute_script("arguments[0].click();", clear_cart)
        self.assertEqual("0 pounds", orange_quantity.text)
        self.assertEqual("0 pounds", blueberry_quantity.text)
        self.assertEqual("0 pounds", dragonfruit_quantity.text)

    def test_order_modal(self):
        place_order = driver.find_element(By.XPATH, "//*[@id='myBtn']")
        driver.execute_script("arguments[0].click();", place_order)
        empty_order = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div")
        self.assertEqual(empty_order.text, "Try ordering one of our products!")
        close_modal = driver.find_element(By.XPATH, "//*[@id='myModal']/div/span")
        driver.execute_script("arguments[0].click();", close_modal)

        orange_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[1]/div[2]/button[1]")
        orange_decrease_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[1]/div[2]/button[2]")
        blueberry_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[2]/div[2]/button[1]")
        blueberry_decrease_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[2]/div[2]/button[2]")
        dragonfruit_increase_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[3]/div[2]/div/button[1]")
        dragonfruit_decrease_button = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[2]/div[3]/div[2]/div/button[2]")

        # order only oranges
        driver.execute_script("arguments[0].click();", orange_increase_button)
        driver.execute_script("arguments[0].click();", place_order)
        orange_icon = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div/img")
        time.sleep(0.3)
        self.assertTrue(orange_icon.is_displayed())
        driver.execute_script("arguments[0].click();", close_modal)
        driver.execute_script("arguments[0].click();", orange_decrease_button)

        # order only blueberries
        driver.execute_script("arguments[0].click();", blueberry_increase_button)
        driver.execute_script("arguments[0].click();", place_order)
        blueberry_icon = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div/img")
        time.sleep(0.3)
        self.assertTrue(blueberry_icon.is_displayed())
        driver.execute_script("arguments[0].click();", close_modal)
        driver.execute_script("arguments[0].click();", blueberry_decrease_button)

        # order only dragon fruit
        driver.execute_script("arguments[0].click();", dragonfruit_increase_button)
        driver.execute_script("arguments[0].click();", place_order)
        dragonfruit_icon = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div/img")
        time.sleep(0.3)
        self.assertTrue(dragonfruit_icon.is_displayed())
        driver.execute_script("arguments[0].click();", close_modal)
        driver.execute_script("arguments[0].click();", dragonfruit_decrease_button)

        # order all fruits
        driver.execute_script("arguments[0].click();", orange_increase_button)
        driver.execute_script("arguments[0].click();", blueberry_increase_button)
        driver.execute_script("arguments[0].click();", dragonfruit_increase_button)
        driver.execute_script("arguments[0].click();", place_order)
        orange_icon = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[1]/img")
        blueberry_icon = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[2]/img")
        dragonfruit_icon = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/div[2]/div[3]/img")
        self.assertTrue(orange_icon.is_displayed())
        self.assertTrue(blueberry_icon.is_displayed())
        self.assertTrue(dragonfruit_icon.is_displayed())
        total = driver.find_element(By.XPATH, "//*[@id='myModal']/div/div/p[2]")
        self.assertEqual(total.text, "Your total is $17")
        driver.execute_script("arguments[0].click();", close_modal)
        driver.execute_script("arguments[0].click();", orange_decrease_button)
        driver.execute_script("arguments[0].click();", blueberry_decrease_button)
        driver.execute_script("arguments[0].click();", dragonfruit_decrease_button)


if __name__ == "__main__":
    unittest.main()
