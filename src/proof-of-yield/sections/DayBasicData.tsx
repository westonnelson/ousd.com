import React from "react";
import Image from "next/image";
import moment from "moment";
import { utils } from "ethers";
import { assetRootPath } from "../../utils/image";
import { Section } from "../../components";
import {
  BasicData,
  Gradient2Button,
  Table,
  TableData,
  TableHead,
  TitleWithInfo,
  YieldBoostMultiplier,
} from "../components";
import { Typography } from "@originprotocol/origin-storybook";
import { lgSize, xlSize } from "../../constants";
import { shortenAddress } from "../../utils";
import { useViewWidth } from "../../hooks";
import { twMerge } from "tailwind-merge";
const { commify } = utils;

const e = {
  block: 16188461,
  date: 1675886432000,
  action: "Rebase",
  yieldDistributed: 1873.92,
  fees: 208.21,
  transactionHash:
    "0xd9973207c58e3a041786faba972417f853776b88e0453ea113eaa79e44ef4b07",
};

const mockData = [];
for (let i = 0; i < 5; i++) {
  mockData.push(
    Object.assign(
      { ...e },
      { block: e.block + i * 100, date: e.date + i * 1500 }
    )
  );
}

const eventChartColumnCssRight = "pr-6 xl:pr-8";
const eventChartColumnCssLeft = "pl-6 xl:pr-8";

interface DayBasicDataProps {
  timestamp: number;
  sectionOverrideCss?: string;
}

const DayBasicData = ({ timestamp, sectionOverrideCss }: DayBasicDataProps) => {
  const width = useViewWidth();

  return (
    <Section className={twMerge("mb-20", sectionOverrideCss)}>
      <Gradient2Button className="flex justify-center items-center">
        <Image
          src={assetRootPath("/images/arrow-left.svg")}
          width="20"
          height="20"
          alt="arrow-left"
          className="pr-3 inline"
        />
        Back to list
      </Gradient2Button>

      {/* Date UTC */}
      <Typography.Body className="mt-20">
        {moment(timestamp).format("MMM D, YYYY")} UTC
      </Typography.Body>

      <TitleWithInfo className="mt-10 mb-4">Yield distributed</TitleWithInfo>

      <div className="w-fit flex justify-center items-center">
        <Typography.H2 className="font-bold inline">
          ${commify(1873.92)}
        </Typography.H2>
        <Image
          src={assetRootPath("/images/ousd-logo.svg")}
          width="64"
          height="64"
          alt="ousd-logo"
          className="inline ml-4"
        />
      </div>

      <div className="w-full mt-14 flex">
        <div className="w-full lg:w-2/3 lg:mr-8">
          {/* Basic Stats section */}
          <div className="flex">
            <BasicData
              className="flex-1 rounded-tl-lg xl:rounded-l-lg justify-center lg:justify-start"
              title="Distribution APY"
            >
              {commify(3.08)}%
            </BasicData>
            <BasicData
              className="flex-1 rounded-tr-lg xl:rounded-none justify-center lg:justify-start"
              title="OUSD vault value"
            >
              ${commify(49063918)}
            </BasicData>
            {width >= xlSize && (
              <BasicData
                className="flex-1 rounded-b-lg xl:rounded-bl-none xl:rounded-r-lg mt-1 xl:mt-0"
                title="Fees generated"
              >
                ${commify(208.21)}
              </BasicData>
            )}
          </div>

          {width < xlSize && (
            <BasicData
              className="flex-1 flex justify-center rounded-b-lg xl:rounded-bl-none xl:rounded-r-lg mt-1 xl:mt-0"
              title="Fees generated"
            >
              ${commify(208.21)}
            </BasicData>
          )}

          {width < lgSize && <YieldBoostMultiplier />}

          {/* Yield distribution events */}
          <div className="text-blurry mt-14">
            <Typography.Body>Yield distribution events</Typography.Body>
            <Typography.Body3 className="mt-3 text-sm text-table-title">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </Typography.Body3>
            <Table className="mt-6">
              <thead>
                <tr>
                  <TableHead align="left" className={eventChartColumnCssLeft}>
                    Block / Time
                  </TableHead>
                  <TableHead align="left" className={eventChartColumnCssLeft}>
                    Action
                  </TableHead>
                  <TableHead className={eventChartColumnCssRight}>
                    Amount
                  </TableHead>
                  <TableHead info={true} className={eventChartColumnCssRight}>
                    Fees
                  </TableHead>
                  <TableHead className={eventChartColumnCssRight}>
                    {width >= lgSize ? "Transaction" : "Txn"}
                  </TableHead>
                </tr>
              </thead>
              <tbody>
                {mockData.map((item, i) => (
                  <tr
                    className="group border-t-2 hover:bg-hover-bg border-origin-bg-black"
                    key={item.date}
                  >
                    <TableData align="left" className={eventChartColumnCssLeft}>
                      <Typography.Body2 className="text-xs md:text-base">
                        {item.block}
                      </Typography.Body2>
                      <Typography.Body3 className="text-xs md:text-sm text-table-title">
                        {moment.utc(item.date).format("LTS")}
                      </Typography.Body3>
                    </TableData>
                    <TableData align="left" className={eventChartColumnCssLeft}>
                      {item.action}
                    </TableData>
                    <TableData className={eventChartColumnCssRight}>
                      ${commify(item.yieldDistributed)}
                    </TableData>

                    <TableData className={eventChartColumnCssRight}>
                      ${item.fees}
                    </TableData>
                    <TableData className={eventChartColumnCssRight}>
                      {width >= lgSize &&
                        shortenAddress(item.transactionHash, 3)}
                      <a
                        href={`https://etherscan.io/tx/${e.transactionHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block ml-2"
                      >
                        <Image
                          src={assetRootPath("/images/ext-link.svg")}
                          width="16"
                          height="16"
                          alt="ext-link"
                        />
                      </a>
                    </TableData>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
        {/* Yield boost multiplier */}

        {width >= lgSize && <YieldBoostMultiplier />}
      </div>
    </Section>
  );
};

export default DayBasicData;
