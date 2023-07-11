import portfolio from "./images/portfolio.jpg"
import ecommerce from "./images/ecommerce.jpg"
import userdetails from "./images/userdetails.jpg"

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
        name: "User Details Site",
        imgsrc: userdetails,
        code: "https://github.com/ritesh-singh-17/userdetails.git",
        url: "https://ritesh-singh-17.github.io/userdetails/",
        descp: "A Site where you can add, remove, edit user data, built using React JS."
    }
]
export default ProjectsData;