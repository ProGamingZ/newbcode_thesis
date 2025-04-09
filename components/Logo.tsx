import { Image } from "expo-image";

type Props = {
    imgSource: string;
}

export default function ImageViewer({imgSource}: Props)
{
    return <Image source={imgSource} style={styles.image}></Image>
}

const styles = {
    image: {
        width: 150,
        height: 150,
      },
}