import React from 'react';

function Header(props) {
  return (
  <div className="text-center">
    <div className="col col-xm-12">
      <h1>{props.title}</h1>
    </div>
  </div>
  )
}

export default Header;