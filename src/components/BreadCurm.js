import React from 'react'
import { Breadcrumb } from 'react-bootstrap';
import {Link} from "react-router-dom"


function BreadCurm() {
  return (
    <div>
        <Breadcrumb>
      <Breadcrumb.Item active href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item active href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Brands
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Jak & Jones</Breadcrumb.Item>
      <Breadcrumb.Item active><strong>Catalogue</strong></Breadcrumb.Item>
    </Breadcrumb>
    </div>
  )
}

export default BreadCurm