import { Context } from "../deps.ts";

const fourZeroFour = async (ctx: Context) => {
  ctx.response.status = 404;
  ctx.response.body = { msg: "Not Found" };
};

export default fourZeroFour;
