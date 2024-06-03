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
    name: "TĐ thiếu 204-400:",
    value: "TD400_204",
  },
  {
    name: "TĐ thiếu 999-400:",
    value: "TD400_999",
  },
  {
    name: "TĐ thừa 204-400:",
    value: "TD400_204_Thua",
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
    TD400_204_Thua: {
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
    TD400_204_Thua: {
      length: number;
      data: any[];
    };
  };
};
