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

  // {
  //   name: "Thông điệp nhận thiếu 102:",
  //   value: "Thieu102",
  // },
  // {
  //   name: "Thông điệp nhận thiếu 999:",
  //   value: "Thieu999",
  // },
];

export const THIEU_DU_100: {
  name: string;
  value: string;
}[] = [
  {
    name: "TĐ 100 trả về -1:",
    value: "TD100_1",
  },
  {
    name: "Thông điệp 100 thiếu MLTDiep-103:",
    value: "Thieu_du_103",
  },
  {
    name: "Thông điệp 100 thiếu MLTDiep-102:",
    value: "Thieu_du_102_103",
  },
  {
    name: "Thông điệp 100 thiếu MLTDiep-999:",
    value: "Thieu_du_102_103_999",
  },
  {
    name: "Lấy thông điệp thừa:",
    value: "TD100_Lay_thua_100",
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
    TD100_Lay_thua_100: {
      length: number;
      data: any[];
    };
    TD100_1: {
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
    TD100_Lay_thua_100: {
      length: number;
      data: any[];
    };
    TD100_1: {
      length: number;
      data: any[];
    };
  };
};

export const initialData100: any = {
  ca2_tksl: {
    Tong100: 0,
    Tong102: 0,
    Tong103: 0,
    Tong999: 0,
    Thieu102: 0,
    Thieu999: 0,
  },
  ca2_thieu_du: {
    Thieu_du_103: {
      length: 0,
      data: [],
    },
    Thieu_du_102_103: {
      length: 0,
      data: [],
    },
    Thieu_du_102_103_999: {
      length: 0,
      data: [],
    },
    TD100_Lay_thua_100: {
      length: 0,
      data: [],
    },
    TD100_1: {
      length: 0,
      data: [],
    },
  },
  logigo_tksl: {
    Tong100: 0,
    Tong102: 0,
    Tong103: 0,
    Tong999: 0,
    Thieu102: 0,
    Thieu999: 0,
  },
  logigo_thieu_du: {
    Thieu_du_103: {
      length: 0,
      data: [],
    },
    Thieu_du_102_103: {
      length: 0,
      data: [],
    },
    Thieu_du_102_103_999: {
      length: 0,
      data: [],
    },
    TD100_Lay_thua_100: {
      length: 0,
      data: [],
    },
    TD100_1: {
      length: 0,
      data: [],
    },
  },
};
