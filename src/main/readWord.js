import { exec } from "child_process";

function read(word, voice) {
	return new Promise(function(resolve) {
		exec(`say -v ${voice} -r 150 "${word}"`, function(error, out, err) {
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

export default async function([original, translation, reversed], voices = ['Allison', 'Milena']) {

		const f1 = reversed ? () => read(translation, voices[1]) : () => read(original, voices[0]);
		const f2 = !reversed ? () => read(translation, voices[1]) : () => read(original, voices[0]);
        await f1();
        await delay(500);
        await f2();
        return true;
}