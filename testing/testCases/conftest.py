import time

import pytest
import webdriver_manager
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.webdriver import WebDriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait
@pytest.fixture(autouse=True)
def setup(request):
    opt=Options()
    opt.headless=True

    options = webdriver.ChromeOptions()
    opt.add_argument("--headless")
    opt.add_argument("--disable-xss-auditor")
    opt.add_argument("--disable-web-security")
    opt.add_argument("--allow-running-insecure-content")
    opt.add_argument("--no-sandbox")
    opt.add_argument("--disable-setuid-sandbox")
    opt.add_argument("--disable-webgl")
    opt.add_argument("--disable-popup-blocking")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=opt)
    #driver = webdriver.Chrome(ChromeDriverManager().install(),options=opt)
#service_obj = Service(executable_path="ChromeDriverManager().install()", options=opt)
#driver = webdriver.Chrome(service=service_obj)

    driver.get("https://testfe.karmaalab.net/")
    driver.maximize_window()
    driver.get_screenshot_as_file("screenshot.png")
    print(driver.title)
    request.cls.driver = driver
    yield
    driver.close()




