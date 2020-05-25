const { exec } = require("child_process");

function readEnglish(word) {
	return new Promise((resolve) => {
		exec(`say -v Allison "${word}"`, (error, out, err) => {
			resolve(word);
			if (error) {
				console.log("error", error.message);
				return;
			}
			if (err) {
				console.log('stderr', err);
				return;
			}
		});
	});
}

function readRussian(word) {
	return new Promise((resolve) => {
		exec(`say -v Milena "${word}"`, (error, out, err) => {
			resolve(word);
			if (error) {
				console.log("error", error.message);
				return;
			}
			if (err) {
				console.log('stderr', err);
				return;
			}
		});
	});
}

function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = async function(word) {
        await readEnglish(word[0]);
        await delay(500);
        await readRussian(word[1]);
        return true;
}