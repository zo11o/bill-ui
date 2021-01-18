import React, { memo } from 'react';
import TransitionMain from 'components/TransitionMain';
import { connect } from 'react-redux';
import type { IStoreState } from 'store/types';
import { setSideBarRoutes } from 'store/module/app';
import type { IRoute } from 'router/config';
// import { apiGetMenuList } from 'service/auth/menu';
// import Spin from 'components/Spin';

type AsyncRoutesProps = {
  children: React.ReactNode;
  init: boolean;
  setSideBarRoutes: (routes: IRoute[]) => void;
};

function AsyncRoutes(props: AsyncRoutesProps) {
  // app 尚未初始化完成
  // if (!props.init) {
  //   apiGetMenuList()
  //     .then(({ data }) => {
  //       props.setSideBarRoutes([]);
  //     })
  //     .catch(() => {});
  //   return <Spin>{props.children}</Spin>;
  // }

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

const WarpAsyncRoutes = connect(({ app }: IStoreState) => ({ init: app.init }), {
  setSideBarRoutes,
})(memo(AsyncRoutes));

export default WarpAsyncRoutes;
