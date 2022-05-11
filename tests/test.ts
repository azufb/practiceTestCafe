import { checkHomeTabContents } from './testCode/home/checkHomeTabContents';
import { checkFormTabContents } from './testCode/form/checkFormTabContents';
import { checkSubmitButtonDisabled } from './testCode/form/checkSubmitButtonDisabled';
import { checkInitialValue } from './testCode/form/checkInitialValue';
import { typeForm } from './testCode/form/typeForm';
import { checkButtonsTabContents } from './testCode/buttons/checkButtonsTabContents';
import { checkShowModal } from './testCode/buttons/checkShowModal';
import { checkDisappearedModal } from './testCode/buttons/checkDisappearedModal';

const fixtureName: string = 'Getting Started';
const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth()+1).toString().padStart(2, '0');
const date = (today.getDate()).toString().padStart(2, '0');
const hour = (today.getHours()).toString().padStart(2, '0');
const minute = (today.getMinutes()).toString().padStart(2, '0');
const second = (today.getSeconds()).toString().padStart(2, '0');
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
    await checkInitialValue(t, dateDirectoryName);
});

test('typeForm', async (t: TestController) => {
    await typeForm(t, dateDirectoryName);
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