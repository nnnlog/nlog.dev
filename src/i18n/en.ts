export default {
  _number_format: {
    st: "st",
    th: "th",
    nd: "nd",
  },
  loading: "Loading page...",
  nav: {
    cv: "CV",
    activity: "Activities",
    project: "Projects",
  },
  intro: {
    name: "Solrin",
    description: "Software Engineer",
    word: ["Develop software", "makes world better"],
  },
  notfound: {
    message: "There is no page that you are looking for{back}",
    back: "Go back",
  },
  main: {
    employments: {
      header: "Employments",
      moloco: {
        header: "Moloco, Software Engineer Intern{duration}",
        duration: "(2024.11 - 2025.02)",
        details: [
          "Developed services for partner companies, including implementing machine learning dataset pipelines and ingesting their first-party data for adding conditions to ad targeting.",
        ],
      },
      karrot: {
        header: "Karrot Market, Software Engineer Intern (Backend){duration}",
        duration: "(2024.08 - 2024.11)",
        details: [
          "Developed the Content Curator service that serves data generated from several services to other teams.",
          "Developed a cache layer backed by a relational database to efficiently refresh newly received data from Kafka and store cache-missed data from gRPC. This optimization reduces gRPC call counts from 60–70 per minute to less than 1 per minute.",
          "Implemented an integration test to enhance reliability and detect potential errors early in the development stage.",
        ],
      },
    },
    educations: {
      header: "Educations",
      bachelor: {
        header:
          "Bachelor, Computer Science & Engineering, Soongsil University{duration}",
        duration: "(2022.03 - 2025.02)",
        grade: "GPA 4.29 / 4.50{rank}",
        rank: "(Graduation Rank 2/77)",
        scholarship:
          "National Scholarship for Outstanding Students in Science and Engineering{duration}",
        scholarship_duration: "(2024.11)",
        undergraduate:
          "Undergraduate student in Database Lab, Soongsil University{duration}",
        undergraduate_duration: "(2022.03 - 2025.02)",
        sccc: {
          header:
            "President & Executives of SCCC, Problem Solving Club in CSE department",
          study:
            "Operating study for algorithms, basic C language, and logical circuit (digital engineering)",
          scon: "Director of 2023 Soongsil University Programming Contest{duration}",
          scon_duration: "(2023.04)",
          homepage: "SCCC Homepage",
        },
        completed_subject: "View completed subjects' summary in university",
      },
    },
    activities: {
      header: "Activities",
      algorithm: {
        header: "Participating on Algorithm Contests{duration}",
        duration: "(2019 - )",
        icpc: {
          icpcwf: "Honorable mention in the 47{th} ICPC World Finals{duration}",
          icpcwf_duration: "(2024.04, Luxor, Egypt)",
          icpc2022:
            "Silver Award {rank} in the 2022 ICPC Asia Seoul Regional{duration}",
          icpc2022_rank: "5th rank",
          icpc2022_duration: "(2022.11, Seoul, Republic of Korea)",
        },
        koi_ta: {
          header: "TA at Korea Olympiad in Informatics Committee{duration}",
          duration: "(2023.08 - )",
          koi2024first:
            "Coordinator of Korea Olympiad in Informatics 2024 1{st} Programming Contest{duration}",
          koi2024first_duration: "(2024.05)",
          ioi_camp:
            "TA at Training Camp of International Olympiad in Informatics, Republic of Korea{duration}",
          ioi_camp_duration: "(2023.08 - 2024.08)",
        },
        koi_award: {
          first_general:
            "Silver Award in the 38{th} Korea Olympiad in Informatics 1{st} Contest, General High School{duration}",
          first_duration: "(2021.05)",
        },
        view_all: "View all experiences related to algorithm",
      },
      software: {
        header: "Software Activities{duration}",
        duration: "(2020 - )",
        soma: {
          header: "Software Maestro 13{th}{duration}",
          duration: "(2022.04 - 2022.11)",
          project:
            "Codemap, The web platform for preparing algorithm contests - {detail}",
          project_detail: "View detail of the project",
        },
      },
    },
    information: {
      header: "Information",
      name: {
        key: "Name",
        value: "Solrin Park",
      },
      alt_name: {
        key: "Legal Name",
        value: "Chansol Park",
      },
      email: {
        key: "Email",
        value: "sorisem4106{'@'}naver.com",
      },
      place: {
        key: "Place",
        value: "Seoul, Republic of Korea",
      },
      nation: {
        key: "Nation",
        value: "Republic of Korea",
      },
      external: "External Links",
      github: {
        key: "Github",
        value: "nnnlog",
      },
      linkedin: {
        key: "LinkedIn",
        value: "Open",
      },
      icpc: {
        key: "ICPCID",
        value: "Open",
      },
    },
    projects: {
      header: "Projects",
      text: "{key}: Javascript/Typescript, Flutter, C++",
      key: "Mostly using a Language & Framework",
      link: "View all projects",
    },
  },
  activities: {
    index: {
      header: "Activities",
      algorithm: {
        header: "in Algorithm Field",
        desc1: "Participating on Contest",
        desc2: "Operating Contest",
        desc3: "Lecturer of Algorithm class",
        view: "View all activities related to algorithm",
      },
      ssu: {
        header: "in Soongsil University",
        desc1: {
          header: "Listened mainly subjects",
          desc1: "Linux System Programming, Operating System",
          desc2: "Network Programming, Computer Network",
          desc3: "Computer Vision",
        },
        desc2: "President, Executives in SCCC, Problem Solving Club in CSE",
        view: "View detailed of completed subjects",
      },
    },
    algorithm: {
      header: "Activity related to Algorithm",
      participate_contest: {
        header: "Participating on Contest",
        icpc: {
          header: "ICPC",
          description: "(International Collegiate Programming Contest)",
          icpc2024:
            "Honorable mention in the 2024 ICPC Asia Seoul Regional{duration}",
          icpc2024_duration: "(2024.11, Seoul, Republic of Korea)",
          icpcwf: "Honorable mention in the 47{th} ICPC World Finals{duration}",
          icpcwf_duration: "(2024.04, Luxor, Egypt)",
          icpc2023:
            "Honorable mention in the 2023 ICPC Asia Seoul Regional{duration}",
          icpc2023_duration: "(2023.11, Seoul, Republic of Korea)",
          icpc2022:
            "Silver award {rank} in the 2022 ICPC Asia Seoul Regional{duration}",
          icpc2022_rank: "5th rank",
          icpc2022_duration: "(2022.11, Seoul, Republic of Korea)",
          icpcid: "ICPCID",
        },
        koi: {
          header: "KOI",
          description: "(Korea Olympiad in Informatics)",
          koi2: "Encouragement Award in the 38{th} KOI 2{nd} Contest{duration}",
          koi2_duration: "(2021.07)",
          koi1_general:
            "Silver Award in the 38{th} KOI 1{st} Contest, General High School{duration}",
          koi1_duration: "(2021.05)",
        },
        contest_univ: {
          header: "Contests during bachelor",
          ucpc: {
            header: "UCPC",
            description: "(Union of Clubs for Programming Contests)",
            ucpc2023: "35{th} rank in the UCPC 2023 Finals{duration}",
            ucpc2023_duration: "(2023.07, Republic of Korea)",
            ucpc2022: "21{st} rank in the UCPC 2022 Finals{duration}",
            ucpc2022_duration: "(2022.07, Republic of Korea)",
            icn2023:
              "Encouragement Award in the Incheon National University Code Festival 2023{duration}",
            icn2023_duration: "(2023.12, Republic of Korea)",
          },
        },
        contest_high: {
          header: "Contests during high school",
          kookmin: {
            header: "Kookmin University Algorithm Contest",
            kmu2021:
              "Bronze Award in the 6{th} Kookmin University Algorithm Contest{duration}",
            kmu2021_duration: "(2021.08)",
            kmu2020:
              "Encouragement Award in the 5{th} Kookmin University Algorithm Contest{duration}",
            kmu2020_duration: "(2020.08)",
          },
          busan: {
            header: "Busan Coding Contest",
            busan2021: "First Prize in the 2021 Busan Coding Contest{duration}",
            busan2021_duration: "(2021.08, Busan, Republic of Korea)",
            busan2020: "First Prize in the 2020 Busan Coding Contest{duration}",
            busan2020_duration: "(2020.09, Busan, Republic of Korea)",
            busan2019:
              "Bronze Award in the 2019 Busan Coding Contest{duration}",
            busan2019_duration: "(2019.11, Busan, Republic of Korea)",
          },
        },
      },
      operating: {
        header: "Operating Contest",
        koi: {
          header: "KOI{description}",
          description: "(Korea Olympiad in Informatics)",
          koi2024_1:
            "Coordinator of KOI 2024 1{st} Programming Contest{duration}",
          koi2024_1_duration: "(2024.05)",
        },
        scon: {
          header: "SCON{detail}",
          description: "(Soongsil University Programming Contest)",
          scon2024: "Problem setter in 2024 SCON{duration}",
          scon2024_duration: "(2024.05)",
          scon2023: "Director & Problem setter in 2023 SCON{duration}",
          scon2023_duration: "(2023.05)",
        },
      },
      lecture: {
        header: "Lecturer of Algorithm class",
        koi: {
          header: "KOI Committee{description}",
          description: "(Korea Olympiad in Informatics Committee)",
          ioi_camp: "TA of IOI Training Camp (Summer/Winter School){duration}",
          ioi_camp_duration: "(2023.08 - 2024.08, Republic of Korea)",
        },
        sinchon: {
          header: "ICPC Sinchon",
          summer2024:
            "Novice Lecturer of 2024 ICPC Sinchon Summer Camp{duration}",
          summer2024_duration: "(2024.07 - 2024.08)",
          winter2024:
            "Novice Lecturer of 2024 ICPC Sinchon Winter Camp{duration}",
          winter2024_duration: "(2024.01 - 2024.02)",
          summer2023:
            "Novice Lecturer of 2023 ICPC Sinchon Summer Camp{duration}",
          summer2023_duration: "(2023.07 - 2023.08)",
          material: "Lecture Materials (Korean)",
        },
        sccc: {
          header: "SCCC{description}",
          description: "(Problem Solving Club in CSE, Soongsil University)",
          study2024: "Lecturer of Basic C Language Study{duration}",
          study2024_duration: "(2024.03 - 2024.05)",
          study2023: "Lecturer of Group Study(Algorithm/C Language){duration}",
          study2023_duration: "(2023.03 - 2023.05)",
        },
      },
    },
    univ: {
      header: "Mainly Subjects in Soongsil University",
      pl: {
        header: "Programming Language",
        duration: "(Spring, 2024)",
        github: "Github",
        hw: "Make the simple parser using Recursive-Descent Parser based on EBNF",
      },
      network: {
        header: "Network Programming",
        duration: "(Spring, 2024)",
        github: "Github",
        outline:
          "Outline: TCP/UDP Socket Communication, Message Queue, Concurrency programming, HTTP(s)",
        grade: "Grade: A+",
        hw1: "Develop the simple game that a server can handle multiple clients based on TCP (Concurrency programming)",
        hw2: "Develop the simple game using Flask, SQLite",
      },
      cv: {
        header: "Computer Vision",
        duration: "(Fall, 2023)",
        github: "Github",
        outline:
          "Outline: Classical CV Algorithm such as canny edge detection, feature detection(SIFT), etc.",
        grade: "Grade: A+",
        hw1: "Develop the algorithm that finds checker board in a given image using Canny, k-NN, etc.",
        hw2: "Create a program that finds the Empire State building in a given image using YOLO, SIFT, etc.",
      },
      os: {
        header: "Operating System",
        duration: "(Fall, 2023)",
        github: "Github",
        outline:
          "Outline: Memory/disk management, scheduler, add/modify xv6 functions, ext2 hand tracking, etc.",
        grade: "Grade: A+",
        hw: "Add custom scheduler and system calls to xv6, Modify xv6's file structure. (3-depth indirect addressing, support 1GB file)",
      },
      lsp: {
        header: "Linux System Programming",
        duration: "(Spring, 2023)",
        github: "Github",
        outline:
          "Outline: C Programming, Linux system call, concurrent programming (thread/mutex), etc.",
        grade: "Grade: A+ (First rank in Lecture)",
        hw: "Develop directory monitoring program, file backup/restore program, programming judge program.",
      },
    },
  },
  project: {
    index: {
      header: "Project",
      ssurade: {
        header: "SSUrade",
        duration: "(2022.06 - )",
        description:
          "An application that inquiry Soongsil University's information such as grade, attendance, etc.",
        tech: "Technology: Flutter, Javascript",
        scale: "Personal Project",
        playstore: "Play Store",
        playstore_installation_count: "Installation count in Play Store : 1100",
        view: "View details about SSUrade",
        github: "Github",
      },
      ssullabus: {
        header: "SSUllabus",
        duration: "(2024.02 - )",
        description:
          "Web Page that finds Soongsil Unviersity's opened subject with various filter.",
        tech: "Technology: node.js(hono.js, playwright), solid.js, GraphQL, SQLite",
        scale: "Personal Project",
        web: "Web Page",
        github: "Github",
      },
      codemap: {
        header: "Codemap",
        duration: "(2022.06 - 2022.12)",
        description:
          "(Software Maestro Team Project) Web Page for preparing algorithm contest.",
        tech: "Technology: Vue.js, JWT, Github CI/CD",
        scale: "Team Project (Role: Frontend)",
        github: "Github (Frontend)",
      },
    },
    ssurade: {
      header: "SSUrade",
      duration: "(2022.06 - )",
      description:
        "An application that inquiry Soongsil University's information such as grade, attendance, etc.",
      tech: "Technology: Flutter, Javascript",
      scale: "Personal Project",
      playstore: "Play Store",
      playstore_installation_count: "Installation count in Play Store : 1100",
      github: "Github",
    },
  },
};
