import { Selector } from "testcafe";

export const checkButtonAvailable = async (t: any, screenshotPathName: string) => {
    const navTabs = await Selector('#root').find('div').nth(2);
    const formTab = navTabs.child('a').nth(1);

    // 2つめのタブをクリックしてページ遷移する
    await t.click(formTab);

    // フォームに値を入力する
    const pageContents = await Selector('#root').find('div').nth(2).nextSibling(0);
    const form = await pageContents.child('form');
    const formNames = ['name', 'age', 'dummy1', 'dummy2', 'dummy3'];

    for await (const formName of formNames) {
        let data;
        const inputForm = await form.find(`input[name="${formName}"]`);

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
    const submitBtn = await form.find('input').nth(-1);
    await t.expect(submitBtn.hasAttribute('disabled')).notOk();

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}