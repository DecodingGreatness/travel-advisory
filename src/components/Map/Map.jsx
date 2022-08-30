import React from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./Styles";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px");

  return (
    <div className={classes.mapContainer}>
      <ReactMapGL
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
};

export default Map;
