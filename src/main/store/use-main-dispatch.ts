import {useDispatch} from "react-redux";

export default function useMainDispatch() {
  return useDispatch<MainDispatch>();
}
