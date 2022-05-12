import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkFormTabContents = async (t: TestController, pathName: string) => {
    // 2つめのタブをクリックしてページ遷移する
    const formTab = findTab(1);
    await t.click(formTab);

    // 表示されているコンテンツのタイトルがThis is Form!になっているか確認
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0);
    const pageTitle = pageContents.child('h1').innerText;
    await t.expect(pageTitle).eql('This is Form!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${pathName}`,
        fullPage: true
    });
}