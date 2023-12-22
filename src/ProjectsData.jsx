import portfolio from "./images/portfolio.png"
import ecommerce from "./images/ecommerce.jpg"
import blog from "./images/blogSite.jpg"
import chatApp from "./images/chatApp.png"

const ProjectsData = [
    {
        id: 1,
        name: "Portfolio Website",
        imgsrc: portfolio,
        code: "https://github.com/ritesh-singh-17/portfolio.git",
        url: "https://ritesh-singh-17.github.io/portfolio/",
        descp: "Portfolio Website Built Using React JS. Various libraries of React have been used."
    },
    {
        id: 2,
        name: "Real-time Chat Application",
        imgsrc: chatApp,
        code: "https://github.com/ritesh-singh-17/real-time-chat-app.git",
        url: "https://chat-app-374l.onrender.com/",
        descp: "A real-time chat application built using MERN Stack and Socket.io"
    },
    {
        id: 2,
        name: "Ecommerce Website",
        imgsrc: ecommerce,
        code: "https://github.com/ritesh-singh-17/ecommercesite.git",
        url: "https://ritesh-singh-17.github.io/ecommercesite/",
        descp: "Completely functional Ecommerce website built using React JS."
    },
    {
        id: 3,
        name: "Blog Website",
        imgsrc: blog,
        code: "https://github.com/ritesh-singh-17/blogweb.git",
        url: "https://blogweb-gjnd.onrender.com/",
        descp: "A full stack blog website where user can read, add, edit or delete blogs."
    }
]
export default ProjectsData;