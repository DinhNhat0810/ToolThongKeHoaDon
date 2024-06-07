export const TKTD_200: {
  name: string;
  value: string;
}[] = [
  {
    name: "Thông điệp gửi 200:",
    value: "Tong200",
  },
  {
    name: "Thông điệp nhận 999:",
    value: "Tong999",
  },
  {
    name: "Thông điệp nhận: 202:",
    value: "Tong202",
  },
  {
    name: "Thông điệp nhận 204:",
    value: "Tong204",
  },
  {
    name: "Thông điệp thiếu 202/204-200:",
    value: "Tongthieu",
  },

  {
    name: "Thông điệp thừa 202/204-200:",
    value: "Tongthua",
  },
];

export const THIEU_DU_200: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 200 trả về -1:",
    value: "TD200_1",
  },
  {
    name: "TĐ 200 không có 202 hoặc 204:",
    value: "TD200_202_204",
  },
  {
    name: "Check TĐ không trả về 999:",
    value: "Check_TK_999",
  },
  {
    name: "Check TĐ thiếu 202-200 (không bao gồm TĐ -1):",
    value: "Check_TK_200_202",
  },
  {
    name: "Check TĐ thiếu 999-200 (không bao gồm TĐ -1):",
    value: "Check_TK_200_999",
  },
];

export type DataType200 = {
  key: string;
  ca2_tksl: {
    Tong200: number;
    Tong999: number;
    Tong202: number;
    Tong204: number;
    Tongthieu: number;
    Tongthua: number;
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
    Check_TK_999: {
      length: number;
      data: any[];
    };
    Check_TK_200_202: {
      length: number;
      data: any[];
    };
    Check_TK_200_999: {
      length: number;
      data: any[];
    };
  };
  logigo_tksl: {
    Tong200: number;
    Tong999: number;
    Tong202: number;
    Tong204: number;
    Tongthieu: number;
    Tongthua: number;
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
    Check_TK_999: {
      length: number;
      data: any[];
    };
    Check_TK_200_202: {
      length: number;
      data: any[];
    };
    Check_TK_200_999: {
      length: number;
      data: any[];
    };
  };
};
