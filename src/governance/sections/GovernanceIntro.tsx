import React from "react";
import Image from "next/image";
import { Typography } from "@originprotocol/origin-storybook";
import { Section } from "../../components";
import { assetRootPath } from "../../utils/image";
import { GovernanceStats } from "../components";
import { commify } from "ethers/lib/utils";

interface GovernanceIntroProps {
  sectionOverrideCss?: string;
}

const GovernanceIntro = ({ sectionOverrideCss }: GovernanceIntroProps) => {
  return (
    <Section
      className={sectionOverrideCss}
      innerDivClassName="relative bg-origin-bg-black pt-8 lg:pt-20"
    >
      <Image
        src={assetRootPath("/images/splines20.png")}
        width="700"
        height="700"
        alt="splines"
        className="absolute top-0 right-0"
      />

      <Typography.H4 className="z-10 relative px-6 lg:px-20">
        Fully decentralized governance
      </Typography.H4>

      <Typography.Body2 className="mt-8 md:mt-10 max-w-[60%] relative z-10 px-6 lg:px-20">
        The Origin Dollar protocol consists of a set of automated smart
        contracts on the Ethereum blockchain. This code, protected by a 48-hour
        timelock, is owned and controlled by a global community of OGV token
        holders who operate a decentralized autonomous organization, known as
        the Origin Dollar DAO.
      </Typography.Body2>

      {/* Learn more button */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com"
      >
        <div className="flex items-center mt-4 w-fit cursor-pointer px-6 lg:px-20">
          <Typography.Body3 className="text-sm text-gradient2">
            Learn more
          </Typography.Body3>

          <Image
            src={assetRootPath("/images/ext-link.svg")}
            width={8}
            height={8}
            alt="external link"
            className="ml-2 mt-[0.5px]"
          />
        </div>
      </a>

      {/* Stats */}
      <div className="relative flex mt-12 z-10">
        <GovernanceStats
          className="border-l-0"
          title="Registered voters"
          value={commify(1437)}
        ></GovernanceStats>
        <GovernanceStats
          title="Open-source contributors"
          value={commify(273)}
        ></GovernanceStats>
        <GovernanceStats
          title="Improvement proposals"
          value={commify(66)}
        ></GovernanceStats>
      </div>
    </Section>
  );
};

export default GovernanceIntro;
