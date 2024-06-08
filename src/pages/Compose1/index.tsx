import {
  Form,
  Table,
  TableProps,
  DatePicker,
  Button,
  notification,
  ConfigProvider,
} from "antd";
import { useMemo, useRef, useState } from "react";
import {
  Laythongdiep100thieu_MLTDiepLOGIGO,
  Laythongdiep200thieu_MLTDiepLOGIGO,
  Laythongdiep203thieu_MLTDiepLOGIGO,
  Laythongdiep206thieu_MLTDiepLOGIGO,
  Laythongdiep300thieu_MLTDiepLOGIGO,
  Laythongdiep400thieu_MLTDiepLOGIGO,
  laydlbaocao100LOGIGO,
  laydlbaocao100_Thieu102LOGIGO,
  laydlbaocao100_Thieu999LOGIGO,
  laydlbaocao200LOGIGO,
  laydlbaocao203LOGIGO,
  laydlbaocao203_ThuaLOGIGO,
  laydlbaocao206LOGIGO,
  laydlbaocao300LOGIGO,
  laydlbaocao400LOGIGO,
  laydlbaocaothongdiep2024_200_Khongco202or204LOGIGO,
  laydlbaocaothongdiep2024_200_Khongco999LOGIGO,
  laydlbaocaothongdiep2024_200_tru1LOGIGO,
  laydlbaocaothongdiep2024_303LOGIGO,
  laydlbaocaothongdiep2024_303_ThieuLOGIGO,
  laydlbaocaothongdiep2024_303_tru1LOGIGO,
  laydlbaocaothongdiepMTT2024_tru1LOGIGO,
} from "../../services/logigo";
import { convertXmlToJson } from "../../libs/common";
import {
  Laythongdiep100thieu_MLTDiepCA2,
  Laythongdiep200thieu_MLTDiepCA2,
  Laythongdiep203thieu_MLTDiepCA2,
  Laythongdiep206thieu_MLTDiepCA2,
  Laythongdiep300thieu_MLTDiepCA2,
  Laythongdiep400thieu_MLTDiepCA2,
  laydlbaocao100CA2,
  laydlbaocao100_Thieu102CA2,
  laydlbaocao100_Thieu999CA2,
  laydlbaocao200CA2,
  laydlbaocao203CA2,
  laydlbaocao203_ThuaCA2,
  laydlbaocao206CA2,
  laydlbaocao300CA2,
  laydlbaocao400CA2,
  laydlbaocaothongdiep2024_200_Khongco202or204CA2,
  laydlbaocaothongdiep2024_200_Khongco999CA2,
  laydlbaocaothongdiep2024_200_tru1CA2,
  laydlbaocaothongdiep2024_303CA2,
  laydlbaocaothongdiep2024_303_ThieuCA2,
  laydlbaocaothongdiep2024_303_tru1CA2,
  laydlbaocaothongdiepMTT2024_tru1CA2,
} from "../../services/ca2";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import moment from "moment";
import ExcelExport from "../../components/ExportExcel";
import dayjs from "dayjs";
import { DataType100, THIEU_DU_100, TKTD_100 } from "./config/td100";
import { DataType200, THIEU_DU_200, TKTD_200 } from "./config/td200";
import { DataType203, THIEU_DU_203, TKTD_203 } from "./config/td203";
import { DataType206, THIEU_DU_206, TKTD_206 } from "./config/td206";
import { DataType300, THIEU_DU_300, TKTD_300 } from "./config/td300";
import { DataType303, THIEU_DU_303, TKTD_303 } from "./config/td303";
import { DataType400, THIEU_DU_400, TKTD_400 } from "./config/td400";
import {
  columnsModal0,
  columnsModal1,
  columnsModal2,
  columnsModal3,
  columnsModal4,
  columnsModal5,
  columnsModal6,
  columnsModal7,
} from "./config/columnsModal";

type CA2_TKTDType = {
  [key: string]: { name: string; value: string }[];
};

const CA2_TKTD: CA2_TKTDType = {
  TD100: TKTD_100,
  TD200: TKTD_200,
  TD203: TKTD_203,
  TD206: TKTD_206,
  TD300: TKTD_300,
  TD303: TKTD_303,
  TD400: TKTD_400,
};

const CA2_THIEU_DU: CA2_TKTDType = {
  TD100: THIEU_DU_100,
  TD200: THIEU_DU_200,
  TD203: THIEU_DU_203,
  TD206: THIEU_DU_206,
  TD300: THIEU_DU_300,
  TD303: THIEU_DU_303,
  TD400: THIEU_DU_400,
};

