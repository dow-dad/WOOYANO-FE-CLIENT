// CUSTOM ICON COMPONENT
import duotone from "icons/duotone";
export const navigations = [{
  type: "label",
  label: "Dashboard"
}, {
  name: "Analytics 1",
  path: "/dashboard",
  icon: duotone.PersonChalkboard
}, {
  name: "Analytics 2",
  path: "/dashboard/analytics-2",
  icon: duotone.BadgeDollar
}, {
  name: "Ecommerce",
  path: "/dashboard/ecommerce",
  icon: duotone.RectangleCirclePlus
}, {
  name: "CRM",
  path: "/dashboard/crm",
  icon: duotone.CommentsQuestionCheck
}, {
  name: "Logistics",
  path: "/dashboard/logistics",
  icon: duotone.DiagramProject
}, {
  name: "Marketing",
  path: "/dashboard/marketing",
  icon: duotone.LayerGroup
}, {
  name: "Finance 1",
  path: "/dashboard/finance",
  icon: duotone.MessagesDollar
}, {
  name: "Finance 2",
  path: "/dashboard/finance-2",
  icon: duotone.PersonCircleCheck
}, {
  type: "label",
  label: "Management"
}, {
  name: "Profiles",
  icon: duotone.UserProfile,
  path: "/dashboard/profile"
}, {
  name: "Accounts",
  icon: duotone.Accounts,
  path: "/dashboard/account"
}, {
  name: "Users",
  icon: duotone.UserList,
  children: [{
    name: "Add User",
    path: "/dashboard/users/add-user"
  }, {
    name: "User List 1",
    path: "/dashboard/users/user-list-1"
  }, {
    name: "User Grid 1",
    path: "/dashboard/users/user-grid-1"
  }, {
    name: "User List 2",
    path: "/dashboard/users/user-list-2"
  }, {
    name: "User Grid 2",
    path: "/dashboard/users/user-grid-2"
  }]
}, {
  name: "Products",
  icon: duotone.AdminEcommerce,
  children: [{
    name: "Product List",
    path: "/dashboard/products/product-list-view"
  }, {
    name: "Product Grid",
    path: "/dashboard/products/product-grid-view"
  }, {
    name: "Create Product",
    path: "/dashboard/products/create-product"
  }, {
    name: "Product Details",
    path: "/dashboard/products/product-details"
  }]
}, {
  name: "Invoice",
  icon: duotone.Invoice,
  children: [{
    name: "Invoice List",
    path: "/dashboard/invoices/invoice-list"
  }, {
    name: "Invoice Details",
    path: "/dashboard/invoices/invoice-details"
  }, {
    name: "Create Invoice",
    path: "/dashboard/invoices/create-invoice"
  }]
}, {
  name: "Ecommerce",
  icon: duotone.Ecommerce,
  children: [{
    name: "Cart",
    path: "/dashboard/cart"
  }, {
    name: "Payment",
    path: "/dashboard/payment"
  }, {
    name: "Billing Address",
    path: "/dashboard/billing-address"
  }, {
    name: "Payment Complete",
    path: "/dashboard/payment-complete"
  }]
}, {
  name: "Data Table",
  icon: duotone.DataTable,
  children: [{
    name: "Data Table 1",
    path: "/dashboard/data-tables/table-1"
  }]
}, {
  type: "label",
  label: "Apps"
}, {
  name: "Todo List",
  icon: duotone.TodoList,
  path: "/dashboard/todo-list"
}, {
  name: "Chats",
  icon: duotone.Chat,
  path: "/dashboard/chat"
}, {
  name: "Email",
  icon: duotone.Inbox,
  children: [{
    name: "Inbox",
    path: "/dashboard/email/all"
  }, {
    name: "Email Details",
    path: "/dashboard/email/details"
  }, {
    name: "Create Email",
    path: "/dashboard/email/compose"
  }]
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
}, {
  name: "Pages",
  icon: duotone.Pages,
  children: [{
    name: "About",
    path: "/dashboard/about"
  }, {
    name: "Career",
    path: "/dashboard/career"
  }, {
    name: "Career Apply",
    path: "/dashboard/career/1"
  }, {
    name: "Support",
    path: "/dashboard/support"
  }, {
    name: "Create Ticket",
    path: "/dashboard/support/create-ticket"
  }, {
    name: "File Manager",
    path: "/dashboard/file-manager"
  }]
}, {
  type: "extLink",
  name: "Documentation",
  icon: duotone.FileCircleQuestion,
  path: "https://quickframe-doc.vercel.app"
}, {
  type: "label",
  label: "Others"
}, {
  path: "#",
  access: "admin",
  name: "Admin Profile",
  icon: duotone.Accounts
}, {
  path: "https://quickframe-doc.vercel.app",
  name: "Item Disabled",
  icon: duotone.Folder,
  disabled: true
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