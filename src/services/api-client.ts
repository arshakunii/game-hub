import axios from "axios";

export default axios.create ({
    baseURL: "https://api.rawg.io/api/",
    params :{
        key: "b4e528c1ad6c461ab3d9fd0f4aee659d"
    }
})