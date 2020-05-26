const createWordNode = function(word, index, selected = false) {
    return `<div data-num="${index}" data-orig="${word[0]}" data-trans="${word[1]}" class="word-item ${selected && 'selected'}">
    <span>${word[0]}</span><span> - </span><span>${word[1]}</span>
    </div>`;
}

export default function(words, lastLine) {
    const list = document.getElementById('lines');
    if (list) {
        const selectedIndex = typeof lastLine === 'number' ? lastLine : 0;
        list.innerHTML = words.map(
            function(word, index){ 
                return createWordNode(word, index, index === selectedIndex)}).join('\n')
    }
};
