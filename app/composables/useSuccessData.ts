import { ref } from 'vue';

import type {
    Success,
    Story,
} from "~/models/success";

export function useSuccessData() {
    const stories = ref<Story[]>([
        {
            "title": "Rizzo",
            "content": [
                "Cute baby Rizzo is now Esther and went from being left alone at an impound to a brand-new loving family to call her own fur-ever!"
            ],
            "image": {
                "src": "/images/success/rizzo.jpg",
                "alt": "Rizzo"
            }
        },
        {
            "title": "Max",
            "content": [
                "Sweet little Max came from a southern rescue where they have more pups than then can find families. After bringing him up to New Leash Rescue, he found his new family and is living happily fur-ever after!"
            ],
            "image": {
                "src": "/images/success/max.jpg",
                "alt": "Max"
            }
        },
        {
            "title": "Teddy",
            "content": [
                "Teddy was part of an out of control breeding operation in Missouri. New Leash Rescue took him in, gave him care, and he now has a posh new home and family in Minnesota that loves him like he deserves!"
            ],
            "image": {
                "src": "/images/success/teddy.jpg",
                "alt": "Teddy"
            }
        }
    ]);
    const success = ref<Success> ({
        title: "Canines for the win!",
        content: [
            "This is our favorite part. Sharing our triumphant success! We love to hear from the wonderful people who have adopted from New Leash Rescue and all about their new lives together. Please email us your New Leash Rescue success story."
        ],
        stories: stories.value
    });

    return {
        success,
        stories,
    }
}
