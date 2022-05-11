import { Selector } from "testcafe";

export const checkInitialValue = async (t: any, screenshotPathName: string) => {
    const navTabs = await Selector('#root').find('div').nth(2);
    const formTab = navTabs.child('a').nth(1);

    // 2つめのタブをクリックしてページ遷移する
    await t.click(formTab);

    // フォームの初期値を確認
    const pageContents = await Selector('#root').find('div').nth(2).nextSibling(0);
    const form = await pageContents.child('form');
    const formNames = ['name', 'age', 'dummy1', 'dummy2', 'dummy3'];
    
    for await (const formName of formNames) {
        let initialValue;
        const inputForm = await form.find(`input[name="${formName}"]`).value;

        switch (formName) {
            case 'name':
                initialValue = '';
                break;
            case 'age':
                initialValue = '0';
                break;
            case 'dummy1':
                initialValue = 'ダミーテキスト1';
                break;
            case 'dummy2':
                initialValue = 'ダミーテキスト2';
                break;
            case 'dummy3':
                initialValue = 'ダミーテキスト3';
                break;
            default:
                break; 
        }

        await t.expect(inputForm).eql(initialValue);
    }

    // スクリーンショット
    await t.takeScreenshot({
        path: `${screenshotPathName}`,
        fullPage: true
    });
}