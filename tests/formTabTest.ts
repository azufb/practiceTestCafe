import { createScreenshotDirectory } from './util/createScreenshotDirectory';
import { checkFormTabContents } from './testCode/form/checkFormTabContents';
import { checkSubmitButtonDisabled } from './testCode/form/checkSubmitButtonDisabled';
import { checkInitialValue } from './testCode/form/checkInitialValue';
import { typeForm } from './testCode/form/typeForm';
import { checkButtonAvailable } from './testCode/form/checkButtonAvailable';

const fixtureName: string = 'TestCaféでE2Eテスト!~Formタブ~';
const pageUrl: string = 'https://practice-test-cafe.vercel.app/';
const today = new Date();

fixture`${fixtureName}`.page`${pageUrl}`;

test('checkFormTabContents', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkFormTabContents');
    await checkFormTabContents(t, screenshotPathName.singlePathName);
});

test('checkSubmitButtonDisabled', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkSubmitButtonDisabled');
    await checkSubmitButtonDisabled(t, screenshotPathName.singlePathName);
});

test('checkInitialValue', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkInitialValue');
    await checkInitialValue(t, screenshotPathName.pathDirectory);
});

test('typeForm', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'typeForm');
    await typeForm(t, screenshotPathName.pathDirectory);
});

test('checkButtonAvailable', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkButtonAvailable');
    await checkButtonAvailable(t, screenshotPathName.singlePathName);
});