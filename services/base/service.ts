import { Logger } from "../../deps.ts";

class Service {
  constructor(public logger: Logger) {
    this.logger = logger;
  }
}

export default Service;
