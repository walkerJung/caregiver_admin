import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Paginations = styled.div`
  ${({ theme }) => {
    return css`
      width: 100%;
      display: flex;
      ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        li {
          justify-content: center;
          margin:0 2px;
          .page-link {
            background-color: white;
            display: flex;
            height: 40px;
            width: 40px;
            justify-content: center;
            align-items: center;
            border: solid 1px #eee;
            border-radius: 5px;
            color: #55b53d;
            transition: all 0.2s;
            box-shadow: none;
            &: hover {
              color: #42942d;
              background: #e2e7eb;
            }
            }
            &: focus {
              color: #42942d;
            }
          }

          .page-link[disabled] {
            color:#979797;
            background-color: #fff !important;
            cursor: auto;
            box-shadow: none;
            &: hover {
              color: #979797;
            }
          }
        }
        li.active {
          .page-link {
            background: black;
            color: white;
            -webkit-user-select:none;
            -moz-user-select:none;
            -ms-user-select:none;
            user-select:none;
            border:0;
            &: hover{
              color:white;
              background-color: black;
            }
          }
        }
      }
    `;
  }}
`;

const Item = ({ currentPage, baseUrl, startPage, endPage, totalPage }) => {
  let pages = [];
  let page = parseInt(currentPage);

  for (var i = startPage; i <= endPage && i <= totalPage; i++) {
    if (i === page) {
      pages.push(
        <li
          className={"page-item " + (i === page ? "active" : "")}
          key={"pagination" + i}
        >
          <div className="page-link" title="현재 페이지" to="#">
            {currentPage}
          </div>
        </li>
      );
    } else {
      pages.push(
        <li className="page-item" key={"pagination" + i}>
          <Link
            className="page-link"
            title={i + " 페이지 이동"}
            to={baseUrl + "page=" + i}
          >
            {i}
          </Link>
        </li>
      );
    }
  }
  return pages;
};

const Pagination = ({
  totalRecord,
  blockSize,
  pageSize,
  currentPage,
  baseUrl,
}) => {
  const currentBlock = Math.ceil(currentPage / blockSize);
  const totalPage = Math.ceil(totalRecord / pageSize);
  const totalBlock = Math.ceil(totalPage / blockSize);

  const startPage = (currentBlock - 1) * blockSize + 1;
  const endPage = currentBlock * blockSize;

  const prevBlockPage = startPage - 1;
  const nextBlockPage = endPage + 1;

  return (
    <Paginations>
      <ul>
        {currentBlock === 1 ? (
          <>
            <li className="page-item " key={"paginationPrev"}>
              <Link className="page-link " title={"이전 페이지 없음"} disabled>
                <i className="fa fa-angle-left" />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="page-item" key={"paginationPrev"}>
              <Link
                className="page-link"
                title={"이전 " + blockSize + "페이지 보기"}
                to={baseUrl + "page=" + prevBlockPage}
              >
                <i className="fa fa-angle-left" />
              </Link>
            </li>
          </>
        )}
        <Item
          currentPage={currentPage}
          baseUrl={baseUrl}
          startPage={startPage}
          endPage={endPage}
          totalPage={totalPage}
        />
        {currentBlock === totalBlock ? (
          <>
            <li className="page-item " key={"paginationPrev"}>
              <Link className="page-link " title={"다음 페이지 없음"} disabled>
                <i className="fa fa-angle-right" />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="page-item" key={"paginationNext"}>
              <Link
                className="page-link"
                title={"다음 " + nextBlockPage + "페이지 보기"}
                to={baseUrl + "page=" + nextBlockPage}
              >
                <i className="fa fa-angle-right" />
              </Link>
            </li>
          </>
        )}
      </ul>
    </Paginations>
  );
};

export default Pagination;
