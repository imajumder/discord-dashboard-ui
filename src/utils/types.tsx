export type Guild = {
    id: string;
    name: string;
    icon: string;
};

export type MenuGroup = {
    name: string,
    path: string,
    routes: Route[];
}

export type Route = {
    name: string,
    path: string,
}

export type MenuItem = {
    name: String;
    value: String;
}