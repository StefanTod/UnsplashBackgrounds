import Unsplash from 'unsplash-js';
import dotEnv from 'dotenv';

dotEnv.config({
  path: './secrets/.env',
});

// Instantiating the Unsplash Client
const unsplashClient = new Unsplash({
  applicationId: process.env.UNSPLASH_APP_ID,
  secret: process.env.UNSPLASH_SECRET,
  // callbackUrl: process.env.UNSPLASH.CALLBACK_URL
});

// Interface for the unsplash API Wrapper
class UnsplashInterface {
    static async searchPhotos(keyword){
      console.log(unsplashClient);
      unsplashClient.search.photos(keyword, 1)
        .then(toJson)
        .then(json => {
          console.log('JSon', json);
        });
    }
}

export default UnsplashInterface;