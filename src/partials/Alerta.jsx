import React, { useState, Fragment } from "react";
import { Alert } from "@material-tailwind/react";

const Alerta = () => {
  const [show, setShow] = useState(true);

  return (
    <Fragment>
      {/* {!show && (
        <Button
          variant="gradient"
          className="absolute"
          onClick={() => setShow(true)}
        >
          Show Alert
        </Button>
      )} */}
      <Alert
        show={show}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        Success!! thank you so much!
      </Alert>
    </Fragment>
  );
};

export default Alerta;
