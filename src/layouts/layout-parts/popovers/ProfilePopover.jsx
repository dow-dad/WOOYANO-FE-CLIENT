"use client";
import { Fragment, useRef, useState } from "react";
import { Box, styled, Avatar, Divider, ButtonBase } from "@mui/material"; // CUSTOM COMPONENTS
import PopoverLayout from "./PopoverLayout";
import { FlexBox } from "components/flexbox";
import { AvatarLoading } from "components/avatar-loading";
import { H6, Paragraph, Small } from "components/typography"; // CUSTOM DEFINED HOOK
import useNavigate from "hooks/useNavigate"; // CUSTOM UTILS METHOD
import { isDark } from "utils/constants"; // STYLED COMPONENTS
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  marginLeft: 8,
  borderRadius: 30,
  border: `1px solid ${theme.palette.grey[isDark(theme) ? 800 : 200]}`,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
const StyledSmall = styled(Paragraph)(({ theme }) => ({
  fontSize: 13,
  display: "block",
  cursor: "pointer",
  padding: "5px 1rem",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ProfilePopover = () => {
  const { data, status } = useSession();
  console.log(data?.user.result, status);

  const anchorRef = useRef(null);
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleMenuItem = (path) => () => {
    navigate(path);
    setOpen(false);
  };

  return (
    <Fragment>
      {status === "authenticated" ? (
        <>
          <StyledButtonBase ref={anchorRef} onClick={() => setOpen(true)}>
            <AvatarLoading
              alt="user"
              percentage={60}
              src="/static/user/user-11.png"
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </StyledButtonBase>

          <PopoverLayout
            hiddenViewButton
            maxWidth={230}
            minWidth={200}
            popoverOpen={open}
            anchorRef={anchorRef}
            popoverClose={() => setOpen(false)}
            title={
              <FlexBox alignItems="center" gap={1}>
                <Avatar
                  src="/static/user/user-11.png"
                  sx={{
                    width: 35,
                    height: 35,
                  }}
                />

                <Box>
                  <H6 fontSize={14}> {data.user.result.name || "소준영"}{` `}님</H6>
                  <Small color="text.secondary" display="block">
                    {data?.user.result.email}
                  </Small>
                </Box>
              </FlexBox>
            }
          >
            <Box pt={1}>
              <StyledSmall onClick={handleMenuItem("/dashboard/profile")}>
                매장정보 관리
              </StyledSmall>
              <StyledSmall onClick={handleMenuItem("/dashboard/workers")}>
              작업자 관리
              </StyledSmall>
              <StyledSmall onClick={handleMenuItem("/dashboard/invoices")}>
                서비스 예약 관리
              </StyledSmall>
              <StyledSmall onClick={handleMenuItem("/dashboard/products/product-list-view")}>
                상품 관리
              </StyledSmall>
              <StyledSmall onClick={handleMenuItem("/dashboard/calculate")}>
                정산
              </StyledSmall>
              <Divider
                sx={{
                  my: 1,
                }}
              />

              <StyledSmall onClick={() => signOut()}>Sign Out</StyledSmall>
            </Box>
          </PopoverLayout>
        </>
      ) : (
        <LoginIcon />
      )}
    </Fragment>
  );
};

export default ProfilePopover;

export const LoginIcon = () => {
  return (
    <Link
      href={"/login"}
      className=""
    >
        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} border={1}  borderRadius={"50%"} ml={1}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.15997 14.56C4.73997 16.18 4.73997 18.82 7.15997 20.43C9.90997 22.27 14.42 22.27 17.17 20.43C19.59 18.81 19.59 16.17 17.17 14.56C14.43 12.73 9.91997 12.73 7.15997 14.56Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </Box>
        
    </Link>
  )
}
