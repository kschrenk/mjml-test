const mjml2html = require('mjml');
const fs = require('fs');

fs.readFile('./templates/index.mjml', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const htmlOutput = mjml2html(data, {})

  console.log(htmlOutput)
});

