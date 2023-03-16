const superTest = require("supertest");
const app = require("../dist/index");
import img from "./test_image.jpg";
import { describe } from "node:test";

  const userMock = {
    img: img,
  };

describe("upload image aws3", () => {

    test("create image aws3", async() => {
      const response = await request(app).post("/v1/image/").send(userMock);
      expect(response.statusCode).toBe(200);
    });

  });