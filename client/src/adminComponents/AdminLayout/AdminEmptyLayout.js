import { AdminContent } from 'components/AdminLayout';
import React from 'react';

const AdminEmptyLayout = ({ children, ...restProps }) => (
  <main className="cr-app bg-light" {...restProps}>
    <AdminContent fluid>{children}</AdminContent>
  </main>
);

export default AdminEmptyLayout;
