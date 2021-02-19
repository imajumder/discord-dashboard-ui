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
        newmenu: "#202225",
    },
    text: {
        main: "#A9A9A9	",
    },
    height: {
        topContent: '95px',
    },
    padding: {
        content: "20px 0px",
        border: "1px solid rgb(135, 130, 130)",
        activeborder: "#585D68",
    },
};

export const WhiteTheme: Theme = {
    base: {
        sidebar: "#D2D4D8",
        menu: "#F0F0F0",
        content: "#D3D3D3",
        newmenu: "#8B8D91",
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
        activeborder: "#F7F3F3",
    },
};