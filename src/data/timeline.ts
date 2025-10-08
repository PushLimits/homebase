export type TimelineEntry = {
  align: "start" | "end";
  year: string;
  title: string;
  subtitle?: string;
  description: string;
  badges?: string[];
};

export const timelineEntries: TimelineEntry[] = [
  {
    align: "start",
    year: "2025 ... ?",
    title: "Searching for 'What's Next'",
    description: `While searching for my next opportunity, I am engaged in self-directed
      study of generative AI and its practical applications. My objective is to leverage
      these skills and knowledge to drive innovation and deliver value in a new leadership
      role.`,
    badges: ["Generative AI", "Python"]
  },
  {
    align: "end",
    year: "2013 ... 2025",
    title: "Director of Technology",
    subtitle: "Elsevier Inc | Philadelphia, PA",
    description: `Oversaw the global technology organization for the Elsevier Global
      Pharma division overseeing teams in the US, UK, Africa, and India. Led the 
      technology ideation, design, and architecture of all major projects to ensure
      capabilities, scalability, and adherence to technology standards.`,
    badges: ["Leadership", "AWS", ".NET", "Javascript", "Python", "MSSQL", "CI/CD"]
  },
  {
    align: "start",
    year: "2009 ... 2013",
    title: "Director of Technology",
    subtitle: "UL Solutions | Princeton, NJ",
    description: `Led the development and rapid growth of a resilient, 21 CFR Part 11 compliant
      LMS platform, generating over $28 million in annual revenue. Directed up to 30 members
      of a diverse technical team consisting of Architects, Full-Stack Developers, Database
      Admins, and Quality Engineers.`,
    badges: ["Solution Design", "Compliance", "Team Leadership", "Project Management", ".NET"]
  },
  {
    align: "end",
    year: "2007 ... 2009",
    title: "Director of Technology",
    subtitle: "Home Decor Products | Edison, NJ",
    description: `Managed the software development of 10+ e-commerce websites selling luxury
      home products with $100M+ in annual revenue.  Led efforts to implement a sitewide faceted-search
      and product discount system.`,
    badges: ["E‑commerce", ".NET", "MSSQL", "Faceted-Search", "On-Premise Infrastructure"]
  },
  {
    align: "start",
    year: "2000 ... 2007",
    title: "Application Development Manager",
    subtitle: "Ameritrade | Jersey City, NJ",
    description: `Managed various teams of developers within the organization while maintaining an active, 
      hands-on development role. Influenced the design and architecture of all projects and 
      managed cross-team technology relationships crucial for the success of large-scale 
      initiatives.`,
    badges: ["Architecture", "People Management", "Cross‑team Collaboration", "Java", "ASP"]
  },
  {
    align: "end",
    year: "2000",
    title: "Senior Software Engineering Consultant",
    subtitle: "Priceline WebHouse Club | Stamford CT",
    description: `Designed the architecture and code implementation of a significant 
      redesign of the "price decision model" used in grocery cost/bid determination. 
      Utilized Microsoft tech stack (ASP/Visual Basic/MTS) with XML and MSMQ to 
      facilitate communication between various business objects.`,
    badges: ["ASP", "Visual Basic", "MTS", "XML", "MSMQ"]
  },
  {
    align: "start",
    year: "1993 ... 1997",
    title: "Full-Time Student",
    subtitle: "Rutgers University | New Brunswick, NJ",
    description: `Achieved a B.S. in Management Science and Information Systems while
      working as a technology intern with Johnson & Johnson.  Active member of the Theta Chi
      Fraternity and various academic clubs.`,
    badges: ["Management Information Systems", "Technology Internship", "Academics"]
  }
];
