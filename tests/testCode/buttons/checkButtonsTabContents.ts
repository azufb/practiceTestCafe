import { Selector, t } from "testcafe";

export const checkButtonsTabContents = async (screenshotPathName: string) => {
    const navTabs = await Selector('#root').find('div').nth(2);
    const buttonsTab = navTabs.child('a').nth(2);

    // 3つめのタブをクリックしてページ遷移する
    await t.click(buttonsTab);

    // 表示されているコンテンツのタイトルがThis is Buttons!になっているか確認
    const pageTitle = await Selector('#root').find('div').nth(2).nextSibling(0).child('h1').innerText;
    await t.expect(pageTitle).eql('This is Buttons!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}