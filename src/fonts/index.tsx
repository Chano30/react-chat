import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face{
        font-family: 'Helvetica Neue';
        font-style: normal;
        font-weight: normal;
        src: local('Helvetica Neue'), url('/font/helveticaneue.woff) format('woff')
      }
    `}
  />
)

export default Fonts