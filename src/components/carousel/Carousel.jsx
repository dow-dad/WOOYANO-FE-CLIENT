import { Children, useState } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { styled, Box, alpha } from "@mui/material"; // CUSTOM ICON COMPONENTS

import ChevronRight from "icons/ChevronRight";
import ChevronLeft from "icons/ChevronLeft"; // STYLED COMPONENT

const SwiperContainer = styled(Box)(({
  theme
}) => ({
  overflow: "hidden",
  position: "relative",
  "& .swiper:has(+ .swiper-controls .swiper-pagination)": {
    marginBottom: 40
  },
  "& .swiper-controls": {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    ".swiper-pagination": {
      bottom: 0,
      ".swiper-pagination-bullet": {
        width: 8,
        height: 8,
        backgroundColor: theme.palette.grey[400],
        "&.swiper-pagination-bullet-active": {
          backgroundColor: theme.palette.primary.main,
          boxShadow: `${alpha(theme.palette.primary.main, 0.1)} 0px 0px 0px 4px`
        }
      }
    },
    ".swiper-navigation": {
      pointerEvents: "all",
      ".swiper-button": {
        width: 50,
        height: 50,
        backgroundColor: theme.palette.common.white,
        borderRadius: "50%",
        "::after": {
          display: "none"
        },
        ".MuiSvgIcon-root": {
          color: theme.palette.grey[900],
          fontSize: 25
        },
        "&.swiper-button-disabled": {
          opacity: 0.6
        }
      }
    }
  }
})); // ==============================================================

// ==============================================================
const Carousel = ({
  children,
  navigation,
  pagination,
  ...props
}) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const [paginationEl, setPaginationEl] = useState(null);
  return <SwiperContainer>
      <Swiper spaceBetween={0} autoplay={{
      delay: 2500
    }} modules={[Navigation, Pagination, Autoplay, A11y]} navigation={navigation ? {
      prevEl,
      nextEl
    } : false} pagination={pagination ? {
      clickable: true,
      el: paginationEl
    } : false} {...props}>
        {Children.map(children, child => <SwiperSlide>{child}</SwiperSlide>)}
      </Swiper>

      <div className="swiper-controls">
        {
        /* =============custom navigation ============= */
      }
        {navigation && <div className="swiper-navigation">
            <div role="button" ref={node => setPrevEl(node)} className="swiper-button swiper-button-prev">
              <ChevronLeft />
            </div>

            <div role="button" ref={node => setNextEl(node)} className="swiper-button swiper-button-next">
              <ChevronRight />
            </div>
          </div>}

        {
        /* ============= custom pagination =============*/
      }
        {pagination && <div className="swiper-pagination" ref={node => setPaginationEl(node)} />}
      </div>
    </SwiperContainer>;
};

export default Carousel;