import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/Rightsidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "ahmed", lastName: "samir " };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header text-red-600">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250}
          />
        </header>
      </div>

      <RightSidebar
        banks={[
          {
            currentBalance: 1234.5,
          },
          {
            currentBalance: 500.5,
          },
        ]}
        user={{ firstName: "ahmed", lastName: "samir" }}
      />
    </section>
  );
};

export default Home;
