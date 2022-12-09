import Swal from "sweetalert2";

export const swalError = (err) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${err.response.data.message}`,
  });
};
