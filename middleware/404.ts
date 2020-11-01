import { Context } from "../deps.ts";

const _404 = async (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { msg: "Not Found" };
};

export default _404;
