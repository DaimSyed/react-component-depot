const GIT_REPO =
    "https://github.com/codegeous/react-component-depot/tree/master/src/";
const YOUTUBE_BASE = "https://youtu.be/";

export default {
    api: process.env.REACT_APP_API_ENDPOINT,

    GOOGLE: {
        GAPI_KEY: "",
        reCaptcha: process.env.REACT_APP_RECAPCTHA_SITE_TOKEN
    },

    hCaptchaSiteToken: process.env.REACT_APP_HCAPTCHA_SITE_TOKEN,

    links: {
        customGoogleMaps: {
            tutorial: `${YOUTUBE_BASE}xUsn2nj4fy0`,
            code: `${GIT_REPO}pages/GoogleMaps/CustomStyle/index.js`
        },
        buttonLoaderHooks: {
            tutorial: `${YOUTUBE_BASE}nCEnqQABC5A`,
            code: `${GIT_REPO}pages/ButtonLoadingSpinner/index.js`
        },
        otpBox: {
            tutorial: `${YOUTUBE_BASE}qf56frPk5lA`,
            code: `${GIT_REPO}pages/OTPBox/index.js`
        },
        contactListCRUD: {
            tutorial: "",
            code: `${GIT_REPO}pages/ContactList/index.js`
        },
        showAndHideElements: {
            tutorial: `${YOUTUBE_BASE}jRxoO-Zd0pQ`,
            code: `${GIT_REPO}pages/ReactBasics/ShowAndHide/index.js`
        },
        scrollIndicator: {
            tutorial: `${YOUTUBE_BASE}-rYmnXV6sYw`,
            code: `${GIT_REPO}components/ScrollIndicator/index.js`
        },
        floatingYoutubePlayer: {
            tutorial: `${YOUTUBE_BASE}lT4uJI6TXAg`,
            code: `${GIT_REPO}components/YoutubePlayer/index.js`
        },
        signup: {
            tutorial: "",
            code: `${GIT_REPO}pages/Signup/index.js`
        },
        hooks: {
            tutorial: `${YOUTUBE_BASE}fT7jBMG7GIM`,
            code: `${GIT_REPO}pages/HooksDemo/index.js`
        },
        datatable: {
            tutorial: `${YOUTUBE_BASE}emX5KvZ6Hbo`,
            code: `${GIT_REPO}pages/DataTable/index.js`
        },
        batteryStatus: {
            tutorial: `${YOUTUBE_BASE}50cOgnVmflE`,
            code: `${GIT_REPO}pages/BatteryStatus/index.js`
        },
        fileupload: {
            tutorial: `${YOUTUBE_BASE}_XD5ko7Fy9E`,
            code: `${GIT_REPO}pages/FileUpload/index.js`
        },
        geoLocation: {
            tutorial: `${YOUTUBE_BASE}TID8Z29je5o`,
            code: `${GIT_REPO}pages/GeoLocation/index.js`
        },
        infniteScrolling: {
            tutorial: `${YOUTUBE_BASE}8nFNxnjoTZ4`,
            code: `${GIT_REPO}pages/InfiniteScrolling/index.js`
        },
        recaptcha: {
            tutorial: `${YOUTUBE_BASE}e_vMoPCBfqU`,
            code: `${GIT_REPO}pages/ReCaptcha/index.js`
        },
        hcaptcha: {
            tutorial: `${YOUTUBE_BASE}KcLeXxlkqf0`,
            code: `${GIT_REPO}pages/HCaptcha/index.js`
        }
    },
    youtubeVideos: [
        {
            title:
                "Full page loading spinner for API calls in ReactJS with Redux",
            id: "vCs50MV-TbM"
        },
        {
            title: "File Upload with progress bar in React JS and axios",
            id: "Ti8QNiRRzOA"
        },
        {
            title: "Add loading spinner for buttons in reactjs",
            id: "vgDObZGhQuw"
        },
        {
            title: "Display fallback image for a broken image link in reactjs ",
            id: "90P1_xCaim4"
        },
        {
            title: "Material style preloader for image tag in react js",
            id: "GBHBjv6xfY4"
        },
        {
            title: "Building a search filter in reactjs",
            id: "RM_nXOyHwN0"
        }
    ]
};
