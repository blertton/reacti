import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ tv }) {
  return (
    <>
      <Card
        sx={{
          width: 240,
          height: 400,
          display: "inline-flex",
          mt: 10,
          mx: 8,
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="350"
            style={{ objectFit: "cover" }}
            image={`https://image.tmdb.org/t/p/w500/${tv.posterPath}`}
            alt={tv.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              fontSize="14px"
              fontWeight="bold"
              component="div"
              textAlign="left"
              sx={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {tv.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
