import { useState } from 'react';
import Accordion from '../../../components/Accordian';
import { DropdownComponent } from '../../../components/Dropdown';
import FileUpload from '../../../components/FileUpload';
import PhoneNumber from '../../../components/PhoneNumber';
import { FacebookIcon, InstagramIcon, LinkedInIcon, Telegram, TiktokIcon, TwitterIcon, UploadImageIcon, YoutubeIcon } from '../../../components/Icons';
import { useQuery } from '@tanstack/react-query';
import { AccountDetailForm } from './profileSettingSection/AccountDetailsForm';
import { ProfileImage } from './profileSettingSection/ProfileImage';
import { SocialMediaForm } from './profileSettingSection/SocialLinks';
import { ChangePasswordForm } from './profileSettingSection/ChangePassword';
import { EmailChangeForm } from './profileSettingSection/EmailChange';
import { GET_PROFILE } from '../../../services/operations/adminApi';
import { toast } from 'sonner';
import { FormLoadingUI } from './ProductDetails';


function ProfileSettings() {

    const { isLoading, error, data } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            return await GET_PROFILE();
        }
    });



    const { user } = data ? data : { user: {} };



    // console.log(user.socailLinks,"jfsjhdfh");
    if (isLoading) {
        return <FormLoadingUI />
    }
    if (error) {
        return toast.error(error.message)
    }

    let socialMediaLinks = [
        {
            label: "Facebook",
            link: "",
            icons: <FacebookIcon />,
        },
        {
            label: "Twitter",
            link: "",
            icons: <TwitterIcon />,
        },
        {
            label: "Instagram",
            link: "",
            icons: <InstagramIcon />,
        },
        {
            label: "Youtube",
            link: "",
            icons: <YoutubeIcon />,
        },
        {
            label: "LinkedIn",
            link: "",
            icons: <LinkedInIcon />,
        },
        {
            label: "TikTok",
            link: "",
            icons: <TiktokIcon />,
        },
        {
            label: "Telegram",
            link: "",
            icons: <Telegram />,
        },
    ]



    let newSocialMediaLinks = socialMediaLinks.map((item) => {
        if (user.socailLinks.length > 0) {
            let { linkName, socialLink } = user.socailLinks.find(itm => itm.label === item.linkName)
            return ({ label: linkName, link: socialLink, icons: item.icons })
        }
        return item
    })



    // console.log(newSocialMediaLinks);


    const items = [
        {
            title: 'Account Details',
            content: <AccountDetailForm defaultData={{ ...user }} />
        },
        {
            title: 'Profile Image',
            content: <ProfileImage defaultData={user.profileImage} />
        },
        {
            title: 'Social Links',
            content: <SocialMediaForm socialMediaLinks={newSocialMediaLinks} />
        },
        {
            title: 'Change Password',
            content: <ChangePasswordForm />
        },
        {
            title: 'Change Email',
            content: <EmailChangeForm email={user.email} />
        }
    ];


    return (
        <div>
            <div className="">
                <Accordion items={items} />
            </div>
        </div>
    )
}

export default ProfileSettings




