const search = document.getElementById('search-form');
const quote = document.getElementById('quote-data');
const codeBlock = document.getElementById('code-box');

const updateCode = val => {
    const searchTerm = val;
    const data = code[searchTerm]

    quote.innerText = '';
    quote.innerText = data.snippet;

    codeBlock.textContent = '';
    codeBlock.textContent = data.code.replace('\\', '');

    Prism.highlightElement(codeBlock);
}

search.addEventListener('submit', function (e) {
    e.preventDefault()
    updateCode(this.elements.search.value);
});