const inititalData: any[] = [
  {
    key: "100",
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
    },
  },

  {
    key: "200",
    ca2_tksl: {
      Tong200: 0,
      Tong999: 0,
      Tong202: 0,
      Tong204: 0,
      Tongthieu: 0,
      Tongthua: 0,
    },
    ca2_thieu_du: {
      TD200_1: {
        length: 0,
        data: [],
      },
      TD200_202_204: {
        length: 0,
        data: [],
      },
      Check_TK_999: {
        length: 0,
        data: [],
      },
      Check_TK_200_202: {
        length: 0,
        data: [],
      },
      Check_TK_200_999: {
        length: 0,
        data: [],
      },
    },
    logigo_tksl: {
      Tong200: 0,
      Tong999: 0,
      Tong202: 0,
      Tong204: 0,
      Tongthieu: 0,
      Tongthua: 0,
    },
    logigo_thieu_du: {
      TD200_1: {
        length: 0,
        data: [],
      },
      TD200_202_204: {
        length: 0,
        data: [],
      },
      Check_TK_999: {
        length: 0,
        data: [],
      },
      Check_TK_200_202: {
        length: 0,
        data: [],
      },
      Check_TK_200_999: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "203",
    ca2_tksl: {
      Tong203: 0,
      Tong999: 0,
      Tong204: 0,
    },
    ca2_thieu_du: {
      TD203_Thua: {
        length: 0,
        data: [],
      },
      TD203_Thieu_204: {
        length: 0,
        data: [],
      },
      TD203_Thieu_999: {
        length: 0,
        data: [],
      },
    },
    logigo_tksl: {
      Tong203: 0,
      Tong999: 0,
      Tong204: 0,
    },
    logigo_thieu_du: {
      TD203_Thua: {
        length: 0,
        data: [],
      },
      TD203_Thieu_204: {
        length: 0,
        data: [],
      },
      TD203_Thieu_999: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "206",
    ca2_tksl: {
      Tong206: 0,
      Tongphanhoi999: 0,
      Tongphanhoi204: 0,
    },
    ca2_thieu_du: {
      TD206_1: {
        length: 0,
        data: [],
      },
      TD206_Thieu_204: {
        length: 0,
        data: [],
      },
      TD206_Thieu_999: {
        length: 0,
        data: [],
      },
    },
    logigo_tksl: {
      Tong206: 0,
      Tongphanhoi999: 0,
      Tongphanhoi204: 0,
    },
    logigo_thieu_du: {
      TD206_1: {
        length: 0,
        data: [],
      },
      TD206_Thieu_204: {
        length: 0,
        data: [],
      },
      TD206_Thieu_999: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "300",
    ca2_tksl: {
      Tong300: 0,
      Tong999: 0,
      Tong301: 0,
      Tong204: 0,
    },
    ca2_thieu_du: {
      TD300_Thieu_204: {
        length: 0,
        data: [],
      },
      TD300_Thieu_301: {
        length: 0,
        data: [],
      },
      TD300_Thieu_999: {
        length: 0,
        data: [],
      },
    },
    logigo_tksl: {
      Tong300: 0,
      Tong999: 0,
      Tong301: 0,
      Tong204: 0,
    },
    logigo_thieu_du: {
      TD300_Thieu_204: {
        length: 0,
        data: [],
      },
      TD300_Thieu_301: {
        length: 0,
        data: [],
      },
      TD300_Thieu_999: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "303",
    ca2_tksl: {
      Tong303: 0,
      Tongphanhoi999: 0,
      Tongphanhoi204: 0,
      Tongphanhoi301: 0,
    },
    ca2_thieu_du: {
      TD303_1: {
        length: 0,
        data: [],
      },
      TD303_301_204: {
        length: 0,
        data: [],
      },
    },
    logigo_tksl: {
      Tong303: 0,
      Tongphanhoi999: 0,
      Tongphanhoi204: 0,
      Tongphanhoi301: 0,
    },
    logigo_thieu_du: {
      TD303_1: {
        length: 0,
        data: [],
      },
      TD303_301_204: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "400",
    ca2_tksl: {
      Tong400: 0,
      Tong999: 0,
      Tong204: 0,
    },
    ca2_thieu_du: {
      TD400_204: {
        length: 0,
        data: [],
      },
      TD400_999: {
        length: 0,
        data: [],
      },
    },
    logigo_tksl: {
      Tong400: 0,
      Tong999: 0,
      Tong204: 0,
    },
    logigo_thieu_du: {
      TD400_204: {
        length: 0,
        data: [],
      },
      TD400_999: {
        length: 0,
        data: [],
      },
    },
  },
];

type NotificationType = "success" | "info" | "warning" | "error";

const Compose1 = () => {
  const [data, setData] = useState<
    | DataType100[]
    | DataType200[]
    | DataType203[]
    | DataType206[]
    | DataType300[]
    | DataType303[]
    | DataType400[]
  >(inititalData);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [dataExel, setDataExel] = useState<any[]>([{}]);
  const [modelLabel, setModelLabel] = useState("");
  const [api, contextHolder] = notification.useNotification();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const [columnsModal, setColumnsModal] = useState<any[]>([]);
  const [time, setTime] = useState<any>({
    startDate: "",
    endDate: "",
  });

  const timeRef = useRef("");

  const openNotificationWithIcon = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
      duration: 0,
    });
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleOk = () => {
    setOpenModal(false);
  };

  const handleCancel = () => {
    setOpenModal(false);
  };

  const columnMappings: { [key: string]: { [key: string]: any } } = {
    CA2: {
      Thieu_du_103: columnsModal6,
      Thieu_du_102_103: columnsModal6,
      Thieu_du_102_103_999: columnsModal6,

      TD200_1: columnsModal2,
      Check_TK_999: columnsModal6,
      Check_TK_200_202: columnsModal6,
      Check_TK_200_999: columnsModal6,
      TD200_202_204: columnsModal6,

      TD203_Thua: columnsModal3,
      TD203_Thieu_204: columnsModal6,
      TD203_301_204: columnsModal5,
      TD203_Thieu_999: columnsModal6,

      TD206_1: columnsModal2,
      TD206_Thieu_204: columnsModal6,
      TD206_Thieu_999: columnsModal6,

      TD300_Thieu_204: columnsModal6,
      TD300_Thieu_301: columnsModal6,
      TD300_Thieu_999: columnsModal6,

      TD303_1: columnsModal2,
      TD303_301_204: columnsModal5,

      TD400_999: columnsModal6,
      TD400_204: columnsModal6,
    },
    LOGIGO: {
      Thieu_du_103: columnsModal6,
      Thieu_du_102_103: columnsModal6,
      Thieu_du_102_103_999: columnsModal6,

      TD200_1: columnsModal2,
      Check_TK_999: columnsModal1,
      Check_TK_200_202: columnsModal6,
      Check_TK_200_999: columnsModal6,
      TD200_202_204: columnsModal1,

      TD203_Thua: columnsModal3,
      TD203_301_204: columnsModal5,
      TD203_Thieu_204: columnsModal6,
      TD203_Thieu_999: columnsModal6,
      TD206_Thieu_204: columnsModal6,
      TD206_Thieu_999: columnsModal6,
      TD206_1: columnsModal2,

      TD300_Thieu_204: columnsModal6,
      TD300_Thieu_301: columnsModal6,
      TD300_Thieu_999: columnsModal6,

      TD303_1: columnsModal2,
      TD303_301_204: columnsModal5,

      TD400_204: columnsModal6,
      TD400_999: columnsModal6,
    },
  };

  const handleSetDataToTable = (value: string, type: string): void => {
    const columnMapping = columnMappings[type];
    if (columnMapping && columnMapping[value]) {
      setColumnsModal(columnMapping[value]);
    }
  };

  const columns: TableProps<
    | DataType100
    | DataType200
    | DataType203
    | DataType206
    | DataType300
    | DataType303
    | DataType400
  >["columns"] = useMemo(() => {
    return [
      {
        title: "",
        dataIndex: "key",
        rowScope: "rowgroup",
      },
      {
        title: "CA2",
        dataIndex: "ca2",
        children: [
          {
            title: "TKSL",
            dataIndex: "ca2_tksl",
            key: "ca2_tksl",
            render: (_, record) => {
              return (
                <div>
                  {CA2_TKTD["TD" + record?.key]?.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: 2,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{item?.name}</span>
                      <span
                        style={{
                          marginLeft: 10,
                          fontWeight: 500,
                          fontSize: 16,
                          color: "blue",
                        }}
                      >
                        {
                          record.ca2_tksl[
                            item.value as keyof typeof record.ca2_tksl
                          ]
                        }
                      </span>
                    </div>
                  ))}
                </div>
              );
            },
          },
          {
            title: "Thếu đủ",
            dataIndex: "ca2_thieu_du",
            key: "ca2_thieu_du",
            render: (_, record) => {
              return (
                <div>
                  {CA2_THIEU_DU["TD" + record?.key]?.map((item, index) => {
                    const detail: any =
                      record.ca2_thieu_du[
                        item.value as keyof typeof record.ca2_thieu_du
                      ];

                    const dataTableModal = Array.from(detail?.data)?.map(
                      (item: any, index: number) => {
                        return {
                          ...item,
                          key: index + 1,
                          thoigian: moment(item.thoigian).format(
                            "HH:mm:ss DD/MM/YYYY"
                          ),
                        };
                      }
                    );

                    return (
                      <div
                        key={index}
                        style={{
                          marginBottom: 2,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>{item?.name}</span>
                        </div>
                        <div>
                          <span
                            style={{
                              marginLeft: 10,
                              marginRight: 10,
                              fontWeight: 500,
                              fontSize: 16,
                              color: "blue",
                            }}
                          >
                            {detail?.length}
                          </span>

                          {detail?.length > 0 ? (
                            <EyeOutlined
                              style={{
                                fontSize: 20,
                                cursor: "pointer",
                                color: "green",
                              }}
                              onClick={() => {
                                handleSetDataToTable(item.value, "CA2");
                                setModalData(dataTableModal);
                                setDataExel(
                                  dataTableModal?.map((item: any) => {
                                    const result: any = {
                                      ["Số thứ tự"]: item.key.toString(),
                                    };

                                    const fields = [
                                      {
                                        key: "MTDTChieu",
                                        label: "Mã thông điệp tham chiếu",
                                      },
                                      {
                                        key: "MLTDiep",
                                        label: "Mã loại thông điệp",
                                      },
                                      { key: "mtdiep", label: "Mã thông điệp" },
                                      { key: "thoigian", label: "Thời gian" },
                                      { key: "khoaphien", label: "Khoá phiên" },
                                      { key: "IdMessage", label: "IdMessage" },
                                      { key: "Column1", label: "Column1" },
                                      { key: "SL", label: "SL" },
                                      {
                                        key: "TongLoaiTDPhanhoi",
                                        label: "Tổng loại thông điệp phản hồi",
                                      },
                                      {
                                        key: "XMLThongdiep",
                                        label: "XML Thông điệp",
                                      },
                                    ];

                                    fields.forEach((field) => {
                                      if (item[field.key]) {
                                        result[field.label] = item[field.key];
                                      }
                                    });

                                    return result;
                                  })
                                );

                                setModelLabel(
                                  "CA2_" +
                                    item.name +
                                    " " +
                                    detail?.length +
                                    `(${timeRef.current})`
                                );
                                handleOpen();
                              }}
                            />
                          ) : (
                            <EyeInvisibleOutlined
                              style={{
                                fontSize: 20,
                                cursor: "not-allowed",
                                color: "red",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            },
          },
        ],
      },
      {
        title: "Logigo",
        dataIndex: "logigo",
        children: [
          {
            title: "TKSL",
            dataIndex: "logigo_tksl",
            key: "logigo_tksl",
            render: (_, record) => {
              return (
                <div>
                  {CA2_TKTD["TD" + record?.key]?.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        marginBottom: 2,
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>{item?.name}</span>
                      <span
                        style={{
                          marginLeft: 10,
                          fontWeight: 500,
                          fontSize: 16,
                          color: "blue",
                        }}
                      >
                        {
                          record?.logigo_tksl[
                            item.value as keyof typeof record.logigo_tksl
                          ]
                        }
                      </span>
                    </div>
                  ))}
                </div>
              );
            },
          },
          {
            title: "Thếu đủ",
            dataIndex: "logigo_thieu_du",
            key: "logigo_thieu_du",
            render: (_, record) => {
              return (
                <div>
                  {CA2_THIEU_DU["TD" + record?.key]?.map((item, index) => {
                    const detail: any =
                      record.logigo_thieu_du[
                        item.value as keyof typeof record.logigo_thieu_du
                      ];

                    const dataTableModal = Array.from(detail?.data).map(
                      (item: any, index: number) => {
                        return {
                          ...item,
                          key: index + 1,
                          thoigian: dayjs(item.thoigian).format(
                            "HH:mm:ss DD/MM/YYYY"
                          ),
                        };
                      }
                    );

                    return (
                      <div
                        key={index}
                        style={{
                          marginBottom: 2,
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <span>{item?.name}</span>
                        </div>

                        <div>
                          <span
                            style={{
                              marginLeft: 10,
                              marginRight: 10,
                              fontWeight: 500,
                              fontSize: 16,
                              color: "blue",
                            }}
                          >
                            {detail?.length}
                          </span>
                          {detail?.length > 0 ? (
                            <EyeOutlined
                              style={{
                                fontSize: 20,
                                cursor: "pointer",
                                color: "green",
                              }}
                              onClick={() => {
                                handleSetDataToTable(item.value, "LOGIGO");

                                setModalData(dataTableModal);
                                setDataExel(
                                  dataTableModal?.map((item: any) => {
                                    const result: any = {
                                      ["Số thứ tự"]: item.key.toString(),
                                    };

                                    const fields = [
                                      {
                                        key: "MTDTChieu",
                                        label: "Mã thông điệp tham chiếu",
                                      },
                                      {
                                        key: "MLTDiep",
                                        label: "Mã loại thông điệp",
                                      },
                                      { key: "mtdiep", label: "Mã thông điệp" },
                                      { key: "thoigian", label: "Thời gian" },
                                      { key: "khoaphien", label: "Khoá phiên" },
                                      {
                                        key: "XMLThongdiep",
                                        label: "XML Thông điệp",
                                      },
                                      { key: "IdMessage", label: "IdMessage" },
                                      { key: "Column1", label: "Column1" },
                                      { key: "SL", label: "SL" },
                                      {
                                        key: "TongLoaiTDPhanhoi",
                                        label: "Tổng loại thông điệp phản hồi",
                                      },
                                    ];

                                    fields.forEach((field) => {
                                      if (item[field.key]) {
                                        result[field.label] = item[field.key];
                                      }
                                    });

                                    return result;
                                  })
                                );
                                setModelLabel(
                                  "LOGIGO_" +
                                    item.name +
                                    " " +
                                    detail?.length +
                                    `(${timeRef.current})`
                                );
                                handleOpen();
                              }}
                            />
                          ) : (
                            <EyeInvisibleOutlined
                              style={{
                                fontSize: 20,
                                cursor: "not-allowed",
                                color: "red",
                              }}
                            />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            },
          },
        ],
      },
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  //Thông điệp 100
  const getDs100CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao100CA2(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao100Response"][
          "laydlbaocao100Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "100") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong100: DocumentElement.DS["Tong100"],
                Tong102: DocumentElement.DS["Tong102"],
                Tong103: DocumentElement.DS["Tong103"],
                Tong999: DocumentElement.DS["Tong999"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao100CA2"
      );
    }
  };

  const getDs100_thieu102CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao100_Thieu102CA2(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao100_Thieu102Response"
        ]["laydlbaocao100_Thieu102Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                ca2_tksl: {
                  ...item.ca2_tksl,
                  Thieu102: newResult?.length || 0,
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao100_Thieu102CA2"
      );
    }
  };

  const getDs100_thieu999CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao100_Thieu999CA2(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao100_Thieu999Response"
        ]["laydlbaocao100_Thieu999Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "100") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Thieu999: DocumentElement?.DS?.length || 0,
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao100_Thieu999CA2"
      );
    }
  };

  const getthongdiep100thieu_MLTDiep_103CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep100thieu_MLTDiepCA2(
        startDate,
        endDate,
        "103"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep100thieu_MLTDiepResponse"
        ]["Laythongdiep100thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  Thieu_du_103: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep100thieu_MLTDiep_103_CA2"
      );
    }
  };

  const getthongdiep100thieu_MLTDiep_102CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep100thieu_MLTDiepCA2(
        startDate,
        endDate,
        "102"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep100thieu_MLTDiepResponse"
        ]["Laythongdiep100thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  Thieu_du_102_103: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep100thieu_MLTDiep_102_CA2"
      );
    }
  };

  const getthongdiep100thieu_MLTDiep_999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep100thieu_MLTDiepCA2(
        startDate,
        endDate,
        "999"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep100thieu_MLTDiepResponse"
        ]["Laythongdiep100thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  Thieu_du_102_103_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep100thieu_MLTDiep_999_CA2"
      );
    }
  };

  const getDs100LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao100LOGIGO(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao100Response"][
          "laydlbaocao100Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "100") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong100: DocumentElement.DS["Tong100"],
                Tong102: DocumentElement.DS["Tong102"],
                Tong103: DocumentElement.DS["Tong103"],
                Tong999: DocumentElement.DS["Tong999"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao100LOGIGO"
      );
    }
  };

  const getDs100_thieu102LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao100_Thieu102LOGIGO(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao100_Thieu102Response"
        ]["laydlbaocao100_Thieu102Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                logigo_tksl: {
                  ...item.logigo_tksl,
                  Thieu102: newResult?.length,
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao100_Thieu102LOGIGO"
      );
    }
  };

  const getDs100_thieu999LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao100_Thieu999LOGIGO(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao100_Thieu999Response"
        ]["laydlbaocao100_Thieu999Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                logigo_tksl: {
                  ...item.logigo_tksl,
                  Thieu999: newResult?.length,
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao100_Thieu999LOGIGO"
      );
    }
  };

  const getthongdiep100thieu_MLTDiep_103LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep100thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "103"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep100thieu_MLTDiepResponse"
        ]["Laythongdiep100thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  Thieu_du_103: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep100thieu_MLTDiep_103_LOGIGO"
      );
    }
  };

  const getthongdiep100thieu_MLTDiep_102LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep100thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "102"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep100thieu_MLTDiepResponse"
        ]["Laythongdiep100thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  Thieu_du_102_103: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep100thieu_MLTDiep_102_LOGIGO"
      );
    }
  };

  const getthongdiep100thieu_MLTDiep_999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep100thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "999"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep100thieu_MLTDiepResponse"
        ]["Laythongdiep100thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];
      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "100") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  Thieu_du_102_103_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep100thieu_MLTDiep_999_LOGIGO"
      );
    }
  };

  //Thông điệp 200
  const getDs200CA2 = async (startDate: any, endDate: any) => {
    try {
      const data200_1: any = await getthongdiep2024_200_tru1CA2(
        startDate,
        endDate
      );

      const response: any = await laydlbaocao200CA2(startDate, endDate);

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao200Response"][
          "laydlbaocao200Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "200") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong200: DocumentElement.DS["Tong200"] - data200_1,
                Tong999: DocumentElement.DS["Tong999"],
                Tong202: DocumentElement.DS["Tong202"],
                Tong204: DocumentElement.DS["Tong204"],
                Tongthieu: DocumentElement.DS["Tongthieu"],
                Tongthua: DocumentElement.DS["Tongthua"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao200CA2"
      );
    }
  };

  const getDs200LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const data200_1: any = await getthongdiep2024_200_tru1LOGIGO(
        startDate,
        endDate
      );

      const response: any = await laydlbaocao200LOGIGO(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao200Response"][
          "laydlbaocao200Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "200") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong200: DocumentElement.DS["Tong200"] - data200_1,
                Tong999: DocumentElement.DS["Tong999"],
                Tong202: DocumentElement.DS["Tong202"],
                Tong204: DocumentElement.DS["Tong204"],
                Tongthieu: DocumentElement.DS["Tongthieu"],
                Tongthua: DocumentElement.DS["Tongthua"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao200LOGIGO"
      );
    }
  };

  const getthongdiep2024_200_tru1LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_200_tru1LOGIGO(
        startDate,
        endDate
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_200_tru1Response"
        ]["laydlbaocaothongdiep2024_200_tru1Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD200_1: {
                    length: newResult?.length || 0,
                    data: newResult?.map((e: any) => {
                      return {
                        MLTDiep: e?.MLTDiep,
                        thoigian: e?.Thoigian,
                        khoaphien: e?.Khoaphien,
                        MTDTChieu: e?.MTDTChieu,
                        XMLThongdiep: e?.XMLThongdiep,
                      };
                    }),
                  },
                },
              };
            }
            return item;
          });
        });

        return newResult?.length;
      }

      return 0;
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_200_tru1LOGIGO"
      );
    }
  };

  const getthongdiep2024_200_tru1CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_200_tru1CA2(
        startDate,
        endDate
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_200_tru1Response"
        ]["laydlbaocaothongdiep2024_200_tru1Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD200_1: {
                    length: newResult?.length || 0,
                    data: newResult?.map((e: any) => {
                      return {
                        MLTDiep: e?.MLTDiep,
                        thoigian: e?.Thoigian,
                        khoaphien: e?.Khoaphien,
                        MTDTChieu: e?.MTDTChieu,
                        XMLThongdiep: e?.XMLThongdiep,
                      };
                    }),
                  },
                },
              };
            }
            return item;
          });
        });

        return newResult?.length;
      }
      return 0;
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_200_tru1CA2"
      );
    }
  };

  const getthongdiep2024_200_Khongco202or204LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any =
        await laydlbaocaothongdiep2024_200_Khongco202or204LOGIGO(
          startDate,
          endDate
        );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_200_Khongco202or204Response"
        ]["laydlbaocaothongdiep2024_200_Khongco202or204Result"][
          "diffgr:diffgram"
        ]["DocumentElement"];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD200_202_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_200_Khongco202or204LOGIGO"
      );
    }
  };

  const getthongdiep2024_200_Khongco202or204CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any =
        await laydlbaocaothongdiep2024_200_Khongco202or204CA2(
          startDate,
          endDate
        );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_200_Khongco202or204Response"
        ]["laydlbaocaothongdiep2024_200_Khongco202or204Result"][
          "diffgr:diffgram"
        ]["DocumentElement"];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD200_202_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_200_Khongco202or204CA2"
      );
    }
  };

  const getthongdiep2024_200_Khongco999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_200_Khongco999LOGIGO(
        startDate,
        endDate
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_200_Khongco999Response"
        ]["laydlbaocaothongdiep2024_200_Khongco999Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  Check_TK_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_200_Khongco999LOGIGO"
      );
    }
  };

  const getthongdiep2024_200_Khongco999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_200_Khongco999CA2(
        startDate,
        endDate
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_200_Khongco999Response"
        ]["laydlbaocaothongdiep2024_200_Khongco999Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  Check_TK_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_200_Khongco999CA2"
      );
    }
  };

  const getthongdiep200thieu_MLTDiep_202CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep200thieu_MLTDiepCA2(
        startDate,
        endDate,
        "202"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep200thieu_MLTDiepResponse"
        ]["Laythongdiep200thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  Check_TK_200_202: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep200thieu_MTDiepCA2"
      );
    }
  };

  const getthongdiep200thieu_MLTDiep_202LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep200thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "202"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep200thieu_MLTDiepResponse"
        ]["Laythongdiep200thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];
        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  Check_TK_200_202: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep200thieu_MTDiepLOGIGO"
      );
    }
  };

  const getthongdiep200thieu_MLTDiep_999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep200thieu_MLTDiepCA2(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep200thieu_MLTDiepResponse"
        ]["Laythongdiep200thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];
      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  Check_TK_200_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep200thieu_MTDiepCA2"
      );
    }
  };

  const getthongdiep200thieu_MLTDiep_999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep200thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep200thieu_MLTDiepResponse"
        ]["Laythongdiep200thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];
        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "200") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  Check_TK_200_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep200thieu_MTDiepLOGIGO"
      );
    }
  };

  //Thông điệp 203
  const getDs203CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao203CA2(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao203Response"][
          "laydlbaocao203Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "203") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong203: DocumentElement.DS["Tong203"],
                Tong999: DocumentElement.DS["Tong999"],
                Tong204: DocumentElement.DS["Tong204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao203CA2"
      );
    }
  };

  const getDs203LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao203LOGIGO(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao203Response"][
          "laydlbaocao203Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "203") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong203: DocumentElement.DS["Tong203"],
                Tong999: DocumentElement.DS["Tong999"],
                Tong204: DocumentElement.DS["Tong204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao203LOGIGO"
      );
    }
  };

  const getthongdiep203_ThuaCA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao203_ThuaCA2(startDate, endDate);

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao203_ThuaResponse"][
          "laydlbaocao203_ThuaResult"
        ]["diffgr:diffgram"]["DocumentElement"];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "203") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD203_Thua: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mltdiep: e.mltdiep,
                          MTDTChieu: e.MTDTChieu,
                          Column1: e.Column1,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao203_ThuaCA2"
      );
    }
  };

  const getthongdiep203_ThuaLOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao203_ThuaLOGIGO(startDate, endDate);

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao203_ThuaResponse"][
          "laydlbaocao203_ThuaResult"
        ]["diffgr:diffgram"]["DocumentElement"];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "203") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD203_Thua: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mltdiep: e.mltdiep,
                          MTDTChieu: e.MTDTChieu,
                          Column1: e.Column1,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao203_ThuaLOGIGO"
      );
    }
  };

  const getthongdiep203thieu_MLTDiep_204CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep203thieu_MLTDiepCA2(
        startDate,
        endDate,
        "204"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep203thieu_MLTDiepResponse"
        ]["Laythongdiep203thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "203") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD203_Thieu_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep203thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep203thieu_MLTDiep_999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep203thieu_MLTDiepCA2(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep203thieu_MLTDiepResponse"
        ]["Laythongdiep203thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "203") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD203_Thieu_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep203thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep203thieu_MLTDiep_204LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep203thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "204"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep203thieu_MLTDiepResponse"
        ]["Laythongdiep203thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "203") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD203_Thieu_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep203thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getthongdiep203thieu_MLTDiep_999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep203thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep203thieu_MLTDiepResponse"
        ]["Laythongdiep203thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "203") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD203_Thieu_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep203thieu_MLTDiepLOGIGO"
      );
    }
  };

  //Thông điệp 206
  const getDs206LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const data206_1: any = await getthongdiepMTT2024_tru1LOGIGO(
        startDate,
        endDate
      );

      const response: any = await laydlbaocao206LOGIGO(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiepMTT2024Response"
        ]["laydlbaocaothongdiepMTT2024Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "206") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong206: DocumentElement.DSKQ["Tong206"] - data206_1,
                Tongphanhoi999: DocumentElement.DSKQ["Tongphanhoi999"],
                Tongphanhoi204: DocumentElement.DSKQ["Tongphanhoi204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao206LOGIGO"
      );
    }
  };

  const getDs206CA2 = async (startDate: any, endDate: any) => {
    try {
      const data206_1: any = await getthongdiepMTT2024_tru1CA2(
        startDate,
        endDate
      );

      const response: any = await laydlbaocao206CA2(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiepMTT2024Response"
        ]["laydlbaocaothongdiepMTT2024Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "206") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong206: DocumentElement.DSKQ["Tong206"] - data206_1,
                Tongphanhoi999: DocumentElement.DSKQ["Tongphanhoi999"],
                Tongphanhoi204: DocumentElement.DSKQ["Tongphanhoi204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao206CA2"
      );
    }
  };

  const getthongdiepMTT2024_tru1LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiepMTT2024_tru1LOGIGO(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiepMTT2024_tru1Response"
        ]["laydlbaocaothongdiepMTT2024_tru1Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "206") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD206_1: {
                    length: newResult?.length || 0,
                    data: newResult?.map((e: any) => {
                      return {
                        MLTDiep: e?.MLTDiep,
                        thoigian: e?.Thoigian,
                        khoaphien: e?.Khoaphien,
                        MTDTChieu: e?.MTDTChieu,
                        XMLThongdiep: e?.XMLThongdiep,
                      };
                    }),
                  },
                },
              };
            }
            return item;
          });
        });

        return newResult?.length;
      }

      return 0;
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiepMTT2024_tru1LOGIGO"
      );
    }
  };

  const getthongdiepMTT2024_tru1CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocaothongdiepMTT2024_tru1CA2(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiepMTT2024_tru1Response"
        ]["laydlbaocaothongdiepMTT2024_tru1Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "206") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD206_1: {
                    length: newResult?.length || 0,
                    data: newResult?.map((e: any) => {
                      return {
                        MLTDiep: e?.MLTDiep,
                        thoigian: e?.Thoigian,
                        khoaphien: e?.Khoaphien,
                        MTDTChieu: e?.MTDTChieu,
                        XMLThongdiep: e?.XMLThongdiep,
                      };
                    }),
                  },
                },
              };
            }
            return item;
          });
        });

        return newResult?.length;
      }

      return 0;
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiepMTT2024_tru1CA2"
      );
    }
  };

  const getthongdiep206thieu_MLTDiep_204LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep206thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "204"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep206thieu_MLTDiepResponse"
        ]["Laythongdiep206thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "206") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD206_Thieu_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep206thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getthongdiep206thieu_MLTDiep_999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep206thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep206thieu_MLTDiepResponse"
        ]["Laythongdiep206thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "206") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD206_Thieu_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep206thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getthongdiep206thieu_MLTDiep_204CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep206thieu_MLTDiepCA2(
        startDate,
        endDate,
        "204"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep206thieu_MLTDiepResponse"
        ]["Laythongdiep206thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "206") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD206_Thieu_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep206thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep206thieu_MLTDiep_999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep206thieu_MLTDiepCA2(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep206thieu_MLTDiepResponse"
        ]["Laythongdiep206thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "206") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD206_Thieu_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep206thieu_MLTDiepCA2"
      );
    }
  };

  //Thông điệp 300
  const getDs300LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao300LOGIGO(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao300Response"][
          "laydlbaocao300Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "300") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong300: DocumentElement.DS["Tong300"],
                Tong999: DocumentElement.DS["Tong999"],
                Tong301: DocumentElement.DS["Tong301"],
                Tong204: DocumentElement.DS["Tong204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao300LOGIGO"
      );
    }
  };

  const getDs300CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao300CA2(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao300Response"][
          "laydlbaocao300Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "300") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong300: DocumentElement.DS["Tong300"],
                Tong999: DocumentElement.DS["Tong999"],
                Tong301: DocumentElement.DS["Tong301"],
                Tong204: DocumentElement.DS["Tong204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao300CA2"
      );
    }
  };

  const getthongdiep300thieu_MLTDiep_204CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep300thieu_MLTDiepCA2(
        startDate,
        endDate,
        "204"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep300thieu_MLTDiepResponse"
        ]["Laythongdiep300thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "300") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD300_Thieu_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep300thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep300thieu_MLTDiep_204LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep300thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "204"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep300thieu_MLTDiepResponse"
        ]["Laythongdiep300thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "300") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD300_Thieu_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep300thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getthongdiep300thieu_MLTDiep_301CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep300thieu_MLTDiepCA2(
        startDate,
        endDate,
        "301"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep300thieu_MLTDiepResponse"
        ]["Laythongdiep300thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "300") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD300_Thieu_301: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep300thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep300thieu_MLTDiep_301LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep300thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "301"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep300thieu_MLTDiepResponse"
        ]["Laythongdiep300thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "300") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD300_Thieu_301: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep300thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getthongdiep300thieu_MLTDiep_999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep300thieu_MLTDiepCA2(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep300thieu_MLTDiepResponse"
        ]["Laythongdiep300thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "300") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD300_Thieu_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep300thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep300thieu_MLTDiep_999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep300thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "999"
      );

      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep300thieu_MLTDiepResponse"
        ]["Laythongdiep300thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "300") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD300_Thieu_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mtdiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep300thieu_MLTDiepLOGIGO"
      );
    }
  };

  //Thông điệp 303
  const getDsthongdiep2024_303LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const data303_1: any = await getDSthongdiep2024_303_tru1LOGIGO(
        startDate,
        endDate
      );

      const response: any = await laydlbaocaothongdiep2024_303LOGIGO(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_303Response"
        ]["laydlbaocaothongdiep2024_303Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "303") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong303: DocumentElement.DSKQ["Tong303"] - data303_1,
                Tongphanhoi999: DocumentElement.DSKQ["Tongphanhoi999"],
                Tongphanhoi301: DocumentElement.DSKQ["Tongphanhoi301"],
                Tongphanhoi204: DocumentElement.DSKQ["Tongphanhoi204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_303LOGIGO"
      );
    }
  };

  const getDSthongdiep2024_303_tru1LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_303_tru1LOGIGO(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_303_tru1Response"
        ]["laydlbaocaothongdiep2024_303_tru1Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "303") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD303_1: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MLTDiep: e?.MLTDiep,
                          thoigian: e?.Thoigian,
                          khoaphien: e?.Khoaphien,
                          MTDTChieu: e?.MTDTChieu,
                          XMLThongdiep: e?.XMLThongdiep,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });

        return newResult?.length;
      }

      return 0;
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_303_tru1LOGIGO"
      );
    }
  };

  const getDSthongdiep2024_303_ThieuLOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_303_ThieuLOGIGO(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_303_ThieuResponse"
        ]["laydlbaocaothongdiep2024_303_ThieuResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "303") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD303_301_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDTChieu: e.MTDTChieu,
                          TongLoaiTDPhanhoi: e.TongLoaiTDPhanhoi,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_303_ThieuLOGIGO"
      );
    }
  };

  const getDsthongdiep2024_303CA2 = async (startDate: any, endDate: any) => {
    try {
      const data303_1: any = await getDSthongdiep2024_303_tru1CA2(
        startDate,
        endDate
      );

      const response: any = await laydlbaocaothongdiep2024_303CA2(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_303Response"
        ]["laydlbaocaothongdiep2024_303Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "303") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong303: DocumentElement.DSKQ["Tong303"] - data303_1,
                Tongphanhoi999: DocumentElement.DSKQ["Tongphanhoi999"],
                Tongphanhoi301: DocumentElement.DSKQ["Tongphanhoi301"],
                Tongphanhoi204: DocumentElement.DSKQ["Tongphanhoi204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_303CA2"
      );
    }
  };

  const getDSthongdiep2024_303_tru1CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_303_tru1CA2(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_303_tru1Response"
        ]["laydlbaocaothongdiep2024_303_tru1Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "303") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD303_1: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MLTDiep: e?.MLTDiep,
                          thoigian: e?.Thoigian,
                          khoaphien: e?.Khoaphien,
                          MTDTChieu: e?.MTDTChieu,
                          XMLThongdiep: e?.XMLThongdiep,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });

        return newResult?.length;
      }
      return 0;
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_303_tru1CA2"
      );
    }
  };

  const getDSthongdiep2024_303_ThieuCA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_303_ThieuCA2(
        startDate,
        endDate
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_303_ThieuResponse"
        ]["laydlbaocaothongdiep2024_303_ThieuResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "303") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD303_301_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDTChieu: e.MTDTChieu,
                          TongLoaiTDPhanhoi: e.TongLoaiTDPhanhoi,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_303_ThieuCA2"
      );
    }
  };

  //Thông điệp 400
  const getDsthongdiep400CA2 = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao400CA2(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao400Response"][
          "laydlbaocao400Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "400") {
            return {
              ...item,
              ca2_tksl: {
                ...item.ca2_tksl,
                Tong400: DocumentElement.DS["Tong400"],
                Tong999: DocumentElement.DS["Tong999"],
                Tong204: DocumentElement.DS["Tong204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao400CA2"
      );
    }
  };

  const getDsthongdiep400LOGIGO = async (startDate: any, endDate: any) => {
    try {
      const response: any = await laydlbaocao400LOGIGO(startDate, endDate);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["laydlbaocao400Response"][
          "laydlbaocao400Result"
        ]["diffgr:diffgram"]["DocumentElement"];

      setData((prev: any) => {
        return prev.map((item: any) => {
          if (item.key === "400") {
            return {
              ...item,
              logigo_tksl: {
                ...item.logigo_tksl,
                Tong400: DocumentElement.DS["Tong400"],
                Tong999: DocumentElement.DS["Tong999"],
                Tong204: DocumentElement.DS["Tong204"],
              },
            };
          }
          return item;
        });
      });
    } catch (err) {
      console.log(err);

      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API laydlbaocao400LOGIGO"
      );
    }
  };

  const getthongdiep400thieu_MLTDiep_204CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep400thieu_MLTDiepCA2(
        startDate,
        endDate,
        "204"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep400thieu_MLTDiepResponse"
        ]["Laythongdiep400thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "400") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD400_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep400thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep400thieu_MLTDiep_204LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep400thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "204"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep400thieu_MLTDiepResponse"
        ]["Laythongdiep400thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "400") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD400_204: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep400thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getthongdiep400thieu_MLTDiep_999CA2 = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep400thieu_MLTDiepCA2(
        startDate,
        endDate,
        "999"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep400thieu_MLTDiepResponse"
        ]["Laythongdiep400thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "400") {
              return {
                ...item,
                ca2_thieu_du: {
                  ...item.ca2_thieu_du,
                  TD400_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep400thieu_MLTDiepCA2"
      );
    }
  };

  const getthongdiep400thieu_MLTDiep_999LOGIGO = async (
    startDate: any,
    endDate: any
  ) => {
    try {
      const response: any = await Laythongdiep400thieu_MLTDiepLOGIGO(
        startDate,
        endDate,
        "999"
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "Laythongdiep400thieu_MLTDiepResponse"
        ]["Laythongdiep400thieu_MLTDiepResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.key === "400") {
              return {
                ...item,
                logigo_thieu_du: {
                  ...item.logigo_thieu_du,
                  TD400_999: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDiep: e.MTDiep,
                          thoigian: e.Thoigian,
                          khoaphien: e.khoaphien,
                          IdMessage: e.IdMessage,
                        };
                      }) || [],
                  },
                },
              };
            }
            return item;
          });
        });
      }
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi",
        "Có lỗi xảy ra với API Laythongdiep400thieu_MLTDiepLOGIGO"
      );
    }
  };

  const getData = async (startDate: any, endDate: any) => {
    setLoading(true);

    try {
      if (endDate - startDate > 86400000) {
        openNotificationWithIcon(
          "error",
          "Lỗi",
          "Khoảng thời gian tìm kiếm không được quá 1 ngày"
        );
        setLoading(false);
        return;
      }

      setData(inititalData);

      await Promise.allSettled([
        //Thông điệp 100
        getDs100CA2(startDate, endDate),
        getDs100_thieu102CA2(startDate, endDate),
        getDs100_thieu999CA2(startDate, endDate),
        getthongdiep100thieu_MLTDiep_103CA2(startDate, endDate),
        getthongdiep100thieu_MLTDiep_102CA2(startDate, endDate),
        getthongdiep100thieu_MLTDiep_999CA2(startDate, endDate),

        getDs100LOGIGO(startDate, endDate),
        getDs100_thieu102LOGIGO(startDate, endDate),
        getDs100_thieu999LOGIGO(startDate, endDate),
        getthongdiep100thieu_MLTDiep_103LOGIGO(startDate, endDate),
        getthongdiep100thieu_MLTDiep_102LOGIGO(startDate, endDate),
        getthongdiep100thieu_MLTDiep_999LOGIGO(startDate, endDate),

        // Thông điệp 200
        getDs200CA2(startDate, endDate),
        getDs200LOGIGO(startDate, endDate),

        // getthongdiep2024_200_tru1CA2(startDate, endDate),
        // getthongdiep2024_200_tru1LOGIGO(startDate, endDate),
        getthongdiep2024_200_Khongco202or204CA2(startDate, endDate),
        getthongdiep2024_200_Khongco202or204LOGIGO(startDate, endDate),
        getthongdiep2024_200_Khongco999LOGIGO(startDate, endDate),
        getthongdiep2024_200_Khongco999CA2(startDate, endDate),
        getthongdiep200thieu_MLTDiep_202CA2(startDate, endDate),
        getthongdiep200thieu_MLTDiep_202LOGIGO(startDate, endDate),
        getthongdiep200thieu_MLTDiep_999CA2(startDate, endDate),
        getthongdiep200thieu_MLTDiep_999LOGIGO(startDate, endDate),

        //Thông điệp 203
        getDs203LOGIGO(startDate, endDate),
        getthongdiep203_ThuaLOGIGO(startDate, endDate),
        getthongdiep203thieu_MLTDiep_204LOGIGO(startDate, endDate),
        getthongdiep203thieu_MLTDiep_999LOGIGO(startDate, endDate),

        getDs203CA2(startDate, endDate),
        getthongdiep203_ThuaCA2(startDate, endDate),
        getthongdiep203thieu_MLTDiep_204CA2(startDate, endDate),
        getthongdiep203thieu_MLTDiep_999CA2(startDate, endDate),

        //Thông điệp 206
        getDs206LOGIGO(startDate, endDate),
        // getthongdiepMTT2024_tru1LOGIGO(startDate, endDate),
        getthongdiep206thieu_MLTDiep_204LOGIGO(startDate, endDate),
        getthongdiep206thieu_MLTDiep_999LOGIGO(startDate, endDate),

        getDs206CA2(startDate, endDate),
        // getthongdiepMTT2024_tru1CA2(startDate, endDate),
        getthongdiep206thieu_MLTDiep_204CA2(startDate, endDate),
        getthongdiep206thieu_MLTDiep_999CA2(startDate, endDate),

        //Thông điệp 300
        getDs300LOGIGO(startDate, endDate),
        getthongdiep300thieu_MLTDiep_204LOGIGO(startDate, endDate),
        getthongdiep300thieu_MLTDiep_301LOGIGO(startDate, endDate),
        getthongdiep300thieu_MLTDiep_999LOGIGO(startDate, endDate),

        getDs300CA2(startDate, endDate),
        getthongdiep300thieu_MLTDiep_204CA2(startDate, endDate),
        getthongdiep300thieu_MLTDiep_301CA2(startDate, endDate),
        getthongdiep300thieu_MLTDiep_999CA2(startDate, endDate),

        //Thông điệp 303
        getDsthongdiep2024_303LOGIGO(startDate, endDate),
        getDSthongdiep2024_303_ThieuLOGIGO(startDate, endDate),
        // getDSthongdiep2024_303_tru1LOGIGO(startDate, endDate),

        getDsthongdiep2024_303CA2(startDate, endDate),
        getDSthongdiep2024_303_ThieuCA2(startDate, endDate),
        // getDSthongdiep2024_303_tru1CA2(startDate, endDate),

        // //Thông điệp 400
        getDsthongdiep400LOGIGO(startDate, endDate),
        getthongdiep400thieu_MLTDiep_204LOGIGO(startDate, endDate),
        getthongdiep400thieu_MLTDiep_999LOGIGO(startDate, endDate),

        getDsthongdiep400CA2(startDate, endDate),
        getthongdiep400thieu_MLTDiep_204CA2(startDate, endDate),
        getthongdiep400thieu_MLTDiep_999CA2(startDate, endDate),
      ]);
      setLoading(false);
    } catch (err) {
      console.log(err);

      setLoading(false);
    }
  };

  return (
    <div>
      {contextHolder}

      <div>
        <Form
          form={form}
          layout="inline"
          style={{
            margin: "16px 0 20px 0",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onFinish={(values) => {
            if (!values.denngay || !values.tungay) {
              return;
            }

            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              return;
            }

            getData(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00")
            );
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");
          }}
        >
          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Từ ngày"
            name={"tungay"}
          >
            <DatePicker
              placeholder="Từ ngày"
              onChange={(e: any) => {
                if (e) {
                  form.setFieldValue("denngay", e.add(1, "day"));
                } else {
                  form.setFieldValue("denngay", null);
                }

                setTime({
                  startDate: dayjs(e).format("YYYY-MM-DD 07:00:00"),
                  endDate: dayjs(e).add(1, "day").format("YYYY-MM-DD 07:00:00"),
                });
              }}
            />
          </Form.Item>
          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Đến ngày"
            name={"denngay"}
          >
            <DatePicker placeholder="Đến ngày" disabled />
          </Form.Item>
          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
          >
            <Button
              type="primary"
              loading={loading}
              iconPosition={"start"}
              htmlType="submit"
            >
              Tìm kiếm
            </Button>
          </Form.Item>
        </Form>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#001529d4",
              headerColor: "#fff",
              controlItemBgHover: "#fff",
              borderColor: "#000000ab",
              headerBorderRadius: 0,
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          loading={loading}
          bordered
          pagination={false}
          scroll={{ x: 1300 }}
          rowHoverable={false}
        />
      </ConfigProvider>

      <Modal
        title={modelLabel}
        open={openModal}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1200}
      >
        <div
          style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}
        >
          <ExcelExport data={dataExel} fileName={modelLabel} />
        </div>

        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#001529d4",
                headerColor: "#fff",
                controlItemBgHover: "#fff",

                /* here is your component tokens */
              },
            },
          }}
        >
          <Table
            columns={columnsModal}
            dataSource={modalData}
            style={{
              marginTop: 20,
            }}
            scroll={{ x: 1200 }}
            bordered
          />
        </ConfigProvider>
      </Modal>
    </div>
  );
};

export default Compose1;
