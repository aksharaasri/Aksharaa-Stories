const React = require("react")
const Layout = require("./src/components/layout")


exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
  		<script async src="https://www.googletagmanager.com/gtag/js?id=G-M9YNYVFXWC"></script>,
  		<script
     dangerouslySetInnerHTML={{
        __html:`
	        window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-M9YNYVFXWC');
   	 	`
     }}
     ></script>
  	])
}

