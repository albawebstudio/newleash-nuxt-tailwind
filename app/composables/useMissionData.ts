import { ref } from 'vue'
import type { Feature } from '~/models/common'
import type {
    Mission,
} from '~/models/mission'

export function useMissionData() {
    const missionFeatures = ref<Feature[]>([
        {
            title: "Adopt",
            content: [
                "New Leash Rescue holds adoption events most Saturdays at the Lakeville PetSmart. There are also several other events throughout the year so please check our calendar and follow us on Facebook for upcoming event notices."
            ],
            icon: "fa-paw",
            cta: {
                label: "Learn More",
                href: "/adopt"
            }
        },
        {
            title: "Foster",
            content: [
                "We are greatly in need of more foster parents! There are many animals in need waiting to come into rescue and the more fosters we have, the more we can help. Contact us today if you are able to foster!"
            ],
            icon: "fa-users",
            cta: {
                label: "Learn More",
                href: "/foster"
            }
        },
        {
            title: "Donate",
            content: [
                "All proceeds go to rescue, rehabilitation, and rehoming of the animals in our care. Your donation can help us save animals in need in many ways! Consider a monthly donation to help us save more."
            ],
            icon: "fa-gift",
            cta: {
                label: "Learn More",
                href: "/donate/now"
            }
        }
    ]);
    const mission = ref<Mission>({
        title: "Our Mission",
        content: [
            "Our mission is to help the dogs and cats who cannot help themselves. Animals in need come to us from shelters, impounds, and owner surrenders and receive the veterinary care and behavioral support they need to place them in permanent, loving homes. We collaborate with other rescues, veterinary clinics, and trainers to ensure the best placement for each animal, while also providing support and resources for families after adoption."
        ],
        missionFeatures: missionFeatures.value
    });

    return { mission, missionFeatures };
}
