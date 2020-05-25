const createWordNode = (word, index, selected = false) => 
`<div data-num="${index}" data-orig="${word[0]}" data-trans="${word[1]}" class="word-item ${selected && 'selected'}">${word[0]} - ${word[1]}</div>`;

module.exports = function(words, lastLine) {
    const list = document.getElementById('lines');
    if (list) {
        list.innerHTML = words.map((word, index) => createWordNode(word, index, index === lastLine)).join('\n');
    }
}