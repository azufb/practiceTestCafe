import { Selector } from "testcafe";

fixture`Getting Started`.page`https://devexpress.github.io/testcafe/example`;

test('my_first_test', async t => {
    await t.expect(Selector('h1').withText('Example').exists).ok();
});
