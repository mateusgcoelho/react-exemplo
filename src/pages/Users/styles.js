import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    margin: 56px auto;

    a {
        display: block;

        transition: transform .5s ease;

        &:hover {
            transform: scale(1.02);
        }
    }

    ul + ul {
        margin-top: 24px;
    }
`;

export const Lista = styled.ul`
    background: #1a1a1a;

    list-style: none;

    display: flex;
    justify-content: space-between;
    padding: 20px 56px;
    border-radius: 8px;
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li:first-child {
        font-weight: bold;

        color: pink;
    }

    li + li {
        display: block;
        margin-top: 12px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: block;

        padding: 12px 24px;
        background: pink;
        border-radius: 8px;
        font-weight: bold;
        color: #020202;

        transition: background-color, color, 0.2s;

        & + a {
            margin-left: 24px;
        }

        &:hover {
            background: purple;

            color: #f1f1f1;
        }
    }
`;