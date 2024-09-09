import { ref, computed } from 'vue'
import type {
    Site,
} from '~/models/site'
import type {
    Address,
    Email,
    Link,
    Phone,
    SocialLink,
} from '~/models/common/'


export function useSiteData() {
    const address = ref<Address> ({
        address1: "",
        address2: null,
        city: "Farmington",
        state: "MN",
        zip: "55024",
    });
    const emails = ref<Email[]> ([
        {
            display_name: "Adopt",
            account: "adopt",
            domain: "newleashrescue.org"
        },
        {
            display_name: "Support",
            account: "support",
            domain: "newleashrescue.org"
        },
        {
            display_name: "Privacy",
            account: "privacy",
            domain: "newleashrescue.org"
        }
    ])
    const phone = ref<Phone> ({
        raw: "+16512521874",
        formatted: "(651) 252-1874"
    })
    const navigation = ref<Link[]> ([
            {
                title: "Home",
                to: "/#home",
                external: true,
                children: []
            },
            {
                title: "Adopt",
                to: "/adopt",
                external: false,
                children: [
                    {
                        title: "Dogs to Adopt",
                        to: "/adopt/dog",
                        external: false,
                        children: []
                    },
                    {
                        title: "Cats to Adopt",
                        to: "/adopt/cat",
                        external: false,
                        children: []
                    },
                    {
                        title: "Adoption Policy",
                        to: "/adopt/policy",
                        external: false,
                        children: []
                    },
                    {
                        title: "Success Story",
                        to: "/adopt/success",
                        external: false,
                        children: []
                    }
                ]
            },
            {
                title: "Donate",
                to: "/donate",
                external: false,
                children: [
                    {
                        title: "Now",
                        to: "/donate/now",
                        external: false,
                        children: []
                    },
                    {
                        title: "Gifts",
                        to: "/donate/gifts",
                        external: false,
                        children: []
                    },
                    {
                        title: "Fundraising",
                        to: "/donate/fundraising",
                        external: false,
                        children: []
                    },
                    {
                        title: "Memorial",
                        to: "/donate/memorial",
                        external: false,
                        children: []
                    },
                    {
                        title: "Volunteer",
                        to: "/volunteer",
                        external: false,
                        children: []
                    },
                ]
            },
            {
                title: "Foster",
                to: "/foster",
                external: false,
                children: []
            },
            {
                title: "Events",
                to: "/events",
                external: false,
                children: []
            }
    ])
    const social_links = ref<SocialLink[]> ([
        {
            label: "Facebook",
            display_title: "facebook.com/newleash2018",
            icon: "fab fa-facebook",
            href: "https://www.facebook.com/newleash2018/"
        },
        {
            label: "Instagram",
            display_title: "instagram.com/newleashrescuemn",
            icon: "fab fa-instagram",
            href: "https://instagram.com/newleashrescuemn/"
        },
        {
            label: "Tiktok",
            display_title: "tiktok.com/@newleashrescue",
            icon: "fab fa-tiktok",
            href: "https://www.tiktok.com/@newleashrescue"
        },
        {
            label: "GiveMN",
            display_title: "givemn.org/New-Leash-Rescue",
            icon: "far fa-hand-heart",
            href: "https://www.givemn.org/organization/New-Leash-Rescue"
        }
    ])
    const site = ref<Site>({
        title: "New Leash Rescue",
        legalName: "New Leash Rescue",
        tagLine: "Giving dogs a new leash on life",
        url: "https://www.newleashrescue.org",
        address: address.value,
        email: emails.value,
        phone: phone.value,
        navigation: navigation.value,
        social_links: social_links.value,
    })

    const getSiteTitle = () => {
        return site.value.title;
    }
    const getEmailByAccount = (account: string) => computed(() => {
        return emails.value.find(email => email.account === account) || null;
    });

    const getSocialLinkByLabel = (label: string) => computed(() => {
        return social_links.value.find(link => link.label === label) || null;
    })

    return {
        site,
        address,
        emails,
        phone,
        navigation,
        getSiteTitle,
        getEmailByAccount,
        getSocialLinkByLabel,
    }
}
