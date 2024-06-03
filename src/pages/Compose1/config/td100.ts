export const TKTD_100: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 100:",
    value: "Tong100",
  },
  {
    name: "Thông điệp nhận 999:",
    value: "Tong999",
  },
  {
    name: "Thông điệp nhận: 102:",
    value: "Tong102",
  },
  {
    name: "Thông điệp nhận 103:",
    value: "Tong103",
  },

  {
    name: "Thông điệp nhận thiếu 102:",
    value: "Thieu102",
  },
  {
    name: "Thông điệp nhận thiếu 999:",
    value: "Thieu999",
  },
];

export const THIEU_DU_100: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp nhận thiếu 103:",
    value: "Thieu_du_103",
  },
  {
    name: "Thông điệp nhận thiếu 102 hoặc 103:",
    value: "Thieu_du_102_103",
  },
  {
    name: "Thông điệp nhận thiếu 102 hoặc 103 hoặc 999:",
    value: "Thieu_du_102_103_999",
  },
];

export type DataType100 = {
  key: string;
  ca2_tksl: {
    Tong100: number;
    Tong102: number;
    Tong103: number;
    Tong999: number;
    Thieu102: number;
    Thieu999: number;
  };
  ca2_thieu_du: {
    Thieu_du_103: {
      length: number;
      data: any[];
    };
    Thieu_du_102_103: {
      length: number;
      data: any[];
    };
    Thieu_du_102_103_999: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong100: number;
    Tong102: number;
    Tong103: number;
    Tong999: number;
    Thieu102: number;
    Thieu999: number;
  };
  logigo_thieu_du: {
    Thieu_du_103: {
      length: number;
      data: any[];
    };
    Thieu_du_102_103: {
      length: number;
      data: any[];
    };
    Thieu_du_102_103_999: {
      length: number;
      data: any[];
    };
  };
};
