import { createScreenshotDirectory } from './util/createScreenshotDirectory';
import { checkButtonsTabContents } from './testCode/buttons/checkButtonsTabContents';
import { checkShowModal } from './testCode/buttons/checkShowModal';
import { checkDisappearedModal } from './testCode/buttons/checkDisappearedModal';

const fixtureName: string = 'TestCaféでE2Eテスト!~Buttonsタブ~';
const pageUrl: string = 'https://practice-test-cafe.vercel.app/';
const today = new Date();

fixture`${fixtureName}`.page`${pageUrl}`;

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