const createWordNode = function(word, index, selected = false) {
    return `<div data-num="${index}" data-orig="${word[0]}" data-trans="${word[1]}" class="word-item ${selected && 'selected'}">${word[0]} - ${word[1]}</div>`;
}

export default function(words, lastLine) {
    const list = document.getElementById('lines');
    if (list) {
        list.innerHTML = words.map(
            function(word, index){ 
                return createWordNode(word, index, index === lastLine)}).join('\n')
    }
};
