import time

import pytest
from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.common.by import By

from pageObject.login import Login


@pytest.mark.usefixtures("setup")
class Test:

    def test_login(self):
        time.sleep(3)
        userid = Login(self.driver)
        userid.Userid().send_keys("tuadmin@karmaalab.com")
        password = Login(self.driver)
        password.Password().send_keys("12345678")
        loginbtn = Login(self.driver)
        loginbtn.LoginButton().click()
        time.sleep(4)
        logout = Login(self.driver)
        logout.Logout().click()
