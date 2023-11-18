import { createStore } from "vuex";

export default createStore({
    state: {
        posts: [
            {
                message: "University of Tartu: Delta",
                author_name: "Gulnar Mammadli",
                img: { url: "https://i.postimg.cc/ZnRWHbhW/delta.jpg", alt: "Delta Centre" },
                like_count: 13,
                comment_count: 4,
                created_time: "2022/09/01 11:45",
            },
            {
                message: "Tartu 2022",
                author_name: "Leyla Rahimli",
                img: { url: "https://i.postimg.cc/BvLNY34w/tartu-old-city.jpg", alt: "Tartu city" },
                like_count: 2,
                comment_count: 4,
                created_time: "2022/10/22 10:32",
            },
            {
                message: "Does anyone know in which room the lab is today?",
                author_name: "Darius Stevens",
                img: null,
                like_count: 0,
                comment_count: 1,
                created_time: "2022/11/05 18:20",
            },
        ],
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
