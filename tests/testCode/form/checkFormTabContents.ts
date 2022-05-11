import { Selector } from "testcafe";

export const checkFormTabContents = async (t: any, screenshotPathName: string) => {
    const navTabs = await Selector('#root').find('div').nth(2);
    const formTab = navTabs.child('a').nth(1);

    // 2つめのタブをクリックしてページ遷移する
    await t.click(formTab);

    // 表示されているコンテンツのタイトルがThis is Form!になっているか確認
    const pageTitle = await Selector('#root').find('div').nth(2).nextSibling(0).child('h1').innerText;
    await t.expect(pageTitle).eql('This is Form!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}