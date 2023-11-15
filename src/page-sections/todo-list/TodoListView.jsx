"use client";

import { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd"; // MUI COMPONENTS

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid"; // CUSTOM COMPONENTS

import TodoCard from "./TodoCard";
import TodoForm from "./TodoForm";
import { H6 } from "components/typography"; // COMMON STYLED COMPONENT

import { DroppableWrapper } from "./styles"; // DUMMY CUSTOM DATA

const TODOS = [{
  id: "01",
  title: "Create Minimal Logo",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/001-man.svg"
  },
  statusColor: "primary.main"
}, {
  id: "02",
  title: "Therapy Session",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/002-girl.svg"
  },
  statusColor: "primary.red"
}, {
  id: "03",
  title: "Create Minimal Logo",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/005-man-1.svg"
  },
  statusColor: "primary.main"
}, {
  id: "04",
  title: "Website UI Design",
  date: "9/17/2021",
  description: "Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",
  author: {
    name: "Tom Cruise",
    image: "/static/avatar/011-man-2.svg"
  },
  statusColor: "primary.yellow"
}];
const VIEW_COLUMNS = {
  todo: {
    name: "To do",
    todos: TODOS.slice(0, 2)
  },
  progress: {
    name: "In Progress",
    todos: [TODOS[2]]
  },
  done: {
    name: "Done",
    todos: [TODOS[3]]
  }
};

const TodoListView = () => {
  const [boardList, setBoardList] = useState(VIEW_COLUMNS);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const {
      source,
      destination
    } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.todos];
      const destItems = [...destColumn.todos];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({ ...columns,
        [source.droppableId]: { ...sourceColumn,
          todos: sourceItems
        },
        [destination.droppableId]: { ...destColumn,
          todos: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.todos];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({ ...columns,
        [source.droppableId]: { ...column,
          todos: copiedItems
        }
      });
    }
  };

  return <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <DragDropContext onDragEnd={result => onDragEnd(result, boardList, setBoardList)}>
          {Object.entries(boardList).map(([columnId, column]) => {
          return <Grid item xs={12} sm={6} lg={4} key={columnId}>
                <Card sx={{
              height: "100%",
              maxHeight: 750
            }}>
                  {columnId === "todo" ? <TodoForm title={column.name} show={showAddTodoForm} handleOpen={() => setShowAddTodoForm(true)} handleClose={() => setShowAddTodoForm(false)} /> : <H6 fontSize={18} p={2}>
                      {column.name}
                    </H6>}

                  <Droppable key={columnId} droppableId={columnId}>
                    {provided => {
                  return <DroppableWrapper ref={provided.innerRef} {...provided.droppableProps}>
                          {column.todos.map((todo, index) => <TodoCard key={todo.id} index={index} {...todo} />)}

                          {provided.placeholder}
                        </DroppableWrapper>;
                }}
                  </Droppable>
                </Card>
              </Grid>;
        })}
        </DragDropContext>
      </Grid>
    </Box>;
};

export default TodoListView;