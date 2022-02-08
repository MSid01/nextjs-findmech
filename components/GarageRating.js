import Rating from "@mui/material/Rating";

const GarageRating = ({props})=>{
    return(
      <>
        <Rating
              sx={{ zIndex: props.zIndex}}
              name="read-only"
              value={props.rating}
              size= {props.garageDetails?"md":"small"}
              readOnly
            />
      </>
            )
}

export default GarageRating;