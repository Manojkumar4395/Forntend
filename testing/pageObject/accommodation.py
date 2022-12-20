from selenium.webdriver.common.by import By


class Acc:
    def __init__(self, driver):
        self.driver = driver

    def Addbtn(self):
        return self.driver.find_element(By.XPATH, '(//span[@class="appear"])[1]')

    def Addbtn1(self):
        return self.driver.find_element(By.XPATH, '// *[ @ id = "root"] / div / div[2] / div[2] / div / div[1] / div[2] / button')

    def Hotel(self):
        return self.driver.find_element(By.XPATH, "")

    def Website(self):
        return self.driver.find_element(By.XPATH, "")

    def Tent(self):
        return self.driver.find_element(By.XPATH, )

    def PS(self):
        return self.driver.find_element(By.XPATH, )

    def Tree(self):
        return self.driver.find_element(By.XPATH, )

