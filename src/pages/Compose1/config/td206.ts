export const TKTD_206: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 206:",
    value: "Tong206",
  },
  {
    name: "Thông điệp gửi 999-206:",
    value: "Tongphanhoi999",
  },
  {
    name: "Thông điệp nhận 204-206:",
    value: "Tongphanhoi204",
  },
];

export const THIEU_DU_206: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 206 trả về -1:",
    value: "TD206_1",
  },
  {
    name: "TĐ thiếu 206 (không bao gồm TĐ -1):",
    value: "TD206_Thieu",
  },
];

export type DataType206 = {
  key: string;
  ca2_tksl: {
    Tong206: number;
    Tongphanhoi999: number;
    Tongphanhoi204: number;
  };
  ca2_thieu_du: {
    TD206_1: {
      length: number;
      data: any[];
    };
    TD206_Thieu: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong206: number;
    Tongphanhoi999: number;
    Tongphanhoi204: number;
  };
  logigo_thieu_du: {
    TD206_1: {
      length: number;
      data: any[];
    };
    TD206_Thieu: {
      length: number;
      data: any[];
    };
  };
};
