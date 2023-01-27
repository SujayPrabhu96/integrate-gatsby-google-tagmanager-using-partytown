import React from "react";
import { Partytown } from "@builder.io/partytown/react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <Partytown key="partytown" debug={true} forward={["dataLayer.push"]} />,
    <script
      key="plugin-google-tagmanager"
      type="text/partytown"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w['dataLayer']=w['dataLayer']||[];w['dataLayer'].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl+'';f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer', '${process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID}');`,
      }}
    />,
    // <script
    //   key="partytown-vanilla-config"
    //   dangerouslySetInnerHTML={{
    //     __html: `partytown = {
    //      resolveUrl(url, location) {
    //       if (
    //         url.hostname === "www.google-analytics.com" &&
    //         url.pathname.endsWith(".js")
    //       ) {
    //         var proxyUrl = new URL(location.origin+'/google-analytics');
    //         proxyUrl.searchParams.append("url", url.href);
    //         return proxyUrl;
    //       }
    //       return url;
    //      }
    //    }`,
    //   }}
    // />,
  ]);

  setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
        <iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GATSBY_GOOGLE_TAG_MANAGER_TRACKING_ID}" height="0" width="0" style="display: none; visibility: hidden" aria-hidden="true"></iframe>
                `,
      }}
    />,
  ]);
};
