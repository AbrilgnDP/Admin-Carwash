import React, { useState } from "react";
import Titles from "../../components/ui/Titles";
import UploadImage from "../../components/ui/UploadImage";
import Grid from "@mui/material/Grid";
import { Card, CardActionArea, CardContent, CardMedia, TextField, TextareaAutosize, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import { useTypeCars } from "../../hooks/UseTypeCars";
import AddImage from "../../../src/assets/Images/add.png";

const Edit = () => {
  const { id } = useParams();
  const { loadTypeCar, editTypeCar,typeCar } = useTypeCars();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleImage = ({ target }) => {
    setPreviewImage(URL.createObjectURL(target.files[0]));
    setSelectedFile(target.files[0]);
  };

  useEffect(() => {
    loadTypeCar(id);
  }, []);

  useEffect(() => {
    formik.setValues({
      name: typeCar.name,
      status: typeCar.status,
      typeCar_image : previewImage,
    });
  }, [typeCar]);

  const formik = useFormik({
    initialValues: {
      name: "",
      status: "",
      typeCar_image: "",
    },
    onSubmit: (values) => {
      try {
        values.typeCar_image = selectedFile;
        editTypeCar(typeCar._id, values)
        navigate('/auth/typeCar', {replace:true})
        
      } catch (error) {
        return enqueueSnackbar('Error al editar la categoria', {variant:'error', anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }}, )
      }

    },
  });
  
  const outEdit = () => {
    navigate("/auth/typeCar", { replace: true });}

  return (
    <Box component="form" onSubmit={formik.handleSubmit} marginX={"10%"}>
      <Titles name={<h2 align="center">Editar Tipo de auto</h2>} />
      <Grid
        color="#F7BFBF"
        borderRadius={5}
        mt={3}
        sx={{ border: 10, p: 5 }}
        container
        spacing={4}
      >
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  sx={{ height: 140 }}
                  image={
                    selectedFile
                      ? previewImage
                      : typeCar.typeCar_image || AddImage
                  }
                  title={selectedFile ? selectedFile.name : "Selecciona imagen"}
                  component={"input"}
                  type={"file"}
                  id={"typeCar_image"}
                  name={"typeCar_image"}
                  accept={"image/png, image/jpeg"}
                  value={formik.values.typeCar_image}
                  onChange={handleImage}
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {selectedFile ? selectedFile.name : "Selecciona una imagen"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        <Grid
          item
          sm={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <TextField
            focused
            fullWidth
            id="name"
            name="name"
            label="Nombre del servicio"
            variant="outlined"
            value={formik.values?.name}
            sx={{ margin: 2 }}
            onChange={formik.handleChange}
          />

          <Grid
            container
            justifyContent={"center"}
            justifyItems={"center"}
            alignItems={"center"}
          >
            {/* <Grid display="flex" flexDirection="column">
              <FormControl>
                <FormLabel id="status-label">Estatus</FormLabel>
                <RadioGroup
                  aria-labelledby="status-label"
                  name="status"
                  value={formik.values?.status}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel
                    value={true}
                    control={<Radio />}
                    label="Activo"
                  />
                  <FormControlLabel
                    value={false}
                    control={<Radio />}
                    label="Desactivado"
                  />
                </RadioGroup>
              </FormControl>
            </Grid> */}

            <Grid item sx={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained">
                Guardar
              </Button>
              <Button onClick={outEdit} variant="outlined" color="secondary">
                Salir
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code> */}
    </Box>
  );
};

export default Edit;
