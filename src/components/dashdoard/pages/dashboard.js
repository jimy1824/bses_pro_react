import React, { Fragment, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItems from "../../SideDrawer/components/CardItems";
import { AuthContext } from "../../../shared/context/auth-context";
import Spinner from "../../../shared/ui/spinner/spinner";
// import WholeSearch from "../components/WholeSearch";
import CardForSubmission from "../../../shared/ui/card/card";
import * as Actions from "../../../store/actions";

const Dashboard = (props) => {
  const auth = useContext(AuthContext);
  const dispatch = useDispatch();
  const { features } = auth;

  useEffect(() => {

  }, []);

  const { loading, data, error, success, persons } = useSelector(
    (state) => state.dashboard
  );

  let display;

  if (loading) {
    display = <Spinner open={loading} />;
  } else {
    if (error) {
      display = <CardForSubmission title={error} route={"/"} />;
    } else {
      display = (
        <Fragment>
          <p>dashboard</p>
        </Fragment>
      );
    }
  }

  return <Fragment>{display}</Fragment>;
};

export default Dashboard;
