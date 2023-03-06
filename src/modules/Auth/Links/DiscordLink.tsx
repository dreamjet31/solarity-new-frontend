import { DiscordImg } from "components/Common/Images";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Provider,
  RootStateOrAny,
  useDispatch,
  useSelector,
} from "react-redux";
import { unlinkAccounts } from "redux/slices/authSlice";

const discordLinkGenerator = (currentUrl: string) => {
  const baseUrl = "https://discord.com/api/oauth2/authorize";
  const params = {
    client_id: process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID,
    redirect_uri: currentUrl,
    response_type: "code",
    scope: "identify connections",
  };
  const urlParams = new URLSearchParams(params);
  return baseUrl + "?" + urlParams.toString();
};

export const DiscordLink = (props) => {
  const { onLink } = props;
  const router = useRouter();
  const {
    query: { link, code },
    asPath,
  } = router;
  const dispatch = useDispatch();
  const { userInfo, isMobile } = useSelector((state: RootStateOrAny) => ({
    userInfo: state.auth.userInfo,
    isMobile: state.common.isMobile,
  }));

  const [appUrl, setAppUrl] = useState("");

  useEffect(() => {
    let url = new URL(window.location.origin + asPath);
    let params = new URLSearchParams(url.search);
    params.delete("state");
    params.delete("code");
    params.set("link", "discord");
    let appUrl = url.origin + url.pathname + "?" + params.toString();
    setAppUrl(appUrl);
  }, []);

  useEffect(() => {
    if (link == "discord") {
      onLink(link, code, appUrl);
    }
  }, [code, link]);

  console.log(discordLinkGenerator(appUrl));

  return (
    <>
      {userInfo.links.discord.connected ? (
        <button
          className={`font-medium p-[16px] sm:p-[22px] rounded-[14px] text-white/70 text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20]  ${
            isMobile ? "justify-center h-[48px]" : "justify-between h-[56px]"
          } !w-[100%] outline-1 bg-focusbackground !text-white`}
          onClick={() => {
            dispatch(
              unlinkAccounts({
                data: {
                  link: "discord",
                  code,
                },
                finalFunction: () => {},
              })
            );
          }}
        >
          {!isMobile ? (
            <>
              <span className="text-[14px] sm:text-[16px] text-left">
                {"Disconnect"}
              </span>
              <div className="text-center pt-2">
                <Image src={DiscordImg} width={28} height={28} />
              </div>
            </>
          ) : (
            <div className="text-center pt-2">
              <Image src={DiscordImg} width={24} height={24} />
            </div>
          )}
        </button>
      ) : (
        <a
          className={`font-medium p-[16px] sm:p-[22px] rounded-[14px] text-white/70 text-[18px] sm:text-[22px] text-center tracking-wider border-none outline outline-primary hover:bg-focusbackground hover:outline-1 hover:outline-primary inline-flex items-center bg-[#1d1e20] ${
            isMobile ? "justify-center h-[48px]" : "justify-between h-[56px]"
          } !w-[100%]`}
          href={discordLinkGenerator(appUrl)}
          // target="_blank"
        >
          {!isMobile ? (
            <>
              <span className="text-[14px] sm:text-[16px] text-left">
                {"Connect"}
              </span>
              <div className="text-center pt-2">
                <Image src={DiscordImg} width={28} height={28} />
              </div>
            </>
          ) : (
            <div className="text-center pt-2">
              <Image src={DiscordImg} width={24} height={24} />
            </div>
          )}
        </a>
      )}
    </>
  );
};
