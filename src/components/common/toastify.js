import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const configuration = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const Success = (message) => toast.success(message, configuration);

export const Info = (message) => toast.info(message, configuration);

export const Warn = (message) => toast.warn(message, configuration);

export const Error = (message) => toast.error(message, configuration);

export const Dark = (message) => toast.dark(message, configuration);

export const Default = (message) => toast(message, configuration);
