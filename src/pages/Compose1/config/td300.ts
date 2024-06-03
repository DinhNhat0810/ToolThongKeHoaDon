export const TKTD_300: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 300:",
    value: "Tong300",
  },
  {
    name: "Thông điệp nhận 999-300:",
    value: "Tong999",
  },
  {
    name: "Thông điệp nhận 301-300:",
    value: "Tong301",
  },

  {
    name: "Thông điệp nhận 204:",
    value: "Tong204",
  },
];

export const THIEU_DU_300: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ thiếu 301 hoặc 204:",
    value: "TD300_301_204",
  },
  {
    name: "TĐ thiếu 999 hoặc 204 hoặc 301:",
    value: "TD300_999_204_301",
  },
];

export type DataType300 = {
  key: string;
  ca2_tksl: {
    Tong300: number;
    Tong999: number;
    Tong301: number;
    Tong204: number;
  };
  ca2_thieu_du: {
    TD300_301_204: {
      length: number;
      data: any[];
    };
    TD300_999_204_301: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong300: number;
    Tong999: number;
    Tong301: number;
    Tong204: number;
  };
  logigo_thieu_du: {
    TD300_301_204: {
      length: number;
      data: any[];
    };
    TD300_999_204_301: {
      length: number;
      data: any[];
    };
  };
};
