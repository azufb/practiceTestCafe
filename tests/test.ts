import { checkHomeTabContents } from './testCode/home/checkHomeTabContents';
import { checkButtonsTabContents } from './testCode/buttons/checkButtonsTabContents';

const fixtureName: string = 'Getting Started';
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const dateDirectoryName: string = `${year}-${month}-${date}_${hour}-${minute}-${second}`;

fixture`${fixtureName}`.page`http://localhost:8080`;

test('checkHomeTabContents', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkHomeTabContents.png`;
    await checkHomeTabContents(screenshotPathName);
});

test('checkButtonsTabContents', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkButtonsTabContents.png`;
    await checkButtonsTabContents(screenshotPathName);
});