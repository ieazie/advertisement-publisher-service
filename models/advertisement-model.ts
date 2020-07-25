import {
  IAdvertisement,
  IType,
  IChannel,
} from "../interfaces/Advertisement.ts";

class Advertisement implements IAdvertisement {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  type: Array<IType>;
  channel: Array<IChannel>;

  constructor(
    id: string,
    name: string,
    description: string,
    startDate: Date,
    endDate: Date,
    type: Array<IType>,
    channel: Array<IChannel>,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.channel = channel;
  }

  static makeAdvertisement = (serverJson: IAdvertisement) => {
    const {
      id,
      name,
      description,
      startDate,
      endDate,
      type,
      channel,
    } = serverJson;

    const advertisement = new Advertisement(
      id,
      name,
      description,
      startDate,
      endDate,
      type,
      channel,
    );

    return advertisement;
  };

  toJSON(): IAdvertisement {
    return Object.assign({}, this);
  }

  static fromJSON(json: IAdvertisement | string): Advertisement {
    if (typeof json === "string") {
      return JSON.parse(json, Advertisement.reviver);
    } else {
      let advertisement = Object.create(Advertisement.prototype);
      return Object.assign(advertisement, json);
    }
  }

  static reviver(key: string, value: any): any {
    return key === "" ? Advertisement.fromJSON(value) : value;
  }
}

export default Advertisement;
