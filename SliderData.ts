import { ImageSourcePropType } from "react-native";

export type SliderDataProp = {
    id: number;
    img: ImageSourcePropType;
    description: string;
}

const data : SliderDataProp[] = [
    {
        id : 1,
        img: require("./puncturePic.png"),
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit.",
    },
    {
        id : 2,
        img: require("./puncturePic.png"),
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit.",
    },
    {
        id : 3,
        img: require("./puncturePic.png"),
        description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit.",
    },
    
]

export default data;