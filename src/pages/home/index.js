import React from "react";
import PageHeader from "../../components/page-header";
import ArticleList from "../../components/article-list";

import './index.scss'
import SideContent from "../../components/side-content";
class Home extends React.Component {
  render() {
    return <div className='home'>
      <PageHeader />
      <div className="home__body">
        <ArticleList></ArticleList>
        <SideContent></SideContent>
      </div>
    </div>;
  }
}
export default Home;
