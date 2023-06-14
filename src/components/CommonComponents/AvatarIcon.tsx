import { Avatar, SxProps } from "@mui/material"

export const AvatarIcon=({img,styles}:{img:string,styles:SxProps})=>{

    return  <Avatar src={img || "/icons/user.svg"} className="avatar__image" sx={styles}/>
}