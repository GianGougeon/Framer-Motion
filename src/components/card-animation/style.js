import { motion } from "framer-motion";
import styled from "styled-components";



export const Main = styled(motion.div)`
    height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    background-color: #212121;
    position: relative;
    overflow: hidden;
`;
export const Card = styled(motion.div)`
    background: rgb(173, 169, 169);
    padding: 2em;
    border-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
    overflow: hidden;
`;

export const Expand = styled(motion.div)`
    width: 40em;
    padding: 4em;
`;
