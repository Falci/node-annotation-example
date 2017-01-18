/// <reference path="../typings/index" />

import "reflect-metadata";
import * as express from "express";
import { Application } from "express";
import { useExpressServer } from "routing-controllers";

import "./controllers/UserController";

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
    useExpressServer(this.app);
  }
}

export = Server.bootstrap().app;
