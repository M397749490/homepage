import { MailOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg border-t-2 border-green-800 pt-4 mt-4 font-vt323 justify-items-center text-center">
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors">
        <a href="https://wpa.qq.com/msgrd?V=3&uin=397749490"><QqOutlined className="w-5 h-5" /> 397749490</a>
      </div>
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors relative group">
        <span><WechatOutlined className="w-5 h-5" /> M397749490</span>
      </div>
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors">
        <a href="mailto:M397749490@outlook.com"><MailOutlined className="w-5 h-5" /> M397749490@outlook.com</a>
      </div>
    </div>
  );
}