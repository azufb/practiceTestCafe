import { Selector } from "testcafe";

export const findTab = (param: number) => {
    const navTabs = Selector('#root').find('div').nth(2);
    const formTab = navTabs.child('a').nth(param);

    return formTab;
}