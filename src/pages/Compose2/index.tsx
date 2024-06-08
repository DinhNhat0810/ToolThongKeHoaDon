import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Table,
  TableProps,
  notification,
} from "antd";
import { useMemo, useRef, useState } from "react";
import { DataTypeTKTBHT, TKTBHT } from "./config/allService";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  AQuetFile_MTDTChieuCA2,
  laydlbaocao2024_sothongdiepthuetraveCA2,
  laydlbaocao2024_thongdiepthuetraveCA2,
  laydlbaocaothongdiep2024CA2,
  laydlbaocaothongdiep2024_MTDTChieuCA2,
} from "../../services/ca2";
import { convertXmlToJson } from "../../libs/common";
import {
  AQuetFile_MTDTChieuLOGIGO,
  laydlbaocao2024_sothongdiepthuetraveLOGIGO,
  laydlbaocao2024_thongdiepthuetraveLOGIGO,
  laydlbaocaothongdiep2024LOGIGO,
  laydlbaocaothongdiep2024_MTDTChieuLOGIGO,
} from "../../services/logigo";
import ExcelExport from "../../components/ExportExcel";
import {
  columnsModal0,
  columnsModal1,
  columnsModal2,
  columnsModal3,
  columnsModal4,
} from "./config/columnsModal";
import UploadExcel from "../../components/UploadExcel";

const CustomFields = ({
  type,
  form,
  onSetDataExelUpload,
}: {
  type: string;
  form: any;
  onSetDataExelUpload: (data: any) => void;
}) => {
  const [typeTD_soAQuetFile_MTDTChieu, setTypeTD_soAQuetFile_MTDTChieu] =
    useState<string>("text");

  switch (type) {
    case "TD_thongdiepthuetrave_theongay":
      return (
        <>
          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Mã thông điệp tham chiếu"
            name={"MTDTChieu"}
          >
            <Input placeholder="MTDTChieu" />
          </Form.Item>

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Từ ngày"
            name={"tungay"}
          >
            <DatePicker placeholder="Từ ngày" />
          </Form.Item>
        </>
      );
    case "TD_sothongdiepthuetrave":
      return (
        <>
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
            label="Số lượng thông điệp xét"
            name={"SLThongdiepxet"}
          >
            <Input placeholder="SLThongdiepxet" />
          </Form.Item>

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Mã loại thông điệp xét"
            name={"MLTDiepxet"}
          >
            <Input placeholder="MLTDiepxet" />
          </Form.Item>
        </>
      );
    case "TD_sobaocaothongdiep2024_MTDTChieu":
      return (
        <>
          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Mã thông điệp tham chiếu"
            name={"MTDTChieu"}
          >
            <Input placeholder="MTDTChieu" />
          </Form.Item>
        </>
      );
    case "TD_sobaocaothongdiep2024":
      return (
        <>
          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
              marginBottom: 16,
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
            label="Mã số thuế"
            name={"MST"}
          >
            <Input placeholder="MST" />
          </Form.Item>

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="KHMSHDon"
            name={"KHMSHDon"}
          >
            <Input placeholder="KHMSHDon" />
          </Form.Item>

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="KHHDon"
            name={"KHHDon"}
          >
            <Input placeholder="KHHDon" />
          </Form.Item>

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Số hóa đơn"
            name={"SHDon"}
          >
            <Input placeholder="Số hóa đơn" />
          </Form.Item>

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 16,
            }}
            label="Hóa đơn máy tính tiền"
            name={"HDMTTien"}
          >
            <Input placeholder="HDMTTien" />
          </Form.Item>
        </>
      );
    case "TD_soAQuetFile_MTDTChieu":
      return (
        <>
          <Select
            style={{
              marginInlineEnd: 16,
              width: 100,
            }}
            value={typeTD_soAQuetFile_MTDTChieu}
            options={[
              { value: "text", label: "Nhập tay" },
              { value: "file", label: "Tải file" },
            ]}
            onChange={(value) => {
              onSetDataExelUpload([]);
              setTypeTD_soAQuetFile_MTDTChieu(value);
            }}
          />

          {typeTD_soAQuetFile_MTDTChieu === "text" ? (
            <Form.Item
              style={{
                marginInlineEnd: 16,
              }}
              label="Mã thông điệp tham chiếu"
              name={"MTDTChieu"}
            >
              <Input placeholder="MTDTChieu" />
            </Form.Item>
          ) : (
            <UploadExcel
              onSetDataExcelUpload={(data) => {
                onSetDataExelUpload(data);
              }}
            />
          )}

          <Form.Item
            style={{
              marginInlineEnd: 0,
              marginInlineStart: 0,
            }}
            label="Thời gian"
            name={"Thoigian"}
          >
            <DatePicker placeholder="Thời gian" />
          </Form.Item>
        </>
      );
    default:
  }
};

