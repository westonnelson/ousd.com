import { Typography } from "@originprotocol/origin-storybook";
import React from "react";
import { Section } from "../../components";

const Heading = () => {
  return (
    <Section className="mt-20">
      <Typography.H2 className="font-normal text-origin-white">
        OUSD
      </Typography.H2>
      <Typography.H2 className="text-gradient2 font-black">
        Proof of yield
      </Typography.H2>

      <Typography.Body className="mt-10 xl:max-w-[75%]">
        Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </Typography.Body>
    </Section>
  );
};

export default Heading;
