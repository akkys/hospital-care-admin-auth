import React from "react";

const TableHead = ({ contents, data, align }) => {
  return (
    <>
      <table className="table table-responsive-lg">
        <thead className="thead-light">
          <tr style={{ textAlign: `${align}` }}>
            {contents.map((content, i) => (
              <th key={i} scope="col">
                {content}
              </th>
            ))}
          </tr>
        </thead>
        {data}
      </table>
    </>
  );
};

export default TableHead;
