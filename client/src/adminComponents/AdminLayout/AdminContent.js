import React from 'react';

import bn from 'utils/bemnames';

import { Container } from 'reactstrap';

const bem = bn.create('content');

const AdminContent = ({ tag: Tag, className, ...restProps }) => {
  const classes = bem.b(className);

  return <Tag className={classes} {...restProps} />;
};

AdminContent.defaultProps = {
  tag: Container,
};

export default AdminContent;
