import React, { useEffect } from "react";
import { message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import Creators from "../../store/actions/actionCreators";

function withErrorHandler(Component) {
  return (props) => {
    const error = useSelector((state) => state.error);
    const dispatch = useDispatch();

    useEffect(() => {
      if (error.hasErr) {
        message.error(error.errMsg, 1.5, () => {
          dispatch(Creators.removeError());
        });
      }
    }, [error.hasErr, error.errMsg, dispatch]);
    return (
      <>
        <Component {...props} />
      </>
    );
  };
}

export default withErrorHandler;
