export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Building modern web solutions with latest stacks.",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Car Slayer",
        des: "A blockchain-based NFT game where players can buy, sell, and trade car NFTs using cryptocurrency.",
        img: "/nft-game.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://car-slayer.vercel.app/",
    },
    {
        id: 2,
        title: "NFT minting Dapp",
        des: "A decentralized application that allows users to mint NFTs using the Avalanche blockchain.",
        img: "/nft.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://nft-minting-kappa.vercel.app/",
    },
    {
        id: 3,
        title: "Stakify",
        des: "A decentralized application that allows users to stake tokens and earn rewards on the Polygon blockchain.",
        img: "/stakify.png",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://stakify-rose.vercel.app/",
    },
    {
        id: 4,
        title: "AI Article Summarizer",
        des: "A web application that uses AI to summarize articles and text from different blogs.",
        img: "/summarizer.png",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://ai-summarizer-sumz.netlify.app/",
    },
];

// export const testimonials = [
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
//     {
//         quote:
//             "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
//         name: "Michael Johnson",
//         title: "Director of AlphaStream Technologies",
//     },
// ];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Full-Stack Web Developer",
        desc: "Developed scalable web applications using the MERN and MEAN stacks, ensuring seamless integration of front-end and back-end functionalities.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Front-End Developer",
        desc: "Created dynamic user interfaces with React.js and Angular, enhancing user engagement and optimizing performance.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "WordPress Developer",
        desc: "Built and customized WordPress websites with a focus on responsive design and plugin development.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    }
];


export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Arbash173"
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://x.com/NirbanChakrab10"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/arbashse/"
    },
];