# 実行コマンド：sh tests/shell/testcafe.sh
echo "TestCafeでE2Eテストをやってみる!"

# シェルスクリプトを以下に記述。
./node_modules/.bin/ts-node  --project ./tsconfig.json tests/runner/runner.ts

exit 0