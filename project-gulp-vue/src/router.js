import Vue from "vue";
import VueRouter from "../lib/vue-router";

Vue.use(VueRouter);

const Foo = { template: "<div>foo</div>" };
const Bar = { template: "<div>bar</div>" };

import index from "./components/index";


const routes = [
    {
        path: "/",
        redirect: {
            name: "foo"
        }
    },
    {
        name: "foo",
        path: "/foo",
        component: index
            
    },
	{ path: "/bar", component: Bar }
];

export default new VueRouter({
	routes // (缩写) 相当于 routes: routes
});