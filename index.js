const fs = require("fs");

try {
    const environment = process.env.INPUT_ENVIRONMENT;
    const githubEnvironmentFilePath = process.env.GITHUB_ENV;
    const environmentFilePath = ".github/variables/" + environment + ".env";
    if (!fs.existsSync(environmentFilePath)) {
        process.stderr.write(environmentFilePath + " file was not found.");
        process.exitCode = 1;
        return;
    }
    const content = fs.readFileSync(environmentFilePath, "utf8");
    content.split("\n").forEach((line) => {
        if (!line) return;
        fs.appendFileSync(githubEnvironmentFilePath, line + "\n");
        process.stdout.write(
            "Added a new environment variable: " + line + "\n",
        );
    });
} catch (error) {
    process.stderr.write(error.message);
    process.exitCode = 1;
}
