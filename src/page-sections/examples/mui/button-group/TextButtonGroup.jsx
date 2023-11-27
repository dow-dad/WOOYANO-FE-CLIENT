import { ButtonGroup, Stack, Button } from "@mui/material";

const TextButtonGroup = () => {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <ButtonGroup variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="secondary" variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="success" variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="warning" variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <ButtonGroup color="error" variant="text">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Stack>;
};

export default TextButtonGroup;