import { createStore } from "vuex";
import Counter from "@/store/counter";

const store = createStore({});

// eslint-disable-next-line
new Counter({ store, name: "counter" })

export default store;
