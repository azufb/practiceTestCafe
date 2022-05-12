import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkShowModal = async (t: TestController, screenshotPathName: string) => {
    // 3つめのタブをクリックしてページ遷移する
    const buttonsTab = findTab(2);
    await t.click(buttonsTab);

    // モーダルボタンがあるか確認
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0)
    const modalBtn = pageContents.child('div').child('button').withText('モーダル');
    await t.expect(modalBtn.exists).ok();

    // モーダルボタンをクリック
    await t.click(modalBtn);

    // モーダルが表示されているか確認
    const modal = Selector('.test-modal').child('div');
    const modalText = modal.child('p').innerText;
    await t.expect(modalText).eql('Modalが出現!!');

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}