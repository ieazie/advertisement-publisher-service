import ShortUniqueId from "https://cdn.jsdelivr.net/npm/short-unique-id@latest/short_uuid/mod.ts";

import { IChannel } from "../interfaces/Advertisement.ts";

class ChannelRepository {
  channelList: Array<IChannel>;

  constructor(channelList: Array<IChannel>) {
    this.channelList = channelList;
  }
  static makeChannelRepository() {
    const channelRepository = new ChannelRepository(this.generateChannelData());
    return channelRepository;
  }

  static generateChannelData(): Array<IChannel> {
    let channelList: Array<IChannel> = new Array();
    channels.map((channel) => {
      channelList.push(channel);
    });
    return channelList;
  }
}

export default ChannelRepository;

const uid = new ShortUniqueId();

const channels = [
  {
    id: uid(),
    name: "Google",
  },
  {
    id: uid(),
    name: "Instagram",
  },
  {
    id: uid(),
    name: "Facebook",
  },
  {
    id: uid(),
    name: "LinkedIn",
  },
];
