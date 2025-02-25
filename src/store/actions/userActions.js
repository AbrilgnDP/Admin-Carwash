import Cookies from "js-cookie";
import { instanceApi } from "../../apis/configAxios";
import {
 deleteUser,
 editUser,
 loadUser,
 loadUsers,
 verifyUser
} from "../reducer/userReducer";
import { enqueueSnackbar } from "notistack";

const headerConfig = {
  headers: {
      "Content-type": "application/json",
       "Authorization": `Bearer ${localStorage.getItem("token")}`,
  },
};    


export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await instanceApi.get("/user", headerConfig);
      dispatch(loadUsers(data.data));
    } catch (error) {
      enqueueSnackbar(`Error: ${data.data.response?.message}`);
    }
  };
};

export const getOneUser = (_id) => async (dispatch) => {
  try {
    const { data } = await instanceApi.get(`/user/${_id}`, headerConfig);
    dispatch(loadUser(data.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteOneUser = (_id) => async (dispatch) => {
  try {
    const response = await instanceApi.delete(`/user/delete-user/${_id}`, headerConfig);
    dispatch(deleteUser(_id))
    enqueueSnackbar(
      `Se elimino de manera correcta el usuario:${
        response.data?.fullname || ""
      }`,
      {
        variant: "success",
        anchorOrigin: { horizontal: "right", vertical: "top" },
      }
    );
  } catch (error) {
    enqueueSnackbar(`Error:${error.response}`);
  }
};

export const verifyOneUser = (id) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("accountVerified", true);
      const { data } = await instanceApi.put(`/user/validate/${id}`,formData ,headerConfig);
      dispatch(verifyUser(data.data));  
      enqueueSnackbar(`${data?.message || 'Verificado con éxito'}`, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } catch (error) {
      console.log(error);
      enqueueSnackbar(`Error: ${error.response.data. message || ''}`, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  };
};

export const editOneUser = (user_id, values) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("fullname", values.fullname);
      formData.append("type_customer", values.type_customer);
      formData.append("profile_image", values.profile_image);
      const { data } = await instanceApi.post(
        `/user/update/${user_id}`,
        formData,
       headerConfig
      );
      dispatch(editUser(user_id, data.data));
      enqueueSnackbar("Editado con exito", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      return(data.data)
    } catch (error) {
      console.log(error);
      enqueueSnackbar(
        `Ocurrió un error al actualizar la el servicio : ${error}`,
        {
          variant: "error",
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        }
      );
    }
  };
};
