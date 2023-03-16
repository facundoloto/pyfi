// import request from "supertest";
// import app from "./app";
// import { describe, it } from "node:test";


// describe("test password", () => {

//   const userMock = {
//     email: "lotofacundo6@gmail.com",
//     password: "facundo97",
//   };


//   it("create password should return hash", async () => {
//     const response = await request(app).post("/password").send(userMock);
//     expect(response.statusCode).toBe(200);
//   });

//   it("decrypt password", async () => {
//     const response = await request(app).get("/password").send(userMock);
//     expect(response.body).toBe(200);
//   });
// });





// describe("POST /tasks", () => {
//   describe("given a title and description", () => {
//     const newTask = {
//       title: "some title",
//       description: "some description",
//     };

//     // should respond with a 200 code
//     test("should respond with a 200 status code", async () => {
//       const response = await request(app).post("/tasks").send(newTask);
//       expect(response.statusCode).toBe(200);
//     });

//     // should respond a json as a content type
//     test("should have a Content-Type: application/json header", async () => {
//       const response = await request(app).post("/tasks").send(newTask);
//       expect(response.headers["content-type"]).toEqual(
//         expect.stringContaining("json")
//       );
//     });

//     // shoud respond with a json object containing the new task with an id
//     test("should respond with an task ID", async () => {
//       const response = await request(app).post("/tasks").send(newTask);
//       expect(response.body.id).toBeDefined();
//     });
//   });

//   describe("when the title and description is missing", () => {
//     // should respond with a 400 code
//     test("shoud respond with a 400 status code", async () => {
//       const fields = [
//         { title: "some title" },
//         { description: "some description" },
//       ];

//       for (const body of fields) {
//         const response = await request(app).post("/tasks").send(body);
//         expect(response.statusCode).toBe(400);
//       }
//     });
//   });
// });