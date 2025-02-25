import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer";
import uiReducer from "./reducer/uiReducer";
import servicesReducer from "./reducer/servicesReducer";
import categoryReducer from "./reducer/categoryReducer";
import typeCarReducer from "./reducer/typeCarReducer";
import subCategoryReducer from "./reducer/subCategoryReducer";
import commissionReducer from "./reducer/commissionReducer";
import documentationReducer from "./reducer/documentationReducer";
import servicesCustomerReducer from "./reducer/servicesCustomerReducer";
import myCarReducer from "./reducer/myCarReducer";
import typeUserReducer from "./reducer/typeUserReducer";
import branchReducer from "./reducer/branchReducer";
import membershipReducer from "./reducer/membershipReducer";
import userReducer from "./reducer/userReducer";
import productsReducer from "./reducer/productsReducer";
import storeHouseReducer from "./reducer/storeHouseReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  users: userReducer,
  services: servicesReducer,
  categories: categoryReducer,
  typeCars: typeCarReducer,
  typeUser: typeUserReducer,
  subCategories: subCategoryReducer,
  commissions: commissionReducer,
  documentations: documentationReducer,
  servicesCustomer: servicesCustomerReducer,
  myCars: myCarReducer,
  branches: branchReducer,
  memberships: membershipReducer,
  products : productsReducer,
  storeHouse : storeHouseReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
  // devTools:false
});
