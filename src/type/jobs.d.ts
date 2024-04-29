interface details {
    content: string;
    items: string[];

}

export interface Job {
    id: string;
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: "Part Time" | "Full Time" | "Freelance";
    location: string;
    website: string;
    apply: string;
    description: string;
    requirements:details;
    role: details;
}

export interface filteredJobs {
    job: job;
    display: boolean;
}

export interface FilterObj {
    title: string;
    location: string;
    time: boolean;
};