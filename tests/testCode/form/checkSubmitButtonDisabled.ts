import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkSubmitButtonDisabled = async (t: TestController, screenshotPathName: string) => {
    // 2つめのタブをクリックしてページ遷移する
    const formTab = findTab(1);
    await t.click(formTab);

    // 2つめのタブをクリックしてページ遷移する
    await t.click(formTab);

    // Submitボタンが無効状態になっているか確認
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0);
    const form = pageContents.child('form');
    const submitBtn = form.find('input').nth(-1);
    await t.expect(submitBtn.hasAttribute('disabled')).ok();

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}