import { Selector } from "testcafe";

fixture`Getting Started`.page`http://localhost:8080`;

test('my_first_test', async t => {
    const text = await Selector('h1').innerText;
    console.log(text);
    await t.expect(text).eql("React TypeScript");
});
