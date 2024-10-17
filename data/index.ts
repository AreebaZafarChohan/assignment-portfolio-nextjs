export const navItems = [
  { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    {name: "Experience", link:"#experience"},
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "About Me",
      description: "My name is Areeba Zafar, and I am a front-end developer. I specialize in creating responsive and interactive websites using technologies like HTML, CSS, JavaScript, and TypeScript. I am passionate about coding and enjoy building user-friendly web applications.",
      className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "",
      description: "I have a passion for learning new technologies and strive to create innovative solutions.",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "",
      description: "I have strong leadership and problem-solving skills. As a senior student at Governor House, I guide and mentor others, helping them solve bugs and overcome challenges.",
      className: "lg:col-span-1 md:col-span-2 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    {
      id: 3,
      title: "Proficient in TypeScript, Next.js, HTML, CSS, and Tailwind CSS",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to hire me?",
      description: "Email Me",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
    {
      id: 5,
      title: "Currently learning Next.js and building new Projects",
      description: "",
      className: "md:col-span-3 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Hijabaya Collection Website",
      des: "Explore this website of hijabs and abayas and share your feedback.",
      img: "/hijabweb.png",
      iconLists: ["/html.jpg", "/css.jpg", "/js.jpg"],
      link: "https://areebazafarchohan.github.io/Hijabayas-Ecommerce-Website/",
    },
    {
      id: 2,
      title: "My Portfolio",
      des: "Check my portfolio in which I used HTML, CSS and JavaScript technologies",
      img: "/portfolio-html.jpg",
      iconLists: ["/js.jpg", "/html.jpg", "/css.jpg"],
      link: "https://areebazafarchohan.github.io/Portfolio_greenTheme/",
    },
    {
      id: 3,
      title: "Portfolio With Next.js",
      des: "A dynamic and responsive portfolio built using Next.js 14 with TypeScript (TSX), showcasing projects, skills, and contact details with a clean, modern interface.",
      img: "/portfolionextjs.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://portfolio-topaz-two-52.vercel.app/",
    },
    {
      id: 4,
      title: "Novel Website",
      des: "An interactive novel reading platform developed with Next.js 14 in TypeScript (TSX), allowing users to read novels online or download them for offline access.",
      img: "/novelweb.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
      link: "https://novel-website-one.vercel.app/",
    },
  ];
  
  export const skills = [
    {
      quote:
        "Proficient in using TypeScript for building robust and scalable applications, leveraging its strong typing system to enhance code quality and maintainability.",
        name:"TypeScript",
      title: "Technical Skills",
    },
    {
      quote:
        "Solid understanding of JavaScript concepts and paradigms, enabling effective development of dynamic web applications",
        name:"JavaScript",
      title: "Technical Skills",
    },
    {
      quote:
        "Competent in crafting semantic and accessible HTML structures, ensuring optimal user experience across different devices and platforms.",
        name:"HTML",
      title: "Technical Skills",
    },
    {
      quote:
        "Experienced in using CSS for styling and layout, with a focus on responsive design to enhance usability and visual appeal.",
        name:"CSS",
      title: "Technical Skills",
    },
    {
      quote:
        "Proficient in using Tailwind CSS for rapid UI development, enabling the creation of responsive and aesthetically pleasing designs.",
        name:"Tailwind CSS",
      title: "Technical Skills",
    },
    {
      quote:
        "Familiar with modern frontend frameworks like React and Next.js, with a focus on creating efficient and user-friendly interfaces.",
        name:"React / Next.js",
      title: "Technical Skills",
    },
    {
      quote:
        "Strong analytical skills that facilitate the identification of issues and the formulation of effective solutions, enhancing project outcomes and team performance.",
        name:"Problem-Solving Skills",
      title: "Soft Skills",
    },
    {
      quote:
        "Demonstrated leadership abilities through mentoring and guiding students at Governor House, fostering a collaborative and supportive learning environment.",
        name:"Leadership",
      title: "Soft Skills",
    },
    {
      quote:
        "Excellent verbal and written communication skills, capable of conveying complex technical concepts in a clear and concise manner, ensuring effective knowledge transfer.",
        name:"Communication",
      title: "Soft Skills",
    },
    {
      quote:
        "Proven ability to work collaboratively in team settings, contributing to group projects and supporting colleagues to achieve common goals.",
        name:"Teamwork",
      title: "Soft Skills",
    },
    {
      quote:
        "Quick to learn and adapt to new technologies and methodologies, enabling effective navigation of evolving project requirements and challenges.",
        name:"Adaptability",
      title: "Soft Skills",
    },
    {
      quote:
        "Innovative thinker with a creative approach to problem-solving and project development, enabling the generation of unique ideas and solutions.",
        name:"Creativity",
      title: "Soft Skills",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer",
      desc: "As a Frontend Developer, I have created various web projects, focusing on designing user-friendly interfaces and ensuring responsive design for optimal user experience across different devices.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Senior Student Mentor at Governor House",
      desc: "As a Senior Student Mentor, I provide guidance to fellow students by explaining complex concepts, facilitating understanding, and solving problems to enhance their academic performance.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "CLI-Based Application Developer",
      desc: "I developed command-line interface (CLI) applications, implementing efficient features and ensuring functionality while conducting thorough testing and debugging for reliability.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Teacher and Educator",
      desc: "In my role as a teacher, I design engaging lesson plans and provide personalized support to students, helping them overcome academic challenges and achieve their learning objectives.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/AreebaZafarChohan/portfolio-next.js.git"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/areeba-zafar-973917303/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BetSOwg4REWDJXASdb4zHg%3D%3D"
    },
  ];