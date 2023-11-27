import Image from "next/image";

const NextImage = props => {
  return <Image {...props} style={{
    width: "100%",
    height: "auto",
    ...props.style
  }} />;
};

export default NextImage;