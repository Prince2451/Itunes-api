import React, { useState } from "react";
import { Input, Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import Creators from "../../store/actions/actionCreators";
import withErrorHandler from "../../hoc/withErrorHandler";

function SearchBox(props) {
  const [inValidSearch, setInValidSearch] = useState(false);
  const dispatch = useDispatch();
  const isBtnLoading = useSelector((state) => state.isFetchingData);

  function changeValueHandler(e) {
    if (inValidSearch) {
      //here invalid is false because value change after error should close error
      setInValidSearch(false);
    }
  }
  function searchHandler(value, e) {
    if (value) {
      dispatch(Creators.searchRequests(value));
    } else {
      console.log("invalid");
      setInValidSearch(true);
    }
  }
  return (
    <Form>
      <Form.Item
        validateStatus={inValidSearch ? "error" : null}
        help={inValidSearch ? "Search cannot be empty" : null}
      >
        <Input.Search
          placeholder="Search Song"
          onSearch={searchHandler}
          onChange={changeValueHandler}
          loading={isBtnLoading}
          size="large"
          enterButton="Search"
          name="search"
        />
      </Form.Item>
    </Form>
  );
}

export default withErrorHandler(SearchBox);
