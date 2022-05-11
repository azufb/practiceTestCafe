import { Selector } from "testcafe";

export const checkSubmitButtonDisabled = async (t: any, screenshotPathName: string) => {
    const navTabs = await Selector('#root').find('div').nth(2);
    const formTab = navTabs.child('a').nth(1);

    // 2つめのタブをクリックしてページ遷移する
    await t.click(formTab);

    // Submitボタンが無効状態になっているか確認
    const pageContents = await Selector('#root').find('div').nth(2).nextSibling(0);
    const form = await pageContents.child('form');
    const submitBtn = await form.find('input').nth(-1);
    await t.expect(submitBtn.hasAttribute('disabled')).ok();

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}