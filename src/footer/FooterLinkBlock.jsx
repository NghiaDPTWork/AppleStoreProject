import React from "react";

const FooterLinkBlock = ({ data }) => {
  const renderLinks = (links, keyPrefix) =>
    links.map((link, index) => (
      <li key={`${keyPrefix}-${index}`}>
        <a href="#">{link}</a>
      </li>
    ));

  return (
    <div className="footer-links_block">
      <ul>
        <li className="footer-list_header">{data.header}</li>
        {renderLinks(data.links, "main")}

        {data.secondaryHeader && (
          <>
            <li className="footer-list_header footer-list_header--secondary">
              {data.secondaryHeader}
            </li>
            {renderLinks(data.secondaryLinks, "sec")}
          </>
        )}

        {data.tertiaryHeader && (
          <>
            <li className="footer-list_header footer-list_header--secondary">
              {data.tertiaryHeader}
            </li>
            {renderLinks(data.tertiaryLinks, "ter")}
          </>
        )}
      </ul>
    </div>
  );
};

export default FooterLinkBlock;