const inititalData: any[] = [
  {
    key: "1",
    subKey: "TD_thongdiepthuetrave_theongay",
    ca2: {
      TD_thongdiepthuetrave_theongay: {
        length: 0,
        data: [],
      },
    },
    logigo: {
      TD_thongdiepthuetrave_theongay: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "2",
    subKey: "TD_sothongdiepthuetrave",
    ca2: {
      TD_sothongdiepthuetrave: {
        length: 0,
        data: [],
      },
    },
    logigo: {
      TD_sothongdiepthuetrave: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "3",
    subKey: "TD_sobaocaothongdiep2024_MTDTChieu",
    ca2: {
      TD_sobaocaothongdiep2024_MTDTChieu: {
        length: 0,
        data: [],
      },
    },
    logigo: {
      TD_sobaocaothongdiep2024_MTDTChieu: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "4",
    subKey: "TD_sobaocaothongdiep2024",
    ca2: {
      TD_sobaocaothongdiep2024: {
        length: 0,
        data: [],
      },
    },
    logigo: {
      TD_sobaocaothongdiep2024: {
        length: 0,
        data: [],
      },
    },
  },

  {
    key: "5",
    subKey: "TD_soAQuetFile_MTDTChieu",
    ca2: {
      TD_soAQuetFile_MTDTChieu: {
        length: 0,
        data: [],
      },
    },
    logigo: {
      TD_soAQuetFile_MTDTChieu: {
        length: 0,
        data: [],
      },
    },
  },
];
type NotificationType = "success" | "info" | "warning" | "error";

const Compose2 = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<DataTypeTKTBHT[]>(inititalData);
  const [api, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<any | null>(null);
  const [columnsModal, setColumnsModal] = useState<any[]>([]);
  const [modelLabel, setModelLabel] = useState("");
  const [dataExel, setDataExel] = useState<any[]>([{}]);
  const [typeFilter, setTypeFilter] = useState<string>("ca2");
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([
    inititalData[0].key,
  ]);
  const [selectedRowSubKeys, setSelectedRowSubKeys] = useState<string>(
    inititalData[0].subKey
  );
  const [dataExelUpload, setDataExelUpload] = useState<any[]>([]);

  const timeRef = useRef("");

  const onSelectChange = (newSelectedRowKeys: React.Key[], data: any) => {
    form.resetFields();
    setSelectedRowSubKeys(data[0].subKey);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

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

  const handleSetDataToTable = (value: string, type: string): void => {
    if (type === "CA2") {
      switch (value) {
        case "TD_thongdiepthuetrave_theongay":
          setColumnsModal(columnsModal0 || []);
          break;
        case "TD_sothongdiepthuetrave":
          setColumnsModal(columnsModal1 || []);
          break;
        case "TD_sobaocaothongdiep2024_MTDTChieu":
          setColumnsModal(columnsModal2 || []);
          break;
        case "TD_sobaocaothongdiep2024":
          setColumnsModal(columnsModal3 || []);
          break;
        case "TD_soAQuetFile_MTDTChieu":
          setColumnsModal(columnsModal4 || []);
          break;
        default:
          break;
      }
    }

    if (type === "LOGIGO") {
      switch (value) {
        case "TD_thongdiepthuetrave_theongay":
          setColumnsModal(columnsModal0 || []);
          break;
        case "TD_sothongdiepthuetrave":
          setColumnsModal(columnsModal1 || []);
          break;
        case "TD_sobaocaothongdiep2024_MTDTChieu":
          setColumnsModal(columnsModal2 || []);
          break;
        case "TD_sobaocaothongdiep2024":
          setColumnsModal(columnsModal3 || []);
          break;
        case "TD_soAQuetFile_MTDTChieu":
          setColumnsModal(columnsModal4 || []);
          break;
        default:
          break;
      }
    }
  };

  const columns: TableProps<DataTypeTKTBHT>["columns"] = useMemo(() => {
    return [
      {
        title: "CA2",
        dataIndex: "ca2",
        render: (_, record: any) => {
          const item: any = TKTBHT.find(
            (ele: any) => ele.value === record.subKey
          );
          const dataTableModal = record["ca2"][item.value]?.data.map(
            (item: any, index: number) => {
              const newResult = {
                ...item,
                key: index + 1,
                thoigian: dayjs(item.thoigian).format("HH:mm:ss DD/MM/YYYY"),
                ThoigianguiTDGoc: dayjs(item.ThoigianguiTDGoc).format(
                  "HH:mm:ss DD/MM/YYYY"
                ),
              };

              if (!item?.thoigian) {
                delete newResult.thoigian;
              }

              if (!item?.ThoigianguiTDGoc) {
                delete newResult.ThoigianguiTDGoc;
              }

              return newResult;
            }
          );

          return (
            <div>
              <div
                style={{
                  marginBottom: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.name}</span>
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
                    {record["ca2"][item.value]?.length || 0}
                  </span>
                  {record["ca2"][item.value]?.length ? (
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
                              { key: "idTruyennhan", label: "Id Truyền nhận" },
                              { key: "MST", label: "Mã số thuế" },
                              { key: "mst", label: "Mã số thuế" },
                              { key: "MNGui", label: "MNGui" },
                              { key: "MNNhan", label: "MNNhan" },
                              {
                                key: "SLThongdiepthuetra",
                                label: "Số lượng thông điệp thuế trả",
                              },
                              {
                                key: "MLTDGoc",
                                label: "Mã loại thông điệp gốc",
                              },
                              {
                                key: "ThoigianguiTDGoc",
                                label: "Thời gian gửi thông điệp gốc",
                              },

                              {
                                key: "MLTDiep",
                                label: "Mã loại thông điệp",
                              },
                              {
                                key: "MTDTChieu",
                                label: "Mã thông điệp tham chiếu",
                              },
                              { key: "mtdiep", label: "Mã thông điệp" },
                              { key: "thoigian", label: "Thời gian" },
                              { key: "SLuong", label: "Số lượng" },
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
                            record["ca2"][item.value]?.length +
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
            </div>
          );
        },
      },
      {
        title: "Logigo",
        dataIndex: "logigo",
        render: (_, record: any) => {
          const item: any = TKTBHT.find(
            (ele: any) => ele.value === record.subKey
          );

          const dataTableModal = record["logigo"][item.value]?.data.map(
            (item: any, index: number) => {
              const newResult = {
                ...item,
                key: index + 1,
                thoigian: dayjs(item.thoigian).format("HH:mm:ss DD/MM/YYYY"),
                ThoigianguiTDGoc: dayjs(item.ThoigianguiTDGoc).format(
                  "HH:mm:ss DD/MM/YYYY"
                ),
              };

              if (!item?.thoigian) {
                delete newResult.thoigian;
              }

              if (!item?.ThoigianguiTDGoc) {
                delete newResult.ThoigianguiTDGoc;
              }

              return newResult;
            }
          );

          return (
            <div>
              <div
                style={{
                  marginBottom: 2,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.name}</span>
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
                    {record["logigo"][item.value]?.length || 0}
                  </span>
                  {record["logigo"][item.value]?.length ? (
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
                              { key: "idTruyennhan", label: "Id Truyền nhận" },
                              { key: "MST", label: "Mã số thuế" },
                              { key: "mst", label: "Mã số thuế" },
                              { key: "MNGui", label: "MNGui" },
                              { key: "MNNhan", label: "MNNhan" },
                              {
                                key: "SLThongdiepthuetra",
                                label: "Số lượng thông điệp thuế trả",
                              },
                              {
                                key: "MLTDGoc",
                                label: "Mã loại thông điệp gốc",
                              },
                              {
                                key: "ThoigianguiTDGoc",
                                label: "Thời gian gửi thông điệp gốc",
                              },

                              {
                                key: "MLTDiep",
                                label: "Mã loại thông điệp",
                              },
                              {
                                key: "MTDTChieu",
                                label: "Mã thông điệp tham chiếu",
                              },
                              { key: "mtdiep", label: "Mã thông điệp" },
                              { key: "thoigian", label: "Thời gian" },
                              { key: "SLuong", label: "Số lượng" },
                              { key: "Khoaphien", label: "Khoá phiên" },
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
                          "LOGIGO_" +
                            item.name +
                            " " +
                            record["logigo"][item.value]?.length +
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
            </div>
          );
        },
      },
    ];
  }, []);

  // laydlbaocao2024_thongdiepthuetraveCA2
  const getdlbaocao2024_thongdiepthuetraveCA2 = async (
    startDate: any,
    MTDTChieu: any
  ) => {
    try {
      const response: any = await laydlbaocao2024_thongdiepthuetraveCA2(
        startDate,
        MTDTChieu
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao2024_thongdiepthuetraveResponse"
        ]["laydlbaocao2024_thongdiepthuetraveResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_thongdiepthuetrave_theongay") {
              return {
                ...item,
                ca2: {
                  ...item.ca2,
                  TD_thongdiepthuetrave_theongay: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mst: e.mst,
                          MTDTChieu: e.MTDTChieu,
                          mltdiep: e.mltdiep,
                          mtdiep: e.mtdiep,
                          thoigian: e.thoigian,
                          MLTDGoc: e.MLTDGoc,
                          ThoigianguiTDGoc: e.ThoigianguiTDGoc,
                          XMLThongdiep: e.XMLThongdiep,
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
        "Có lỗi xảy ra với API laydlbaocao100_Thieu102or103or999CA2"
      );
    }
  };

  const getdlbaocao2024_thongdiepthuetraveLOGIGO = async (
    startDate: any,
    MTDTChieu: any
  ) => {
    try {
      const response: any = await laydlbaocao2024_thongdiepthuetraveLOGIGO(
        startDate,
        MTDTChieu
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao2024_thongdiepthuetraveResponse"
        ]["laydlbaocao2024_thongdiepthuetraveResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_thongdiepthuetrave_theongay") {
              return {
                ...item,
                logigo: {
                  ...item.logigo,
                  TD_thongdiepthuetrave_theongay: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mst: e.mst,
                          MTDTChieu: e.MTDTChieu,
                          mltdiep: e.mltdiep,
                          mtdiep: e.mtdiep,
                          thoigian: e.thoigian,
                          MLTDGoc: e.MLTDGoc,
                          ThoigianguiTDGoc: e.ThoigianguiTDGoc,
                          XMLThongdiep: e.XMLThongdiep,
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
        "Có lỗi xảy ra với API laydlbaocao100_Thieu102or103or999CA2"
      );
    }
  };

  // laydlbaocao2024_sothongdiepthuetraveCA2
  const getdlbaocao2024_sothongdiepthuetraveCA2 = async (
    startDate: any,
    endDate: any,
    MLTDiepxet: any,
    SLThongdiepxet: any
  ) => {
    try {
      const response: any = await laydlbaocao2024_sothongdiepthuetraveCA2(
        startDate,
        endDate,
        MLTDiepxet,
        SLThongdiepxet
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao2024_sothongdiepthuetraveResponse"
        ]["laydlbaocao2024_sothongdiepthuetraveResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_sothongdiepthuetrave") {
              return {
                ...item,
                ca2: {
                  ...item.ca2,
                  TD_sothongdiepthuetrave: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mst: e.mst,
                          MTDTChieu: e.MTDTChieu,
                          SLThongdiepthuetra: e.SLThongdiepthuetra.toString(),
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
        "Có lỗi xảy ra với API laydlbaocao2024_sothongdiepthuetraveCA2"
      );
    }
  };

  const getdlbaocao2024_sothongdiepthuetraveLOGIGO = async (
    startDate: any,
    endDate: any,
    MLTDiepxet: any,
    SLThongdiepxet: any
  ) => {
    try {
      const response: any = await laydlbaocao2024_sothongdiepthuetraveLOGIGO(
        startDate,
        endDate,
        MLTDiepxet,
        SLThongdiepxet
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocao2024_sothongdiepthuetraveResponse"
        ]["laydlbaocao2024_sothongdiepthuetraveResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_sothongdiepthuetrave") {
              return {
                ...item,
                logigo: {
                  ...item.logigo,
                  TD_sothongdiepthuetrave: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          mst: e.mst,
                          MTDTChieu: e.MTDTChieu,
                          SLThongdiepthuetra: e.SLThongdiepthuetra.toString(),
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
        "Có lỗi xảy ra với API laydlbaocao2024_sothongdiepthuetraveLOGIGO"
      );
    }
  };

  //TD_sobaocaothongdiep2024_MTDTChieu
  const getdlbaocaothongdiep2024_MTDTChieuCA2 = async (MTDTChieu: any) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_MTDTChieuCA2(
        MTDTChieu
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_MTDTChieuResponse"
        ]["laydlbaocaothongdiep2024_MTDTChieuResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_sobaocaothongdiep2024_MTDTChieu") {
              return {
                ...item,
                ca2: {
                  ...item.ca2,
                  TD_sobaocaothongdiep2024_MTDTChieu: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDTChieu: e.MTDTChieu,
                          thoigian: e.Thoigian,
                          MTDiep: e.MTDiep,
                          MLTDiep: e.MLTDiep,
                          MNGui: e.MNGui,
                          MNNhan: e.MNNhan,
                          Khoaphien: e.Khoaphien,
                          XMLThongdiep: e.XMLThongdiep,
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
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_MTDTChieuCA2"
      );
    }
  };

  const getdlbaocaothongdiep2024_MTDTChieuLOGIGO = async (MTDTChieu: any) => {
    try {
      const response: any = await laydlbaocaothongdiep2024_MTDTChieuLOGIGO(
        MTDTChieu
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024_MTDTChieuResponse"
        ]["laydlbaocaothongdiep2024_MTDTChieuResult"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_sobaocaothongdiep2024_MTDTChieu") {
              return {
                ...item,
                logigo: {
                  ...item.logigo,
                  TD_sobaocaothongdiep2024_MTDTChieu: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDTChieu: e.MTDTChieu,
                          thoigian: e.Thoigian,
                          MTDiep: e.MTDiep,
                          MLTDiep: e.MLTDiep,
                          MNGui: e.MNGui,
                          MNNhan: e.MNNhan,
                          Khoaphien: e.Khoaphien,
                          XMLThongdiep: e.XMLThongdiep,
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
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024_MTDTChieuCA2"
      );
    }
  };

  //TD_sobaocaothongdiep2024
  const getdlbaocaothongdiep2024CA2 = async (
    startDate: string,
    endDate: string,
    MST: string,
    KHMSHDon: string,
    KHHDon: string,
    SHDon: string,
    HDMTTien: number
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024CA2(
        startDate,
        endDate,
        MST,
        KHMSHDon,
        KHHDon,
        SHDon,
        HDMTTien
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024Response"
        ]["laydlbaocaothongdiep2024Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_sobaocaothongdiep2024") {
              return {
                ...item,
                ca2: {
                  ...item.ca2,
                  TD_sobaocaothongdiep2024: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          idTruyennhan: e?.idTruyennhan?.toString(),
                          MNGui: e.MNGui,
                          MNNhan: e.MNNhan,
                          MLTDiep: e.MLTDiep,
                          MTDiep: e.MTDiep,
                          MTDTChieu: e.MTDTChieu,
                          MST: e.MST,
                          SLuong: e.SLuong?.toString(),
                          thoigian: e.Thoigian,
                          Khoaphien: e.Khoaphien,
                          XMLThongdiep: e.XMLThongdiep,
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
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024CA2"
      );
    }
  };

  const getdlbaocaothongdiep2024LOGIGO = async (
    startDate: string,
    endDate: string,
    MST: string,
    KHMSHDon: string,
    KHHDon: string,
    SHDon: string,
    HDMTTien: number
  ) => {
    try {
      const response: any = await laydlbaocaothongdiep2024LOGIGO(
        startDate,
        endDate,
        MST,
        KHMSHDon,
        KHHDon,
        SHDon,
        HDMTTien
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"][
          "laydlbaocaothongdiep2024Response"
        ]["laydlbaocaothongdiep2024Result"]["diffgr:diffgram"][
          "DocumentElement"
        ];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DS)
          ? [...DocumentElement.DS]
          : [...[DocumentElement.DS]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_sobaocaothongdiep2024") {
              return {
                ...item,
                logigo: {
                  ...item.logigo,
                  TD_sobaocaothongdiep2024: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          idTruyennhan: e?.idTruyennhan?.toString(),
                          MNGui: e.MNGui,
                          MNNhan: e.MNNhan,
                          MLTDiep: e.MLTDiep,
                          MTDiep: e.MTDiep,
                          MTDTChieu: e.MTDTChieu,
                          MST: e.MST,
                          SLuong: e.SLuong?.toString(),
                          thoigian: e.Thoigian,
                          Khoaphien: e.Khoaphien,
                          XMLThongdiep: e.XMLThongdiep,
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
        "Có lỗi xảy ra với API laydlbaocaothongdiep2024LOGIGO"
      );
    }
  };

  //TD_soAQuetFile_MTDTChieu
  const getAQuetFile_MTDTChieuCA2 = async (
    Thoigian: string,
    MTDTChieu: string
  ) => {
    try {
      const response: any = await AQuetFile_MTDTChieuCA2(Thoigian, MTDTChieu);
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["AQuetFile_MTDTChieuResponse"][
          "AQuetFile_MTDTChieuResult"
        ]["diffgr:diffgram"]["DocumentElement"];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DSKQ)
          ? [...DocumentElement.DSKQ]
          : [...[DocumentElement.DSKQ]];

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_soAQuetFile_MTDTChieu") {
              return {
                ...item,
                ca2: {
                  ...item.ca2,
                  TD_soAQuetFile_MTDTChieu: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDTChieu: e?.MTDTChieu,
                          MLTDiep: e?.MLTDiep,
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
      openNotificationWithIcon("success", "Thành công", MTDTChieu);
    } catch (err) {
      openNotificationWithIcon(
        "error",
        "Lỗi" + MTDTChieu,
        "Có lỗi xảy ra với API AQuetFile_MTDTChieuCA2"
      );
    }
  };

  const getAQuetFile_MTDTChieuLOGIGO = async (
    Thoigian: string,
    MTDTChieu: string
  ) => {
    try {
      const response: any = await AQuetFile_MTDTChieuLOGIGO(
        Thoigian,
        MTDTChieu
      );
      const dataJson = convertXmlToJson(response);
      const DocumentElement =
        dataJson["soap:Envelope"]["soap:Body"]["AQuetFile_MTDTChieuResponse"][
          "AQuetFile_MTDTChieuResult"
        ]["diffgr:diffgram"]["DocumentElement"];

      if (DocumentElement) {
        const newResult = Array.isArray(DocumentElement.DSKQ)
          ? [...DocumentElement.DSKQ]
          : [...[DocumentElement.DSKQ]];

        console.log(newResult);

        setData((prev: any) => {
          return prev.map((item: any) => {
            if (item.subKey === "TD_soAQuetFile_MTDTChieu") {
              return {
                ...item,
                logigo: {
                  ...item.logigo,
                  TD_soAQuetFile_MTDTChieu: {
                    length: newResult?.length || 0,
                    data:
                      newResult?.map((e: any) => {
                        return {
                          MTDTChieu: e?.MTDTChieu,
                          MLTDiep: e?.MLTDiep,
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
        "Có lỗi xảy ra với API AQuetFile_MTDTChieuLOGIGO"
      );
    }
  };

  const handleFinish = async (values: any, type: string) => {
    setLoading(true);

    try {
      if (typeFilter === "all") {
        switch (type) {
          case "TD_thongdiepthuetrave_theongay":
            await getdlbaocao2024_thongdiepthuetraveCA2(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              values.MTDTChieu
            );
            await getdlbaocao2024_thongdiepthuetraveLOGIGO(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              values.MTDTChieu
            );
            setLoading(false);
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(new Date()).format("YYYY/MM/DD 07:00:00");

            break;
          case "TD_sothongdiepthuetrave":
            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              setLoading(false);
              return;
            }
            await getdlbaocao2024_sothongdiepthuetraveCA2(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00 07:00:00"),
              values.MLTDiepxet,
              +values.SLThongdiepxet
            );
            await getdlbaocao2024_sothongdiepthuetraveLOGIGO(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00"),
              values.MLTDiepxet,
              +values.SLThongdiepxet
            );
            setLoading(false);

            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");

            break;
          case "TD_sobaocaothongdiep2024_MTDTChieu":
            await getdlbaocaothongdiep2024_MTDTChieuCA2(values.MTDTChieu);
            await getdlbaocaothongdiep2024_MTDTChieuLOGIGO(values.MTDTChieu);
            timeRef.current = dayjs(new Date()).format("YYYY/MM/DD 07:00:00");
            setLoading(false);
            break;
          case "TD_sobaocaothongdiep2024":
            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              setLoading(false);
              return;
            }
            await getdlbaocaothongdiep2024CA2(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00"),
              values.MST,
              values.KHMSHDon,
              values.KHHDon,
              values.SHDon,
              +values.HDMTTien
            );
            await getdlbaocaothongdiep2024LOGIGO(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00 "),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00 "),
              values.MST,
              values.KHMSHDon,
              values.KHHDon,
              values.SHDon,
              +values.HDMTTien
            );
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");
            setLoading(false);
            break;
          case "TD_soAQuetFile_MTDTChieu":
            if (values.MTDTChieu) {
              await getAQuetFile_MTDTChieuCA2(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                values.MTDTChieu
              );
              await getAQuetFile_MTDTChieuLOGIGO(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                values.MTDTChieu
              );
              setLoading(false);
              return;
            }

            for (const item of dataExelUpload) {
              await getAQuetFile_MTDTChieuCA2(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                item
              );
              await getAQuetFile_MTDTChieuLOGIGO(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                item
              );
            }
            setDataExelUpload([]);
            timeRef.current = dayjs(values.Thoigian).format(
              "YYYY/MM/DD 07:00:00"
            );
            setLoading(false);
            break;
        }
      }

      if (typeFilter === "ca2") {
        switch (type) {
          case "TD_thongdiepthuetrave_theongay":
            await getdlbaocao2024_thongdiepthuetraveCA2(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              values.MTDTChieu
            );
            setLoading(false);
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(new Date()).format("YYYY/MM/DD 07:00:00");
            break;
          case "TD_sothongdiepthuetrave":
            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              setLoading(false);
              return;
            }
            await getdlbaocao2024_sothongdiepthuetraveCA2(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00 07:00:00"),
              values.MLTDiepxet,
              +values.SLThongdiepxet
            );
            setLoading(false);
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");
            break;
          case "TD_sobaocaothongdiep2024_MTDTChieu":
            await getdlbaocaothongdiep2024_MTDTChieuCA2(values.MTDTChieu);
            timeRef.current = dayjs(new Date()).format("YYYY/MM/DD 07:00:00");
            setLoading(false);
            break;
          case "TD_sobaocaothongdiep2024":
            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              setLoading(false);
              return;
            }
            await getdlbaocaothongdiep2024CA2(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00"),
              values.MST,
              values.KHMSHDon,
              values.KHHDon,
              values.SHDon,
              +values.HDMTTien
            );
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");
            setLoading(false);
            break;
          case "TD_soAQuetFile_MTDTChieu":
            if (values.MTDTChieu) {
              await getAQuetFile_MTDTChieuCA2(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                values.MTDTChieu
              );

              setLoading(false);
              return;
            }

            for (const item of dataExelUpload) {
              await getAQuetFile_MTDTChieuCA2(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                item
              );
            }
            setDataExelUpload([]);
            timeRef.current = dayjs(values.Thoigian).format(
              "YYYY/MM/DD 07:00:00"
            );
            setLoading(false);
            break;
        }
      }

      if (typeFilter === "logigo") {
        switch (type) {
          case "TD_thongdiepthuetrave_theongay":
            await getdlbaocao2024_thongdiepthuetraveLOGIGO(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              values.MTDTChieu
            );
            setLoading(false);
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(new Date()).format("YYYY/MM/DD 07:00:00");
            break;
          case "TD_sothongdiepthuetrave":
            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              setLoading(false);
              return;
            }
            await getdlbaocao2024_sothongdiepthuetraveLOGIGO(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00 07:00:00"),
              values.MLTDiepxet,
              +values.SLThongdiepxet
            );
            setLoading(false);
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");
            break;
          case "TD_sobaocaothongdiep2024_MTDTChieu":
            await getdlbaocaothongdiep2024_MTDTChieuLOGIGO(values.MTDTChieu);
            timeRef.current = dayjs(new Date()).format("YYYY/MM/DD 07:00:00");
            setLoading(false);
            break;
          case "TD_sobaocaothongdiep2024":
            if (values.denngay - values.tungay > 86400000) {
              openNotificationWithIcon(
                "error",
                "Lỗi",
                "Khoảng thời gian tìm kiếm không được quá 1 ngày"
              );
              setLoading(false);
              return;
            }
            await getdlbaocaothongdiep2024LOGIGO(
              dayjs(values.tungay).format("YYYY-MM-DD 07:00:00"),
              dayjs(values.denngay).format("YYYY-MM-DD 07:00:00"),
              values.MST,
              values.KHMSHDon,
              values.KHHDon,
              values.SHDon,
              +values.HDMTTien
            );
            timeRef.current =
              dayjs(values.tungay).format("YYYY/MM/DD 07:00:00") +
              "-" +
              dayjs(values.denngay).format("YYYY/MM/DD 07:00:00");
            setLoading(false);
            break;
          case "TD_soAQuetFile_MTDTChieu":
            if (values.MTDTChieu) {
              await getAQuetFile_MTDTChieuLOGIGO(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                values.MTDTChieu
              );

              setLoading(false);
              return;
            }

            for (const item of dataExelUpload) {
              await getAQuetFile_MTDTChieuLOGIGO(
                dayjs(values.Thoigian).format("YYYY/MM/DD 07:00:00"),
                item
              );
            }
            setDataExelUpload([]);
            timeRef.current = dayjs(values.Thoigian).format(
              "YYYY/MM/DD 07:00:00"
            );
            setLoading(false);
            break;
        }
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const handleChangeTypeFilter = (value: string) => {
    setTypeFilter(value);
  };

  return (
    <div className="compose2">
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
          onFinish={(values: any) => {
            const hasUndefined = Object.values(values).some(
              (value) => value === undefined
            );

            if (hasUndefined) {
              return;
            }

            handleFinish(values, selectedRowSubKeys);
          }}
        >
          <Form.Item label="Hệ thống">
            <Select
              value={typeFilter}
              onChange={handleChangeTypeFilter}
              style={{ width: 120 }}
              options={[
                { value: "ca2", label: "CA2" },
                { value: "logigo", label: "LOGIGO" },
                { value: "all", label: "Cả hai" },
              ]}
            />
          </Form.Item>

          <CustomFields
            type={selectedRowSubKeys}
            form={form}
            onSetDataExelUpload={(data) => setDataExelUpload(data)}
          />
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
          rowSelection={{
            type: "radio",
            ...rowSelection,
          }}
          onRow={(record) => {
            return {
              onClick: () => {
                setSelectedRowSubKeys(record.subKey);
                setSelectedRowKeys([record.key]);
              }, // click row
            };
          }}
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

export default Compose2;
