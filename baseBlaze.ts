import {By} from 'selenium-webdriver'
import {BasePage} from './basePage'

export class FinProd extends BasePage {
    phonecate: By =By.xpath('//*[@id="itemc"]')
    lapcate: By =By.xpath('//*[@id="itemc"]')
    prod: By = By.xpath('/html/body/div[5]/div/div[2]/div/div[1]/div/div/h4/a')
    addct: By =By.xpath('/html/body/div[5]/div/div[2]/div[2]/div/a')
    cart: By =By.id('cartur')
    carttitle: By= By.xpath('/html/body/div[6]/div/div[1]/h2')
    placeorder: By= By.xpath('/html/body/div[6]/div/div[2]/button')
    name: By= By.id('name')
    count: By= By.id('country')
    city: By=By.id('city')
    cred: By=By.id('card')
    month: By=By.id('month')
    year: By=By.id('year')
    purch: By=By.xpath('/html/body/div[3]/div/div/div[3]/button[2]')
    conf: By=By.xpath('/html/body/div[10]/h2')
    home: By=By.id('nava')
    prod2: By=By.xpath('/html/body/div[5]/div/div[2]/div/div[2]/div/div/h4/a')
    del: By=By.xpath('/html/body/div[6]/div/div[1]/div/table/tbody/tr/td[4]/a')



    constructor() {
        super({url: "https://www.demoblaze.com/index.html"})
    }



    

}