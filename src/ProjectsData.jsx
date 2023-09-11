import portfolio from "./images/portfolio.jpg"
import ecommerce from "./images/ecommerce.jpg"
import userdetails from "./images/userdetails.jpg"
import blog from "./images/blogSite.jpg"

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