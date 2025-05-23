import React from 'react'

import BreadCrumb from 'Common/BreadCrumb';

const Ecommerce = () => {
  document.title="Dashboard | Steex Admin & Dashboard Template";

  return (
    <React.Fragment>
       <BreadCrumb title="Ecommerce" pageTitle="Dashboards" />
    </React.Fragment>
  )
}

export default Ecommerce;
