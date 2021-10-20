import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import classes from "./FormSubmissionPopup.module.css";

const FormSubmissionPopup = () => {
  const [popupStatusStyle, setPopupStatusStyle] = useState("");

  const popupVisible = useSelector((state) => state.ui.popup);
  const notification = useSelector((state) => state.ui.notification);

  const popupStyle = `${classes.notification} ${popupStatusStyle}`;

  useEffect(() => {
    if (notification) {
      const notificationStatus = notification.status;

      if (notificationStatus === "error") {
        setPopupStatusStyle(classes.error);
      }
      if (notificationStatus === "success") {
        setPopupStatusStyle(classes.success);
      }
    }
  }, [notification]);

  return (
    <React.Fragment>
      {popupVisible ? (
        <div className={popupStyle}>{notification.message}</div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default FormSubmissionPopup;
