import React, { memo } from "react";
import TransitionMain from "components/TransitionMain";
import { connect } from "react-redux";
import { IStoreState } from "store/types";
import { setSideBarRouters } from "store/module/app";
interface AsyncRoutesProps {
  children: React.ReactNode;
  init: boolean;
}

function AsyncRoutes(props: AsyncRoutesProps) {
  // app 尚未初始化完成
  if (!props.init) {
  }

  return <TransitionMain>{props.children}</TransitionMain>;
}

// 使用用例：connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2)(Component)
// const mapStateToProps = state => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

export default connect(({ app }: IStoreState) => ({ init: app.init }), {
  setSideBarRouters,
})(memo(AsyncRoutes));
