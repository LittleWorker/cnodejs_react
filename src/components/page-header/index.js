import React from "react";
import "./index.scss";

class PageHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      menuList: ["首页", "新手入门", "API", "关于", "注册", "登录"],
    };
  }

  render() {
    const menuList = this.state.menuList.map((menuName) => {
      return <li className="page-header__menu-item">{menuName}</li>;
    });
    return (
      <div className="page-header">
        <div className="page-header__inner">
          <div className="page-header-left">
            <a className="page-header__logo" href="/">
              <img
                src="https://static2.cnodejs.org/public/images/cnodejs_light.svg"
                alt="logo"
              />
            </a>
            {/* <input className="page-header__search"></input> */}
          </div>
          <ul className="page-header__menu">{menuList}</ul>
        </div>
      </div>
    );
  }
}

export default PageHeader;
