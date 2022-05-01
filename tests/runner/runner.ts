import createTestCafe from "testcafe";

export const testRunner = async () => {
    const testcafe = await createTestCafe("localhost", 1337, 1338);
    try {
        const runner = testcafe.createRunner();

        const failedCount = await runner.src(["tests/test.js"]).browsers(["chrome"]).run();

        console.log("Tests failed: " + failedCount);
    } finally {
        await testcafe.close();
        process.exit(0);
    }
}

testRunner();
