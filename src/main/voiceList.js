import { exec } from "child_process";
export default function () {
        return new Promise(function (resolve) {
                exec(`say -v '?'`, function (error, out, err) {
                        const voices = out.split('\n').map(line => {
                                const [name, code] = line.replace(/\t/g, ' ').replace(/\s{1,}/g, ' ').split(' ');
                                return { name, code };
                        }).filter(v => v && v.code && v.code.indexOf('_') !== -1);
                        voices.sort((a, b) => {
                                if (a.code > b.code) {
                                        a.name > b.name ? -1 : 1;
                                } else {
                                        return -1;
                                }
                        })
                        resolve(voices);
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