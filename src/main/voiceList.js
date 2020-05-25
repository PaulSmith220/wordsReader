const { exec } = require("child_process");

module.exports = function() {
    return new Promise((resolve) => {
        exec(`say -v '?'`, (error, out, err) => {
                const voices = out.split('\n').map(line => {
                        const [name, code] = line.replace(/\t/g, ' ').replace(/\s{1,}/g, ' ').split(' ');
                       return { name, code };
                });
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