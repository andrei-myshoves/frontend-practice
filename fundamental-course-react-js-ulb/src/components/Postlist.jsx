import React, { useRef } from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ posts, title, remove }) => {
	const refs = useRef([]);
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          if (!refs.current[index]) {
            refs.current[index] = React.createRef();
          }

          return (
            <CSSTransition key={post.id} timeout={500} classNames="post" nodeRef={refs.current[index]}>
              <div ref={refs.current[index]}>
                <PostItem remove={remove} number={index + 1} post={post} />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
