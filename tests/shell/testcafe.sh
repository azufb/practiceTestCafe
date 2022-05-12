# 実行コマンド：sh tests/shell/testcafe.sh
echo "TestCafeでE2Eテストをやってみる!"

# Homeタブ
./node_modules/.bin/ts-node  --project ./tsconfig.json tests/runner/homeTabTestRunner.ts

# Formタブ
./node_modules/.bin/ts-node  --project ./tsconfig.json tests/runner/formTabTestRunner.ts

# Buttonsタブ
./node_modules/.bin/ts-node  --project ./tsconfig.json tests/runner/buttonsTabTestRunner.ts

exit 0