import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let searchTerm;
  
console.log('Welcome to UnsplashBackgrounds 👋');
console.log('Here you can find some nice Full HD Images 💎');
console.log('Please provide us with a keyword of what kind of images you are searching for.');
console.log('Examples can "Nature", "Mountains", "sea" etc.');
rl.question('What is your preference? Please type it here -> ', (answer) => {
  searchTerm = answer;
  console.log(`We are busy finding you some nice pictures related to: ${answer}`);
    
  rl.close();
});