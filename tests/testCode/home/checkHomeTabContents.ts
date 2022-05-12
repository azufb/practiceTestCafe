import { Selector } from "testcafe";

export const checkHomeTabContents = async (t: TestController, screenshotPathName: string) => {
    // タブの名前がHomeになっているか確認
    const navTabs = Selector('#root').find('div').nth(2);
    const homeTab = navTabs.child('a').nth(0);
    await t.expect(homeTab.innerText).eql('Home');

    // タブがアクティブの場合の背景色になっているか確認
    await t.expect(homeTab.getStyleProperty('background-color')).eql('rgb(12, 185, 129)');

    // 表示されているコンテンツのタイトルがThis is Home!になっているか確認
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0);
    const pageTitle = pageContents.child('h1').innerText;
    await t.expect(pageTitle).eql('This is Home!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
};