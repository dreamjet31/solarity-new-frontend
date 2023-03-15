import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HexColorPicker } from "react-colorful";
import RoomTypeDropdown from "components/Library/RoomTypeDropdown";
import { PrimaryButton, BackButton } from "components/Common/Buttons";
import { useDispatch, RootStateOrAny, useSelector } from "react-redux";
import {
  startLoadingApp,
  stopLoadingApp,
} from "../../../redux/slices/commonSlice";
import { changeInfo, goStep } from "redux/slices/authSlice";
import { StepTitle, WalletAddress } from "./Components";
import { DownArrow, UpArrow } from "components/icons";
import { PassportThemes } from "data/Register";

const EditStyle = (props) => {
  const { onMint } = props;
  const dispatch = useDispatch();
  const router = useRouter();

  const { userInfo, loading, isMobile } = useSelector(
    (state: RootStateOrAny) => ({
      userInfo: state.auth.userInfo,
      loading: state.common.appLoading,
      isMobile: state.common.isMobile,
    })
  );
  const [toggleStatus, setToggleStatus] = useState(false);
  const [selectedImage, setSelectedImage] = useState(PassportThemes[0]);

  const onSetColor = (value, target) => {
    let tempStyle = {};
    Object.assign(tempStyle, userInfo.passportStyle);
    const payload = {
      value: {
        ...tempStyle,
        [target]: value,
      },
      type: "passportStyle",
    };
    dispatch(changeInfo({ payload: payload }));
  };

  const selectImage = (item) => {
    setSelectedImage(item);
    const payload = {
      value: item,
      type: "backgroundImage",
    };
    dispatch(changeInfo({ payload: payload }));
  };

  // const onContinue = () => {
  //   const data = {
  //     passportStyle: userInfo.passportStyle,
  //   };
  //   const payload = {
  //     stepNum: 6,
  //     data,
  //     next: router.push({ pathname: "/auth/buyroom" }),
  //   };
  //   dispatch(goStep(payload));
  // };

  const onUndo = () => {
    const payload = {
      stepNum: 4,
      data: {
        badges: [],
      },
    };
    dispatch(goStep(payload));
  };

  return (
    <>
      <div className="flex items-center justify-between pt-8 pl-5 pr-5 lg:p-5 lg:pb-0 lg:pt-8 rounded-t">
        {!isMobile ? (
          <h3 className="text-[22px] sm:text-[30px] text-white font-medium tracking-[0.02em]">
            Edit Style
          </h3>
        ) : (
          <StepTitle caption={"Style"} />
        )}
        <WalletAddress />
      </div>
      {/*body*/}
      <div className="relative p-5 pt-0 sm:p-5 flex-auto text-[16px] sm:text-[20px]">
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Logo Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{
                backgroundColor: `${
                  userInfo &&
                  userInfo.passportStyle &&
                  userInfo.passportStyle.logo
                }`,
              }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#29b080"}
              onChange={(value) => onSetColor(value, "logo")}
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Background Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{
                backgroundColor: `${userInfo.passportStyle.background}`,
              }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#333333"}
              onChange={(value) => onSetColor(value, "background")}
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Line Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{ backgroundColor: `${userInfo.passportStyle.line}` }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#29b080"}
              onChange={(value) => onSetColor(value, "line")}
            />
          </div>
        </div>
        <div className="mb-5 flex flex-row justify-between items-center relative">
          <span className="text-white">Text Color: </span>
          <div className="border-[1px] border-white rounded-[12px] p-[2px] cursor-pointer peer">
            <div
              className="w-[60px] h-[30px] sm:w-[80px] sm:h-[40px] rounded-[10px]"
              style={{ backgroundColor: `${userInfo.passportStyle.text}` }}
            ></div>
          </div>
          <div className="hidden peer-hover:block absolute hover:block right-0 bottom-[37px] sm:right-[-64px] sm:bottom-[47px] z-10">
            <HexColorPicker
              className="!w-[150px] !h-[150px]"
              color={"#ffffff"}
              onChange={(value) => onSetColor(value, "text")}
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center relative">
          <span className="text-white">Background Image: </span>

          <div className="w-fit h-[46px] border-[1px] border-white rounded-[12px] px-[10px] cursor-pointer flex justify-center items-center">
            {/* <RoomTypeDropdown items={["Hi", "Hello"]} /> */}
            <div
              className="relative flex justify-around w-full items-center cursor-pointer gap-2"
              onClick={() => setToggleStatus(!toggleStatus)}
            >
              <div className="font-extralight text-[14px] text-[#f3f3f3]">
                {selectedImage.title}
              </div>
              <div className={``}>
                {toggleStatus ? <UpArrow /> : <DownArrow />}
              </div>
              {toggleStatus && (
                <div
                  className={`flex flex-col absolute w-[210px] h-[290px] overflow-y-scroll top-[40px] right-[-10px] text-center font-400 text-[16px] text-[#f3f3f3] z-[1000] p-[8px] bg-globalBgColor border-[1.5px] border-[#272829] rounded-[12px] cursor-pointer`}
                >
                  {PassportThemes.map((item, index) => (
                    <div
                      className={`hover:bg-[#272829] rounded-[6px] py-[2px] ${
                        item == selectedImage ? "text-primary" : ""
                      }`}
                      onClick={() => selectImage(item)}
                      key={index}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="">
          <select name="mint">
            <option value="0" selected>
              Free
            </option>
            <option value="Premium">Premium</option>
          </select>
        </div>
      </div>
      <div className="w-full px-5 py-5 lg:px-5 lg:py-5 flex-auto flex items-end">
        <div className="inline-block w-[20%] pr-2">
          <BackButton onClick={() => onUndo()} styles="rounded-[15px]" />
        </div>
        <div className="inline-block w-[80%] pl-2">
          <PrimaryButton
            caption="Mint"
            icon=""
            bordered={false}
            onClick={() => onMint()}
            disabled={loading ? true : false}
            styles="rounded-[15px]"
          />
        </div>
      </div>
    </>
  );
};

export default EditStyle;
