
export default function(voicesList = [], defaultVoices = ['Allison', 'Milena']) {
  const voiceBox1 = document.getElementById('voice1');
  const voiceBox2 = document.getElementById('voice2');

  const groups = voicesList.reduce((res, voice) => {
    res[voice.code] = res[voice.code] || [];
    res[voice.code].push(voice);
    return res;
  }, {});
  console.log(groups);

  const renderGroup = group => group.map(v => `<option name="${v.name}" value="${v.name}">${v.name}</option>`).join('\n');

  const options = Object.keys(groups).sort().map(groupName => {
    const voices = renderGroup(groups[groupName]);
    return `<optgroup label="${groupName}">\n${voices}\n</optgroup>`;
  }).join('\n');

  voiceBox1.innerHTML = options;
  voiceBox2.innerHTML = options;
  voiceBox1.value = defaultVoices[0];
  voiceBox2.value = defaultVoices[1];
}