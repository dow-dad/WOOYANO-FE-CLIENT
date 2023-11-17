// CUSTOM ICON COMPONENT
import duotone from "icons/duotone";
export const navigations = [
{
  type: "label",
  label: "Management"
}, {
  name: "업체 회원 정보",
  icon: duotone.Accounts,
  path: "/dashboard/account"
}, {
  name: "매장 정보",
  icon: duotone.UserProfile,
  path: "/dashboard/profile"
}, {
  name: "작업자 관리",
  icon: duotone.UserList,
  path: "/dashboard/users"
}, {
  name: "서비스 예약 관리",
  icon: duotone.Invoice,
  path: "dashboard/invoices"
},{
  name: "상품 관리",
  icon: duotone.AdminEcommerce,
  children: [{
    name: "상품 리스트 조회",
    path: "/dashboard/products/product-list-view"
  }, 
  {
    name: "상품 등록",
    path: "/dashboard/products/create-product"
  }, ]
},

{
  type: "label",
  label: "Apps"
}, {
  name: "Sessions",
  icon: duotone.Session,
  children: [{
    name: "Login",
    path: "/login"
  }, {
    name: "Register",
    path: "/register"
  }, {
    name: "Forget Password",
    path: "/forget-password"
  }]
}, 
// {
//   type: "extLink",
//   name: "Documentation",
//   icon: duotone.FileCircleQuestion,
//   path: "https://quickframe-doc.vercel.app"
// }, 

{
  type: "label",
  label: "Others"
}, {
  name: "Multi Level Item",
  icon: duotone.Apps,
  children: [{
    name: "Level A",
    path: "#dashboard/cart"
  }, {
    iconText: "B",
    name: "Level B",
    path: "#dashboard/payment",
    children: [{
      name: "Level B1",
      path: "#dashboard/payment"
    }, {
      iconText: "B",
      name: "Level B2",
      path: "#dashboard/payment",
      children: [{
        name: "Level B21",
        path: "#dashboard/payment"
      }, {
        name: "Level B22",
        path: "#dashboard/payment"
      }]
    }]
  }]
}];