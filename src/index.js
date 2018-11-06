import readline from 'readline';
import UnsplashInterface from './interface.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
  
console.log('Welcome to UnsplashBackgrounds 👋');
console.log('Here you can find some nice Full HD Images 💎');
console.log('Please provide us with a keyword of what kind of images you are searching for.');
console.log('Examples can "Nature", "Mountains", "sea" etc.');

rl.question('What is your preference? Please type it here -> ', (searchTerm) => {
  console.log(`We are busy finding you some nice pictures related to: ${searchTerm}`);
  console.log(callPhotos());
  rl.close();
});
// callPhotos();

function callPhotos(){
  const searchPromise = UnsplashInterface.searchPhotos(); 
  searchPromise.then(response => {
    console.log(response);
  },
  error => {
    console.log(error.message);
  });
}