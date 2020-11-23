import {createSelectorHook} from "react-redux";

const useMainSelector = createSelectorHook<MainState>();

export default useMainSelector;
