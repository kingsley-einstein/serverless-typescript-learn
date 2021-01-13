import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import * as mongoose from "mongoose";
import db from "./db";

mongoose.connect("mongodb://localhost:27017/ts_serverless").then(console.log);

export const hello: APIGatewayProxyHandler = async (event, _context) => {
 return {
  statusCode: 200,
  body: JSON.stringify(
   {
    message: "App is running",
    input: event
   },
   null,
   2
  )
 };
};

export const addUser: APIGatewayProxyHandler = async (event, _context) => {
 try {
  const user = await db.users.create({ ...JSON.parse(event.body) });
  return {
   statusCode: 201,
   body: JSON.stringify(
    {
     statusCode: 201,
     response: user
    },
    null,
    2
   )
  };
 } catch (error) {
  return {
   statusCode: 500,
   body: JSON.stringify({
    statusCode: 500,
    response: error.message
   })
  };
 }
};
