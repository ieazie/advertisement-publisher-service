import { ShortUniqueId } from "../deps.ts";

import { IType } from "../interfaces/Advertisement.ts";

class TypeRepository {
  typeList: Array<IType>;

  constructor(typeList: Array<IType>) {
    this.typeList = typeList;
  }
  static makeTypeRepository() {
    const typeRepository = new TypeRepository(this.generateTypeData());
    return typeRepository;
  }

  static generateTypeData(): Array<IType> {
    let typeList: Array<IType> = new Array();
    types.map((type) => {
      typeList.push(type);
    });

    return typeList;
  }
}

export default TypeRepository;

const uid = new ShortUniqueId();

const types = [
  {
    id: uid(),
    name: "Entertainment",
  },
  {
    id: uid(),
    name: "Software",
  },
  {
    id: uid(),
    name: "Politics",
  },
  {
    id: uid(),
    name: "Education",
  },
];
