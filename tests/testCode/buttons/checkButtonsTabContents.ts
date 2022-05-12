import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkButtonsTabContents = async (t: TestController, pathName: string) => {
    // 3つめのタブをクリックしてページ遷移する
    const buttonsTab = findTab(2);
    await t.click(buttonsTab);

    // 表示されているコンテンツのタイトルがThis is Buttons!になっているか確認
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0);
    const pageTitle = pageContents.child('h1').innerText;
    await t.expect(pageTitle).eql('This is Buttons!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${pathName}`,
        fullPage: true
    });
}