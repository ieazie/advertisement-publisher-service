import { expect, Logger } from "../../deps.ts";
import Service from "./service.ts";

Deno.test('service base class should have a "logger"', () => {
  const logger = new Logger();
  const service = new Service(logger);
  expect(service.logger).toEqual(logger);
});
