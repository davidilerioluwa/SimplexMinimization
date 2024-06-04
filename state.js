import { proxy } from "valtio";

const state= proxy({
    solution:[],
    numberOfConstraints:2
})

export default state