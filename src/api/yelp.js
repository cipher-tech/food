import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer RKrIvz_fuW2XbWAODdJrAukfKxPyk-WE97XI6QT3xi-XKGLRzz58jWOARmdNf6Ff9pcmHF1RdYS_5FUHV_356b53e-GPQbqrgM2xWO9cjWl-fwmN_TuQH0974cL5X3Yx"
    }
})