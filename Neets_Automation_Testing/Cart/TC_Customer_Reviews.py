"""
Test
    - check that it switches every 7 seconds
    - check that clicking on arrows works
    - check that spamming arrows doesn't break anything
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class CartCustomerReviewsTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/cart")

    @classmethod
    def tearDownClass(cls):
        cls.verificationErrors = []
        driver.quit()

    # we need a time wait since the slides change every couple seconds
    # we want to grab in the order that it will be displayed, article[1], article[2], ... article[5]
    def test_customer_reviews_loop(self):
        for article_number in range(1, 6):
            customer_name = \
                driver.find_element(By.XPATH,
                    f"//*[@id='root']/section[1]/div/div[7]/div[2]/article[{str(article_number)}]/div/div[1]/div/h4")
            # need to save name because comparing it at the end won't work because value is lost
            name = customer_name.text
            time.sleep(5)
            next_article_number = article_number + 1
            if next_article_number > 5:
                next_article_number = 1
            new_customer_name = \
                driver.find_element(By.XPATH,
                                    f"//*[@id='root']/section[1]/div/div[7]/div[2]/article[{str(next_article_number)}]/div/div[1]/div/h4")
            self.assertNotEqual(article_number, next_article_number)
            self.assertNotEqual(customer_name.text, new_customer_name.text)

    def test_customer_reviews_arrows(self):
        next_arrow = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[7]/div[2]/div/button[2]")
        customer_name = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[7]/div[2]/article[1]/div/div[1]/div/h4")
        name = customer_name.text
        driver.execute_script("arguments[0].click();", next_arrow)
        # account for the transition time
        time.sleep(1)
        new_customer_name = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[7]/div[2]/article[2]/div/div[1]/div/h4")
        new_name = new_customer_name.text
        self.assertNotEqual(name, new_name)

        previous_arrow = driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[7]/div[2]/div/button[1]")
        driver.execute_script("arguments[0].click();", previous_arrow)
        customer_name = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[7]/div[2]/article[2]/div/div[1]/div/h4")
        name = customer_name.text
        time.sleep(1)
        new_customer_name = \
            driver.find_element(By.XPATH, "//*[@id='root']/section[1]/div/div[7]/div[2]/article[1]/div/div[1]/div/h4")
        new_name = new_customer_name.text
        self.assertNotEqual(name, new_name)


if __name__ == "__main__":
    unittest.main()
