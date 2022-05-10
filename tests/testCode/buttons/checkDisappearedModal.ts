import { Selector } from "testcafe";

export const checkDisappearedModal = async (t: any, screenshotPathName: string) => {
    const navTabs = await Selector('#root').find('div').nth(2);
    const buttonsTab = navTabs.child('a').nth(2);

    // 3つめのタブをクリックしてページ遷移する
    await t.click(buttonsTab);

    // モーダルボタンがあるか確認
    const buttonsTabContents = await Selector('#root').find('div').nth(2).nextSibling(0)
    const modalBtn = buttonsTabContents.child('div').child('button').withText('モーダル');
    await t.expect(modalBtn.exists).ok();

    // モーダルボタンをクリック
    await t.click(modalBtn);

    // モーダルが表示されているか確認
    const modal = await Selector('.test-modal').child('div');
    const modalText = modal.child('p').innerText;
    await t.expect(modalText).eql('Modalが出現!!');

    // モーダル自体をクリック
    const modalArea = await Selector('.test-modal');
    await t.click(modalArea);

    // モーダルが消えたか確認
    await t.expect(modalArea.exists).notOk();

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}