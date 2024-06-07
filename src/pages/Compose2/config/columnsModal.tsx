import { TableProps, Tooltip } from "antd";
import { useParams } from "react-router-dom";

export const columnsModal0: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Mã số thuế",
    dataIndex: "mst",
  },
  {
    title: "Mã thông điệp tham chiếu",
    dataIndex: "MTDTChieu",
  },
  {
    title: "Mã thông điệp",
    dataIndex: "mtdiep",
  },
  {
    title: "Mã loại thông điệp",
    dataIndex: "mltdiep",
    render: (text: string) => {
      return (
        <div style={{ width: 100 }}>
          <p>{text}</p>
        </div>
      );
    },
  },
  {
    title: "Thời gian",
    dataIndex: "thoigian",
  },
  {
    title: "Mã loại thông điệp gốc",
    dataIndex: "MLTDGoc",
    render: (text: string) => {
      return (
        <div style={{ width: 100 }}>
          <p>{text}</p>
        </div>
      );
    },
  },
  {
    title: "Thời gian gửi thông điệp gốc",
    dataIndex: "ThoigianguiTDGoc",
    render: (text: string) => {
      return (
        <div style={{ width: 100 }}>
          <p>{text}</p>
        </div>
      );
    },
  },
  {
    title: "XML Thông điệp",
    dataIndex: "XMLThongdiep",
    render: (text: string) => {
      return (
        <Tooltip title={text}>
          <div className="line-clamp-400-2">
            <p>{text}</p>
          </div>
        </Tooltip>
      );
    },
  },
];

export const columnsModal1: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Mã số thuế",
    dataIndex: "mst",
  },
  {
    title: "Mã thông điệp tham chiếu",
    dataIndex: "MTDTChieu",
  },
  {
    title: "Số lượng thông điệp thuế trả",
    dataIndex: "SLThongdiepthuetra",
  },
];
export const columnsModal2: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "MNGui",
    dataIndex: "MNGui",
  },
  {
    title: "MNNhan",
    dataIndex: "MNNhan",
  },

  {
    title: "Mã thông điệp",
    dataIndex: "MTDiep",
  },
  {
    title: "Mã loại thông điệp",
    dataIndex: "MLTDiep",
    render: (text: string) => {
      return (
        <div style={{ width: 100 }}>
          <p>{text}</p>
        </div>
      );
    },
  },
  {
    title: "Mã thông điệp tham chiếu",
    dataIndex: "MTDTChieu",
  },

  {
    title: "Thời gian",
    dataIndex: "thoigian",
  },
  {
    title: "Khoá phiên",
    dataIndex: "Khoaphien",
  },
  {
    title: "XML Thông điệp",
    dataIndex: "XMLThongdiep",
    render: (text: string) => {
      return (
        <Tooltip title={text}>
          <div className="line-clamp-400-2">
            <p>{text}</p>
          </div>
        </Tooltip>
      );
    },
  },
];

export const columnsModal3: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Id Truyền nhận",
    dataIndex: "idTruyennhan",
  },

  {
    title: "Mã số thuế",
    dataIndex: "MST",
  },
  {
    title: "MNGui",
    dataIndex: "MNGui",
  },
  {
    title: "MNNhan",
    dataIndex: "MNNhan",
  },

  {
    title: "Mã thông điệp",
    dataIndex: "MTDiep",
  },
  {
    title: "Mã loại thông điệp",
    dataIndex: "MLTDiep",
    render: (text: string) => {
      return (
        <div style={{ width: 100 }}>
          <p>{text}</p>
        </div>
      );
    },
  },
  {
    title: "Mã thông điệp tham chiếu",
    dataIndex: "MTDTChieu",
  },
  {
    title: "Số lượng",
    dataIndex: "SLuong",
  },

  {
    title: "Thời gian",
    dataIndex: "thoigian",
  },
  {
    title: "Khoá phiên",
    dataIndex: "Khoaphien",
  },
  {
    title: "XML Thông điệp",
    dataIndex: "XMLThongdiep",
    render: (text: string) => {
      return (
        <Tooltip title={text}>
          <div className="line-clamp-400-2">
            <p>{text}</p>
          </div>
        </Tooltip>
      );
    },
  },
];

export const columnsModal4: TableProps<any>["columns"] = [
  {
    title: "STT",
    dataIndex: "key",
  },
  {
    title: "Mã loại thông điệp",
    dataIndex: "MLTDiep",
    render: (text: string) => {
      return (
        <div style={{ width: 100 }}>
          <p>{text}</p>
        </div>
      );
    },
  },
  {
    title: "Mã thông điệp tham chiếu",
    dataIndex: "MTDTChieu",
  },
];
