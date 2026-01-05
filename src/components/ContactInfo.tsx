import { MailOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg border-t-2 border-green-800 pt-4 mt-4 font-vt323">
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors cursor-pointer">
        <MailOutlined className="w-5 h-5" />
        <a href="mailto:M397749490@outlook.com">M397749490@outlook.com</a>
      </div>
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors">
        <QqOutlined className="w-5 h-5" />
        <span>397749490</span>
      </div>
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors">
        <WechatOutlined className="w-5 h-5" />
        <span>M397749490</span>
      </div>
    </div>
  );
}