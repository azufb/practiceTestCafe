export const createScreenshotDirectory = (param: string) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth()+1).toString().padStart(2, '0');
    const date = (today.getDate()).toString().padStart(2, '0');
    const hour = (today.getHours()).toString().padStart(2, '0');
    const minute = (today.getMinutes()).toString().padStart(2, '0');
    const second = (today.getSeconds()).toString().padStart(2, '0');
    const dateDirectoryName: string = `${year}-${month}-${date}_${hour}-${minute}-${second}`;

    const singlePathName = `${dateDirectoryName}/${param}.png`;
    const pathDirectory = `${dateDirectoryName}/${param}/`;

    const directoryData = {
        singlePathName: singlePathName,
        pathDirectory: pathDirectory
    }

    return directoryData
}