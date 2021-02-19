import styled, { ThemeProvider, css } from "styled-components";

import image from './download.png'


export const SidebarStyle = styled.aside`
width: 115px;
background-color: ${({ theme }) => theme.base.sidebar};
color: ${({ theme }) => theme.text.main};
height: 100%;
font-family: "Titillium Web";
box-sizing: border-box;
position: fixed;
overflow: scroll;
::-webkit-scrollbar {
  display: none;
}
`;

export const NewSidebarStyle = styled.aside`
  width: 105px;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Titillium Web";
  box-sizing: border-box;
  position: fixed;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuStyle = styled.aside`
  width: 2000px;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Titillium Web";
  box-sizing: border-box;
  position: fixed;
  margin-left: 110px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BasePageStyle = styled.div`
  min-height: 100%;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  box-sizing: border-box;
  font-family: Titillium Web;
  font-weight: Bold;

  position: absolute;
  margin-left: 450px;
  width: calc(100% - 450px);
`;

export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: ${({ theme }) => theme.height.topContent};
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  font-family: Titillium Web;
  font-weight: Bold;
  width: 110px;
  background-color: ${({theme}) => theme.base.newmenu};

  display: flex;
  align-items: center;
`;


export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
  position: fixed;
  z-index: 9999;
  font-family: Titillium Web;
  font-weight: Bold;

  background-color: ${({theme}) => theme.base.sidebar};
  width: 100%;
  :hover {
    cursor: pointer;
  }
`;




export const DashboardHeader = styled(BaseHeader)`
  padding: 25px;
`;

export const SidebarHeader = styled(BaseHeader)`
  justify-content: center;
`;


export const IconStyle = styled.img.attrs(props => ({
  src: image
}))`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  `;

export const SidebarContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: ${({ theme }) => theme.padding.content};
`;

export const SidebarContents = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
padding: ${({ theme }) => theme.padding.content};
`;

export const MenuContent = styled.div`
  box-sizing: border-box;
  padding: ${({ theme }) => theme.padding.content};
  margin-top: 100px;
`;

export const MenuCategory = styled.div`
  box-sizing: border-box;
  font-size: 16px;
  font-weight: bold;
  :nth-child(2) {
    margin: 20px 0px;
  }
  span {
    padding: 0px 20px;
  }
`;

export const Buttons = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  background-color: grey;
  width: 300px;
  text-align:center;
  background: transparent;
  color: grey;
  border: 2px solid white;
  :hover {
    background-color:white;
    
    align-items: center;
    
  }
`;

export const DashboardContent = styled.div`
 padding: 50px;
`;
export const MenuCategoryItem = styled.section`
  font-size: 22px;
  font-weight: lighter;
  padding: 5px 0px;
  transition: 100ms background-color;
  :hover {
    cursor: pointer;
    background-color: #42494c;
  }
  span {
    padding: 0px 20px;
  }
`;


export const GuildIcon = styled.div`
  height: 60px;
  width: 60px;
  margin: 5px 0px;
  background-color: grey;
  background-position: center;
  background-size: 100%;
  border-radius: 50px;
`;
export const DropdownHeader = styled.div`
  background-color: #21262d;
  padding: 8px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
export const DropdownItemContainer = styled.div<any>`
  max-height: 0px;
  overflow-y: scroll;
  opacity: 0;
  transition: 300ms;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
  }
  ::-webkit-scrollbar-thumb {
    background-color: #171717;
    border-radius: 50px;
  }
  ${(props) =>
    props.expanded
      ? css`
          max-height: 220px;
          opacity: 1;
        `
      : css`
          max-height: 0px;
          opacity: 0;
        `}
`;

export const DropdownItem = styled.div<any>`
  background-color: #21262d;
  color: white;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 5px 20px;
  :hover {
    background-color: #545d6b;
    cursor: pointer;
  }
  ${(props) =>
    props.isSelected &&
    css`
      background-color: #2e2e2e;
    `}
`;

export const DropdownFooter = styled.footer`
  background-color: #21262d;
  padding: 8px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-family: "Titillium Web";
  width: 80px;
  height: 30px;
  padding: 1px;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: inherit;
  border: ${({ theme }) => theme.padding.border};
  outline: none;
  color:  ${({ theme }) => theme.text.main};
  border-radius: 5px;
  transition: 100ms;
  :hover {
    cursor: pointer;
    background-color: #4a4a4a;
  }
  :active {
    background-color: #262626;
  }
  :disabled {
    background-color: #919191;
    border: none;
  }
`;

export const StyledBorder = styled.div`
border: ${({ theme }) => theme.padding.border};
padding: 1px;
background-color: inherit;
border-radius: 5px;
transition: 100ms;
margin-left: 2px;

`;

export const Input = styled.input`
  font-family: "Titillium Web";
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 4px 8px;
  border-radius: 5px;
  background-color: inherit;
  color: white;
`;
export const NewMenuHeader = styled.button`
  padding: 1px;
  height: 40px;
  position: fixed;
  font-size; 20px;
  text-align: center;
  margin-left: 1625px;
  font-family: Titillium Web;
  border-radius: 50px;
  font-weight: Bold;
  border:  ${({ theme }) => theme.padding.border};
  color:  ${({ theme }) => theme.text.main};

  background-color: ${({ theme }) => theme.padding.activeborder};
  width: 135px;
  :hover {
    cursor: pointer;
    background-color: #DCE0E6;
  }
`;