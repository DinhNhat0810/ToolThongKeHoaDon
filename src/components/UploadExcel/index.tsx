import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
// import readXlsxFile from "read-excel-file";
import * as XLSX from "xlsx";

const extractUniqueValues = (data: any[]): any[] => {
  // Khởi tạo một tập hợp để lưu các phần tử duy nhất
  const result: any[] = [];

  // Duyệt qua từng mảng con trong mảng chính
  data.forEach((subarray) => {
    if (subarray.length > 0) {
      // Bỏ qua các mảng rỗng
      result.push(subarray[0]); // Thêm phần tử đầu tiên vào mảng kết quả
    }
  });

  return result;
};

const props: UploadProps = {
  name: "file",
  accept: ".xls,.xlsx",
  maxCount: 1,
  multiple: false,
  beforeUpload: () => false,
};

const UploadExcel = ({
  onSetDataExcelUpload,
}: {
  onSetDataExcelUpload: (data: any) => void;
}) => {
  const [messageApi, contextHolder] = message.useMessage();

  const handleChange = (info: any) => {
    if (info.file.status !== "uploading" && info.fileList.length > 0) {
      if (
        info.file.type !==
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      ) {
        messageApi.open({
          type: "error",
          content: "Chỉ chấp nhận file Excel",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (event: any) => {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: "array" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        if (jsonData[0] !== "MTDTChieu") {
          messageApi.open({
            type: "error",
            content: "File không đúng định dạng",
          });
          return;
        }

        const uniqueValues = extractUniqueValues(jsonData.slice(1));
        messageApi.open({
          type: "success",
          content: `Tải file ${info.file.name} thành công!`,
        });
        onSetDataExcelUpload(uniqueValues);
      };
      reader.readAsArrayBuffer(info.file);
    }
  };

  return (
    <>
      {contextHolder}
      <Upload {...props} onChange={handleChange}>
        <Button icon={<UploadOutlined />}>Tải file </Button>
      </Upload>
    </>
  );
};

export default UploadExcel;
