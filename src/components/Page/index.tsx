import React, { FunctionComponent, useEffect } from 'react';

import './Page.css';

interface IProps {
  title: string;
}

const Page: FunctionComponent<IProps> = ({
  title,
  children
}) => {
  useEffect(() => { document.title = title }, [title]);
  return (
    <div className="page">
      <div className="top-bar">
        <h1 className="title">{title}</h1>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Page;
