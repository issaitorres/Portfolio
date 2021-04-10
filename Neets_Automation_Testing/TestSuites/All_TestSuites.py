"""

Here we will run the test cases from Neets

"""

import unittest
from Selenium.Neets.Home_General.TC_Images_Icons import HomeImageTest
from Selenium.Neets.Home_General.TC_Links import HomeLinksTest
from Selenium.Neets.Home_General.TC_Error import HomeErrorTest
from Selenium.Neets.About.TC_Images_Icons import AboutImageTest
from Selenium.Neets.About.TC_Grid import AboutGridTest
from Selenium.Neets.About.TC_Email import AboutEmailTest
from Selenium.Neets.Orange.TC_Images_Icons import OrangeImageTest
from Selenium.Neets.Orange.TC_Links import OrangeLinksTest
from Selenium.Neets.Blueberry.TC_Images_Icons import BlueberryImageTest
from Selenium.Neets.Blueberry.TC_Links import BlueberryLinksTest
from Selenium.Neets.Blueberry.TC_Modal import BlueberryModalTest
from Selenium.Neets.Dragon_fruit.TC_Images_Icon import DragonfruitImageTest
from Selenium.Neets.Dragon_fruit.TC_Links import DragonfruitLinksTest
from Selenium.Neets.Cart.TC_Images_Icons import CartImageTest
from Selenium.Neets.Cart.TC_Customer_Reviews import CartCustomerReviewsTest
from Selenium.Neets.Cart.TC_Order import CartOrdersTest

# get all test methods from each test case
tc1 = unittest.TestLoader().loadTestsFromTestCase(HomeImageTest)
tc2 = unittest.TestLoader().loadTestsFromTestCase(HomeLinksTest)
tc3 = unittest.TestLoader().loadTestsFromTestCase(HomeErrorTest)
tc4 = unittest.TestLoader().loadTestsFromTestCase(AboutImageTest)
tc5 = unittest.TestLoader().loadTestsFromTestCase(AboutGridTest)
tc6 = unittest.TestLoader().loadTestsFromTestCase(AboutEmailTest)
tc7 = unittest.TestLoader().loadTestsFromTestCase(OrangeImageTest)
tc8 = unittest.TestLoader().loadTestsFromTestCase(OrangeLinksTest)
tc9 = unittest.TestLoader().loadTestsFromTestCase(BlueberryImageTest)
tc10 = unittest.TestLoader().loadTestsFromTestCase(BlueberryLinksTest)
tc11 = unittest.TestLoader().loadTestsFromTestCase(BlueberryModalTest)
tc12 = unittest.TestLoader().loadTestsFromTestCase(DragonfruitImageTest)
tc13 = unittest.TestLoader().loadTestsFromTestCase(DragonfruitLinksTest)
tc14 = unittest.TestLoader().loadTestsFromTestCase(CartImageTest)
tc15 = unittest.TestLoader().loadTestsFromTestCase(CartCustomerReviewsTest)
tc16 = unittest.TestLoader().loadTestsFromTestCase(CartOrdersTest)

# create Test Suites

# User Interface Test Suite
UITestSuite = unittest.TestSuite([tc1, tc4, tc7, tc9, tc12, tc14])

# Functional Test Suite
functionalTestSuite = unittest.TestSuite([tc2, tc3, tc5, tc6, tc8, tc10, tc11, tc13, tc15, tc16])


# Master Test Suit
masterTestSuite = unittest.TestSuite([tc1, tc2, tc3, tc4, tc5, tc6, tc7,
                                      tc8, tc9, tc10, tc11, tc12, tc13, tc14, tc15, tc16])

# to run a suite
# unittest.TextTestRunner().run(masterTestSuite)

# to get information about each test
unittest.TextTestRunner(verbosity=2).run(UITestSuite)

