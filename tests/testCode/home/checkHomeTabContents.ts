import { Selector, t } from "testcafe";

const checkHomeTabContents = async (screenshotPathName:string) => {
    const navTabs = await Selector('#root').find('div').nth(3);
    const homeTab = navTabs.child('a').nth(0);
    // タブの名前がHomeになっているか確認
    await t.expect(homeTab.innerText).eql('Home');
    // タブがアクティブの場合の背景色になっているか確認
    await t.expect(homeTab.getStyleProperty('background-color')).eql('rgb(12, 185, 129)');

    const pageTitle = await Selector('#root').find('div').nth(2).nextSibling(0).child('h1').innerText;
    // 表示されているコンテンツのタイトルがThis is Homeになっているか確認
    await t.expect(pageTitle).eql('This is Home!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
};

export default checkHomeTabContents;