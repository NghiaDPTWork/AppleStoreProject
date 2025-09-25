import "./Footer.scss";
import { footerData } from "./FooterData";
import FooterLinkBlock from "./FooterLinkBlock";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-block">
        <div className="footer-block_content">
          <div className="footer-links">
            {footerData.map((block, index) => (
              <FooterLinkBlock key={index} data={block} />
            ))}
          </div>

          <div className="footer-bottom">
            <p>
              Xem thêm cách để mua hàng: <a href="#">Tìm cửa hàng bán lẻ</a> gần
              bạn.
              <br />
              Hoặc gọi 1800-1192.
            </p>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            Bản quyền &copy; {new Date().getFullYear()} Apple Inc. Bảo lưu mọi
            quyền.
          </p>
          <div className="legal-links">
            <a href="#">Chính Sách Quyền Riêng Tư</a>
            <a href="#">Điều Khoản Sử Dụng</a>
            <a href="#">Bán Hàng và Hoàn Tiền</a>
            <a href="#">Pháp Lý</a>
            <a href="#">Sơ Đồ Trang Web</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
