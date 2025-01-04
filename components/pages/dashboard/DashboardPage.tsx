import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";
import { FaBookOpen, FaCirclePlus } from "react-icons/fa6";

const DashboardPage = () => {
    return (
        <div className="p-10 w-full relative h-screen flex flex-col gap-8">
            <div className="flex flex-col gap-2 bg-primary w-full rounded-lg p-10">
                <h1 className="text-3xl font-bold text-white">
                    Welcome Back, Learner!
                </h1>
                <p className="text-white/80 text-lg font-medium">
                    The capacity to learn is a gift; the ability to learn is a
                    skill; the willingness to learn is a choice.&quot; - Brian
                    Herbert
                </p>
            </div>

            <div className="grid grid-cols-3 grid-rows-1 w-full h-60 gap-4">
                <div className="col-span-1 border-2 rounded-lg flex flex-col gap-4 p-5">
                    <h1 className="text-3xl font-bold">Quick Actions</h1>
                    <Button
                        href="/create-deck"
                        className="flex items-center gap-4"
                    >
                        <FaCirclePlus /> Create New Deck
                    </Button>
                    <Button href="/study" className="flex items-center gap-4">
                        <FaBookOpen /> Start Studying
                    </Button>
                </div>
                <div className="col-span-1 border-2 rounded-lg display-center flex-col">
                    <Image
                        src="/images/under-construction.svg"
                        alt="Landing Page Image"
                        height={200}
                        width={200}
                    />{" "}
                    <span className="text-2xl font-bold text-text-secondary">Under Construction</span>
                </div>
                <div className="col-span-1 border-2 rounded-lg display-center flex-col">
                    <Image
                        src="/images/under-construction.svg"
                        alt="Landing Page Image"
                        height={200}
                        width={200}
                    />{" "}
                    <span className="text-2xl font-bold text-text-secondary">Under Construction</span>
                </div>
            </div>

            <Image
                src="/images/logic.svg"
                alt="Landing Page Image"
                height={400}
                width={400}
                className="absolute bottom-0 right-0 mx-10"
            />
        </div>
    );
};

export default DashboardPage;
