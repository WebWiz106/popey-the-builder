import "./App.css";
import Home from "./Pages/Home";

function App() {
  const websiteData = {
    componentsOrder: {
      navbar: 3,
      banner: 2,
      about: 1,
    },
    Navbar: {
      Type: 2,
      Data: [
        {
          index: 3,
          optionName: "Home",
          redirectTo: "home.html",
          isEnabled: true,
        },
        {
          index: 1,
          optionName: "About",
          redirectTo: "about.html",
          isEnabled: true,
        },
        {
          index: 2,
          optionName: "Contact",
          redirectTo: "contact.html",
          isEnabled: true,
        },
      ],
      colors: {
        bgColor: "#6b0d75", //#7a2721 , #52cc64 , #1a4a21 , #2e7994 , #172f66 , #361f87 , #6b0d75 , #f4f0f5
        fontColor: "#f4f0f5",
      },
      fontFamily: "serif", //serif , system-ui , Georgia ,fangsong , cursive
    },
    socialLinks: {
      facebookLink: "",
      tiktokLink: "",
      youtubeLink: "",
      whatsappLink: "",
      instagramLink: "",
      linkedinLink: "",
      twitterLink: "",
      tripadvisorsLink: "",
      snapchatLink: "",
    },
    Home: {
      slugs: "",
      metaTitle: "Home-Page",
      metaDescription: "Home-Description",
      pageName: "home.jsx",
      Banner: {
        index: 1,
        type: "1",
        required: true,
        data: [
          {
            heading: "Heading-1",
            subheading: "Sub-Heading-1",
            image:
              "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
            swapTime: "1000",
          },
          {
            heading: "Heading-2",
            subheading: "Sub-Heading-2",
            image:
              "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
            swapTime: "1000",
          },
          {
            heading: "Heading-3",
            subheading: "Sub-Heading-3",
            image:
              "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_1280.jpg",
            swapTime: "1000",
          },
        ],

        height: "500px",
        fontFamily: "",
      },
      About: { required: true },
      Facilities: { required: true },
      Nearby: { required: true },
      Gallery: { required: true },
      Restaurants: { required: true },
      Staff: { required: true },
      Events: { required: true },
      Services: { required: true },
    },
  };

  return (
    <>
      <Home websiteData={websiteData} />
    </>
  );
}

export default App;
