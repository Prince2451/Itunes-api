import { createActions } from "reduxsauce";

const { Types, Creators } = createActions({
  searchRequests: ["value"],
  searchSuccess: ["data"],
  searchFailure: ["errMsg"],
  removeError: null,
});
export { Types };
export default Creators;
