import { exec } from "child_process";

function readEnglish(word) {
	return new Promise(function(resolve) {
		exec(`say -v Allison "${word}"`, function(error, out, err) {
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
	return new Promise(function(resolve) {
		exec(`say -v Milena "${word}"`, function(error, out, err) {
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
	return new Promise(function(resolve) {setTimeout(resolve, ms)});
}

export default async function(word) {
        await readEnglish(word[0]);
        await delay(500);
        await readRussian(word[1]);
        return true;
}