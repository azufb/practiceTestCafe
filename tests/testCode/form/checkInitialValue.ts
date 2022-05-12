import { Selector } from "testcafe";
import { findTab } from "../common/findTab";

export const checkInitialValue = async (t: TestController, directoryName: string) => {
    // 2つめのタブをクリックしてページ遷移する
    const formTab = findTab(1);
    await t.click(formTab);

    // フォームの初期値を確認
    const pageContents = Selector('#root').find('div').nth(2).nextSibling(0);
    const form = pageContents.child('form');
    const formNames: string[] = ['name', 'age', 'dummy1', 'dummy2', 'dummy3'];
    
    for await (const formName of formNames) {
        let initialValue: string = '';
        const inputForm = form.find(`input[name="${formName}"]`).value;

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

        // スクリーンショット
        await t.takeElementScreenshot(
            form.find(`input[name="${formName}"]`),
            `${directoryName}${formName}.png`,
            {
                crop: {
                    top: 0,
                    left: 0,
                    bottom: -1,
                    right: -1
                }
            }
        )
    }
}