function copyCode(element) {
    const spans = element.querySelectorAll('span:not(.description)'); // Selects spans excluding the description class
    let code = '';

    spans.forEach(span => {
      code += span.innerText + ' '; // Concatenating the innerText of each span
    });

    navigator.clipboard.writeText(code.trim()) // Removing leading/trailing whitespace
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch(err => {
        console.error('Unable to copy: ', err);
      });
  }
  window.onload = function() {
    const codeSnippets = document.querySelectorAll('.code-snippet');
    codeSnippets.forEach(snippet => {
      snippet.addEventListener('click', function() {
        copyCode(this);
      });
    });
  };
