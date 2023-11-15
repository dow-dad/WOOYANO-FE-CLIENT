import { useState } from "react";
import { Card, Checkbox, LinearProgress, MenuItem, Stack, styled } from "@mui/material";
import { nanoid } from "nanoid"; // CUSTOM COMPONENTS

import { Paragraph } from "components/typography";
import { MoreButton } from "components/more-button";
import { FlexBetween, FlexBox } from "components/flexbox"; // STYLED COMPONENT

const TodoItem = styled(FlexBetween)(({
  theme,
  active
}) => ({ ...(active && {
    backgroundColor: theme.palette.action.selected,
    "& .title": {
      color: theme.palette.primary.main
    }
  })
}));

const TodoList = () => {
  const [todos, setTodos] = useState([{
    id: nanoid(),
    title: "Design a poster for a company",
    complete: true
  }, {
    id: nanoid(),
    title: "Analyze Data",
    complete: false
  }, {
    id: nanoid(),
    title: "YouTube campaign",
    complete: false
  }, {
    id: nanoid(),
    title: "Assaign employee",
    complete: false
  }]);

  const handleCompleteTodo = id => () => {
    setTodos(state => {
      return state.map(item => item.id === id ? { ...item,
        complete: !item.complete
      } : item);
    });
  };

  const handleDeleteTodo = id => {
    setTodos(state => state.filter(item => item.id !== id));
  };

  const totalCompletedTodo = todos.filter(item => item.complete).length;
  const percentageValue = Math.round(totalCompletedTodo * 100 / todos.length);
  return <Card>
      <FlexBetween p={3}>
        <Paragraph fontSize={18} fontWeight={500}>
          To-do list
        </Paragraph>

        <MoreButton size="small" />
      </FlexBetween>

      <FlexBox px={3} alignItems="center" gap={1}>
        <Paragraph fontWeight={500} color="primary.main">
          {percentageValue}%
        </Paragraph>

        <LinearProgress value={percentageValue} color="primary" variant="determinate" sx={{
        height: 8
      }} />
      </FlexBox>

      <Stack spacing={1} py={2}>
        {todos.map(({
        id,
        title,
        complete
      }) => <TodoItem px={2} key={id} active={complete ? 1 : 0}>
            <FlexBox alignItems="center">
              <Checkbox onChange={handleCompleteTodo(id)} checked={complete} />
              <Paragraph fontWeight={500} className="title" color="grey.500">
                {title}
              </Paragraph>
            </FlexBox>

            <MoreButton size="medium" renderOptions={handleClose => <MenuItem onClick={() => {
          handleClose();
          handleDeleteTodo(id);
        }}>
                  Delete
                </MenuItem>} />
          </TodoItem>)}
      </Stack>
    </Card>;
};

export default TodoList;