import * as express from 'express';
import * as url from "url";

class App {
  public express;

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => { 
      let parsedUrl= url.parse(req.url,true);
      res.json({
        message: 'Hello '+parsedUrl.query['name']+' !'
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;