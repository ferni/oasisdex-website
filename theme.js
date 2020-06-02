import oasisTheme from '@makerdao/dai-ui-theme-oasis';
import { icons } from '@makerdao/dai-ui-icons';

const theme = {
  ...oasisTheme,
  icons: {
    ...icons,
    logo: {
      path: (
        <>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.91636 20L20 2.91636L37.0836 20L20 37.0836L2.91636 20ZM19.1458 0.353814C19.6176 -0.117938 20.3824 -0.117938 20.8542 0.353814L39.6462 19.1458C40.1179 19.6176 40.1179 20.3824 39.6462 20.8542L20.8542 39.6462C20.3824 40.1179 19.6176 40.1179 19.1458 39.6462L0.353814 20.8542C-0.117938 20.3824 -0.117938 19.6176 0.353813 19.1458L19.1458 0.353814ZM20.0001 32.08L31.8484 20.2317C30.6618 21.1927 25.1212 25.1566 20.0001 20.0356C14.4095 14.4449 8.3188 19.6817 7.93891 20.0187L20.0001 32.08Z"
            fill="currentColor"
          />
          <path
            d="M53.96 20C53.96 17.68 54.3667 15.8933 55.18 14.64C56.0067 13.3867 57.2733 12.76 58.98 12.76C59.9133 12.76 60.7 12.9333 61.34 13.28C61.9933 13.6267 62.52 14.12 62.92 14.76C63.32 15.3867 63.6067 16.1467 63.78 17.04C63.9533 17.92 64.04 18.9067 64.04 20C64.04 22.32 63.6267 24.1067 62.8 25.36C61.9867 26.6133 60.7133 27.24 58.98 27.24C58.06 27.24 57.28 27.0667 56.64 26.72C56 26.3733 55.48 25.8867 55.08 25.26C54.68 24.62 54.3933 23.86 54.22 22.98C54.0467 22.0867 53.96 21.0933 53.96 20ZM55.72 20C55.72 20.7733 55.7667 21.5067 55.86 22.2C55.9667 22.8933 56.1467 23.5067 56.4 24.04C56.6533 24.56 56.9867 24.98 57.4 25.3C57.8133 25.6067 58.34 25.76 58.98 25.76C60.1267 25.76 60.96 25.2933 61.48 24.36C62.0133 23.4267 62.28 21.9733 62.28 20C62.28 19.24 62.2267 18.5133 62.12 17.82C62.0267 17.1133 61.8533 16.5 61.6 15.98C61.3467 15.4467 61.0067 15.0267 60.58 14.72C60.1533 14.4 59.62 14.24 58.98 14.24C57.8467 14.24 57.02 14.7133 56.5 15.66C55.98 16.5933 55.72 18.04 55.72 20ZM67.5522 17.78C68.1255 17.4467 68.7722 17.2067 69.4922 17.06C70.2122 16.9133 70.9189 16.84 71.6122 16.84C72.2922 16.84 72.8455 16.9467 73.2722 17.16C73.7122 17.3733 74.0522 17.6533 74.2922 18C74.5455 18.3333 74.7122 18.72 74.7922 19.16C74.8855 19.5867 74.9322 20.02 74.9322 20.46C74.9322 20.9667 74.9189 21.5067 74.8922 22.08C74.8655 22.6533 74.8455 23.2267 74.8322 23.8C74.8322 24.4667 74.8722 25.1 74.9522 25.7H76.2922V27H73.6322L73.4522 25.5H73.3522C73.2722 25.62 73.1522 25.7733 72.9922 25.96C72.8322 26.1467 72.6189 26.3333 72.3522 26.52C72.0989 26.6933 71.7855 26.8467 71.4122 26.98C71.0389 27.1133 70.5989 27.18 70.0922 27.18C69.1055 27.18 68.3255 26.9267 67.7522 26.42C67.1789 25.9133 66.8922 25.22 66.8922 24.34C66.8922 23.66 67.0389 23.0933 67.3322 22.64C67.6389 22.1867 68.0722 21.84 68.6322 21.6C69.1922 21.36 69.8655 21.22 70.6522 21.18C71.4522 21.14 72.3455 21.1933 73.3322 21.34C73.3989 20.7267 73.4055 20.22 73.3522 19.82C73.3122 19.4067 73.2055 19.08 73.0322 18.84C72.8722 18.6 72.6389 18.4333 72.3322 18.34C72.0389 18.2333 71.6722 18.18 71.2322 18.18C70.6322 18.18 70.0589 18.2667 69.5122 18.44C68.9655 18.6 68.4789 18.7667 68.0522 18.94L67.5522 17.78ZM70.4922 25.84C70.8655 25.84 71.2122 25.78 71.5322 25.66C71.8522 25.54 72.1322 25.3867 72.3722 25.2C72.6122 25.0133 72.8122 24.8133 72.9722 24.6C73.1322 24.3733 73.2522 24.16 73.3322 23.96V22.56C72.6389 22.44 71.9989 22.38 71.4122 22.38C70.8255 22.38 70.3189 22.4467 69.8922 22.58C69.4655 22.7 69.1322 22.8933 68.8922 23.16C68.6522 23.4267 68.5322 23.7733 68.5322 24.2C68.5322 24.64 68.6789 25.0267 68.9722 25.36C69.2789 25.68 69.7855 25.84 70.4922 25.84ZM86.5444 24.3C86.5444 23.8733 86.3777 23.5467 86.0444 23.32C85.711 23.08 85.2977 22.8933 84.8044 22.76C84.311 22.6133 83.771 22.48 83.1844 22.36C82.611 22.24 82.0777 22.08 81.5844 21.88C81.091 21.68 80.6777 21.4133 80.3444 21.08C80.011 20.7333 79.8444 20.2533 79.8444 19.64C79.8444 19.1333 79.951 18.7 80.1644 18.34C80.391 17.98 80.6844 17.6867 81.0444 17.46C81.4044 17.22 81.8244 17.0467 82.3044 16.94C82.7844 16.82 83.2844 16.76 83.8044 16.76C84.7377 16.76 85.5377 16.88 86.2044 17.12C86.8844 17.3467 87.4244 17.5867 87.8244 17.84L87.1844 19.1C86.7444 18.86 86.2644 18.6333 85.7444 18.42C85.2377 18.1933 84.5977 18.08 83.8244 18.08C83.531 18.08 83.2377 18.1133 82.9444 18.18C82.6644 18.2333 82.4044 18.32 82.1644 18.44C81.9377 18.56 81.751 18.72 81.6044 18.92C81.471 19.1067 81.4044 19.34 81.4044 19.62C81.4044 19.9667 81.571 20.2333 81.9044 20.42C82.2377 20.6067 82.651 20.7667 83.1444 20.9C83.6377 21.02 84.171 21.14 84.7444 21.26C85.331 21.3667 85.871 21.5267 86.3644 21.74C86.8577 21.9533 87.271 22.24 87.6044 22.6C87.9377 22.96 88.1044 23.4467 88.1044 24.06C88.1044 24.98 87.7377 25.74 87.0044 26.34C86.2844 26.94 85.1977 27.24 83.7444 27.24C83.3044 27.24 82.871 27.2 82.4444 27.12C82.0177 27.04 81.6177 26.9333 81.2444 26.8C80.871 26.6667 80.531 26.52 80.2244 26.36C79.9177 26.1867 79.6644 26.0133 79.4644 25.84L80.2644 24.54C80.4244 24.7 80.6377 24.8667 80.9044 25.04C81.171 25.2 81.4644 25.3467 81.7844 25.48C82.1044 25.6133 82.4444 25.72 82.8044 25.8C83.1777 25.88 83.551 25.92 83.9244 25.92C84.2844 25.92 84.6177 25.8933 84.9244 25.84C85.2444 25.7733 85.5244 25.68 85.7644 25.56C86.0044 25.4267 86.191 25.26 86.3244 25.06C86.471 24.8467 86.5444 24.5933 86.5444 24.3ZM92.2766 27V25.66H95.7566V18.34H92.2766V17H97.3566V25.66H100.757V27H92.2766ZM95.2166 14.16C95.2166 13.8 95.3366 13.4933 95.5766 13.24C95.8166 12.9733 96.1232 12.84 96.4966 12.84C96.8832 12.84 97.2032 12.9733 97.4566 13.24C97.7232 13.4933 97.8566 13.8 97.8566 14.16C97.8566 14.5067 97.7232 14.8 97.4566 15.04C97.2032 15.28 96.8832 15.4 96.4966 15.4C96.1232 15.4 95.8166 15.28 95.5766 15.04C95.3366 14.8 95.2166 14.5067 95.2166 14.16ZM111.329 24.3C111.329 23.8733 111.162 23.5467 110.829 23.32C110.495 23.08 110.082 22.8933 109.589 22.76C109.095 22.6133 108.555 22.48 107.969 22.36C107.395 22.24 106.862 22.08 106.369 21.88C105.875 21.68 105.462 21.4133 105.129 21.08C104.795 20.7333 104.629 20.2533 104.629 19.64C104.629 19.1333 104.735 18.7 104.949 18.34C105.175 17.98 105.469 17.6867 105.829 17.46C106.189 17.22 106.609 17.0467 107.089 16.94C107.569 16.82 108.069 16.76 108.589 16.76C109.522 16.76 110.322 16.88 110.989 17.12C111.669 17.3467 112.209 17.5867 112.609 17.84L111.969 19.1C111.529 18.86 111.049 18.6333 110.529 18.42C110.022 18.1933 109.382 18.08 108.609 18.08C108.315 18.08 108.022 18.1133 107.729 18.18C107.449 18.2333 107.189 18.32 106.949 18.44C106.722 18.56 106.535 18.72 106.389 18.92C106.255 19.1067 106.189 19.34 106.189 19.62C106.189 19.9667 106.355 20.2333 106.689 20.42C107.022 20.6067 107.435 20.7667 107.929 20.9C108.422 21.02 108.955 21.14 109.529 21.26C110.115 21.3667 110.655 21.5267 111.149 21.74C111.642 21.9533 112.055 22.24 112.389 22.6C112.722 22.96 112.889 23.4467 112.889 24.06C112.889 24.98 112.522 25.74 111.789 26.34C111.069 26.94 109.982 27.24 108.529 27.24C108.089 27.24 107.655 27.2 107.229 27.12C106.802 27.04 106.402 26.9333 106.029 26.8C105.655 26.6667 105.315 26.52 105.009 26.36C104.702 26.1867 104.449 26.0133 104.249 25.84L105.049 24.54C105.209 24.7 105.422 24.8667 105.689 25.04C105.955 25.2 106.249 25.3467 106.569 25.48C106.889 25.6133 107.229 25.72 107.589 25.8C107.962 25.88 108.335 25.92 108.709 25.92C109.069 25.92 109.402 25.8933 109.709 25.84C110.029 25.7733 110.309 25.68 110.549 25.56C110.789 25.4267 110.975 25.26 111.109 25.06C111.255 24.8467 111.329 24.5933 111.329 24.3ZM116.561 13C117.068 12.9333 117.594 12.8933 118.141 12.88C118.701 12.8533 119.174 12.84 119.561 12.84C120.774 12.84 121.788 13.0133 122.601 13.36C123.428 13.7067 124.088 14.1933 124.581 14.82C125.088 15.4333 125.448 16.1733 125.661 17.04C125.888 17.9067 126.001 18.86 126.001 19.9C126.001 20.8467 125.901 21.76 125.701 22.64C125.501 23.5067 125.154 24.28 124.661 24.96C124.168 25.6267 123.501 26.1667 122.661 26.58C121.834 26.98 120.794 27.18 119.541 27.18C119.368 27.18 119.141 27.1733 118.861 27.16C118.581 27.16 118.294 27.1467 118.001 27.12C117.708 27.1067 117.428 27.0933 117.161 27.08C116.894 27.0667 116.694 27.0467 116.561 27.02V13ZM119.641 14.32C119.454 14.32 119.214 14.3267 118.921 14.34C118.641 14.3533 118.408 14.38 118.221 14.42V25.62C118.288 25.6333 118.381 25.6467 118.501 25.66C118.634 25.66 118.768 25.6667 118.901 25.68C119.034 25.68 119.161 25.6867 119.281 25.7C119.414 25.7 119.521 25.7 119.601 25.7C120.574 25.7 121.361 25.54 121.961 25.22C122.574 24.9 123.048 24.4733 123.381 23.94C123.714 23.3933 123.941 22.7733 124.061 22.08C124.181 21.3733 124.241 20.6467 124.241 19.9C124.241 19.2467 124.188 18.5933 124.081 17.94C123.974 17.2733 123.754 16.6733 123.421 16.14C123.101 15.6067 122.634 15.1733 122.021 14.84C121.421 14.4933 120.628 14.32 119.641 14.32ZM129.493 13H137.713V14.48H131.153V19.06H137.213V20.54H131.153V25.52H137.813V27H129.493V13ZM144.765 19.88L140.545 13H142.545L145.345 17.74L145.845 18.68L146.325 17.74L149.305 13H151.145L146.765 19.74L151.345 27H149.405L146.265 21.98L145.725 20.98L145.205 21.98L142.005 27H140.145L144.765 19.88Z"
            fill="currentColor"
          />
        </>
      ),
      viewBox: '0 0 152 40',
    },
    logo_only: {
      path: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.91636 20L20 2.91636L37.0836 20L20 37.0836L2.91636 20ZM19.1458 0.353814C19.6176 -0.117938 20.3824 -0.117938 20.8542 0.353814L39.6462 19.1458C40.1179 19.6176 40.1179 20.3824 39.6462 20.8542L20.8542 39.6462C20.3824 40.1179 19.6176 40.1179 19.1458 39.6462L0.353814 20.8542C-0.117938 20.3824 -0.117938 19.6176 0.353813 19.1458L19.1458 0.353814ZM20.0001 32.08L31.8484 20.2317C30.6618 21.1927 25.1212 25.1566 20.0001 20.0356C14.4095 14.4449 8.3188 19.6817 7.93891 20.0187L20.0001 32.08Z"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 40 40',
    },
  },
  metadata: {
    fontLinkHref:
      'https://fonts.googleapis.com/css2?family=Rubik&family=Space+Mono:wght@400;700&display=swap',
  },
  layout: {
    ...oasisTheme.layout,
    container: {
      ...oasisTheme.layout.container,
      px: 3,
    },
    landingContainer: {
      ...oasisTheme.layout.landingContainer,
      px: 3,
    },
  },
};

export default theme;
