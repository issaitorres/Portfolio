
"""
Test
    - check that email works correctly
    - this does work and it's commented so emails aren't constantly being sent
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class AboutEmailTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/about")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_email(self):
        name_form = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[2]/form/div[1]/input")
        email_address_form = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[2]/form/div[2]/input")
        subject_form = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[2]/form/div[3]/input")
        message_form = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[2]/form/div[4]/input")
        send_button = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div[5]/div[2]/form/input")

        name_form.send_keys("hello")
        email_address_form.send_keys("abc@def.com")
        subject_form.send_keys("This is a test!")
        message_form.send_keys("Testing!!!")
        # don't send me emails though lol
        # driver.execute_script("arguments[0].click();", send_button)
        # self.assertEquals(name_form.get_attribute("value"), '')
        # self.assertEquals(email_address_form.get_attribute("value"), '')
        # self.assertEquals(subject_form.get_attribute("value"), '')
        # self.assertEquals(message_form.get_attribute("value"), '')


if __name__ == "__main__":
    unittest.main()
