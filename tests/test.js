import { Selector } from "testcafe";

const fixtureName = 'Getting Started';
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const dateDirectoryName = `${year}-${month}-${date}_${hour}-${minute}-${second}`;

fixture`${fixtureName}`.page`http://localhost:8080`;

test('my_first_test', async t => {
    const text = await Selector('h1').innerText;
    await t.expect(text).eql("Test Caféを使ってE2Eテストしてみる!");

    await t.takeScreenshot({
        path: `${dateDirectoryName}/my_first_test.png`,
        fullPage: true
    });
});
