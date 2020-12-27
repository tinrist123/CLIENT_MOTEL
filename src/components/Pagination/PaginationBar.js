import React from "react";
import "./PaginationBar.scss";
function PaginationBar(props) {
  const { maxPageSize, currentPage, ChangeNumPage } = props;
  let tempNumberArr = [];
  for (let i = 0; i < maxPageSize; i++) {
    tempNumberArr.push(i + 1);
  }

  function PrevPage(currentNum) {
    ChangeNumPage(--currentNum);
  }

  function NextPage(currentNum) {
    ChangeNumPage(++currentNum);
  }

  return (
    <ul className="number_page_list">
      <div className="list_number">
        <li className="page_number">
          <span className="special_page" onClick={() => PrevPage(currentPage)}>
            Prev
          </span>
        </li>
        {tempNumberArr.map((number) => {
          return (
            <li className={`page_number`} onClick={() => ChangeNumPage(number)}>
              <span className={`${currentPage === number && "active"}`}>
                {number}
              </span>
            </li>
          );
        })}
        <li className="page_number">
          <span className="special_page" onClick={() => NextPage(currentPage)}>
            Next
          </span>
        </li>
      </div>
    </ul>
  );
}

export default PaginationBar;
