/// <reference path="../typings/index" />

import "reflect-metadata";
import * as express from "express";
import { Application } from "express";
import { useExpressServer } from "routing-controllers";

class Server {

  public app: Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
  }

  private config() {
    useExpressServer(this.app, {
      controllers: [__dirname + "/controllers/*.js"]
    });
  }
}

export = Server.bootstrap().app;
