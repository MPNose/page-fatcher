//two command line arguments - process.argv
//url, filepath
// print message stating file size and where it saved it

// need error, response, body for needle parameters
const needle = require('needle');
const fs = require('node:fs');
const url = process.argv[2];
const place = process.argv[3];


needle.get(url, (error, response, body) => {
  if (error) {
    throw error;
  }
  setTimeout(() => {
    fs.writeFile(place, body, (err) => {
      if (err) {
        throw err;
      }
    });
    setTimeout(() => {
      fs.stat(place, (err, stats) => {
        console.log(`Downloaded and saved ${stats.size} bytes to ${place}`);
        })  
      }, 3000)
      }, 2000)
    });

  






