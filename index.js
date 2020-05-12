const runCmd = require('node-run-cmd');


const runNpxCmd = (cmd) => {
	const cmdToRun = `npx ${ cmd }`;

  return runShellCmd(cmdToRun);
};


const runShellCmd = (cmd) => {
	return runCmd.run(cmd, {
    verbose: true,
    shell: true,
  });

};

const run = () => {
	runNpxCmd(`versions patch -m "release" -p`)
		.then(() => runShellCmd(`git push`))
		.then(() => runShellCmd(`git push origin --tags`))
		.then(() => console.info(`Success`))
		.catch(() => console.error(`Error: ${error}`));
};

run();