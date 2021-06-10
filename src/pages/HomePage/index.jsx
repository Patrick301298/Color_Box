import React from "react";
// import { useEffect } from "react";
// import { useEffect } from "react";
import "./HomePage.scss";
import MagicBox from "./components/MagicBox";
// import BetterClock from "./components/BetterClock";
// import queryString from "query-string";
// import Clock from "./components/Clock";
// import Pagination from "./components/Pagination";
// import PostList from "./components/PostList";
// import PostFiltersForm from "./components/PostFiltersForm";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";

function HomePage() {
  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: "I love Easy FrontEnd!" },
  //   { id: 2, title: "We love Easy FrontEnd!" },
  //   { id: 3, title: "They love Easy FrontEnd!" },
  // ]);

  // const [postList, setPostList] = useState([]);
  // const [pagination, setPagination] = useState({
  //   _page: 1,
  //   _limit: 10,
  //   _totalRows: 1,
  // });
  // const [filters, setFilters] = useState({
  //   _limit: 10,
  //   _page: 1,
  //   title_like: "",
  // });
  // const [showClock, setShowClock] = useState(true);

  // useEffect(() => {
  //   async function fetchPostList() {
  //     try {
  //       const paramsString = queryString.stringify(filters);
  //       const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
  //       const response = await fetch(requestUrl);
  //       const responseJSON = await response.json();
  //       // console.log({ responseJSON });
  //       const { data, pagination } = responseJSON;
  //       setPostList(data);
  //       setPagination(pagination);
  //     } catch (error) {
  //       console.log("Failed to fetch post list : ", error.message);
  //     }
  //   }
  //   console.log("Post list Effect");
  //   fetchPostList();
  // }, [filters]);
  // useEffect(() => {
  //   console.log("Todo Effect!");
  // });

  // function handlePageChange(newPage) {
  //   console.log("newPage :", newPage);
  //   setFilters({
  //     ...filters,
  //     _page: newPage,
  //   });
  // }

  // function handleTodoClick(todo) {
  //   console.log(todo);
  //   const index = todoList.findIndex((x) => x.id === todo.id);
  //   if (index < 0) {
  //     return;
  //   }
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }
  // function handleTodoFormSubmit(formValues) {
  //   console.log("Form Submit ", formValues);
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValues,
  //   };
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  // function handleFiltersChange(newFilters) {
  //   console.log("New Filter", newFilters);
  //   setFilters({
  //     ...filters,
  //     _page: 1,
  //     title_like: newFilters.searchTerm,
  //   });
  // }
  return (
    <div className="app">
      <h1> Welcome - Color</h1>
      <MagicBox />
      {/* {showClock && <Clock />}
      <BetterClock />
      <button
        onClick={() => {
          setShowClock(false);
        }}
      >
        Hile Clock
      </button> */}
      {/* <PostFiltersForm onSubmit={handleFiltersChange} />
      {/* <TodoForm onSubmit={handleTodoFormSubmit} />
      <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}
      {/* <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} /> */}
    </div>
  );
}

export default HomePage;
