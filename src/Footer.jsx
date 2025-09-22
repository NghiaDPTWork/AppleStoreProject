import "./Footer.scss";

const Footer = () => {
  return (
    <div className="container">
      <div className="footer-block">
        <div className="footer-block_content">
          <div className="footer-links">
            <div className="footer-links_block">
              <ul>
                <li className="footer-list_header">Mua Sắm Và Tìm Hiểu</li>
                <li><a href="#">Cửa Hàng</a></li>
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPad</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">Watch</a></li>
                <li><a href="#">AirPods</a></li>
                <li><a href="#">TV & Nhà</a></li>
                <li><a href="#">AirTag</a></li>
                <li><a href="#">Phụ Kiện</a></li>
                <li><a href="#">Thẻ Quà Tặng</a></li>
                <li className="footer-list_header footer-list_header--secondary">Ví Apple</li>
                <li><a href="#">Ví</a></li>
              </ul>
            </div>
            <div className="footer-links_block">
              <ul>
                <li className="footer-list_header">Tài Khoản</li>
                <li><a href="#">Quản Lý Tài Khoản Apple Của Bạn</a></li>
                <li><a href="#">Tài Khoản Apple Store</a></li>
                <li><a href="#">iCloud.com</a></li>
                <li className="footer-list_header footer-list_header--secondary">Giải Trí</li>
                <li><a href="#">Apple One</a></li>
                <li><a href="#">Apple TV+</a></li>
                <li><a href="#">Apple Music</a></li>
                <li><a href="#">Apple Arcade</a></li>
                <li><a href="#">Apple Podcasts</a></li>
                <li><a href="#">Apple Books</a></li>
              </ul>
            </div>
            <div className="footer-links_block">
              <ul>
                <li className="footer-list_header">Apple Store</li>
                <li><a href="#">Ứng Dụng Apple Store</a></li>
                <li><a href="#">Apple Trade In</a></li>
                <li><a href="#">Trạng Thái Đơn Hàng</a></li>
                <li><a href="#">Hỗ Trợ Mua Hàng</a></li>
              </ul>
            </div>
            <div className="footer-links_block">
              <ul>
                <li className="footer-list_header">Dành Cho Doanh Nghiệp</li>
                <li><a href="#">Apple và Doanh Nghiệp</a></li>
                <li><a href="#">Mua Sắm Cho Doanh Nghiệp</a></li>
                <li className="footer-list_header footer-list_header--secondary">Cho Giáo Dục</li>
                <li><a href="#">Apple và Giáo Dục</a></li>
                <li><a href="#">Mua Sắm Cho Bậc Đại Học</a></li>
                <li className="footer-list_header footer-list_header--secondary">Dành Cho Chăm Sóc Sức Khỏe</li>
                <li><a href="#">Apple trong Chăm sóc Sức khỏe</a></li>
                <li><a href="#">Sức khỏe trên Apple Watch</a></li>
              </ul>
            </div>
            <div className="footer-links_block">
              <ul>
                <li className="footer-list_header">Giá Trị Cốt Lõi Của Apple</li>
                <li><a href="#">Trợ Năng</a></li>
                <li><a href="#">Môi Trường</a></li>
                <li><a href="#">Quyền Riêng Tư</a></li>
                <li><a href="#">Chuỗi Cung Ưng</a></li>
                <li className="footer-list_header footer-list_header--secondary">Về Apple</li>
                <li><a href="#">Newsroom</a></li>
                <li><a href="#">Lãnh Đạo Của Apple</a></li>
                <li><a href="#">Việc Làm</a></li>
                <li><a href="#">Đạo Đức & Quy Tắc</a></li>
                <li><a href="#">Sự kiện</a></li>
                <li><a href="#">Liên Hệ Apple</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Xem thêm cách để mua hàng: <a href="#">Tìm cửa hàng bán lẻ</a> gần bạn.
              <br />
              Hoặc gọi 1800-1192.
            </p>
          </div>
        </div>
        <div className="footer-legal">
          <p>Bản quyền © 2025 Apple Inc. Bảo lưu mọi quyền.</p>
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