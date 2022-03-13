import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      {/* Headings */}
      <Typography variant="h1"> h1 heading</Typography>
      <Typography variant="h2"> h2 heading</Typography>
      <Typography variant="h3"> h3 heading</Typography>
      <Typography variant="h4" gutterBottom> h4 heading</Typography>
      <Typography variant="h5"> h5 heading</Typography>
      <Typography variant="h6"> h6 heading</Typography>
      {/* Subtitle */}
      <Typography variant="subtitle1"> subtitle1</Typography>
      <Typography variant="subtitle2"> subtitle 2</Typography>
      {/* Body partagraph */}
      <Typography variant="body1">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum, eum
        culpa amet, exercitationem porro pariatur qui modi ad dolore ratione a
        ullam necessitatibus tenetur ipsa iusto, voluptates quam id.
      </Typography>
      <Typography variant="body2">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum, eum
        culpa amet, exercitationem porro pariatur qui modi ad dolore ratione a
        ullam necessitatibus tenetur ipsa iusto, voluptates quam id
      </Typography>
    </div>
  );
};
