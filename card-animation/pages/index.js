import { motion } from "framer-motion";
import React, { useState } from "react";
const Index = () => {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <motion.div className="main">
            <motion.div transition={{ layout: { duration: 1, type: "spring" } }} layout onClick={() => setIsOpen(!isOpen)} className="card" >
                <motion.h2 layout='position' className="">Welcome to Next.js!🤷‍♂️</motion.h2>
                {isOpen &&
                    (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="expand">
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        </p>
                        <p>
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        </p>
                    </motion.div>
                    )}
            </motion.div>
        </motion.div>
    );
};

export default Index;
