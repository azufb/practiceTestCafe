import { createScreenshotDirectory } from './util/createScreenshotDirectory';
import { checkHomeTabContents } from './testCode/home/checkHomeTabContents';
import { checkFormTabContents } from './testCode/form/checkFormTabContents';
import { checkSubmitButtonDisabled } from './testCode/form/checkSubmitButtonDisabled';
import { checkInitialValue } from './testCode/form/checkInitialValue';
import { typeForm } from './testCode/form/typeForm';
import { checkButtonAvailable } from './testCode/form/checkButtonAvailable';
import { checkButtonsTabContents } from './testCode/buttons/checkButtonsTabContents';
import { checkShowModal } from './testCode/buttons/checkShowModal';
import { checkDisappearedModal } from './testCode/buttons/checkDisappearedModal';

const fixtureName: string = 'TestCaféでE2Eテスト!';
const pageUrl: string = 'http://localhost:8080';
const today = new Date();

fixture`${fixtureName}`.page`${pageUrl}`;

test('checkHomeTabContents', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkHomeTabContents');
    await checkHomeTabContents(t, screenshotPathName.singlePathName);
});

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

test('checkButtonsTabContents', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkButtonsTabContents');
    await checkButtonsTabContents(t, screenshotPathName.singlePathName);
});

test('checkShowModal', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkShowModal');
    await checkShowModal(t, screenshotPathName.singlePathName);
});

test('checkDisappearedModal', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkDisappearedModal');
    await checkDisappearedModal(t, screenshotPathName.singlePathName);
});