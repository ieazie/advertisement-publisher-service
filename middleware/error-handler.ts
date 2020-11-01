import { Context } from "../deps.ts";

const errorHandler = async (ctx: Context, next: any) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = 500;
    ctx.response.body = { msg: err.message };
  }
};

export default errorHandler;
