import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkDisappearedModal = async (t: TestController, screenshotPathName: string) => {
    // 3つめのタブをクリックしてページ遷移する
    const buttonsTab = findTab(2);
    await t.click(buttonsTab);

    // モーダルボタンをクリック
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0)
    const modalBtn = pageContents.child('div').child('button').withText('モーダル');
    await t.click(modalBtn);

    // モーダルが表示されているか確認
    const modal = Selector('.test-modal').child('div');
    const modalText = modal.child('p').innerText;
    await t.expect(modalText).eql('Modalが出現!!');

    // モーダル自体をクリック
    const modalArea = Selector('.test-modal');
    await t.click(modalArea);

    // モーダルが消えたか確認
    await t.expect(modalArea.exists).notOk();

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}