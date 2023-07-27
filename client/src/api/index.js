import { axiosInstance } from "@/utiils/Axios";
import { toast } from "react-toastify";

export const createSession = async (mobile) => {
  try {
    const { data: response } = await axiosInstance.post("/auth/session", {
      mobile,
    });
    return response;
  } catch (error) {
    console.log(error.message);
    toast.error(error.response.data.message, {
      position: "top-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    return error.response;
  }
};
