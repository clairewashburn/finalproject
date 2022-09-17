import { FinProd } from "./baseBlaze"

const blaze = new FinProd()

test('cart test', async () => {
    await blaze.navigate()
    await blaze.click(blaze.lapcate)
    await blaze.click(blaze.prod)
    await blaze.click(blaze.addct)


    await blaze.click(blaze.cart)
    await blaze.click(blaze.placeorder)
    await blaze.setInput(blaze.name, 'please')
    await blaze.setInput(blaze.count, 'hope')
    await blaze.setInput(blaze.city, 'work')
    await blaze.setInput(blaze.cred, 'oh please')
    await blaze.click(blaze.purch)
    let conf = await blaze.getText(blaze.conf)
    expect(conf).toContain('Thank you')
})


afterAll(async ()  =>{
    await blaze.driver.quit()
})