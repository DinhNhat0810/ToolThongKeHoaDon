export const TKTD_203: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 203:",
    value: "Tong203",
  },
  {
    name: "Thông điệp nhận 204-203:",
    value: "Tong204",
  },
  {
    name: "Thông điệp nhận: 999-203:",
    value: "Tong999",
  },
];

export const THIEU_DU_203: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp 203 thừa:",
    value: "TD203_Thua",
  },
  {
    name: "Check TĐ thiếu 203:",
    value: "TD203_Thieu",
  },
];

export type DataType203 = {
  key: string;
  ca2_tksl: {
    Tong200: number;
    Tong999: number;
    Tong202: number;
  };
  ca2_thieu_du: {
    TD200_1: {
      length: number;
      data: any[];
    };
    TD200_202_204: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong200: number;
    Tong999: number;
    Tong202: number;
  };
  logigo_thieu_du: {
    TD200_1: {
      length: number;
      data: any[];
    };
    TD200_202_204: {
      length: number;
      data: any[];
    };
  };
};
