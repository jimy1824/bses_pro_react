import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import TotalRequestImage from "../../../assets/icons/dashboard icons/Total Requests character.svg";
import TotalRequestBackground from "../../../assets/icons/dashboard icons/Total Requests icon.svg";
import CompletedImage from "../../../assets/icons/dashboard icons/Requests Completed character.svg";
import CompletedBackgroundImage from "../../../assets/icons/dashboard icons/Requests Completed icon.svg";
import ProgressImage from "../../../assets/icons/dashboard icons/Requests in Progress character.svg";
import ProgressBackgroundImage from "../../../assets/icons/dashboard icons/Requests in Progress icon.svg";
import ServicesImage from "../../../assets/icons/dashboard icons/Services character.svg";
import ServicesBackground from "../../../assets/icons/dashboard icons/Services icon.svg";
import { navigationStyles } from "../styles/NavigationStyles";

const CardItems = (props) => {
  const classes = navigationStyles();
  const { data, loading, success } = useSelector((state) => state.dashboard);
  return (
    <Fragment>
      {success && (
        <div className="row">
          <div
            className={`col-md-3 col-sm-6 px-2 mt-4 ${classes.outerForImage}`}
          >
            <img src={TotalRequestImage} alt="" className={classes.imgCards} />
            <div className={`${classes.divCardOuterTotal}`}>
              <img
                src={TotalRequestBackground}
                alt=""
                className={classes.backgroundImgCard}
              />
              <div className={`p-4 ${classes.outerTextDiv}`}>
                <div className={classes.above}>
                  <p>{data.one.title}</p>
                  <h3>{data.one.number}</h3>
                </div>
                <hr className={classes.hr} />
                <div className={classes.above}>
                  {/* <span className={classes.spanForDate}>03 TODAY</span> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-md-3 col-sm-6 px-2 mt-4 ${classes.outerForImage}`}
          >
            <img src={CompletedImage} alt="" className={classes.imgCards} />
            <div className={`${classes.divCardOuterCompleted}`}>
              <img
                src={CompletedBackgroundImage}
                alt=""
                className={classes.backgroundImgCard}
              />
              <div className={`p-4 ${classes.outerTextDiv}`}>
                <div className={classes.above}>
                  <p>{data.two.title}</p>
                  <h3>{data.two.number}</h3>
                </div>
                <hr className={classes.hr} />
                <div className={classes.above}>
                  {/* <span className={classes.spanForDate}>01 TODAY</span> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-md-3 col-sm-6 px-2 mt-4 ${classes.outerForImage}`}
          >
            <img src={ProgressImage} alt="" className={classes.imgCards} />
            <div className={`${classes.divCardOuterProgress}`}>
              <img
                src={ProgressBackgroundImage}
                alt=""
                className={classes.backgroundImgCard}
              />
              <div className={`p-4 ${classes.outerTextDiv}`}>
                <div className={classes.above}>
                  <p>{data.three.title}</p>
                  <h3>{data.three.number}</h3>
                </div>
                <hr className={classes.hr} />
                <div className={classes.above}>
                  {/* <span className={classes.spanForDate}>01 TODAY</span> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`col-md-3 col-sm-6 px-2 mt-4 ${classes.outerForImage}`}
          >
            <img src={ServicesImage} alt="" className={classes.imgCards} />
            <div className={`${classes.divCardOuterServices}`}>
              <img
                src={ServicesBackground}
                alt=""
                className={classes.backgroundImgCard}
              />
              <div className={`p-4 ${classes.outerTextDiv}`}>
                <div className={classes.above}>
                  <p>{data.four.title}</p>
                  <h3>{data.four.number}</h3>
                </div>
                <hr className={classes.hr} />
                <div className={classes.above}>
                  {/* <p className={classes.spanForDate}>
                    {data.four.requested} NEW | {data.four.pending} PENDING
                  </p>
                  <p className={classes.spanForDate}>
                    {data.four.completed} Completed
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CardItems;
