import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkButtonAvailable = async (t: TestController, screenshotPathName: string) => {
    // 2つめのタブをクリックしてページ遷移する
    const formTab = findTab(1);
    await t.click(formTab);

    // フォームに値を入力する
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0);
    const form = pageContents.child('form');
    const formNames: string[] = ['name', 'age', 'dummy1', 'dummy2', 'dummy3'];

    for await (const formName of formNames) {
        let data: string = '';
        const inputForm = form.find(`input[name="${formName}"]`);

        switch (formName) {
            case 'name':
                data = 'テスト花子';
                break;
            case 'age':
                data = '24';
                break;
            case 'dummy1':
                data = 'Hello World!';
                break;
            case 'dummy2':
                data = 'E2Eテスト';
                break;
            case 'dummy3':
                data = `TestCafe`;
                break;
            default:
                break; 
        }

        await t.typeText(inputForm, data, {replace: true});
    }

    // Submitボタンが有効になっているか確認
    const submitBtn = form.find('input').nth(-1);
    await t.expect(submitBtn.hasAttribute('disabled')).notOk();

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}