const fs = require("fs-extra");
process.env.ENJIN_ENV = process.argv[2];
fs.copySync(`enjin.${process.env.ENJIN_ENV}.ts`, `src/global/environment.ts`);
