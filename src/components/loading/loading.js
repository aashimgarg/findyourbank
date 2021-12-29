import React from "react";
import classNames from "classnames";
import Loader from "react-loader-spinner";
import "./loading.css";

const Loading = ({ show }) => {
    return (
        <div
            className={classNames({
                "loading-container": show,
                hide: !show,
            })}
        >
            <Loader
                type={"TailSpin"}
                color={"black"}
                height={100}
                width={100}
            />
        </div>
    );
};

export default React.memo(Loading);