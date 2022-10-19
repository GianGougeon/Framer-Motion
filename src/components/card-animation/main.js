import { Card, Main, Expand } from "./style";
import { motion } from "framer-motion";
import React, { useState } from "react";

const CardAnimation = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Main>
            <Card
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.h2 layout="position" className="">
                    Welcome to Next.js!🤷‍♂️
                </motion.h2>
                {isOpen && (
                    <Expand
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Donec lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Donec
                        </p>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Donec lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Donec
                        </p>
                    </Expand>
                )}
            </Card>
        </Main>
    );
};

export default CardAnimation;
