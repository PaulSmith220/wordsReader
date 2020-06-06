import { exec } from "child_process";

const getVoices = () => new Promise(resolve => exec(
        `say -v '?'`,
        (error, out, err) => {
                if (error) {
                        console.log("error", error.message);
                        return;
                }
                if (err) {
                        console.log('stderr', err);
                        return;
                }

                const voices = out.split('\n').map(line => {
                        const [name, code] = line.replace(/\t/g, ' ').replace(/\s{1,}/g, ' ').split(' ');
                        return { name, code };
                }).filter(v => v && v.code && v.code.indexOf('_') !== -1);
                // @ts-ignore
                voices.sort((a, b) => {
                        if (a.code > b.code) {
                                a.name > b.name ? -1 : 1;
                        } else {
                                return -1;
                        }
                });
                resolve(voices);
        })
);

export default getVoices;
