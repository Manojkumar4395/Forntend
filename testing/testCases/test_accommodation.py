import time
from lib2to3.pgen2 import driver

import pytest
from selenium import webdriver


from pageObject.accommodation import Acc
from pageObject.login import Login


@pytest.mark.usefixtures("setup")
class Test:

    def test_login(self):
        time.sleep(3)
        signin = Login(self.driver)
        signin.Signin().click()
        userid = Login(self.driver)
        userid.Userid().send_keys("tuadmin@karmaalab.com")
        password = Login(self.driver)
        password.Password().send_keys("12345678")
        loginbtn = Login(self.driver)
        loginbtn.LoginButton().click()
        
class Test2:

    def __init__(self):
        self.driver = driver

    def test_login(self):
        time.sleep(3)
        view = Acc(self.driver)
        view.Addbtn().click()

