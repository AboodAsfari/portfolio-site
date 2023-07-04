class Project {
    constructor(projectName, description, skills, previewCount, githubLink, visitLink) {
        this.projectName = projectName;
        this.description = description;
        this.skills = skills;
        this.previewCount = previewCount;
        this.githubLink = githubLink;
        this.visitLink = visitLink;
    }
}

const projects = [
    new Project(
        "2359", 
        `This project is dear to me (probably why it's the the first one I'm showing). It was my introduction to web development 
        and to my surprise, I loved it! After being introduced to React and AWS, I realized that web development was much less restrictive 
        than I had initially imagined. Working on 23:59 also reignited my love for working with others. But what is 23:59? It's a 
        web development grade tracking website with full account management, and a unique course template system where students 
        can use templates created by other students, as well as create their own. Pretty cool.`,
        ["React", "AWS", "JavaScript", "CSS"],
        2,
        "https://github.com/Twenty-Three-Fifty-Nine/grade-tracker",
        "https://www.twentythreefiftynine.com"
    ),
    new Project(
        "direction",
        `I attended a tech bootcamp hosted by Accenture, where I got placed in a team with 6 others and asked to solve a given problem.
        For us, the problem was that there were students and graduates who were unsure about their future, career-wise. Our proposed solution
        to this was D1rection, an app which provides everything a job website provides, but with the addition of mentors that you can contact
        and ask for advice when making decisions about your future. This website is not available to visit as we only created a prototype and 
        to create a fully working version we would need to pour a lot more effort than we were able to put out in 4 days.`,
        ["Management", "JavaScript", "CSS"],
        3,
        "https://github.com/AboodAsfari/accenture-direction",
        null
    ),
    new Project(
        "portfolio",
        `What you're currently looking at is a result of a project! One that showcases my skills both in the form of past projects as well as the 
        quality of this site as a whole. It's a little rough around the edges, but I'm happy with the result. I'm still working on a few things but it's getting there!`,
        ["React", "AWS", "JavaScript", "CSS"],
        0,
        "https://github.com/AboodAsfari/portfolio-site",
        null
    )
];

export default projects;