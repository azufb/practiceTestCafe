import { createScreenshotDirectory } from './util/createScreenshotDirectory';
import { checkHomeTabContents } from './testCode/home/checkHomeTabContents';

const fixtureName: string = 'TestCaféでE2Eテスト!~Homeタブ~';
const pageUrl: string = 'https://practice-test-cafe.vercel.app/';
const today = new Date();

fixture`${fixtureName}`.page`${pageUrl}`;

test('checkHomeTabContents', async (t: TestController) => {
    const screenshotPathName = createScreenshotDirectory(today, 'checkHomeTabContents');
    await checkHomeTabContents(t, screenshotPathName.singlePathName);
});