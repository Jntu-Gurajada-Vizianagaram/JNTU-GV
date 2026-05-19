const { execSync } = require("child_process");

const buildTime = new Date().toISOString();
const env = {
  ...process.env,
  REACT_APP_BUILD_TIMESTAMP: buildTime,
  CI: "false",
};

console.log(`Building with REACT_APP_BUILD_TIMESTAMP=${buildTime}`);

try {
  execSync("npx react-scripts build", {
    stdio: "inherit",
    env,
  });
} catch (error) {
  process.exit(error.status || 1);
}
