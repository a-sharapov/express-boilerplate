import bodyParser from "body-parser";
import request from "supertest";
import express, { RequestHandler } from "express";
import { useExpressServer } from "routing-controllers";
import { ErrorHandler } from "../../src/middlewares";
import { AppController } from "../../src/controllers";
import { AppModel } from "../../src/models";


describe("Test of AppController", () => {
  let server;

  afterEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(async () => {
    server = express();
    server.use(bodyParser.json() as RequestHandler);
    useExpressServer(server, {
      routePrefix: `/api/v1/`,
      controllers: [AppController],
      middlewares: [ErrorHandler],
      defaultErrorHandler: false,
    });
  });

  it("should return answer on .postOne method", async () => {
    const appController = new AppController();
    const body = {
      id: "null",
    }
    const response = await appController.postOne(body as AppModel);

    expect(response).toBeUndefined();
  });

  it("should return answer on .postOne method with validation and server", done => {
    const body = {
      id: "null",
    }
    request(server)
      .post("/api/v1/")
      .send(body as AppModel)
      .expect(204)
      .end((error, response) => {
        if (error) {
          throw new Error(error);
        }
        if (response) {
          done();
        }
      });
  
  });
})