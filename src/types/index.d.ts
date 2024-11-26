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
    tool: string;
    image: string;
    link: string;
};
