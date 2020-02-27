import React from "react";
import classNames from "classnames";

import "./Table.css";

const Table = ({ columns, dark, children }) => (
  <table className={classNames("table table-striped", { dark })}>
    <thead>
      <tr>{columns && columns.map(column => <th>{column}</th>)}</tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default Table;
