export const TKTD_400: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 999-400:",
    value: "Tong400",
  },
  {
    name: "Thông điệp nhận 999-300:",
    value: "Tong999",
  },
  {
    name: "Thông điệp nhận 204-400:",
    value: "Tong204",
  },
];

export const THIEU_DU_400: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp 400 thiếu MLTDiep - 204",
    value: "TD400_204",
  },
  {
    name: "Thông điệp 400 thiếu MLTDiep - 999:",
    value: "TD400_999",
  },
];

export type DataType400 = {
  key: string;
  ca2_tksl: {
    Tong400: number;
    Tong999: number;
    Tong204: number;
  };
  ca2_thieu_du: {
    TD400_204: {
      length: number;
      data: any[];
    };
    TD400_999: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong400: number;
    Tong999: number;
    Tong204: number;
  };
  logigo_thieu_du: {
    TD400_204: {
      length: number;
      data: any[];
    };
    TD400_999: {
      length: number;
      data: any[];
    };
  };
};
