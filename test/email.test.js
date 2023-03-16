import request from "supertest";
import app from "./app";
import { describe, it } from "node:test";

describe("test send email to users", () => {

    const userMock = {
      email: "lotofacundo6@gmail.com",
    };
  
  
    it("send email welcome", async () => {
      const response = await request(app).post("/email/welcome").send(userMock.email);
      expect(response.statusCode).toBe(200);
    });
  
});
  