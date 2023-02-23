import styled from "styled-components";

export const NotificationWrapper = styled.div`
    display: flex;
    width: fit-content;
    height: fit-content;
    position: relative;
`
export const NotificationBadge = styled.span`
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 999px;
    background-color: black;
    color: white;
    font-size: 0.8rem;
    padding: 4px;
    line-height: 1em;
    translate: 50% -50%;
`