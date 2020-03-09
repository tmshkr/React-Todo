import React, { memo, useEffect, useState } from "react";

function Search(props) {
  const { setSearchTerm } = props;

  return (
    <li className="list-group-item create-task">
      <input type="text" placeholder="Search..." onChange={setSearchTerm} />
    </li>
  );
}

export default memo(Search);
