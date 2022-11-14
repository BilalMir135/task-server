import express from "express";

import { PORT } from "../constants/index";
import Routes from "./routes";

class Express {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express = Routes.mountApi(this.express);
  }

  public init(): any {
    this.express
      .listen(PORT, () => {
        return console.log(`Server is running on 'http://localhost:${PORT}'`);
      })
      .on("error", (_error) => {
        return console.log("Error: ", _error.message);
      });
  }
}

export default new Express();
