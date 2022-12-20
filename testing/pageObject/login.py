from selenium.webdriver.common.by import By


class Login:
    def __init__(self, driver):
        self.driver = driver



    def Userid(self):
        return self.driver.find_element(By.XPATH, "(//input[@id='outlined-size-small'])[1]")

    def Password(self):
        return self.driver.find_element(By.XPATH, "(//input[@type='password'])[1]")

    def LoginButton(self):
        return self.driver.find_element(By.XPATH, "(//button[normalize-space()='Login'])[1]")

    def Logout(self):
        return self.driver.find_element(By.XPATH, "(//span[normalize-space()='Logout'])[1]")
