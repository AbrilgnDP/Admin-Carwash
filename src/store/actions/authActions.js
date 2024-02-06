import axios from "axios";
import Cookies from "js-cookie";
import { instanceApi } from "../../apis/configAxios";
import { enqueueSnackbar } from "notistack";
import { onLogin } from '../reducer/authReducer'

export const startLogin = ({ email, password }) => async (dispatch) => {
 
  try {
<<<<<<< HEAD
    const { data } = await instanceApi.post("/auth/login/admin", {
=======
    const { data } = await instanceApi.post("/auth/login", {
>>>>>>> 51f92ccf0726bf9bcec9bee579e196ab2d6180c5
      email,
      password,
    });
    console.log(data);
    dispatch(onLogin(data.data.user));
<<<<<<< HEAD
    localStorage.setItem("TokenAdmin", data.data.token, { expires: 7 });
=======
    localStorage.setItem("token", data.data.token, { expires: 7 });
>>>>>>> 51f92ccf0726bf9bcec9bee579e196ab2d6180c5
    return {
      success: true,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      enqueueSnackbar(
        "Error en el inicio de sesión" && error.response.data.message,
        { variant: "error" }
      );
      return {
        success: false,
      };
    }
    return {
      success: false,
    };
  }
};

export const startRevalidateToken = () => async (dispatch) => {
  try {
<<<<<<< HEAD
    const { data } = await instanceApi.get("/auth/admin/user");
    dispatch(onLogin(data.data.user));
    localStorage.getItem("TokenAdmin", data.data.token, { expires: 7 });
=======
    const token = localStorage.getItem("token");
    const { data } = await userApi.get("/auth/user", {
      headers: {
        Token: token,
      },
    });
    dispatch(onLogin(data.data.user))
>>>>>>> 51f92ccf0726bf9bcec9bee579e196ab2d6180c5
  } catch (error) {
    console.log(error);
  }
};
