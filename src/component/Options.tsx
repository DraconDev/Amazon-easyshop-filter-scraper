import React, { useState } from "react";

import OneOptionBox from "./OneOptionBox";
import OptionTitle from "./OptionTitle";
import InputBox from "./InputBox";
import CustomCheckbox from "./CustomCheckbox";
import useMyState from "@component/store/store";

import store from "@component/store/store";
import useMyStore from "@component/store/store";
import { SearchBar } from "./SearchBar";

const Options = () => {
    const store = useMyStore((state) => state);

    return (
        <div className="Options flex w-full h-min flex-col justify-center p-2 ">
            <SearchBar></SearchBar>
            <div className="main flex bg-primaryDark w-full p-4 rounded-md">
                <div className="flex flex-row flex-wrap w-full h-fit">
                    <OneOptionBox>
                        <OptionTitle>Allow sponsored</OptionTitle>
                        {/* <CustomCheckbox
                            checked={allowSponsored}
                            onClick={setAllowSponsored}
                        ></CustomCheckbox> */}
                        <CustomCheckbox
                            checked={store.sponsored}
                            onClick={store.sponsoredToggle}
                        ></CustomCheckbox>
                    </OneOptionBox>
                    <OneOptionBox>
                        <OptionTitle>Free delivery</OptionTitle>
                        <CustomCheckbox
                            checked={store.freeDelivery}
                            onClick={() =>
                                store.update({
                                    freeDelivery: !store.freeDelivery,
                                })
                            }
                        ></CustomCheckbox>
                    </OneOptionBox>
                    <OneOptionBox>
                        <p className="">Price Min</p>
                        <InputBox
                            value={store.priceMinimum}
                            onChange={(event) =>
                                store.setPriceMinimum(event.target.value)
                            }
                        ></InputBox>
                    </OneOptionBox>
                    <OneOptionBox>
                        <p className="">Price Max</p>
                        <InputBox
                            value={store.priceMaximum}
                            onChange={(event) =>
                                store.setPriceMaximum(event.target.value)
                            }
                        ></InputBox>
                    </OneOptionBox>
                    <OneOptionBox>
                        <p>Votes</p>
                        <InputBox
                            value={store.votesMinimum}
                            onChange={(event) => {
                                store.update({
                                    votesMinimum: event.target.value,
                                });
                            }}
                        ></InputBox>
                    </OneOptionBox>
                    <OneOptionBox>
                        <p>Min rating</p>
                        <InputBox
                            value={store.ratingMinimum}
                            onChange={(event) => {
                                store.update({
                                    ratingMinimum: event.target.value,
                                });
                            }}
                        ></InputBox>
                    </OneOptionBox>
                    <OneOptionBox>
                        <p>region</p>
                        <InputBox
                            value={store.region}
                            onChange={(event) => {
                                store.update({
                                    region: event.target.value,
                                });
                            }}
                        ></InputBox>
                    </OneOptionBox>
                </div>
            </div>
        </div>
    );
};

export default Options;
