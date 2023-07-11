import { enqueueSnackbar } from "notistack"
import { instanceApi } from "../../apis/configAxios"
import { loadService, loadServices, deleteService, editService, onAddNewService } from "../reducer/servicesReducer"

export const startLoadServices = () => {
    return async dispatch => {
        try {
            const { data } = await instanceApi.get('/services')
            dispatch(loadServices(data.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const getOneService = service_id =>
    async dispatch => {
        try {
            const { data } = await instanceApi.get(`/services/${service_id}`)
            dispatch(loadService(data.data));
        } catch (error) {
            console.log(error);
        }
    }

export const deleteOneServices = (service_id) =>
    async dispatch => {
        try {
            await instanceApi.delete(`/services/${service_id}`)
            dispatch(deleteService(service_id));
        } catch (error) {
            console.log(error);
        }
    }

    export const editOneService = (service_id, values) => {
        return async (dispatch) => {
            try {
            const { data } = await instanceApi.patch(
                `/services/${service_id}`,values
            );
            dispatch(editService(service_id, data.data));
            enqueueSnackbar('Categoria actualizada con exito', {variant:'success', anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }})
            } catch (error) {
              enqueueSnackbar(`Ocurrió un error al actualizar la categoria + ${error}`,
               {variant:'error', anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              }})
            }
        };
    
    };
    export const addOneService = (values) => async (dispatch) => {
        try {
          const { data } = await instanceApi.post(`/services/`, values);
          dispatch(onAddNewService(data.data));
          enqueueSnackbar('Categoria creada con éxito', {variant:'success', anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }})
      
        } catch (error) {
          console.log(error);
          enqueueSnackbar(`Ocurrió un error al agregar la categoria : ${error.response.data?.message}`,
          {variant:'error', anchorOrigin: {
           vertical: 'top',
           horizontal: 'right'
         }})
        }
      };
      export const searchServices = ({value}) => {
        return async (dispatch) => {
            try {
            const { data } = await instanceApi.get(
                `/services/search/search${value ? `?search=${value}` : `?search=${""}`}`,
            );
            console.log(data);
            dispatch(loadServices( data.data));
            enqueueSnackbar('Buesqueda realizada con exito', {variant:'success', anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }})
            } catch (error) {
              enqueueSnackbar(`Ocurrió un error al buscar el servicio + ${error}`,
               {variant:'error', anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              }})
            }
        };
      
      };
      