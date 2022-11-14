import { Request, Response } from "express";

import Databse from "../providers/database";
import ResponseHandler from "../utils/handlers";

class Task {
  public static input(req: Request, res: Response) {
    console.log({ body: req.body });
    return ResponseHandler.success(res);
  }

  public static async output(req: Request, res: Response) {
    await Databse.client.set("test", 10);
    const value = await Databse.client.get("test");
    return ResponseHandler.success(res, value);
  }
}

export default Task;
