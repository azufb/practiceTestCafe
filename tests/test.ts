import checkHomeTabContents from './testCode/home/checkHomeTabContents';

const fixtureName = 'Getting Started';
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const dateDirectoryName = `${year}-${month}-${date}_${hour}-${minute}-${second}`;

fixture`${fixtureName}`.page`http://localhost:8080`;

test('checkHomeTabContents', async t => {
    const screenshotPathName = `${dateDirectoryName}/checkHomeTabContents.png`;
    await checkHomeTabContents(screenshotPathName);
});
