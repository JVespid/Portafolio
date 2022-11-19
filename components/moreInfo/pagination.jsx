import React from "react";
import Link from "next/link";

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
      active = i === page ? "active" : "no-active";
      pages.push(
        <li className={`number ${active}`} key={k++}>
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
      <div key={1} className={`container`}>
        <div className="before">
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
            <div className="before">
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

        <div className={`pagination-container`}>
          <ul>{pagination()}</ul>
        </div>

        {j >= page + 1 ? (
          <>
            <div className="after">
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
        <div className="after">
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
      <div className="pagination">{container()}</div>

      <style jsx global>{`
        .pagination {
          width: 100%;
          height: 60px;
        }
        .container {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 100%;
        }

        .pagination-container {
          display: flex;
          flex-wrap: no-wrap;
          justify-content: center;
          align-items: center;

          width: auto;
          height: 100%;
        }

        .pagination-container ul {
          display: flex;
          flex-wrap: no-wrap;
          justify-content: center;
          align-items: center;

          width: auto;
          height: 100%;
          margin: 0 5px;
        }

        .after,
        .before {
          margin: 0 5px;
        }

        .before a,
        .after a {
        }
        .before a:hover,
        .after a:hover {
          cursor: pointer;
          background-color: ${color.naranja};
          color: ${color.blanco};
        }

        .number {
          display: flex;
          justify-content: center;
          align-items: center;

          margin: 0 5px;

          width: auto;
          height: auto;
        }

        .number a {
          display: flex;
          justify-content: center;
          align-items: center;

          width: 21px;
          height: 21px;
          background-color: ${color.blanco};

          border: solid 1px ${color.negro};
          border-radius: 15px;
        }
        .number a:hover {
          cursor: pointer;
          color: ${color.blanco};
          background-color: ${color.naranja};
        }

        .active a {
          color: ${color.blanco};
          background-color: ${color.naranja};
        }
      `}</style>
    </>
  );
};

export default Pagination;
