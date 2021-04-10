
"""
Test
    - check that links on home page redirect to correct page
"""

import unittest
from selenium import webdriver
from selenium.webdriver.common.by import By


PATH = "/Users/issaitorres/Desktop/Python/chromedriver"
driver = webdriver.Chrome(PATH)


class HomeLinksTest(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        driver.get("https://neets.netlify.app/")

    @classmethod
    def tearDownClass(cls):
        driver.quit()

    def test_navbar_links(self):
        neets_icon_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[1]/a")
        neets_icon_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/", url)

        home_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[2]/ul/li[1]/a")
        home_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/", url)

        about_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[2]/ul/li[2]/a")
        about_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/about", url)

        orange_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[2]/ul/li[3]/a")
        orange_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/orange", url)

        blueberry_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[2]/ul/li[4]/a")
        blueberry_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/blueberry", url)

        dragonfruit_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[2]/ul/li[5]/a")
        dragonfruit_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/dragonfruit", url)

        cart_link = driver.find_element(By.XPATH, "//*[@id='root']/nav/div/div[2]/ul/li[6]/a")
        cart_link.click()
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/cart", url)

    def test_external_navbar_github_link(self):
        navbar_github_icon_link = driver.find_element(By.XPATH, "// *[ @ id = 'root'] / nav / div / ul / a")
        navbar_github_icon_link.click()
        handles = driver.window_handles
        driver.switch_to.window(handles[1])
        url = driver.current_url
        self.assertEqual("https://github.com/issaitorres/Portfolio", url)
        driver.close()
        driver.switch_to.window(handles[0])

    def test_fruit_links(self):
        cart_url = "https://neets.netlify.app/cart"

        orange_learn_more_link = driver.find_element(By.XPATH, "//*[@id='root']/main/div[2]/section/div[2]/a[1]")
        driver.execute_script("arguments[0].click();", orange_learn_more_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/orange", url)
        driver.back()

        orange_buy_link = driver.find_element(By.XPATH, "//*[@id='root']/main/div[2]/section/div[2]/a[2]")
        driver.execute_script("arguments[0].click();", orange_buy_link)
        url = driver.current_url
        self.assertEqual(cart_url, url)
        driver.back()

        blueberry_learn_more_link = driver.find_element(By.XPATH, "//*[@id='root']/main/div[3]/section/div[2]/a[1]")
        driver.execute_script("arguments[0].click();", blueberry_learn_more_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/blueberry", url)
        driver.back()

        blueberry_buy_link = driver.find_element(By.XPATH, "//*[@id='root']/main/div[3]/section/div[2]/a[2]")
        driver.execute_script("arguments[0].click();", blueberry_buy_link)
        url = driver.current_url
        self.assertEqual(cart_url, url)
        driver.back()

        dragonfruit_learn_more_link = driver.find_element(By.XPATH, "//*[@id='root']/main/div[4]/section/div[2]/a[1]")
        driver.execute_script("arguments[0].click();", dragonfruit_learn_more_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/dragonfruit", url)
        driver.back()

        dragonfruit_buy_link = driver.find_element(By.XPATH, "//*[@id='root']/main/div[3]/section/div[2]/a[2]")
        driver.execute_script("arguments[0].click();", dragonfruit_buy_link)
        url = driver.current_url
        self.assertEqual(cart_url, url)
        driver.back()

    # the URLs here are capitalized
    def test_footer_page_links(self):

        footer_home_link = driver.find_element(By.XPATH, "//*[@id='root']/section/div[1]/ul[2]/li[2]/a")
        driver.execute_script("arguments[0].click();", footer_home_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/", url)
        driver.back()

        footer_about_link = driver.find_element(By.XPATH, "//*[@id='root']/section/div[1]/ul[2]/li[3]/a")
        driver.execute_script("arguments[0].click();", footer_about_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/About", url)
        driver.back()

        footer_orange_link = driver.find_element(By.XPATH, "//*[@id='root']/section/div[1]/ul[2]/li[4]/a")
        driver.execute_script("arguments[0].click();", footer_orange_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/Orange", url)
        driver.back()

        footer_blueberry_link = driver.find_element(By.XPATH, "//*[@id='root']/section/div[1]/ul[2]/li[5]/a")
        driver.execute_script("arguments[0].click();", footer_blueberry_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/Blueberry", url)
        driver.back()

        footer_dragonfruit_link = driver.find_element(By.XPATH, "//*[@id='root']/section/div[1]/ul[2]/li[6]/a")
        driver.execute_script("arguments[0].click();", footer_dragonfruit_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/Dragonfruit", url)
        driver.back()

        footer_cart_link = driver.find_element(By.XPATH, "//*[@id='root']/section/div[1]/ul[2]/li[7]/a")
        driver.execute_script("arguments[0].click();", footer_cart_link)
        url = driver.current_url
        self.assertEqual("https://neets.netlify.app/Cart", url)
        driver.back()

    def test_external_icon_links(self):
        footer_github_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[1]")
        driver.execute_script("arguments[0].click();", footer_github_icon)
        handles = driver.window_handles
        driver.switch_to.window(handles[1])
        url = driver.current_url
        self.assertEqual("https://github.com/issaitorres/Portfolio", url)
        driver.close()
        driver.switch_to.window(handles[0])

        footer_linkedin_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[2]")
        driver.execute_script("arguments[0].click();", footer_linkedin_icon)
        handles = driver.window_handles
        driver.switch_to.window(handles[1])
        url = driver.current_url
        self.assertEqual("https://www.linkedin.com/in/issaitorres/", url)
        driver.close()
        driver.switch_to.window(handles[0])

        footer_youtube_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[3]")
        driver.execute_script("arguments[0].click();", footer_youtube_icon)
        handles = driver.window_handles
        driver.switch_to.window(handles[1])
        url = driver.current_url
        self.assertEqual("https://www.youtube.com/", url)
        driver.close()
        driver.switch_to.window(handles[0])

        footer_twitter_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[4]")
        driver.execute_script("arguments[0].click();", footer_twitter_icon)
        handles = driver.window_handles
        driver.switch_to.window(handles[1])
        url = driver.current_url
        self.assertEqual("https://twitter.com/", url)
        driver.close()
        driver.switch_to.window(handles[0])

        footer_facebook_icon = driver.find_element(By.XPATH, "//*[@id='root']/section/div[2]/a[5]")
        driver.execute_script("arguments[0].click();", footer_facebook_icon)
        handles = driver.window_handles
        driver.switch_to.window(handles[1])
        url = driver.current_url
        self.assertEqual("https://www.facebook.com/", url)
        driver.close()
        driver.switch_to.window(handles[0])


if __name__ == "__main__":
    unittest.main()
