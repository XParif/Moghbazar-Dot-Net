import { useState } from "react";
import PricingCard from "../components/pricing/PricingCard";
import PricingSection from "../components/pricing/PricingSection";
import TabsComponent from "../components/pricing/TabsComponent";
import { homePlans, gamingPlans, govtPlans } from "../constant/plans";
import * as Tabs from "@radix-ui/react-tabs";

const Packages = () => {
    const [selectedTab, setSelectedTab] = useState("Home Plan");

    const getPlan = (tab) => {
        switch (tab) {
            case "Home Plan":
                return homePlans;
            case "Gaming Plan":
                return gamingPlans;
            case "Govt Plan":
                return govtPlans;
            default:
                return [];
        }
    };

    const handleTabChange = (value) => {
        setSelectedTab(value);
    };

    const tabItems = [
        "Home Plan",
        "Gaming Plan",
        "Govt Plan",
    ];

    return (
        <PricingSection title="Packages" description="The best internet at the best prices">
            <TabsComponent selectedTab={selectedTab} handleTabChange={handleTabChange} tabItems={tabItems}>
                {tabItems.map((item, idx) => (
                    <Tabs.Content key={idx} className="py-6" value={item}>
                        <div className='justify-center gap-6 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 mt-16'>
                            {getPlan(selectedTab).map((planItem, planIdx) => (
                                <PricingCard key={planIdx} item={planItem} />
                            ))}
                        </div>
                    </Tabs.Content>
                ))}
            </TabsComponent>
        </PricingSection>
    );
};

export default Packages;
