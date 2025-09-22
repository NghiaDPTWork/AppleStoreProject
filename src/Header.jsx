import { FaApple } from 'react-icons/fa';      
import { CiSearch } from 'react-icons/ci';   
import { BsBag } from 'react-icons/bs';
import './Header.scss'; 

function Header() {
  return (
    <div className="container">
      <div className="navbar-block">
        <div className="navbar-block_div">
          <ul className="menu">
            <li><a href="#"><FaApple size={18} /></a></li>
            <li><a href="#">Cửa hàng</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Nhà</a></li>
            <li><a href="#">Giải Trí</a></li>
            <li><a href="#">Phụ kiện</a></li>
            <li><a href="#">Hỗ Trợ</a></li>
            <li><a href="#"><CiSearch size={18} /></a></li>
            <li><a href="#"><BsBag size={16} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;