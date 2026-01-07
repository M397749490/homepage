import { MailOutlined, QqOutlined, WechatOutlined } from "@ant-design/icons";
import React from "react";

const ContactInfo = React.memo(function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg border-t-2 border-green-800 pt-4 mt-4 font-vt323 md:px-5">
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors col-span-1 md:col-span-1 justify-center md:justify-start text-center md:text-left">
        <a href="https://wpa.qq.com/msgrd?V=3&uin=397749490"><QqOutlined className="w-5 h-5" /> 397749490</a>
      </div>
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors col-span-1 md:col-span-1 justify-center md:justify-start text-center md:text-left">
        <span><WechatOutlined className="w-5 h-5" /> M397749490</span>
      </div>
      <div className="flex items-center gap-2 hover:text-green-300 transition-colors col-span-1 md:col-span-1 justify-center md:justify-start text-center md:text-left">
        <a href="mailto:M397749490@outlook.com"><MailOutlined className="w-5 h-5" /> M397749490@outlook.com</a>
      </div>
    </div>
  );
});

export { ContactInfo };