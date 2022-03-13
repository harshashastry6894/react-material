import { Stack, Button, IconButton } from "@mui/material";
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';

export const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="https://mui.com/components/buttons/">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          primary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="primary">
          primary
        </Button>
      </Stack>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small" startIcon={<AccessAlarm />}>
          small
        </Button>
        <Button variant="contained" size="medium" endIcon={<AccessAlarm />}>
          medium
        </Button>
        <Button variant="contained" size="large" disableRipple disableElevation>
          large
        </Button>
        <IconButton color="primary" >
            <ThreeDRotation />
        </IconButton>
      </Stack>
    </Stack>
  );
};
