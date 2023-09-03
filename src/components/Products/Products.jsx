import { Grid } from "@mui/material";
import Product from "./Product/Product";
import ReactPaginate from "react-paginate";
import { useMediaQuery } from "react-responsive";
import css from "./Pagination.module.css";
import { useRef, useState } from "react";
import Slideshow from "./Slide";

const Products = ({ products, handleAddToCart }) => {
  const elementToScroll = useRef(null);
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;

  const pageCount = Math.ceil(products.length / itemsPerPage);

  const endOffset = page + itemsPerPage;
  const currentProducts = products.slice(page, endOffset);

  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });

  const handlePageClick = (e) => {
    const newPage = (e.selected * itemsPerPage) % products.length;
    setPage((prevState) => newPage);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="container">
      <div className="hero">
        <Slideshow />
      </div>
      <div>
        <Grid
          container
          justifyContent="center"
          spacing={4}
          ref={elementToScroll}
        >
          {currentProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} handleAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
        {isTablet ? (
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            nextLabel=">"
            previousLabel="<"
            breakLabel="..."
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            containerClassName={css.pagination}
            pageLinkClassName={css.pageLink}
            nextLinkClassName={css.pageLink}
            previousLinkClassName={css.pageLink}
            breakLinkClassName={css.pageLink}
            activeClassName={css.active}
            disabledClassName={css.disabled}
            scrollAnchor={elementToScroll}
          />
        ) : (
          <ReactPaginate
            pageCount={pageCount}
            pageRangeDisplayed={0}
            marginPagesDisplayed={1}
            nextLabel=">"
            previousLabel="<"
            breakLabel={null}
            onPageChange={handlePageClick}
            renderOnZeroPageCount={null}
            containerClassName={css.pagination}
            pageLinkClassName={css.pageLink}
            nextLinkClassName={css.pageLink}
            previousLinkClassName={css.pageLink}
            activeClassName={css.active}
            disabledClassName={css.disabled}
            scrollAnchor={elementToScroll}
          />
        )}
      </div>
    </main>
  );
};

export default Products;
