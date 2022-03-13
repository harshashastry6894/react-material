import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import {
  AccessAlarm,
  ThreeDRotation,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import React, { useState } from "react";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string | null>(null)

  const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updateFormats: string | null) => {
    console.log(updateFormats)
    setFormats(updateFormats)
  }
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
        <IconButton color="primary">
          <ThreeDRotation />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="outlined"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} color="success" exclusive>
          <ToggleButton value="bold" aria-label="bold"> <FormatBold /></ToggleButton>
          <ToggleButton value="italic" aria-label="italic"> <FormatItalic /></ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined"> <FormatUnderlined /></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
