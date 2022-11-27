import React from "react";
import Link from "next/link";
import stl from "../../styles/pagination.module.scss";

import estilos from "../../styles/stl";
const { color } = estilos();

const Pagination = ({ j, type, page }) => {
  const pagination = () => {
    const pages = [];
    let active,
      k = 0,
      jMax = j,
      jMin = 1,
      aux;

    if (j > 10 && page > 5) {
      jMax = 10;
      aux = page - 5;

      jMin += aux;
      jMax += aux;

      if (jMax > j) {
        jMin = j - 9;
        jMax = j;
      }
    }

    for (let i = jMin; i <= jMax; i++) {
      active = i === page ? stl.active : stl.noActive;
      pages.push(
        <li className={`${stl.number} ${active}`} key={k++}>
          <Link
            href={{
              pathname: `/moreInfo`,
              query: { type: type, page: i },
            }}
          >
            <a>{i}</a>
          </Link>
        </li>
      );
    }
    return pages;
  };
  const container = () => {
    const pages = [];
    pages.push(
      <div key={1} className={stl.container}>
        <div className={stl.before}>
          <Link
            href={{
              pathname: `/moreInfo`,
              query: { type: type, page: 1 },
            }}
          >
            <a>{"<<"}</a>
          </Link>
        </div>
        {0 < page - 1 ? (
          <>
            <div className={stl.before}>
              <Link
                href={{
                  pathname: `/moreInfo`,
                  query: { type: type, page: page - 1 },
                }}
              >
                <a>previous</a>
              </Link>
            </div>
          </>
        ) : null}

        <div className={stl.paginationContainer}>
          <ul>{pagination()}</ul>
        </div>

        {j >= page + 1 ? (
          <>
            <div className={stl.after}>
              <Link
                href={{
                  pathname: `/moreInfo`,
                  query: { type: type, page: page + 1 },
                }}
              >
                <a>next</a>
              </Link>
            </div>
          </>
        ) : null}
        <div className={stl.after}>
          <Link
            href={{
              pathname: `/moreInfo`,
              query: { type: type, page: j },
            }}
          >
            <a>{">>"}</a>
          </Link>
        </div>
      </div>
    );
    return pages;
  };

  return (
    <>
      <div className={stl.pagination}>{container()}</div>
    </>
  );
};

export default Pagination;
