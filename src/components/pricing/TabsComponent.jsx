/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import * as Tabs from "@radix-ui/react-tabs";

const TabsComponent = ({ selectedTab, handleTabChange, tabItems, children }) => {
    return (
        <Tabs.Root
            className="mx-auto mt-5 px-4 md:px-8 max-w-screen-xl"
            value={selectedTab}
            onValueChange={(val) => handleTabChange(val)}
        >
            <Tabs.List
                className="sm:flex justify-center gap-x-3 hidden px-px py-1 text-sm overflow-x-auto"
                aria-label="Manage your account"
            >
                {tabItems.map((item, idx) => (
                    <Tabs.Trigger
                        key={idx}
                        className="hover:bg-gray-100 data-[state=active]:bg-gray-100 active:bg-gray-100 data-[state=active]:shadow-sm px-3 py-1.5 rounded-lg font-medium text-gray-500 hover:text-gray-700 data-[state=active]:text-gray-700 duration-150 outline-gray-800"
                        value={item}
                    >
                        {item}
                    </Tabs.Trigger>
                ))}
            </Tabs.List>
            <div className="relative sm:hidden text-gray-500">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="right-2 absolute inset-y-0 my-auto w-5 h-5 pointer-events-none"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
                <select
                    value={selectedTab}
                    className="focus:border-gray-800 bg-transparent shadow-sm px-3 py-2 border rounded-lg w-full text-sm appearance-none outline-none"
                    onChange={(e) => handleTabChange(e.target.value)}
                >
                    {tabItems.map((item, idx) => (
                        <option key={idx} idx={idx}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
            {children}
        </Tabs.Root>
    );
};

export default TabsComponent