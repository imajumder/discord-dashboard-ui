type Theme = {
    base?: any;
    text?: any;
    height?: any;
    padding?: any;
}

export const DarkTheme: Theme = {
    base: {
        sidebar: "#202225",
        menu: "#2F3136",
        content: "#36393F",
    },
    text: {
        main: "#A9A9A9	",
    },
    height: {
        topContent: '95px',
    },
    padding: {
        content: "20px 0px",
        border: "1px solid rgb(135, 130, 130)"
    },
};

export const WhiteTheme: Theme = {
    base: {
        sidebar: "#FFF5F5",
        menu: "#F0F0F0",
        content: "#D3D3D3",
    },
    text: {
        main: "#211C1C	",
    },
    height: {
        topContent: '95px',
    },
    padding: {
        content: "20px 0px",
        border: "1px solid rgb(28, 23, 23)",
        activeborder: "#262525",
    },
};