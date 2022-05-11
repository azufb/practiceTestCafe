import { checkHomeTabContents } from './testCode/home/checkHomeTabContents';
import { checkFormTabContents } from './testCode/form/checkFormTabContents';
import { checkSubmitButtonDisabled } from './testCode/form/checkSubmitButtonDisabled';
import { checkInitialValue } from './testCode/form/checkInitialValue';
import { checkButtonsTabContents } from './testCode/buttons/checkButtonsTabContents';
import { checkShowModal } from './testCode/buttons/checkShowModal';
import { checkDisappearedModal } from './testCode/buttons/checkDisappearedModal';

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
    await checkHomeTabContents(t, screenshotPathName);
});

test('checkFormTabContents', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkFormTabContents.png`;
    await checkFormTabContents(t, screenshotPathName);
});

test('checkSubmitButtonDisabled', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkSubmitButtonDisabled.png`;
    await checkSubmitButtonDisabled(t, screenshotPathName);
});

test('checkInitialValue', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkInitialValue.png`;
    await checkInitialValue(t, screenshotPathName);
});

test('checkButtonsTabContents', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkButtonsTabContents.png`;
    await checkButtonsTabContents(t, screenshotPathName);
});

test('checkShowModal', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkShowModal.png`;
    await checkShowModal(t, screenshotPathName);
});

test('checkDisappearedModal', async (t: TestController) => {
    const screenshotPathName = `${dateDirectoryName}/checkDisappearedModal.png`;
    await checkDisappearedModal(t, screenshotPathName);
});