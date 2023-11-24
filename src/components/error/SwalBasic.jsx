import React from "react";
import Swal from "sweetalert2";

const SwalBasic = ({ text, position }) => {
  (async () => {
    await Swal.fire({
      text: text,
      position: position || "center",
      toast: false,
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: false,
      customClass: {
        container: "my-swal",
        popup: "my-swal-position",
      },
    });
  })();

  return null;
};

export default SwalBasic;