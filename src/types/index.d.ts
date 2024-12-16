interface InavLink {
    label: string;
    name: string;
    link: string;
}

type ISkill = {
    title: string;
    subtitle: string;
    tools: string[];
    icon: string;
    gradient: 'magenta' | 'blue' | 'green' | 'yellow';
};

type IProject = {
    title: string;
    tags: string[];
    image: string;
    link: string;
};

type ISocialIcon = {
    url: string;
    icon: string;
    label: string;
};

type IContactMe = {
    about: string;
    email: string;
    phone: string;
};

type IMail = {
    name: string;
    email: string;
    services: string[];
    message: string?;
};
