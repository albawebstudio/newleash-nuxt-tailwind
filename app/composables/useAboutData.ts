import { ref } from 'vue'

import type { Feature } from '~/models/common'
import type { About } from '~/models/about'

export function useAboutData() {
    const features = ref<Feature[]>([
        {
            title: "Rescue",
            content: [
                "We connect with local partners to find positive solutions for the animals in need. Once they are secured in a foster home you can look into their eyes and see things are going to get better for them."
            ],
            icon: "fa-life-ring",
            cta: null
        },
        {
            title: "Rehabilitate",
            content: [
                "If a dog or cat needs medical attention, extra time to understand they’re in a safe place, or simply better social skills, our team at NLR is up for the challenge. Each animal is individually assessed and cared for by our experienced team."
            ],
            icon: "fa-medkit",
            cta: null
        },
        {
            title: "Homing",
            content: [
                "Any foster parent will tell you how wonderful it is to find the right home for the pet they've been caring for. They will also tell you it's tough to let them go! That's simply because our hearts are in the right place."
            ],
            icon: "fa-home",
            cta: null
        },
        {
            title: "Educate",
            content: [
                "We are active in the communities we serve and participate in programs to help educate the public about animals in need, rescue, and responsibilities. If you are looking for someone to participate in an educational event, please contact us."
            ],
            icon: "fa-book",
            cta: null
        }
    ]);
    const about = ref<About>({
        title: "Why New Leash Rescue?",
        content: [
            "New Leash Rescue was formed to assist dogs in need of care and placement in a loving home. We have expanded our reach to include cats. We are a 100% non-profit 501c(3) organization dedicated to saving animals in need from desperate situations that deserve a new leash on life! Follow us on Facebook!"
        ],
        features: features.value
    });

    return {
        about,
        features,
    }
}

