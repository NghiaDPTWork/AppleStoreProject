const NavigationLink = ({ linkData }) => {
  return (
    <li className={linkData.isIcon ? "menu-item menu-item--icon" : "menu-item"}>
      <a href={linkData.url}>{linkData.label}</a>
    </li>
  );
};

export default NavigationLink;
